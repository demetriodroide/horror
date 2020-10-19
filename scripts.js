let a = document.querySelector("#prueba");

function prevenir(event) {
    event.preventDefault();
    
}
a.addEventListener("click", prevenir ); 

//

let b = document.querySelector("#imagen");

function magic() {
    document.getElementById("imagen").src = "magic.gif";
        
}

b.addEventListener("click", magic );

let c = document.querySelectorAll("strong");// la variable selecciona todos
//los strongs

function colores() {
    for (let i = 0; i < c.length; i++)
	{
		c[i].className = "strong2"
	}  
}

c[i].addEventListener("click", colores );

//post no-image
/////////////////////////////////////////////////////

let d = document.querySelectorAll("article");// la variable selecciona todos
//los strongs

function fondo() {
    for (let i = 0; i < c.length; i++)
	{
		d[i].className = "articleamarillo"
	}  
}

d[i].addEventListener("click", fondo );

////////////////////////////////////////

/*
let e = document.querySelector("#imagen2");

function hoverIMG() {
  document.getElementById("imagen2").style.color = "red";
}

function mouseOut() {
  document.getElementById("imagen2").style.color = "black";
    
}
e.mouseOut( hoverIMG ); */

////////////////////////////////////////

/*

// la variable selecciona todos los strongs
let c = document.querySelectorAll("strong");
​
//Va a cambiar a todos
function colores() {
	//Como c es un array, debemos iterar para cambiar la clase
	for (let i = 0; i < c.length; i++)
	{
		c.className = "strong2";
	}
}

/*​
//Si solo queremos cambiar la clase del que le hemos hecho click
function colores2(event) {
	//event.target es a quién hemos hecho click
	event.target.className = "strong2";
}
​
//c es un array, por lo que tenemos que iterar sobre él para aplicar
//addEventListener a los elementos.
for (let i = 0; i < c.length; i++)
{*/
	/*c.addEventListener("click", colores);/*
}*/