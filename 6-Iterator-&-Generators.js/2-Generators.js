// Genrators =>  Function ka controle pora ka pora hamare hatho me hota hai like a mai job bi
// statement print karvana chaho vo mai krvaskta hu jo nhi chata vo nhi krvaskta Genrators ki
// help se function generators kai jitni bi statement likte ho sab pe hamara controle hoga generators
// function ki help se function key word kai just age ya function name se just piche apn
// start (*) ka use mai krte hai * isse generators function create hoga

function* genratfun() {
  yield "one";
  yield "two";
  console.log("hello");
  yield "thiree";
  yield "four";
  console.log("five");
}



function* myGenerator(){
    yield 'A';
    yield 'B';
    yield 'C';
}

const gen = myGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
