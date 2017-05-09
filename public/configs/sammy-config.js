import { accountController } from 'accountController';

class Router {

    start() {
        let sammy = null;
        sammy = Sammy(function () {

            this.get('#/', (sammy) => sammy.redirect('#/home'));
            this.get('#/home', () => { });

            //Account
            this.post('#/login', accountController.login);
            this.get('#/register', accountController.register);
            this.get('#/guest', accountController.guest);
        });

        $(function () {
            sammy.run('#/');
        });
    }
}

const router = new Router();

export { router };