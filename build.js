const fs = require('fs');
const path = require('path');

const file = fs.readFileSync('./index.js', 'utf-8');

try {
	fs.mkdirSync(path.resolve() + '/dist');
} catch (e) {}

fs.writeFileSync('./dist/cli.js', '#!/usr/bin/env node \n' + file, 'utf-8');
