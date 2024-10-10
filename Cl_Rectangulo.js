// Clase derivada Cl_rectangulo que hereda de Cl_cuadrado
import Cl_cuadrado from "./Cl_Cuadrado";
export default class Cl_rectangulo extends Cl_cuadrado {
    constructor(base, altura) {
        super(base); // Llamamos al constructor de Cl_cuadrado
        this.altura = altura;
    }

    // Método para calcular el área del rectángulo
    area() {
        return this.lado * this.altura; // Usamos 'lado' como base
    }

    // Método para calcular el perímetro del rectángulo
    perimetro() {
        return 2 * this.lado + 2 * this.altura; // Usamos 'lado' como base
    }
}

