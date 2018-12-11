let joueur = {
    x: 2,
    y: 7
};

function playerIsHere(posx, posy) {
    if (posx == joueur.x) {
        if (posy == joueur.y) {
            console.log(posx, posy);
            return true;
        } else {
            return false
        }
    } else {
        return false
    }
};

if (playerIsHere(2, 5) == false) {
    console.log("false")
}
