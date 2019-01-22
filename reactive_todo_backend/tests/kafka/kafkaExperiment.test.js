'use strict'

const expect = require('chai').expect;
const kafka  = require('no-kafka');


describe.only("kafka", () => {
  describe("no-kafka package ", () => {
    it("exists in repo", () => {
      expect(typeof(kafka)).to.deep.equal("object")
    });
  });

  describe('producer', () => {
    it("can create a producer", () => {
      const producer = new kafka.Producer();

      // deeper dive into the producer object
      console.log(producer)

      expect(typeof(producer)).to.deep.equal("object")
      // default connection string is localhost
      expect(producer.options.connectionString).to.deep.equal("kafka://127.0.0.1:9092")
    });
  });
});