import { login } from '../auth/auth';
import { Profile } from '../fixtures/Profile';

describe('Страница профиля', () => {
    beforeEach(async function () {

        await login(this.browser, 'test1111@gmail.com', '123456');
        await this.browser.pause(1000);
        await this.browser.url("https://yavshok.ru");
        await this.browser.pause(1000);
    });



    it('Дефолтное состояние всей страницы профиля без стабилизации', async function () {

        const page = new Profile(this.browser);
        await this.browser.assertView(
            'profile-page-default',
            '.css-175oi2r.r-13awgt0.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af',
            {
                ignoreElements: [
                    "[data-testid='user-avatar']",
                    ".css-146c3p1.r-vw2c0b.r-15zivkp.r-evnaw",
                    ".css-146c3p1.r-1khnkhu.r-15d164r.r-ubezar",
                ],
                screenshotDelay: 2000,
            }
        );
    });

    it('Блок статистики', async function () {
        const page = new Profile(this.browser);
        const StatsBlock = page.Stats;
        await StatsBlock.waitForDisplayed();

        await this.browser.assertView(
            'profile-page-stats',
            '.css-175oi2r.r-18u37iz.r-a2tzq0.r-156q2ks.r-15m1z73.r-u9wvl5',
            {
                screenshotDelay: 2000,
            }
        );
    });

    it('Блок галереи профиля', async function () {
        const page = new Profile(this.browser);
        const GalleryBlock = page.Stats;

        await GalleryBlock.scrollIntoView();
        await GalleryBlock.waitForDisplayed();

        await this.browser.assertView(
            'profile-page-gallery',
            '.css-175oi2r.r-150rngu',
            {
                ignoreElements: [
                    ".css-175oi2r.r-cmw9f2.r-qklmqi.r-15d164r.r-13qz1uu",
                ],
                screenshotDelay: 2000,
                compositeImage: true, // полный захвата блока
                allowViewportOverflow: true, // выход за границы вьюпорта
                captureElementFromTop: true, //захват с верхней границы элемента

            }
        );
    });


    it('Дефолтное состояние страницы профиля с стабилизацией гифки', async function () {
        const page = new Profile(this.browser);
        const AvatarProfile = page.Avatar;

        await AvatarProfile.waitForDisplayed();

        await this.browser.execute(() => {
            const avatar = document.querySelector('[data-testid="user-avatar"] img') as HTMLImageElement;
            if (avatar) {
                avatar.src = 'https://yavshok.ru/assets/assets/images/profile.4c9412d0fd7b6d90111faab09c8f6c4a.png';
            }
        });

        await this.browser.assertView(
            'profile-page-default-stab',
            '.css-175oi2r.r-13awgt0.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af',
            {
                ignoreElements: [
                    ".css-146c3p1.r-vw2c0b.r-15zivkp.r-evnaw",
                    ".css-146c3p1.r-1khnkhu.r-15d164r.r-ubezar",
                    ".css-175oi2r.r-150rngu",
                    ".css-175oi2r.r-18u37iz.r-a2tzq0.r-156q2ks.r-15m1z73.r-u9wvl5",
                ],
                screenshotDelay: 2000,
            }
        );
    });
});