function showAbility(){

const abilityButton = document.getElementById("abilityButton");
const abilityInfo = document.getElementById("abilityInfo")

abilityButton.addEventListener("click", event => {

   if(abilityInfo.style.visibility==="hidden"){
    abilityInfo.style.visibility="visible";
    
   }
   else {
    abilityInfo.style.visibility="hidden";
   }
});
}