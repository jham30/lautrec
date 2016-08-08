$(document).ready(function(){
    // $('body').on('click', '.test-lautrec-click', function() {
    //     console.log('Test Lautrec JS click');
    // });
    $('body').on('click', '.tp_dropdown.open', function () {
        $( this ).removeClass( 'aniIn' ).addClass( 'aniOut' );
        setTimeout(() => {
            $( this ).removeClass( 'open' );
        }, 600 );
    });
    $('body').on('click', '.tp_dropdown:not(.open)', function () {
        $( this ).removeClass( 'aniOut' ).addClass( 'aniIn' );
        $( this ).addClass( 'open' );
    });

    var observeDOM = (function(){
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver, eventListenerSupported = window.addEventListener;

        return function(obj, callback){
            if( MutationObserver ){
                // define a new observer
                var obs = new MutationObserver(function(mutations, observer){
                    if( mutations[0].addedNodes.length || mutations[0].removedNodes.length ) {
                        callback();
                    }
                });
                // have the observer observe foo for changes in children
                obs.observe( obj, { childList:true, subtree:true });
            }
            else if( eventListenerSupported ){
                obj.addEventListener('DOMNodeInserted', callback, false);
                obj.addEventListener('DOMNodeRemoved', callback, false);
            }
        };
    })();

    // Observe a specific DOM element:
    observeDOM( $('body')[0] ,function(){
        //     console.log('dom changed');
        $('.ltcTabs,.shk_tabs').tabs();
    });
});
