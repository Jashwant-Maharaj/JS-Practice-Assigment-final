//-----Chap #1 Task #1

// alert("Hello World!");

//-----Chap #1 Task #2

// alert("Error! Please enter a valid password");

//-----Chap #1 Task #3

// alert("Welcome to JS Land...\nHappy Coding!");

//-----Chap #1 Task #4

// alert("Welcome to JS Land...");
// alert("Happy Coding!");

//-----Chap #1 Task #5

// console.log(alert("Hello... I can run JS through my web browser's console"));

//-----Chap #1 Task #6

// alert("Hello World!");

//-----Chap #1 Task #7

// alert("Hello World!");

//-----Chap #2 Task #1

// var username;

//-----Chap #2 Task #2

// var myName = "Jashwant Aachar";

//-----Chap #2 Task #3

// var message;
// message = "Hello World";
// alert(message);

//-----Chap #2 Task #4

// var fullName = "Johne Doe";
// var age = "15 years old";
// var course = "Certified Mobile Application Development";
// alert(fullName);
// alert(age);
// alert(course);

//-----Chap #2 Task #5

// var x = "PIZZA";
// alert(x + "\n" + x.slice(0,4) + "\n" + x.slice(0,3) + "\n" + x.slice(0,2) + "\n" + x.slice(0,1));

//-----Chap #2 Task #6

// var email = "jashwantmaharaaj@gmail.com";
// alert("My email address is " + email);

//-----Chap #2 Task #7

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from a Book " + book);

//-----Chap #2 Task #8

// document.write("Yah! I can write HTML content through JavaScript");

//-----Chap #2 Task #9

// var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);

//-----Chap #3 Task #1

// var age;
// age = 22;
// alert("I am " + age + " years old");

//-----Chap #3 Task #2

// fetch('https://api.countapi.xyz/update/default/110c9625-2f1f-4d7a-a655-3376e34a8b99/?amount=1')
// 	.then(res => res.json())
// 	.then(res => {
//         alert("You have visited this site " + res.value + " times");
//     })

//-----Chap #3 Task #3

// var birthYear = 1997;
// document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number");

//-----Chap #3 Task #4

// var visitorName = prompt("Enter Your Full Name i.e. John Doe:");
// var productTitle = prompt("Enter the Product You want i.e. t-shirt:");
// var Quantity = +prompt("Enter Quantity in Numbers:");
// document.write("<b>" + visitorName + "</b>" + " ordered " + "<b>" + Quantity + "</b>" + " " + "<b>" +
//                 productTitle + "</b>" + "(s) on Maharaj's Clothing Store");

//-----Chap #4 Task #1

// var firstName, lastName, fullName;
// firstName = "Jashwant";
// lastName = "Aachar";
// fullName = firstName + " " + lastName;
// alert("My name is " + fullName);

//-----Chap #4 Task #2

// var _userName, $password, phoneNumber2, address, email;
// var #userName, .password, &phoneNumber, +address, 5email;

//-----Chap #4 Task #3

// document.write("<h1> Rules for naming JS variables. </h1>");
// document.write("<br>Variable names can only contain '_' at start, '$' at start , characters at start and numbers at end. For example $name, _name, name2 and name");
// document.write("<br>Variables must begin with a '$', '_' or character. For example $name, _name or name");
// document.write("<br>Variable names are case sensitive");
// document.write("<br>Variable names should not be JS keywords");

//-----Chap #5 Task #1

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ")
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

//-----Chap #5 Task #2

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ")
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;
// document.write("Difference between " + num1 + " and " + num2 + " is " + sub);
// document.write("<br>Product of " + num1 + " and " + num2 + " is " + mul);
// document.write("<br>Quotient of " + num1 + " over " + num2 + " is " + div);
// document.write("<br>Remainder of " + num1 + " over " + num2 + " is " + mod);

//-----Chap #5 Task #3

// var num;
// document.write("Value after variable declaration is: " + num);
// num = 5;
// document.write("<br>Initial value: " + num);
// num = ++num;
// document.write("<br>Value after increment is: " + num);
// num = num + 7;
// document.write("<br>Value after addition is: " + num);
// num = --num;
// document.write("<br>Value after decrement is: " + num);
// num = num % 3;
// document.write("<br>The remainder is : " + num);

//-----Chap #5 Task #4

// var cost = 600;
// alert("Cost of one ticket is " + cost + " PKR.")
// var quantity = +prompt("How many tickets you want to buy:");
// var totalAmount = cost * quantity;
// document.write("Total cost to buy " + quantity + " tickets to a movie is " + totalAmount + " PKR.");

//-----Chap #5 Task #5

// var num = +prompt("Enter the number of table you want: ");
// document.write("Table of " + num + "<br>");
// for(var i = 1; i <= 10; i++){
//     var product = num * i;
//     document.write("<br>" + num + " x " + i + " = " + product);
// }

//-----Chap #5 Task #6

// var temp_c = +prompt("Enter temperature in celsius ");
// var temp_f = +prompt("Enter temperature in fahrenheit ");
// var output_temp_c = (temp_f - 32) * 5 / 9;
// var output_temp_f = (temp_c * 9 / 5) + 32;
// document.write(temp_c + " <sup>o</sup>C is " + output_temp_f + " <sup>o</sup>F. <br>");
// document.write(temp_f + " <sup>o</sup>F is " + output_temp_c + " <sup>o</sup>C. <br>");

//-----Chap #5 Task #7

// var price_item1 = 650;
// var price_item2 = 100;
// var quantity_item1 = +prompt("Enter the number of item 1 you want: ");
// var quantity_item2 = +prompt("Enter the number of item 2 you want: ");
// var shipping_charges = 100;
// document.write("<h1>Shopping Cart</h1><br>");
// document.write("<br>Price of item 1 is " + price_item1);
// document.write("<br>Quantity of item 1 is " + quantity_item1);
// document.write("<br>Price of item 2 is " + price_item2);
// document.write("<br>Quantity of item 2 is " + quantity_item2);
// document.write("<br>Shipping Charges " + shipping_charges);
// var netTotal_item1 = price_item1 * quantity_item1;
// var netTotal_item2 = price_item2 * quantity_item2;
// var grossTotal = netTotal_item1 + netTotal_item2 + shipping_charges;
// document.write("<br><br>Total cost of your order is " + grossTotal);

// -----Chap #5 Task #8

