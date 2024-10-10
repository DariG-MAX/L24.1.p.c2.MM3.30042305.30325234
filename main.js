import Cl_cuadrado from "./Cl_Cuadrado";
import Cl_rectangulo from "./Cl_Rectangulo";
export default class main {
    constructor(){
let ent= new Cl_cuadrado ("");
let ent2= new Cl_rectangulo ("2","5");
    
// Función para calcular el área y perímetro al hacer clic en el botón

 let resultado= document.getElementById('calcular').addEventListener('click', function() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const rectangulo = new Cl_rectangulo(base, altura);
    
    const area = rectangulo.area();
    const perimetro = rectangulo.perimetro();

    document.getElementById('resultado').innerText =` Área: ${area}, Perímetro: ${perimetro}`;
 })
};
}