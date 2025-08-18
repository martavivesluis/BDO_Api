import chai from 'chai';
import chaiHttp from 'chai-http';
import { startServer } from '../app';

const app = startServer();

const expect = chai.expect;
chai.use(chaiHttp);

/*describe('GET /product/:sku', () => {
  it('should return product data for a valid SKU', (done) => {
    const validSku = 'ABC123'; // use a SKU that exists in your test DB or mock

    chai.request(app)
      .get(`/product/${validSku}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('product');
        expect(res.body.product).to.have.property('sku', validSku);
        done();
      });
  });

  it('should return 404 if product is not found', (done) => {
    const invalidSku = 'NOT_EXIST';

    chai.request(app)
      .get(`/product/${invalidSku}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('error');
        // Add more assertions depending on your ErrorResponse schema
        done();
      });
  });
});*/
