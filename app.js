import sirv from 'sirv'
import polka from 'polka'
import compress from 'compression'
import { json } from 'body-parser'
import * as fs from 'fs'
import { resolve } from 'path'

let app

export default function serve(opts) {
  const dev = opts.dev
  const host = opts.host
  const port = opts.port

  const indexFile = fs.readFileSync(resolve(opts.publicPath, 'index.html'))

  async function logger(req, _res, next) {
    console.log(`~> Received ${req.method} on ${req.url}`)
    next() // move on
  }

  return {
    name: 'appserver',
    async writeBundle() {
      if (app) {
        app.server.close()
      } else {
        closeServerOnTermination()
      }

      const serveAssets = sirv(opts.publicPath, {
        dev: dev,
      })

      app = polka({
        onNoMatch: (_req, res) => {
          res.writeHead(200, { 'content-type': 'text/html' })
          res.write(indexFile)
          res.end()
        },
      })
        .use(json(), compress(), logger, serveAssets)
        .get('/')
        .listen(
          {
            host: host,
            port: port,
          },
          (err) => {
            if (err) throw err
            console.log(`> Ready on ${host}:${port}`)
          }
        )
    },
  }
}

function closeServerOnTermination() {
  const terminationSignals = ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP']
  terminationSignals.forEach((signal) => {
    process.on(signal, () => {
      if (app) {
        app.server.close()
        process.exit()
      }
    })
  })
}
