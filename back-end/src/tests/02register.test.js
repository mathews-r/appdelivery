const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const { User } = require('../database/models')
chai.use(chaiHttp);

const app = require("../api/app");
const { mockCustomer } = require("./mocks/mockRegister");

describe("Testes na rota /register", () => {
  describe("Testes com POST", () => {
    it("Cria um usuário com sucesso", async () => {
      sinon.stub(User, 'findOne').resolves(null);
      sinon.stub(User, 'create').resolves({ dataValues: mockCustomer[1] });

      const response = await chai.request(app).post('/register').send(mockCustomer[0]);

      expect(response.status).to.be.eq(201);
      expect(response.body).to.be.deep.eq(mockCustomer[1]);
    });
    it("Falha ao tentar criar um usuário ja existente", async () => {
      sinon.stub(User, 'findOne').resolves(mockCustomer[1]);

      const response = await chai.request(app).post('/register').send(mockCustomer[0]);
      expect(response.status).to.be.eq(409);
      expect(response.body.message).to.be.eq('User already registred');
    });
    afterEach(() => sinon.restore());
  });
});
