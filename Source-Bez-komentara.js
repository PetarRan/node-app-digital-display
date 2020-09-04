
       var fs = require("fs");
      var englishDictionaryString = fs.readFileSync("words.txt").toString(); 
      allWords = englishDictionaryString.split("\n"); 

      var forbiddenLetters = /[gkmpqvwxz]/;       
      var longestAcceptableString = ""; 
      var longestAcceptableStringsList = ""; 

      for(var testWord of allWords){ 
        if(testWord.length <= longestAcceptableString.length){ continue; }
        if(testWord.match(forbiddenLetters)) { continue; }

        longestAcceptableString = testWord;
      }

      for(var testWord of allWords){
        if(testWord.length == longestAcceptableString.length){  
            longestAcceptableStringsList += testWord + "\n"; 
        }
      }

      console.log("Longest acceptable words found contain " + (longestAcceptableString.length-1) + " characters.\n") 
      console.log(longestAcceptableStringsList); 
