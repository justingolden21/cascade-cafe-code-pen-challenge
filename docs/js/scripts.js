window.onload = () => {
	// highlight hours
	const weekday = new Date().getDay();
	let weekname;
	if (weekday == 0) weekname = 'sun';
	else if (weekday == 5 || weekday == 6) weekname = 'fri-sat';
	else weekname = 'mon-thurs';
	document.getElementById(weekname).classList.add('highlight');

	// scroll to hash
	const elm = window.location.hash.substring(1);
	if (elm && elm.length) document.getElementById(elm).scrollIntoView();

	// mobile nav
	document.getElementById('menu-btn').addEventListener('click', () => {
		document.getElementById('menu').classList.toggle('hidden');
		document.getElementById('close').classList.toggle('hidden');
		document.querySelector('nav').classList.toggle('active');
	});
};
