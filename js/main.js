
const fulImgBox = document.getElementById("fulImgBox");
    fulImg = document.getElementById("fulImg");

    function openImg(refence){
        fulImgBox.style.display = "flex"
        fulImg.src = refence
    }

    function closeImg(){
        fulImgBox.style.display = "none"
    }

/*Navbar*/
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click" , () =>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


//Servicios
function Peluqueria(){
    Swal.fire({
        title: "Excelente!",
        text: "Tienes Turno Para Peluquería",
        icon: "success" 
    });
}

function Vacunacion(){
    Swal.fire({
        title: "Excelente!",
        text: "Tienes Turno Para Vacunación",
        icon: "success" 
    });
}

function Internacion(){
    Swal.fire({
        title: "Excelente!",
        text: "Tienes Turno Para Internación",
        icon: "success" 
    });
}