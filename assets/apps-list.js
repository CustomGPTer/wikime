(function () {
  function setup(box) {
    var tick = box.querySelector('input[type="checkbox"]');
    var card = box.closest('.mapp, .gate-scope') || box.parentNode;
    var links = card.querySelectorAll('a[data-href]');
    function sync() {
      for (var i = 0; i < links.length; i++) {
        var a = links[i];
        if (tick.checked) {
          a.setAttribute('href', a.getAttribute('data-href'));
          a.removeAttribute('aria-disabled');
          a.removeAttribute('tabindex');
          a.removeAttribute('role');
        } else {
          a.removeAttribute('href');
          a.setAttribute('aria-disabled', 'true');
          a.setAttribute('tabindex', '-1');
          a.setAttribute('role', 'link');
        }
      }
    }
    tick.checked = false;
    tick.addEventListener('change', sync);
    sync();
  }
  var boxes = document.querySelectorAll('[data-gate]');
  for (var i = 0; i < boxes.length; i++) setup(boxes[i]);
})();
