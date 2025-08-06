function getLetterGrade(marks){
if (marks >= 90)
    return "A"
else if (marks >= 80)
    return "B"
else if (marks >= 70)
    return "C"
else if (marks >= 60)
    return "D"
else if (marks >= 0)
    return "F"
}
console.log("Score 95: " + getLetterGrade(95)); // A
console.log("Score 85: " + getLetterGrade(85)); // B
console.log("Score 75: " + getLetterGrade(75)); // C
console.log("Score 65: " + getLetterGrade(65)); // D
console.log("Score 55: " + getLetterGrade(55)); // F


function calculateTax(income,taxStatus){
    if (taxStatus == "single"){
        if (income <= 30000)
            return income * 15/100
        else if (income >= 30000)
            return income * 20/100
    }
    if (taxStatus == "married"){
        if (income <= 50000)
            return income * 10/100
        else if (income >= 50000)
            return income * 15/100
    }
}

console.log("Tax for single person earning 25000: " + calculateTax(25000, "single"));
console.log("Tax for single person earning 50000: " + calculateTax(50000, "single"));
console.log("Tax for married person earning 40000: " + calculateTax(40000, "married"));
console.log("Tax for married person earning 60000: " + calculateTax(60000, "married")); 
