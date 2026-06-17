<?php
include("conexao.php");

// Pega os dados digitados no formulário
$email = $_POST['email_usuario'];
$senha = $_POST['senha_usuario'];

// Procura o usuário no banco de dados que você acabou de criar
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$resultado = $conn->query($sql);

if ($resultado->num_rows > 0) {
    $usuario = $resultado->fetch_assoc();
    
    // Verifica se a senha está correta
    if (password_verify($senha, $usuario['senha'])) {
        echo "Login realizado com sucesso!";
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Usuário não encontrado.";
}
?>
