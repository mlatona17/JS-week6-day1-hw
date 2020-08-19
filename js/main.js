// Basic JavaScipt

/*
    -- Variable Declaration --
    Primative types in JavaScript - string, integers, floats, arrays, objects
*/

// String variables
name  = 'Bill';

console.log(name)

// Integer variable
some_number = 30;

console.log(some_number)


// Float Var
some_float = 3.14;

console.log(some_float);

// Array Var
some_array = [1,2,3,4];

console.log(some_array)

// Object Var
some_object = {'test':'Play this please!'}

console.log(some_object)

// String Concatination
full_statement = name + ' how are you doing?';

console.log(full_statement);

// Basic MAth Operations
sum = 5+5;

console.log(sum)

// Multiplication
product = 5 * 5;

console.log(product)

// Subtraction
difference = 5 - 5;

console.log(difference)

// Division
divide = 5 / 5;

console.log(divide);

// More math operations(slightly advanced)
square = 5 ** 2;

console.log(square)

// Finding the floor of a decimal
find_floor = Math.floor(25.2)

console.log(find_floor)

// Finding the ceiling of a decimal (Rounding Up)
find_ceil = Math.ceil(25.5)

console.log(find_ceil)

// Mind Bender
more_crazy_stuff = some_float + '4'

console.log(more_crazy_stuff)

// JavaScript Hoisting Example
var basketball_player;
console.log('BEFORE DECLARATION: ', "Currently playing face of NBA" + basketball_player)
var basketball_player = 'Lebron James';
console.log('AFTER DECLARATION: ', basketball_player)

// JavaScript 'let' keyword - ES6 JavaSCript Var Creation (safer)
// console.log(nba_goat)
let nba_goat = 'Michael Jordan';
console.log(nba_goat)

// JavaSCript const keyword - ES6+ JavaSCript Var Creation (safer)
const fav_football_team = 'Philly Eagles';

console.log(fav_football_team)

// fav_football_team = 'Chicago Bears';

// console.log(fav_football_team)


/*
    JavaSCript Function Creation
    --There are multiple ways of making a function in JavaScript --
*/

// Regular Named Function
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2

}

console.log(addNums())

// ES6 Arrow Function - exact same as above. Just used cause you'll see in Stackoverflow often
let addNums2 = () => {
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums2())

// Var named functions
let addNums3 = function(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

console.log(addNums3())


// Functions with parameters
function multiplyNums(num, num2){
    return num * num2
}

console.log(multiplyNums(4,8))

// Arrow Function with parameters
let multiplyNums2 = (num,num2) => {
    return num * num2
}

console.log(multiplyNums2(4,8))

// Variable function with parameters
let multiplyNums3 = function(num, num2){
    return num * num2
}

console.log(multiplyNums3(4,8))


// Self-invoking function
console.log((function() {
    let hello = 'Hello World';
    return hello
})())

console.log((function (name) {
    let hello = 'Hello World' + name;
    return hello
})('Joel'))


// JavaScript Control Flow
// If Statements
function determineAge(age){
    if(age < 18){
        return 'Minor'
    } else if ( age >= 18 && age <= 65){
        return 'Adult not retired'
    } else {
        return 'Elderly person retired'
    }
}

console.log(determineAge(30))


// Ternary Operator - JavaScript
function determineAge2(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65) ? //'?' = if true // ':' = else
    'Adult not yet Retired' : 'Elderly person Retired'
}

console.log(determineAge2(67))


//Loops in JavaScript - For Loop
// For Loop syntax -- 'for' keyword (counter; expression; incrementation/decrementation)

function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting Stopped'

}

console.log(countByOne())

function decreaseByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decreasing Stopped'
}

console.log(decreaseByOne())



// While loop
function countWithWhile(){
    let i = 0 // counter
    let text = '';

    while(i < 10){
        text += "This number is..." + i + "\n"
        i++
    }
    return text
}

console.log(countWithWhile())


// Do While Loop

function countWithDoWhile(){
    let i = 0 // Counter
    let text = '';

    do{
        text += 'This number is now...' + i + "\n"
        i++
    }
    while (i < 10) // i > 10 only return 0
    return text
}

console.log(countWithDoWhile())


// JavaScript Array Methods

let groupOfNames = ['Terry', 'Ben', 'Ash', 'Brock', 'Misty'] // List for functions below***


console.log(groupOfNames[1]) // should = 'Ben'


//toString()
console.log(groupOfNames.toString())

// join()
console.log(groupOfNames.join(", "))

//Loop through array with a for loop
for(let i = 0; i < groupOfNames.length; i++){
    console.log(groupOfNames[i]) //line by line printout of each name
}

// ForEach()
console.log(groupOfNames
            .forEach(element => console.log(element)))


// Use an Array to produce a String -- Then use a String Method(s) on the result
console.log(groupOfNames[0].search('T')) // asking where in index 0 aka 'Terry', is the letter 'T' found -> ans: 0. 'e' would print ans: 1
console.log(groupOfNames[1].slice(0,2)) // up to but not including index 2. So 'Ben' = 'Be'


// Array Method - Slice() -> pay attention this is for an array not string. Treated differently
console.log(groupOfNames.slice(0,3))


// Array Method - Splice()
console.log(groupOfNames.splice(3,2,'Freddie', 'Bob')) // start at index 3, remove index 3, add/replace these names at index 3
console.log(groupOfNames)

for(let i = 0; i < groupOfNames.length; i++){
    if(i % 2 == 0){
        groupOfNames.splice(i,1,'Goku')
    }
    console.log(groupOfNames)
}


//===============Homework==================//

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for(let i = 0; i < dog_names.length; i++){ //(counter; expression; incrementation/decrementation)
        if(dog_string.includes(dog_names[i])){
            console.log("Matched: " + dog_names[i])
        }
    }
}
console.log(findWords(dog_string, dog_names))


//Call method here with parameters



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let names = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(names){
    for(let i = 0; i < names.length; i++){
        if(i % 2 == 0){ // find even indices (e.g. 'reboot')
            names.splice(i,1,'even index') //'i' has already been filtered for evens indices only. Replace those even indices with 'even index'. 
        }
    }
    console.log(names)
}
console.log(replaceEvens(names))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
