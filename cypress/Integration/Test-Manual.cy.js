escribe('Sistema manual', function() {
    beforeEach(function() {
      cy.visit('https://bugbank.netlify.app/')
    })
    
      it.only('CT-0001 - Validar o campo de "E-mail ou CPF" com um e-mail cadastrado.', function() {
        cy.get('#edtLogin') 
          .type('gregory.silva@interacao.com.br')
        cy.get('.col-sm-6 > .btn')
          .click()
      })
     
      it.only('CT-0002 - Validar o campo de "E-mail ou CPF" com um CPF cadastrado.', function() {

      cy.get('#edtLogin') 
      .type('35957932850')
      cy.get('.col-sm-6 > .btn')
      .click()
      })

      it('CT-0003 - Validar o campo de "E-mail ou CPF" com um e-mail não cadastrado.', function() {
        cy.get('#edtLogin') 
          .type('gregory@interacao.com.br')
        cy.get('.col-sm-6 > .btn')
          .click()
          .should('be.visible', 'valor preenchido incorreto, tente novamente.')
      })
     
      it('CT-0004 - Validar o campo de "E-mail ou CPF" com um CPF não cadastrado.', function() {
        cy.get('#edtLogin') 
          .type('3595850')
        cy.get('.col-sm-6 > .btn')
          .click()
          .should('be.visible', 'valor preenchido incorreto, tente novamente.')
      })
       
      ////não rodou
      it('CT-0005 - Validar o campo de "Informe seu E-mail" do campo esqueci a senha com um e-mail cadastrado.', function(){
        const longText ='gregory.silva@interacao.com.br'
        cy.get('.col-12 > .text-muted', {delay:2000})
        .click()
      cy.get('#edtEsqueciSenha')
        .type(longText)
        .should('have.value', 'gregory.silva@interacao.com.br')
      cy.get('.modal-footer > .btn-primary')
        .click()
      cy.get('#pMensagemEsqueciSenha')
        .should('be.visible','E-mail inválido!')
      cy.get('.btn-blue-grey')
        .click()
     })

      it.only('CT-0006 - Validar o campo de "Informe seu E-mail" do campo esqueci a senha com um e-mail não cadastrado.', function(){
        cy.get('.col-12 > .text-muted')
          .click()
        cy.get('#edtEsqueciSenha')
          .type('gregory')
          .should('have.value', 'gregory')
        cy.get('.modal-footer > .btn-primary')
          .click()
        cy.get('#pMensagemEsqueciSenha')
          .should('be.visible','E-mail inválido!')
        cy.get('.btn-blue-grey')
          .click()
       })

       it('CT-0007 - Validar o campo de "Senha" com uma Senha cadastrado.', function() {
        cy.get('#edtLogin') 
          .type('gregory.silva@interacao.com.br')
        cy.get('.col-sm-6 > .btn')
          .click()
        cy.get('#edtSenha')
          .type('123456')
        cy.get('.col-sm-6 > .btn')
          .click()
        cy.get('#pMensagemLogin')
          .should('be.visible', 'Escolha a empresa')
      })
      it('CT-0008 - Validar o campo de "Senha" com uma Senha não cadastrado.', function() {
        cy.get('#edtLogin') 
          .type('gregory.silva@interacao.com.br')
        cy.get('.col-sm-6 > .btn')
          .click()
        cy.get('#edtSenha')
          .type('1234ssxsx56')
        cy.get('.col-sm-6 > .btn')
          .click()
        cy.get('#pMensagemLogin')
          .should('be.visible', 'Senha inválida, tente novamente.')
      })
      it.only('CT-0009 - Validar o campo "Empresa" e "STAND" selecionando uma empresa e um stand cadastrado.', function() {
        cy.get('#edtLogin') 
          .type('gregory.silva@interacao.com.br')
        cy.get('.col-sm-6 > .btn')
          .click()
        cy.get('#edtSenha')
          .type('123456')
        cy.get('.col-sm-6 > .btn')
          .click()
        cy.get('#pMensagemLogin')
          .should('be.visible', 'Escolha a empresa')
        cy.get('#edtEmpresa')
          .should('be.visible', 'INTERAÇÃO')
        cy.get('#edtStand')
        .should('be.visible', '1 - 1 - 1')
        cy.get('.col-sm-6 > .btn')
          .click()
        cy.get('#hTitulo')  
        .should('be.visible', 'Página Inicial')
               
      })
    })