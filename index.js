
let homeScoreEl = document.getElementById("h_score")
let guestScoreEl = document.getElementById("g_score")
let leadingEl = document.getElementById("leadingWho")
let homeScore = 0
let guestScore = 0


function onePointAdd_h(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    
    if (homeScore>guestScore){
        leadingEl.textContent = "Leading right now is home: "+ homeScore
    }
    else{
       leadingEl.textContent = "Leading right now is guest: "+ guestScore 
    }
    
}
function twoPointAdd_h(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    
    if (homeScore>guestScore){
        leadingEl.textContent = "Leading right now is home: "+ homeScore
    }
    else{
       leadingEl.textContent = "Leading right now is guest: "+ guestScore 
    }
}
function threePointAdd_h(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    
    if (homeScore>guestScore){
        leadingEl.textContent = "Leading right now is home: "+ homeScore
    }
    else{
       leadingEl.textContent = "Leading right now is guest: "+ guestScore 
    }
}

function onePointAdd_g(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    
    if (homeScore>guestScore){
        leadingEl.textContent = "Leading right now is home: "+ homeScore
    }
    else{
       leadingEl.textContent = "Leading right now is guest: "+ guestScore 
    }
}
function twoPointAdd_g(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    
    if (homeScore>guestScore){
        leadingEl.textContent = "Leading right now is home: "+ homeScore
    }
    else{
       leadingEl.textContent = "Leading right now is guest: "+ guestScore 
    }
}
function threePointAdd_g(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    
    if (homeScore>guestScore){
        leadingEl.textContent = "Leading right now is home: "+ homeScore
    }
    else{
       leadingEl.textContent = "Leading right now is guest: "+ guestScore 
    }
}

function new_game(){
        
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0

    guestScore = 0
    homeScore = 0
}

// function leadingWho(){
//     if (homeScore>guestScore){
//         leadingEl.textContent = "Leading right now is: "+ homeScore
//     }
//     else{
//        leadingEl.textContent = "Leading right now is: "+ guestScore 
//     }
// }