import alert from './index.js';

alert();

alert({
	type: `success`,
	msg: `Everything Finished!`,
	name: `DONE`
});

alert({
	type: `warning`,
	msg: `You didn't add something!`
});

alert({
	type: `info`,
	msg: `You're awesome!`,
	name: `REMEMBER`
});

alert({
	type: `error`,
	msg: `Something went wrong!`
});
