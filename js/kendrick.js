$(document).ready(function(){ 
    
    

    function hideAll() {
        $('#kendrickadhd').hide();
        $('#kendrickmaadcity').hide();
        $('#kendrickvibe').hide();
        $('#kendricki').hide();
    }
    

    hideAll();
    
     $('.cover').click (function() {
      
        hideAll();
        
        
 
        switch ( $(this).attr("id") ) {
            case "section80cover" :
                $('#kendrickadhd').show();
                break;
            case "maadcitycover" :
                $('#kendrickmaadcity').show();
                break;
            case "maadcitycover2" :
                $('#kendrickvibe').show();
                break;
            case "butterflycover" :
                $('#kendricki').show();
                break;
        }
    }); 
    }); 
    
    
    $(document).ready(function(){
    
    
    
	$('#kendrickstage').click (function() {
		$('#para').slideToggle();
	});
    
    
});
    
    
    
    
