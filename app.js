const faker = require('faker');
const fs = require('fs');
const express = require('express');

const app = express();

const data = [];

for (i = 0; i <= 100; i++) {
  let person = {};
  person.lastName = faker.fake("{{name.lastName}}");
  person.firstName = faker.fake("{{name.firstName}}");
  person.nino = faker.fake("{{random.number}}");
  person.address = {
    'street': faker.fake("{{address.streetAddress}}"),
    'city': faker.fake("{{address.city}}"),
    'zipcode': faker.fake("{{address.zipCode}}"),
    'county': faker.fake("{{address.county}}"),
  }
  person.phone = faker.fake("{{phone.phoneNumberFormat}}");
  data.push(person);
}

fs.writeFile('mock-data.json', JSON.stringify(data), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

