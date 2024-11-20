;( function( w, $ ) {
    'use strict';

    $(document).ready( function() {

      //Scroll Page
      $('a[href*=\\#]:not([href=\\#])').on('click', function(){
   			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
   				var target = $(this.hash);
   				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
   				if (target.length) {
   					$('html,body').animate({
   						scrollTop: (target.offset().top) - 80
   					}, 700);
   					return false;
   				}
   			}
   		});

      if( $(window).width() < 1100 ){
        $('a[href*=\\#]:not([href=\\#])').on('click', function(){
     			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     				var target = $(this.hash);
     				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     				if (target.length) {
     					$('html,body').animate({
     						scrollTop: (target.offset().top) - 80
     					}, 700);

              $('.__left_header .__menu').removeClass('active');
     					return false;
     				}
     			}
     		});
      }

      let url = window.location.href;
      let position = url.split( '/#');
      if( position[1] == 'aboutKawa'){
        $('._nav_menu ul li.about a').addClass('active');
      }else if( position[1] == 'ecosystem'){
        $('._nav_menu ul li.ecosystem a').addClass('active');
      }else if( position[1] == 'moonmap'){
        $('._nav_menu ul li.moonmap a').addClass('active');
      }else if( position[1] == 'team'){
        $('._nav_menu ul li.team a').addClass('active');
      }

      //Active menu item when scroll to section
      if( $('body.home').length > 0 ){
        $(window).on('scroll', function () {
           var sections = $('section'), nav = $('header'), nav_height = nav.outerHeight(), cur_pos = $(this).scrollTop() + 50;
          sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('li a').removeClass('active');
              sections.removeClass('active');

              $(this).addClass('active');
              nav.find('a[href="/#'+$(this).attr('id')+'"]').addClass('active');
            }
          });
        });
      }

      //Active menu item when scroll to section
      if( $('body.page-template-test').length > 0 ){
        $(window).on('scroll', function () {
           var sections = $('section'), nav = $('header.hd-v3'), nav_height = nav.outerHeight(), cur_pos = $(this).scrollTop() + 50;
          sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('li a').removeClass('active');
              sections.removeClass('active');

              $(this).addClass('active');
              nav.find('a[href="/#'+$(this).attr('id')+'"]').addClass('active');
            }
          });
        });
      }
      // Scroll end right
      $('.__token-moonsheet-box .table').scroll(function() {
        let offset = 8;
         if($(this).scrollLeft() + $(this).innerWidth() + offset >= $(this)[0].scrollWidth) {
           $('.__token-moonsheet-box').addClass('scrollLeft');
         }else {
           $('.__token-moonsheet-box').removeClass('scrollLeft');
         }
     });

     if( $('.connect_wallet').length > 0){
       $('.connect_wallet').click(function (){
         $('.__wallet').css({"display" : "flex"});
         $(this).css({"display" : "none"});
       });
     }
     if( $('.__wallet').length > 0 ){
       $('.__wallet').click(function (){
         $('.connect_wallet').css({"display" : "block"});
         $(this).css({"display" : "none"});
       });
     }


     // Copy clipboard tooltip
    $('.click-copy').on('click', function (e) {
      let copyText = $(this).data('address');

       navigator.clipboard.writeText(copyText);

       let tooltip = $(this).children('.tooltiptext');
       tooltip.text("Copied");
    });
    $('.click-copy').on('mouseout', function (e) {
      let tooltip = $(this).children('.tooltiptext');
      tooltip.text('Copy');
    });


     //Copy Code
     if( $('.page-template-step-buy-site-page').length > 0){
       document.getElementById("copyCode").addEventListener("click", function() {
        copyToClipboardMsg(document.getElementById("code"), "msg");
        // Show text copied
          $('.__content_step .__code span').fadeIn('slow');
          setTimeout(function(){
            $('.__content_step .__code span').fadeOut('fast');
          }, 1500);
       });

       function copyToClipboardMsg(elem, msgElem) {
      	  var succeed = copyToClipboard(elem);
          var msg;
          if (!succeed) {
              msg = "Copy not supported or blocked.  Press Ctrl+c to copy."
          } else {
              msg = "Text copied to the clipboard."
          }
          if (typeof msgElem === "string") {
              msgElem = document.getElementById(msgElem);
          }
          // msgElem.innerHTML = msg;
          // setTimeout(function() {
          //     msgElem.innerHTML = "";
          // }, 2000);
        }

       function copyToClipboard(elem) {
      	  // create hidden text element, if it doesn't already exist
          var targetId = "_hiddenCopyText_";
          var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
          var origSelectionStart, origSelectionEnd;
          if (isInput) {
              // can just use the original source element for the selection and copy
              target = elem;
              origSelectionStart = elem.selectionStart;
              origSelectionEnd = elem.selectionEnd;
          } else {
              // must use a temporary form element for the selection and copy
              target = document.getElementById(targetId);
              if (!target) {
                  var target = document.createElement("textarea");
                  target.style.position = "absolute";
                  target.style.left = "-9999px";
                  target.style.top = "0";
                  target.id = targetId;
                  document.body.appendChild(target);
              }
              target.textContent = elem.textContent;
          }
          // select the content
          var currentFocus = document.activeElement;
          target.focus();
          target.setSelectionRange(0, target.value.length);

          // copy the selection
          var succeed;
          try {
          	  succeed = document.execCommand("copy");
          } catch(e) {
              succeed = false;
          }
          // restore original focus
          if (currentFocus && typeof currentFocus.focus === "function") {
              currentFocus.focus();
          }

          if (isInput) {
              // restore prior selection
              elem.setSelectionRange(origSelectionStart, origSelectionEnd);
          } else {
              // clear temporary content
              target.textContent = "";
          }
          return succeed;
      }
     }

     // Toggle menu mobile

     if( $('.toggle-menu').length > 0 ){
       $('.toggle-menu').click( function() {
         $('.__menu').toggleClass('active');
       });
     }

     $('.close-btn').click( function() {
       $('.__menu').removeClass('active');
     });

     $(document).mouseup( function(e) {
     let menu = $('.wrap__menu');

     if (!menu.is(e.target) && menu.has(e.target).length === 0){
        $('.__menu').removeClass('active');
     }
    });

    });

} )( window, jQuery );
