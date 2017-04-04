window.onload=function (){
  var name    = document.getElementById("name");
  name.focus();
  var lastname= document.getElementById("lastname");
  var validaciones=function (e){
    var codigoTecla = e.keyCode;
    console.log(codigoTecla);
    if ((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32) {
      this.nextElementSibling.innerText = "";
      this.nextElementSibling.style.display="none";
      return true;
    }else{
      this.nextElementSibling.innerText = "Este campo solo permite letras";
      this.nextElementSibling.style.display="block";
      return false;
    }
  }
  name.onkeypress=validaciones;
  lastname.onkeypress=validaciones;

  var spanss=document.getElementsByClassName("form-control");
  console.log(spanss);
  var spanInputs=function(e){
    if(this.value.trim().length==0){
      this.value="";
      this.nextElementSibling.innerHTML="*Este campo es obligatorio";
      this.nextElementSibling.style.display="block";
    }else {
      this.nextElementSibling.innerHTML="";
      this.nextElementSibling.style.display="none";
    }
    if(this.getAttribute("type")=="text"){
      var arrDato=this.value.split(" ");
      var datosConMayusculas="";
      for (var i = 0; i < arrDato.length; i++) {
        datosConMayusculas +=arrDato[i].charAt(0).toUpperCase()+arrDato[i].substring(1).toLowerCase()+" ";
      }
      this.value=datosConMayusculas;
    }

  }
  spanss[0].onblur=spanInputs;
  spanss[1].onblur=spanInputs;

  var email=document.getElementById("input-email");
  function validarEmail(){
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(this.value) ) {
      this.nextElementSibling.innerHTML="El correo debe de tener un formato válido";
      this.nextElementSibling.style.display="block";
    }else{
      this.nextElementSibling.innerHTML="";
      this.nextElementSibling.style.display="none";
    }
  }
  email.onblur=validarEmail;

  var password=document.getElementById("input-password");
  function validarPassword(){
    if(this.value.length >= 6 && this.value.length<=32){
      this.nextElementSibling.innerHTML="";
      this.nextElementSibling.style.display="none";
    }else{
      this.nextElementSibling.innerHTML="La contraseña debe ser mayor a 6 caracteres.";
      this.nextElementSibling.style.display="block";
    }
  }
  password.onblur=validarPassword;

  var opciones=document.getElementById("opciones");
  function validarSelect() {
    if(opciones.value!=0){
      this.nextElementSibling.innerHTML="";
      this.nextElementSibling.style.display="none";
    }else {
      this.nextElementSibling.innerHTML="Seleccione una opción";
      this.nextElementSibling.style.display="block";
    }
  }
  opciones.onblur=validarSelect;

}

function validateForm (){
var advertencia=document.getElementById("advertencia");
if(name.length==0 || lastname.length==0 || mail.length==0 || password.length==0 || opciones.lengh==0){
  advertencia.innerHTML="Todos los campos son obligatorios";
  return false;
}else{
advertencia.innerHTML="";

}

}
