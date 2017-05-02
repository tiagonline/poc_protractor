'use strict';

// const Helper = require('../helper');
const Navbar = require('../pages/nav.po.js');
const Login = require('../pages/login.po.js');
const LISTAcolaborador = require('../pages/listagem_colaborador_po.js');

describe('Conformedata Login', () => {
  // const helper = new Helper();
  const nav = new Navbar();
  const login = new Login();
  const colaborador = new LISTAcolaborador();

  beforeEach(() => {
    login.go();
  });

  it('login com sucesso', () => {
    login.with('tiagonline@gmail.com', '123456');
    expect(colaborador.app.isPresent()).toBe(true, 'Listagem de Documento');
    nav.doLogout();
  });

  it('quando usuario preenche incorretamente', () => {
    login.with('tiagonline@gmail.com', 'xpto');
    expect(login.message.getText()).toEqual('Acesso Negado');
  });

  it('quando usuario nao esta cadastrado', () => {
    login.with('user@404.com', 'xpto');
    expect(login.message.getText()).toEqual('Acesso Negado');
  });

  it('quando nao eh preenchido o email', () => {
    login.with('', 'xpto');
    expect(login.message.getText()).toEqual('Acesso Negado');
  });

  it('quando nao preenche a senha', () => {
    login.with('tiagonline@gmail.com', '');
    expect(login.message.getText()).toEqual('Acesso Negado');
  });

  it('quando nao preenche usuario e senha', () => {
    login.with('', '');
    expect(login.message.getText()).toEqual('Acesso Negado');
  });

   afterEach(() => {
    //  helper.takeShot();
    //  nav.doLogout();
   });

});
