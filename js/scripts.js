// Constantes
const menuButton = document.querySelector(".menu-button");
const navigationMobile = document.querySelector(".navigation-mobile");
const title = document.querySelector(".title");

const copyright = document.querySelector("#copyright");

var cleaning = true;
var textHomeTitle = "All For One";

// Events
menuButton.addEventListener("click", (e) => {
	let opened = navigationMobile.classList.contains("open");
	if (opened) {
		navigationMobile.classList.remove("open");
		navigationMobile.classList.add("close");
	} else {
		navigationMobile.classList.remove("close");
		navigationMobile.classList.add("open");
	}
});

function updateHomeTitle() {
	const titleList = [
		"All For One",
		"Full Stack",
		"Front-End",
		"Back-End",
		"Game Dev",
		"Graphic Artist",
		"Pixel Artist",
	];

	var listCounter = 0;

	setInterval(() => {
		if (cleaning && title.textContent.length > 0) {
			title.textContent = title.textContent.substring(
				0,
				title.textContent.length - 1
			);
		} else if (!cleaning && title.textContent.length < textHomeTitle.length) {
			title.textContent =
				title.textContent + textHomeTitle.charAt(title.textContent.length);
		}

		if (title.textContent.length == 0) {
			listCounter = listCounter < titleList.length - 1 ? listCounter + 1 : 0;
			textHomeTitle = titleList[listCounter];
			let toggle = setTimeout(() => {
				cleaning = false;
				clearTimeout(toggle);
			}, 1000);
		} else if (title.textContent == textHomeTitle) {
			let toggle = setTimeout(() => {
				cleaning = true;
				clearTimeout(toggle);
			}, 500);
		}
	}, 100);
}

function initCopyRight()
{
	let year = new Date().getFullYear();
	copyright.textContent = `Copyright © ${year} by damatomos`
}

initCopyRight();