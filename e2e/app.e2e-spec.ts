import { LifestylePage } from './app.po';

describe('lifestyle App', () => {
  let page: LifestylePage;

  beforeEach(() => {
    page = new LifestylePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
