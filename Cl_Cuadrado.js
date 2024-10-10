// Clase base Cl_cuadrado
export default class Cl_cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
   
    // Método para calcular el área del cuadrado
    area() {
        return this.lado * this.lado;
    }

    // Método para calcular el perímetro del cuadrado
    perimetro() {
        return 4 * this.lado;
    }
}
