var JoueurDAO = function()
{
    this.listeJoueur = [];

    //this.listeDessin = [];

    this.initialiser = function()
    {
        this.baseDeDonnees = window.openDatabase("MiseEnForme", "1.0", "Mise en Forme", 200000);

        this.baseDeDonnees.transaction(
            function(operation)
            {
                var SQL_SELECT_CREATE_JOUEUR = "CREATE TABLE IF NOT EXISTS Joueur(idJOUEUR INTEGER PRIMARY KEY AUTOINCREMENT, nomJOUEUR VARCHAR(50))";
                //var SQL_SELECT_CREATE_DESSIN = "CREATE TABLE IF NOT EXISTS Dessin(idDESSIN INTEGER PRIMARY KEY AUTOINCREMENT, idJOUEUR INTEGER, nomDESSIN VARCHAR(50), nbFormesDESSIN INTEGER, cheminDESSIN VARCHAR(MAX))";

                operation.executeSql(SQL_SELECT_CREATE_JOUEUR);
                //operation.executeSql(SQL_SELECT_CREATE_DESSIN);
            },
            this.reagirErreur,
            this.reagirSucces
        );

    }

    /****************************/
    /*          JOUEUR          */
    /****************************/
    this.ajouterJoueur = function(joueur)
    {
        this.baseDeDonnees.transaction
        (
            function(operation)
            {
                var SQL_AJOUT_JOUEUR = "INSERT INTO Joueur (nomJOUEUR) VALUES (?)";
                var parametre = [joueur.nomJOUEUR];
                operation.executeSql(SQL_AJOUT_JOUEUR, parametre);
            },
            this.reagirErreur,
            this.reagirSucces
        );
    }

    this.listerTousLesJoueurs = function(finalisation)
    {
        var self = this;

        self.baseDeDonnees.transaction(
            function(operation)
            {
                var SQL_SELECTION_JOUEUR = "SELECT * FROM Joueur";
                operation.executeSql(SQL_SELECTION_JOUEUR, [],
                    function(operation, resultat)
                    {
                        self.listeJoueur = [];
                        for(var position = 0; position < resultat.rows.length; position++)
                        {
                            var enregistrementJoueur = resultat.rows.item(position);
                            var joueur = new Joueur (
                                                enregistrementJoueur.idJOUEUR,
                                                enregistrementJoueur.nomJOUEUR);
                            self.listeJoueur[self.listeJoueur.length] = joueur;
                        }
                    });
            },

            self.reagirErreur,

            function()
            {
                finalisation(self.listeJoueur);
            }
        );
    }



    this.modifierJoueur = function(joueur)
    {
        this.baseDeDonnees.transaction
            (
                function(operation)
                 {
                    var SQL_MODIFICATION = "UPDATE Joueur SET nomJOUEUR = ? WHERE idJOUEUR = ?";
                    var parametres = [joueur.nomJOUEUR, joueur.idJOUEUR];
                    operation.executeSql(SQL_MODIFICATION, parametres);
                 },
                 this.reagirErreur,
                 this.reagirSucces
            );
    };

    this.supprimerJoueur = function(idJOUEUR)
    {
        this.baseDeDonnees.transaction
        (
            function(operation)
             {
                var SQL_SUPPRESSION = "DELETE FROM Joueur WHERE idJOUEUR = ?";
                var parametres = [idJOUEUR];
                operation.executeSql(SQL_SUPPRESSION, parametres);
             },
             this.reagirErreur,
             this.reagirSucces
        );
    };

    this.trouverJoueurParId = function(idJOUEUR)
    {
        for(var index in this.listeJoueur)
        {
            if(this.listeJoueur[index].idJOUEUR == idJOUEUR)
            {
                return this.listeJoueur[index];
            }
        }
    };

    /****************************/
    /*          DESSIN          */
    /****************************/


    this.reagirErreur = function(erreur)
    {
        console.log("ERREUR SQL : " + erreur.code + ":" + erreur.message);
        //alert("ERREUR SQL : " + erreur.code + ":" + erreur.message);
    }

    this.reagirSucces = function()
    {
        console.log("SUCCES SQL");
        //alert("SUCCES SQL");
    }

    this.initialiser();
}