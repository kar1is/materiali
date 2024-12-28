function toggle() {
	if(localStorage.getItem('theme') === 'dark') {
		var cp = localStorage.getItem('theme');
		var element = document.body;
		element.classList.toggle("dark-mode");
	}
	
	var coll = document.getElementsByClassName("collapsible");
	var i;
	
	for (i = 0; i <= coll.length; i++) {
	coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
		  content.style.display = "none";
		} else {
		  content.style.display = "block";
		}
	});
}
}

function darkMode() {
	var element = document.body;
	if (localStorage.getItem('theme') === 'light') {
		localStorage.setItem('theme', 'dark')
	}
	else {
		localStorage.setItem('theme', 'light')
	}
	element.classList.toggle("dark-mode");
}

