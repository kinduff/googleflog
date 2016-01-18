(function(){
  var source    = document.getElementById('source'),
      result    = document.getElementById('result'),
      share     = document.getElementById('share'),
      copy      = document.getElementById('copy'),
      more      = document.getElementById('more');
      options   = document.getElementById('options'),
      twitter   = document.getElementById('twitter'),
      optionsCb = document.getElementsByClassName('option');

  var googleflogOptions = {
    noHead: false,
    noTail: false,
    noTrails: false,
    head: '',       
    tail: ''        
  }

  source.onkeyup = translateInput;

  document.getElementsByTagName('html')[0].onclick = function(e) {
    var optionsContainer = e.target.closest('#options');
    if (options.offsetWidth != 0 && !optionsContainer) {
      options.style.display = "none"
    }
  }

  more.onclick = function(e) {
    e.stopPropagation();
    if (options.offsetWidth == 0) {
      options.style.display = "block";
    } else {
      options.style.display = "none"
    }
  };

  function translateInput(e) {
    var translated = googleflog.translate(source.value, googleflogOptions);
    result.innerHTML = translated;
    if (source.value <= 0) result.innerHTML = '';
  }

  function processOptions() {
    var newOptions = {};
    for (var i = 0; i < optionsCb.length; i++) {
      var option = optionsCb[i], value;
      switch (option.type) {
        case "checkbox":
          value = option.checked;
          break;
        case "text":
          value = option.value;
          break;
      }
      newOptions[option.name] = value;
    }
    googleflogOptions = newOptions;
    translateInput(source);
  }

  for (var i = 0; i < optionsCb.length; i++) {
    var option = optionsCb[i];
    option.onchange = processOptions;
  }

  twitter.onclick = function(e) {
    var twitterUrl = "http://twitter.com/share?url=nothx&text="
    var translatedText = result.innerText;
    window.open(twitterUrl + translatedText, 'twitter-share', 'width=550,height=235');
    return false;
  }

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
      _this.innerHTML = '¡Copiado con éxito!';
      setTimeout(function() {
        _this.innerHTML = 'Copiar a portapapeles';
        _this.className = 'btn';
      }, 2500);
    }
  });

  result.onclick = function() {
    document.execCommand('selectAll', false, null);
  }
})();
