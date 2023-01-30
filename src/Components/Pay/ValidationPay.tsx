 const testLetters = /[^\D]/g;
const testNumbers = /[^\d]/g;
const testDefault = /./g;

function checkInput(e: React.ChangeEvent<any>, regExp: RegExp,maxLength:number) {
  e.target.value = e.target.value.replace(regExp, "");
  if (e.target.value.length > maxLength) {
    e.target.value = e.target.value.slice(0, maxLength);
  }

  if (regExp === testNumbers) {
    e.target.value =
      e.target.value !== "" ? e.target.value.match(/.{1,4}/g).join` ` : ``;
  }
}

function checkAmount(e:React.ChangeEvent<any>,maxAmount:number) {
  if (e.target.value > maxAmount) {
    e.target.value = maxAmount
  }
  if (e.target.value <= 0) {
    e.target.value = null
  }
}

export {testNumbers,testLetters,checkInput,checkAmount,testDefault};