import '../scss/main.scss';

import logo from '../assets/logo-white.png'; 
import '../assets/heroimg.png';
import '../assets/coffe.png';
import '../assets/pour.png';
import './header.js';
import './sponser-import.js';
import './footer-import.js';
import './articles.js';
import './burger-menu.js'

const logoSection = document.querySelector('.header-left');

document.addEventListener('DOMContentLoaded', () => {
  const logoElement = document.createElement('img');
  logoElement.src = logo; 
  logoElement.classList.add('logo-login'); 
  logoElement.alt = 'Newsify Logo';
  logoSection.prepend(logoElement);
});

const heroSection = document.querySelector('.hero');


const slides = [
  {
    image: require('../assets/heroimg.png'),
    text: 'To create an environment in which knowledge about coffee and its sphere can be obtained.',
  },
  {
    image: require('../assets/coffe.png'),
    text: 'This is a great introduction to the coffee industry\'s best beans on the planet.',
  },
  {
    image: require('../assets/pour.png'),
    text: 'Coffee in code out, this is the way of eternal life and empowerment of the soul.',
  },
];


let currentSlide = 0;


const heroImage = document.createElement('img');
heroImage.src = slides[currentSlide].image;
heroImage.alt = 'Hero Image';
heroImage.classList.add('hero-img');
heroSection.appendChild(heroImage);

const heroTextBox = document.createElement('div');
heroTextBox.classList.add('hero-text-box');
heroTextBox.textContent = slides[currentSlide].text;
heroSection.appendChild(heroTextBox);


const leftArrow = document.createElement('button');
leftArrow.classList.add('slider-arrow', 'left-arrow');
leftArrow.textContent = '<'; 
heroSection.appendChild(leftArrow);

const rightArrow = document.createElement('button');
rightArrow.classList.add('slider-arrow', 'right-arrow');
rightArrow.textContent = '>'; 
heroSection.appendChild(rightArrow);


function updateSlider(index) {
 
  currentSlide = (index + slides.length) % slides.length;

  heroImage.src = slides[currentSlide].image;
  heroTextBox.textContent = slides[currentSlide].text;
}


leftArrow.addEventListener('click', () => updateSlider(currentSlide - 1));
rightArrow.addEventListener('click', () => updateSlider(currentSlide + 1));


