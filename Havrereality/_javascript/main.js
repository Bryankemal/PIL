
  // Get the modal
  var modal = document.getElementById("myModal");
  var courantId;

  // Création objet

  // Citerne
  var citerne = new Object();
  citerne["titre"] = "Citerne";
  citerne["largeur"] = "2.438 mètres";
  citerne["longueur"] = "6.058 mètres";
  citerne["hauteur"] = "2.591 mètres";
  citerne["capacite"] = "500 litres";
  citerne["poids"] = "1000 kilogrammes";
  citerne["description"] = "Conteneur citerne qui transporte principalement de l'essence";

  // Flatrack
  var flatrack = new Object();
  flatrack["titre"] = "FlatRack";
  flatrack["largeur"] = "2.438 mètres";
  flatrack["longueur"] = "6.058 mètres";
  flatrack["hauteur"] = "2.591 mètres";
  flatrack["capacite"] = "500 litres";
  flatrack["poids"] = "1000 kilogrammes";
  flatrack["description"] = "Conteneur flatrack qui peut se plier";

  // Flatrack
  var highcube = new Object();
  highcube["titre"] = "HighCube 20 et 40 pieds";
  highcube["largeur"] = "2.438 mètres";
  highcube["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
  highcube["hauteur"] = "2.891 mètres";
  highcube["capacite"] = "500 litres";
  highcube["poids"] = "1000 kilogrammes";
  highcube["description"] = "Conteneur plus haut";

  var tabDonnees = [];
  tabDonnees[0] = citerne;
  tabDonnees[1] = flatrack;
  tabDonnees[2] = highcube;

  var nomObjet = ["citerne.html" , "FlatRack.html", "hc.html"];
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
    b.src=nomObjet[id];
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
    b.src=nomObjet[courantId];
    MajTableau(courantId);
  }

  function Precedent() {
    var container = document.getElementById("example1div");
    var b = document.querySelector("iframe");
    courantId = courantId-1;
    if( courantId == -1 ) { courantId=taille-1; }
    b.src=nomObjet[courantId];
    MajTableau(courantId);
  }

  function MajTableau(id){
    var valeur = tabDonnees[id];
    var titre = document.getElementById("nomConteneur");
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
