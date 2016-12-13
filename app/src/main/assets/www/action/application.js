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
            this.listeJoueursVue = this.joueurDAO.listerTousLesJoueurs($.proxy(this.afficherToutesLesParties, this));
            /*this.listeJoueursVue = new ListeJoueursVue(this.joueurDAO.listerTousLesJoueurs());
            this.listeJoueursVue.afficher();*/
        }
        else if (ancre.match(/^#pageFormulaire/))
        {
            this.formulaireVue = new FormulaireVue();
            this.formulaireVue.afficher($.proxy(this.sauvegarderNouveauJoueur, this));
        }
        else if(ancre.match(/^#pageDessin/))
        {
            var trouvailles = ancre.match(/^#pageDessin\/([0-9]+)/);
            var idJoueur = trouvailles[1];

            var joueur = this.joueurDAO.trouverJoueurParId(idJoueur);

            this.dessinVue = new DessinVue(joueur);
            this.dessinVue.afficher();

            init();

            $("#jeu").mousedown(function()
            {
                nouvelleForme();
                timer = setInterval(grossir, 75);
            }).mouseup(function()
            {
                clearInterval(timer);
            });
        }
        else if(ancre.match(/^#pageModifier/))
        {
            var trouvailles = ancre.match(/^#pageModifier\/([0-9]+)/);
            var idJoueur = trouvailles[1];

            var joueur = this.joueurDAO.trouverJoueurParId(idJoueur);

            this.modifierVue = new ModifierVue(joueur);
            this.modifierVue.afficher($.proxy(this.sauvegarderJoueur, this));
        }
        else if(ancre.match(/^#pageResultat/))
        {
            var trouvailles = ancre.match(/^#pageResultat\/([0-9]+)/);
            var idJoueur = trouvailles[1];

            var joueur = this.joueurDAO.trouverJoueurParId(idJoueur);
            var dessin = this.joueurDAO.trouverDessinParIdJoueur(idJoueur);

            this.resultatVue = new ResultatVue(joueur, dessin);
            this.resultatVue.afficher();
        }
    },

    afficherToutesLesParties:function(listeJoueurs)
    {
        this.listeJoueursVue = new ListeJoueursVue(listeJoueurs);
        this.listeJoueursVue.afficher();
    },

    sauvegarderNouveauJoueur:function(joueur)
    {
        this.joueurDAO.ajouterJoueur(joueur);
    },

    sauvegarderJoueur:function(joueur)
    {
        this.joueurDAO.modifierJoueur(joueur);
    }
};

applicationMiseEnForme.lancer();