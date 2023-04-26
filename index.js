// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
   if (someValue > 42) {
     return (someValue - 42) 
   } else {
      return (42 - someValue)
   }
}

function distanceFromHqInFeet(someValue) {
   return (distanceFromHqInBlocks(someValue) * 264)
}

function distanceTravelledInFeet(start, destination) {
   if (destination > start) {
      return ((destination - start) * 264 )
   } else {
   return ((start - destination) * 264 )
   }
}


function calculatesFarePrice(start, destination) {
   if ( distanceTravelledInFeet(start,destination) <=400) {
      return 0;
   } else if (distanceTravelledInFeet(start,destination) < 2000) {
      return ((distanceTravelledInFeet(start,destination) - 400)*.02 )
   } else if (distanceTravelledInFeet(start,destination) <2500) {
      return (25)
   } else {
      return ("cannot travel that far");
   }
   
}