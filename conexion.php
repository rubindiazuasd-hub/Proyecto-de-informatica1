<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $correo = $_POST['correo'];
    $nombre = $_POST['nombre'];
    $edad = intval($_POST['edad']);
    $password = password_hash($_POST['Password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (usuario, correo, nombre, edad, password) VALUES (?, ?, ?, ?, ?)";
    $params = array($usuario, $correo, $nombre, $edad, $password);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt === false) {
        die(print_r(sqlsrv_errors(), true));
    } else {
        echo "Registro guardado con éxito.";
    }

    sqlsrv_free_stmt($stmt);
    sqlsrv_close($conn);
}
?>