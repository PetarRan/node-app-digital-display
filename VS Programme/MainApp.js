var fs = require("fs");
var englishDictionaryString = fs.readFileSync("words.txt").toString(); //preko fajla ucitamo u string sve engleske reci iz recnika koji imamo u fajlu words.txt
allWords = englishDictionaryString.split("\n"); //koristimo funkciju split(Split a string into substrings using the specified separator and return them as an array.)
                                            //na svaki novi red pravimo novi substring koji se redom ubacuju u niz stringova.

                                           
//regular expression)(regex) - pogledajte na netu sta su regex-i, ova promenljiva forbiddeLetters se ponasa kao regex.

var forbiddenLetters = /[gkmpqvwxz]/;        //zabranjeni karakteri koji ne smeju da budu u recima koje testiramo--obrisi ovaj komentar
var longestAcceptableString = ""; //prazan string koji se ponasa kao pomocna promenljiva
var longestAcceptableStringsList = ""; //string koji se ponasa kao lista svih najduzih stringova koje nadjemo unutar foreach petlje

for(var testWord of allWords){ //foreach petlja gde u promenljivu testWord ulazi redom iz niza svaki substring i proveravamo sledece uslove
    if(testWord.length <= longestAcceptableString.length){ //potreban nam je najduzi substring, dakle koristimo maxlenght algoritam u tu svrhu.
        continue; //ukoliko nije duza od trenutne reci, prelazi na sledeci substring. Ukoliko jeste, proveramo sledeci uslov->
    }
    if(testWord.match(forbiddenLetters)) { continue; } //koristimo match() funkciju da proverimo pomocu regex-a da li u nasoj reci ima nekih zabranjenih karaktera.

    longestAcceptableString = testWord;//kada nadjemo najduzu rec, stavljamo je u longestAcceptableString(jedna od najduzih)
}

for(var testWord of allWords){
    if(testWord.length == longestAcceptableString.length){ //kako bismo nasli i ostale najduze stringove, u Listu stavljamo sve ostale stringove iz fajla koji smo ucitali u string, 
        longestAcceptableStringsList += testWord + "\n"; //i trazimo ostale stringove te duzine i redom ubacujemo u listu.
    }
}

console.log(longestAcceptableStringsList); //print