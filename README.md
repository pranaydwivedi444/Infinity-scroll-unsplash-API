# Infinity-scroll-unsplash-API
Infinity Scroll - Unsplash API
This is a web app that allows users to browse a random selection of photos from the Unsplash API using an infinite scroll feature. The app also includes responsive design, intersection observer API, and lazy loading.
![Infinity Scroll (1)](https://user-images.githubusercontent.com/48515987/224831810-5d29bf1c-cab1-4b4f-aa10-f91eb33066af.gif)

## Features
Responsive Design
The app is designed to be responsive across a variety of device sizes. The layout of the app adjusts to fit smaller screens, allowing for optimal viewing on devices of all sizes.

## Intersection Observer API
The app uses the Intersection Observer API to detect when the user has scrolled to the end of the page. When the end of the page is reached, the app loads additional images from the Unsplash API.

## Lazy Loading
Images are lazy-loaded using the loading="lazy" attribute, which helps improve the overall performance of the app by deferring the loading of images until they are needed.

## MVC Architecture
The app follows the Model-View-Controller (MVC) architectural pattern, separating concerns between the different parts of the application. This makes the code easier to maintain and extend over time.

## Process
The app was built using HTML, CSS, and JavaScript. The app was designed with responsive design principles in mind, using media queries to adjust the layout of the app based on the size of the user's device.
## How to Use
To use this application, you will need to register for the Unsplash API and obtain an access key. Once you have obtained a key, replace the API_KEY variable in model.js with your own key.
 The app uses the Unsplash API to fetch random photos, which are displayed on the page. The app uses the Intersection Observer API to detect when the user has scrolled to the end of the page, at which point the app fetches additional images from the API.

The app follows the MVC architectural pattern, separating concerns between the different parts of the application. The model contains the code that interacts with the Unsplash API, the view contains the code that handles rendering the app to the screen, and the controller contains the code that coordinates the interaction between the model and the view.

Overall, the app is a simple and effective way to browse a random selection of photos from the Unsplash API. Its use of responsive design, intersection observer API, and lazy loading help make it a performant and user-friendly experience.

## How it Works
When the user opens the application, the controller initializes the Intersection Observer API and starts observing the end of the image container. When the end of the container is in view, the controller calls the model to fetch more photos from the Unsplash API. Once the photos are fetched, the controller passes them to the view to be rendered in the DOM. The view creates a new img element for each photo and appends it to an a element that links to the original photo on Unsplash. The Intersection Observer API is then re-initialized to observe the new end of the container.

## Conclusion
This is a simple web application that demonstrates the use of the Unsplash API and the Intersection Observer API for infinite scrolling. The use of the MVC architecture makes the application easy to maintain and extend.
