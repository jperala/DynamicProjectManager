class Person {
    constructor(names, country, education) {
        this.names = names;
        this.country = country;
        this.education = education;
    }

    description() {
        return `The person's name is ${this.names}. He is from ${this.country}. He has completed his ${this.education} from AUM.`;
    }
}

let strArr = [];

function insert() {
    let n = document.getElementById('name').value.trim();
    let c = document.getElementById('country').value.trim();
    let e = document.getElementById('education').value.trim();

    if (!n || !c || !e) {
        alert("All fields are required!");
        return;
    }

    let newPerson = new Person(n, c, e);
    strArr.push(newPerson);

    // Clear the display and reset input fields for new entries
    document.getElementById("div2").innerHTML = "";
    document.getElementById('name').value = "";
    document.getElementById('country').value = "";
    document.getElementById('education').value = "";
}

function showInfo() {
    if (strArr.length === 0) {
        document.getElementById("div2").innerHTML = `<p style="color:red;">❌ No records found!</p>`;
        return;
    }

    let displayText = "<h3>Student Records</h3>";
    strArr.forEach((person, index) => {
        displayText += `<p>${index + 1}. ${person.description()}</p>`;
    });

    document.getElementById("div2").innerHTML = displayText;
}