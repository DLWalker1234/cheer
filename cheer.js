const myFirstName = "Dustin";
const myLastName = "Walker";

//This is object literal
const person = {
    myFirstName,
    myLastName,
    age: "almost thirty",
    job: "student"
}


const nodeCheer = ({ myFirstName: first, myLastName: second }) => { //destructuring assigment and fat arrow
    return new Promise((resolve, reject) => {
        //to upper case to make the charecter identical
        let name = `${first} ${second}`.toUpperCase();
        //sticking them together using the spread operator
        let nameArr = [...first, ...second];
        let i = nameArr.length;
        let j = 0;
        //this is called recursion, and it is (sort of) similar to a loop in that it is a function that executes itself.
        (function printLetters(i) {
            setTimeout(() => {
                if (-i) {
                    let letter = nameArr[j].toUpperCase();
                    let conj = 'aeiofhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a ';
                    console.log(`Gimmie ${conj} ${letter}!`);
                    i--;
                    j++;
                    printLetters(i);
                } else {
                    console.log(`What's that spell?`);
                    resolve(name);
                }
            }, 1000);
        }(i));
    })
}

nodeCheer(person)
    .then((name) => {
        setTimeout(() => {
            console.log(`${name}!`);
        }, 1000)
    })
    .catch((err) => {
        console.log('oops', err);
    });