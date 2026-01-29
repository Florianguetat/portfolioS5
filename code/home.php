<?php
$languages = [
    '1' => 'Français',
    '2' => 'English',
    '3' => 'Italiano',
    '4' => 'Español',
    '5' => 'Deutsch',
    '6' => 'Português'
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Language Selection</title>
    <link rel="stylesheet" href="home.css">
</head>
<body>
    <div class="container">
        <h1>Select Your Language</h1>

        <div class="button-group">
            <?php foreach ($languages as $key => $language): ?>
                <button onclick="redirectToLanguage('<?php echo $key; ?>')">
                    <?php echo htmlspecialchars($language); ?>
                </button>
            <?php endforeach; ?>
        </div>
    </div>

    <script src="home.js"></script>
</body>
</html>
