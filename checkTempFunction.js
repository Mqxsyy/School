console.log(checkTemp(0))
console.log(checkTemp(20))
console.log(checkTemp(21))
console.log(checkTemp(40))
console.log(checkTemp(41))
console.log(checkTemp(60))
  
// Function
function checkTemp(Temp)
{
  if (Temp <= 20)
    return -1
  
  else if (Temp <= 40)
     return 0
  
  else if (Temp <= 60)
     return 1
}
