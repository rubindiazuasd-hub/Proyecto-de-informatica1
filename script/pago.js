

document.getElementById('pagoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const monto = document.getElementById('monto').value.trim();
    const metodo = document.getElementById('metodo').value;

    const mensajeDiv = document.getElementById('mensaje');

    if (!nombre || !email || !monto || !metodo) {
        mensajeDiv.textContent = 'Por favor, complete todos los campos.';
        mensajeDiv.style.color = 'red';
        return;
    }

   
    mensajeDiv.textContent = `Pago de ${monto} realizado con éxito mediante ${metodo}.`;
    mensajeDiv.style.color = 'green';

    //
    // this.submit();
});