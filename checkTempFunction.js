console.log(checkTemp(10))
   
function checkTemp(Temp)
{
  if (Temp < 20)
    return -1
  
  else if (Temp < 40)
     return 0
  
  else if (Temp < 60)
     return 1
}
