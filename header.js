var prevScrollpos = window.pageYOffset;
var header = document.querySelector(".header_style");
var header_links = document.querySelector(".container_header");
var header_log = document.querySelector(".header_style img");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.remove("shrink");
    header_links.classList.remove("shrink");
    header_log.classList.remove("shrink");
  } else {
    header.classList.add("shrink");
    header_links.classList.add("shrink");
    header_log.classList.add("shrink");
  }
  prevScrollpos = currentScrollPos;
};


function DropdownMenu() {
  var navbar = document.getElementsByClassName('container_header');
  navbar.classList.toggle('show');
}