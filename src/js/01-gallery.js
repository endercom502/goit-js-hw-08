// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryPictures = document.querySelector('div.gallery');
const picturesBig = galleryItems
  .map(element => {
    const image = `
  <a class="gallery__item" href="${element.original}" >
    <img 
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
      title="${element.description}"
    />
  </a>

`;
    return image;
  })
  .join(' ');
galleryPictures.insertAdjacentHTML('afterbegin', picturesBig);
new SimpleLightbox('.gallery a', { captionDelay: 250 });
console.log(galleryItems);
