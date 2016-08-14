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
  });
}

$(document).ready(main);