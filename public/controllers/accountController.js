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
		console.log('guest');
	}

	register(sammy) {
		console.log('register');
	}
}

const accountController = new AccountController();

export { accountController };