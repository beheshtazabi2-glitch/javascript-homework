
/*
============================================================
JAVASCRIPT HOMEWORK
Primitive Data Types, Variables, and Examples
============================================================
*/


// ============================================================
// PART A - WRITE THE DATA TYPE
// ============================================================

// 1. "Hello World"       -> String
// 2. 500                 -> Number
// 3. true                -> Boolean
// 4. false               -> Boolean
// 5. undefined           -> Undefined
// 6. null                -> Null
// 7. 987654321987654321n -> BigInt
// 8. "JavaScript"        -> String
// 9. 0                   -> Number
// 10. Symbol("id")       -> Symbol

console.log("========== PART A ==========");

console.log(typeof "Hello World");        // string
console.log(typeof 500);                  // number
console.log(typeof true);                 // boolean
console.log(typeof false);                // boolean
console.log(typeof undefined);            // undefined
console.log(typeof null);                 // object (JavaScript quirk)
console.log(typeof 987654321987654321n);  // bigint
console.log(typeof "JavaScript");         // string
console.log(typeof 0);                    // number
console.log(typeof Symbol("id"));         // symbol


// ============================================================
// PART B - CREATE VARIABLES
// ============================================================

console.log("\n========== PART B ==========");

const homeworkName = "Ali";
const homeworkAge = 20;
const homeworkIsStudent = true;
const homeworkPrice = 99.99;
const homeworkNull = null;
let homeworkUndefined;
const homeworkBigInt = 987654321987654321n;
const homeworkSymbol = Symbol("id");

console.log("Name:", homeworkName);
console.log("Age:", homeworkAge);
console.log("Is student:", homeworkIsStudent);
console.log("Price:", homeworkPrice);
console.log("Null value:", homeworkNull);
console.log("Undefined value:", homeworkUndefined);
console.log("BigInt value:", homeworkBigInt);
console.log("Symbol value:", homeworkSymbol);


// ============================================================
// PART C - GUESS THE OUTPUT
// ============================================================

console.log("\n========== PART C ==========");

let partC_a = "10";
let partC_b = 10;

console.log(typeof partC_a); // string
console.log(typeof partC_b); // number

let partC_x = null;
console.log(typeof partC_x); // object

let partC_y;
console.log(typeof partC_y); // undefined


// ============================================================
// PART D - TRUE OR FALSE
// ============================================================

// 1. Number can store decimal values. True
// 2. String literals use quotes. True
// 3. null means no value. True
// 4. undefined means a value is assigned. False
// 5. BigInt is used for very large integers. True

console.log("\n========== PART D ==========");

console.log("1.", true);
console.log("2.", true);
console.log("3.", true);
console.log("4.", false);
console.log("5.", true);


// ============================================================
// PART E - WRITE CODE
// ============================================================

console.log("\n========== PART E ==========");

const partE_string = "Hello JavaScript";
const partE_number = 42;
const partE_boolean = true;
let partE_undefined;
const partE_null = null;

console.log(partE_string);
console.log(partE_number);
console.log(partE_boolean);
console.log(partE_undefined);
console.log(partE_null);


// ============================================================
// PART F - IDENTIFY THE TYPE
// ============================================================

console.log("\n========== PART F ==========");

let partF_a = 45;
let partF_b = "45";
let partF_c = true;
let partF_d = null;
let partF_e;

console.log("a:", typeof partF_a); // number
console.log("b:", typeof partF_b); // string
console.log("c:", typeof partF_c); // boolean
console.log("d:", typeof partF_d); // object
console.log("e:", typeof partF_e); // undefined


// ============================================================
// PRIMITIVE DATA TYPES
// ============================================================

/*
JavaScript has 7 primitive data types:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Note:
typeof null returns "object" because of a
historical JavaScript quirk.
*/


// ============================================================
// 1. STRING (TEXT DATA TYPE)
// ============================================================

console.log("\n========== STRING ==========");

let firstName = "Ali";
let city = "Kabul";
let greeting = "Hello!";

console.log(firstName);
console.log(city);
console.log(greeting);


// ============================================================
// 2. NUMBER (INTEGER AND DECIMAL)
// ============================================================

console.log("\n========== NUMBER ==========");

