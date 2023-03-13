import model from "./model.js";
import view from "./view.js";
const endContainer = document.querySelector(".end-container");
// import { endContainer } from "./view.js";
const intersectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) return;
  model.getUnsplashPictures().then((photoGallery) => {
    view.displayPhotos(photoGallery);
  });
});

intersectionObserver.observe(endContainer);

model.getUnsplashPictures().then((photoGallery) => {
  view.displayPhotos(photoGallery);
});
