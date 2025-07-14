import { Login } from '../fixtures/Login';

describe("Страница входа", () => {
    let page: Login;

    beforeEach(async ({ browser }) => {
        page = new Login(browser);
        await page.open();
    });

    it("Должна отображаться корректно в дефолтном состоянии", async () => {
        await page.browser.assertView('login-page-default', page.formContainerSelector, {
            ignoreElements: [
                page.passwordInputSelector
            ],
            screenshotDelay: 1000
        });

        await page.browser.assertView('login-form-default', page.emailInputSelector, {
            compositeImage: true,
            allowViewportOverflow: true
        });
    });

    it("Должна правильно обрабатывать фокус на полях ввода", async () => {
        const emailInput = await page.browser.$(page.emailInputSelector);
        await emailInput.click();
        await page.browser.assertView('email-focused', page.emailInputSelector, {
            screenshotDelay: 500,
            tolerance: 5
        });

        const passwordInput = await page.browser.$(page.passwordInputSelector);
        await passwordInput.click();
        await page.browser.assertView('password-focused', page.passwordInputSelector, {
            screenshotDelay: 500,
            tolerance: 5
        });

        await page.browser.assertView('form-with-password-focus', page.formContainerSelector, {
            screenshotDelay: 1000
        });
    });

    it("Должна показывать ошибку при неправильном входе", async () => {
        await page.login("wrong@email.com", "wrongpassword");

        const errorMessage = await page.browser.$(page.errorMessageSelector);
        await errorMessage.waitForDisplayed();

        await page.browser.assertView('error-message', page.errorMessageSelector, {
            screenshotDelay: 500,
            tolerance: 3
        });

        await page.browser.assertView('login-form-error-state', page.formContainerSelector, {
            ignoreElements: [
                page.passwordInputSelector
            ],
            screenshotDelay: 1000,
            tolerance: 7
        });

        await page.browser.assertView('submit-button-error-state', page.submitButtonSelector, {
            screenshotDelay: 300
        });
    });
});