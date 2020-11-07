const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
const IS_ABSENT=0;
const NO_OF_WORKING_DAYS=20;
const MAX_HRS_MONTH=160;
let empDailyWageArr= new Array();
let empDailyWageMap=new Map();
let empDailyHrsMap= new Map();
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

    function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HR;
    }

    let totalEmpHrs=0;
    let totalWorkingDays=0;
   

    while(totalEmpHrs<=MAX_HRS_MONTH && totalWorkingDays<NO_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*10)%3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs +=empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
        empDailyHrsMap.set(totalWorkingDays,empHrs);
}
    console.log(empDailyWageMap);
    console.log(empDailyHrsMap);
    console.log("------------------------");
    

  {
    let empWage= totalEmpHrs*WAGE_PER_HR;
    console.log("UC5- Total Days: " +totalWorkingDays+ 
                "Total Hrs: "+ totalEmpHrs + "Emp Wage: " +empWage);
  }

{
    
    let empWage= totalEmpHrs*WAGE_PER_HR;
    console.log("UC6-Total Days: " + totalWorkingDays + 
            "Total Hrs:"+ totalEmpHrs + " Emp Wage: "+ empWage);

}


//UC7-Array Helper Problems
//UC7A-Use forEach for traversal

let totalEmpWage=0;
function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
    
console.log("UC7A-Emp Wage Map totalHrs: " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));
                
    
//UC7B-Show the day along with the daily wage
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return "Day " + dailyCntr + " : " +dailyWage;
}
let mapDayWithWageArr= empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily Wage Map");
console.log(mapDayWithWageArr);


//UC7C-Show days when employess worked full time
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr= mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C-Daily Wage Filter When Full Time Wage is Earned");
console.log(Array.from(mapDayWithWageArr.values()).filter(fullTimeWage));

//UC7D-Find first occurrence of Full Wage
console.log("UC7D-First Time Fulltime wage was earned: " + mapDayWithWageArr.find(fullTimeWage));

//UC7E-Check if Every Element of full time wage is truely holding full time wage
console.log("UC7E-Check all elements have full time wage");
console.log(fullDayWageArr.every(fullTimeWage));

//UC7F-Check of there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC 7F- Check If any part time wage: ")
console.log(mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G-Find the number of days employee worked
function totalDaysWorked(numOfDays,dailyWage){
    if (dailyWage>0) return numOfDays+1;
    return numOfDays;
}

console.log("UC7G- Number of Days Emp Worked: ")
console.log(empDailyWageArr.reduce(totalDaysWorked,0));


//UC9 Arrow Functions
const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}
let count=0;
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage=> dailyWage>0)
                .reduce(findTotal,0);
console.log("UC9A-Wage with arrow:"+"total hrs:"+
            totalHours+ "Total Wages:"+totalSalary);

let nonWorkingDays= new Array();
let partWorkingDays= new Array();
let fullWorkingDays= new Array();
empDailyHrsMap.forEach((value,key,map)=> {
        if(value==8) fullWorkingDays.push(key);
        else if (value==4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
});

console.log("Full Working Days:" +fullWorkingDays);
console.log("Part Working Days:" +partWorkingDays);
console.log("Non Working Days:" +nonWorkingDays);


