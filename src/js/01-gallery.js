import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryEl = document.querySelector(".gallery")
const markup = CreateGallery(galleryItems)
galleryEl.insertAdjacentHTML("beforeend", markup)

function CreateGallery(galleryItems) {
     return galleryItems.map( ({preview, original, description}) => {
         return  ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
  </div>
`
     }).join("")

   
}
let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData:"alt",});


console.log(galleryItems);
 
  