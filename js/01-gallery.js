import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
let modalImage;

const galleryBox = galleryItems.map(({preview , description , original}) => {
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
});

gallery.insertAdjacentHTML("afterbegin", galleryBox.join(""));


gallery.addEventListener("click", (event) => {
    event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  modalImage = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="500" heigth="500"/>`, 
    {
        onShow: () => {
            window.addEventListener("keydown", closeEsc)
        },
        onClose: () => {
            window.addEventListener("keydown", closeEsc)
        }
        
    }

  )
  modalImage.show()
})

function closeEsc(event) {
   if (event.code !== "Escape"){     
    return;   
}   
    modalImage.close(); 
}
