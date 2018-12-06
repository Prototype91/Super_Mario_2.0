module.exports = sword = {
    name: "Épée Magique",
    weight: 10,
    attaque: 10,
    charges: 15,
    bonus: 20,
    effect: function () {
        if (this.charges >= 5) {
            this.charges -= 2;
            grab_equipment();
        } else {
            console.log("Pas assez de charges dans l'objet.")
        }

    }
};