// var totalMarks = 980;
// var marksObtained = +prompt("Enter the marks obtained:");
// var percentage = marksObtained / totalMarks * 100;
// document.write("<h1>Marks Sheet</h1><br>");
// document.write("<br>Total marks: " + totalMarks);
// document.write("<br>Marks obtained: " + marksObtained);
// document.write("<br>Percentage: " + percentage + "%");

// -----Chap #5 Task #9

// document.write("<h1>Currency in PKR</h1><br><br>");
// var totalCurrency = (104.80 * 10) + (28 * 25);
// document.write("Total Currency in PKR: " + totalCurrency);

// -----Chap #5 Task #10

// var num = 10;
// num = (num + 5) * 10 / 2;
// document.write("The answer is: " + num);

// -----Chap #5 Task #11

// document.write("<h1>Age Calculator</h1><br><br>");
// var currentYear = new Date().getFullYear();
// var birthYear = +prompt("Enter your birth year: ");
// var age = currentYear - birthYear;
// var age2 = age - 1 ;
// document.write("Current Year: " + currentYear);
// document.write("<br>Birth Year: " + birthYear);
// document.write("<br>You are either " + age2 + " or " + age  + " years old");

// -----Chap #5 Task #12

// document.write("<h1>The Geometrizer</h1><br><br>");
// var pie = 3.142;
// var radius = +prompt("Enter the value of radius: ");
// var circumference = 2 * pie * radius;
// var area = pie * ( radius * radius );
// document.write("Radius of a circle: " + radius);
// document.write("<br>The circumference is: " + circumference);
// document.write("<br>The area is: " + area);

// -----Chap #5 Task #13

// document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
// var snack = "Lays Wavy"
// var currentAge = 22;
// var maximumAge = 65;
// var amount = 3;
// var snackNeeded = 3 * 365 * (maximumAge - currentAge);
// document.write("Favorite Snack: " + snack);
// document.write("<br>Current age: " + currentAge);
// document.write("<br>Estimated Maximum age: " + maximumAge);
// document.write("<br>Amount of snacks per day: " + amount);
// document.write("<br>You will need " + snackNeeded + " to last you until the ripe old age " + maximumAge);

// -----Chap #6-9 Task #1

// var a = 10;
// document.write("Result:<br>The value of a is: " + a);
// document.write("<br>--------------------------------------<br>");
// document.write("<br>The value of ++a is: " + ++a);
// document.write("<br>Now the value of a is: " + a + "<br>");
// document.write("<br>The value of a++ is: " + a++);
// document.write("<br>Now the value of a is: " + a + "<br>");
// document.write("<br>The value of --a is: " + --a);
// document.write("<br>Now the value of a is: " + a + "<br>");
// document.write("<br>The value of a-- is: " + a--);
// document.write("<br>Now the value of a is: " + a + "<br>");

// -----Chap #6-9 Task #2

// var a = 2;
// var b = 1;
// document.write("The value of a is: " + a + " and b is: " + b + "<br>");
// var i = --a;
// document.write("<br>The value of --a is: " + i);
// var j = i - --b;
// document.write("<br>The value of --a - --b is: " + j);
// var k = j + ++b;
// document.write("<br>The value of --a - --b + ++b is: " + k);
// var result = k + b--;
// document.write("<br>The value of --a - --b + ++b + b-- is: " + result);
// document.write("<br><br>Result is: " + result);

// -----Chap #6-9 Task #3

// var name = prompt("Enter your name: ");
// alert("Hello " + name +"!");

// -----Chap #6-9 Task #4

// Found Missing

// -----Chap #6-9 Task #5

// var num = +prompt("Enter the number of table you want: ");
// if(num === 0){
//     num = 5;
// }
// document.write("Table of " + num + "<br><br>");
// for(var i = 1; i <= 10; i++){
//     product = num * i;
//     document.write(num + " x " + i + " = " + product + "<br>");
// }

// -----Chap #6-9 Task #6

// var subject1 = prompt("Enter First Subject: ");
// var marks1 = +prompt("Enter Marks: ");
// var subject2 = prompt("Enter Second Subject: ");
// var marks2 = +prompt("Enter Marks: ");
// var subject3 = prompt("Enter Third Subject: ");
// var marks3 = +prompt("Enter Marks: ");
// document.getElementById("subject1").innerHTML = subject1;
// document.getElementById("marks1").innerHTML = marks1;
// document.getElementById("subject2").innerHTML = subject2;
// document.getElementById("marks2").innerHTML = marks2;
// document.getElementById("subject3").innerHTML = subject3;
// document.getElementById("marks3").innerHTML = marks3;
// var totalMarks = 100;
// percentage1 = (marks1 / totalMarks) * 100;
// percentage2 = (marks2 / totalMarks) * 100;
// percentage3 = (marks3 / totalMarks) * 100;
// document.getElementById("percentage1").innerHTML = percentage1 + "%";
// document.getElementById("percentage2").innerHTML = percentage2 + "%";
// document.getElementById("percentage3").innerHTML = percentage3 + "%";
// var marksTotal = totalMarks * 3;
// document.getElementById("marksTotal").innerHTML = marksTotal;
// var totalObtained = marks1 + marks2 + marks3;
// document.getElementById("totalObtained").innerHTML = totalObtained;
// var totalPercentage = (totalObtained / marksTotal) * 100;
// document.getElementById("totalPercentage").innerHTML = totalPercentage + "%";

// -----Chap #9-11 Task #1

// var cityName = prompt("Enter City Name: ");
// if( cityName === "Karachi" || cityName === "karachi"){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Welcome to " + cityName);
// }

// -----Chap #9-11 Task #2

// var gender = prompt("Enter your gender: ");
// if(gender === "Male" || gender === "male"){
//     alert("Good Morning Sir!");
// }
// else if(gender === "Female" || gender === "female"){
//     alert("Good Morning Ma’am!");
// }
// else{
//     alert("Good Morning!");
// }

// -----Chap #9-11 Task #3

// var color = prompt("Enter the color of road traffic signal: ");
// if(color === "Red" || color === "red"){
//     alert("Must Stop");
// }
// else if(color === "Yellow" || color === "yellow"){
//     alert("Ready to move");
// }
// else if(color === "Green" || color === "green"){
//     alert("Move now");
// }
// else{
//     alert("Signal is out of order");
// }

// -----Chap #9-11 Task #4

// var fuel = +prompt("Enter amount of remaining fuel in car (in litres): ");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car.");
// }

// -----Chap #9-11 Task #5

