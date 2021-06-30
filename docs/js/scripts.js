window.onload = () => {
	const weekday = new Date().getDay();
	if (weekday == 0) document.getElementById('sun').classList.add('highlight');
	else if (weekday == 5 || weekday == 6)
		document.getElementById('fri-sat').classList.add('highlight');
	else document.getElementById('mon-thurs').classList.add('highlight');

	document.getElementById(window.location.hash.substring(1)).scrollIntoView();
};
