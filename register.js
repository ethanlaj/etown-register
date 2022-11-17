courses = [
	"COURSE1",
	"COURSE2",
	"COURSE3",
	"COURSE4",
	"COURSE5",
	"COURSE6",
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