// -------A)
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// -------B)
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// else{
//     alert("Condition is false.");
// }

// // -------C)
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// --------D)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// --------E)
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }

// -------F)
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// -----Chap #9-11 Task #6

// var subject1Marks = +prompt("Enter marks of first subject: ");
// var subject2Marks = +prompt("Enter marks of second subject: ");
// var subject3Marks = +prompt("Enter marks of third subject: ");
// var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// var totalMarks = +prompt("Enter total marks: ");
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// var grade = "", remarks = "";
// if(percentage >= 80 && percentage <= 100){
//     grade = "A-one";
//     remarks = "Excellent";
// }
// if(percentage >= 70 && percentage < 80){
//     grade = "A";
//     remarks = "Good";
// }
// if(percentage >= 60 && percentage < 70){
//     grade = "B";
//     remarks = "You need to improve";
// }
// if(percentage < 60){
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br><br>");
// document.write("Total marks : " + totalMarks);
// document.write("<br>Marks obtained : " + totalObtainedMarks);
// document.write("<br>Percentage : " + percentage + "%");
// document.write("<br>Grade : " + grade);
// document.write("<br>Remarks : " + remarks);

// -----Chap #9-11 Task #7

// var secretNumber = 7;
// var guessNumber = +prompt("Guess the Secret Number: ");
// if(guessNumber === secretNumber){
//     alert("Bingo! Correct answer");
// }
// if(guessNumber === secretNumber + 1 || guessNumber === secretNumber - 1){
//     alert("Close enough to the correct answer");
// }

// -----Chap #9-11 Task #8

// var num = +prompt("Enter the number: ");
// if(num % 3 === 0){
//     alert("The number is divisible by 3");
// }

// -----Chap #9-11 Task #9

// var num = +prompt("Enter the number: ");
// if(num % 2 === 0){
//     alert("Number is even");
// }
// if(num % 2 === 1){
//     alert("Number is odd");
// }

// -----Chap #9-11 Task #10

// var temp = +prompt("Enter the temperature: ");
// if(temp > 40){
//     alert("It is too hot outside.");
// }
// if(temp > 30 && temp < 40){
//     alert("The Weather today is Normal.");
// }
// if(temp > 20 && temp < 30){
//     alert("Today’s Weather is cool.");
// }
// if(temp > 10 && temp < 20){
//     alert("OMG! Today’s weather is so Cool.");
// }

// -----Chap #9-11 Task #11

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var opr = prompt("Enter operation you want to perform: ");
// var result; 
// if(opr === '+'){
//     result = num1 + num2;
// }
// if(opr === '-'){
//     result = num1 - num2;
// }
// if(opr === '*' || opr === 'x'){
//     result = num1 * num2;
// }
// if(opr === '/'){
//     result = num1 / num2;
// }
// if(opr === '%'){
//     result = num1 % num2;
// }
// alert("The result is: " + result);

// -----Chap #12-13 Task #1

// var char = prompt("Enter character: ");
// var asciiCode = char.charCodeAt();
// if(asciiCode >= 65 && asciiCode <= 90){
//     alert("It is a uppercase letter.");
// }
// else if(asciiCode >= 97 && asciiCode <= 122){
//     alert("It is a lowercase letter.");
// }
// else{
//     alert("It is a number.");
// }

// -----Chap #12-13 Task #2

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var max;
// if(num1 === num2){
//     alert("Both number are equal.");
// }
// else{
//     if(num1 > num2){
//         max = num1;
//     }
//     if(num2 > num1){
//         max = num2;
//     }
//     alert(max + " is bigger number.")
// }

// -----Chap #12-13 Task #3

// var num = +prompt("Enter the number: ");
// if(num === 0){
//     alert("Number is zero.");
// }
// else{
//     if(num > 0){
//         alert("Number is positive");
//     }
//     else{
//         alert("Number is negative");
//     }
// }

// -----Chap #12-13 Task #4

// var char = prompt("Enter character: ");
// if(char === 'a' || char === 'e' || char === 'i' || char === 'o'|| char === 'u'){
//     alert("Character is vowel.");
// }
// else if(char === 'A' || char === 'E' || char === 'I' || char === 'O'|| char === 'U'){
//     alert("Character is vowel.");
// }
// else{
//     alert("Character is not vowel.");
// }

// -----Chap #12-13 Task #5

// var correctPassword = "2244631";
// var password = prompt("Please enter your password: ");
// if(password === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }

// -----Chap #12-13 Task #6

//Inappropriate Statement

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//Appropriate Statement

// var greeting;
// var hour = 13;
// if(hour < 18){
//     greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }
// alert(greeting);

// -----Chap #12-13 Task #7

// var time = +prompt("Enter time in 24 hours clock format like: 1900 = 7pm: ");
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good Afternoon!");
// }
// else if(time >= 1700 && time < 2100){
//     alert("Good Evening!");
// }
// else if(time >= 2100 && time < 2359){
//     alert("Good Night!");
// }
// else{
//     alert("Something went wrong.");
// }

// -----Chap #14-16 Task #1

// var studentsName = [];

// -----Chap #14-16 Task #2

// var studentsName = new Array();

// -----Chap #14-16 Task #3

// var names = ["Jashwant", "Ali", "Manoj"];

// -----Chap #14-16 Task #4

// var marks = [75, 85, 65];

// -----Chap #14-16 Task #5

// var boolean = [true, false];

// -----Chap #14-16 Task #6

// var mixedArray = ["Jashwant", 22, true];

// -----Chap #14-16 Task #7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("Qualifications:<br>");
// for(var i = 0; i < qualifications.length; i++){
//     document.write("<br>" + (i+1) + ") " + qualifications[i]);
// }

// -----Chap #14-16 Task #8

// var studentName = ["Michael", "John", "Tony"];
// var score = [320, 230, 480];
// for(var i = 0; i < studentName.length; i++){
//     document.write("Score of " + studentName[i] + " is " + score[i] + ". Percentage: " + (score[i] / 500) * 100 + "%<br>");
// }

// -----Chap #14-16 Task #9

