const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const { Sale, User } = require("../database/models");
chai.use(chaiHttp);

const app = require("../api/app");
const { mockSalesByUser } = require("./mocks/mockSale");
const { userMockInput, userMock } = require("./mocks/mocksUser");

describe("Testes na rota /sales", () => {
  describe("Testes com GET", () => {
    it("Deve retornar todas as vendas de um usuário", async () => {
      sinon.stub(User, "findOne").resolves(userMock);
      sinon.stub(Sale, "findAll").resolves(mockSalesByUser);

      const login = await chai.request(app).post("/login").send(userMockInput);

      const response = await chai.request(app).get("/sales").set("authorization", login.body.token);

      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(mockSalesByUser);
    });
    it("Deve retornar uma venda de acordo com o ID", async () => {
      sinon.stub(User, "findOne").resolves(userMock);
      sinon.stub(Sale, "findAll").resolves(mockSalesByUser[0]);

      const login = await chai.request(app).post("/login").send(userMockInput);

      const response = await chai.request(app).get("/sales/1").set("authorization", login.body.token);

      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(mockSalesByUser[0]);
    });
    it("Deve falhar ao tentar buscar uma venda que não existe", async () => {
      sinon.stub(User, "findOne").resolves(userMock);
      sinon.stub(Sale, "findAll").resolves(null);

      const login = await chai.request(app).post("/login").send(userMockInput);

      const response = await chai.request(app).get("/sales/99").set("authorization", login.body.token);

      expect(response.status).to.be.eq(404);
      expect(response.body.message).to.be.deep.eq('Sale not found');
    });
    afterEach(() => sinon.restore());
  });
});
