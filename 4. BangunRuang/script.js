function reset() {
    location.reload();
}
function calculate() {
    const shape = document.getElementById("shape").value;
    let result;

    if (shape === "tabung") {
        const radius = parseFloat(document.getElementById("radius").value);
        const height = parseFloat(document.getElementById("height").value);
        const area = Math.PI * radius * radius;
        const volume = area * height;
        result = `Luas Alas: ${area.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
    } else if (shape === "bola") {
        const radius = parseFloat(document.getElementById("radius").value);
        const area = 4 * Math.PI * radius * radius;
        const volume = (4 / 3) * Math.PI * radius * radius * radius;
        result = `Luas Permukaan: ${area.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
    } else if (shape === "limas") {
        const baseSide = parseFloat(document.getElementById("baseSide").value);
        const height = parseFloat(document.getElementById("height").value);
        const area = baseSide * baseSide;
        const volume = (1 / 3) * area * height;
        result = `Luas Alas: ${area.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
    }

    document.getElementById("result").textContent = result;
}

document.getElementById("shape").addEventListener("change", function() {
    const shape = this.value;
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";

    if (shape === "tabung" || shape === "bola") {
        const radiusInput = document.createElement("input");
        radiusInput.type = "number";
        radiusInput.placeholder = "Radius";
        radiusInput.id = "radius";
        inputsDiv.appendChild(radiusInput);
    }

    if (shape === "tabung") {
        const heightInput = document.createElement("input");
        heightInput.type = "number";
        heightInput.placeholder = "Tinggi";
        heightInput.id = "height";
        inputsDiv.appendChild(heightInput);
    } else if (shape === "limas") {
        const baseSideInput = document.createElement("input");
        baseSideInput.type = "number";
        baseSideInput.placeholder = "Panjang Sisi Alas";
        baseSideInput.id = "baseSide";
        inputsDiv.appendChild(baseSideInput);
    }
});
