alert("Hello Javascript");

var firstname = prompt("Enter first name");
console.log(firstname);

var officer = true

if (officer = true) {
    console.log("Document submitted");
} else {
    console.log("Not submitted");
}

var perc = 50 
if (perc >= 50 && perc < 60) {
    console.log("A");
}


var age = prompt("age")
var Studentcard = true

if (age > 18) {
    console.log("allow");
} else {
    if (Studentcard == true) {
        console.log("Allow on studentcard");
    } else {
        console.log("not allow");
    }
    console.log("dont allow");
}


 var eng = +prompt("eng marks")
 var maths = +prompt("maths marks")
 var urdu = +prompt("urdu marks")
 var isl = +prompt("isl marks")
 var comp = +prompt("comp marks")

 var obtained = (eng + maths + urdu + isl + comp)
 var total = 500

 var percentage = (obtained / total * 100)
console.log(percentage)

if (percentage > 80) {
    console.log("A+");
 } else if(percentage > 70) {
     console.log("B");
 } else if (percentage > 60) {
    console.log("C");
} else if (percentage > 50) {
     console.log("D");
 } else if (percentage > 40) {
   console.log("F");
}

var fruitsname = ["Orange", "Apple", "Grapes", "Mango", "Pomigranate"]
 console.log(fruitsname[4]);




