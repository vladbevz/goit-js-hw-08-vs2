import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEL = document.querySelector('.gallery');

function createImagesElements (items) {
    return items.map(item => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`)

}

function createImagesItems(){
    galleryEL.innerHTML = createImagesElements(galleryItems).join('');

}

createImagesItems();

const lightbox = new SimpleLightbox(`.gallery a`, { 
    captionsData: "alt",  
    captionType: "alt",
    captionDelay: 250,
});
