<?php
    header('Location: ./spasibo/index.html');
    $name = $_POST['name'];
	  $phone = $_POST['phone'];
    $sizes = $_POST['sizes'];
     $color = $_POST['color'];
	$to = "product.business0@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Имя: $name /n
    Телефон: $phone /n
    Размер: $sizes /n
    Цвет: $color /n"; 	
	mail($to, $subject, $msg, "From: $to ");

/* https://api.telegram.org/bot5521150921:AAGdGE-PAxgkhAekoEP8_r-4sAqk3goHz08/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
// header('Location: thank-you.html');

// $name = $_POST['name'];
// $surname = $_POST['surname'];
// $phone = $_POST['phone'];
// $email = $_POST['email'];
// $text = $_POST['text'];
// $token = "5521150921:AAGdGE-PAxgkhAekoEP8_r-4sAqk3goHz08";
// $chat_id = "-858277631";
// $arr = array(
//   'Имя пользователя: ' => $name,
//   'Фамилия: ' => $surname,
//   'Телефон: ' => $phone,
//   'Email' => $email,
//   'Текст' => $text
// );

// foreach($arr as $key => $value) {
//   $txt .= "<b>".$key."</b> ".$value."%0A";
// };

// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   return false;
// } else {
//   return true;;
// }
?>


