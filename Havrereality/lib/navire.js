"use strict";

// Get the modal
var modal = document.getElementById("myModal");
var courantId;

// Création objet
//
// Porte conteneur
var porteconteneur = new Object();
porteconteneur["titre"] = "Porte-conteneur";
porteconteneur["largeur"] = "Entre 227,31 mètres et 399,87 mètres";
porteconteneur["longueur"] = "Entre 30,56 mètres et 58,8 mètres";
porteconteneur["capacite"] = "Entre 1 572 EVP et 21 413 EVP";
porteconteneur["description"] = "Le porte conteneur est un immense navire transportant un grand nombre de conteneur entre les différents ports du monde.";

// Feeder
var feeder = new Object();
feeder["titre"] = "Feeder Laura Ann";
feeder["largeur"] = "22,50 mètres";
feeder["longueur"] = "134,40 mètres";
feeder["capacite"] = "868 EVP";
feeder["description"] = "Le feeder est un navire transportant plusieurs conteneurs vers des ports où les porte-conteneurs ne font pas escales.";

// Barge pousseur
var bargepousseur = new Object();
bargepousseur["titre"] = "Barge pousseur";
bargepousseur["largeur"] = "Entre 227,31 mètres et 399,87 mètres";
bargepousseur["longueur"] = "Entre 30,56 mètres et 58,8 mètres";
bargepousseur["capacite"] = "Entre 1 572 EVP et 21 413 EVP";
bargepousseur["description"] = "Le porte conteneur est un immense navire transportant un grand nombre de conteneur entre les différents ports du monde.";
// Marpol collector
var marpolcollector = new Object();
marpolcollector["titre"] = "Marpol collector";
marpolcollector["largeur"] = "15 mètres";
marpolcollector["longueur"] = "46 mètres";
marpolcollector["capacite"] = "400 m³";
marpolcollector["description"] = "Le Marpol collector assure la collecte des déchets d'exploitation et résidus de cargaison des navires au port du Havre";
// Tanker
var tanker = new Object();
tanker["titre"] = "Tanker st Sara";
tanker["largeur"] = "17,2 mètres";
tanker["longueur"] = "122.66 mètres";
tanker["capacite"] = "8 607 m3 avec 13 cuves";
tanker["description"] = "Le st Sara assure le service de soutage dans le port du Havre.";
// Tugboat
var tugboat = new Object();
tugboat["titre"] = "Tugboat";
tugboat["largeur"] = "8,5 mètres";
tugboat["longueur"] = "26,2 mètres";
tugboat["capacite"] = "-";
tugboat["description"] = "Les Tugboat sont des petits bateaux très puissant qui guident les grands navires lors de leurs entrées au port du Havre ";

// Automoteur
var automoteur = new Object();
automoteur["titre"] = "Automoteur";
automoteur["largeur"] = "Entre 227,31 mètres et 399,87 mètres";
automoteur["longueur"] = "Entre 30,56 mètres et 58,8 mètres";
automoteur["capacite"] = "Entre 1 572 EVP et 21 413 EVP";
automoteur["description"] = "Le porte conteneur est un immense navire transportant un grand nombre de conteneur entre les différents ports du monde.";

// Roulier
var roulier = new Object();
roulier["titre"] = "Roulier";
roulier["largeur"] = "Entre 227,31 mètres et 399,87 mètres";
roulier["longueur"] = "Entre 30,56 mètres et 58,8 mètres";
roulier["capacite"] = "Entre 1 572 EVP et 21 413 EVP";
roulier["description"] = "Le porte conteneur est un immense navire transportant un grand nombre de conteneur entre les différents ports du monde.";

var tabDonnees = [];
tabDonnees[0] = porteconteneur;
tabDonnees[1] = feeder;
tabDonnees[2] = bargepousseur;
tabDonnees[3] = marpolcollector;
tabDonnees[4] = tanker;
tabDonnees[5] = tugboat;
tabDonnees[6] = automoteur;
tabDonnees[7] = roulier;

var nomObjet = ["porteconteneur.html", "feeder.html", "bargepousseur.html", "marpolcollector.html", "tanker.html", "tugboat.html", "automoteur.html", "roulier.html"];
var taille = nomObjet.length;
// Get the button that opens the modal
var i;
var btn = [];
for (i = 0; i < taille; i++) {
  btn[i] = document.getElementById(i.toString());
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("shutdown")[0];

// When the user clicks on the button, open the modal
function afficheModale(id) {
  modal.style.display = "block";
  var container = document.getElementById("example1div");
  var b = document.querySelector("iframe");
  b.src = "navire/" + nomObjet[id];
  courantId = parseInt(id);
  MajTableau(courantId);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function Suivant() {
  var container = document.getElementById("example1div");
  var b = document.querySelector("iframe");
  courantId += 1;
  if (courantId == taille) {
    courantId = 0;
  }
  b.src = "navire/" + nomObjet[courantId];
  MajTableau(courantId);
}

function Precedent() {
  var container = document.getElementById("example1div");
  var b = document.querySelector("iframe");
  courantId = courantId - 1;
  if (courantId == -1) {
    courantId = taille - 1;
  }
  b.src = "navire/" + nomObjet[courantId];
  MajTableau(courantId);
}

function MajTableau(id) {
  var valeur = tabDonnees[id];
  var titre = document.getElementById("nomNavire");
  titre.innerHTML = valeur["titre"];
  var longueur = document.getElementById("longueur");
  longueur.innerHTML = valeur["longueur"];
  var largeur = document.getElementById("largeur");
  largeur.innerHTML = valeur["largeur"];
  var capacite = document.getElementById("capacite");
  capacite.innerHTML = valeur["capacite"];
  var description = document.getElementById("description");
  description.innerHTML = valeur["description"];
}