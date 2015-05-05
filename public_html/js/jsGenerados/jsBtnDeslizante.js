(function ($) {
            $(document).on("ready", function () {
                $("#enviar").on("click", function () {
        //            $("#ps-emailform").submit();
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
                });
                $("#meta").droppable({
                    drop: function () {
        //                $("#ps-emailform").submit();
                    console.log("Envío");
                    }
                });
            });
        })(jQuery);
        
        
        
        