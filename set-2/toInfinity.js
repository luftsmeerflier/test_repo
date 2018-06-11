const beyond = function (num) {
   switch (true) {
       case (num === Infinity || num === -Infinity) :
        console.log('And beyond') 
       break
       case (num > 0 && typeof num === 'number') :
       console.log('to infinity')
       break
       case (num < 0 && typeof num === 'number') :
       console.log('to negative infinity')
       break
       case (num === 0) :
       console.log('staying home')
       break
       default :
       console.log('please try again')
   }
}

console.log(beyond(8/0))
console.log(beyond(5))
console.log(beyond(-3))
console.log(beyond(0))
console.log(beyond())