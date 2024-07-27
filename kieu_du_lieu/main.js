/*
    Kiểu dữ liệu trong Javascript

1. Dữ liệu nguyên thủy - Primitive Data 
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/



// Number type
var a = 1;
var b = 2;
var c = 1.5;
    console.log(a, b, c);


// String Type
var fullName = 'Hai Dang';
    console.log(fullName);


// Boolean Type
var isSuccess = true;
var isFailure = false;
    console.log(isSuccess);
    console.log(isFailure);

// Undefined Type
var isUndefined ;
    console.log(isUndefined);

// Null Type
var isNull = null; // nothing
    console.log(isNull);

// Symbol Type
var id = Symbol('id'); // unique 
console.log(id);


// Function Type
var myFunction = function() {
    alert('Hi, Toi la Dang');
}
    // myFunction();


// Object Types
 var myObject = {
    name: 'Hai Dang',
    age: '21',
    email: 'phamhaidang190123@gmail.com',
 };
    