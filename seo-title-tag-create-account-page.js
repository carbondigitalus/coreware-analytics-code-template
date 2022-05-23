$(document).ready(function() {
  // change title tag text for /create-account page
  if (window.location.href.indexOf("create-account") > -1) {
    const createAccountMetaTitle = 'Create Account | Second Right Resource';
    $('head').find('title').text(createAccountMetaTitle);
  }
}); // END document.ready
