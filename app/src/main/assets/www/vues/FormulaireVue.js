var FormulaireVue = function()
{
    this.afficher = function(actionAjouterJoueur)
    {
        $("body").html(FormulaireVue.html);

        //$("body").html(htmlEnConstruction);
        $("#formulaireNom").on("submit", $.proxy(this.ajouterJoueur, this));

        this.actionAjouterJoueur = actionAjouterJoueur;
    }

    this.ajouterJoueur = function()
    {
        var nomJOUEUR = $("#nomJoueur").val();

        var joueur = new Joueur(idJOUEUR = null, nomJOUEUR);

        this.actionAjouterJoueur(joueur);
        window.location.hash = "";

        e.preventDefault();
    }

    /*this.allerAuDessin = function()
    {
        var nom = $("#joueurNom").val();

        window.location.hash = "#pageDessin";
        event.preventDefault();
    }*/
}
FormulaireVue.html = $("#pageFormulaire").html();