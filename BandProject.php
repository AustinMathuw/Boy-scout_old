<html>
<head>

</head>
<body>
    <form method='post' action='contact-form-proc.php' name='contactform' id='contactform'>
        <p>
            <label for='fullname'>Your Name:</label>
            <br />
            <input type='text' name='fullname' />
        </p>
        <p>
            <label for='email'>Email Address:</label>
            <br />
            <input type='text' name='email' />
        </p>
        <input type='submit' name='submit' value='Submit Form' />
    </form>

    <?php

	if(empty($_POST['submit']))
	{
		echo "Form is not submitted!";
		exit;
	}
	if(empty($_POST["fullname"]) ||
		empty($_POST["email"]))
	{
		echo "Please fill the form";
		exit;
	}

	$name = $_POST["fullname"];
	$email = $_POST["email"];

	mail( 'pmj@user10.com' , 'New form submission' ,
"New form submission: Name: $name, Email:$email"  );

header('Location: thank-you.html');

    ?>
</body>
</html>
