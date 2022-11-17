# etown-register

This is a small project that helps speed up the course registration process at Elizabethtown College. The script inputs the course IDs and clicks submit for you automatically.

## Instructions

1. Add up to 6 courses IDs to the courses array in register.js
```javascript
// For 6 courses
courses = [
		"44831",
		"44039",
		"44043",
		"44044",
		"44150",
		"44151",
	];

// For fewer than 6 courses, delete unneeded lines
courses = [
		"44831",
		"44039",
		"44043",
		"44044",
	];
```

2. Convert the entire register.js to a [bookmarklet](https://www.freecodecamp.org/news/what-are-bookmarklets/). This is done by adding `javascript: (() => {` at the top of the script and `})();` to the bottom of the script. Example of the final product:
```javascript
javascript: (() => {
	courses = [
		"44831",
		"44039",
		"44043",
		"44044",
		"44150",
		"44151",
	];

	for (let i = 1; i <= courses.length; i++) {
		if (i > 6)
			break;

		input = document.querySelector("#pg0_V_tabRef_tbRefNum" + i);
		input.disabled = false;
		input.classList.remove("disabled");

		input.value = courses[i - 1];
	};

	submit = document.querySelector("#pg0_V_tabRef_gbtnSearchRef");
	submit.disabled = false;
	submit.classList.remove("disabled");
	submit.click();
})();
```

3. Lastly, [add the bookmarklet](https://www.freecodecamp.org/news/what-are-bookmarklets/) to your favorite browser.

## Testing + Day of Registration

To ensure that this project is working properly, I have made it so the form fields are enabled to test the script. This will not allow you to register early for courses.

In Jayweb, Navigate to this page and click on your bookmark to run the script. 
![Jayweb](https://github.com/ethanlaj/etown-register/blob/main/Jayweb.png)
