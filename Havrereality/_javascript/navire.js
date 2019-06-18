
  // Get the modal
  var modal = document.getElementById("myModal");
  var courantId;

  // Création objet
  //
  // Porte conteneur
  var porteconteneur = new Object();
  porteconteneur["titre"] = "Porte-conteneur";
  porteconteneur["largeur"] = "Entre 30,56 mètres et 58,8 mètres";
  porteconteneur["longueur"] = "Entre 227,31 mètres et 399,87 mètres";
  porteconteneur["capacite"] = "Entre 1 572 EVP et 21 413 EVP";
  porteconteneur["description"] = "Le porte-conteneurs est un grand navire transportant un nombre très important de conteneurs entre les différents ports du monde.";

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
  bargepousseur["largeur"] = "7,40 mètres";
  bargepousseur["longueur"] = "24 mètres";
  bargepousseur["capacite"] = "~100 EVP";
  bargepousseur["description"] = "La barge est dépourvue de moteur, elle est propulsée par pousseur."
  +"Elle est utilisée pour l'approvisionnement et le déchargement de cargaison.";
  // Marpol collector
  var marpolcollector = new Object();
  marpolcollector["titre"] = "Marpol collector";
  marpolcollector["largeur"] = "15 mètres";
  marpolcollector["longueur"] = "46 mètres";
  marpolcollector["capacite"] = "400 m³";
  marpolcollector["description"] = "Le Marpol collector assure la collecte des déchets d'exploitation et résidus de cargaison des navires au port du Havre";
  // Tanker
  var tanker = new Object();
  tanker["titre"] = "Tanker St Sara";
  tanker["largeur"] = "17,2 mètres";
  tanker["longueur"] = "122.66 mètres";
  tanker["capacite"] = "8.607 m³ avec 13 cuves";
  tanker["description"] = "Le St Sara assure le service de soutage dans le port du Havre.";
  // Tugboat
  var tugboat = new Object();
  tugboat["titre"] = "Remorqueur";
  tugboat["largeur"] = "8,5 mètres";
  tugboat["longueur"] = "26,2 mètres";
  tugboat["capacite"] = "-";
  tugboat["description"] = "Les remorqueurs sont des petits bateaux très puissants qui guident les grands navires lors de leurs entrées au port du Havre ";

  // Automoteur
  var automoteur = new Object();
  automoteur["titre"] = "Automoteur";
  automoteur["largeur"] = "Entre 5 mètres et 11,40 mètres";
  automoteur["longueur"] = "Entre 38 mètres et 95 mètres";
  automoteur["capacite"] = "111 EVP";
  automoteur["description"] = "La barge automoteur transporte des conteneurs par les voies fluviales.";
  // Roulier
  var roulier = new Object();
  roulier["titre"] = "Roulier";
  roulier["largeur"] = "32 mètres";
  roulier["longueur"] = "199 mètres";
  roulier["capacite"] = "6.700 voitures";
  roulier["description"] = "Le roulier est un navire transportant des véhicules. Il peut aussi transporter des conteneurs.";

  var tabDonnees = [];
  tabDonnees[0] = porteconteneur;
  tabDonnees[1] = feeder;
  tabDonnees[2] = bargepousseur;
  tabDonnees[3] = marpolcollector;
  tabDonnees[4] = tanker;
  tabDonnees[5] = tugboat;
  tabDonnees[6] = automoteur;
  tabDonnees[7] = roulier;

  var nomObjet = ["porteconteneur.html", "feeder.html",  "bargepousseur.html", "marpolcollector.html",
                  "tanker.html",         "tugboat.html", "automoteur.html",    "roulier.html"];
  var taille = nomObjet.length;
  // Get the button that opens the modal
  var i;
  var btn = [];
  for( i=0; i<taille; i++){
    btn[i] = document.getElementById(i.toString());
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("shutdown")[0];

  // When the user clicks on the button, open the modal
  function afficheModale(id){
    modal.style.display = "block";
    var container = document.getElementById("example1div");
    var b = document.querySelector("iframe");
    b.src="navire/"+nomObjet[id];
    courantId=parseInt(id);
    MajTableau(courantId);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function Suivant() {
    var container = document.getElementById("example1div");
    var b = document.querySelector("iframe");
    courantId+=1;
    if( courantId == taille ) { courantId=0; }
    b.src="navire/"+nomObjet[courantId];
    MajTableau(courantId);
  }

  function Precedent() {
    var container = document.getElementById("example1div");
    var b = document.querySelector("iframe");
    courantId = courantId-1;
    if( courantId == -1 ) { courantId=taille-1; }
    b.src="navire/"+nomObjet[courantId];
    MajTableau(courantId);
  }

  function MajTableau(id){
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
