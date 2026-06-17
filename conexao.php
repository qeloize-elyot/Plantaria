<?php
$servidor = "localhost";
$usuario = "root"; 
$senha = ""; // Se o Workbench não pediu senha para conectar, deixe vazio assim ""
$banco = "sistema_florescer";

$conn = new mysqli($servidor, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
