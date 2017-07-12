import { StudentenrollPage } from './app.po';

describe('studentenroll App', () => {
  let page: StudentenrollPage;

  beforeEach(() => {
    page = new StudentenrollPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
