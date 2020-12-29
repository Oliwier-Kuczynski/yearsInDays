function ageInDays() {
    let reset = document.querySelector('#reset');
    let output = document.querySelector('#output');
    let yearOfBorn = prompt("What is the year of your born?");
    let name = prompt("Whats your name ?");
    if((yearOfBorn >= 1897) && (yearOfBorn <= 2020)) {
    let age = (2020 - yearOfBorn) * 360;
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 'Hi ' + name + " you are " + age + " days old !";
    output.appendChild(paragraph);
    paragraph.addEventListener('dblclick', () => {
        output.removeChild(paragraph);
    });
    } else if(output.value = null) {
        alert("You have to enter a correct year of your brith and/or name");
        output.textContent = "";

    } else {
        alert("You have to enter a correct year of your brith and/or name");
    };
    reset.addEventListener('click', () => {
        output.textContent = "";
    });
};