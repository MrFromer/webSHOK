export class Login {
    constructor(public browser: WebdriverIO.Browser) { }

    get emailInputSelector() {
        return '[data-testid="login-email-input"]';
    }

    get passwordInputSelector() {
        return '[data-testid="login-password-input"]';
    }

    get submitButtonSelector() {
        return '[data-testid="login-submit-button"]';
    }

    get errorMessageSelector() {
        return "div[dir='auto'].css-146c3p1.r-howw7u";
    }

    get formContainerSelector() {
        return 'div[style*="display: flex"]';
    }

    async open() {
        await this.browser.url("https://yavshok.ru/login");
    }

    async login(email: string, password: string) {
        await this.browser.$(this.emailInputSelector).setValue(email);
        await this.browser.$(this.passwordInputSelector).setValue(password);
        await this.browser.$(this.submitButtonSelector).click();
    }
}