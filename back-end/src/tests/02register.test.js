const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const { User } = require('../database/models')
const jwt = require("jsonwebtoken");
chai.use(chaiHttp);

const app = require("../api/app");
const { mockInputCustomer, mockCustomer } = require("./mocks/mockRegister");

describe("Testes na rota /customer", () => {
  describe("Testes com POST", () => {
    it("Cria um usuário com sucesso", async () => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves(mockCustomer);

      const response = await chai.request(app).post('/customer').send(mockInputCustomer);
      expect(response.status).to.be.eq(201);
      expect(response.body).to.be.deep.eq(mockCustomer);
    });
    it("Falha ao tentar criar um usuário ja existente", async () => {
      sinon.stub(User, 'findOne').resolves(mockCustomer);

      const response = await chai.request(app).post('/customer').send(mockInputCustomer);
      expect(response.status).to.be.eq(409);
      expect(response.body.message).to.be.eq('User already registred');
    });
    afterEach(() => sinon.restore());
  });
});
