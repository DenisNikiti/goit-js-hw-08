import SimpleLightbox from "simplelightbox";

import { galleryItems } from './gallery-items.js';

// Change code below this line




const galleryEl = document.querySelector(".gallery")
const markup = CreateGallery(galleryItems)
galleryEl.insertAdjacentHTML("beforeend", markup)

   

galleryEl.addEventListener("click", onGalleryClick)


function onGalleryClick(evt) {
    evt.preventDefault()
     
    // if (evt.target.nodeName !== "A") {
    //     return;
    

    
    // }
    
    
   
const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)

instance.show()

}



function CreateGallery(galleryItems) {
     return galleryItems.map( ({preview, original, description}) => {
         return  ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>
`
     }).join("")

   
}




console.log(galleryItems);

 
  