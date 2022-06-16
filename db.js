const users = [
  {
    name: "DAVID",
    country: "USA",
    gender: "male",
    device: "Iphone",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "lorem",
    country: "England",
    gender: "male",
    device: "android",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "molisa",
    country: "Japan",
    gender: "female",
    device: "Iphone",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "blessing",
    country: "Nigeria",
    gender: "female",
    device: "Iphone",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "jackson",
    country: "UK",
    gender: "male",
    device: "android",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "ester",
    country: "china",
    gender: "female",
    device: "tablet",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "erick",
    country: "poland",
    gender: "male",
    device: "Iphone",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "emeka",
    country: "south africa",
    gender: "male",
    device: "android",
    id: Number(Math.random().toString().substring(3, 2)),
  },
  {
    name: "chima",
    country: "Nigeria",
    gender: "female",
    device: "Iphone",
    id: Number(Math.random().toString().substring(3, 2)),
  },
];

module.exports = () => {
  return {
    users: users,
  };
};
