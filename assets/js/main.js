
window.onload=function (){
var name    = document.getElementById("name");
var lastname= document.getElementById("lastname");
  var validaciones=function (e){
    var codigoTecla = e.keyCode;
    console.log(codigoTecla);
    if ((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32) {
      this.nextElementSibling.innerText = "";
			return true;
		}else{
			this.nextElementSibling.innerText = "Este campo solo permite letras";
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
      }else {
        this.nextElementSibling.innerHTML="";
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
    }else{
      this.nextElementSibling.innerHTML="";
    }
  }
  email.onblur=validarEmail;


    function validateForm(){
    	/* Escribe tú código aquí */


    }
}