// var colors = ["Red", "Black", "Orange", "Yellow"];
// document.write("Initial array: <br>" + colors);
// var addAtBeginning = prompt("Enter the color you want to add at beginning: ");
// colors.unshift(addAtBeginning);
// document.write("<br><br>Array after adding color at beginning: <br>" + colors);
// var addAtEnd = prompt("Enter the color you want to add at end: ");
// colors.push(addAtEnd);
// document.write("<br><br>Array after adding color at end: <br>" + colors);
// var addAgainAtBeginning1 = prompt("Enter the first color you want to add at beginning: ");
// var addAgainAtBeginning2 = prompt("Enter the second color you want to add at beginning: ");
// colors.unshift(addAgainAtBeginning1, addAgainAtBeginning2);
// document.write("<br><br>Array after adding two colors at beginning: <br>" + colors);
// colors.shift();
// document.write("<br><br>Array after deleting color at beginning: <br>" + colors);
// colors.pop();
// document.write("<br><br>Array after deleting color at end: <br>" + colors);
// var position = +prompt("At what index you want to add color: ");
// var colorToAdd = prompt("Which color you want to add at that index: ");
// colors.splice(position, 0, colorToAdd);
// document.write("<br><br>Array after adding color at desired index: <br>" + colors);
// var positionToDelete = +prompt("At what index you want to delete color: ");
// var numbersOfColorsToDelete = +prompt("Enter the number of colors you want to delete: ");
// colors.splice(positionToDelete, numbersOfColorsToDelete);
// document.write("<br><br>Array after deleting desired number of colors at desired index: <br>" + colors);

// -----Chap #14-16 Task #10

// var studentScore = ["320", "230", "480", "120"];
// document.write("Scores of Students : " + studentScore);
// studentScore.sort();
// document.write("<br><br>Ordered Scores of Students : " + studentScore);

// -----Chap #14-16 Task #11

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities List:<br>" + cities);
// var selectedCities = cities.slice(2,5);
// document.write("<br><br>Selected Cities List:<br>" + selectedCities);

// -----Chap #14-16 Task #12

// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array: <br>" + arr);
// var string = arr.join(" ");
// document.write("<br><br>String: <br>" + string);

// -----Chap #14-16 Task #13

// var devices = ["Keyboard", "Mouse", "Printer", "Moniter"];
// document.write("Devices: <br>" + devices + "<br>");
// for(var i = 0; i < devices.length; i++){
//     document.write("<br>Out: <br>" + devices[i]);
// }

// -----Chap #14-16 Task #14

// var devices = ["Keyboard", "Mouse", "Printer", "Moniter"];
// document.write("Devices: <br>" + devices + "<br>");
// for(var i = devices.length - 1; i >= 0; i--){
//     document.write("<br>Out: <br>" + devices[i]);
// }

// -----Chap #14-16 Task #15

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for(var i = 0; i < phoneManufacturers.length; i++){
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");

// -----Chap #17-20 Task #1

// var multiArr = [["",""],["",""]];

// -----Chap #17-20 Task #2

// var multiArr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]]
// for(var i = 0; i < 3; i++){
//     for(var j = 0; j < 4; j++){
//         document.write(multiArr[i][j] + " ");
//     }
//     document.write("<br>");
// }

// -----Chap #17-20 Task #3

// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>");
// }

// -----Chap #17-20 Task #4

// var num = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");
// document.write("Multiplication table of " + num);
// document.write("Length " + length + "<br>");
// for(var i = 1; i <= length; i++){
//     document.write("<br>" + num + " x " + i + " = " + num * i);
// }

// -----Chap #17-20 Task #5

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// for(var j = 0; j < fruits.length; j++){
//     document.write("<br>Element at index " + j + " is " + fruits[j]);
// }

// -----Chap #17-20 Task #6

// document.write("<b>Counting:</b><br><br>");
// for(var i = 1; i <= 15; i++){
//     document.write(i + ", ");
// }
// document.write("<br><br><b>Reverse counting:</b><br><br>");
// for(var j = 10; j >= 1; j--){
//     document.write(j + ", ");
// }
// document.write("<br><br><b>Even:</b><br><br>");
// for(var k = 0; k <= 20; k = k + 2){
//     document.write(k + ", ");
// }
// document.write("<br><br><b>Odd:</b><br><br>");
// for(var l = 1; l < 20; l = l + 2){
//     document.write(l + ", ");
// }
// document.write("<br><br><b>Series:</b><br><br>");
// for(var m = 2; m <= 20; m = m + 2){
//     document.write(m + "k, ");
// }

// -----Chap #17-20 Task #7

// items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i = 0; i <= items.length; i++) {
//     if (items[i] === search) {
//         document.write(items[i] + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     }
//     else if(i === items.length){
//         document.write("We are sorry . " + search + " is <b>not available</b> in our bakery");
//         break
//     }

// }

//----Chap #17-20 Task #8

// var arr = [24, 53, 78, 91, 12];
// document.write("Array items: " + arr);
// var max = Math.max(...arr);
// document.write("<br>The largest number is " + max);

//----Chap #17-20 Task #9

// var arr = [24, 53, 78, 91, 12];
// document.write("Array items: " + arr);
// var max = Math.min(...arr);
// document.write("<br>The smallest number is " + max);

//----Chap #17-20 Task #10

// for(var i = 1; i <= 100/5; i++){
//     document.write(i * 5 + ", ");
// }

//------ Chapters21-25 task 1

// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your Last Name: ");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName);

//------ Chapters21-25 task 2

// var phoneModel = prompt("Enter Your Favorite Phone Model: ");
// document.write("Your Favorite Phone is: " + phoneModel + "<br>");
// document.write("Length of String is: " + phoneModel.length);

//------ Chapters21-25 task 3

// var word = "Pakistani"
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + word.indexOf('n'));

//------ Chapters21-25 task 4

// var word = "Hello World"
// document.write("String: " + word + "<br>");
// document.write("Last Index of 'l': " + word.lastIndexOf('l'));

//------ Chapters21-25 task 5

// var word = "Pakistani"
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + word.charAt(3));

//------ Chapters21-25 task 6

// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your Last Name: ");
// var fullName = firstName.concat(" " + lastName);
// alert("Hello " + fullName);

//------ Chapters21-25 task 7

// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// var cityAfterReplacement = "Islam" + city.slice(city.indexOf("a"), city.length);
// document.write("After Replacement: " + cityAfterReplacement);

//------ Chapters21-25 task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Before Replacement: " + message);
// var messageAfterReplacement = message.replace(/and/g, "&");
// document.write("<br>After Replacement: " + messageAfterReplacement);

//------ Chapters21-25 task 9

// var str = "472"
// document.write("Value: " + str + "<br>Type: " + typeof(str));
// var num = parseInt(str);
// document.write("<br>Value: " + num + "<br>Type: " + typeof(num));

