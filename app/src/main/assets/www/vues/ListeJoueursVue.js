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
            .replace("{NOM}", listeParties[cptParties].nom)
        }
        htmlListeParties.html(htmlEnConstruction);
    }
}

ListeJoueursVue.html = $("#pageListeParties").html();
ListeJoueursVue.htmlItem = $("#itemListeParties").html();