var Dessin = function(idDESSIN, idJOUEUR, nbFormesDESSIN, cheminDESSIN)
{
    this.construire = function()
    {
        this.idDESSIN = idDESSIN;
        this.idJOUEUR = idJOUEUR;
        this.nbFormesDESSIN = nbFormesDESSIN;
        this.cheminDESSIN = cheminDESSIN;
    }

    this.construire();
}