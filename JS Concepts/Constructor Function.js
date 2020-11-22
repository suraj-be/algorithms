function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user1 = new User('Suraj', 'Bera', 25, 'Male');
const user100 = new User('Amit', 'Sharma', 28, 'Male');

/* 
  this keyword do not refer to the constructor function, it refers to the Object that will be created through the constructor function. 
*/