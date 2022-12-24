let homeScoreEl = document.getElementById("home_score")
let guestScoreEl = document.getElementById("guest_score")  

//------------------------Home_score--------------------------------//

function addOne() {
   homeScoreEl.innerText = Number(homeScoreEl.textContent) + 1
   
}

function addTwo() {
    homeScoreEl.innerText = Number(homeScoreEl.textContent) + 2
    
 }

 function addThree() {
    homeScoreEl.innerText = Number(homeScoreEl.textContent) + 3
    
 }

//------------------------Guest_Score--------------------------------//

 function addOneGuest() {
    guestScoreEl.innerText = Number(guestScoreEl.textContent) + 1
    
 }
 
 function addTwoGuest() {
     guestScoreEl.innerText = Number(guestScoreEl.textContent) + 2
     
  }
 
  function addThreeGuest() {
     guestScoreEl.innerText = Number(guestScoreEl.textContent) + 3
     
  }