//------ Chapters21-25 task 10

// var userInput = prompt("Enter the string: ");
// document.write("User Input: " + userInput);
// document.write("<br>Upper case: " + userInput.toUpperCase());

//------ Chapters21-25 task 11

// var userInput = prompt("Enter the string: ");
// document.write("User Input: " + userInput);
// var firstLetter = userInput.slice(0,1);
// var restOfLetters = userInput.slice(1,userInput.length);
// var changedCase = firstLetter.toUpperCase() + restOfLetters.toLowerCase();
// document.write("<br>Title case: " + changedCase);

//------ Chapters21-25 task 12

// var num = 35.36;
// document.write("Number: " + num);
// var str = num.toString();
// var result = str.slice(0,2) + str.slice(3,str.length);
// document.write("<br>Result: " + result);

//------ Chapters21-25 task 13

// var userName = prompt("Enter the Username: ");
// if(userName.indexOf('@') === -1 && userName.indexOf('.') === -1 && userName.indexOf(',') === -1 && userName.indexOf('!') === -1){
//     alert("Username is valid");
// }
// else{
//     alert("Please enter a valid username");
// }

//------ Chapters21-25 task 14

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter what you want: ");
// var search = userInput.toLowerCase();
// for(var i = 0; i <= arr.length; i++){
//     if(arr[i] === search){
//         document.write(search + " is <b>available</b> at index " + i + " in our bakery.");
//         break;
//     }
//     else if(i === arr.length){
//         document.write("We are sorry. " + search + " is <b>not available</b> in our bakery");
//         break;
//     }
// }

//------ Chapters21-25 task 15

// var input = prompt("Enter password: ");
// var letters = /^[0-9a-zA-Z]+$/;
// if (input.length >= 6) {
//     if (isNaN(parseInt(input[0]))){
//         if (input.match(letters)){
//             alert("password is valid");
//         }
//         else {
//             alert("Please input alphanumeric characters only");
//         }
//     }
//     else {
//         alert("Password should not start with number");
//     }
// }
// else {
//     alert("you have to enter at least 6 character!");

// }


//------ Chapters21-25 task 16

// var university = "University of Karachi";
// var universityArr = university.split("");
// for(var i = 0; i < university.length; i++){
//     document.write(universityArr[i] + "<br>");
// }

//------ Chapters21-25 task 17

// var userInput = prompt("Enter String: ");
// document.write("User Input: " + userInput);
// var userInputArr = userInput.split("");
// document.write("<br>Last Character of Input: " + userInputArr[userInputArr.length - 1]);

//------ Chapters21-25 task 18

// var str = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var search = 'the';
// document.write("Text: " + str);
// str = str.toLowerCase().split(" ");
// for(var i = 0; i < str.length; i++){
//     if(str[i] === search){
//         count = count + 1;
//     }
// }
// document.write("<br>There are " + count + " occurrence(s) of word '" + search + "'");

//------ Chapters26-30 task 1

// var num = +prompt("Enter the Number: ");
// if(num>0){
//     document.write("number: " + num);
//     document.write("<br>round off value: " + Math.round(num));
//     document.write("<br>floor value: " + Math.floor(num));
//     document.write("<br>ceil value: " + Math.ceil(num));
// }
// else{
//     document.write("Please enter a positive number.")
// }

//------ Chapters26-30 task 2

// var num = +prompt("Enter the Number: ");
// if(num<0){
//     document.write("number: " + num);
//     document.write("<br>round off value: " + Math.round(num));
//     document.write("<br>floor value: " + Math.floor(num));
//     document.write("<br>ceil value: " + Math.ceil(num));
// }
// else{
//     document.write("Please enter a negative number.")
// }

//------ Chapters26-30 task 3

// var num = +prompt("Enter a number: ");
// document.write("The absolute value of " + num + " is "+ Math.abs(num));

//------ Chapters26-30 task 4

// num = Math.floor(Math.random()*6);
// if(num === 0){
//     num = num + 1;
// }
// document.write("random dice value " + num);

//------ Chapters26-30 task 5

// var num = Math.floor(Math.random()*2);
// if(num === 0){
//     num = num + 1;
//     document.write(num + "<br>random coin value: Tails");
// }
// else if(num === 1){
//     num = num + 1;
//     document.write(num + "<br>random coin value: Heads");
// }

//------ Chapters26-30 task 6

// var num = Math.floor(Math.random()*100);
// document.write("Random number between 1 and 100: " + num);

//------ Chapters26-30 task 7

// var weight = prompt("Enter your weight in kilograms: ");
// document.write("The weight of user is " + parseFloat(weight).toFixed(1) + " Kilograms")

//------ Chapters26-30 task 8

// var num = +prompt("Enter the Secret number: ")
// var secretNumber = Math.floor(Math.random() * 10);
// if(num === secretNumber){
//     alert("Conguratulations!");
// }
// else{
//     alert("Try Again!");
// }

//------ Chapters31-34 task 1

// var currentDate = new Date();
// document.write(currentDate);

//------ Chapters31-34 task 2

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for(var i = 0; i < months.length; i++){
//     if(currentMonth === i){
//         alert("Current month: " + months[i]);
//         break;
//     }
// }

//------ Chapters31-34 task 3

// var currentDate = new Date();
// var currentDateString = currentDate.toString();
// var currentDay = currentDateString.slice(0, 3);
// alert("Today is " + currentDay);

//------ Chapters31-34 task 4

// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if(currentDay === 0 || currentDay === 6){
//     alert("It's Fun day");
// }
// else{
//     alert("It's Working day");
// }

//------ Chapters31-34 task 5

// var currentDate = new Date().getDate();
// if(currentDate < 16){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//------ Chapters31-34 task 6

// var currentDate = new Date();
// document.write("Current Date: " + currentDate);
// var milliSeconds = currentDate.getTime();
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + milliSeconds);
// var minutes = milliSeconds / 1000 / 60;
// document.write("<br>Elapsed minutes since January 1, 1970: " + minutes);

//------ Chapters31-34 task 7

// var currentHour = new Date().getHours();
// if(currentHour < 12){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }

//------ Chapters31-34 task 8

// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: " + laterDate);

//------ Chapters31-34 task 9

