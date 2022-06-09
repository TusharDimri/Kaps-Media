// dropdown = document.querySelector(".dropdown");
// dropdown.addEventListener("mouseover", ()=>{
//     dropdown_toggle = document.querySelector(".dropdown-toggle");
//     dropdown_toggle.click();
// });


$(document).ready(function () {
    $('.dropdown-toggle').mouseover(function () {
        $('.dropdown-menu').show();
    })

    $('.dropdown-toggle').mouseout(function () {
        t = setTimeout(() => {
            $('.dropdown-menu').hide();
        }, 100);

        $('.dropdown-menu').on('mouseenter', function () {
            $('.dropdown-menu').show();
            clearTimeout(t);
        }).on('mouseleave', () => {
            $('.dropdown-menu').hide();
        })
    })
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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