const updateJson = require('update-json');
const minimist = require('minimist');

const {
	_: [ version ],
	path = './package.json',
	silent = false,
	safe = false
} = minimist(process.argv.slice(2));

// Check version - Throw error if it is undefined
if (['undefined', 'null', '', undefined, null].some(value => value === version)) {
	return throwError('Expected version but got: ' + version);
}

// Update package
updateJson(path, {version}, error => {
	if (error) {
		return throwError('Couldn\'t found package.json at path: ' + path);
	}

	log('Package version updated to: ' + version);
});

/**
 * Log messages if silent mode isn't active
 *
 * @param {string} message
 * @returns {void}
 */
function log(message) {
	if (silent) { return; }

	console.log(message);
}

/**
 * Throw error if safe mode isn't active
 *
 * @param {string} message
 * @returns {void}
 */
function throwError(message) {
	if (safe) {
		return console.warn(message);
	}

	throw new Error(message);
}