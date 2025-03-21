const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved mode from localStorage
toggle.addEventListener('click', () => {

	body.classList.toggle('dark');

	if (body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'enabled');
	} else {
		localStorage.setItem('dark-mode', 'disabled');
	}
});


const darkMode = localStorage.getItem('dark-mode');
if (darkMode === 'enabled') {
	body.classList.add('dark');
}


