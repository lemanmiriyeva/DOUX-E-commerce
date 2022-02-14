/*Modal*/
document.getElementById("btn-modal").addEventListener("click", function () {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("modal").classList.add("is-visible");
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("modal").classList.remove("is-visible");
});
document.getElementById("overlay").addEventListener("click", function () {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("modal").classList.remove("is-visible");
});

/*Main*/
var images = document.querySelectorAll(".main-image");
var containers = document.querySelectorAll(".containers");
var headers = document.querySelectorAll(".main-header");
var arrows = document.querySelectorAll(".arrow");
for(let i=0; i<arrows.length;i++){
  arrows[i].style.visibility="hidden";
}
function hover1() {
  for (let i = 0; i < images.length; i++) {
    containers[i].onmouseover = function () {
      images[i].style.display = "none";

      if (i == 0) {
        containers[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background.png')";

        containers[i].style.alignItems = "center";
        headers[i].style.color = "white";
        arrows[i].style.visibility = "visible";
      } else if (i == 1) {
        containers[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background (1).png')";
        containers[i].style.alignItems = "center";
        headers[i].style.color = "white";
        arrows[i].style.visibility = "visible";
      } else {
        containers[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background (2).png')";
        containers[i].style.alignItems = "center";
        headers[i].style.color = "white";
        arrows[i].style.visibility = "visible";
      }
    };
    containers[i].onmouseout = function () {
      images[i].style.display = "block";
      containers[i].style.backgroundImage = "none";
      containers[i].style.height = "none";
      containers[i].style.alignItems = "flex-start";
      headers[i].style.color = "#181818";
      arrows[i].style.visibility = "hidden";
    };
  }
}

/*Category*/
var categories = document.querySelectorAll(".category");
var categoryImages = document.querySelectorAll(".category-image");
var categoryHeaders = document.querySelectorAll(".category-header");

function hover2() {
  for (let i = 0; i < categories.length; i++) {
    categories[i].onmouseover = function () {
      categoryImages[i].style.display = "none";
      if (i == 0) {
        categories[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background (6).png')";

        categories[i].style.alignItems = "center";
        categoryHeaders[i].style.color = "white";
      } else if (i == 1) {
        categories[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background (3).png')";
        categories[i].style.alignItems = "center";
        categoryHeaders[i].style.color = "white";
      } else if (i == 2) {
        categories[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background (4).png')";
        categories[i].style.alignItems = "center";
        categoryHeaders[i].style.color = "white";
      } else if (i == 3) {
        categories[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background (5).png')";
        categories[i].style.alignItems = "center";
        categoryHeaders[i].style.color = "white";
      } else if (i == 4) {
        categories[i].style.backgroundImage =
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/home_landing/Background (6).png')";
        categories[i].style.alignItems = "center";
        categoryHeaders[i].style.color = "white";
      }
    };
    categories[i].onmouseout = function () {
      categoryImages[i].style.display = "block";
      categories[i].style.backgroundImage = "none";
      categories[i].style.height = "none";
      categories[i].style.alignItems = "flex-start";
      categoryHeaders[i].style.color = "#181818";
      arrows[i].style.visibility = "hidden";
    };
  }
}

/*Subscribe*/

var input=document.querySelector('.email');
var label=document.querySelector('.email-label')
function click(){
  input.onfocus=function(){
    input.placeholder="";
    label.style.display="block";
  }
  
}
let thumbnails = document.getElementsByClassName('Slider-thumbnail');
let activeImages = document.getElementsByClassName('active');

/* iterate through each thumbnail */
for (var i=0; i < thumbnails.length; i++){
  
  /* listen for click events on each thumbnail */
  thumbnails[i].addEventListener('click', function(e){
    /* prevent default action on a tag */   
    e.preventDefault()
    /* if more than one image has .active then remove class */
    if (activeImages.length > 0){
      activeImages[0].classList.remove('active')
    }
    /* add .active class on click */
    this.classList.add('active')
    /* replace src url in #featuredImage with clicked thumbnail src url */
    document.getElementById('featuredImage').src = this.href
  })
}

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
click()
hover1();
hover2();
