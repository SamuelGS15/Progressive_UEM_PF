/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * 08/04/2015
 * The following code is working
 */

function cambiarImg(identificador,ruta) {
            $("#"+identificador).attr("src",ruta);            
}


function cambiarClase(identificador,icono) {    
    $("#"+identificador).removeClass();
    $("#"+identificador).addClass(icono);   
}

function cambiarAtributo(identificador,nombreAtributo,propiedad) {
    $("#"+identificador).attr("\""+nombreAtributo+"\"","\""+propiedad+"\""); 
}

function sustituirTag(identificador,reemplazo) {
    $("#"+identificador).replaceWith(reemplazo); 
    
}

function enlentecerImagen(identificador) {
    $("#"+identificador).toggle('slow');
}

function esconderFondoImagen(identificador) {
    $("#"+identificador).hide('slow');
}

function esconderIcono(identificador) {
    $("#"+identificador).hide();
}


/*
 * 10/04/2015
 
function modificarAtributoServicios(identificador, data_n, data_c, data_s, data_hc, data_d){    
    $("#"+identificador).attr("data-n","\""+data_n+"\"");
    $("#"+identificador).attr("data-c","\""+data_c+"\"");
    $("#"+identificador).attr("data-s","\""+data_s+"\"");
    $("#"+identificador).attr("data-hc","\""+data_hc+"\"");
    $("#"+identificador).attr("data-d","\""+data_d+"\"");
}
*/
/* */
//<i class='livicon' data-n='responsive' data-c='#fff' data-s='64' data-hc='0' data-d='1200'>
// modificarAtributoServicios("mnServIcono", "livicon", "responsive","#fff","64","0","1200")
function modificarAtributoServicios(identificador, data_n, data_c, data_s, data_hc, data_d){     
    $("#" + identificador).attr("data-n", data_n);
    $("#"+identificador).attr("data-c",data_c);
    $("#"+identificador).attr("data-s",data_s);
    $("#"+identificador).attr("data-hc",data_hc);
    $("#"+identificador).attr("data-d",data_d);
}


