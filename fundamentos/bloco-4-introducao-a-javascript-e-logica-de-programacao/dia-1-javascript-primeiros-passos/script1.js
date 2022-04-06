let peca = "Rainha";
peca = peca.toLowerCase();

switch (peca) {
    case "peão":
        console.log("Peão --> Uma casa à frente, captura diagonal.");
        break;

    case "rei":
        console.log("Rei --> Move uma casa para qualquer direção e não pode encostar em outro rei.");
        break;
    
    case "bispo":
        console.log("Bispo --> Move na diagonal.");
        break;
    
    case "rainha":
        console.log("Rainha --> Move para qualquer direção.");
        break;

    case "cavalo":
        console.log("Cavalo --> Move  3 casas em L.");
        break;
    
    case "torre":
        console.log("Torre --> Move na horizontal e vertical.");
        break;

    default:
        console.log("Peça inválida!")
}