import { AngularMaterialFirebaseDemoAppPage } from './app.po';

describe('angular-material-firebase-demo-app App', () => {
  let page: AngularMaterialFirebaseDemoAppPage;

  beforeEach(() => {
    page = new AngularMaterialFirebaseDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
