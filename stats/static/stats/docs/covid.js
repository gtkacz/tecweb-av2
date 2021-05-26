//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 0) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
//   offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
//   scrollDuration = 700;

// var target = document.querySelector("footer");
// function callback(entries, observer) {
//   // The callback will return an array of entries, even if you are only observing a single item
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Show button
//       scrollToTopBtn.classList.add('showBtn')
//     } else {
//       // Hide button
//       scrollToTopBtn.classList.remove('showBtn')
//     }
//   });
// }

// let observer = new IntersectionObserver(callback);
// observer.observe(target);

// var scrollToTopBtn = document.getElementById("scrollToTopBtn")
// var rootElement = document.documentElement
// function scrollToTop() {
//   // Scroll to top logic
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   })
// }

// scrollToTopBtn.addEventListener("click", scrollToTop)

// function hover(element, link) {
//   const country_code = link.split("/")[3];
//   element.setAttribute('src', `https://www.countryflags.io/${country_code}/shiny/16.png`);
// }

// function unhover(element, link) {
//   const country_code = link.split("/")[3];
//   element.setAttribute('src', `https://www.countryflags.io/${country_code}/flat/16.png`);
// }

// var btn = $('#button');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 30) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });

// Set a variable for our button element.
// const scrollToTopButton = document.getElementById('js-top');

// // Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
// const scrollFunc = () => {
//   // Get the current scroll value
//   let y = window.scrollY;
  
//   // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
//   if (y > 0) {
//     scrollToTopButton.className = "top-link show";
//   } else {
//     scrollToTopButton.className = "top-link hide";
//   }
// };

// window.addEventListener("scroll", scrollFunc);

// const scrollToTop = () => {
//   // Let's set a variable for the number of pixels we are from the top of the document.
//   const c = document.documentElement.scrollTop || document.body.scrollTop;
  
//   // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
//   // We'll also animate that scroll with requestAnimationFrame:
//   // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//   if (c > 0) {
//     window.requestAnimationFrame(scrollToTop);
//     // ScrollTo takes an x and a y coordinate.
//     // Increase the '10' value to get a smoother/slower scroll!
//     window.scrollTo(0, c - c / 10);
//   }
// };

// // When the button is clicked, run our ScrolltoTop function above!
// scrollToTopButton.onclick = function(e) {
//   e.preventDefault();
//   scrollToTop();
// }

