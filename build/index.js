function showAbility(){
const abilityImg = document.getElementById("abilityImg")
const abilityButton = document.getElementById("abilityButton");
const abilityInfo = document.getElementById("abilityInfo")

abilityButton.addEventListener("click", event => {

   if(abilityInfo.style.visibility==="hidden"){
    abilityInfo.style.visibility="visible";
    abilityButton.style.opacity=100;
   }
   else {
    abilityInfo.style.visibility="hidden";
   }
});
}