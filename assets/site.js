/* Bio gibi kanallardan gelen utm_source degerini Play linklerine ve ic
   sayfa linklerine tasir. Ornek: /?utm_source=instagram
   - Play butonlari: utm_source=website -> utm_source=instagram
   - data-keep-utm isaretli ic linkler: ayni parametre eklenir */
(function () {
  var params = new URLSearchParams(location.search);
  var src = params.get('utm_source');
  if (!src) return;
  src = encodeURIComponent(src);

  var i, links = document.querySelectorAll('a[href*="utm_source=website"]');
  for (i = 0; i < links.length; i++) {
    links[i].href = links[i].href.replace('utm_source=website', 'utm_source=' + src);
  }

  var internal = document.querySelectorAll('a[data-keep-utm]');
  for (i = 0; i < internal.length; i++) {
    var href = internal[i].getAttribute('href');
    href += (href.indexOf('?') < 0 ? '?' : '&') + 'utm_source=' + src;
    internal[i].setAttribute('href', href);
  }
})();
