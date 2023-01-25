const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const { Product } = require('../database/models')
chai.use(chaiHttp);

const app = require("../api/app");
const { mockProducts } = require("./mocks/mockProduct");

describe("Testes na rota /products", () => {
  describe("Testes com POST", () => {
    it("Deve retornar todos os produtos", async () => {
      sinon.stub(Product, 'findAll').resolves(mockProducts);

      const response = await chai.request(app).get('/products');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockProducts);
    });
    it("Deve retornar um produto de acordo com o ID", async () => {
      sinon.stub(Product, 'findByPk').resolves(mockProducts[0]);

      const response = await chai.request(app).get('/products/1');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(mockProducts[0]);
    });
    afterEach(() => sinon.restore());
  });
});
