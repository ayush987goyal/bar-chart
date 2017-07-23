import { BarChartPage } from './app.po';

describe('bar-chart App', () => {
  let page: BarChartPage;

  beforeEach(() => {
    page = new BarChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
