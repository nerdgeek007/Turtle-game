const turtle = document.querySelector('.turtle');

const h1 = document.querySelector('h1');
let x = 0;
let y = 0;
let speed = 50;

let flipped = false;
let rotate = 0;

function handleKey(e) {
	if (!e.key.includes('Arrow')) {
		return h1.classList.add('wrong');
	} else {
		h1.classList.remove('wrong');
		h1.classList.add('show');
	}

	// move turtle according to arrow keys
	switch (e.key) {
		case 'ArrowUp':
			y -= 1;
			rotate = -90;
			break;

		case 'ArrowDown':
			y += 1;
			rotate = 90;
			break;

		case 'ArrowLeft':
			x -= 1;
			rotate = 0;
			flipped = true;
			break;

		case 'ArrowRight':
			x += 1;
			rotate = 0;
			flipped = false;
			break;

		default:
			break;
	}
	// handles animation up, down, left, right of turtle
	turtle.setAttribute(
		'style',
		`--x:${x * 50}px;--y:${y * 50}px;--rotateX:${
			flipped ? '180' : '0'
		}deg;--rotate:${rotate}deg;`
	);
}

window.addEventListener('keydown', handleKey);
