const stockProductos = [
  {
    id: 1,
    nombre: "Arceus",
    cantidad: 1,
    desc: "La mitología cuenta que este Pokémon nació antes de que el Universo existiera.",
    precio: 4200000,
    img: "/img/arceus.png",
  },
  {
    id: 2,
    nombre: "Blastoise",
    cantidad: 1,
    desc: "Dispara chorros de agua a través de los cañones de su caparazón, capaces de agujerear incluso el acero.",
    precio: 2500,
    img: "/img/blastoise.png",
  },
  {
    id: 3,
    nombre: "Blaziken",
    cantidad: 1,
    desc: "En combate, Blaziken expulsa vivas llamas por las muñecas y ataca al enemigo con fiereza. Cuanto más fuerte sea el enemigo, más intensas serán las llamas.",
    precio: 4570,
    img: "/img/blaziken.png",
  },
  {
    id: 4,
    nombre: "Bulbasaur",
    cantidad: 1,
    desc: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
    precio: 1000,
    img: "/img/bulbasaur.png",
  },
  {
    id: 5,
    nombre: "Charizard",
    cantidad: 1,
    desc: "Sus potentes alas le permiten volar a una altura de 1400 m. Escupe llamaradas que llegan a alcanzar temperaturas elevadísimas.",
    precio: 20200,
    img: "/img/charizard.png",
  },
  {
    id: 6,
    nombre: "Cyndaquil",
    cantidad: 1,
    desc: "Cyndaquil se protege soltando llamas por el lomo. Cuando está enfadado las llamas son fieras.",
    precio: 2000,
    img: "/img/cyndaquil.png",
  },
  {
    id: 7,
    nombre: "Duskull",
    cantidad: 1,
    desc: "Se vuelve invisible para acercarse sigilosamente a su presa. Es capaz de atravesar anchos muros.",
    precio: 1800,
    img: "/img/duskull.png",
  },
  {
    id: 8,
    nombre: "Jolteon",
    cantidad: 1,
    desc: "Si se agita, usa electricidad para convertir su pelaje en afiladísimas púas y dispararlas en racimos.",
    precio: 4200,
    img: "/img/jolteon.png",
  },
  {
    id: 9,
    nombre: "Mewtwo",
    cantidad: 1,
    desc: "Creado por la mano del hombre destaca por ser tremendamente poderoso.",
    precio: 300000,
    img: "/img/mewtwo.png",
  },
  {
    id: 10,
    nombre: "Moltres",
    cantidad: 1,
    desc: "Una de las aves legendarias. Al batir las alas, las llamas que las envuelven emiten un hermoso fulgor rojo.",
    precio: 9200,
    img: "/img/moltres.png",
  },
  {
    id: 11,
    nombre: "Ninjask",
    cantidad: 1,
    desc: "Este Pokémon es tan rápido que, según dicen, puede esquivar cualquier ataque. Le encanta alimentarse de la dulce savia de los árboles.",
    precio: 3200,
    img: "/img/ninjask.png",
  },
  {
    id: 12,
    nombre: "Onix",
    cantidad: 1,
    desc: "Al abrirse paso bajo tierra, va absorbiendo todo lo que encuentra. Eso hace que su cuerpo sea así de sólido.",
    precio: 3000,
    img: "/img/onix.png",
  },
  {
    id: 13,
    nombre: "Pikachu",
    cantidad: 1,
    desc: "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.",
    precio: 5000,
    img: "/img/pikachu.png",
  },
  {
    id: 14,
    nombre: "Piplup",
    cantidad: 1,
    desc: "Es muy orgulloso, por lo que odia aceptar comida de la gente. Su grueso plumón lo protege del frío.",
    precio: 1100,
    img: "/img/piplup.png",
  },
  {
    id: 15,
    nombre: "Riolu",
    cantidad: 1,
    desc: "Tiene un poder peculiar: puede ver emociones como el odio y la alegría en forma de ondas.",
    precio: 1800,
    img: "/img/riolu.png",
  },
  {
    id: 16,
    nombre: "Snorlax",
    cantidad: 1,
    desc: "No se encuentra satisfecho hasta haber ingerido 400 kg de comida cada día. Cuando acaba de comer, se queda dormido (es adorable).",
    precio: 1500,
    img: "/img/snorlax.png",
  },
  {
    id: 17,
    nombre: "Sobble",
    cantidad: 1,
    desc: "Libera unas lágrimas con un factor lacrimógeno como 100 cebollas para hacer llorar al rival. Al mojarse, su piel cambia de color y pasa a ser invisible, como si se hubiese camuflado.",
    precio: 1800,
    img: "/img/sobble.png",
  },
  {
    id: 18,
    nombre: "Totodile",
    cantidad: 1,
    desc: "Totodile tiene cuerpo pequeño, pero fuertes mandíbulas. A veces, piensa que solo está dando un mordisquito y hace unas heridas bastante considerables.",
    precio: 2100,
    img: "/img/totodile.png",
  },
];
let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carritoContenedor = document.querySelector("#carritoContenedor");
const vaciarCarrito = document.querySelector("#vaciarCarrito");
const precioTotal = document.querySelector("#precioTotal");
const activarFuncion = document.querySelector("#activarFuncion");
const procesarCompra = document.querySelector("#procesarCompra");
const totalProceso = document.querySelector("#totalProceso");
const formulario = document.querySelector('#procesar-pago')

