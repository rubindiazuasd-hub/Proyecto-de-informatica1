


document.getElementById("registroForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const password = document.getElementById("Password").value.trim();
    const mensaje = document.getElementById("mensajeRegistro");

    try {
        const response = await fetch("http://localhost:3000/api/registro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usuario, correo, nombre, edad, password }),
        });

        const data = await response.json();

        if (response.ok) {
            mensaje.style.color = "green";
            mensaje.textContent = data.message;
            setTimeout(() => { window.location.href = "login.html"; }, 2000);
        } else {
            mensaje.style.color = "red"; 
            mensaje.textContent = data.error || "Error";
        }
    } catch (err) {
        mensaje.style.color = "red";
        mensaje.textContent = "Error de conexion con el servidor.";
    }
});

