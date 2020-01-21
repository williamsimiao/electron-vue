const requireg = require('requireg')
try {
  requireg('dotenv')
  requireg('ngrok')
  requireg('http-server')
  requireg('chromium')
  requireg('minimist')
} catch (err) {
  console.log(`
    ########################################################################
    ##       ---YOU NEED TO INSTALL SOME GLOBAL DEPENDENCIES---           ##
    ##                ---FOR A BETTER DEV EXPERIENCE---                   ##
    ##                                                                    ##
    ##        npm i -g dotenv ngrok http-server chromium minimist         ##
    ##                                                                    ##
    ########################################################################
    `)
  process.exit()
}

requireg('dotenv').config()
const ngrok = requireg('ngrok')
const httpServer = requireg('http-server')
const chromium = requireg('chromium')
const { execFile } = requireg('child_process')
const args = requireg('minimist')(process.argv.slice(2))

const ENV = args.env || 'dev'

if (ENV === 'dev') {
  return dev()
} else if (ENV === 'prod') {
  return prod()
} else {
  console.log('Acceptable --env is dev or prod ')
  process.exit()
}

function dev () {
  const HOST = process.env.HOST || 'localhost'
  const PORT = process.env.PORT || 3000
  const URL = `http://${HOST}:${PORT}`

  execFile(
    `${chromium.path}`,
    [
      '--args',
      // '--incognito',
      '--disable-notifications',
      '--disable-infobars',
      // '--auto-open-devtools-for-tabs',
      '--disable-web-security',
      '--ignore-certificate-errors',
      '--allow-running-insecure-content',
      '--user-data-dir',
      '--aggressive-cache-discard',
      `${URL}`
    ],
    (err, stdout) => {
      if (err) {
        throw err
      }
      console.log(stdout)
    }
  )
  process.exit()
}

function prod () {
  const HOST = process.env.HOST_BUILD || 'localhost'
  const PORT = process.env.PORT_BUILD || 3001

  const server = httpServer.createServer({ root: './dist' })
  server.listen(PORT, HOST, () => {
    console.log(`HTTP Server started at port ${PORT}`)

    ngrok
      .connect(PORT)
      .then(res => {
        const URL = res

        console.log(URL)

        execFile(`${chromium.path}`, [
          '--args',
          // '--incognito',
          '--disable-notifications',
          '--disable-infobars',
          // '--auto-open-devtools-for-tabs',
          '--disable-web-security',
          '--ignore-certificate-errors',
          '--allow-running-insecure-content',
          '--user-data-dir',
          '--aggressive-cache-discard',
          `${URL}`,
          `http://${HOST}:${PORT}`
        ])
      })
      .catch(err => {
        throw err
      })
  })
}
