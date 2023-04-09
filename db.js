const { faker } = require("@faker-js/faker");

module.exports = () => {
  const data = { slider: [], lastpost: [], bestpost: [], user: [], admin: [] };
  for (let i = 0; i < 3; i++) {
    data.slider.push({
      id: faker.datatype.uuid(),
      title: faker.name.jobTitle(),
      slug: faker.lorem.slug(),
    });
  }

  //last post api
  for (let i = 0; i < 50; i++) {
    data.lastpost.push({
      id: faker.datatype.uuid(),
      date: faker.date.weekday(),
      email: faker.internet.email(),
      text: faker.lorem.text(),
      title: faker.name.jobTitle(),
    });
  }

  // best post api
  for (let i = 0; i < 50; i++) {
    data.bestpost.push({
      id: faker.datatype.uuid(),
      date: faker.date.soon(),
      email: faker.internet.email(),
      text: faker.lorem.text(),
      title: faker.name.jobTitle(),
    });
  }

  // user
  for (let i = 0; i < 50; i++) {
    data.user.push({
      id: faker.datatype.number(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: {
        country: faker.address.country(),
        city: faker.address.city(),
        fullAddress: faker.address.secondaryAddress(),
      },
    });
  }

  return data;
};
