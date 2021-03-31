
/**zoom of images */
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "img/industrielle1.jpg";
}
img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "img/industrielle2.jpg";
}
img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "img/industrielle3.jpg";
}
img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "img/industrielle4.jpg";
}
img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "img/industrielle5.jpg";
}
img6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "img/industrielle6.jpg";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
span2.onclick = function () {
  modal.style.display = "none";
}
