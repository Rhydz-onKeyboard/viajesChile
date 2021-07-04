// Funcion de iniciación para consultar si el document esta listo para ser manipulado
$(()=>{

    //Creo la funcion asse, que consulta el tamaño de la pantalla despendiendo de si es movil o escritorio agrega o quita clases css
    const asse = () => {
        const { width } = window.screen;
        if (width>=768){
            $('.navbar').addClass("pl-5");
            $('.container').addClass("py-5");
            $('.container').removeClass("py-3");
        } 
        else {
            $('.navbar').removeClass("pl-5");
            $('.container').removeClass("py-5");
            $('.container').addClass("py-3");
        }
    }

    //Se realiza la llamada a la funcion asse para que se ejecute
    asse();
    
    //Si detecta un cambio de tamaño en la ventana, realiza la llamada a la funcion asse para que se ejecute
    $(window).resize(()=>{
        asse();
    });

    //Creo la funcion cuteScroll con el argumento selec, para hacer un smooth scroll
    const cuteScroll = ( selec ) => {
        //Consulta si al argumento le hago un click
        $( selec ).on( 'click' , function (event) {
            // this es un selector al argumento selec en este caso, donde se evalua si el se NO encuentra vacio
            if ( this.hash !== "" ) {
                //el event.preventDefault() es una funcion que evita la recarga por defecto al realizar cierto eventos
                event.preventDefault();
                //asigno a la variable hash el selec.hash
                let hash = this.hash;
                //selecciona las etiquetas html y body, da la funcion animate para que haga el scroll al id seleccionado y tenga un tiempo de 1.5 segundos para moverse por la ventana
                $( 'html, body' ).animate({
                scrollTop: $(hash).offset().top
                }, 1500, function (){
                    window .location.hash = hash;
                });
            }
        });
    };

    //Llama a la funcion cuteScroll para las clases .nav-link y .navbar-brand
    cuteScroll( ".nav-link" );
    cuteScroll(".navbar-brand");

    //hago el tooltip para el data-toggle tooltip en el html
    $(() => {
        $('[data-toggle="tooltip"]').tooltip()
    });
});