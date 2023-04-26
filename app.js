let btnmobile = document.querySelector("#btn-mobile");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnmobile.style.display = "flex"; 
  } else {
    btnmobile.style.display = "none"; 
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
