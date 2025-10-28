document.getElementById("startBtn").addEventListener("click", startAnimation);

function startAnimation() {
    const boxes = document.querySelectorAll(".box");
    const arrows = document.querySelectorAll(".arrow");
    const descriptions = [
        document.getElementById("desc1"),
        document.getElementById("desc2"),
        document.getElementById("desc3"),
        document.getElementById("desc4"),
        document.getElementById("desc5")
    ];

    const textos = [
        "Aquí llega la instrucción desde la memoria o entrada del sistema.",
        "La Unidad de Control interpreta la instrucción y dirige el flujo de datos.",
        "Los registros almacenan temporalmente datos y resultados intermedios.",
        "La ALU realiza los cálculos y comparaciones necesarias.",
        "El resultado se envía a la memoria o al dispositivo de salida."
    ];

    // Reiniciar estado
    boxes.forEach(b => b.classList.remove("active"));
    arrows.forEach(a => a.classList.remove("visible"));
    descriptions.forEach(d => { d.textContent = ""; d.classList.remove("visible"); });

    let step = 0;

    const steps = [
        () => activate(0, null),
        () => activate(1, 0),
        () => activate(2, 1),
        () => activate(3, 2),
        () => activate(4, 3)
    ];

    function activate(boxIndex, arrowIndex) {
        if (arrowIndex !== null) arrows[arrowIndex].classList.add("visible");
        boxes[boxIndex].classList.add("active");

        descriptions[boxIndex].textContent = textos[boxIndex];
        descriptions[boxIndex].classList.add("visible");
    }

    function nextStep() {
        if (step < steps.length) {
            steps[step]();
            step++;
            setTimeout(nextStep, 2500);
        } else {
            // Reinicia automáticamente después de un breve tiempo
            setTimeout(startAnimation, 4000);
        }
    }

    nextStep();
}
