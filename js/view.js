const imageContainer = document.querySelector(".image-container");
const endContainer = document.querySelector(".end-container");
const loader = document.querySelector(".loader");

function setAttributes(element, attributes) {
  for (const [i, val] of Object.entries(attributes)) {
    element.setAttribute(i, val);
  }
}

function displayPhotos(photoGallery) {
  photoGallery.forEach((photo) => {
    const anchor = document.createElement("a");
    setAttributes(anchor, {
      href: photo.links.html,
      target: "_blank",
    });
    const imageElement = document.createElement("img");
    setAttributes(imageElement, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
      loading: "lazy",
    });

    anchor.append(imageElement);
    imageContainer.appendChild(anchor);
  });
  imageContainer.appendChild(endContainer);
  loader.hidden = true;
}

export default {
  displayPhotos,
};
