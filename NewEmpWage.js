const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
const IS_ABSENT=0;
const NO_OF_WORKING_DAYS=20;
const MAX_HRS_MONTH=160;
//UC1-Present Absent
{
    
    let empCheck=Math.floor(Math.random()*10) % 2;
    if (empCheck == IS_ABSENT){
    console.log("UC1-EMP IS ABSENT.Exiting the program ");
    return;
    }else {
    console.log("uc1-employee is present");
    }
}

//UC2-Part Time full time
{

let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;
switch (empCheck) {
    case IS_PART_TIME:
            empHrs=PART_TIME_HRS;
        break;
    case IS_FULL_TIME:
            empHrs=FULL_TIME_HRS;
        break;
    default:
            empHrs=0;
}

let empWage= empHrs*WAGE_PER_HR;
console.log("UC2-Emp wage :"+empWage);
}
//UC3-Function to Get Work Hours
{function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}

let empCheck =Math.floor(Math.random() *10)%3;
let empHrs=getWorkingHours(empCheck);
let empWage=empHrs *WAGE_PER_HR;
console.log("UC3-Emp Wage: " +empWage);
}

//UC4 Calculate Wages for a Month
{
let empHrs=0;
for(day=0;day<NO_OF_WORKING_DAYS;day++){
    let empCheck =Math.floor(Math.random() *10)%3;
    empHrs +=getWorkingHours(empCheck);
}
let empWage= empHrs*WAGE_PER_HR;
console.log("UC4 Total Hrs: " +empHrs+ " Emp Wage: "+empWage);
}

//UC5-Wages where Working hrs<160 ot max days<20
//UC6-Arrays
{
    function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
    }
{ 
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyWageArr= new Array();

    while(totalEmpHrs<=MAX_HRS_MONTH && totalWorkingDays<NO_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*10)%3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs +=empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
}

  {
    let empWage= totalEmpHrs*WAGE_PER_HR;
    console.log("UC5- Total Days: " +totalWorkingDays+ 
                "Total Hrs: "+ totalEmpHrs + "Emp Wage: " +empWage);
  }

{
    let empWage=calcDailyWage(totalEmpHrs);
    console.log("UC6-Total Days: " + totalWorkingDays + 
            "Total Hrs:"+ totalEmpHrs + " Emp Wage: "+ empWage);

}
}
}

