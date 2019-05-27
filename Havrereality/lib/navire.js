"use strict";

// Get the modal
var modal = document.getElementById("myModal");
var courantId;

// Création objet
//
// Standard
var porteconteneur = new Object();
porteconteneur["titre"] = "Porte-conteneur";
porteconteneur["largeur"] = "2.438 mètres";
porteconteneur["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
porteconteneur["hauteur"] = "2.591 mètres";
porteconteneur["capacite"] = "500 litres";
porteconteneur["poids"] = "1000 kilogrammes";
porteconteneur["description"] = "Le porte conteneur est un immense navire transportant un nombre important de conteneur entre les différents port du monde.";

// HighCube
var feeder = new Object();
feeder["titre"] = "Feeder Laura Ann";
feeder["largeur"] = "2.438 mètres";
feeder["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
feeder["hauteur"] = "2.891 mètres";
feeder["capacite"] = "500 litres";
feeder["poids"] = "1000 kilogrammes";
feeder["description"] = "Le feeder est navire chargé de conteneur.";

// Double porte
var bargepousseur = new Object();
bargepousseur["titre"] = "Barge pousseur";
bargepousseur["largeur"] = "2.438 mètres";
bargepousseur["longueur"] = "6.058 mètres";
bargepousseur["hauteur"] = "2.891 mètres";
bargepousseur["capacite"] = "500 litres";
bargepousseur["poids"] = "1000 kilogrammes";
bargepousseur["description"] = "Conteneur s'ouvrant grâce à deux portes";

// Citerne
var marpolcollector = new Object();
marpolcollector["titre"] = "Marpol collector";
marpolcollector["largeur"] = "2.438 mètres";
marpolcollector["longueur"] = "6.058 mètres";
marpolcollector["hauteur"] = "2.591 mètres";
marpolcollector["capacite"] = "500 litres";
marpolcollector["poids"] = "1000 kilogrammes";
marpolcollector["description"] = "Conteneur citerne qui transporte principalement de l'essence";

// Flatrack
var tanker = new Object();
tanker["titre"] = "Tanker st Sara";
tanker["largeur"] = "2.438 mètres";
tanker["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
tanker["hauteur"] = "2.591 mètres";
tanker["capacite"] = "500 litres";
tanker["poids"] = "1000 kilogrammes";
tanker["description"] = "Le tanker st Sara vient se placer à côté des porte-conteneur pour les ravitailler en carburant";

// PaletWide
var tugboat = new Object();
tugboat["titre"] = "Tugboat";
tugboat["largeur"] = "2.438 mètres";
tugboat["longueur"] = "13,716 mètres";
tugboat["hauteur"] = "2.591 mètres";
tugboat["capacite"] = "500 litres";
tugboat["poids"] = "1000 kilogrammes";
tugboat["description"] = "Les Tugboat servent à diriger un porte-conteneur dès son arrivée au port du Havre";

// Conteneur DRY
var automoteur = new Object();
automoteur["titre"] = "Automoteur";
automoteur["largeur"] = "2.438 mètres";
automoteur["longueur"] = "6' : 1.829 mètres <br>" + "8' : 2,438 mètres" + "10' : 3,048 mètres";
automoteur["hauteur"] = "2.591 mètres";
automoteur["capacite"] = "500 litres";
automoteur["poids"] = "1000 kilogrammes";
automoteur["description"] = "Conteneur 45";

// OpenSide
var roulier = new Object();
roulier["titre"] = "Roulier";
roulier["largeur"] = "2.438 mètres";
roulier["longueur"] = "13,716 mètres";
roulier["hauteur"] = "2.591 mètres";
roulier["capacite"] = "500 litres";
roulier["poids"] = "1000 kilogrammes";
roulier["description"] = "Le roulier est un navire servant pour le transport de l'automobile";

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
  b.src = nomObjet[id];
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
  b.src = nomObjet[courantId];
  MajTableau(courantId);
}

function Precedent() {
  var container = document.getElementById("example1div");
  var b = document.querySelector("iframe");
  courantId = courantId - 1;
  if (courantId == -1) {
    courantId = taille - 1;
  }
  b.src = nomObjet[courantId];
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
  var hauteur = document.getElementById("hauteur");
  hauteur.innerHTML = valeur["hauteur"];
  var capacite = document.getElementById("capacite");
  capacite.innerHTML = valeur["capacite"];
  var poids = document.getElementById("poids");
  poids.innerHTML = valeur["poids"];
  var description = document.getElementById("description");
  description.innerHTML = valeur["description"];
}