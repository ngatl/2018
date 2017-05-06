import { NgAtlPage } from './app.po';

describe('ng-atl App', () => {
  let page: NgAtlPage;

  beforeEach(() => {
    page = new NgAtlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
