
  // Get the modal
  var modal = document.getElementById("myModal");
  var courantId;

  // Création objet
  //
  // Standard
  var standard = new Object();
  standard["titre"] = "Conteneur 20 et 40 pieds";
  standard["largeur"] = "2,438 mètres";
  standard["longueur"] = "20' : 6,058 mètres <br>" + "40' : 12,192 mètres";
  standard["hauteur"] = "2,591 mètres";
  standard["capacite"] = "20' : 33 m³ <br>" + "40' : 67 m³";
  standard["poids"] = "20' : 2.250 kilogrammes <br>" + "40' : 3.900 kilogrammes";
  standard["description"] = "Le conteneur de référence, idéal pour stocker ou transporter des marchandises non périssables dans toutes les situations.";

  // HighCube
  var highcube = new Object();
  highcube["titre"] = "HighCube 20 et 40 pieds";
  highcube["largeur"] = "2,438 mètres";
  highcube["longueur"] = "20' : 6,058 mètres <br>" + "40' : 12,192 mètres";
  highcube["hauteur"] = "2,891 mètres";
  highcube["capacite"] = "20' : 37,28 m³ <br>" + "40' : 76,3 m³";
  highcube["poids"] = "20' : 2.420 kilogrammes <br>" + "40' : 4.000 kilogrammes";
  highcube["description"] = "Grâce à ses 30 cm de hauteur supplémentaires, Le High cube optimise le chargement des marchandises";

  // Double porte
  var doubleporte = new Object();
  doubleporte["titre"] = "Conteneur double porte";
  doubleporte["largeur"] = "2,438 mètres";
  doubleporte["longueur"] = "6,058 mètres";
  doubleporte["hauteur"] = "2,591 mètres";
  doubleporte["capacite"] = "32,8 m³";
  doubleporte["poids"] = "2.300 kilogrammes";
  doubleporte["description"] = "Le conteneur est facile d’accès et de chargement grâce à ses ouvertures frontales à chaque extrémité, il est idéal pour le stockage de marchandises.";

  // Citerne
  var citerne = new Object();
  citerne["titre"] = "Citerne";
  citerne["largeur"] = "2,438 mètres";
  citerne["longueur"] = "6,058 mètres";
  citerne["hauteur"] = "2,591 mètres";
  citerne["capacite"] = "26.000 litres";
  citerne["poids"] = "4.620 kilogrammes";
  citerne["description"] = "Le conteneur citerne transporte toutes sortes de produits liquides, il est transporté dans les mêmes conditions qu'un conteneur standard.";

  // Flatrack
  var flatrack = new Object();
  flatrack["titre"] = "FlatRack";
  flatrack["largeur"] = "2,438 mètres";
  flatrack["longueur"] = "20' : 6,058 mètres <br>" + "40' : 12,192 mètres" ;
  flatrack["hauteur"] = "2.591 mètres";
  flatrack["capacite"] = "-";
  flatrack["poids"] = "20' : 2.900 kilogrammes <br>" + "40' : 4.795 kilogrammes";
  flatrack["description"] = "Le conteneur Flatrack est idéal pour le transport de marchandises hors gabarit. Il existe une version pliable de ce conteneur.";

  // PaletWide
  var paletwide = new Object();
  paletwide["titre"] = "PaletWide 45 pieds";
  paletwide["largeur"] = "2,500 mètres";
  paletwide["longueur"] = "13,716 mètres";
  paletwide["hauteur"] = "2,896 mètres";
  paletwide["capacite"] = "89,2 m³";
  paletwide["poids"] = "4.860 kilogrammes";
  paletwide["description"] = "Conteneur 45";

  // Conteneur DRY
  var dry = new Object();
  dry["titre"] = "Mini conteneur";
  dry["largeur"] = "2,438 mètres";
  dry["longueur"] = "6' : 1,829 mètres <br>" + "8' : 2,438 mètres" + "10' : 3,048 mètres";
  dry["hauteur"] = "2.591 mètres";
  dry["capacite"] = "6' : 6,66 m³ <br>" + "8' : 9,950 m³" + "10' : 15,950 m³";
  dry["poids"] = "6' : 450 kilogrammes <br>" + "8' : 950 kilogrammes" + "10' : 1.300 kilogrammes";
  dry["description"] = "Des petits conteneurs facilement transportable et adaptable aux espaces restreints. Ils conviennent notamment aux besoins des chantiers.";

  // OpenSide
  var openside = new Object();
  openside["titre"] = "OpenSide";
  openside["largeur"] = "2,438 mètres";
  openside["longueur"] = "6,058 mètres";
  openside["hauteur"] = "2,591 mètres";
  openside["capacite"] = "28,910 m³";
  openside["poids"] = "3.180 kilogrammes";
  openside["description"] = "Le conteneur est facile d’accès et de chargement grâce à son ouverture latérale totale, il est idéal pour le stockage de marchandises.";

  // Reefer
  var reefer = new Object();
  reefer["titre"] = "Reefer";
  reefer["largeur"] = "2,438 mètres";
  reefer["longueur"] = "6,058 mètres";
  reefer["hauteur"] = "2,591 mètres";
  reefer["capacite"] = "28,770 m³";
  reefer["poids"] = "2.770 kilogrammes";
  reefer["description"] = "Grâce à son système de ventilation, le conteneur reefer est idéal pour stocker ou transporter vos marchandises périssables exigeant une température dirigée (-30° à 30°).";

  // OpenTop
  var opentop = new Object();
  opentop["titre"] = "OpenTop";
  opentop["largeur"] = "2,438 mètres";
  opentop["longueur"] = "6,058 mètres";
  opentop["hauteur"] = "2,591 mètres";
  opentop["capacite"] = "32,5 m³";
  opentop["poids"] = "2.350 kilogrammes";
  opentop["description"] = "Un conteneur permettant le chargement et le déchargement des marchandises par le haut.";

  // Pliable
  var fold = new Object();
  fold["titre"] = "Conteneur pliable fold";
  fold["largeur"] = "2,438 mètres";
  fold["longueur"] = "13,716 mètres";
  fold["hauteur"] = "2,591 mètres";
  fold["capacite"] = "67 m³";
  fold["poids"] = "3.900 kilogrammes";
  fold["description"] = "Un conteneur qui peut se plier. <a href=\"../src/document/4fold.pdf\">Cliquez ici pour voir la documentation du pliage/dépliage du conteneur</a> ";

  // Pliable
  var staxxon = new Object();
  staxxon["titre"] = "Conteneur pliable staxxon";
  staxxon["largeur"] = "2,438 mètres";
  staxxon["longueur"] = "6,058 mètres";
  staxxon["hauteur"] = "2,591 mètres";
  staxxon["capacite"] = "33 m³";
  staxxon["poids"] = "2.250 kilogrammes";
  staxxon["description"] = "Un conteneur qui peut se plier grâce à un chariot élévateur. <a href=\"https://www.youtube.com/watch?v=1Zr6t7wdKP0\">Cliquez ici pour voir le processus de pliage du conteneur</a>";


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
    b.src="conteneur/"+nomObjet[id];
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
    b.src="conteneur/"+nomObjet[courantId];
    MajTableau(courantId);
  }

  function Precedent() {
    var container = document.getElementById("example1div");
    var b = document.querySelector("iframe");
    courantId = courantId-1;
    if( courantId == -1 ) { courantId=taille-1; }
    b.src="conteneur/"+nomObjet[courantId];
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
