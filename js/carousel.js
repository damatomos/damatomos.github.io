const carousel = document.querySelector(".carousel");
var lastUpdate = Date.now();
var dt = 1;
var running = true;

let cardList = [];
let imageList = ['css.svg', 'html.svg', 'node.svg', 'figma.svg', 'js.svg', 'react.svg', 'java.svg'];
let nextImage = 0;

function getNextImage()
{
  if (nextImage === imageList.length)
  {
    nextImage = 0;
  }
  let img = `../assets/${imageList[nextImage]}`;
  nextImage++;
  return img;
}

function createCard() {
	let card = document.createElement("div");
  let image = document.createElement('img');
  image.src = getNextImage();
	card.className = "card";

	card.style.left = `${document.body.clientWidth}px`;
  card.appendChild(image);
	carousel.appendChild(card);
	cardList.push(card);
  card.addEventListener('mouseenter', () => { running = false });
  card.addEventListener('mouseleave', () => { running = true; });
}

function anim(card, dt) {
	let position = Number(card.style.left.replace(/[^0-9 . -]/g, ""));
	if (!isNaN(position) && position > -200) {
		card.style.left = `calc(${card.style.left} - ${10 * dt}px)`;

		if (
			!card.dataset.passou &&
			position < document.body.clientWidth - 128 - 60
		) {
			card.dataset.passou = true;
			createCard();
		}
	} else 
  {
    card.remove();
  }
}

function tick() {
	let now = Date.now();
	if (running)
  {
    dt = (now - lastUpdate) / 60;
  } else
  {
    dt = 0;
  }
	lastUpdate = now;

	update(dt);
}

function update(dt) {
	cardList.forEach((item) => {
		anim(item, dt);
	});
}

setInterval(tick, 0);

createCard();