let age = 25;
let price = 99.99;

console.log("Age:", age);
console.log("Price:", price);


// ============================================================
// 3. BOOLEAN (TRUE OR FALSE)
// ============================================================

console.log("\n========== BOOLEAN ==========");

let isStudent = true;
let isLoggedIn = false;

console.log("Is student:", isStudent);
console.log("Is logged in:", isLoggedIn);


// ============================================================
// 4. UNDEFINED
// ============================================================

console.log("\n========== UNDEFINED ==========");

let score;

console.log("Score:", score); // undefined


// ============================================================
// 5. NULL
// ============================================================

console.log("\n========== NULL ==========");

let selectedUser = null;

console.log("Selected user:", selectedUser);


// ============================================================
// VAR VS LET VS CONST
// ============================================================


// 1. VAR
// Can be re-declared and reassigned.
// Function-scoped.

console.log("\n========== VAR ==========");

var teacher = "Ali";
var teacher = "Ahmad";
teacher = "Karim";

console.log("Teacher:", teacher);


// 2. LET
// Cannot be re-declared in the same scope.
// Can be reassigned.
// Block-scoped.

console.log("\n========== LET ==========");

let course = "JavaScript";
course = "React";

console.log("Course:", course);

// This would cause an error in the same scope:
// let course = "HTML";


// 3. CONST
// Cannot be reassigned or re-declared
// in the same scope.
// Block-scoped.

console.log("\n========== CONST ==========");

const country = "Afghanistan";

console.log("Country:", country);

// This would cause an error:
// country = "USA";


// CONST WITH OBJECTS
// Object properties can still be changed.

console.log("\n========== CONST WITH OBJECTS ==========");

const user = {
    name: "Ali"
};

user.name = "Ahmad";

console.log(user);


// ============================================================
// 1. STUDENT PROFILE EXAMPLE
// ============================================================

console.log("\n========== STUDENT PROFILE ==========");

const profileName = "Ali";
let profileAge = 20;
const isEnrolled = true;
const profileCourse = "Web Development";

console.log(
    profileName + " is " + profileAge +
    " years old and enrolled in " +
    profileCourse + "."
);


// ============================================================
// 2. SIMPLE CALCULATOR
// ============================================================

console.log("\n========== SIMPLE CALCULATOR ==========");

let num1 = 15;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let division = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Division:", division);


// ============================================================
// 3. PRICE AFTER DISCOUNT
// ============================================================

console.log("\n========== PRICE AFTER DISCOUNT ==========");

let productPrice = 200;
let discountPercent = 10;

let discountAmount =
    (productPrice * discountPercent) / 100;

let finalPrice = productPrice - discountAmount;

console.log("Final Price:", finalPrice);


// ============================================================
// 4. MONTHLY SALARY BUDGET
// ============================================================

console.log("\n========== MONTHLY SALARY BUDGET ==========");

let salary = 1000;
let rent = 300;
let food = 200;
let transport = 100;

let totalExpenses = rent + food + transport;
let remainingBalance = salary - totalExpenses;

console.log("Total Expenses:", totalExpenses);
console.log("Remaining Balance:", remainingBalance);

if (remainingBalance > 0) {
    console.log("You are saving money.");
} else if (remainingBalance === 0) {
    console.log("Your budget is balanced.");
} else {
    console.log("You are overspending.");
}


// ============================================================
// 5. TEMPERATURE CONVERTER
// ============================================================

console.log("\n========== TEMPERATURE CONVERTER ==========");

let celsius = 25;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Temperature in Fahrenheit:", fahrenheit);


// ============================================================
// 6. ONLINE SHOPPING CART
// ============================================================

console.log("\n========== ONLINE SHOPPING CART ==========");

let itemName = "Headphones";
let quantity = 3;
let pricePerItem = 50;

let totalCost = pricePerItem * quantity;

console.log("Item:", itemName);
console.log("Total Cost:", totalCost);

if (totalCost > 100) {
    console.log("Free Shipping");
} else {
    console.log("Shipping Charges Apply");
}


// ============================================================
// 7. FIXING A CONST ERROR
// ============================================================

// The following code would cause an error:
//
// const oldScore = 50;
// oldScore = 80;
//
// Use let if you want to change the value.

