const btn = document.querySelector(Notification);
Notification("clik", ()=>{
    console.log("Notification" in window);
   if(!("Notificacion" in window)){
    alert("Este navegador no soporta ;as notificaciones");
    return;
}
(Notificacion.permiso ==="granted")? crearNotificacion() : obtenerPermiso();

});
async function obtenerPermiso(){
    const respuesta =await Notification.requestPermission();
   ( respuesta == "granted")&& crearNotificacion();
}

function crearNotificacion(){
    const Notification = new Notification("Recibiras todas las notificaciones",{
        body: "Registrate en nuestro sistema",
        icon:"https://tse3.mm.bing.net/th/id/OIP.b8BbeF06bgcp0Yq4kBsf8gHaE8?pid=Api&h=220&P=0",
        requireinteractio: true
    });
}