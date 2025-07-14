import { login } from '../auth/auth';
import { Profile } from '../fixtures/Profile';
import { Edit } from '../fixtures/Edit';

describe('Страница редактирования', () => {
    beforeEach(async function () {
        await this.browser.reloadSession();
        await login(this.browser, 'test1111@gmail.com', '123456');
        await this.browser.pause(1000);
        await this.browser.url("https://yavshok.ru");
        await this.browser.url("https://yavshok.ru/edit")

    });



    it('Дефолтное состояние всей страницы редактирования', async function () {

        const page = new Edit(this.browser);
        const EditBlock = page.EditBlock;

        await EditBlock.waitForDisplayed();

        await this.browser.assertView(
            'edit-page-default',
            '.css-175oi2r.r-3pj75a.r-13qz1uu.r-hvns9x.r-1ur9v65',
            {
                ignoreElements: [
                    "[edit-name-input]",
                ],
                screenshotDelay: 2000,
            }
        );
    });


    it('Состояние страницы после ввода имени', async function () {

        const page = new Edit(this.browser);
        const EditBlock = page.EditBlock;
        const EditLabel = page.EditLabel;
        const EditButton = page.EditButton;

        await EditBlock.waitForDisplayed();

        await EditLabel.setValue('Nekoo');
        await EditButton.click();

        await this.browser.assertView(
            'edit-page-default',
            '.css-175oi2r.r-3pj75a.r-13qz1uu.r-hvns9x.r-1ur9v65',
            {
                screenshotDelay: 2000,
            }
        );
    });

});