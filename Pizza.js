class Pizza {
    constructor(masa, tamano, ingredientes){
        this.masa = masa;
        this.tamano= tamano;
        this.ingredientes= ingredientes;
    }

    //MÉTODOS

    preparar(){
        console.log(`Preparando piza ${this.tamano}, ${this.masa}, Ingredientes: ${this.ingredientes}`);
        return this;
    }

    hornear(){
        console.log(`La pizza esta en el horno`);
        return this;
    }

    empacar(){
        console.log(`Empacando pizza...`);
        console.log(`Pizza lista para ser enviada!`);
        return this;

    }

}

const pizzaPolloChampinones = new Pizza ('Masa delgada', 'Grande',['Queso', 'Pollo', 'Champiñones'] );
console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());
