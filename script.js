
function randomSelect(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateMob() {

  const attributes = {
    "personality": ["prefer to attack isolated players", "prefer to attack players in groups", "prefer to avoid players", "greedy for loot", "likes to play with player's minds" ],
    "appearance": ["demon like", "human like", "formless", "animal like"],
    "aggro": ["relatively passive", "always aggressive"],
    "sound sensitivity": ["non", "very low", "low", "medium", "high", "very high"],
    "sensitivity to light": ["non", "very low", "low", "medium", "high", "very high"],
    "low sanity bonus": ["increase movespeed", "throws debuffs on players", "increases detection range", "unlock new attack patterns", "personality changes", "begins to protect the main quest object", "starts to protect the nearest exit"],
    "clue 1": ["sound of footsteps", "sound of things falling", "laughs", "screams", "flashing lights", "lights breaking",  "black substance", "temperature", "confusion", "evidence in mirror", "EMF", "comms distortion"],
    "clue 2": ["sound of footsteps", "sound of things falling", "laughs", "screams", "flashing lights", "lights breaking",  "black substance", "temperature", "confusion", "evidence in mirror", "EMF", "comms distortion"],
    "killable": ["yes", "no"], 
    "damage": ["very low", "low", "medium", "high", "very high"],
    "movespeed" : ["slower than the player", "same as the player", "faster than the player"],
  };

  const selectedAttribute = {};

  for (const attribute in attributes) {
    selectedAttribute[attribute] = randomSelect(attributes[attribute]);
  }

  let htmlResult = "";
  for (const attribute in selectedAttribute) {
    htmlResult += `<p><strong>${attribute}:</strong> ${selectedAttribute[attribute]}</p>`;
  }

  const domResult = document.getElementById("generated_mob");

  domResult.innerHTML = htmlResult;
}