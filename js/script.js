let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


// covid-19 
var divElement = document.getElementById('viz1669880626723');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width = '100%';
vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);



// Nintendo Switch 
var divElement = document.getElementById('viz1669879625914');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 800) {
  vizElement.style.minWidth = '1600px';
  vizElement.style.maxWidth = '100%';
  vizElement.style.minHeight = '950px';
  vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
}
else if (divElement.offsetWidth > 500) {
  vizElement.style.minWidth = '1600px';
  vizElement.style.maxWidth = '100%';
  vizElement.style.minHeight = '950px';
  vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
}
else {
  vizElement.style.width = '100%';
  vizElement.style.minHeight = '850px';
  vizElement.style.maxHeight = (divElement.offsetWidth * 1.77) + 'px';
}

var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
