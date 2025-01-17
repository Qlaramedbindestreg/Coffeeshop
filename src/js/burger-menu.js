document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    if (burgerMenu && dropdownMenu) {
      burgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');  // Toggle the 'show' class on click
      });
    } else {
      console.error('Elements not found');
    }
  
    console.log('Burger Menu:', burgerMenu);
    console.log('Dropdown Menu:', dropdownMenu);
  });
  