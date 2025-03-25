// Person constructor function
function Person(name, country, education) {
    this.name = name;
    this.country = country;
    this.education = education;
}

Person.prototype.description = function() {
    return "The person's name is " + this.name + ". They are from " + this.country + ". They have completed their " + this.education + " from AUM.";
};

let strArr = [];

function insert() {
    let n = document.getElementById("name").value;
    let c = document.getElementById("country").value;
    let e = document.getElementById("education").value;

    if (n && c && e) {
        let new_person = new Person(n, c, e);
        strArr.push(new_person);
        clearInputs();
    } else {
        alert('Please fill out all fields.');
    }
}

function show() {
    displayPersons();
}

function displayPersons() {
    const personDisplay = document.getElementById('personDisplay');
    personDisplay.innerHTML = '';

    strArr.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.innerHTML = person.description();
        personDisplay.appendChild(personDiv);
    });
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('country').value = '';
    document.getElementById('education').value = '';
    //strArr=[];
}

function clearDisplay() {
    const personDisplay = document.getElementById('personDisplay');
    personDisplay.innerHTML = '';
}
