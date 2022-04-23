var acc = document.getElementsByClassName("accordion");
var i,u;
var colorcasa1, colorcasa2, colorcasa3, colorcasa4, colorcasa5, output, selectElement;
var nacionalidad1, nacionalidad2, nacionalidad3, nacionalidad4, nacionalidad5;
var bebida1, bebida2, bebida3, bebida4, bebida5;
var cigarros1, cigarros2, cigarros3, cigarros4, cigarros5;
var mascota1, mascota2, mascota3, mascota4, mascota5;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function myFunction() {
  nacionalidad1 = document.getElementById("nacionalidad1").value;
  // document.getElementById("demo").innerHTML = "la nacionalidad es  " + nacionalidad1;

}

function myFunction2() {
  nacionalidad2 = document.getElementById("nacionalidad2").value;
  //document.getElementById("demo").innerHTML = "la nacionalidad es  " + nacionalidad2;

}
function myFunction3() {
  nacionalidad3 = document.getElementById("nacionalidad3").value;
  //document.getElementById("demo").innerHTML = "la nacionalidad es  " + nacionalidad3;

}
function myFunction4() {
  nacionalidad4 = document.getElementById("nacionalidad4").value;
  // document.getElementById("demo").innerHTML = "la nacionalidad es  " + nacionalidad4;

}
function myFunction5() {
  nacionalidad5 = document.getElementById("nacionalidad5").value;
  //document.getElementById("demo").innerHTML = "la nacionalidad es  " + nacionalidad5;

}
function myFunction6() {
  colorcasa1 = document.getElementById("colorcasa1").value;
  // document.getElementById("demo").innerHTML = "la casa es  " + colorcasa1;

}
function myFunction7() {
  colorcasa2 = document.getElementById("colorcasa2").value;
}
function myFunction8() {
  colorcasa3 = document.getElementById("colorcasa3").value;
}
function myFunction9() {
  colorcasa4 = document.getElementById("colorcasa4").value;
}
function myFunction10() {
  colorcasa5 = document.getElementById("colorcasa5").value;
}
function myFunction11() {
  bebida1 = document.getElementById("bebida1").value;
  // document.getElementById("demo").innerHTML = "la bebida es  " + bebida1;

}
function myFunction12() {
  bebida2 = document.getElementById("bebida2").value;
}
function myFunction13() {
  bebida3 = document.getElementById("bebida3").value;
}
function myFunction14() {
  bebida4 = document.getElementById("bebida4").value;
}
function myFunction15() {
  bebida5 = document.getElementById("bebida5").value;
}
function myFunction16() {
  cigarros1 = document.getElementById("cigarros1").value;
  // document.getElementById("demo").innerHTML = "los cigarros   " + cigarros1;

}
function myFunction17() {
  cigarros2 = document.getElementById("cigarros2").value;
}
function myFunction18() {
  cigarros3 = document.getElementById("cigarros3").value;
}
function myFunction19() {
  cigarros4 = document.getElementById("cigarros4").value;
}
function myFunction20() {
  cigarros5 = document.getElementById("cigarros5").value;
}
function myFunction21() {
  mascota1 = document.getElementById("mascota1").value;
  // document.getElementById("demo").innerHTML = "la mascota es  " + mascota1;

}
function myFunction22() {
  mascota2 = document.getElementById("mascota2").value;
}
function myFunction23() {
  mascota3 = document.getElementById("mascota3").value;
}
function myFunction24() {
  mascota4 = document.getElementById("mascota4").value;
}
function myFunction25() {
  mascota5 = document.getElementById("mascota5").value;
}


function FbotonOn() {

  if (colorcasa1   == "amarilla"  && colorcasa2    == "azul"    && colorcasa3    == "rojo"      && colorcasa4     == "verde"    && colorcasa5     == "blanco"
  && nacionalidad1 == "noruego"   && nacionalidad2 == "danes"   && nacionalidad3 == "britanico" && nacionalidad4  == "aleman"   && nacionalidad5  == "sueco"
  && bebida1       == "agua"      && bebida2       == "te"      && bebida3       == "leche"     && bebida4        == "cafe"     && bebida5        == "cerveza"
  && cigarros1     == "dunhill"   && cigarros2     == "blends"  && cigarros3     == "pallmall"  && cigarros4     == "prince"   && cigarros5      == "bluemaster"
  && mascota1      == "gato"      && mascota2      == "caballo" && mascota3      == "pajaro"    && mascota4       == "pez"      && mascota5       == "perro")
   {
    document.body.classList.add('ganaste');


  }

  else{
    document.getElementById("demo").innerHTML = "Tienes un error , revisa tus respuestas" ;

    setTimeout(function() {
      document.getElementById("demo").innerHTML = "" ;
  }, 3000)
    
  }




}
