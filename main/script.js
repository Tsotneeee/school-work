let card1 = document.getElementById("card_like1");
let card2 = document.getElementById("card_like2");
let card3 = document.getElementById("card_like3");
let card4 = document.getElementById("card_like4");

toggleCard(localStorage.getItem("card1"), card1);
toggleCard(localStorage.getItem("card2"), card2);
toggleCard(localStorage.getItem("card3"), card3);
toggleCard(localStorage.getItem("card4"), card4);

function toggleCard(card, Card) {
    if (card == "true") {
        Card.innerHTML = "❤️";
    } else {
        Card.innerHTML = "♡";
    }
}

card1.addEventListener("click", () => {
    console.log("test")
    if (localStorage.getItem("card1") == "false") {
        localStorage.setItem("card1", true);
        location.reload();
    } else {
        localStorage.setItem("card1", false);
        location.reload();
    }
});

card2.addEventListener("click", () => {
    console.log("test")
    if (localStorage.getItem("card2") == "false") {
        localStorage.setItem("card2", true);
        location.reload();
    } else {
        localStorage.setItem("card2", false);
        location.reload();
    }
});

card3.addEventListener("click", () => {
    console.log("test")
    if (localStorage.getItem("card3") == "false") {
        localStorage.setItem("card3", true);
        location.reload();
    } else {
        localStorage.setItem("card3", false);
        location.reload();
    }
});

card4.addEventListener("click", () => {
    console.log("test")
    if (localStorage.getItem("card4") == "false") {
        localStorage.setItem("card4", true);
        location.reload();
    } else {
        localStorage.setItem("card4", false);
        location.reload();
    }
});