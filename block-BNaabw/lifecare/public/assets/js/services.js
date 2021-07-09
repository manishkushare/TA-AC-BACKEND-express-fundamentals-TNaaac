var musculo = document.querySelector(".muscuskeleton");// to select musculskeleton card-container in service-content
let neuro = document.querySelector(".nuerological");//to select neuro card-container in servidce section
let cardio = document.querySelector(".cardio");//to select cardio card-container in service section
let community = document.querySelector(".community");//to select the community card-container in the service section

// to go to masculoskeleton page
function gotoMusculoskeletonPage(event) {
    window.location.href ="musculoskeleton.html";
}

// to go to neurological page
function gotoNeuroPage(event) {
    window.location.href = "neurological.html";
}

// to go to cardio page
function gotoCardioPage(event) {
    window.location.href = "cardio-pulmonary.html";
}
// go to community page
function gotoCommunity(event) {
    window.location.href = "community.html";
}


musculo.addEventListener("click", gotoMusculoskeletonPage);
neuro.addEventListener("click" ,gotoNeuroPage );
cardio.addEventListener("click", gotoCardioPage);
community.addEventListener("click", gotoCommunity);