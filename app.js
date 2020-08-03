import axios from 'axios';
import cheerio from 'cheerio';
import Nightmare from 'nightmare';
const nightmare = Nightmare({ show: true });

const getUsers = () => {
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
    
    nightmare
    .goto('https://www.instagram.com/')
    .wait('input[name="username"]')
    .type('input[name="username"]', 'spicycarbonara')
    .type('input[name="password"]', 'BrianSitenga99')
    .click('button[type="submit"]')
    .wait('input[placeholder="Search"]')
    .type('input[placeholder="Search"]', 'yayforearth')
    .click('input[placeholder="Search"]')
    .wait('div.fuqBx a')
    .click('div.fuqBx a')
    .wait('h2._7UhW9')
    .click('div.v1Nh3 a')
    .wait('button.sqdOP span')
    .click('button.sqdOP span')
    .wait('a.notranslate')
    .scrollIntoView('a.notranslate:last-child')
    .wait('div[style="height: 356px; overflow-y: auto; overflow-x: hidden;"]')

};
