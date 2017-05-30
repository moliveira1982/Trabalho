import { TrabalhoPage } from './app.po';

describe('trabalho App', () => {
  let page: TrabalhoPage;

  beforeEach(() => {
    page = new TrabalhoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
