"use strict";

// Get the modal

var modal = document.getElementById("myModal");
var courantId;

// Création objet

// Portique
var portique = new Object();
portique["titre"] = "Portique";
portique["hauteur"] = "~48 mètres";
portique["capacite"] = "15 et 20 conteneurs/heure";
portique["poids"] = "~1.800 tonnes";
portique["description"] = "Le portique permet de décharger un porte-conteneur amarré au port";

// Cavalier
var cavalier = new Object();
cavalier["titre"] = "Cavalier";
cavalier["hauteur"] = "~15 mètres";
cavalier["capacite"] = "Entre 62 et 104 conteneurs/heure";
cavalier["poids"] = "~68 tonnes";
cavalier["description"] = "Le cavalier transporte les conteneurs pour les stocker sur le port ou pour charger des camions";

// Portique multimodale barge
var portiquebarge = new Object();
portiquebarge["titre"] = "Portique multimodale barge";
portiquebarge["hauteur"] = "~33 mètres";
portiquebarge["capacite"] = "600 conteneurs traités par jour";
portiquebarge["poids"] = "~1.500 tonnes";
portiquebarge["description"] = "Le portique multimodale charge est décharge les barges se trouvant à la plate-forme multimodale";

// Reach stacker
var reachstacker = new Object();
reachstacker["titre"] = "Reach stacker";
reachstacker["hauteur"] = "4,5 mètres";
reachstacker["capacite"] = "Peut charger jusqu'à ~46.000 kilogrammes";
reachstacker["poids"] = "~70 tonnes";
reachstacker["description"] = "Le Reach stacker transporte les conteneurs et peut charger des trains";

// Portique multimodale train
var portiquetrain = new Object();
portiquetrain["titre"] = "Portique multimodale train";
portiquetrain["hauteur"] = "~33 mètres";
portiquetrain["capacite"] = "600 conteneurs traités par jour";
portiquetrain["poids"] = "~1.500 tonnes";
portiquetrain["description"] = "Le portique multimodale de train charge et décharge les trains lors de leurs arrivées la plate-forme multimodale";

// Chariot conteneur
var chariotconteneur = new Object();
chariotconteneur["titre"] = "Chariot élévateur conteneur";
chariotconteneur["hauteur"] = "~2,50 mètres";
chariotconteneur["capacite"] = "Peut charger jusqu'à ~32.000 kilogrammes";
chariotconteneur["poids"] = "~11.500 kilogrammes";
chariotconteneur["description"] = "Le chariot élévateur transporte les conteneurs sur le port.";

// Chariot palette
var chariotpalette = new Object();
chariotpalette["titre"] = "Chariot élévateur palette";
chariotpalette["hauteur"] = "~2,610 mètres";
chariotpalette["capacite"] = "Peut charger jusqu'à ~1600 kilogrammes";
chariotpalette["poids"] = "~3330 kilogrammes";
chariotpalette["description"] = "Le chariot élévateur de palette sert à charger et décharger des palettes.";

var tabDonnees = [];
tabDonnees[0] = portique;
tabDonnees[1] = cavalier;
tabDonnees[2] = portiquebarge;
tabDonnees[3] = reachstacker;
tabDonnees[4] = portiquetrain;
tabDonnees[5] = chariotconteneur;
tabDonnees[6] = chariotpalette;

var nomObjet = ["portique.html", "cavalier.html", "portiquebarge.html", "reachstacker.html", "portiquetrain.html", "chariotconteneur.html", "chariotpalette.html"];
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
  b.src = "manutention/" + nomObjet[id];
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
  b.src = "manutention/" + nomObjet[courantId];
  MajTableau(courantId);
}

function Precedent() {
  var container = document.getElementById("example1div");
  var b = document.querySelector("iframe");
  courantId = courantId - 1;
  if (courantId == -1) {
    courantId = taille - 1;
  }
  b.src = "manutention/" + nomObjet[courantId];
  MajTableau(courantId);
}

function MajTableau(id) {
  var valeur = tabDonnees[id];
  var titre = document.getElementById("nomManutention");
  titre.innerHTML = valeur["titre"];
  var hauteur = document.getElementById("hauteur");
  hauteur.innerHTML = valeur["hauteur"];
  var capacite = document.getElementById("capacite");
  capacite.innerHTML = valeur["capacite"];
  var poids = document.getElementById("poids");
  poids.innerHTML = valeur["poids"];
  var description = document.getElementById("description");
  description.innerHTML = valeur["description"];
}