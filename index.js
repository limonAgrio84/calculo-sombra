const heightInput = document.getElementById("height");
const sunRiseInput = document.getElementById("sunRise");
const resultInput = document.getElementById("result");
const calculate = document.getElementById("calculate");
const credits = document.getElementById("credits");

console.log("Leonardo y Maximo estuvieron aquí")

calculate.addEventListener("click",()=>{
    let height = parseFloat(heightInput.value);
    let sunRise = parseFloat(sunRiseInput.value);
    let angleInRadians = sunRise * (Math.PI / 180);
    let tan = Math.tan(angleInRadians);
    let result = height/tan;
    resultInput.textContent = "La longitud de la sombra es de "+result+"metros";
});

credits.addEventListener("click", () => {
    window.open("https://www.sunearthtools.com/dp/tools/pos_sun.php?lang=es", "_blank");
});