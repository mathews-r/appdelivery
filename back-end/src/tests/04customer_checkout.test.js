const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const { Sale } = require("../database/models");
const { User } = require("../database/models");
const { SalesProducts } = require("../database/models");
chai.use(chaiHttp);

const app = require("../api/app");
const { mockSale, mockInputSale } = require("./mocks/mockSale");
const { userMockInput, userMock } = require("./mocks/mocksUser");

describe("Testes na rota /sales", () => {
  describe("Testes com POST", () => {
    it("Deve criar uma nova venda na tabela sales", async () => {
      sinon.stub(User, "findOne").resolves(userMock);
      sinon.stub(Sale, "create").resolves(mockSale);
      sinon.stub(SalesProducts, "create").resolves({});

      const login = await chai.request(app).post("/login").send(userMockInput);

      const response = await chai
        .request(app)
        .post("/sales")
        .set("authorization", login.body.token)
        .send(mockInputSale);
      expect(response.status).to.be.eq(201);
      expect(response.body).to.be.deep.eq(mockSale);
    });
    it("Deve falhar ao tentar cadastrar uma venda com um token inválido", async () => {
      sinon.stub(Sale, "create").resolves(mockSale);
      sinon.stub(SalesProducts, "create").resolves({});

      const response = await chai
        .request(app)
        .post("/sales")
        .set("authorization", "token")
        .send(mockInputSale);

      expect(response.status).to.be.eq(401);
      expect(response.body.message).to.be.deep.eq("Expired or invalid token");
    });
    it("Deve falhar ao tentar cadastrar uma venda sem um token", async () => {
      sinon.stub(Sale, "create").resolves(mockSale);
      sinon.stub(SalesProducts, "create").resolves({});

      const response = await chai
        .request(app)
        .post("/sales")
        .send(mockInputSale);

      expect(response.status).to.be.eq(401);
      expect(response.body.message).to.be.deep.eq("Token not found");
    });
    afterEach(() => sinon.restore());
  });
});
