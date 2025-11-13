<?php
session_start();
include 'db_connect.php';

if (!isset($_SESSION['user_id'])) {
    header("Location: /login.php");
    exit();
}

$user_id = $_SESSION['user_id'];

$result = $conn->query("SELECT SUM(p.price * c.quantity) AS total FROM cart c JOIN products p ON c.product_id = p.id WHERE c.user_id = $user_id");
$row = $result->fetch_assoc();
$total = $row['total'];

if ($total > 0) {
    $stmt = $conn->prepare("INSERT INTO orders (user_id, total_price) VALUES (?, ?)");
    $stmt->bind_param("id", $user_id, $total);
    $stmt->execute();
    $stmt->close();

    $conn->query("DELETE FROM cart WHERE user_id = $user_id");
    echo "<h1>Order placed successfully! Total: $" . $total . "</h1>";
    echo "<a href='/index.php'>Back to Home</a>";
} else {
    echo "<h1>Cart is empty.</h1>";
    echo "<a href='/index.php'>Back to Home</a>";
}
$conn->close();
?>