var FormulaireVue = function()
{
    this.afficher = function()
    {
        $("body").html(FormulaireVue.html);

        $("#formulaireNom").on("submit", $.proxy(this.allerAuDessin, this));
    }

    this.allerAuDessin = function()
    {
        var nom = $("#joueurNom").val();

        window.location.hash = "#pageDessin";
        event.preventDefault();
    }
}
FormulaireVue.html = $("#pageFormulaire").html();