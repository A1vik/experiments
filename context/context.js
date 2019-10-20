function hello() {
  console.log('hi', this);
};

hello();

const person = {
  name: 'Max',
  age: 25,

  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  sayHelloTest: function() {
    console.log('hi all', this);
  },
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
};

// person.sayHello();
// person.sayHelloWindow();
// person.sayHelloTest();
// person.sayHelloTest.bind(this)();

const ivan = {
  name: 'Ivan',
  age: 20
};

// person.sayHello.bind(ivan)();
// person.logInfo.bind(ivan, 'Frontend', '8-912-912-91-12')();
// person.logInfo.call(ivan, 'Frontend', '8-912-912-91-12'); 
person.logInfo.apply(ivan, ['Frontend', '8-912-912-91-12']);