// var ramadanFirst = new Date("June 18, 2015").getTime();
// var today = new Date().getTime();
// var diff = today - ramadanFirst
// var totalDays = diff / 1000 / 60 / 60 / 24;
// alert(Math.floor(totalDays) + " days have passed since 1st Ramadan, 2015");

//------ Chapters31-34 task 10

// var referenceDate = new Date("Dec 5, 2015 22:50:16");
// document.write("On reference date " + referenceDate);
// var referenceDateMilliseconds = referenceDate.getTime();
// var beginningOf2015 = new Date("Jan 1, 2015").getTime();
// var diff = (referenceDateMilliseconds - beginningOf2015) / 1000;
// document.write("<br>" + diff + " seconds had passed since beginning of 2015");

//------ Chapters31-34 task 11

// var today = new Date();
// document.write("current date: " + today);
// today.setHours(today.getHours() - 1);
// document.write("<br>1 hour ago, it was " + today);

//------ Chapters31-34 task 12

// var today = new Date();
// alert("current date: " + today);
// today.setFullYear(today.getFullYear() - 100);
// alert("100 years back, it was " + today);

//------ Chapters31-34 task 13

// var age = +prompt("Enter your age: ");
// var today = new Date();
// document.write("Your age is " + age +"<br>Your birth year is " + (today.getFullYear() - age));

//------ Chapters31-34 task 14

// var customerName = prompt("Enter the customer name: ");
// var numOfUnits = +prompt("Enter the number of units: ");
// var chargePerUnit = +prompt("Enter the charges per unit: ");
// var lateSurcharge = +prompt("Enter the late payment surcharge: ");
// var netAmount = numOfUnits * chargePerUnit;
// var grossAmount = netAmount + lateSurcharge;
// document.write("<h1>K-Electric Bill</h1><br>");
// document.write("Customer name: " + customerName);
// var currentMonth = new Date().getMonth();
// var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// for(var i = 0; i < months.length; i++){
//     if(currentMonth === i){
//         document.write("<br>Month: " + months[i]);
//         break;
//     }
// }
// document.write("<br>Number of units: " + numOfUnits.toFixed(2));
// document.write("<br>Charges per unit: " + chargePerUnit.toFixed(2));
// document.write("<br><br>Net Amount Payable (Within Due Date): " + netAmount.toFixed(2));
// document.write("<br>Late Payable Surcharge: " + lateSurcharge.toFixed(2));
// document.write("<br>Gross Amount Payable (After Due Date): " + grossAmount.toFixed(2))

//------ Chapters35-38 task 1

// function now(){
//     var currentDate = new Date();
//     document.write(currentDate);
// }
// now();

//------ Chapters35-38 task 2

// function greetUser(firstNameLocal, lastNameLocal){
//     var fullNameLocal = firstNameLocal + " " + lastNameLocal;
//     alert("Hello! " + fullNameLocal);
// }
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// greetUser(firstName, lastName);

//------ Chapters35-38 task 3

// function add(num1Local, num2Local){
//     sumLocal = num1Local + num2Local;
//     return sumLocal;
// }
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var sum = add(num1, num2);
// document.write("The Addition of both number is: " + sum);

//------ Chapters35-38 task 4

// function calc(num1Local, num2Local, operatorLocal){
//     if(operatorLocal === '+'){
//         return num1Local + num2Local;
//     }
//     else if(operatorLocal === '-'){
//         return num1Local - num2Local;
//     }
//     else if(operatorLocal === '*' || operatorLocal === 'x'){
//         return num1Local * num2Local;
//     }
//     else if(operatorLocal === '/'){
//         return num1Local / num2Local;
//     }
//     else if(operatorLocal === '%'){
//         return num1Local % num2Local;
//     }
//     else{
//         var error = "Something went wrong!"
//         return error;
//     }
// }
// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");
// var operator = prompt("Enter operator: ");
// var result = calc(num1, num2, operator);
// document.write(num1 + " " + operator + " " + num2 + " = " + result);

//------ Chapters35-38 task 5

// function square(numLocal){
//     return numLocal * numLocal;
// }
// var num = +prompt("Enter the number: ");
// document.write("The square of " + num + " is " + square(num));

//------ Chapters35-38 task 6

// function factorial(numLocal){
//     if(numLocal === 0){
//         return 1;
//     }
//     else if(numLocal < 0){
//         numLocal = Math.abs(numLocal);
//         for (var i = numLocal - 1; i >= 1; i--) {
//             numLocal *= i;
//         }
//         return -numLocal;
//     }
//     else{
//         for (var i = numLocal - 1; i >= 1; i--) {
//             numLocal *= i;
//         }
//         return numLocal;        
//     }
// }
// var num = +prompt("Enter the number: ");
// document.write("The factorial of " + num + " is " + factorial(num));

//------ Chapters35-38 task 7

// function counting(startLocal, endLocal){
//     for(var i = startLocal; i <= endLocal; i++){
//         document.write(i + "<br>");
//     }
// }
// var start = +prompt("Enter starting number: ");
// var end = +prompt("Enter ending number: ");
// counting(start, end);

//------ Chapters35-38 task 8

// function calculateHypotenuse(baseLocal, perpendicularLocal){
//     function calculateSquare(num){
//         return num * num;
//     }
//     return Math.sqrt(calculateSquare(baseLocal) + calculateSquare(perpendicularLocal));
// }
// var baseGlobal = +prompt("Enter base value: ");
// var perpendicularGlobal = +prompt("Enter perpendicular value: ");
// document.write("The hypotenuse = " + calculateHypotenuse(baseGlobal, perpendicularGlobal).toFixed(2));

//------ Chapters35-38 task 9

// function calculateArea(widthLocal, heightLocal){
//     return widthLocal * heightLocal;
// }
// document.write("Static calculation of area: " + calculateArea(10,3));
// var width = +prompt("Enter width value: ");
// var height = +prompt("Enter height value: ");
// document.write("<br>Dynamic calculation of area: " + calculateArea(width, height));

//------ Chapters35-38 task 10

// function checkPalindrome(wordLocal){
//     wordLocal = wordLocal.toLowerCase();
//     if(wordLocal === wordLocal.split('').reverse().join('')){
//         document.write(wordLocal + " is a Palindrome word.");
//     }
//     else{
//         document.write(wordLocal + " is not a Palindrome word.")
//     }
// }
// var word = prompt("Enter the word: ");
// checkPalindrome(word);

//------ Chapters35-38 task 11

