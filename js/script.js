// ----- Personen ----- //
var personen = [ 
    {
        naam: "Jessica",
        geslacht: "vrouw",
        folderDir:"images/personen/1/",
        Status: "neutraal1"
},{
    naam: "Jason",
    geslacht: "man",
    folderDir:"images/personen/2/",
    Status: "neutraal1"
}];

var persoon = personen [Math.floor(Math.random()*personen.length)];

// ----- Lovemeter ----- //
var lastclick;
var lastClickAmount = 0;
var progress = document.querySelector(".progress");
var lovemeter = 10;
var hartLovemeter = document.querySelector(".hart");
var gewonnenEl = document.querySelector(".gewonnen");
var audio1El = document.querySelector(".audio1");
var verlorenEl = document.querySelector(".verloren");
var audio2El = document.querySelector(".audio2");
var weggaanEl = document.querySelector(".weggaanscherm");
var coverButtons = document.querySelector(".coverButtons");
coverButtons.classList.add("hide");
weggaanEl.classList.add("hide");
verlorenEl.classList.add("hide");
gewonnenEl.classList.add("hide");
var gewonnenAdviesEl = document.querySelector(".gewonnenAdvies");
var gewonnenAdvies = ["Jullie hebben elkaars nummer. Verpest het nu niet!!", "Dat ging goed! en nu doorpakken", "Wat kan er nu nog misgaan?!.."];



function setLovemeter () {
    if (lovemeter >= 100){
        lovemeter = 100;
        gewonnenEl.classList.remove("hide");
        tekstBallon.classList.add("hide");
        audio1El.play();
        gewonnenAdviesEl.textContent = gewonnenAdvies [Math.floor(Math.random()*gewonnenAdvies.length)];
    }
    if (lovemeter <= 1){
        verloren();
    }
    if (lovemeter >= 15 && lovemeter <= 34){
        setGezichtsuitdrukking("neutraal2");
    } else if (lovemeter >= 35 && lovemeter <= 74){
        setGezichtsuitdrukking("blij");
    } else if (lovemeter >= 75){
        setGezichtsuitdrukking("blozend");
    } else {
        setGezichtsuitdrukking("neutraal1");
    }

    document.documentElement.style.setProperty('--lovemeterW', lovemeter + '%');
}

// ----- Gezichtsuitdrukkingen ----- //
var gezichtsuitdrukking = document.querySelector(".gezichtsuitdrukking");

function setGezichtsuitdrukking(status) {
    gezichtsuitdrukking.src = persoon.folderDir + status + ".svg";
    persoon.Status = status; 
}

// ----- Respons ----- //
var tekstBallon = document.querySelector(".tekstballon");
var pResponsEL = document.querySelector(".responstekst");
var resFlirtPos = ["Rawrr", "Ik begin jou steeds leuker te vinden"];
var resFlirtNeg = ["Calm down cowboy", "Ugh weer z'n flirt", "Waarom is iedereen hetzelfde?", "*Zucht*"];
var resKusPos = ["<3", "Oeh jij kan goed zoenen"];
var resKusNeg = ["Wat maak jij mij nou?!", "Blijf van me af gek!"];
var resPratenPos = ["Ah wat interessant zeg", "Daar ben ik het helemaal mee eens", "Wat leuk om je beter te leren kennen", "Dat zei mijn oma nou ook al"];
var resPratenNeg = ["*Ugh kan hij nu even stoppen met praten?*", "*Wat is hij vol van zichzelf zeg*", "Owja joh..."];
var resLuisterenPos = ["Oeff gisteren op werk hè ...", "Ik heb 7 slangen thuis", "Ik heb Netflix helemaal uit", "Soms droom ik over vliegen", "Ik kan lezen terwijl ik slaap"];
var resLuisterenNeg = ["*Kan hij nu ook eens iets vertellen?!*", "*Wat is hij saai zeg*", "Ik denk dat ik zo maar weer is ga.."];
var resRuziemakenNeg = ["Waarom zeg jij zoiets?!", "Wat is er mis met jou?!", "Geen wonder dat jij geen relatie heb"];
var resNegerenNeg = ["*Pakt hij nu serieus zijn mobiel?!*", "*Ben ik zo saai?!*", "Dit was het dan?"];
tekstBallon.classList.add("hide");

