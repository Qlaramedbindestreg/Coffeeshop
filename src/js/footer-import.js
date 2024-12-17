import logo from '../assets/logo-white.png'; 

document.addEventListener('DOMContentLoaded', () => {

  const footerLogoContainer = document.querySelector('.footer-logo-container');

  
  const logoElement = document.createElement('img');
  logoElement.src = logo; // Use the imported logo
  logoElement.classList.add('footer-logo'); // Add CSS class for styling
  logoElement.alt = 'World Barista Cup Logo'; // Set alt text
  footerLogoContainer.appendChild(logoElement);
});

const instagramImages = [
    require('../assets/images/instagram-feed/instagram-image-1.png'),
    require('../assets/images/instagram-feed/instagram-image-2.png'),
    require('../assets/images/instagram-feed/instagram-image-3.png'),
    require('../assets/images/instagram-feed/instagram-image-4.png'),
    require('../assets/images/instagram-feed/instagram-image-5.png'),
    require('../assets/images/instagram-feed/instagram-image-6.png'),
    require('../assets/images/instagram-feed/instagram-image-7.png'),
    require('../assets/images/instagram-feed/instagram-image-8.png'),
    require('../assets/images/instagram-feed/instagram-image-9.png'),
  ];
  

  document.addEventListener('DOMContentLoaded', () => {
  
    const instagramGrid = document.querySelector('.instagram-grid');
  

    const createInstagramImageElement = (imageSrc) => {
      const imgElement = document.createElement('img');
      imgElement.src = imageSrc; 
      imgElement.alt = 'Instagram Feed Image'; 
      imgElement.classList.add('instagram-image'); 
      return imgElement;
    };

    instagramImages.forEach((imageSrc) => {
      const imgElement = createInstagramImageElement(imageSrc);
      instagramGrid.appendChild(imgElement);
    });
  });
  