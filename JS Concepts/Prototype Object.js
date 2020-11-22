/* 
  What is Protoype in JS?
  - Prototype is simply an object that multiple other objects can refer to, to get any information or functionality that they need. Constructor function has a prototype that all of it's instances will be able to refer to. 
*/

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

User.prototype.emailDomain = '@facebook.com';

const user1 = new User('Suraj', 'Bera', 25, 'Male');
const user100 = new User('Amit', 'Sharma', 28, 'Male');

/* 
  - If we want our 'Construtor Function' instances to have a property that is same for all of them or have a method that is the same for all of them, we will put them under prototype instead on the constructor function itself, to keep the instances more leaner and cleaner.
*/

/* 
  What is dunder proto?
  - dunder proto === __proto__
  - Read this article: https://gist.github.com/ivankisyov/2d535063680ea70f9258eeab82a9e616
*/