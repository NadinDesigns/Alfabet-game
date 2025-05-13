"use strict";

const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");
const audio2 = new Audio("audio/win.wav");
const correctOrder = ["box_a", "box_b", "box_c", "box_d", "box_e", "box_f"];

function checkOrder() {
  const box = Array.from(document.querySelectorAll(".boxes__box"));
  const currentOrder = [];
  for (let i = 0; i < box.length; i++) {
    currentOrder.push(box[i].classList[1]);
  }

  let isCorrect = true;
  for (let i = 0; i < correctOrder.length; i++) {
    if (correctOrder[i] !== currentOrder[i]) {
      isCorrect = false;
      break;
    }
  }
  if (isCorrect) {
    audio2.play();
  }
}
const boxList = Array.from(document.querySelectorAll(".boxes__box"));
for (const clickedBox of boxList) {
  clickedBox.addEventListener("click", function () {
    if (clickedBox.previousElementSibling != 0) {
      clickedBox.parentElement.insertBefore(
        clickedBox,
        clickedBox.previousElementSibling
      );
      audio.play();
      checkOrder();
    } else if (clickedBox.nextElementSibling != 0) {
      clickedBox.nextElementSibling.insertAfter(
        clickedBox,
        clickedBox.nextElementSibling
      );
      audio.play();
      checkOrder();
    }
  });
}
