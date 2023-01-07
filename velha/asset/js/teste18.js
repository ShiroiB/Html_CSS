var jogo=[];
var tabuleiro=[];
var quemEh=0;
var verifica;
var rodando=true;
var nivel=1;
var jogadaCpu=1;
var quemComeca=1;
var nume=1;

function cpuJoga(){
    if(rodando){
        var i,j;
        if(nivel==1){
            do{
                i=Math.round(Math.random()*2);
                j=Math.round(Math.random()*2);

            }while(jogo[i][j]!="");
            jogo[i][j]="O";
        }
        else if(nivel==2){
           //
        }
        verifica=winners();
        if(verifica!=""){
            alert(verifica+ " Venceu");
            rodando=false;
            nume=1;
        }
        atualizaTabuleiro();
        quemEh=0;
    }
}
function winners(){
    var i,j;
    for( i=0;i<3;i++){
        if((jogo[i][0]==jogo[i][1]) && (jogo[i][1]==jogo[i][2])){
                return jogo[i][0];
            }   
    }
    
    for( j=0;j<3;j++){
            if((jogo[0][j]==jogo[1][j]) && (jogo[1][j]==jogo[2][j])){
                return jogo[0][j];
        }
    }
    if((jogo[0][0]==jogo[1][1]) && (jogo[1][1]==jogo[2][2])){
        return jogo[0][0];

    }
    if((jogo[0][2]==jogo[1][1]) && (jogo[1][1]==jogo[2][0])){
        return jogo[0][2];
    }
    return "";
}


function jogar(po){
    if((rodando)&&(quemEh==0)){
    switch(po){
        case 1: if(jogo[0][0]==""){
                jogo[0][0]="X";
                quemEh=1;
                console.log("oi")
            }
        break;
        case 2: if(jogo[0][1]==""){
                jogo[0][1]="X";
                quemEh=1;


            }
        break;
        case 3: if(jogo[0][2]==""){
                jogo[0][2]="X";
                quemEh=1;


            }
        break;
        case 4: if(jogo[1][0]==""){
                jogo[1][0]="X";
                quemEh=1;


            }
        break;
        case 5: if(jogo[1][1]==""){
                jogo[1][1]="X";
                quemEh=1;


            }
        break;
        case 6: if(jogo[1][2]==""){
                jogo[1][2]="X";
                quemEh=1;


            }
        break;
        case 7: if(jogo[2][0]==""){
                jogo[2][0]="X";
                quemEh=1;
            }
        break;
        case 8: if(jogo[2][1]==""){
                jogo[2][1]="X";
                quemEh=1;
            }
        break;
        default: if(jogo[2][2]==""){
                jogo[2][2]="X";
                quemEh=1;
            }
        break;
        }
    if(quemEh==1){
        atualizaTabuleiro();
        verifica=winners();
        if(verifica!=""){
            alert(verifica+ " Venceu");
             rodando=false;
             console.log("pou "+verifica)
             nume=1;
        }
        cpuJoga();
      }
         
   }        
}

function atualizaTabuleiro(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            console.log(jogo[i][j]);
            if(jogo[i][j]=="X"){
                tabuleiro[i][j].innerHTML="X";
                tabuleiro[i][j].style.cursor="default";
            } else if(jogo[i][j]=="O"){
                tabuleiro[i][j].innerHTML="O";
                tabuleiro[i][j].style.cursor="default";
            }else{
                tabuleiro[i][j].innerHTML="";
                tabuleiro[i][j].style.cursor="pointer";
            }
            
        }
      
    }
    

}
function inicia(){
    rodando=true;
    jogadaCpu=1;
    jogo=[
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    tabuleiro=[
        [document.getElementById("p1"),document.getElementById("p2"),document.getElementById("p3")],
        [ document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6")],
        [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if(quemComeca==1){
        quemComeca=0;
        quemEh=quemComeca;
        document.getElementById("QuemC").innerHTML="jogador começa "
    }else{
          quemComeca=1;
        quemEh=quemComeca;
        cpuJoga();
        document.getElementById("QuemC").innerHTML="CPU começa "
    }


}
window.addEventListener("load", inicia);

