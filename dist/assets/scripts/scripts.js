'use strict';

// import $ from 'jquery';

$(window).scroll(function (event) {
  adjustNavBar($(this));
});

$(window).resize(function () {
  adjustNavBar($(this));
  var activeTabs = $('#services .tabs span.active');
  activeTabs.each(function (key, value) {
    changeTabPlacement($(activeTabs[key]));
  });
});

$(document).ready(function () {
  changeTabLength();
  adjustNavBar($(this));
});

// adjust nav bar
function adjustNavBar(window) {
  var st = window.scrollTop();
  var nav = $('header .inner');
  var margin = parseInt($('#hero').css('padding-top'));

  // adjust nav bar position
  if (st > margin) {
    nav.css('padding-top', '0');
  } else {
    nav.css('padding-top', margin - st);
  }

  // adjust nav bar color
  var heroHeight = $('#hero').height();
  if (st > heroHeight) {
    nav.addClass('dark-nav');
  } else {
    nav.removeClass('dark-nav');
  }
}

// make active service tab have an underline the same length of its label
function changeTabLength() {
  var tabs = $('#services .tabs');
  tabs.each(function (key, value) {
    var activeTab = $(tabs[key]).find('.active');
    length = activeTab.width() + parseInt(activeTab.css('padding-right')) + parseInt(activeTab.css('padding-left'));
    if (parseInt(activeTab.css('padding-left')) == 0) {
      length = activeTab.width();
    }
    $(tabs[key]).find('.active-bar').css('width', length);
  });
}

// make active service tab have proper left offset from parent
function changeTabPlacement(tab) {
  // add active font weight to clicked tab
  tab.siblings('span').removeClass('active');
  tab.addClass('active');

  // move active bar to clicked tab
  length = tab.width() + parseInt(tab.css('padding-right')) + parseInt(tab.css('padding-left'));
  if (parseInt(tab.css('padding-left')) == 0) {
    length = tab.width();
  }

  var left = tab.position().left;
  var activeBar = tab.parent().find('.active-bar');
  activeBar.css('width', length);
  activeBar.css('left', left);

  // show clicked tab content
  var tabLabel = tab.html();
  var priceContainers = tab.parent().parent().siblings('.prices-container').children('.prices');
  priceContainers.removeClass('active');
  priceContainers.each(function (key, value) {
    if ($(priceContainers[key]).attr('data-type') == tabLabel) {
      $(priceContainers[key]).addClass('active');
    }
  });
}

// when a new service tab is clicked, update the underline
$('#services .tabs span').click(function () {
  if (!$(this).hasClass('active')) {
    changeTabPlacement($(this));
  }
});