/*
 * Para los menús
 */
                /*
                 * Los elementos pueden ser citados desde aquí según su identificador, su clase o por su etiqueta, 
                 * 
                 * $ ó JQuery : signo que define el acceso a JQuery
                 * $("p") : Accedes a las etiquetas p
                 * $(".test) : Accedes a todas las clases "test"
                 * $("#test") : Accedes a los identificadores "test"
                 * 
                 */
            
            // $(document).ready() : Es una función integrada de JQuery  que espera a que se cargue el código HTML de una página antes de ejecutar su 
            // secuencia de comandos, podría ser sustituido por $(function() {...});
            // $(document).ready() : Es una función integrada de JQuery  que espera a que se cargue el código HTML de una página antes de ejecutar su 
            // secuencia de comandos, podría ser sustituido por $(function() {...});
            $(document).ready(function () {
                
                
               
                /* Funciones para modficar el menu de Productos*/ 
                // - hide(): Hide the matched elements.
                // - show(): Display the matched elements.
                
                              
                $("#imagen-web").hide();
                $("#imagen-gestion").hide();
                $("#imagen-movilizando").hide();
                console.log('Img productos ocultadas');
                
                $("#item-channels").hover(function() {
                    $("#imagen-channels").show();
                    $("#imagen-web").hide();
                    $("#imagen-gestion").hide();
                    $("#imagen-movilizando").hide();
                    console.log('Img producto CM mostrado');
                    
                });
                
                $("#item-web").hover(function() {
                    $("#imagen-channels").hide();
                    $("#imagen-web").show();
                    $("#imagen-gestion").hide();
                    $("#imagen-movilizando").hide();
                    console.log('Img producto WBE mostrado');
                });
                
                $("#item-gestion").hover(function() {
                    $("#imagen-channels").hide();
                    $("#imagen-web").hide();
                    $("#imagen-gestion").show();
                    $("#imagen-movilizando").hide();
                    console.log('Img producto PMS mostrado');
                });
                
                $("#item-movilizando").hover(function() {
                    $("#imagen-channels").hide();
                    $("#imagen-web").hide();
                    $("#imagen-gestion").hide();
                    $("#imagen-movilizando").show();
                    console.log('Img producto Movilizando mostrado');
                });
                // fin menú Productos
                              
                
                
                 /* Funciones para modificar la imagen del menú Servicios */
                 // - hide(): Hide the matched elements.
                // - show(): Display the matched elements.
                $("#icono-plataforma").hide();               
                $("#icono-software").hide();
                $("#icono-helpdesk").hide();
                $("#icono-formacion").hide();
                console.log('Icons ocultados');
                
                $("#item-plataforma").hover(function () {
                    $("#icono-plataforma").show();
                    $("#icono-software").hide();
                    $("#icono-helpdesk").hide();
                    $("#icono-formacion").hide();
                    $("#icono-incial").hide();
                    console.log('Icon plataforma mostrado.');
                });                
                $("#item-software").hover(function () {
                    $("#icono-software").show();
                    $("#icono-plataforma").hide(); 
                    $("#icono-helpdesk").hide();
                    $("#icono-formacion").hide();
                    $("#icono-incial").hide();
                    console.log('Icon software mostrado.');
                });                
                $("#item-helpdesk").hover(function () {
                    $("#icono-helpdesk").show();
                    $("#icono-plataforma").hide(); 
                    $("#icono-software").hide();
                    $("#icono-formacion").hide();
                    $("#icono-incial").hide();
                    console.log('Icon helpdesk mostrado.');
                });                
                $("#item-formacion").hover(function () {
                    $("#icono-formacion").show();
                    $("#icono-plataforma").hide(); 
                    $("#icono-software").hide(); 
                    $("#icono-helpdesk").hide();
                    $("#icono-incial").hide();
                    console.log('Icon formacion mostrado.');
                });
                // fin del menú servicios
                
                
                // Control del acroll al volver a la página principal
                try {
                    
                    if(true) {
                        /* Para cuando se vuelve desde otra página a un ancla concreta */
                    // animate:  Perform a custom animation of a set of CSS properties
                    $('#html,body').animate({ 
                        // - scrollTop: Get the current vertical position of the scroll bar for the first element in the set of matched elements 
                        // or set the vertical position of the scroll bar for every matched element.
                        // - window: es un objeto, The window object represents an open window in a browser
                        // - location: es un objeto, The location object contains information about the current URL, como por ejemplo tiene atributos como hash
                        // - hash: Return the anchor part of a URL. Assume that the current URL is http://www.example.com/test.htm#part2: devolvería #part2
                        // - offset: Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, 
                        // relative to the document.
                        // - top: Returns the topmost browser window
                        // - height: Get the current computed height for the first element in the set of matched elements or set the height of every matched element.
                        scrollTop: ($(window.location.hash).offset().top - $("header").height())                        
                    });
                    console.log('Scrolltop ajustado en index.html.');
                    } else {
                        return false;
                    }
                    
                } catch (e){
                    
                }
                // fin del control
                
                
                // función para el botón antispam
                var textChk = "";
                
                (function ($) {
                    $(document).on("ready", function () {
                        $("#enviar").on("click", function () {
                            //$("#ps-emailform").submit();
                            console.log("Envío");
                        });
                        $("#limpiar").on("click", function () {
                            $("#email").val("");
                            $("#nombre").val("");
                            $("#poblacion").val("");
                            $("#cp").val("");
                            $("#tlf").val("");
                            $("#mensaje").val("");
                        });
                        $("#movil").draggable({
                            containment: "parent"
                        }).on("mousedown mouseup", function (e) {
                            $(this).toggleClass("activo", e.type === "mousedown");
                            console.log("Deslizador pulsado");
                            
                            retirarFormatoInputs();
                            
                        });
                        $("#meta").droppable({
                            drop: function () {                               
                                var mail = $("#email").val();
                                var phone = $("#phone").val();
                                
                                var camposSinRellenar = false;                                
                                var contadorChks = 0;
                                var numChk = $('.chk1').length;                                
                                    for(i = 1; i < 6; i++) {
                                        if($(".chk"+i).is(':checked')) {
                                        contadorChks++;
                                        }
                                    }                                
                                if (($("#name").val().trim()) === "") {
                                    datosNombreIncorrectos();
                                    camposSinRellenar = true;
                                    textChk += ' \'nombre\' ';
                                } else {
                                    datosNombreCorrectos(); 
                                }                                
                                if((mail === "") || ((mail !== "") && ((mail.indexOf('@') > mail.indexOf('.')) || ((mail.indexOf('@')) < 0)))){
                                   datosEmailIncorrectos();
                                   camposSinRellenar = true;
                                   textChk += ' \'email\' ';
                                } else {
                                   datosEmailCorrectos(); 
                                }                                
                                if ((phone === "") || ((phone !== "") && ((isNaN(phone))) || (phone.length < 9))) {
                                    datosPhoneIncorrectos();
                                    camposSinRellenar = true;
                                    textChk += ' \'teléfono\' ';
                                } else {
                                    datosPhoneCorrectos();
                                }                                
                                if ((contadorChks === 0) && (numChk >= 1)) {
                                    camposSinRellenar = true;
                                    textChk += ' \'producto/s\' ';
                                }                                
                                if(camposSinRellenar) {
                                    errorDatos();
                                } else {
                                    datoscorrectos();
                                    //$("#ps-emailform").submit();
                                    console.log("Envío");
                                }
                            }    
                            
                            
                        });
                        
                    });
                })(jQuery); // fin antispam
                               
                
                // funciones auxiliares
                function retirarFormatoInputs() {
                    $('#text-exito').remove();
                    $('.name-form').removeClass('has-error')
                            .removeClass('has-success').removeClass('form-group');
                    $('.email-form').removeClass('has-error')
                            .removeClass('has-success').removeClass('form-group');
                    $('.phone-form').removeClass('has-error')
                            .removeClass('has-success').removeClass('form-group');
                    $('.name-form span').removeClass('glyphicon glyphicon-remove form-control-feedback')
                            .removeClass('glyphicon glyphicon-ok form-control-feedback');
                    $('.email-form span').removeClass('glyphicon glyphicon-remove form-control-feedback')
                            .removeClass('glyphicon glyphicon-ok form-control-feedback');
                    $('.phone-form span').removeClass('glyphicon glyphicon-remove form-control-feedback')
                            .removeClass('glyphicon glyphicon-ok form-control-feedback');  
                    $('#movil').draggable({revert:true});
                }
                
                               
                function datosNombreIncorrectos() {
                    $('.name-form').addClass('form-group')
                            .addClass('has-error');
                    $('.name-form span').addClass('glyphicon glyphicon-remove form-control-feedback')
                            .css({'position': 'absolute','top':'0px','float':'right'});                    
                }
                
                function datosEmailIncorrectos() {
                    $('.email-form').addClass('form-group')
                            .addClass('has-error');
                    $('.email-form span').addClass('glyphicon glyphicon-remove form-control-feedback')
                            .css({'position': 'absolute','top':'0px','float':'right'}); 
                }
                
                function datosPhoneIncorrectos() { 
                    $('.phone-form').addClass('form-group')
                            .addClass('has-error');
                    $('.phone-form span').addClass('glyphicon glyphicon-remove form-control-feedback')
                            .css({'position': 'absolute','top':'0px','float':'right'}); 
                }
                
                function datosNombreCorrectos() {
                    $('.name-form').addClass('form-group')
                            .addClass('has-success');
                    $('.name-form span').addClass('glyphicon glyphicon-ok form-control-feedback')
                            .css({'position': 'absolute','top':'0px','float':'right'});
                    //$('#name').append('<span class="glyphicon glyphicon-ok form-control-feedback" style="top: 0px;"></span>');
                }
                
                function datosEmailCorrectos() {
                    $('.email-form').addClass('form-group')
                            .addClass('has-success');
                    $('.email-form span').addClass('glyphicon glyphicon-ok form-control-feedback')
                            .css({'position': 'absolute','top':'0px','float':'right'});
                    //$('.email-form').append('<span class="glyphicon glyphicon-ok form-control-feedback" style="top: 0px;"></span>');
                }
                
                function datosPhoneCorrectos() {
                    $('.phone-form').addClass('form-group')
                            .addClass('has-success');
                    $('.phone-form span').addClass('glyphicon glyphicon-ok form-control-feedback')
                            .css({'position': 'absolute','top':'0px','float':'right'});
                    //$('#phone').append('<span class="glyphicon glyphicon-ok form-control-feedback" style="top: 0px;"></span>');
                }
                
                function errorDatos(){
                    $('.carriles').prepend('<div class="alert alert-danger fade in " id="enviadoBien"><p>Mensaje no enviado.<br>Por favor, incluya: '+textChk+'.</p></div>');
                    $('#enviadoBien').prepend('<i class="fa fa-ban alert-icon"></i>');
                    $('#enviadoBien').append('<button type="button" class="close" data-dismiss="alert">×</button>');
                    console.log("Faltan campos por rellenar.");
                    $('#movil').draggable({revert:true});
                    textChk = "";
                }
                
                function datoscorrectos() {
                    $('.carriles').prepend('<div class="alert alert-info fade in " id="enviadoBien"><p>Mensaje enviado. Muchas gracias.</p></div>');
                    $('#enviadoBien').prepend('<i class="fa fa-check alert-icon"></i>');
                    $('#enviadoBien').append('<button type="button" class="close" data-dismiss="alert">×</button>');
                    
                    console.log("Número de checkboxes controlados.");
                    console.log("Se han rellenado todos los campos.");
                    $('#movil').draggable({revert:true});
                }
                
                
                // fin de las funciones auxiliares
              
		
                
            });// fin del ready