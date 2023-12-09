window.addEventListener('load', () => {

    const form = document.getElementById('formulario')
    const alertaName = document.getElementById('alerta_name');
    const alertaPrice = document.getElementById('alerta_price');
    const alertaInventory = document.getElementById('alerta_inventory');
    const nombre = document.getElementById('nombre');
    const price = document.getElementById('price');
    const inventory = document.getElementById('inventory');
    const boton = document.getElementById('button_create');
    alertaInventory.style.color = 'red'
    alertaName.style.color = 'red'
    alertaPrice.style.color = 'red'

    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const error = validaCampos()

        if (error === false) {
            alert('Producto creado')
        }

        alertaAggSuccessful()

    })

    const validaCampos = () => {
        let error = false
        const nombreValor = nombre.value.trim()
        const priceValor = price.value.trim()
        const inventoryValor = inventory.value.trim()


        if (!nombreValor === null || nombreValor === '') {
            alertaName.innerHTML = 'Campo requerido'
            error = true

        } else { alertaName.innerHTML = null }

        if (!priceValor === null || priceValor === '') {
            alertaPrice.innerHTML = 'Campo requerido'
            error = true

        } else { alertaPrice.innerHTML = null }

        if (!inventoryValor === null || inventoryValor === '') {
            alertaInventory.innerHTML = 'Campo requerido'
            error = true

        } else { alertaInventory.innerHTML = null }

        return error
    }

});







