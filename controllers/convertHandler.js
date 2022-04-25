function ConvertHandler() {

  function splitNumsAndChars(input){
    let num = input.match(/[.\d\/]+/g) || ["1"];
    let str = input.match(/[a-zA-Z]+/g)[0];
    console.log("num: ", num[0], typeof(num[0]), "unit: ", str);  //TEST
    return [num[0], str];
  }

  function checkDivision(input){
    let nums = input.split("/");
    return nums.length <= 2 ? nums : false;
  }
  
  this.getNum = function(input) {
    let nums = checkDivision(splitNumsAndChars(input)[0]);
    console.log("Get num func - nums:", nums); // TEST
    if(!nums) {
      return undefined;
    }  else{
        let num1 = nums[0];
        let num2 = (nums[1] || ["1"]);
      return parseFloat(nums1)/parseFloat(num2);
    } 
  };
  
  this.getUnit = function(input) {
    let result = splitNumsAndChars(input)[1].toLowerCase();
    console.log("getUnit - unit:", result); //TEST
    switch(result){
      case "gal":
      case "mi":
      case "km":
      case "lbs":
      case "kg":
        return result;
      case "l":
        return "L";
      default:
        return undefined;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase;
    switch(unit){
      case "gal":
        return "L";
      case "l":
        return "gal";
      case "mi":
        return "km";
      case "km":
        return "mi";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }

  };

  this.spellOutUnit = function(unit) {
    let result = unit.toLowerCase();
    switch(result){
      case "gal":
        return "gallons";
      case "l":
        return "Liters";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      default:
        return undefined;
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result
    let unit = initUnit.toLowerCase();

    switch(unit){
      case "gal":
        result = initNum * galToL;
      case "l":
        result = initNum / galToL;
      case "mi":
        result = initNum * miToKm;
      case "km":
        result = initNum / miToKm;
      case "lbs":
        result = initNum * lbsToKg;
      case "kg":
        result = initNum / lbsToKg;
      default:
        result = undefined;
    }
    if(result){
      return parseFloat(result.toFixed(5));
    }
    return undefined;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
