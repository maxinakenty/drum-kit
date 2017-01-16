function module() {
	let keys = document.querySelectorAll('.key');
	
	function playSound(e) {
		let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		if (!key) return;
		key.classList.add('playing');
		audio.play();
	}

	function removeTransform(e) {
		if (e.propertyName !== 'transform') return;
		this.classList.remove('playing');
	}

	window.addEventListener('keydown', playSound);
	keys.forEach(key => key.addEventListener('transitionend', removeTransform));
}

export default module();