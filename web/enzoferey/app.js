var main = function() {
  $('#search-icon').click(function() {
    if($('#instagram').is(':visible')) {
      $('#instagram').hide();
      $('#facebook').hide();
      $('#twitter').hide();

      // Anim search bar
      var inputField = $('#top-bar-search-input');
      inputField.attr('placeholder', 'Enter your search term...');
      inputField.show();
      $('#top-bar-search').animate({
        width: "30%"
      },
      300, function(){ // On finish
          inputField.focus();
      });
    }
    else if($('#top-bar-search-input').val() != '')
    {
      window.location.href = 'http://rinjani.themesawesome.com/';
    }
  });

  $(document).mouseup(function(e) {
    var container = $('#top-bar-search');
    if($('#instagram').is(':hidden') && !container.is(e.target) && container.has(e.target).length === 0){
      // Hide other icons
      $('#instagram').show();
      $('#facebook').show();
      $('#twitter').show();

      // Anim search bar
      var inputField = $('#top-bar-search-input');
      inputField.attr('placeholder', '');
      inputField.val('');
      container.animate({
        width: "0%"
      },
      300, function(){
        inputField.hide();
      });
    }
  });

  $('.entry-share').hover(
    function(){
      var popup = $(this).children().next();
      popup.animate({
          opacity: "1",
          left: "10px"
        },
        100);
    }, 
    function(){
      var popup = $(this).children().next();
      popup.animate({
          opacity: "0",
          left: "5px"
        },
        100);
    }
  );

  $('.post-share').hover(
    function(){
      var popup = $(this).children().next();
      popup.animate({
          opacity: "1",
          left: "10px"
        },
        100);
    }, 
    function(){
      var popup = $(this).children().next();
      popup.animate({
          opacity: "0",
          left: "20px"
        },
        100);
    }
  );
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return "ARCHIVES FROM " + pair[1].replace("-", " ");}
       }
       return(false);
}

$(document).ready(main);