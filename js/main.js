$(function() {

  // FUNCTIONS
  // ======================================================
  
  function setContentOffset(navSelector, contentSelector) {
    var offsetRef   = $(navSelector)
        , offsetObj = $(contentSelector)
        , refHeight = offsetRef.outerHeight();

    offsetObj.css({ marginTop: refHeight + 'px' });
  }

  function switchTab(tabsSelector, clickedTabId) {
    var activeTab           = $(tabsSelector).find('li.active')
        , activeTabContent  = $('.tab-content.active')
        , clickedTab        = $('#' + clickedTabId)
        , clickedTabContent = $('#' + clickedTabId + '-content');

    activeTab.removeClass('active');
    activeTabContent.removeClass('active');

    clickedTab.addClass('active');
    clickedTabContent.addClass('active');
  }


  // DOCUMENT READY
  // ======================================================

  $(document).ready(function() {

    setContentOffset('.nav-bar', '.wrapper');

    $('.boom-counter-fill').removeClass('start');


    $('.view-all').click(function() {

      $section = $('.distribution-centers .section-content');

      if ( ! $section.hasClass('all') ) {

        $section.addClass('all');
        $section.find('.view-all').html('Close <i class="fa fa-angle-up"></i>');

      } else {

        $section.removeClass('all');
        $section.find('.view-all').html('View All <i class="fa fa-angle-down"></i>');

      }
    });


    $('.boom-counter-kickoff-overlay').click(function() {

      $('.kickoff-info').addClass('open');

    });

    $('.kickoff-info i').click(function() {

      $('.kickoff-info').removeClass('open');

    });

  });


  // WINDOW RESIZE
  // ======================================================

  $(window).resize(function() {
    setContentOffset('.nav-bar', '.wrapper');
  });


  // TAB CONTROLS
  // ======================================================

  $('.tabs li').on('click', function() {
    var tabsSelector = $(this).parents('.tabs')
        , clickedTabId = $(this).attr('id');

    switchTab(tabsSelector, clickedTabId);
  });

  $(window).scroll(function() {


    var window_h = $(this).height();
    var sidebar_h = $('.sidebar').height();

    if (window_h > sidebar_h+112) {

      $('.sidebar-inner').css('top',$(this).scrollTop());

    } else {

      $('.sidebar-inner').css('top',0);

    }

  });



});