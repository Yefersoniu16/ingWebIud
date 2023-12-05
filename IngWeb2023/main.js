window.addEventListener('load', () => {
    const form = document.getElementById('formulario')
    const alertaName = document.getElementById('alerta_name');
    const alertaPrice = document.getElementById('alerta_price');
    const alertaInventory = document.getElementById('alerta_inventory');
    const nombre = document.getElementById('nombre');
    const price = document.getElementById('price');
    const inventory = document.getElementById('inventory');
    const boton = document.getElementById('button_create');
    

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
        alertaAggSuccessful()
        
    })

    const validaCampos = () => {
        const nombreValor = nombre.value.trim()
        const priceValor = price.value.trim()
        const inventoryValor = inventory.value.trim()
        // console.log(incentoryValor); // mostrar captura 

        if (!nombreValor === null || nombreValor === '') {
            alertaName.innerHTML = 'Campo requerido'
        
        }else{ alertaName.innerHTML = null}

        if (!priceValor === null || priceValor === '') {
            alertaPrice.innerHTML = 'Campo requerido'
           
        }else{alertaPrice.innerHTML = null}

        if (!inventoryValor === null || inventoryValor === '') {
            alertaInventory.innerHTML = 'Campo requerido'
            
        }else{alertaInventory.innerHTML = null}
        

    }

});



/*
if (price === null || price.value === '') {
    
    alertaPrice.innerHTML = 'Campo requerido'
    return false;
 
}
if (inventory === null || inventory.value === '') {
    alertaInventory.innerHTML = 'Campo requerido'
    return false;   
}*/




/*

boton.addEventListener('click', function () {
    //console.log("Hola mundo");
    validaCampos()
});

const validaCampos = () => {
    const nombreValor = nombre.value
    console.log(nombreValo);

}




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
    


    form.addEventListener("click", (e)=>{
        e.preventDefault();
         validateInputs();  
        alert('Producto creado');
    
}); 

    const validaOk = (input, msje) =>{
        const formControl = input.parentElement
    }
} 

 const alertaAggSuccessful = () => {
        const nombreValor = nombre.value.trim()
        const priceValor = price.value.trim()
        const inventoryValor = inventory.value.trim()
        // console.log(incentoryValor); // mostrar captura 

        if (!nombreValor !== null || nombreValor !== '') {
            alert('Producto creado');
        
        }

        if (!priceValor !== null || priceValor !== '') {
            alert('Producto creado');
           
        }

        if (!inventoryValor !== null || inventoryValor !== '') {
            alert('Producto creado');
            
        }

    }
    
    */






