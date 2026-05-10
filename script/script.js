document.addEventListener('DOMContentLoaded', () => {
  const campana = document.getElementById('campana');
  const sonido = document.getElementById('sonidoCampana');

  // 
  function solicitarPermiso() {
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        console.log('Permiso tras solicitud:', permission);
        if (permission === 'granted') {
          // 
          new Notification('¡Permiso concedido! Ahora recibirás notificaciones.');
        }
      });
    } else if (Notification.permission === 'granted') {
      // 
      new Notification('¡Ya tienes permiso para notificaciones!');
    }
  }

  // 
  solicitarPermiso();

  campana.addEventListener('click', () => {
    //
    sonido.currentTime = 0;
    sonido.play().catch(e => console.error('Error al reproducir sonido:', e));

    // 
    if (Notification.permission === 'granted') {
      new Notification('¡Notificación de STEAD!');
    } else if (Notification.permission !== 'denied') {
      // 
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('¡Notificación de STEAD!');
        } else {
          console.log('Permiso no concedido para notificaciones');
        }
      });
    } else {
      console.log('Permiso de notificación fue denegado anteriormente.');
    }
  });
});

// buscar 
//
//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");


//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
}