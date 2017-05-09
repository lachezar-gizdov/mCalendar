<?php
	header("Access-Control-Allow-Origin: *");
	ini_set('session.cookie_lifetime', 12*60*60);

	session_start();
	
	function register($name, $pass) {

		$username = '2001576_calendar';
		$password = '?j@&Gj@/44(%2267j[399}(9L';
		$database = '2001576_calendar';
		$hostname = 'pdb3.awardspace.net';
		$table = 'users';
		
	    $dbh = mysqli_connect($hostname, $username, $password, $database);

	    $sql = "
				INSERT INTO users
								(firstName, lastName, email, passphrase)
						   VALUES
								('Guest', 'User', 'guest@email.com', '".mysqli_real_escape_string($dbh, $pass)."');
		";

	    $qrh = mysqli_query($dbh, $sql);
	
	    if(mysqli_affected_rows($dbh) > 0) {
		    echo 'Registration successful!';
	        return true;
	    } else {
		    echo 'Registration failed!';		    
	        return false;
	    }
	}
	
	
	if($_GET['mode'] == 'guest' && !isset($_COOKIE['login'])) {
	    $username = 'guest'.time().rand(1,1);
		$password = 'guest';
		register($username, $password);
	}

?>