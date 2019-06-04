'use strict';

var baniereAffiche = 5;

function tempo() {
	setTimeout('tempo()', 5000);
	changeBaniere();
}
function changeBaniere() {
	baniereAffiche += 1;

	if (baniereAffiche < 0) baniereAffiche += 5;
	if (baniereAffiche >= 5) baniereAffiche -= 5;

	changement();
}

function changement() {
	var img;
	var pos;
	var cpt = 0;
	while (cpt < 5) {
		img = document.getElementById('img_baniere' + cpt);
		switch (cpt) {
			case ((baniereAffiche - 2) % 5 + 5) % 5:
				img.style.zIndex = 1;
				img.style.left = "0%";
				break;
			case ((baniereAffiche - 1) % 5 + 5) % 5:
				img.style.zIndex = 2;
				img.style.left = "0%";
				break;
			case (baniereAffiche % 5 + 5) % 5:
				img.style.zIndex = 3;
				img.style.left = "41%";

				break;
			case ((baniereAffiche + 1) % 5 + 5) % 5:
				img.style.zIndex = 2;
				img.style.left = "85%";
				break;
			case ((baniereAffiche + 2) % 5 + 5) % 5:
				img.style.zIndex = 1;
				img.style.left = "85%";
				break;
		}
		cpt++;
	}
}