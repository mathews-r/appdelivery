const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const { Sale, User } = require("../database/models");
chai.use(chaiHttp);

const app = require("../api/app");
const { mockSalesByUser } = require("./mocks/mockSale");
const { userMockSeller, userMockInputSeller } = require("./mocks/mocksUser");

describe("Testes na rota /seller/orders", () => {
  describe("Testes com GET", () => {
    it("Deve retornar todas as vendas", async () => {
      sinon.stub(User, "findOne").resolves(userMockSeller);
      sinon.stub(Sale, "findAll").resolves(mockSalesByUser);

      const login = await chai.request(app).post("/login").send(userMockInputSeller);

      const response = await chai.request(app).get('/seller/orders').set('authorization', login.body.token);
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.deep.eq(mockSalesByUser);
    });
  });
  afterEach(() => sinon.restore());
});
