
//ITERATION 3 & extension


function fizzBuzz(id1,id2,id3){
let num = id1.value;
let firstWord = id2.value;
let secondWord = id3.value;

for(let i = 1; i < num; i++){

if(i%3 == 0 && i%5 !== 0){
    document.write(firstWord+"<br>");
}
else if(i%5 == 0  && i%3 !== 0){
	document.write(secondWord+"<br>");
}
else if(i%3 == 0 && i%5 == 0){
	document.write(firstWord+ " " +"<br>");
}
else{
	document.write( i + "<br>");
}

}

}


