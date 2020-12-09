//random dice gen
//dice1
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImageSource1 = "images/dice" + randomNumber1 +".png" //images/dice1/png

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

//dice2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 ="images/dice"+ randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)

//setting the title to display a winner


if (randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML ="🤪엄마가 이겼다리😆 ";
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML ="🎲무승부🎲";
}
else{
    document.querySelector("h1").innerHTML ="😆아빠가 이겼다리😏";
}

