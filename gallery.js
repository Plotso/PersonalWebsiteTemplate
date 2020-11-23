function showGalleryPage() {
    var personalPage = document.getElementById("personal-page");
    var gallery = document.getElementById("gallery");
    var comments = document.getElementById("comments");
    var about = document.getElementById("about")

    var personalPageNav = document.getElementById("nav-personal-page");
    var galleryPageNav = document.getElementById("nav-gallery");
    var commentsNav = document.getElementById("nav-comments");
    var aboutNav = document.getElementById("nav-about");
  
    personalPage.style.display = "none";
    gallery.style.display = "block";
    comments.style.display = "none";
    about.style.display = "none";

    personalPageNav.classList.remove("current");
    galleryPageNav.classList.add("current");
    commentsNav.classList.remove("current");
    aboutNav.classList.remove("current");
    addGalleryImages();
  }

function addImagesWithNumbersFromTo(from, to){
    var images = ``;
    for(i = from; i <= to; i++){
      images += `
            
            <a href="images/numeric/${i}.png" download>
                <img class="img-fluid" src="images/numeric/${i}.png" width="350" height="300">
            </a>    
      `
    }
    return images;
  }
  
  function addGalleryImages(){
    $(".gallery-container").empty();
    var html = `
          <div class="row">
            <div class="col-sm">
              ${addImagesWithNumbersFromTo(1, 3)}
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
            ${addImagesWithNumbersFromTo(4, 6)}
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
            ${addImagesWithNumbersFromTo(7, 9)}
            </div>
          </div>
    `;
  
    $(".gallery-container").append(html)
  }
  
  function addGalleryImagesHardcoded(){
    $(".gallery-container").empty();
    var html = `
          <div class="row">
            <div class="col-sm">
              <img src="images/numeric/1.png" width="300" height="300">
              <a href="images/numeric/1.png" download><i class="fa fa-download"></i></a>
              <img src="images/numeric/2.png" width="300" height="300">
              <img src="images/numeric/3.png" width="300" height="300">
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img src="images/numeric/4.png" width="300" height="300">
              <img src="images/numeric/5.png" width="300" height="300">
              <img src="images/numeric/6.png" width="300" height="300">
            </div>
          </div>
          <div class="row">
            <div class="col-sm">
              <img src="images/numeric/7.png" width="300" height="300">
              <img src="images/numeric/8.png" width="300" height="300">
              <img src="images/numeric/9.png" width="300" height="300">
            </div>
          </div>
    `;
  
    $(".gallery-container").append(html)
  }