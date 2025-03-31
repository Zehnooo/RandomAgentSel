function showAbility(abilityId) {
   const abilityInfo = document.getElementById(abilityId);

   if (abilityInfo.style.display === "block") {
       abilityInfo.style.display = "none";
   } else {
       abilityInfo.style.display = "block";
   }
}

function agentSelect() {
    let valAgents = [
      "Omen", "Brimstone", "Viper", "Sage", "Phoenix", "Sova",
      "Cypher", "Raze", "Reyna", "Jett", "Killjoy", "Breach",
      "Skye", "Yoru", "Astra", "Neon", "KAYO", "Chamber",
      "Fade", "Harbor", "Gekko", "Tejo", "Iso", "Vyse",
      "Waylay", "Deadlock"
    ];
  
    // Get names of agents that are selected (class toggled)
    const selectedAgents = $('.agent-card.agent-head-selected')
      .map(function () {
        return $(this).attr('alt'); // assuming alt matches name
      }).get();
  
    // Filter valAgents to exclude selected ones
    const availableAgents = valAgents.filter(agent => !selectedAgents.includes(agent));
  
    if (availableAgents.length === 0) {
      alert("No agents available to select from.");
      return;
    }
  
    const randomAgent = Math.floor(Math.random() * availableAgents.length);
    const agent = availableAgents[randomAgent];
  
    console.log("Selected:", agent);
    window.open(agent + ".html");
    window.close();
  }
  


  $(document).ready(function () {
    $('.agent-card').click(function () {
      const $img = $(this);
      const $label = $img.closest('.agentgroup').find('.agentname');
  
      $img.toggleClass('agent-head-selected');
      $label.toggleClass('agent-name-selected');
  
      console.log('Toggled:', $img.attr('alt'));
    });
  });
  
  

