// Code your solution here
function findMatching(arr,str){
    const found = arr.filter(element => {
        console.log()
      return element === str || element === str.toLowerCase()
    })
    return found
}
function fuzzyMatch(arr , str){
      
  const found  =  arr.filter(data => {
    
      if(data.substring(0, 2)=== str){
         return data.toLowerCase().indexOf(str.toLowerCase()) !== -1
      }
      
    
 })
 return found
}
function matchName(arr,str){
  const match = arr.filter(driver => {
    return driver.name.toLowerCase().indexOf(str.toLowerCase()) !== -1
  });
  return match
  }
  