const Fcolorbox = document.getElementById("Fcolorbox");
const Acolorbox = document.getElementById("Acolorbox");
const colorcode = document.getElementById("colorcode");
const Complementycolor = document.getElementById("Complementycolor");
const savedColorsContainer = document.getElementById("savedColors");

// Convert HEX to RGB
function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}

// Convert RGB to HEX
function rgbToHex(r, g, b) {
    return (
        "#" +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    );
}

// Update complementary color when user picks a color
Fcolorbox.addEventListener("input", function () {
    const color = Fcolorbox.value;
    colorcode.innerText = `Color Code: ${color}`;

    // Convert HEX to RGB
    const rgb = hexToRgb(color);

    // Calculate complementary color
    const r = 255 - rgb.r;
    const g = 255 - rgb.g;
    const b = 255 - rgb.b;

    // Convert back to HEX
    const complementHex = rgbToHex(r, g, b);

    // Update Complementary Color Box
    Acolorbox.style.backgroundColor = complementHex;
    Complementycolor.innerText = `Complementary Color: ${complementHex}`;
});

function copyColor() {
    navigator.clipboard.writeText(Fcolorbox.value).then(() => {
        alert("Copied: " + Fcolorbox.value);
    });
}

function saveColor() {
    const color = Complementycolor.innerText.split(": ")[1]; // Get Complementary color HEX
    if (!color) return;

    // Get stored colors from localStorage
    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];

    // Avoid duplicate saves
    if (!savedColors.includes(color)) {
        savedColors.push(color);
        localStorage.setItem("savedColors", JSON.stringify(savedColors));
        displaySavedColors();
    }
}

function displaySavedColors() {
    savedColorsContainer.innerHTML = ""; // Clear existing colors
    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];

    savedColors.forEach((color) => {
        const colorBox = document.createElement("div");
        colorBox.classList.add("saved-color-box");
        colorBox.style.backgroundColor = color;
        colorBox.title = color;
        savedColorsContainer.appendChild(colorBox);
    });
}

// Load saved colors on page load
displaySavedColors();