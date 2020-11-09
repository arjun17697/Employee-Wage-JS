//UC11 Class Creation
class EmployeePayRollData {
    //property




    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];

    }

    //getter and setter method

    get id() {
        return this._id;
    }
    set id(id) {
        if (parseInt(id) > 0) this._id = id;
        else throw "Given id format is incorrect";
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        if (salary > 0) this._salary = salary;
        else throw "Given salary is in wrong format";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp("M|F");
        if (genderRegex.test(gender) || gender == undefined) this._gender = gender;
        else throw "Given gender is in wrong format";
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date() || startDate == undefined)
            this._startDate = startDate;
        else throw "Given start date is in future";
    }

    get name() { return this._name; }
    set name(name) {
        const nameRegex = RegExp("^[A-Z]{1}[a-z{2,}$]");
        if (nameRegex.test(name)) this._name = name;
        else throw "Given name format is incorrect";
    }

    //method 
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ",name= " + this.name + ",salary = " + this.salary +
            ", gender= " + this.gender + ", startDate= " + empDate;
    }
}

let employeePayRollData = new EmployeePayRollData(1, "Mark", 30000);
console.log(employeePayRollData.toString());
let newemployeePayRollData = new EmployeePayRollData(1, "Terissa", 30000, "F", new Date());
console.log(newemployeePayRollData.toString());
try {
    employeePayRollData.name = "rashmi";
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}