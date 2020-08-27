$(document).ready(function () {
  $('.nav-toggler').each(function (_, navToggler) {
    var target = $(navToggler).data('target');
    $(navToggler).on('click', function () {
      $(target).animate({
        height: 'toggle',
      });
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const paymentBtn = document.querySelector('#payment-btn');
  const dropdown = document.querySelector('#dropdown');
  const btn = document.querySelector('#btn');
  const profileBtn = document.querySelector('#profileBtn');
  const pDropdown = document.querySelector('#pDropdown');
  const pBtn = document.querySelector('#pBtn');
  paymentBtn.addEventListener('click', () => {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('flex');
    btn.classList.remove('hidden');
    btn.classList.add('show');
  });

  btn.addEventListener('click', () => {
    btn.classList.remove('flex');
    btn.classList.add('hidden');
    // dropdown.classList.remove('flex');
    // dropdown.classList.add('hidden');

    dropdown.classList.remove('flex');
    dropdown.classList.add('hidden');
  });

  dropdown.addEventListener('click', () => {
    btn.classList.remove('flex');
    btn.classList.add('hidden');
    dropdown.classList.remove('flex');
    dropdown.classList.add('hidden');

    dropdown.classList.remove('flex');
    dropdown.classList.add('hidden');
  });

  //profile
  pBtn.addEventListener('click', () => {
    pDropdown.classList.remove('hidden');
    pDropdown.classList.add('flex');
    profileBtn.classList.remove('hidden');
    profileBtn.classList.add('show');
  });

  profileBtn.addEventListener('click', () => {
    profileBtn.classList.remove('flex');
    profileBtn.classList.add('hidden');
    // dropdown.classList.remove('flex');
    // dropdown.classList.add('hidden');

    pDropdown.classList.remove('flex');
    pDropdown.classList.add('hidden');
  });

  pDropdown.addEventListener('click', () => {
    profileBtn.classList.remove('flex');
    profileBtn.classList.add('hidden');
    // dropdown.classList.remove('flex');
    // dropdown.classList.add('hidden');

    pDropdown.classList.remove('flex');
    pDropdown.classList.add('hidden');
  });
});
