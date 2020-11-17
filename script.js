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
    if (cardText2.style.color === "green") {
        cardText2.style.color = "";
    } else cardText2.style.color = "green";
}
buttonEditCard2.addEventListener("click", onCard2EditClick);
console.log(buttonEditCard2);
console.log(cardText2);

// Fonctionnalité 5
var navBar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
var linkEl = document.querySelector("link")
var onNavbarDblClick = function() {
    if (linkEl.href === "https: //stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        linkEl.href = "";
    }
};
navBar.addEventListener("dblclick", onNavbarDblClick);

var onDocDblClick = function() {
    if (linkEl.href = "") {
        linkEl.href = "https: //stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    }
}
document.addEventListener("dblclick", onDocDblClick);
console.log(navBar);
console.log(linkEl.href);

// Fonctionnalité 6
var buttonViewCard = document.getElementsByClassName("btn btn-sm btn-success")[0];
var card = document.getElementsByClassName("col-md-4")[0];
var overButtonViewCard = function() {
    if (card.getElementsByTagName("img")[0].style.width === "20%") {
        card.getElementsByTagName("img")[0].style.width = "";
        card.getElementsByClassName("card-text")[0].classList.toggle("collapse");
    } else {
        card.getElementsByTagName("img")[0].style.width = "20%";
        card.getElementsByClassName("card-text")[0].classList.toggle("collapse");
    }
}
buttonViewCard.addEventListener("mouseover", overButtonViewCard);
console.log(buttonViewCard);
console.log(card);
/*
var buttonViewCards = document.getElementsByClassName("btn btn-sm btn-success");
var cards = document.getElementsByClassName("col-md-4");

for (let i = 0; i < 6; i++) {
    var overButtonViewCard = function() {
        if (cards[i].getElementsByTagName("img")[i].style.width === "20%") {
            cards[i].getElementsByTagName("img")[i].style.width = "";
            cards[i].getElementsByClassName("card-text")[i].classList.toggle("collapse");
        } else {
            cards[i].getElementsByTagName("img")[i].style.width = "20%";
            cards[i].getElementsByClassName("card-text")[i].classList.toggle("collapse");
        }
    }
    buttonViewCards[i].addEventListener("mouseover", overButtonViewCard());
}*/