import axios from 'axios';
import cheerio from 'cheerio';
import Nightmare from 'nightmare';
const nightmare = Nightmare({ show: true });

export const getUsers = () => {
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
