"use strict";

// Get the modal
var modal = document.getElementById("myModal");
var courantId;

// Création objet

// Portique
var portique = new Object();
portique["titre"] = "Portique";
portique["largeur"] = "2.438 mètres";
portique["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
portique["hauteur"] = "2.591 mètres";
portique["capacite"] = "500 litres";
portique["poids"] = "1000 kilogrammes";
portique["description"] = "Le portique permet de décharger un porte-conteneur amarré au port";

// Cavalier
var cavalier = new Object();
cavalier["titre"] = "Cavalier";
cavalier["largeur"] = "2.438 mètres";
cavalier["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
cavalier["hauteur"] = "2.891 mètres";
cavalier["capacite"] = "500 litres";
cavalier["poids"] = "1000 kilogrammes";
cavalier["description"] = "Le cavalier transporte les conteneurs pour les stocker sur le port ou pour charger des camions";

// Portique multimodale barge
var portiquebarge = new Object();
portiquebarge["titre"] = "Portique multimodale barge";
portiquebarge["largeur"] = "2.438 mètres";
portiquebarge["longueur"] = "6.058 mètres";
portiquebarge["hauteur"] = "2.891 mètres";
portiquebarge["capacite"] = "500 litres";
portiquebarge["poids"] = "1000 kilogrammes";
portiquebarge["description"] = "Le portique multimodale charge est décharge les barges se trouvant à la plate-forme multimodale";

// Reach stacker
var reachstacker = new Object();
reachstacker["titre"] = "Reach stacker";
reachstacker["largeur"] = "2.438 mètres";
reachstacker["longueur"] = "6.058 mètres";
reachstacker["hauteur"] = "2.591 mètres";
reachstacker["capacite"] = "500 litres";
reachstacker["poids"] = "1000 kilogrammes";
reachstacker["description"] = "Le Reach stacker transporte les conteneurs et peut charger des trains";

// Portique multimodale train
var portiquetrain = new Object();
portiquetrain["titre"] = "Portique multimodale train";
portiquetrain["largeur"] = "2.438 mètres";
portiquetrain["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
portiquetrain["hauteur"] = "2.591 mètres";
portiquetrain["capacite"] = "500 litres";
portiquetrain["poids"] = "1000 kilogrammes";
portiquetrain["description"] = "Le portiquetrain st Sara vient se placer à côté des porte-conteneur pour les ravitailler en carburant";

// Chariot conteneur
var chariotconteneur = new Object();
chariotconteneur["titre"] = "Chariot élévateur conteneur";
chariotconteneur["largeur"] = "2.438 mètres";
chariotconteneur["longueur"] = "13,716 mètres";
chariotconteneur["hauteur"] = "2.591 mètres";
chariotconteneur["capacite"] = "500 litres";
chariotconteneur["poids"] = "1000 kilogrammes";
chariotconteneur["description"] = "Le chariot élévateur transporte les conteneurs sur le port.";

// Chariot palette
var chariotpalette = new Object();
chariotpalette["titre"] = "Chariot élévateur palette";
chariotpalette["largeur"] = "2.438 mètres";
chariotpalette["longueur"] = "6' : 1.829 mètres <br>" + "8' : 2,438 mètres" + "10' : 3,048 mètres";
chariotpalette["hauteur"] = "2.591 mètres";
chariotpalette["capacite"] = "500 litres";
chariotpalette["poids"] = "1000 kilogrammes";
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