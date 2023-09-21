class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}


const buho = new Item("Buho", 1800, "./buho.png");
const manija = new Item("Manija", 300, "./manija.png");
const pocion = new Item("Poción", 500, "./pocion.png");

 const inventario = [];


let oro = 5000;

const elOro = document.querySelector("#oro span");
elOro.innerText = oro;
const elInventario = document.getElementById("inventario");

function comprar(gameItem){
 if (oro - gameItem.precio >= 0) {
    inventario.push(gameItem);
    oro -= gameItem.precio;
    actualizarHTML();
 } else {
    alert(`No te da la billetera pa comprar ${gameItem.nombre}.`);
 }
}

function vender(nombreItem) {
   
   const itemEncontrado = inventario.find(
      (item) => item.nombre == nombreItem
      );

   if (itemEncontrado) { 
      oro += itemEncontrado.precio;

      const indice = inventario.indexOf(itemEncontrado)
      inventario.splice(indice,1);
      
      actualizarHTML();
   }
    
}

function actualizarHTML(){
 elInventario.innerHTML = "";
 for (const gameItem of inventario) {
    const li = 
    `
      <li onclick="vender('${gameItem.nombre}')">
         <img src="img/${gameItem.imagen}" alt="${gameItem.imagen}" />
      </li>
    `;
    elInventario.innerHTML += li;
 } 



 elOro.innerText = oro;

}
