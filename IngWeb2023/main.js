
let alertaName = document.getElementById('alerta_name');
let alertaPrice = document.getElementById('alerta_price');
let alertaInventory = document.getElementById('alerta_inventory');
let nombre = document.getElementById('nombre');
let price = document.getElementById('price');
let inventory = document.getElementById('inventory');

const boton = document.getElementById('button_create');

function validateInputs(){
    if (nombre === null || nombre.value === '') {
        alertaName.innerHTML = 'Campo requerido'
       return false;
    }
    if (price === null || price.value === '') {
        alertaPrice.innerHTML = 'Campo requerido'
        return false;
     
    }
    if (inventory === null || inventory.value === '') {
        alertaInventory.innerHTML = 'Campo requerido'
        return false;   
    }
    
}

document.addEventListener("click", (e)=>{
    if(e.target === boton){
        e.preventDefault();
         validateInputs();  
    }else{
        alert('Producto creado');
    }
});



/*boton.addEventListener('click', function () {

    alert('Producto creado');

});*/








