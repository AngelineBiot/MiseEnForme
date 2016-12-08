var DessinVue = function(joueur)
{
    this.afficher = function()
    {
        var htmlEnConstruction = DessinVue.html
            .replace("{NOM_JOUEUR}", joueur.nomJOUEUR)
            .replace("{ID_JOUEUR}", joueur.idJOUEUR);

        $("body").html(htmlEnConstruction);

        $("#boutonDessin").on("click", $.proxy(this.allerAuResultat, this));
    }

    this.allerAuResultat = function()
    {

        alert("CLICK");

        window.location.hash = "#pageResultat/"+joueur.idJOUEUR;
        event.preventDefault();
    }
}

DessinVue.html = $("#pageDessin").html();