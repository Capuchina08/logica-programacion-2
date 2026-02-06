let tempUser = Number(prompt("Ingresa una temperatura en grados celsius:"));

//2. definir las variablles con las formulas a ocupar
let tempKelvin = tempUser + 273.15;
let tempFarenheit = ((tempUser * 9 )/ 5) + 32;



//3. Mostrar resultados
console.log(`Entrada: ${tempUser}`);
    console.log(`Grados Kelvin: ${tempKelvin}`);
    console.log(`Grados Fahrenheit: ${tempFarenheit}`);