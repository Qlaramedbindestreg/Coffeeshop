import '../articles.json';

const leftSection = document.querySelector('.left-section');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const pageInfo = document.querySelector('.page-info');


const postsPerPage = 4;
let currentPage = 1;
let totalPages = 0;
let posts = [];


const loadImage = (imagePath) => {
  return `/assets/posts/${imagePath}`; 
};


const createPostBox = (imageSrc, title, publishedDate, content) => {
  const box = document.createElement('div');
  box.classList.add('box');

  const imgContainer = document.createElement('div');
  const imgElement = document.createElement('img');
  imgElement.src = imageSrc; 
  imgElement.alt = 'Post Thumbnail';
  imgContainer.appendChild(imgElement);

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  const h1 = document.createElement('h1');
  h1.textContent = title;

  const pPublished = document.createElement('p');
  pPublished.classList.add('published');
  pPublished.textContent = `Published: ${publishedDate}`;

  const pContent = document.createElement('p');
  pContent.textContent = content;

  const button = document.createElement('button');
  button.textContent = 'Read More';

  contentDiv.appendChild(h1);
  contentDiv.appendChild(pPublished);
  contentDiv.appendChild(pContent);
  contentDiv.appendChild(button);

  box.appendChild(imgContainer);
  box.appendChild(contentDiv);

  return box;
};


const scrollToArticles = () => {
  leftSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};


const displayPosts = (page) => {
  leftSection.innerHTML = '';

  const start = (page - 1) * postsPerPage;
  const end = page * postsPerPage;
  const postsToDisplay = posts.slice(start, end);

  postsToDisplay.forEach(post => {
    const imageSrc = loadImage(post.image); 

    const postBox = createPostBox(imageSrc, post.title, post.published, post.content);
    leftSection.appendChild(postBox);

    const button = postBox.querySelector('button');
    button.addEventListener('click', () => {
      const popup = createPopup(imageSrc, post.title, post.published, post.content);
      document.body.appendChild(popup);
      popup.style.display = 'flex';
    });
  });

  pageInfo.textContent = `Page ${page} of ${totalPages}`;
};

// fetch
const fetchPosts = async () => {
  try {
    const response = await fetch('../articles.json');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    posts = data;

    totalPages = Math.ceil(posts.length / postsPerPage);
    displayPosts(currentPage);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};


previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayPosts(currentPage);
    scrollToArticles(); 
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayPosts(currentPage);
    scrollToArticles(); 
  }
});


fetchPosts();

const disableBackgroundScroll = () => {
  document.body.style.overflow = 'hidden';
};


const enableBackgroundScroll = () => {
  document.body.style.overflow = '';
};

