const heightInput = document.getElementById("height");
const sunRiseInput = document.getElementById("sunRise");
const resultInput = document.getElementById("result");
const calculate = document.getElementById("calculate");
const credits = document.getElementById("credits");

console.log("Leonardo, Maximo, Pablo y Julian estuvieron aquí")

calculate.addEventListener("click",()=>{
    let height = parseFloat(heightInput.value);
    let sunRise = parseFloat(sunRiseInput.value);
    if(!height && !sunRise){
        window.alert("los dos datos estan mal puestos");
        return;
    }
    else if(!height){
        window.alert("la altura esta mal puesta");
        return;
    }
    else if(!sunRise){
        window.alert("el angulo de inclinacion del sol esta mal puesto");
        return;
    }
    let angleInRadians = sunRise * (Math.PI / 180);
    let tan = Math.tan(angleInRadians);
    let result = height/tan;
    resultInput.textContent = "La longitud de la sombra es de "+result+"metros";
});

credits.addEventListener("click", () => {
    window.open("https://www.sunearthtools.com/dp/tools/pos_sun.php?lang=es", "_blank");
});