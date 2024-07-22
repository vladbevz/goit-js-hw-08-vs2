import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')
console.log(galleryEl)
// create images elements

function createImagesElements (items){
    return items.map(item => `<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`)
}

function createImagesItems () {
    galleryEl.innerHTML = createImagesElements(galleryItems).join('')


}
createImagesItems();


//create modal window and click

galleryEl.addEventListener('click', onImageClick)
function onImageClick(el){
    el.preventDefault();
    if (el.target.classList.contains('gallery')){
        return
    }
    const source = el.target.dataset.source;
    const instance = basicLightbox.create(`
        <img src="${source}" width="800" height="600">
    `)
    
    instance.show()


}


