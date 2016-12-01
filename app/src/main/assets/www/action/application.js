var applicationMiseEnForme =
{
    lancer:function()
    {
        $(window).on('hashchange', $.proxy(this.naviguer, this));

        if(navigator.userAgent.match(/(iPhone|iPad|Android|BlackBerry)/))
        {
        //document).addEventListener("deviceready"
            $(document).on("deviceready",
                $.proxy(this.initialiserPourDonnees, this));
        }
        else
        {
            this.initialiserPourDonnees();
        }
    },

    initialiserPourDonnees:function()
    {
        this.joueurDAO = new JoueurDAO();
        this.naviguer();
    },
//$.proxy(this.afficherToutesLesParties, this
    naviguer:function()
    {
        var ancre = window.location.hash;

        if(!ancre)
        {
            //this.listeJoueursVue = this.joueurDAO.listerTousLesJoueurs();
            this.listeJoueursVue = new ListeJoueursVue(this.joueurDAO.listerTousLesJoueurs());
            this.listeJoueursVue.afficher();
        }
        else if (ancre.match(/^#pageFormulaire/))
        {
            this.formulaireVue = new FormulaireVue();
            this.formulaireVue.afficher();
        }
        else if(ancre.match(/^#pageDessin/))
        {
            this.dessinVue = new DessinVue();
            this.dessinVue.afficher();
        }
        else if(ancre.match(/^#pageResultat/))
        {
            this.resultatVue = new ResultatVue();
            this.resultatVue.afficher();
        }
    },

    afficherToutesLesParties:function(listeJoueurs)
    {
        //this.listeJoueursVue = new ListeJoueursVue(listeJoueurs);
        //this.listeJoueursVue.afficher();
    }
};

applicationMiseEnForme.lancer();