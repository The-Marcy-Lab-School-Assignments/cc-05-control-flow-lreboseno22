//1
function absoluteValue(num){
  if (typeof num === "number" && num > 0) {
      return num;
  } else if (typeof num === "number" && num < 0) {
      num *= -1;
      return num;
  } else {
      return null;
  }
}

console.log(absoluteValue(-5));

function multiplesOfFourOrSix() {
  let array = [];
    for (let i = 1; i <= 100; i++) {
      if (i % 4 === 0 && i % 6 === 0){
          array.push(`${i}`);
        }
    }
    return array;
}

console.log(multiplesOfFourOrSix());
