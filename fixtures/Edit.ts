export class Edit {
    constructor(public browser: any) { }


    get EditBlock() {
        return this.browser.$('.css-175oi2r.r-3pj75a.r-13qz1uu.r-hvns9x.r-1ur9v65');
    }

    get EditLabel() {
        return this.browser.$('[data-testid="edit-name-input"]');
    }

    get EditButton() {
        return this.browser.$('[data-testid="edit-save-button"]');
    }

}