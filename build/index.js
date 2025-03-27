function showAbility(abilityId) {
   const abilityInfo = document.getElementById(abilityId);

   if (abilityInfo.style.display === "block") {
       abilityInfo.style.display = "none";
   } else {
       abilityInfo.style.display = "block";
   }
}
