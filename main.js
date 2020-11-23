function showPersonalPage() {
  var personalPage = document.getElementById("personal-page");
  var gallery = document.getElementById("gallery");
  var comments = document.getElementById("comments");
  var about = document.getElementById("about")

  var personalPageNav = document.getElementById("nav-personal-page");
  var galleryPageNav = document.getElementById("nav-gallery");
  var commentsNav = document.getElementById("nav-comments");
  var aboutNav = document.getElementById("nav-about");

  personalPage.style.display = "block";
  gallery.style.display = "none";
  comments.style.display = "none";
  about.style.display = "none";

  personalPageNav.classList.add("current");
  galleryPageNav.classList.remove("current");
  commentsNav.classList.remove("current");
  aboutNav.classList.remove("current");
}

function showAboutPage() {
  var personalPage = document.getElementById("personal-page");
  var gallery = document.getElementById("gallery");
  var comments = document.getElementById("comments");
  var about = document.getElementById("about")

  var personalPageNav = document.getElementById("nav-personal-page");
  var galleryPageNav = document.getElementById("nav-gallery");
  var commentsNav = document.getElementById("nav-comments");
  var aboutNav = document.getElementById("nav-about");

  personalPage.style.display = "none";
  gallery.style.display = "none";
  comments.style.display = "none";
  about.style.display = "block";

  personalPageNav.classList.remove("current");
  galleryPageNav.classList.remove("current");
  commentsNav.classList.remove("current");
  aboutNav.classList.add("current");
}