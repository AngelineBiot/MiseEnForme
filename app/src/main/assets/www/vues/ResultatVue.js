var ResultatVue = function(joueur, dessin)
{
    this.afficher = function()
    {
        //$("body").html(ResultatVue.html);

        var htmlEnConstruction = ResultatVue.html
            .replace("{NOM_JOUEUR}", joueur.nomJOUEUR)
            .replace("{ID_JOUEUR}", joueur.idJOUEUR)
            .replace("{NOMBRE_FORMES}", dessin.nbFormesDESSIN)
            .replace("{CHEMIN_DESSIN}", dessin.cheminDESSIN);
        $("body").html(htmlEnConstruction);
    }
}
ResultatVue.html = $("#pageResultat").html();