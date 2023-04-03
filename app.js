// loader
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "body").style.background = "rgba(0, 0, 0, 0.856)";
        document.querySelector(
            "#loader-wrapper").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader-wrapper").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
        document.querySelector(
            // "body").style.background = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrij-VVzH0x3A12wU-oc_43Xgnzxi40bWTsw&usqp=CAU)";
            "body").style.background = "url(https://t3.ftcdn.net/jpg/04/55/51/50/360_F_455515083_HRCbCZ5E8Fzbg1MpaRwjTFwR8HSxxrW3.jpg)";
    }
};


noResult = document.getElementById('noresult');

// searchbar for #first mobile
function myFunction() {
    var input, filter, ul, li, a, i, noResult;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

// no result found     
noResult = document.getElementById('noresult');

    let found = false;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            found = true;
            noResult.style.display = "none";
            // sorry.style.display = "none";
        } else {
            li[i].style.display = "none";
            noResult.style.display = "";
            // sorry.style.display = "block";
        }
    };
};


// searchbar for #second laptop
function myFunctions() {
    var input, filter, ul, li, a, i, noResult;
    input = document.getElementById("myInputs");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

// no result found     
noResult = document.getElementById('noresult');

    let found = false;
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            found = true;
            noResult.style.display = "none";
        } else {
            li[i].style.display = "none";
            noResult.style.display = "";

        }
    };
    console.log(ul);
};


function vis() {
    let search = document.getElementsByClassName("search")
    let select = document.getElementById("head-title")
    if (onclick = search) {
        select.style.display = "none";
    } else {
        select.style.display = "block";
    }
};

// uppage

window.onscroll = function() {myFunctionUp()};

let UpPage = document.querySelector(".uppage")

function myFunctionUp() {
  if (window.scrollY <= 1000) {
    UpPage.style.opacity = 0;
  } else {
    UpPage.style.opacity = 0.5;
    }
};
    


var sold = document.querySelector(".sold , .sold3");
var card = document.querySelector(".card");
sold.innerHTML = "OUT OF STOCK";



function submitResult(e) {
    var element = document.getElementById("navMenu");
    element.classList.add("focus");
    e.preventDefault();
Swal.fire({
  title: 'If You Can Not Find Your Car Model In This Section Go To <b>NAV BAR</b> And Take A look About Our Universal Tuning Collection',
  showClass: {
    popup: 'animate__animated animate__fadeInDown !important'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
};

function remove() {
    var element = document.getElementById("navMenu");
    element.classList.remove("focus");
};



function order() {
Swal.fire({
  title: 'Oops..',
  icon: 'error',
  text: 'sorry shipping is not available right now',
  html:
    'sorry shipping is not available right now <br>' +
    'you can ' +
    '<a href="/AboElezz-Car-Tuning/contact.html">visit or contact us</a>',
  showCloseButton: true,
  showConfirmButton: false,
})
};


