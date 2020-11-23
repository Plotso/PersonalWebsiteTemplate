var form = document.getElementById("comment-form");
form.addEventListener('submit', submitCommentForm)

function submitCommentForm(){
  const defaultImageUrl = "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.fit-760w.jpg";

  var imageUrl = document.getElementById("image-url").value;
  if(imageUrl === ""){
    imageUrl = defaultImageUrl;
  }
	var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var date = new Date();


  var commentElement = `
  <div class="media">
    <img src="${imageUrl}" class="mr-3 comment-picture" width="100"  alt="...">
    <div class="media-body">
      <h5 class="mt-0 mb-1">${name}</h5>
      ${message}
    </div>
    <ul class="list-inline list-unstyled text-right">
        <li class="list-inline-item">
            <i class="fa fa-calendar" aria-hidden="true"></i> ${date.toLocaleString()}
        </li>
    </ul>
  </div>
  <br>
  `
  
  $(".comments-container").append(commentElement)
}

function showCommentsPage() {
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
    comments.style.display = "block";
    about.style.display = "none";

    personalPageNav.classList.remove("current");
    galleryPageNav.classList.remove("current");
    commentsNav.classList.add("current");
    aboutNav.classList.remove("current");
  }