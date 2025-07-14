export class Profile {
    constructor(public browser: any) { }


    get Avatar() {
        return this.browser.$('[data-testid="user-avatar"]');
    }

    get Stats() {
        return this.browser.$('.css-175oi2r.r-18u37iz.r-a2tzq0.r-156q2ks.r-15m1z73.r-u9wvl5');
    }
    get Gallery() {
        return this.browser.$('.css-175oi2r.r-150rngu');
    }

    get EditButton() {
        return this.browser.$('[data-testid="user-edit-profile-button"]');
    }

}