if (activarFuncion) {
  activarFuncion.addEventListener("click", procesarPedido);
}

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  mostrarCarrito();
  document.querySelector("#activarFuncion").click(procesarPedido);
});
if(formulario){
  formulario.addEventListener('submit', enviarCompra)
}


if (vaciarCarrito) {
  vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
  });
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "/pages/compra.html";
    }
  });
}

stockProductos.forEach((prod) => {
  const { id, nombre, precio, desc, img, cantidad } = prod;
  if (contenedor) {
    contenedor.innerHTML += `
    <div class="card mt-3" style="width: 18rem; margin-left: 30px; margin-button: 10px;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: $${precio} USD</p>
      <p class="card-text">Descripcion: ${desc}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Comprar Pokemon</button>
    </div>
  </div>
    `;
  }
});

const agregarProducto = (id) => {
  const existe = carrito.some(prod => prod.id === id)

  if(existe){
    const prod = carrito.map(prod => {
      if(prod.id === id){
        prod.cantidad++
      }
    })
  } else {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
  }
  mostrarCarrito()

};

const mostrarCarrito = () => {
  const modalBody = document.querySelector(".modal .modal-body");
  if (modalBody) {
    modalBody.innerHTML = "";
    carrito.forEach((prod) => {
      const { id, nombre, precio, desc, img, cantidad } = prod;
      console.log(modalBody);
      modalBody.innerHTML += `
      <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>Producto: ${nombre}</p>
      <p>Precio: ${precio}</p>
      <p>Cantidad :${cantidad}</p>
      <button class="btn btn-danger"  onclick="eliminarProducto(${id})">Eliminar producto</button>
        </div>
      </div>
      
  
      `;
    });
  }

  if (carrito.length === 0) {
    console.log("Nada");
    modalBody.innerHTML = `
    <p class="text-center text-primary parrafo">Está un poco solitario este lugar</p>
    `;
  } else {
    console.log("Algo");
  }
  carritoContenedor.textContent = carrito.length;

  if (precioTotal) {
    precioTotal.innerText = carrito.reduce(
      (acc, prod) => acc + prod.cantidad * prod.precio,
      0
    );
  }

  guardarStorage();
};

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function eliminarProducto(id) {
  const productId = id;
  carrito = carrito.filter((product) => product.id !== productId);
  mostrarCarrito();
}
function procesarPedido() {
  carrito.forEach((prod) => {
    const listaCompra = document.querySelector("#lista-compra tbody");
    const { id, nombre, precio, img, cantidad } = prod;
    if (listaCompra) {
      const row = document.createElement("tr");
      row.innerHTML += `
              <td>
              <img class="img-fluid img-carrito" src="${img}"/>
              </td>
              <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>${precio * cantidad}</td>
            `;
      listaCompra.appendChild(row);
    }
  });
  totalProceso.innerText = carrito.reduce(
    (acc, prod) => acc + prod.cantidad * prod.precio,
    0
  );
}

 function enviarCompra(e){
   e.preventDefault()
   const persona = document.querySelector('#persona').value
   const email = document.querySelector('#correo').value

   if(email === '' || persona == ''){
     Swal.fire({
       title: "¡Debes completar tu email y nombre!",
       text: "Rellena el formulario",
       icon: "error",
       confirmButtonText: "Aceptar",
   })
 } else {

  const btn = document.getElementById('button');

// document.getElementById('procesar-pago')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_wy3cjfx';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Finalizar compra';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Finalizar compra';
      alert(JSON.stringify(err));
    });
    
   const spinner = document.querySelector('#spinner')
   spinner.classList.add('d-flex')
   spinner.classList.remove('d-none')

   setTimeout(() => {
     spinner.classList.remove('d-flex')
     spinner.classList.add('d-none')
     formulario.reset()

     const alertExito = document.createElement('p')
     alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
     alertExito.textContent = 'Compra realizada correctamente'
     formulario.appendChild(alertExito)

     setTimeout(() => {
       alertExito.remove()
     }, 3000)


   }, 3000)
 }
 localStorage.clear()

 }