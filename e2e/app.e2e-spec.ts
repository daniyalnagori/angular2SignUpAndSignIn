import { Angular2FiverrPage } from './app.po';

describe('angular2-fiverr App', () => {
  let page: Angular2FiverrPage;

  beforeEach(() => {
    page = new Angular2FiverrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
