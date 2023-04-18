enum Roletype {
  ADMIN,
  USER,
  AUTHOR
}

const test = {
  name: 'Tiago',
  age: 28,
  role: Roletype.ADMIN
}

if (test.role === Roletype.ADMIN) console.log(test.role)
