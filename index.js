let runs = document.getElementById("score");
let teamName = document.getElementById("team-name");
let wkt = document.getElementById("wicket");
let lastInn = document.getElementById("last-innings")
let wicket = 0;
let score =0;

function plusOne(){
    score += 1;
    runs.textContent = score;
}
function plusTwo(){
    score += 2;
    runs.textContent = score;
}
function plusThree(){
    score += 3;
    runs.textContent = score;
}
function plusFour(){
    score += 4;
    runs.textContent = score;
}
function plusSix(){
    score += 6;
    runs.textContent = score;
}
function plusOneWkt(){
    wicket ++;
    wkt.textContent = wicket;
}
function changeTeam(){
    let cnt = score + " - " + wicket;
    lastInn.textContent = cnt;
    score =0;
    wicket = 0;
    teamName.textContent = "TEAM B";
    runs.textContent = score;
    wkt.textContent = wicket;
    

}

