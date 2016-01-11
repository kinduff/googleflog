(function(){
  var source = document.getElementById('source'),
      result = document.getElementById('result'),
      share  = document.getElementById('share'),
      copy   = document.getElementById('copy');

  source.onkeyup = function() {
    var source = this.value;
    var translated = googleflog.translate(source);
    result.innerHTML = translated;
    if (this.value <= 0) result.innerHTML = '';
  };

  ZeroClipboard.config({
    moviePath: "/swf/ZeroClipboard.swf"
  });
  client = new ZeroClipboard(copy);
  client.on({
    dataRequested: function(c,a) {
      var textToCopy = result.innerText;
      c.setText(textToCopy);
    },
    complete: function(c,a) {
      _this = this;
      _this.className = 'btn green';
      _this.innerText = '¡Copiado con éxito!';
      setTimeout(function() {
        _this.innerText = 'Copiar a portapapeles';
        _this.className = 'btn';
      }, 2500);
    }
  });
})();
