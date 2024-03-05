// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// console.log(parametrize("Javascript is the best"));
// "javascript-is-the-best"

// Your code:
const parametrize = (input) => {
    return input.toLowerCase().replace(/ /g, '-');
};
console.log("parametrize");
console.log(parametrize('Javascript is the best'));

// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
const giveSentenceForPerson = (obj) => {
    let name = obj.name;
    let position = obj.position;
    let age = obj.age;
    let location = obj.location;
    
    console.log(`Hello ${name} from ${location}! It is nice to meet you! You look awesome for your ${age}, young ${position}!`);
};
console.log("giveSentenceForPerson");
giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"});

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
const replace = (input) => {
    const vowels = ['a', 'e', 'i', 'o'];
    let res = '';
    for(let i = 0; i < input.length; i++){
        if(vowels.includes(input[i])){
            res += '*';
        }else{
            res += input[i];
        }
    }
    console.log(res);
};
console.log("replace");
replace("Hello Javascript");
