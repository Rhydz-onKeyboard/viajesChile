$(function(){
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

    asse();
    
    $(window).resize(()=>{
        asse();
    });

    const cuteScroll = ( selec ) => {
        $( selec ).on( 'click' , function (event) {
            if ( this.hash !== "" ) {
                event.preventDefault();
                let hash = this.hash;
                $( 'html, body' ).animate({
                scrollTop: $(hash).offset().top
                }, 1500, function (){
                    window .location.hash = hash;
                });
            }
        });
    };

    cuteScroll( ".nav-link" );
    cuteScroll(".navbar-brand");

    $(() => {
        $('[data-toggle="tooltip"]').tooltip()
    });
});