// Funktion zum Öffnen des Popup-Fensters
function fullView(ImgLink) {
  document.getElementById("fullImage").src = ImgLink;
  document.getElementById("fullImageView").style.display = "flex";
}
// Funktion zum Schliessen des Popup-Fensters
function closeFullView() {
  document.getElementById("fullImageView").style.display = "none";
}
//alle Images in einen Array packen
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
];

let indexImg = 0; //Aktueller Index der Bilder

function previous() {
  // mit dem Pfeil-Icon ein Bild zurück springen
  indexImg--; // Zeige das vorherige Bild im Popup an
  if (indexImg < 0) {
    indexImg = images.length - 1;
  } //Wenn Index kleiner null(erstes Bild) -> lade das letzte Bild aus dem Array
  fullView("./jpg/" + images[indexImg]);
}

function next() {
  // mit dem Pfeil-Icon ein Bild vorwärts springen
  indexImg++; //Zeige das nächste Bild im Popup an
  if (indexImg > images.length - 1) {
    indexImg = 0; //Das erste Bild wird geladen, wenn der Index grösser als die Länge des arrays(nach dem letzten Bild) ist
  }
  fullView("./jpg/" + images[indexImg]);
}
