function ConvertHandler() {

  function splitNumsAndChars(input){
    let num = input.match(/[.\d\/]+/g) || ["1"];
    let str = input.match(/[\w]+/g)[0];
    return [num[0], str];
  }

  function checkDivision(input){
    let nums = input.split("/");
    nums.length > 2 ? false : nums;
  }
  
  this.getNum = function(input) {
    let result = splitNumsAndChars(input)[0];
    let nums = checkDivision(result);
    !nums ? undefined : parseFloat(nums[0])/parseFloat(nums[1]);
  };
  
  this.getUnit = function(input) {
    let result = splitNumsAndChars(input)[1].toLowerCase();
    switch(result){
      case "gal":
        return "gal";
      case "l":
        return "L";
      case "mi":
        return "mi";
      case "km":
        return "km";
      case "lbs":
        return "lbs";
      case "kg":
        return "kg";
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
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
