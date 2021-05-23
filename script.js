var header = document.getElementById("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("show", window.scrollY > 0);
});

// var i = 0; // Start Point
// var images = []; // Images Array
// var time = 3000; // Time Between Switch

// // Image List
// images[0] = "../file/img/slide1.jpg";
// images[1] = "../file/img/slide2.jpg";
// images[2] = "../file/img/slide3.jpg";
// images[3] = "../file/img/slide4.jpg";

// // Change Image
// function changeImg() {
//   document.slide.src = images[i];

//   // Check If Index Is Under Max
//   if (i < images.length - 1) {
//     // Add 1 to Index
//     i++;
//   } else {
//     // Reset Back To O
//     i = 0;
//   }

//   // Run function every x seconds
//   setTimeout("changeImg()", time);
// }

// // Run function when page loads
// window.onload = changeImg;
