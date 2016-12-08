var ListeJoueursVue = function(listeParties)
{
    this.afficher = function()
    {
        $("body").html(ListeJoueursVue.html);

        var htmlListeParties = $("#listeParties");
        var htmlEnConstruction = "";

        for(var cptParties in listeParties)
        {
            htmlEnConstruction += ListeJoueursVue.htmlItem
            .replace("{ID_JOUEUR}", listeParties[cptParties].idJOUEUR)
            .replace("{NOM_JOUEUR}", listeParties[cptParties].nomJOUEUR)
            .replace("{ID_JOUEUR}", listeParties[cptParties].idJOUEUR)
        }
        htmlListeParties.html(htmlEnConstruction);
    }
}

ListeJoueursVue.html = $("#pageListeParties").html();
ListeJoueursVue.htmlItem = $("#itemListeParties").html();