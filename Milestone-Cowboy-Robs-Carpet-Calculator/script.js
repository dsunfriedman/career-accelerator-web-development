/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
 
  let roomSize1 = getRoomWidth(1) * getRoomLength(1) * 1.1
  let roomSize2 = getRoomWidth(2) * getRoomLength(2) * 1.1
  let totalRoomSize = roomSize1 + roomSize2
  showResult (totalRoomSize)
  console.log("click");

}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations: 
  getRoomWidth consists of the following steps: first, they call another function called validateRoomNumber(), which checks if the input to these functions is valid and returns various messages to the console if it is not (such as if it is a string, or if it is a number other than 1 or 2). If there is not a valid room number, getRoomWidth returns 0. Otherwise, getRoomWidth checks if we are in "test mode" via the Boolean "_TESTING"; if we are, it returns mock values for the room width based on which room was chosen. Otherwise, it finds the id of the box from which we want to get the width, gets the corresponding element to that id (i.e. whatever value the user has typed in that box), and returns that element formatted as a number rather than a string.

  getRoomLength works exactly the same as getRoomWidth, only with certain variable names changed.


	2. Custom styles added: 


*/