function respons (value) {
    pResponsEL.textContent = value [Math.floor(Math.random()*value.length)];
    tekstBallon.classList.remove("hide");
    setTimeout("verdwijnenTB()", 5000);
}

function verdwijnenTB(){
    tekstBallon.classList.add("hide");
}

setLovemeter();
setGezichtsuitdrukking("neutraal1");

// Knoppen
var btnFlirt = document.querySelector(".flirt");
var btnKus = document.querySelector(".kus");
var btnPraten = document.querySelector(".praten");
var btnLuisteren = document.querySelector(".luisteren");
var btnRuzieMaken = document.querySelector(".ruziemaken");
var btnNegeren = document.querySelector(".negeren");
var btnWeggaan = document.querySelector(".weggaan");

btnFlirt.addEventListener("click", flirt);
btnKus.addEventListener("click", kus);
btnPraten.addEventListener("click", praten);
btnLuisteren.addEventListener("click", luisteren);
btnRuzieMaken.addEventListener("click", ruziemaken);
btnNegeren.addEventListener("click", negeren);
btnWeggaan.addEventListener("click", weggaan);

function flirt(){
    if (lastclick == 1 || lastclick == 2 || lastclick == 3 || lastclick == 4 || lastclick == 5){
        lastClickAmount = 0;
    }
    if(lastClickAmount == 0) {
        if(lovemeter <= 30) {
            lovemeter *= 0.9;
            respons(resFlirtNeg);
        } else if (lovemeter > 30 && lovemeter <= 70) {
            lovemeter *= 1.3;
            respons(resFlirtPos);
        } else {
            lovemeter *= 1.4;
            respons(resFlirtPos);
        }
    } else if (lastclick == 0 && lastClickAmount == 1) {
        if(lovemeter <= 30) { 
            lovemeter *= 0.6;
            respons(resFlirtNeg);
        } else if (lovemeter > 30 && lovemeter <= 70) {
            lovemeter *= 1.2;
            respons(resFlirtPos);
        } else {
            lovemeter *= 1.6;
            respons(resFlirtPos);
        }
    } else if (lastclick == 0 && lastClickAmount == 2) {
        if(lovemeter <= 30) { 
            lovemeter *= 0.2;
            respons(resFlirtNeg);
        } else if (lovemeter > 30 && lovemeter <= 70) {
            lovemeter *= 1;
            respons(resFlirtPos);
        } else {
            lovemeter *= 1.8;
            respons(resFlirtPos);
        }
    } else if (lastclick == 0 && lastClickAmount == 3) {
        if(lovemeter <= 30) { 
            lovemeter *= 0.1;
            respons(resFlirtNeg);
        } else if (lovemeter > 30 && lovemeter <= 70) {
            lovemeter *= 0.75;
            respons(resFlirtNeg);
        } else {
            lovemeter *= 1;
            respons(resFlirtPos);
        }
    } else if (lastclick == 0 && lastClickAmount == 4) {
        if(lovemeter <= 30) { 
            lovemeter *= 0.1
            respons(resFlirtNeg);
        } else if (lovemeter > 30 && lovemeter <= 70) {
            lovemeter *= 0.5
            respons(resFlirtNeg);
        } else {
            lovemeter *= 0.75
            respons(resFlirtNeg);
        } 
    } else if (lastclick == 0 && lastClickAmount == 5) {
            lovemeter = 0;
    }
    if(lastclick == 0){
        lastClickAmount++;
    }
    else{
        lastclick = 0;
        lastClickAmount = 0;
    }
    setLovemeter();
}

function kus(){
    if (lastclick == 0 || lastclick == 2 || lastclick == 3 || lastclick == 4 || lastclick == 5){
        lastClickAmount = 0;
    }
    if (lastClickAmount == 0) {
        if(lovemeter <= 30) {
            lovemeter = 0;
        } else if (lovemeter > 30 && lovemeter <= 60) {
            lovemeter *= 0.5;
            respons(resKusNeg);
        } else {
            lovemeter *= 1.4;
            respons(resKusPos);
        }
    } else if (lastclick == 1 && lastClickAmount == 1) {
        if (lovemeter <= 70) {
            lovemeter = 0;
        } else if (lovemeter >= 90) {
            lovemeter *= 1.5;
            respons(resKusPos);
        } else { 
            lovemeter *= 0.4;
            respons(resKusNeg);
        }
    } else if (lastclick == 1 && lastClickAmount == 2) {
        if(lovemeter <= 90) { 
            lovemeter = 0;
        } else {
            lovemeter *= 0.5;
            respons(resKusNeg);
        }
    } else if (lovemeter == 1 && lastClickAmount == 3) {
        lovemeter = 0
    }
    if(lastclick == 1){
        lastClickAmount++;
    }
    else{
        lastclick = 1;
        lastClickAmount = 0;
    }
    setLovemeter();
}