// function firstLetterUpper(strLocal){
//     strLocal = strLocal.split("")
//     for(var i = 0; i < strLocal.length; i++){
//         if(strLocal[i] === " "){
//             strLocal[0] = strLocal[0].toUpperCase();
//             strLocal[i + 1] = strLocal[i + 1].toUpperCase();
//         }
//     }
//     strLocal = strLocal.join("");
//     return strLocal;
// }
// var strIn = prompt("Enter string: ");
// document.write("Input: " + strIn);
// var strOut = firstLetterUpper(strIn);
// document.write("<br>Output: " + strOut);

//------ Chapters35-38 task 12

// function findLongestWord(strLocal){
//     var strArr = strLocal.split(" ");
//     for (var i = 0; i < strArr.length; i++){
//         if (strArr[i].length > strArr[i + 1].length){
//             return strArr[i];
//         }
//     }
// }
// var str = prompt("Enter String: ");
// document.write("Text: " + str);
// document.write("<br>Longest word: " + findLongestWord(str));

//------ Chapters35-38 task 13

// function countOccurrenceOfLetter(strLocal, searchedLetterLocal){
//     var count = 0;
//     strLocal = strLocal.toLowerCase().split("");
//     for(var i = 0; i < strLocal.length; i++){
//         if(strLocal[i] === searchedLetterLocal){
//             count = count + 1;
//         }
//     }
//     return count;
// }
// var str = prompt("Enter String: ");
// var searchedLetter = prompt("Enter letter whose occurence(s) you want to count: ");
// document.write("Text: " + str);
// var numberOfOccurrences = countOccurrenceOfLetter(str, searchedLetter);
// document.write("<br>There are " + numberOfOccurrences + " occurrence(s) of letter '" + searchedLetter + "'");


//------ Chapters35-38 task 14

// function calcCircumference(radiusLocal){
//     return (2 * (3.142) * radiusLocal);
// }
// function calcArea(radiusLocal){
//     return ((3.142) * (radiusLocal * radiusLocal));
// }
// var radius = +prompt("Enter radius value: ");
// document.write("Circumference: " + calcCircumference(radius).toFixed(2));
// document.write("<br>Area: " + calcArea(radius).toFixed(2));

//------ Chapters38-42 task 1

// function power(a, b){
//     var c = 1;
//     for(var i = 1; i <= b; i++){
//         c *= a;
//     }
//     return c;
// }
// var num = +prompt("Enter number; ");
// var vpower = +prompt("Enter power; ");
// document.write(num + " raised to " + vpower + " equals to " + power(num, vpower));

//------ Chapters38-42 task 2

// function leapYear(year){
//     if(year % 4 === 0){
//         document.write(year + " is a Leap Year.");
//     }
//     else if(year % 4 !== 0){
//         document.write(year + " is not a Leap Year.");
//     }
//     else{
//         document.write("Error!");
//     }
// }
// var year = +prompt("Enter Year: ");
// leapYear(year);

//------ Chapters38-42 task 3

// function calculateArea(num1, num2, num3){
//     function calculateS(a, b, c){
//         return (a + b + c) / 2;
//     }
//     var s = calculateS(num1, num2, num3);
//     var result = s*(s - num1)*(s - num2)*(s - num3);
//     return result;
// }
// var side1 = +prompt("Enter the value of side 1: ");
// var side2 = +prompt("Enter the value of side 2: ");
// var side3 = +prompt("Enter the value of side 3: ");
// document.write("Area is equal to " + calculateArea(side1, side2, side3));

//------ Chapters38-42 task 4

// function average(a, b, c){
//     return (a + b + c) / 3;
// }
// function calculatePercentage(marks){
//     return marks / 100 * 100;
// }
// function result(x, y, z){
//     var averageMarks = average(x, y, z);
//     var percentage = calculatePercentage(averageMarks);
//     document.write("The Average Marks are " + averageMarks.toFixed(2) + " and the percentage is " + percentage.toFixed(2) + "%");
// }
// var marks1 = +prompt("Enter First subject marks: ");
// var marks2 = +prompt("Enter Second subject marks: ");
// var marks3 = +prompt("Enter Third subject marks: ");
// result(marks1, marks2, marks3);

//------ Chapters38-42 task 5

// function findIndexOf(sentence, obj){
//     sentence = sentence.split("");
//     var i = 0;
//     do {
//         if (obj === sentence[i]) {
//             return(i);
//         }
//         else if (i === sentence.length) {
//             return(-1);
//         }
//         i++;
//     }
//     while (i <= sentence.length);
// }
// var objG = prompt("Enter character whose you want to find index: ");
// var sentenceG = prompt("Enter sentence in which you want find index: ");
// document.write(objG + " is present in " + sentenceG + " at index " + findIndexOf(sentenceG, objG));

//------ Chapters38-42 task 6

// function deleteVowel(sentence){
//     sentence = sentence.split("");
//     var i = 0;
//     while(i < sentence.length){
//         if(sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u"){
//             sentence[i] = "";
//         }
//         else if(sentence[i] === "A" || sentence[i] === "E" || sentence[i] === "I" || sentence[i] === "O" || sentence[i] === "U"){
//             sentence[i] = "";
//         }
//         i++;
//     }
//     sentence = sentence.join("");
//     return sentence;
// }
// var sentenceG = prompt("Enter sentence in which you want to delete vowel: ");
// document.write("With vowel = " + sentenceG + "<br>Without Vowel = " + deleteVowel(sentenceG));

//------ Chapters38-42 task 7

