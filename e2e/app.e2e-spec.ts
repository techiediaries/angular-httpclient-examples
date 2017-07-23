import { AngularHttpclientDemoPage } from './app.po';

describe('angular-httpclient-demo App', () => {
  let page: AngularHttpclientDemoPage;

  beforeEach(() => {
    page = new AngularHttpclientDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
