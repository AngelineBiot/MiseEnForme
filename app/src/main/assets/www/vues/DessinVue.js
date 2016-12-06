var DessinVue = function(joueur)
{
    this.afficher = function()
    {
        var htmlEnConstruction = DessinVue.html
            .replace("{NOM_JOUEUR}", joueur.nomJOUEUR)
            .replace("{ID_JOUEUR}", joueur.idJOUEUR);

        $("body").html(htmlEnConstruction);

        $("#formulaireDessin").on("submit", $.proxy(this.allerAuResultat, this));
    }

    /*this.allerAuResultat = function()
    {
        var nomJoueur = $("#formulaireDessin").val();

        window.location.hash = "#pageResultat/{ID_JOUEUR}";
        event.preventDefault();
    }*/
}

DessinVue.html = $("#pageDessin").html();