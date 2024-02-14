import alert from './index.js';

alert();

alert({
	type: `success`,
	msg: `All done!`
});

alert({
	type: `warning`,
	msg: `You didn't add something!`
});

alert({
	type: `info`,
	msg: `You're awesome!`
});

alert({
	type: `error`,
	msg: `Something went wrong!`
});
