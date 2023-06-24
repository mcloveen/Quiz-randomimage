"use strict";

const unsplashAccessKey = 'sDCCu3JDc5gKWZglACdrFPXvMIV-HgtUFPUluPZvXwY';

const randomImageButton = document.getElementById('randomImageButton');
const searchInput = document.getElementById('searchInput');
const imageContainer = document.getElementById('imageContainer');

randomImageButton.addEventListener('click', function() {
  const query = searchInput.value;
  if (query) {
    getPhotos(query)
      .then(photos => {
        imageContainer.innerHTML = '';
        photos.forEach(photo => {
          const img = document.createElement('img');
          img.src = photo.urls.small;
          imageContainer.appendChild(img);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
});

// // API search func
// async function getPhotos() {
//     try {
//       const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=10`, {
//         headers: {
//           'Authorization': `Client-ID ${unsplashAccessKey}`
//         }
//       });
      
//       const data = await response.json();
      
//       // return 10 img
//       return data.results;
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }

async function getPhotos(query) {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=10`, {
      headers: {
        'Authorization': `Client-ID ${unsplashAccessKey}`
      }
    });

    const data = await response.json();

    return data.results;
  } catch (error) {
    throw new Error('Error.');
  }
}