// function findOccurenceOfTwoVowel(str) {
//     var count = 0;
//     str = str.toLowerCase().split("");
//     for (var i = 0; i < str.length; i++) {
//         switch (str[i] + "" + str[i + 1]) {
//             case 'aa':
//                 count = count + 1;
//                 break;
//             case 'ae':
//                 count = count + 1;
//                 break;
//             case 'ai':
//                 count = count + 1;
//                 break;
//             case 'ao':
//                 count = count + 1;
//                 break;
//             case 'au':
//                 count = count + 1;
//                 break;
//             case 'ea':
//                 count = count + 1;
//                 break;
//             case 'ee':
//                 count = count + 1;
//                 break;
//             case 'ei':
//                 count = count + 1;
//                 break;
//             case 'eo':
//                 count = count + 1;
//                 break;
//             case 'eu':
//                 count = count + 1;
//                 break;
//             case 'ia':
//                 count = count + 1;
//                 break;
//             case 'ie':
//                 count = count + 1;
//                 break;
//             case 'ii':
//                 count = count + 1;
//                 break;
//             case 'io':
//                 count = count + 1;
//                 break;
//             case 'iu':
//                 count = count + 1;
//                 break;
//             case 'oa':
//                 count = count + 1;
//                 break;
//             case 'oe':
//                 count = count + 1;
//                 break;
//             case 'oi':
//                 count = count + 1;
//                 break;
//             case 'oo':
//                 count = count + 1;
//                 break;
//             case 'ou':
//                 count = count + 1;
//                 break;
//             case 'ua':
//                 count = count + 1;
//                 break;
//             case 'ue':
//                 count = count + 1;
//                 break;
//             case 'ui':
//                 count = count + 1;
//                 break;
//             case 'uo':
//                 count = count + 1;
//                 break;
//             case 'uu':
//                 count = count + 1;
//                 break;
//         }
//     }
//     return count;
// }
// var sentence = prompt("Enter Sentence: ");
// document.write("Text: " + sentence);
// document.write("<br>There are " + findOccurenceOfTwoVowel(sentence) + " occurrence(s) of two vowels in succession in a line of text");

//------ Chapters38-42 task 8

// function toMeter(km){
//     return km * 1000;
// }
// function toCentimeter(km){
//     return km * 100000;
// }
// function toFeet(km){
//     return km * 3281;
// }
// function toInch(km){
//     return km * 39370;
// }
// var distance = +prompt("Enter Distance: ");
// document.write("Distance = " + distance + " km<br>In Meter = " + toMeter(distance) + "<br>In Feet = " + toFeet(distance));
// document.write("<br>In Inch = " + toInch(distance) + "<br>In Centimeter = " + toCentimeter(distance));

//------ Chapters38-42 task 9

// function calculateOvertime(hour){
//     var overTime = 0;
//     if(hour > 40){
//         overTime = 12 * (hour - 40);
//         document.write("Overtime = " + overTime);
//     }
//     else{
//         document.write("No Overtime!");
//     }
// }
// var hrs = +prompt("Enter number of hours worked by employee: ")
// document.write("Hours = " + hrs + "<br>")
// calculateOvertime(hrs);

//------ Chapters38-42 task 10

// function calculateNote(amount){
//     var note100 = 0;
//     var note50 = 0;
//     var note10 = 0;
//     if(amount >= 10 && amount < 50){
//         note10 = parseInt(amount / 10);
//     }
//     else if(amount >= 50 && amount < 100){
//         note50 = parseInt(amount / 50);
//         note10 = parseInt((amount - (note50 * 50)) / 10);
//     }
//     else if(amount >= 100){
//         note100 = parseInt(amount / 100);
//         note50 = parseInt((amount - (note100 * 100)) / 50);
//         note10 = parseInt((amount - (note100 * 100) - (note50 * 50)) / 10);
//     }
//     document.write("you will have " + note100 + " hundred notes " + note50 + " fifty notes " + note10 + " ten notes.");
// }
// var amountG = +prompt("Enter Amount: ");
// document.write("Amount = " + amountG + "<br>");
// calculateNote(amountG);

//------ Chapters43-48 task 1

// function greet(){
//     alert("Hello World!");
// }

//------ Chapters43-48 task 2

// function gratitude(){
//     alert("Thanks for purchasing!")
// }

//------ Chapters43-48 task 3



//------ Chapters43-48 task 4

// function image1(){
//     document.getElementById('phone').src = "01.jpg";
// }
// function image2(){
//     document.getElementById('phone').src = "02.jpg";
// }

//------ Chapters43-48 task 5

// var num = 0;
// function increase(){
//     num++;
//     document.getElementById('counter').innerHTML = num;
// }
// function decrease(){
//     num--;
//     document.getElementById('counter').innerHTML = num;
// }

//------ Chapters49-52 task 1

// function submit(){
//     var username = document.getElementById('username').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     document.getElementById('display').innerHTML = "<p>Name: " + username + "</p>";
//     document.getElementById('display').innerHTML += "<p>Phone: " + phone + "</p>";
//     document.getElementById('display').innerHTML += "<p>Email: " + email + "</p>";
//     document.getElementById('display').innerHTML += "<p>Password: " + password + "</p>";
// }

//------ Chapters49-52 task 2

// function showDescription(){
//     var description = document.getElementById('description');
//     description.innerHTML = "<p>48 Megapixel rear camera</p>"
//     description.innerHTML += "<p>15 Megapixel front camera</p>"
//     description.innerHTML += "<p>quad core processor</p>"
//     description.innerHTML += "<p>8gb RAM</p>"
//     description.innerHTML += "<p>128gb ROM</p>"
// }

//------ Chapters49-52 task 3



//------ Chapters52-57

// word file is not opening

//------ Chapters58-67 task 1

// i)
// var main = document.getElementById('main-content');
// 
// ii)
// var main = document.getElementById('main-content');
// for(var i = 0;i < main.childNodes.length; i++){
//     document.write(main.childNodes[i].innerHTML + "<br>");    
// }

// iii)
// var render = document.getElementsByClassName('render');
// for(var i = 0; i < render.length; i++){
//     document.write(render[i].innerHTML + "<br>");
// }

// // iv)
// var first_name = document.getElementById('first-name');
// first_name.value = "Alex";

// v)
// var last_name = document.getElementById('last-name');
// last_name.value = "Bank";
// var last_name = document.getElementById('email');
// last_name.value = "alexbank@example.com";

//------ Chapters58-67 task 2

// i)
// var type = document.getElementById('form-content').nodeType;
// document.write("the node type of element having id = form-content is " + type);

// ii)
// var lastName = document.getElementById('lastName');
// document.write("node type: " + lastName.nodeType);
// for(var i = 0;i < lastName.childNodes.length; i++){
//     document.write("<br>childNodes: " + lastName.childNodes[i]);
// }

// iii)
// var lastName = document.getElementById('lastName');
// var updated = lastName.appendChild("P");

// iv)
// var mainContent = document.getElementById('main-content');
// document.write("First Child: " + mainContent.firstChild);
// document.write("<br>Last Child: " + mainContent.lastChild);

// v)
// var lastName = document.getElementById('lastName');
// document.write("Previous Sibling: " + lastName.previousSibling);
// document.write("<br>Next Sibling: " + lastName.nextSibling);

// vi)
// var email = document.getElementById('email');
// document.write("Parent Node: " + email.parentNode);
// document.write("<br>Node Type: " + email.nodeType);