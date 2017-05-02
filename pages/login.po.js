'use strict';


class Login {

  constructor() {
    //this.formLogin = element(by.css('app-login form'));
    this.userName = element(by.css('#username'));
    this.password = element(by.css('#password'));
    this.signIn = element(by.css('#submit'));
    this.message = element(by.css('.form-signin-heading'));
  }

  go() {
    browser.get('http://cucumber.conformedata.dynu.net/conformedata/');
  }

  with(user, pwd) {
    this.userName.sendKeys(user);
    this.password.sendKeys(pwd);
    this.signIn.click();
    browser.sleep(1000);
  }
}

module.exports = Login;
