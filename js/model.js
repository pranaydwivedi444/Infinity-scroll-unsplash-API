const API_KEY = "alUECmJDvNd5TCwNbmhcvuuZWDctvNHTRe9IRPl1U6Q";
const count = 10;
const API_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;

async function getUnsplashPictures() {
  const res = await fetch(API_URL);
  const photoGallery = await res.json();
  return photoGallery;
}

export default {
  getUnsplashPictures,
};
