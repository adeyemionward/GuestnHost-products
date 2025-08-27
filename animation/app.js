let envelope = document.querySelector(".envelope");

let envelopeTop = document.querySelector(".top");
let letter = document.querySelector(".letter");

let toggle = false;
let two = document.querySelector(".two");
envelopeTop.classList.add("close");

function putIn() {
  letter.classList.remove("pullOut");
  letter.classList.add("putIn");
}
function pullOut() {
  letter.classList.remove("putIn");
  letter.classList.add("pullOut");
}
function close() {
  if (toggle) {
    envelopeTop.classList.remove("open");
    envelopeTop.classList.add("close");
    toggle = false;
  }
}
function Name() {
  two.classList.add("hidden");
}

function openEnvelope() {
  envelopeTop.classList.remove("close");
  envelopeTop.classList.add("open");
  toggle = true;
  pullOut();
}
function ComeFront() {
  letter.classList.add("comeFront");
  envelope.classList.add("active");
}

setTimeout(() => Name(), 2000);
setTimeout(() => openEnvelope(), 3000);
setTimeout(() => ComeFront(), 4000);
