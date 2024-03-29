/**
 * CLI Alerts
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Deepak <https://www.linkedin.com/in/d-barwal/>
 */
import chalk from 'chalk';
import sym from 'log-symbols';

const green = chalk.green;
const greenInverse = chalk.green.bold.inverse;
const red = chalk.red.bold;
const redInverse = chalk.red.bold.inverse;
const orange = chalk.hex('#FFA500');
const orangeInverse = chalk.hex('#FFA500').bold.inverse;
const blue = chalk.blue;
const blueInverse = chalk.blue.bold.inverse;

export default options => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: ``
	};
	const opts = {...defaultOptions, ...options};
	const {type, msg, name} = opts;
	const printName = name ? name : type.toUpperCase();

	if (type === `success`) {
		console.log(`\n${sym.success}  ${greenInverse(` ${printName} `)} ${green(msg)}\n`);
	}

	if (type === `error`) {
		console.log(`\n${sym.error}  ${redInverse(` ${printName} `)} ${red(msg)}\n`);
	}

	if (type === `warning`) {
		console.log(`\n${sym.warning}  ${orangeInverse(` ${printName} `)} ${orange(msg)}\n`);
	}

	if (type === `info`) {
		console.log(`\n${sym.success}  ${blueInverse(` ${printName} `)} ${blue(msg)}\n`);
	}
};
