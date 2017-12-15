$(document).ready(function () {
  if (locals.user) {
    $('.js-logoutLink').show();
    $('.js-loginLink').hide();
  } else {
    $('.js-loginLink').show();
    $('.js-logoutLink').hide();
  }
});