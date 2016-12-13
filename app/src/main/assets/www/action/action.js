var forme = new createjs.Shape();
var stage = new createjs.Stage("jeu");
var leX;
var leY;
var vitesseAngle;
var nbFormes = 0;
var timer;
var couleurs = ["HotPink", "Yellow", "DeepSkyBlue", "Red", "Lime", "Purple", "Orange", "White", "Gray"];
var couleurPrecedente;
var sacFormes;
var canvas = $("#jeu");

function init()
{
    alert("Initialisation");
    nbFormes = 0;
    couleurs = ["HotPink", "Yellow", "DeepSkyBlue", "Red", "Lime", "Purple", "Orange", "White", "Gray"];
    canvas = $("#jeu");
    alert(canvas);
    stage = new createjs.Stage("jeu");
    alert(stage);
    //Faire en sorte que le canvas prenne la taille de l'écran
    var largeur = window.innerWidth;
    var hauteur = window.innerHeight;
    canvas.width = largeur - 17;
    canvas.height = hauteur - 17;
    document.documentElement.style.overflow = 'hidden'; //empêche le 'scroll'
    leX = stage.canvas.width/2;
    leY = stage.canvas.height/2;

    //leX = canvas.width/2;
    //leY = canvas.height/2;
    
    //Remplir le canvas avec une grosse forme noire pour faire le fond; bravo william
    forme.graphics.beginFill("Black").drawRect(0, 0, largeur, hauteur);
    forme.regX = forme.regY = 5;
    stage.addChild(forme);
    stage.update();

    /**
    forme.clone(false);
    forme = new createjs.Shape();

    forme.graphics.beginFill("HotPink").drawPolyStar(5, 5, 10, 5, 0.6, -90);
    forme.regX = forme.regY = 5;
    stage.addChild(forme);
    stage.update();
    **/
    
    //Ajouter un texte temporaire qui indique: cliquer et maintenir pour créer
    //des formes, relacher pour arreter le grossissement, répéter.
    /*
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Cliquer et maintener", leX, leY/3);
    ctx.fillText("pour créer des formes,", leX, leY/2);
    ctx.fillText("relacher pour arreter", leX, leY/1.5);
    ctx.fillText("le grossissement,", leX, leY/1.2);
    ctx.fillText("répéter.", leX, leY);
    */

    remplirSac();
}

function grossir()
{
    forme.scaleX *= 1.1;
    forme.scaleY *= 1.1;
    forme.rotation += vitesseAngle;
    stage.update();
}

function nouvelleForme()
{
    forme.clone(false);

    forme = new createjs.Shape();

    //Obtenir une forme aléatoire
    var codeAngle = Math.round(Math.random() * 360);
    vitesseAngle = Math.round(Math.random() * 20);

    //Obtenir une couleur différente de la dernière
    var codeCouleur = Math.round(Math.random() * (couleurs.length-1));
    while(codeCouleur == couleurPrecedente)
    {
        codeCouleur = Math.round(Math.random() * (couleurs.length-1));
    }
    couleurPrecedente = codeCouleur;

    forme = pigerSac(codeCouleur);

    forme.x = leX;
    forme.y = leY;
    forme.rotation = codeAngle;

    stage.addChild(forme);
    nbFormes++;
    $("#debug").append("nb: " + nbFormes + ", ");

    stage.update();
}

function remplirSac()
{
    sacFormes = [0, 1, 2, 3, 4];
}

function pigerSac(codeCouleur)
{
    if(sacFormes.length == 0)
    {
        remplirSac();
    }
    
    var codeForme = Math.round(Math.random() * sacFormes.length);
    
    if(codeForme > 0)
        codeForme -= 1;
    
    var laForme = sacFormes[codeForme];
    
    //Retirer la forme du sac
    sacFormes.splice(codeForme, 1);
    $("#forme").append("laforme: " + laForme + ", ");
    
    if(laForme == 0) 
    {
        forme.graphics.beginFill(couleurs[codeCouleur]).drawCircle(0, 0, 10);
    }
    else if(laForme == 1) 
    {
        forme.graphics.beginFill(couleurs[codeCouleur]).drawPolyStar(5, 5, 10, 5, 0.6, -90);
        forme.regX = forme.regY = 5;
    }
    else if(laForme == 2) 
    {
        forme.graphics.beginFill(couleurs[codeCouleur]).drawRect(0, 0, 10, 10);
        forme.regX = forme.regY = 5;
    }
    else if(laForme == 3) 
    {
        forme.graphics.beginFill(couleurs[codeCouleur]).drawEllipse(0, 0, 10, 6);
        forme.regX = 5;
        forme.regY = 3;
    }
    else if(laForme == 4) 
    {
        forme.graphics.beginFill(couleurs[codeCouleur]).drawPolyStar(5, 5, 10, 12, 0.6, -90);
        forme.regX = forme.regY = 5;
    }
    
    return forme;
}

function enregistrer()
{
    //enregistrer l'image, l'ajouter à la bdd et changer de page
    
    
    if (canvas.getContext) 
    {
        //À réviser, surement rechanger l'extension du dossier pour png.
        var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href = image;
    }
}