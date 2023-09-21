class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}


const Buho = new Item("Buho ", 80, "buho.png");
const Manija = new Item("Manija", 180, "manija.png");
const Poción = new Item("Poción", 90, "pocion.png");

 const inventario = [];


let oro = 1000;

const elOro = document.querySelector("#Oro span");
elOro.innerText = oro;
const elInventario = document.getElementsByClassName("Inventario");

function comprar(item){
 if (oro - item.precio >= 0) {
    inventario.push(item);
    oro -= item.precio;
    actualizarHTML();
 } else {
    alert(`No te da la billetera pa comprar ${item.nombre}.`);
 }
}

const vender = () => { 
   return ""
}

function vender(nombreItem){
   
   const itemEncontrado = inventario.find((item) => item.nombre == nombreDelItem);

   if (itemEncontrado) { 
      oro += itemEncontrado.precio;

      const indice = inventario.indexOf(itemEncontrado)
      inventario.splice(indice,1);
      actualizarHTML();
   }
    
}

function actualizarHTML(){
 elInventario.innerHTML = "";
 for (const item of inventario) {
    const indice = inventario.indexOf(item);
    const li = 
    `
    <li onclick="vender('${item.nombre}')">
    <img src="img/${item.imagen}" alt="${item.imagen}" />
    </li>
    `;
    inventario.innerHTML += li;
 } 



 elOro.innerText = oro;

}