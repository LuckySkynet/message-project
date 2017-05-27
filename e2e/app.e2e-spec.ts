import { AngularStudyPage } from './app.po';

describe('angular-study App', () => {
  let page: AngularStudyPage;

  beforeEach(() => {
    page = new AngularStudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
