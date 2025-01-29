const imageSources = [
  "assets/trail.jpg",
  "assets/lakesunset.jpg",
  "assets/cabin.jpg",
  "assets/doe.jpg",
  "assets/starrynight.jpg",
];

function addThumbnail(imageSource) {
  // 1.1 Create the element
  let image = document.createElement("img");
  // 1.2 Customize the element
  image.setAttribute("src", imageSource);
  image.classList.add("thumbnail");
  // 1.3 Append the element
  let thumbCont = document.getElementById("thumbnail-container");
  thumbCont.appendChild(image);
  // 1.4 Add the onclick
  //image.addEventListener("click", onclickFunction(imageSource));
  image.onclick = function onclickFunction() {
    let fullImage = document.getElementById("fullsize-image");
    fullImage.setAttribute("src", imageSource);
  }
  
}

function addAllThumbnails() {
  // 2.1 Loop through imageSources
  for (let i = 0; i < imageSources.length; i++) {
    // 2.2 Call addThumbnail each iteration 
    addThumbnail(imageSources[i]);
  }
}

// 2.3 Call addAllThumbnails
addAllThumbnails();

// LevelUp Display the first image on page load
let fullImage = document.getElementById("fullsize-image");
fullImage.setAttribute("src", imageSources[0]);


