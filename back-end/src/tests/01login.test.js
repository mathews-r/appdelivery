const sinon = require('sinon');
const chai = require('chai');
const { User } = require('../database/models');
const { userMock, userMockInput, tokenMock, userMockWithToken, userMockInputInvalid } = require('./mocks/mocksUser');
const { expect } = chai;
const app = require('../api/app');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const jwt = require('jsonwebtoken');

describe('Testes na rota /login', () => {
  describe('Testes com POST', () => {
    it('Tem que retornar sucesso se o login tiver dados válidos', async () => {
      sinon.stub(User, 'findOne').resolves(userMock);
      sinon.stub(jwt, 'sign').resolves(tokenMock);

      const response = await chai.request(app).post('/login').send(userMockInput);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(userMockWithToken);
    });
    it('Tem que falhar se o login tiver dados inválidos', async () => {
      sinon.stub(User, 'findOne').resolves(userMock);
      sinon.stub(jwt, 'sign').resolves(tokenMock);

      const response = await chai.request(app).post('/login').send(userMockInputInvalid);

      expect(response.status).to.be.equal(404);
      expect(response.body.message).to.be.equal('Invalid email or password');
    });
    afterEach(() => sinon.restore());
  })
})
