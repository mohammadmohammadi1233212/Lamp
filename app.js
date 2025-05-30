// // class Animal {
// //   name;
// //   constructor(name, age, gender) {
// //     this.name = name;
// //     this.age = age;
// //     this.gender = gender;
// //   }
// //   eat() {
// //     console.log(this.name + " can eat food");
// //   }
// // }
// const newAnimal = new Animal("cat", 2, "female");
// newAnimal.eat();
// class Alligator extends Animal {
//   hunt() {
//     console.log(this.name + " can hunt other Animal's");
//   }
// }
// const newAlligator = new Alligator("Alligator", 2, "male");
// newAlligator.hunt();
// newAlligator.eat();
// const myNewAlligator = new Alligator("My new Alligator", 4, "male");
// myNewAlligator.eat();
// myNewAlligator.hunt();

// // encapsilation
// class Human {
//   admin = true;
//   constructor() {
//     let name, age, gender;
//   }
//   setName(name) {
//     if (name.length > 3) {
//       this.name = name;
//     } else {
//       this.name = "Mohammad Ali";
//     }
//   }
//   getName() {
//     if (this.admin) {
//       console.log("My name is " + this.name);
//     } else {
//       console.log("شما اجازه دانستن نام شخض را ندارید");
//     }
//   }
// }
// const Komail = new human();
// Komail.setName("Komail");
// Komail.getName();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eats() {
//     console.log(this.name, " can eat meat");
//   }
// }
// class Sheep extends Animal {
//   eats() {
//     console.log(this.name, "can eat grain grass");
//   }
// }
// const newSheep = new Sheep("my new sheep", 2);
// newSheep.eats();

function Employes(name, job, sallary) {
  this.name = name;
  this.job = job;
  this.sallary = sallary;
  let bonus = 450;
  this.getDetails = function () {
    console.log(
      `I am ${this.name} I am ${this.job} and i earn ${this.sallary}`
    );
    calculateSalary();
  };
  let calculateSalary = function () {
    let finalSalary = sallary + bonus;
    console.log("My net salary is " + finalSalary);
  };
}
const Ali = new Employes("Ali", "teacher", 9000);
