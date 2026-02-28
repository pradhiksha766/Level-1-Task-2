document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const calculatorSection = document.getElementById("calculatorSection");
    const calculateBtn = document.getElementById("calculateBtn");
    const resultSpan = document.getElementById("result");

    const modal = document.getElementById("modal");
    const greetingText = document.getElementById("greetingText");
    const closeModal = document.getElementById("closeModal");

    const colors = ["#007bff", "#ff5722", "#6f42c1", "#20c997", "#dc3545"];
    let colorIndex = 0;

    /* START BUTTON */
 startBtn.addEventListener("click", function () {

    // Change color immediately
    startBtn.style.backgroundColor = colors[colorIndex % colors.length];
    colorIndex++;

    // FORCE browser to repaint
    void startBtn.offsetWidth;

    // Wait 1 second BEFORE showing modal
    setTimeout(() => {

        const hour = new Date().getHours();
        let greeting;

        if (hour < 12) {
            greeting = "Good Morning ☀️";
        } else if (hour < 18) {
            greeting = "Good Afternoon 🌤";
        } else {
            greeting = "Good Evening 🌙";
        }

        greetingText.textContent =
            greeting + "! Welcome to the Addition Calculator.";

        modal.style.display = "flex";

    }, 1000); // 1 second gap

});

    /* CLOSE MODAL */
    closeModal.addEventListener("click", function () {

        // Change color again
        startBtn.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;

        // Hide modal
        modal.style.display = "none";

        // Show calculator
        calculatorSection.style.display = "block";

        // Hide start button
        startBtn.style.display = "none";
    });

    /* CALCULATE */
    calculateBtn.addEventListener("click", function () {

        calculateBtn.style.backgroundColor = colors[colorIndex % colors.length];
        colorIndex++;

        const val1 = parseFloat(document.getElementById("value1").value);
        const val2 = parseFloat(document.getElementById("value2").value);

        if (isNaN(val1) || isNaN(val2)) {
            alert("Please enter valid numbers!");
            return;
        }

        resultSpan.textContent = val1 + val2;
    });

});