console.log("This is about switch case statement in the java script")

let age = prompt("Enter you age")
age = Number.parseInt(age)
switch (age) {
    case 1:
        console.log("Your age is 10")
        break;

    default:
        console.log("Invalid age")
        break;
}