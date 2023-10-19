function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const bodyColor = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStart.addEventListener('click', handlerStart);
btnStop.addEventListener('click', handlerStop);

let intervalID;

function btnDisabled(disable) {
  return disable;
}

function handlerStart() {
  if (!intervalID) {
    btnStart.disabled = btnDisabled(true);
    btnStop.disabled = !btnDisabled(true);
    intervalID = setInterval(() => {
      const randomColor = getRandomHexColor();
      bodyColor.style.backgroundColor = randomColor;
    }, 1000);
  }
}

function handlerStop() {
  clearInterval(intervalID);
  intervalID = null;
  btnStart.disabled = !btnDisabled(true);
  btnStop.disabled = btnDisabled(true);
}












// 2 variant

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// const bodyColor = document.querySelector('body');
// const btnStart = document.querySelector('button[data-start]');
// const btnStop = document.querySelector('button[data-stop]');

// btnStart.addEventListener('click', handlerStart);
// btnStop.addEventListener('click', handlerStop);

// let intervalID;

// function handlerStart() {
//   btnStart.disabled = true;
//   btnStop.disabled = false;
//   intervalID = setInterval(() => {
//     const randomColor = getRandomHexColor();
//     bodyColor.style.backgroundColor = randomColor;
//         }, 1000)
// }
    
// function handlerStop() {
//   clearInterval(intervalID);
//   intervalID = null;
//     btnStart.disabled = false;
//     btnStop.disabled = true;
// }

