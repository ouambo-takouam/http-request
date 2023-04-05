const { get } = require('http');

get('http://www.google.com', (res) => {
	res.on('data', (chunk) => {
		console.log(`Data available: ${chunk}`);
	});
	res.on('end', () => {
		console.log('No longer data there');
	});
});
