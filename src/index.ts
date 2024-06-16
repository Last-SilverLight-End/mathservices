//for the testing
function add(a: number,b:number){
  return a+b;
}
function sub(a: number,b:number){
  return a-b;
}
function mul(a: number,b:number){
  return a*b;
}
function div(a: number,b:number){
  return a / b;
}
function mod(a: number,b:number){
  return a % b;
}
function pow(a: number,b:number){
  return Math.pow(a,b);
}
function sqrt(a: number){
  return Math.sqrt(a);
}

module.exports = {
  add,
  sub,
  mul,
  div,
  mod,
  pow,
  sqrt,
};