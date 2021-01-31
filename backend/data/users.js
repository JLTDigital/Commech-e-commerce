import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@mail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Smith',
    email: 'john@mail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sarah Smith',
    email: 'sarah@mail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users