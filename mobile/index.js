var main = function() {
	$('.icon-bar-father').click(function() {
		var menu = $('#side-menu-collapsable');
		menu.show();
		menu.animate({
          left: "0px"
        },
        100);
	});

	$(document).mouseup(function(e) {
	    var container = $('#side-menu-collapsable');
	    if(container.is(':visible') && !container.is(e.target) && container.has(e.target).length === 0){
		    container.animate({
		    	left: "-200px"
		    },
		    100, function(){
		    	container.hide();
		    });
		}
		else {
			var input = $('#search-input-input');
			if(input.is(':visible') && !container.is(e.target) && container.has(e.target).length === 0) {
				input.attr('placeholder', '');
      			input.val('');
				$('#search-input').animate({
			        width: "50px"
			    }, 300, function (){
			    	input.hide();
			    });
			}
		}
	});

	$('#search-icon').click(function() {
		var input = $('#search-input-input');
		input.show();
		input.attr('placeholder', 'Enter your search term...');
		$('#search-input').animate({
	        width: "240px"
	    },
	      300, function(){ // On finish
	          input.focus();
	    });
	});
}

$(document).ready(main);