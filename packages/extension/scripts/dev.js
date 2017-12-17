const debounce = require('lodash.debounce')
const { exec } = require('shelljs')
const chokidar = require('chokidar');

const watched = [
  'webpack/**/*',
  '.env.dev',
]

function runCmd() {
  const cmd = 'NODE_ENV="development" webpack-dev-server --color --progress --config webpack/webpack.config.babel.js'
  return exec(cmd, { async: true })
}

let child = runCmd()
const restart = () => {
  child.kill()
  console.log('> Killed webpack-dev-server\n')
  child = runCmd()
}

chokidar.watch(watched).on('all', debounce(restart, 500));
