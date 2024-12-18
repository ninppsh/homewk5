// 1)
// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან 
// გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

const array = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10];
for(let i = 0; i < array.length; i++) {
    console.log(`${array[i]}`);

};

console.log("----------------------");

let i = 0;
while(i < array.length) {
    console.log(`${array[i]}`);
    i++
};


console.log("----------------------");

// 2)
// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 
// 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

for (let i = 10; i >= 1; i--) {
    console.log(i);
};

console.log("----------------------");

let x = 10;
while(x >= 1) {
    console.log(x);
    x--;
};




// 3)
// მოცემული მასივიდან
	
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის 
// გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ 
// ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას 
// ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

const names = ['John', 'Bob', 'Nick', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob']; // ამ დავალებაში მასივს არ მიჩვენებდა და ჩემით ჩავსი
let newNames = [];

for (let i = 0; i < names.length; i++) {
    if(names[i] !== 'Bob') {
        newNames.push(names[i]);
    };
};
console.log(newNames);



// 4)
// ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული 
// რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power,
//  მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

const fun = (number, power) => {
    let x = 1;
    for(let i = 0; i < power; i++) {
        x = x * number;
    };
    return x;
};

console.log(fun(5, 3));



// 5)
// შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები 
// იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, 
// Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა 
// უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

function numbersNames() {
    for (i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log(i, 'fizzbuzz')
        else if (i % 5 === 0) console.log(i, 'buzz')
        else if (i % 3 === 0) console.log(i, 'fizz')
        else console.log(i);
    };
};

numbersNames();




// 6)
// შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც
//  დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული
//   რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

const factorialCalculator = number => {
    if(number < 0) {
        console.log('---');
        return;
    };

    let f = 1;
    for(let i = 1; i <= number; i++) {
        f = f * i;
    };
    return console.log(`${number}! = ${f}`);
};
factorialCalculator(5);


// 7)
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს 
// მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

const firstUpperWord = string => string.at(0).toUpperCase() + string.slice(1).toLowerCase();
console.log(firstUpperWord("paPASHVili"));


// 8) 
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი.
//  მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს 
//  თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

const blankStringChecker = string => (string.trim().length === 0) ? console.log('this string is blank') : console.log('this string is not blank');

blankStringChecker('   ');


// 9)
// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. 
// მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს 
// “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

const stringToArray = string => string.split(",");
console.log(stringToArray("hello, world"));


// 10) 
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს 
// შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, 
// beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას 
// ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.


const secureEmail = email => {
    const lastName = email.split('.').slice(1,2).join('').split('@').slice(0,1).join();
    return email.replace(lastName, ".".repeat(lastName.length));
}
console.log(secureEmail('nini.papashvili@gmail.com'));



// 11) 
// შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
const str = 'aaaa bbbbbb cccccccccccc ddd ee fffffffff gggggggggggggggggggggg';

const longestWord = word => {
    const words = word.split(' ');
    let longestWord = '';

    for (word of words) {
        longestWord = word.length > longestWord.length ? word : longestWord;
    }
    return  console.log(longestWord);
}

longestWord(str);

// 12) 
// შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, 
// ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით 
// add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს 
// ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით


const calculator = {
    num1: 10,
    num2: 5,
    add() {
        console.log(this.num1 + this.num2);
    },
    substract() {
        console.log(this.num1 - this.num2);
    },
    multiply() {
        console.log(this.num1 * this.num2);
    },
    divide() {
        console.log(this.num1 / this.num2);
    }
}

calculator.add();
calculator.substract();
calculator.multiply();
calculator.divide();