function praten(){
    if (lastclick == 0 || lastclick == 1 || lastclick == 3 || lastclick == 4 || lastclick == 5){
        lastClickAmount = 0;
    }
    if (lastClickAmount == 0) {
        if(lovemeter <= 30) {
            lovemeter *= 1.4;
            respons(resPratenPos);
        } else if (lovemeter > 30 && lovemeter <= 70) {
            lovemeter *= 1.2;
            respons(resPratenPos);
        } else {
            lovemeter *= 1.1;
            respons(resPratenPos);
        }
    } else if (lastclick == 2 && lastClickAmount == 1) {
        if (lovemeter <= 30) {
            lovemeter *= 1.5;
            respons(resPratenPos);
        } else if (lovemeter > 30 && lovemeter <=70) {
            lovemeter *= 1.3;
            respons(resPratenPos);
        } else { 
            lovemeter *= 1.2;
            respons(resPratenPos);
        }
    } else if (lastclick == 2 && lastClickAmount == 2) {
        if(lovemeter <= 50) { 
            lovemeter *= 0.75;
            respons(resPratenNeg);
        } else if (lovemeter > 50 && lovemeter <= 70) {
            lovemeter *= 0.85;
            respons(resPratenNeg);
        } else {
            lovemeter *= 0.9;
            respons(resPratenNeg);
        }
    } else if (lovemeter == 2 && lastClickAmount == 3) {
        if (lovemeter <= 30) {
            lovemeter = 0;
        } else if (lovemeter > 30 && lovemeter <= 50) {
            lovemeter *= 0.2;
            respons(resPratenNeg);
        } else if (lovemeter > 50 && lovemeter <= 80) {
            lovemeter *= 0.5;
            respons(resPratenNeg);
        } else {
            lovemeter *= 0.75;
            respons(resPratenNeg);
        }
    } else if (lovemeter == 2 && lastClickAmount == 4) {
        lovemeter = 0
    }
    if(lastclick == 2){
        lastClickAmount++;
    }
    else{
        lastclick = 2;
        lastClickAmount = 1;
    }
    setLovemeter();
}

function luisteren(){
    if (lastclick == 0 || lastclick == 1 || lastclick == 2 || lastclick == 4 || lastclick == 5){
        lastClickAmount = 0;
    }
    if (lastClickAmount == 0) {
        if(lovemeter <= 30) {
            lovemeter *= 1.4;
            respons(resLuisterenPos);
        } else if (lovemeter > 30 && lovemeter <= 70) {
            lovemeter *= 1.3;
            respons(resLuisterenPos);
        } else {
            lovemeter *= 1.2;
            respons(resLuisterenPos);
        }
    } else if (lastclick == 3 && lastClickAmount == 1) {
        if (lovemeter <= 30) {
            lovemeter *= 1.5;
            respons(resLuisterenPos);
        } else if (lovemeter > 30 && lovemeter <=70) {
            lovemeter *= 1.4;
            respons(resLuisterenPos);
        } else { 
            lovemeter *= 1.2;
            respons(resLuisterenPos);
        }
    } else if (lastclick == 3 && lastClickAmount == 2) {
        if(lovemeter <= 50) { 
            lovemeter *= 0.75;
            respons(resLuisterenNeg);
        } else if (lovemeter > 50 && lovemeter <= 70) {
            lovemeter *= 0.85;
            respons(resLuisterenNeg);
        } else {
            lovemeter *= 0.9;
            respons(resLuisterenNeg);
        }
    } else if (lovemeter == 3 && lastClickAmount == 3) {
        if (lovemeter <= 30) {
            lovemeter = 0;
        } else if (lovemeter > 30 && lovemeter <= 50) {
            lovemeter *= 0.2;
            respons(resLuisterenNeg);
        } else {
            lovemeter *= 0.5;
            respons(resLuisterenNeg);
        }
    } else if (lovemeter == 3 && lastClickAmount == 4) {
        lovemeter = 0;
    }
    if(lastclick == 3){
        lastClickAmount++;
    }
    else{
        lastclick = 3;
        lastClickAmount = 0;
    }
    setLovemeter();
}

