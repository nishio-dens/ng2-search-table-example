import { Ng2SearchTableExamplePage } from './app.po';

describe('ng2-search-table-example App', function() {
  let page: Ng2SearchTableExamplePage;

  beforeEach(() => {
    page = new Ng2SearchTableExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
