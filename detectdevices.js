// Detectar el tipo de dispositivo y modificar la clase del body en función de ello
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.body.classList.add('mobile');
    // Cargamos el CSS para dispositivos móviles
    var link = document.getElementById('styleSheet');
    link.href = 'common-styles-mobil.css';
  } else {
    document.body.classList.add('desktop');
    // El CSS para dispositivos de escritorio ya está cargado por defecto en el HTML
  }
  