const menuLateral = document.querySelector(".menu-lateral");
const barraLateral = document.querySelector(".barra-lateral");
const iconCerrar = document.querySelector(".cerrar");

barraLateral.addEventListener("click", () => {
  menuLateral.classList.toggle("mostrar");
  barraLateral.style.display = "none";
});

iconCerrar.addEventListener("click", ()=> {
  menuLateral.classList.remove("mostrar");
  barraLateral.style.display = "flex";
});

// anadir estados de tarea
const lista = document.querySelector(".lista");
const iconAdd = document.querySelector(".add");
const mensaje = document.querySelector(".mensaje");
lista.addEventListener("click", () => {
  lista.removeChild(iconAdd);
  lista.removeChild(mensaje);

  const contenido = `
    <input type="text" class="nombre-lista" />
    <button>Crear</button>
    <button>Cancelar</button>
  `
})