const { spawn } = require('child_process');

let hotReloadServer;
let appWebServer;

try {
  hotReloadServer = spawn('npm', ['run', 'start:hotreload'], { stdio: 'inherit' });
} catch(err) {
  console.error('Could not start the hot reload server');
  console.error(err.stack);
  process.exit(-1);
}

try {
  appWebServer = spawn('npm', ['run', 'start:devserver'], { stdio: 'inherit' });
} catch(err) {
  console.error('Could not start the dev server');
  console.error(err.stack);
  process.exit(-1);
}
