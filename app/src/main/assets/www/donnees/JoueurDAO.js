var JoueurDAO = function()
{

    /*this.initialiser() = function()
    {
        this.baseDeDonnees = window.openDatabase("MiseEnForme", "1.0", "Mise en Forme", 200000);

        this.baseDeDonnees.transaction(
            function(operation)
            {
                var SQL_SELECT_CREATE_JOUEUR = "CREATE TABLE IF NOT EXISTS Joueur(idJOUEUR INTEGER PRIMARY KEY AUTOINCREMENT, nomJOUEUR VARCHAR(50))";
                var SQL_SELECT_CREATE_DESSIN = "CREATE TABLE IF NOT EXISTS Dessin(idDESSIN INTEGER PRIMARY KEY AUTOINCREMENT, idJOUEUR VARCHAR(50), nomDESSIN VARCHAR(50), nbFormesDESSIN INTEGER, cheminDESSIN VARCHAR(MAX))";

                operation.executeSql(SQL_SELECT_CREATE_JOUEUR);
                operation.executeSql(SQL_SELECT_CREATE_DESSIN);
            },
            this.reagirErreur,
            this.reagirSucces
        );

    }*/

    this.listeJoueur = [
        {"idJOUEUR":1, "nomJOUEUR":"Angeline"},
        {"idJOUEUR":2, "nomJOUEUR":"William"},
        {"idJOUEUR":3, "nomJOUEUR":"Cyrielle"}
    ];

    this.listeDessin = [
        {"idDESSIN":1, "idJOUEUR":1, "nomDESSIN":"z", "nbForme":9, "cheminDESSIN":""},
        {"idDESSIN":2, "idJOUEUR":3, "nomDESSIN":"a", "nbForme":8, "cheminDESSIN":""},
        {"idDESSIN":3, "idJOUEUR":2, "nomDESSIN":"b", "nbForme":6, "cheminDESSIN":""},
        {"idDESSIN":4, "idJOUEUR":1, "nomDESSIN":"c", "nbForme":7, "cheminDESSIN":""},
        {"idDESSIN":5, "idJOUEUR":3, "nomDESSIN":"d", "nbForme":5, "cheminDESSIN":""},
        {"idDESSIN":6, "idJOUEUR":2, "nomDESSIN":"e", "nbForme":4, "cheminDESSIN":""},
    ];

    this.ajouterJoueur = function(joueur)
    {
        this.listeJoueur[this.listeJoueur.length] =
        {
            "idJOUEUR":this.listeJoueur.length + 1,
            "nomJOUEUR":this.joueur.nomJOUEUR
        };
    }

    this.listerTousLesJoueurs = function()
    {
        var self = this;

        return self.listeJoueur;
    };

    this.modifierJoueur = function(joueur)
    {
        for(var index in this.listeJoueur)
        {
            if(this.listeJoueur[index].idJOUEUR == idJOUEUR)
            {
                listeJoueur[index].nomJOUEUR = joueur.nomJOUEUR;
            }
        }
    };

    this.supprimerJoueur = function(joueur)
    {
        for(var index in this.listeJoueur)
            {
                if(this.listeJoueur[index].idJOUEUR == idJOUEUR)
                {
                    listeJoueur.splice(index, 1);
                }
            }
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
}