'use strict';

class Navbar {
  constructor() {
    this.logout = element(by.css('#logout'))
  }

  doLogout()  {
    this.logout.click();
  }
}

module.exports = Navbar;