const createPopup = (imageSrc, title, publishedDate) => {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.style.display = 'none'; 

  const overlay = document.createElement('div');
  overlay.classList.add('popup-overlay');
  overlay.addEventListener('click', () => {
    closePopup(popup); 
  });


  const closeButton = document.createElement('div');
  closeButton.classList.add('close-btn');
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => {
    closePopup(popup);
  });


  const popupImage = document.createElement('img');
  popupImage.src = imageSrc;
  popupImage.alt = 'Post Thumbnail';
  popupImage.classList.add('popup-image');


  const popupContent = document.createElement('div');
  popupContent.classList.add('popup-content');

  const popupTitle = document.createElement('h1');
  popupTitle.textContent = title;

  const popupPublished = document.createElement('p');
  popupPublished.classList.add('published');
  popupPublished.textContent = `Published: ${publishedDate}`;

  const popupArticle = document.createElement('p');
  popupArticle.classList.add('article-content');


  popupArticle.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
    vehicula, lacus a malesuada ultrices, ligula erat tincidunt erat, id 
    vulputate sapien enim a felis. Curabitur ac libero auctor, posuere elit 
    nec, dictum eros. Praesent nec ultricies nulla. Fusce in nisl id nunc 
    rhoncus tempus nec a lorem. Mauris vitae neque at ligula volutpat 
    consectetur.
    <br/><br/>
    Pellentesque in massa nec lacus fermentum tincidunt. Quisque non ornare 
    orci, et sagittis magna. Suspendisse nec nulla id neque porttitor 
    volutpat. Vivamus tincidunt, sapien ut tristique porttitor, felis 
    sapien ultricies ligula, id vestibulum purus neque vitae sapien. Ut id 
    turpis convallis, sollicitudin augue sed, dictum risus.
    <br/><br/>
    Curabitur tempus, felis quis iaculis sollicitudin, lorem justo malesuada 
    sapien, sit amet ornare turpis ligula in turpis. Donec id risus vitae 
    justo consequat laoreet. Praesent in nisi at ligula suscipit feugiat. 
    Aliquam scelerisque lorem a magna malesuada mollis.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
    vehicula, lacus a malesuada ultrices, ligula erat tincidunt erat, id 
    vulputate sapien enim a felis. Curabitur ac libero auctor, posuere elit 
    nec, dictum eros. Praesent nec ultricies nulla. Fusce in nisl id nunc 
    rhoncus tempus nec a lorem. Mauris vitae neque at ligula volutpat 
    consectetur.
    <br/><br/>
    Pellentesque in massa nec lacus fermentum tincidunt. Quisque non ornare 
    orci, et sagittis magna. Suspendisse nec nulla id neque porttitor 
    volutpat. Vivamus tincidunt, sapien ut tristique porttitor, felis 
    sapien ultricies ligula, id vestibulum purus neque vitae sapien. Ut id 
    turpis convallis, sollicitudin augue sed, dictum risus.
    <br/><br/>
    Curabitur tempus, felis quis iaculis sollicitudin, lorem justo malesuada 
    sapien, sit amet ornare turpis ligula in turpis. Donec id risus vitae 
    justo consequat laoreet. Praesent in nisi at ligula suscipit feugiat. 
    Aliquam scelerisque lorem a magna malesuada mollis.
  `;

  popupContent.appendChild(popupTitle);
  popupContent.appendChild(popupPublished);
  popupContent.appendChild(popupArticle);

  popup.appendChild(overlay); 
  popup.appendChild(closeButton);
  popup.appendChild(popupImage);
  popup.appendChild(popupContent);

  return popup;
};


const closePopup = (popup) => {
  document.body.removeChild(popup); 
  enableBackgroundScroll(); 
};
// search functionality
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const searchDropdown = document.querySelector('.search-results'); 
const searchContainer = document.querySelector('.search-bar'); 


const filterPosts = (searchTerm) => {
  searchDropdown.innerHTML = ''; 

  const matchingPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (matchingPosts.length > 0) {
    matchingPosts.forEach(post => {
     
      const dropdownItem = document.createElement('div');
      dropdownItem.classList.add('dropdown-item');
      dropdownItem.textContent = post.title;

   
      dropdownItem.addEventListener('click', () => {
    
        const imageSrc = loadImage(post.image); 
        const popup = createPopup(imageSrc, post.title, post.published, post.content);
        
        document.body.appendChild(popup); 
        popup.style.display = 'flex'; 

     
        searchDropdown.style.display = 'none';
        searchInput.value = '';
      });

      searchDropdown.appendChild(dropdownItem);
    });

    searchDropdown.style.display = 'block'; 
  } else {
    const noResults = document.createElement('div');
    noResults.classList.add('no-results');
    noResults.textContent = "No results found";
    searchDropdown.appendChild(noResults);
    searchDropdown.style.display = 'block'; 
  }
};


searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    filterPosts(searchTerm); 
  } else {
    searchDropdown.style.display = 'none'; 
  }
});


searchIcon.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    filterPosts(searchTerm); 
  }
});


document.addEventListener('click', (e) => {
  if (!searchContainer.contains(e.target)) {
    searchDropdown.style.display = 'none';
  }
});
