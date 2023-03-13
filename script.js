const API_KEY = "";
const count = 10;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;
const imageContainer = document.querySelector(".image-container");
const endContainer = document.querySelector(".end-container");
const loader = document.querySelector(".loader");
// let photoGallery = [];
async function getUnsplashPictures() {
  loader.hidden = false;
  const res = await fetch(API_URL);
  const photoGallery = await res.json();
  console.log(photoGallery);
  displayPhotos(photoGallery);
}

function setAttributes(element, attributes) {
  for (const [i, val] of Object.entries(attributes)) {
    element.setAttribute(i, val);
  }
}

function displayPhotos(photoGallery) {
  photoGallery.forEach((photo) => {
    const anchor = document.createElement("a");
    // anchor.setAttribute("href", photo.links.html);
    // anchor.setAttribute("target", "_blank");
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
    // imageElement.setAttribute("src", photo.urls.regular);
    // imageElement.setAttribute("alt", photo.alt_description);
    // imageElement.setAttribute("title", photo.alt_description);
    // imageElement.setAttribute("loading", "lazy");

    anchor.append(imageElement);
    imageContainer.appendChild(anchor);
  });
  // Move the endContainer element to the end of the imageContainer element
  imageContainer.appendChild(endContainer);
  loader.hidden = true;
}

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio <= 0) return;
    console.log(entries[0].intersectionRatio);
    // load more content;
    getUnsplashPictures();
  },
  {
    rootMargin: "90px",
  }
);
// start observing
intersectionObserver.observe(endContainer);

// getUnsplashPictures();
