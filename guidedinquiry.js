
//very easy 
function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}

console.log(min(-5, 25));

//easy Create an array of students holding their last name, first name, and age with 3 students. To
//validate, please log a greeting with the first name, last name and age of the 2nd student. The output
//should look like "Hello, my name is John Doe and I'm 19 years old." */

let student = {
    firstName: "Ethan",
    lastName: "Doan",
    age: "19 years old",
}

let student2 = {
    firstName: "Max",
    lastName: "Doan",
    age: "6 years old",
    printName: function () {
        console.log("Hello, my name is"+ " "+ this.firstName + " "+ this.lastName + " "+ "and I'm" + " "+this.age)
    }
}
student2.printName()

let student3 = {
    firstName: "Giang",
    lastName: "Doan",
    age: "16 years old", 
}
//medium 
let userInput = prompt("Enter a number from 1-12 for the corresponding month");
let months =['Janurary','February','March','April','May','June','July','August','September','October','November','December'];

if(userInput='1'){
    console.log(months[0]);
}else if(userInput=='2'){
    console.log(month[1]);
}else if(userInput=='3'){
    console.log(month[2]);
}else if(userInput=='4'){
    console.log(month[3]);
}else if(userInput=='5'){
    console.log(month[4]);
}else if(userInput=='6'){
    console.log(month[5]);
}else if(userInput=='7'){
    console.log(month[6]);
}else if(userInput=='8'){
    console.log(month[7]);
}else if(userInput=='9'){
    console.log(month[8]);
}else if(userInput=='10'){
    console.log(month[9]);
}else if(userInput=='11'){
    console.log(month[10]);
}else if(userInput=='12'){
    console.log(month[11]);
}
else {
    alert("Invalid number")
};
// hard
const jerryWeight = 8;
const jerryHeight = 9;
const tomWeight = 45;
const tomHeight = 10;

const jerryBmi = jerryWeight/jerryHeight ** 2;
const tomBmi = tomWeight/tomHeight ** 2;
const tomHigherBmi = tomBmi > jerryBmi;
//console.log(jerryBmi,tomBmi, tomHigherBmi);
if(tomBmi>jerryBmi){
   console.log(`Toms BMI (${tomBmi}) is higher than Jerrys (${jerryBmi}))!`)
} else {
    console.log(`Jerry BMI (${jerryBmi}) is higher than Toms (${tomBmi}) !`)
}


//4-25


