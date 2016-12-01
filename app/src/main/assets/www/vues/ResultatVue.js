var ResultatVue = function()
{
    this.afficher = function()
    {
        $("body").html(ResultatVue.html);

        var htmlEnConstruction = ResultatVue.html
            .replace("{NOM_JOUEUR}", this.joueur.nomJOUEUR)
            /*.replace("{NOMBRE_FORME}", this.dessin.nbFormeDESSIN)
            .replace("{NOM_DESSIN", this.dessin.nomDESSIN);*/
        //.html(htmlEnConstruction);
    }
}
ResultatVue.html = $("#pageResultat").html();