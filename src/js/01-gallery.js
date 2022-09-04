// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);


function onCreateImgCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                     class="gallery__image"
                     src="${preview}"
                     data-source="${original}"
                     alt="${description}"
                  />
            </a>
         </div>`
    })
        .join('');
};
const imgGallery = onCreateImgCard(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgGallery);

new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.9,
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
  alertError: false,
  maxZoom: 5,
});

console.log(galleryRef); 