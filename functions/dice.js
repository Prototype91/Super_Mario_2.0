//Fonction lancer le dé
function roll_dice(nb_faces) {
  let result = Math.floor(Math.random() * (nb_faces - 1)) + 1;
  return result
};

exports.roll_dice = roll_dice;