function ruziemaken(){
    if (lastclick == 0 || lastclick == 1 || lastclick == 2 || lastclick == 3 || lastclick == 5){
        lastClickAmount = 0;
    }
    if (lastClickAmount == 0) {
        if(lovemeter <= 40) {
            lovemeter = 0;
        } else if (lovemeter > 40 && lovemeter <= 60) {
            lovemeter *= 0.4;
            respons(resRuziemakenNeg);
        } else if (lovemeter > 60 && lovemeter <= 80) {
            lovemeter *= 0.5;
            respons(resRuziemakenNeg);
        } else{
            lovemeter *= 0.75;
            respons(resRuziemakenNeg);
        }
    } else if (lastclick == 4 && lastClickAmount == 1) {
        if (lovemeter <= 60) {
            lovemeter = 0;
        } else { 
            lovemeter *= 0.3;
            respons(resRuziemakenNeg);
        }
    } else if (lastclick == 4 && lastClickAmount == 2) {
        lovemeter = 0;
    }
    if(lastclick == 4){
        lastClickAmount++;
    }
    else{
        lastclick = 4;
        lastClickAmount = 0;
    }
    setLovemeter();
}

function negeren(){
    if (lastclick == 0 || lastclick == 1 || lastclick == 2 || lastclick == 3 || lastclick == 4){
        lastClickAmount = 0;
    }
    if (lastClickAmount == 0) {
        if(lovemeter <= 40) {
            lovemeter *= 0.8;
            respons(resNegerenNeg);
        } else if (lovemeter > 40 && lovemeter <= 60) {
            lovemeter *= 0.7;
            respons(resNegerenNeg);
        } else {
            lovemeter *= 0.6;
            respons(resNegerenNeg);
        } 
    } else if (lastclick == 5 && lastClickAmount == 1) {
        if (lovemeter <= 60) {
            lovemeter = 0;
        } else { 
            lovemeter *= 0.3;
            respons(resNegerenNeg);
        }
    } else if (lastclick == 5 && lastClickAmount == 2) {
        lovemeter = 0;
    }
    if(lastclick == 5){
        lastClickAmount++;
    }
    else{
        lastclick = 5;
        lastClickAmount = 0;
    }
    setLovemeter();
}

var btnWeggaanJa = document.querySelector(".btnJa");
var btnWeggaanNee = document.querySelector(".btnNee");
btnWeggaanJa.addEventListener("click", verloren);
btnWeggaanNee.addEventListener("click", weggaanclose);

function weggaanclose(){
    weggaanEl.classList.add("hide");
    coverButtons.classList.add("hide");
}

function weggaan(){
    weggaanEl.classList.remove("hide");
    coverButtons.classList.remove("hide");    
    tekstBallon.classList.add("hide");
}

// ----- Verloren ----- //
var verliesAdviesEl = document.querySelector(".verliesAdvies");
var verliesAdvies = ["Wil niet te snel van alles", "Wees eens lief voor je date", "Volgende keer beter", "Zij wilt je dus echt nooit meer zien!"];
function verloren(){
    verlorenEl.classList.remove("hide");
    tekstBallon.classList.add("hide");
    audio2El.play();
    verliesAdviesEl.textContent = verliesAdvies [Math.floor(Math.random()*verliesAdvies.length)];
}

// ----- Opnieuw beginnen ----- //
var btnOpnieuw = document.querySelector(".opnieuwG");
btnOpnieuw.addEventListener("click", opnieuwBeginnen);
var btnOpnieuw = document.querySelector(".opnieuwV");
btnOpnieuw.addEventListener("click", opnieuwBeginnen);

function opnieuwBeginnen(){
    setGezichtsuitdrukking("neutraal");
    location.reload();
}

