import { v4 as uuid } from 'uuid';

let users = [
  {
    name: 'orvi',
    age: 25,
    id: '1',
  },
  {
    name: 'promy',
    age: 23,
    id: '2',
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id === id);
  res.send(user);
};

export const createUser = (req, res) => {
  const data = req.body;
  users = [...users, { ...data, id: uuid() }];
  console.log(users);
  res.end();
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.end();
};

export const updateUser = (req, res) => {
    const { name, age } = req.body;
    const { id } = req.params;
    const user = users.find(u => u.id === id)
    if (name) user.name = name 
    if (age) user.age = age 
    res.end()
};
