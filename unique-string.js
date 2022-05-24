function makeUnique(str) {
    let uniqueString = ""
  
    for (let i = 0; i < str.length; i++) {
      if (uniqueString.includes(str[i])) {
      } else {
        uniqueString += str[i]
      }
    }
    return uniqueString
  }

console.log(makeUnique('helloworld'), "should return 'helowrd'");
console.log(makeUnique('iwanttoclimbamountain'), "should return 'iwantoclmbu'")