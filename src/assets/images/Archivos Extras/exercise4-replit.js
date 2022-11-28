function camelCase(string) {
    // return string.replace(/([A-Z])/g, " $1")
   let results = "";
    for (let i = 0; i < string.length; i++){
        const letter = string[i]
        const isUpper = letter === letter.toUpperCase();
        if (isUpper){
            results += " "
        }
      results += letter
    }
    return results;
  }
  
  console.log(camelCase("camelCase"))