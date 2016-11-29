var JoueurDAO = function()
{
    this.listeJoueur = [
        {"id":1, "nom":"Angeline", "nbForme":10},
        {"id":2, "nom":"William", "nbForme":8},
        {"id":3, "nom":"Cyrielle", "nbForme":5}
    ];

    this.listerTousLesJoueurs = function()
    {
        var self = this;

        return self.listeJoueur;
    }
}