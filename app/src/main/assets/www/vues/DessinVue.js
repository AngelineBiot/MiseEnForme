var DessinVue = function()
{
    this.afficher = function(joueur)
    {
        $("body").html(DessinVue.html);

        var htmlEnConstruction = DessinVue.html.replace("{NOM_JOUEUR}", joueur.nomJOUEUR);

        $("#formulaireDessin").on("submit", $.proxy(this.allerAuResultat, this));
    }

    this.allerAuResultat = function()
    {
        var nom = $("#formulaireDessin").val();

        window.location.hash = "#pageResultat";
        event.preventDefault();

        alert("J'ai fini !");
    }
}
DessinVue.html = $("#pageDessin").html();