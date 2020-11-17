// Fichier script.js accompagnant exo_events.html pour projet validant Front JS

/* Fonctionnalité 1
var clickerFooter = document.querySelector("footer");
var onFooterClick = function() {
    console.log(`clique`);
}
clickerFooter.addEventListener("click", onFooterClick);
console.log(clickerFooter);*/

// Fonctionnalité 1-bis
var clickerFooter = document.querySelector("footer");
var count_FooterClicks = 0;
var onFooterClick = function() {
    count_FooterClicks++
    console.log(`clic numéro ${count_FooterClicks}`);
}
clickerFooter.addEventListener("click", onFooterClick);
console.log(clickerFooter);

// Fonctionnalité 2
var clickerSandwichMenu = document.getElementsByClassName("navbar-toggler")[0]
var navbarHder = document.getElementById("navbarHeader");
var onSandwichMenuClick = function() {
    navbarHder.classList.toggle("collapse");
}
clickerSandwichMenu.addEventListener("click", onSandwichMenuClick);
console.log(clickerSandwichMenu);
console.log(navbarHder);

// Fonctionnalité 3
var buttonEditCard1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
var cardText1 = document.getElementsByClassName("card-text")[0];
var onCard1EditClick = function() {
    cardText1.style.color = "red";
}
buttonEditCard1.addEventListener("click", onCard1EditClick);
console.log(buttonEditCard1);
console.log(cardText1);

// Fonctionnalité 4
var buttonEditCard2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
var cardText2 = document.getElementsByClassName("card-text")[1];
var onCard2EditClick = function() {
    cardText2.style.color = "green";
}
buttonEditCard2.addEventListener("click", onCard2EditClick);
console.log(buttonEditCard2);
console.log(cardText2);