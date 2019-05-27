
  // Get the modal
  var modal = document.getElementById("myModal");
  var courantId;

  // Création objet
  //
  // Standard
  var standard = new Object();
  standard["titre"] = "Conteneur 20 et 40 pieds";
  standard["largeur"] = "2.438 mètres";
  standard["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
  standard["hauteur"] = "2.591 mètres";
  standard["capacite"] = "500 litres";
  standard["poids"] = "1000 kilogrammes";
  standard["description"] = "Conteneur standard";

  // HighCube
  var highcube = new Object();
  highcube["titre"] = "HighCube 20 et 40 pieds";
  highcube["largeur"] = "2.438 mètres";
  highcube["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres";
  highcube["hauteur"] = "2.891 mètres";
  highcube["capacite"] = "500 litres";
  highcube["poids"] = "1000 kilogrammes";
  highcube["description"] = "Conteneur plus haut";

  // Double porte
  var doubleporte = new Object();
  doubleporte["titre"] = "Conteneur double porte";
  doubleporte["largeur"] = "2.438 mètres";
  doubleporte["longueur"] = "6.058 mètres";
  doubleporte["hauteur"] = "2.891 mètres";
  doubleporte["capacite"] = "500 litres";
  doubleporte["poids"] = "1000 kilogrammes";
  doubleporte["description"] = "Conteneur s'ouvrant grâce à deux portes";

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
  flatrack["longueur"] = "20' : 6.058 mètres <br>" + "40' : 12.192 mètres" ;
  flatrack["hauteur"] = "2.591 mètres";
  flatrack["capacite"] = "500 litres";
  flatrack["poids"] = "1000 kilogrammes";
  flatrack["description"] = "Conteneur flatrack qui peut se plier";

  // PaletWide
  var paletwide = new Object();
  paletwide["titre"] = "PaletWide 45 pieds";
  paletwide["largeur"] = "2.438 mètres";
  paletwide["longueur"] = "13,716 mètres";
  paletwide["hauteur"] = "2.591 mètres";
  paletwide["capacite"] = "500 litres";
  paletwide["poids"] = "1000 kilogrammes";
  paletwide["description"] = "Conteneur 45";

  // Conteneur DRY
  var dry = new Object();
  dry["titre"] = "DRY 6,8,10 pieds";
  dry["largeur"] = "2.438 mètres";
  dry["longueur"] = "6' : 1.829 mètres <br>" + "8' : 2,438 mètres" + "10' : 3,048 mètres";
  dry["hauteur"] = "2.591 mètres";
  dry["capacite"] = "500 litres";
  dry["poids"] = "1000 kilogrammes";
  dry["description"] = "Conteneur 45";

  // OpenSide
  var openside = new Object();
  openside["titre"] = "OpenSide";
  openside["largeur"] = "2.438 mètres";
  openside["longueur"] = "13,716 mètres";
  openside["hauteur"] = "2.591 mètres";
  openside["capacite"] = "500 litres";
  openside["poids"] = "1000 kilogrammes";
  openside["description"] = "Conteneur s'ouvrant sur les côtés";

  // Reefer
  var reefer = new Object();
  reefer["titre"] = "Reefer";
  reefer["largeur"] = "2.438 mètres";
  reefer["longueur"] = "13,716 mètres";
  reefer["hauteur"] = "2.591 mètres";
  reefer["capacite"] = "500 litres";
  reefer["poids"] = "1000 kilogrammes";
  reefer["description"] = "Conteneur réfrigéré";

  // OpenTop
  var opentop = new Object();
  opentop["titre"] = "OpenTop";
  opentop["largeur"] = "2.438 mètres";
  opentop["longueur"] = "13,716 mètres";
  opentop["hauteur"] = "2.591 mètres";
  opentop["capacite"] = "500 litres";
  opentop["poids"] = "1000 kilogrammes";
  opentop["description"] = "Conteneur s'ouvrant par le dessus";

  // Pliable
  var fold = new Object();
  fold["titre"] = "Conteneur pliable fold";
  fold["largeur"] = "2.438 mètres";
  fold["longueur"] = "13,716 mètres";
  fold["hauteur"] = "2.591 mètres";
  fold["capacite"] = "500 litres";
  fold["poids"] = "1000 kilogrammes";
  fold["description"] = "Conteneur que l'on peut plier";

  // Pliable
  var staxxon = new Object();
  staxxon["titre"] = "Conteneur pliable staxxon";
  staxxon["largeur"] = "2.438 mètres";
  staxxon["longueur"] = "13,716 mètres";
  staxxon["hauteur"] = "2.591 mètres";
  staxxon["capacite"] = "500 litres";
  staxxon["poids"] = "1000 kilogrammes";
  staxxon["description"] = "Conteneur que l'on peut plier";


  var tabDonnees = [];
  tabDonnees[0] = standard;
  tabDonnees[1] = highcube;
  tabDonnees[2] = doubleporte;
  tabDonnees[3] = citerne;
  tabDonnees[4] = flatrack;
  tabDonnees[5] = paletwide;
  tabDonnees[6] = dry;
  tabDonnees[7] = openside;
  tabDonnees[8] = reefer;
  tabDonnees[9] = opentop;
  tabDonnees[10] = staxxon;
  tabDonnees[11] = fold;

  var nomObjet = ["dry20_40.html", "hc.html",        "doublePorte.html", "citerne.html",
                  "FlatRack.html", "paletWide.html", "dry6810.html",     "openSide.html",
                  "reefer.html",   "openTop.html",   "staxxon.html",      "fold.html",    ];
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
