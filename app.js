const faker = require('faker');
const fs = require('fs');
const express = require('express');

const app = express();

const users = [];

for (i = 0; i <= 100; i++) {
  var data = {};
  data.lastName = faker.fake("{{name.lastName}}");
  data.firstName = faker.fake("{{name.firstName}}");
  data.nino = faker.fake("{{random.number}}");
  data.address = {
    'street': faker.fake("{{address.streetAddress}}"),
    'city': faker.fake("{{address.city}}"),
    'county': faker.fake("{{address.county}}"),
  }
  data.phone = faker.fake("{{phone.phoneNumberFormat}}");
  users.push(data);
}

fs.writeFile('mock-data.json', JSON.stringify(users), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

