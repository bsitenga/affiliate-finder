const axios = require('axios');
const cheerio = require('cheerio');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const getUsers = () => {
	console.log('tester');

	Nightmare.action('scrollIntoView', function(selector, done) {
		this.evaluate_now(
			(selector) => {
				// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
				document.querySelector(selector).scrollIntoView(true);
			},
			done,
			selector
		);
    });
    
    
};
