require('style/main.html');
logTitle('Title')
log('Javascript course');
// declaring variables and variables are placeholder that help you the 
//store values 
var name ="Joshua Agyakwa";
var age = 89;
var isActive = true;
var empty= undefined;

console.log(name + "type =" + typeof name);
console.log(age +"type =" +typeof age);
console.log(isActive + "type =" + typeof isActive);
console.log(empty + "type =" + typeof empty);
 // dealing with Arrays 
  const fruits= ['apples','ornages','pears'];
  console.log(fruits);
  //pushing a value to the end in an Array 
  fruits.push('mangoes');

   fruits.unshift('strawberries');
   console.log(Array.isArray);

   // dealing with object literals
   const person= {
    firstname:'Roland',
    lastname:'mooy',
    age:89,
    hobbies: ['music','reading ','sports'],
    address: {
        city: 'Accra',
        area:'Taifa',
        housenumber:'BAM 13',

    }


   };
   // Assessing the firstname  
    console.log(person.firstname);

    //Arrays
    const selectNames=['John','Seth','Denis','Richard'];
    console.log(selectNames[3]);
        //looping through arrays 
        //for(var n of selectNames);
        //console.log(n);
        selectNames.forEach(function(n,index){
            console.log(index +"-"+ n);
        });

