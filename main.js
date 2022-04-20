const num =[1,2,3,4,5]
function add(a,b,c,d,e){
  return a+b+c+d+e
}
const num2 = add(...num)
console.log(num2)