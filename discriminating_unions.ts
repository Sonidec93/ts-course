interface Bird {
    type: 'bird';
    flyingSpeed: number
}

interface Horse {
    type: 'horse';
    runningSPeed: number;
}
type Animal = Bird | Horse;
function findAnimalSpeed(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSPeed;
            break;
        default:
            speed = 0;
    }
    console.log(`Speed of the animal is ${speed}`);
}

findAnimalSpeed({type:'bird',flyingSpeed:70});
let val={
    name:'mukul',
    age:26
}
