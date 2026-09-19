let selectedDate = "";
let selectedTime = "";
let selectedFood = "";


// رفتن به یک مرحله

function nextStep(number) {

    document.querySelectorAll(".step").forEach(function(step) {
        step.classList.remove("active");
    });


    document.getElementById("step" + number)
        .classList.add("active");


    document.querySelectorAll(".progress span")
        .forEach(function(progress) {
            progress.classList.remove("active");
        });


    for (let i = 1; i <= number; i++) {

        document.getElementById("progress" + i)
            .classList.add("active");
    }
}


// ذخیره تاریخ و ساعت

function saveDate() {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;


    if (date === "" || time === "") {

        alert("لطفاً تاریخ و ساعت را انتخاب کن ❤️");

        return;
    }


    selectedDate = date;
    selectedTime = time;


    nextStep(3);
}


// انتخاب غذا

function selectFood(button, food) {

    document.querySelectorAll(".food")
        .forEach(function(item) {
            item.classList.remove("selected");
        });


    button.classList.add("selected");

    selectedFood = food;
}


// ثبت نهایی

function finish() {

    if (selectedFood === "") {

        alert("اول غذات رو انتخاب کن 😋");

        return;
    }


    const result = document.getElementById("result");


    result.innerHTML =
        "تاریخ قرار: " + formatDate(selectedDate) +
        "<br>" +
        "ساعت: " + selectedTime +
        "<br>" +
        "غذا: " + selectedFood;


    nextStep(4);
}


// تبدیل تاریخ

function formatDate(date) {

    const parts = date.split("-");

    return parts[2] + "/" + parts[1] + "/" + parts[0];
}


// دکمه «نه» جابه‌جا شود

function moveNoButton(button) {

    const maxX = 100;
    const maxY = 50;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;


    button.style.transform =
        "translate(" + x + "px, " + y + "px)";
}