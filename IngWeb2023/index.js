const contenedorCar = document.getElementById("productos-container");


function creaCarProductosInicio(Productos){
  contenedorCar.innerHTML = `
  <table style= "width: 100%;">
  <tr>
  <th>Logo</th>
  <th>Nombre</th>
  <th>Precio</th>
  <th>candidad</th>
  <th>Total</th>
  </table>
  </tr>
  <p></p>
  `

    Productos.forEach(Producto => {
        const nuevoVehicle = document.createElement("div");
        let total = 0;
        nuevoVehicle.classList = "tarjeta-producto";
        nuevoVehicle.innerHTML = `
          <img src=${Producto.image}> 
          <h3>${Producto.brand}</h3> 
          <h3>$${Producto.price}</h3> 
          <h3>${Producto.quantity}</h3>
          <h3>$${total += Producto.price * Producto.quantity}</h3>
        `
       contenedorCar.appendChild(nuevoVehicle);     
    });
   

  }

creaCarProductosInicio(vehicle);

