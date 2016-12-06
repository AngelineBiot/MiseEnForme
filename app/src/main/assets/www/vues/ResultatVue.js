var ResultatVue = function(joueur)
{
    this.afficher = function()
    {
        //$("body").html(ResultatVue.html);

        var htmlEnConstruction = ResultatVue.html
            .replace("{NOM_JOUEUR}", joueur.nomJOUEUR)
            .replace("ID_JOUEUR", joueur.idJOUEUR);
            /*.replace("{NOMBRE_FORME}", this.dessin.nbFormeDESSIN)
            .replace("{NOM_DESSIN", this.dessin.nomDESSIN);*/
        $("body").html(htmlEnConstruction);
    }
}
ResultatVue.html = $("#pageResultat").html();