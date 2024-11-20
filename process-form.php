<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримання даних з форми
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Валідність даних (можете додати більше перевірок)
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Задайте тут вашу логіку обробки даних
        // Наприклад, надсилання листа
        $to = 'dmitriy.ds.serdyuk01@gmail.com'; // Змініть на свою електронну адресу
        $subject = 'New message from your website';
        $body = "Name: $name\nEmail: $email\nMessage: $message";
        $headers = "From: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to send email.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
