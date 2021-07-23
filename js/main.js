const getElement = (tagName, classNames, attributes) => {
		const element = document.createElement(tagName);
		if(classNames){
			element.classList.add(...classNames);
		}
		if(attributes){
				for(const attribute in attributes){
					element[attribute] = attributes[attribute];
				}
		}
		return element;
};
//Add classes and images to head?
const createHeader = (param) => {
		const header = getElement('header');
		const container = getElement('div', ['container']);
		const wrapper = getElement('div', ['header']);
//logo img
		if(param.header.logo){
			const logo = getElement('img', ['logo'], {
				src: param.header.logo,
				alt: 'Логотип ' + param.title,
			});
			wrapper.append(logo);
		};
//menu link
		if(param.header.menu){
			const nav = getElement('nav', ['menu-list']);
			const allMenuLink = param.header.menu.map(item => {
				const link = getElement('a', ['menu-link'], {
					href: item.link,
					textContent: item.title
				});
				return link;
			});
			nav.append(...allMenuLink);
			wrapper.append(nav);
		};
//social link
		if(param.header.social){
			const socialWrapper = getElement('div', ['social']);
			const allSocial = param.header.social.map(item => {
					const socialLink = getElement('a', ['social-link']);
					socialLink.append(getElement('img', [], {
						src: item.image,
						alt: item.title,
					}));
					socialLink.href = item.link;
					return socialLink;
			});
			
			socialWrapper.append(...allSocial);
			wrapper.append(socialWrapper);
		};
// add all to page		

		header.append(container);
		container.append(wrapper);
		return header;
};
// main
const createMain = ({ title, main: {genre, rating, description, trailer}}) =>{
	const main = getElement('main');
	const container = getElement('div', ['container'] );
	main.append(container);
	const wrapper = getElement('div', ['main-content'] );
	container.append(wrapper);
	const content = getElement('div', ['content'] );
	wrapper.append(content);
	if(genre){
			const genreSpan = getElement('span', 
			['genre','animated', 'fadeInRight'],
			{textContent: genre}
			);
			content.append(genreSpan);
	}
	if(rating){
			const ratingBlock = getElement('div', ['rating', 'animated', 'fadeInRight']); 
			const ratingStars = getElement('div', ['rating-stars']); 
			const ratingNumber = getElement('div', ['rating-number'],{
				textContent: `${rating}/10`
			});
			ratingBlock.append(ratingStars, ratingNumber);
			content.append(ratingBlock);
	}
	return main;
};

const movieConstructor = (selector, options) => {
	const app = document.querySelector(selector);
	app.classList.add('body-app');
	app.style.backgroundImage = options.background ?
	`url("${options.background}")` : '';
	

	document.title = options.title;
	
	if(options.header){
		app.append(createHeader(options));
	}
	if(options.main){
		app.append(createMain(options));
	}

};


movieConstructor('.app', {
	title: 'Tom Clancy`s The Divisions',
	background: 'assets/img/background.png', 
	header: {
			logo: 'assets/img/logo.png',
			social: [
				{
					title: 'Twitter',
					link: '#',
					image: 'assets/img/social/twitter.svg',
				},
				{
					title: 'Instagrsm',
					link: '#',
					image: 'assets/img/social/instagram.svg',
				},
				{
					title: 'Facebook',
					link: '#',
					image: 'assets/img/social/facebook.svg',
				}
			],
			menu: [
				{
					title: 'Описание',
					link: '#',
				},
				{
					title: 'Трейлер',
					link: '#',
				},
				{
					title: 'Отзывы',
					link: '#',
				},
			]
	},
	main: {
		genre: '2018 Шутер Боевик',
		rating: 9,
		description: 'В Tom Clancy`s The Division®2 Вашингтон предстанет таким, каким вы его еще нигде не видели: город воссоздан один в один, что позволило добиться непревзойденной правдоподобности окружающего мира. Вы сможете вблизи рассмотреть все достопримечательности, ориентиры, городские районы и вражеские логова.',
		trailer: 'https://www.youtube.com/watch?v=7NTKO4Y-JmY',

	}
});



/*new Swiper('.swiper-container', {
	loop: true,
	navigation: {
		nextEl: '.arrow',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		541: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button-active');
	menu.classList.toggle('header-active');
})

*/