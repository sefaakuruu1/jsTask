
var array = [1,4,5,7,9,10,15,18,25,34,45,52,70];
//listedeki 30dan buyuk sayıları bulan algoritma
for(i=0;i<array.length;i++){
    if(array[i]>30){
        console.log(array[i]);
    }
}


console.log(" ");
//arraydaki çift sayıları bulan algoritma
for(i=0;i<array.length;i++){
    if(array[i]%2==0){
        console.log(array[i]);
    }
}


console.log(" ");
// is a prime number?


var x=15;

for(a=2;a<x;a++){
    if(x%a!=0){
        console.log(`${x} is a prime number`);
    }
}

console.log(' ')

//arraydeki prime sayıları bulan algoritma
var list = [2,6,7,10,11,18,23,29];
var primeList = [];
for (var b = 0; b < list.length; b++) {
  var isPrime = true;
  for (var c = 2; c < list[b]; c++) {
    if (list[b] % c == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primeList.push(list[b]);
  }
}
console.log(primeList);