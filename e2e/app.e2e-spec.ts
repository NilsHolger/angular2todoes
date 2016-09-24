import { A2todoesPage } from './app.po';

describe('a2todoes App', function() {
  let page: A2todoesPage;

  beforeEach(() => {
    page = new A2todoesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
