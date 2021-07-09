
var bars= document.querySelector(".bars");
var header = document.querySelector(".header");
let menuList = document.querySelector(".menu-list");
let listItem = document.querySelectorAll(".list-item");
// let wrapper = document.querySelector(".wrapper");
let sticky = document.querySelectorAll(".sticky-list");
let bookSlot = document.querySelector(".book-slot");



// hamburger menu
function handleBars(event) {
    event.target.style.display = "none";
    let menu = document.querySelector(".menu-list")
    menu.style.display="block";
    let close = document.querySelector(".close-menu")
    close.style.display = "block";
    close.addEventListener("click", (event) => {
        close.style.display="none";
        menu.style.display = "none";
        document.querySelector(".fa-bars").style.display = "block";
    })
}

// to change the background color of the header on scrolling 
function changeColor() {
    if(window.scrollY > 100) {
        header.style.backgroundColor = "aqua"; 
    }
    else {
        header.style.backgroundColor = "gold";
    }
 
}

// to change the active tab on header section
listItem.forEach(item => {
    item.addEventListener("click", function() {
        menuList.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
})


// book-slot to book appointment online
function bookAppointment(event) {
    window.location.href = "https://clinicia.com/calendar/book?u=manisha lal";
}

bars.addEventListener("click", handleBars);
window.addEventListener("scroll", changeColor);
bookSlot.addEventListener("click", bookAppointment);


// testimonials
var slider = document.querySelector(".slider");
var arrowLeft = document.querySelector(".arrow_left");

var arrrowRight = document.querySelector(".arrow_right");

var indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;


document.querySelectorAll('.controls li').forEach(function(indicator,ind){
    indicator.addEventListener("click", function (){
        document.querySelector('.controls .selected').classList.remove('selected');
        sectionIndex = ind;
        slider.style.transform = 'translate('+(sectionIndex) * -25 +'%)';
        indicator.classList.add("selected");

    })
});

arrrowRight.addEventListener("click", function() {
    sectionIndex = (sectionIndex < 3)?  sectionIndex +  1: 3;
    document.querySelector('.controls .selected').classList.remove('selected');

    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate('+(sectionIndex) * -25 +'%)';
})

arrowLeft.addEventListener("click", function() {
    sectionIndex = (sectionIndex > 0)?  sectionIndex -1: 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate('+ sectionIndex * -25 + '%)';
})
