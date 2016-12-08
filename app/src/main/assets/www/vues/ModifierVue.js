var ModifierVue = function(joueur)
{
    this.afficher = function(actionModifierJoueur)
    {
        var htmlEnConstruction = ModifierVue.html
            .replace("{NOM_JOUEUR}", joueur.nomJOUEUR)
            .replace("{ID_JOUEUR}", joueur.idJOUEUR);
            /*.replace("{NOMBRE_FORME}", this.dessin.nbFormesDESSIN)
            .replace("{NOM_DESSIN", this.dessin.nomDESSIN);*/

        $("body").html(htmlEnConstruction);
        $("#formulaireModifier").on("submit", $.proxy(this.modifierJoueur, this));

        this.actionModifierJoueur = actionModifierJoueur;
    }

    this.modifierJoueur = function()
    {
        var nomJoueur = $("#nomJoueur").val();
        var idJoueur= $("#idJoueur").val();

        var joueur = new Joueur(idJoueur, nomJoueur);

        this.actionModifierJoueur(joueur);
        window.location.hash = "";

        e.preventDefault();
    }
}
ModifierVue.html = $("#pageModifier").html();