console.log("\n========== UPDATED SCORE ==========");

let updatedScore = 50;
updatedScore = 80;

console.log("Updated Score:", updatedScore);


// ============================================================
// 8. BLOCK SCOPE EXAMPLE
// ============================================================

console.log("\n========== BLOCK SCOPE ==========");

let userAge = 25;

if (true) {
    let userAge = 30;

    console.log("Inside Block:", userAge); // 30
}

console.log("Outside Block:", userAge); // 25


// ============================================================
// 9. SWAPPING VARIABLES
// ============================================================

console.log("\n========== SWAPPING VARIABLES ==========");

let swapA = 10;
let swapB = 20;

[swapA, swapB] = [swapB, swapA];

console.log("a =", swapA); // 20
console.log("b =", swapB); // 10


// ============================================================
// 10. USERNAME GENERATOR
// ============================================================

console.log("\n========== USERNAME GENERATOR ==========");

let usernameFirstName = "Ali";
let usernameLastName = "Khan";
let birthYear = 2003;

let generatedUsername =
    usernameFirstName.toLowerCase() +
    usernameLastName.toLowerCase() +
    birthYear.toString().slice(-2);

console.log("Generated Username:", generatedUsername);


// ============================================================
// 11. STUDENT INFORMATION
// ============================================================

console.log("\n========== STUDENT INFORMATION ==========");

let studentName = "Ali";
let studentAge = 20;
let studentIsEnrolled = true;
let courseName = "Web Development";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Is Enrolled:", studentIsEnrolled);
console.log("Course:", courseName);


// ============================================================
// 12. PRODUCT DETAILS
// ============================================================

console.log("\n========== PRODUCT DETAILS ==========");

let productName = "Laptop";
let productPriceDetails = 1200;
let productBrand = "Dell";
let inStock = true;

console.log("Product Name:", productName);
console.log("Product Price:", productPriceDetails);
console.log("Product Brand:", productBrand);
console.log("In Stock:", inStock);


// ============================================================
// 13. SALARY DETAILS
// ============================================================

console.log("\n========== SALARY DETAILS ==========");

let employeeName = "Sara";
let monthlySalary = 1500;
let jobTitle = "Frontend Developer";
let isFullTime = true;

console.log("Employee Name:", employeeName);
console.log("Monthly Salary:", monthlySalary);
console.log("Job Title:", jobTitle);
console.log("Full-Time:", isFullTime);



// 14. TEMPERATURE DATA

console.log("\n========== TEMPERATURE DATA ==========");

let cityName = "Kabul";
let temperatureCelsius = 25;
let weatherCondition = "Sunny";

console.log("City:", cityName);
console.log("Temperature Celsius:", temperatureCelsius);
console.log("Weather:", weatherCondition);


// 15. SHOPPING CART DETAILS


console.log("\n========== SHOPPING CART DETAILS ==========");

let cartItemName = "Headphones";
let cartQuantity = 2;
let cartPricePerItem = 50;
let deliveryType = "Express";

console.log("Item Name:", cartItemName);
console.log("Quantity:", cartQuantity);
console.log("Price Per Item:", cartPricePerItem);
console.log("Delivery Type:", deliveryType);
console.log(
    "Cart Total:",
    cartQuantity * cartPricePerItem
);


// 16. SCHOOL DATA


console.log("\n========== SCHOOL DATA ==========");

let schoolName = "Bright Future School";
let totalStudents = 500;
let principalName = "Mr. Ahmad";
let hasLibrary = true;

console.log("School Name:", schoolName);
console.log("Total Students:", totalStudents);
console.log("Principal Name:", principalName);
console.log("Has Library:", hasLibrary);



// 17. PERSONAL PROFILE


console.log("\n========== PERSONAL PROFILE ==========");

let personalFirstName = "Omar";
let personalLastName = "Khan";
let personalBirthYear = 2003;
let personalCountry = "Afghanistan";

console.log("First Name:", personalFirstName);
console.log("Last Name:", personalLastName);
console.log("Birth Year:", personalBirthYear);
console.log("Country:", personalCountry);


// END OF JAVASCRIPT HOMEWORK

