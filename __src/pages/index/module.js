function module() {
	function playSound(e) {
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

		if (!audio) return;
		audio.play();
		key.classList.add('playing');
	}

	function removeTransition(e) {
		console.log(e);
		if (e.propertyName !== 'transform') return;
		this.classList.remove('playing');

	}
	
	window.addEventListener('keydown', playSound);
	let keys = document.querySelectorAll('.key');

	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

export default module();