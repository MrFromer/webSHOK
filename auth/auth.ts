export async function login(browser, email, password) {
    await browser.url('https://yavshok.ru/login');
    await browser.$("[data-testid='login-email-input']").setValue("test1111@gmail.com");
    await browser.$("[data-testid='login-password-input']").setValue("123456");
    await browser.$("[data-testid='login-submit-button']").click();
}