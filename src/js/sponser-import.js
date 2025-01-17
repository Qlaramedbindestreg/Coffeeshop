const sponsorImages = [
  require('../assets/images/sponsors/sponsor-1.png'),
  require('../assets/images/sponsors/sponsor-2.png'),
  require('../assets/images/sponsors/sponsor-3.png'),
  require('../assets/images/sponsors/sponsor-4.png'),
  require('../assets/images/sponsors/sponsor-5.png'),
  require('../assets/images/sponsors/sponsor-6.png'),
  require('../assets/images/sponsors/sponsor-7.png'),
  require('../assets/images/sponsors/sponsor-8.png'),
  require('../assets/images/sponsors/sponsor-9.png'),
  require('../assets/images/sponsors/sponsor-10.png'),
  require('../assets/images/sponsors/sponsor-11.png'),
  require('../assets/images/sponsors/sponsor-12.png'),
  require('../assets/images/sponsors/sponsor-13.png'),
  require('../assets/images/sponsors/sponsor-14.png'),
  require('../assets/images/sponsors/sponsor-15.png'),
  require('../assets/images/sponsors/sponsor-16.png'),
  require('../assets/images/sponsors/sponsor-17.png'),
  require('../assets/images/sponsors/sponsor-18.png'),
  require('../assets/images/sponsors/sponsor-19.png'),
  require('../assets/images/sponsors/sponsor-20.png'),
];


document.addEventListener('DOMContentLoaded', () => {
  const sponsorLogosContainer = document.querySelector('.sponsor-logos');


  const createSponsorImageElement = (imageSrc) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.classList.add('sponsor-logo');
    imgElement.alt = 'Sponsor Logo';
    return imgElement;
  };


  sponsorImages.forEach((imageSrc) => {
    const imgElement = createSponsorImageElement(imageSrc);
    sponsorLogosContainer.appendChild(imgElement);
  });
});
