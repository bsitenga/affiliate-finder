const axios = require('axios');
const cheerio = require('cheerio');
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

const app = document.getElementById("master-container");
app.innerHTML = '<button onclick="run()">Find</button>';

window.getUsers = () => {
	console.log('tester');
    
	Nightmare.action('scrollIntoView', function(selector, done) {
		this.evaluate_now(
			(selector) => {
				document.querySelector(selector).scrollIntoView(true);
			},
			done,
			selector
		);
    });
    

};
