const sinon = require("sinon");
const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const jwt = require("jsonwebtoken");
chai.use(chaiHttp);

const app = require("../api/app");
const {
  userMock,
  userMockInput,
  tokenMock,
  userMockWithToken,
  userMockInputInvalid,
} = require("./mocks/mocksUser");
const { User } = require("../database/models");

describe("Testes na rota /login", () => {
  describe("Testes com POST", () => {
    it("Tem que retornar sucesso se o login tiver dados válidos", async () => {
      sinon.stub(User, "findOne").resolves(userMock);
      sinon.stub(jwt, "sign").resolves(tokenMock);

      const response = await chai
        .request(app)
        .post("/login")
        .send(userMockInput);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(userMockWithToken);
    });
    it("Tem que falhar se o login tiver dados inválidos", async () => {
      sinon.stub(User, "findOne").resolves(userMock);
      sinon.stub(jwt, "sign").resolves(tokenMock);

      const response = await chai
        .request(app)
        .post("/login")
        .send(userMockInputInvalid);

      expect(response.status).to.be.equal(404);
      expect(response.body.message).to.be.equal("Invalid email or password");
    });
    afterEach(() => sinon.restore());
  });
});
