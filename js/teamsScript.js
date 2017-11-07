/*-------------- STICKY NAVBAR --------------------------------------*/

//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
//
//function myFunction() {
//  if (window.scrollY >= sticky) {
//    navbar.classList.add("sticky");
//  } 
//    else {
//    navbar.classList.remove("sticky");
//  }
//}

window.onscroll = function() {myStickyNav()};

function myStickyNav() {
    if (document.body.scrollTop > 239 || document.documentElement.scrollTop > 239) {
        document.getElementById("navbar").className = "stickyNav";
        document.getElementById("teamCont").className = "stickyTeam";
    } else {
        document.getElementById("navbar").className = "";
        document.getElementById("teamCont").className = "";
    }
}


/*--------------- UNI BUTTON SELECT ---------------------------------------*/

function openUni(evt, uniName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(uniName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/*--------------- ANIMATE RECORD SLIDES ---------------------------------------*/

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("recSlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}