import { databaseController } from 'databaseController';

class AccountController {

	login(sammy) {

		if (!databaseController.isUserLoggedIn()) {
			console.log(sammy.params.username);
			console.log(sammy.params.password);
		} else {
			sammy.redirect('#/home');
		}
	}

	guest(sammy) {

		let ajaxRequest;

		try {
			ajaxRequest = new XMLHttpRequest();
		}catch (e) {
			try {
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			}catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				}catch (e){
					alert("Your browser broke!");
					return false;
				}
			}
		}

		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
				$('#login-overlay').hide();
				$('#calendar').removeClass('active-overlay');
				console.log(ajaxRequest.responseText);
			}
		}

		ajaxRequest.open("GET", "http://calendar.idonev.com/private/responder.php", true);
		ajaxRequest.send(null); 

	}

	register(sammy) {
		console.log('register');
	}
}

const accountController = new AccountController();

export { accountController };