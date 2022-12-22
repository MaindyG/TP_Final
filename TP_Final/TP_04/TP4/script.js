const longueurElt = document.getElementById("longueur");
const majusculeElt = document.getElementById("majuscule");
const minusculeElt = document.getElementById("minuscule");
const chiffreElt = document.getElementById("chiffre");
const carSpecialElt = document.getElementById("carSpecial");
const generatePWDElt = document.getElementById("generatePWD");
const text4Elt = document.getElementById("text4");
const myPwdElt = document.getElementById("myPwd");

const chariotElt = document.querySelector(".chariot");
const titrePrincipaleElt = document.querySelector(".titrePrincipale");


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)]
}



function generatePwd(re){
    let pwd = "";
    taille = longueurElt.value
    
    while(pwd.length < taille){
        if (re== '1'){
            pwd += getRandomLower();
        } else if (re== '2'){
            pwd += getRandomUpper();
        } else if (re== '3'){
            pwd += getRandomNumber();
        } else if (re== '4'){
            pwd += getRandomSymbol();
        } else if (re=='5'){
            pwd += getRandomUpper();
            pwd += getRandomLower();
        } else if (re=='6'){
            pwd += getRandomUpper();
            pwd += getRandomNumber();
        } else if (re=='7'){
            pwd += getRandomUpper();
            pwd += getRandomSymbol();
        } else if (re=='8'){
            pwd += getRandomLower();
            pwd += getRandomNumber();
        } else if (re=='9'){
            pwd += getRandomLower();
            pwd += getRandomSymbol();
        } else if (re=='10'){
            pwd += getRandomNumber();
            pwd += getRandomSymbol();
        } else if (re=='11'){
            pwd += getRandomUpper();
            pwd += getRandomLower();
            pwd += getRandomNumber();
        } else if (re=='12'){
            pwd += getRandomUpper();
            pwd += getRandomLower();
            pwd += getRandomSymbol();
        } else if (re=='13'){
            pwd += getRandomUpper();
            pwd += getRandomNumber();
            pwd += getRandomSymbol();
        } else if (re=='14'){
            pwd += getRandomLower();
            pwd += getRandomNumber();
            pwd += getRandomSymbol();
        } else if (re=='15'){
            pwd += getRandomUpper()
            pwd += getRandomLower();
            pwd += getRandomNumber();
            pwd += getRandomSymbol();
        }
    }
    return pwd;
}

function modifierSequence(str){
     let temp = "";
     
     while (temp.length < longueurElt.value){
        let car = str [Math.floor(Math.random()*str.length)]
        temp += car;
        str = str.replace(car , "");
     }
     return temp;
}

 
 


generatePWDElt.addEventListener('click', () => {
    if (longueurElt.value > 20 || longueurElt.value < 5) {
        text4Elt.style.color = "#8ceb34";
        text4Elt.innerHTML = ("Tu dois choisir une longueur entre 5 et 20");
        titrePrincipaleElt.innerHTML = ("");
        chariotElt.style.display = "none";
    } else {
    if( ! majusculeElt.checked 
        &&  minusculeElt.checked 
        && ! chiffreElt.checked
        && ! carSpecialElt.checked ){
            myPwdElt.innerHTML= modifierSequence(generatePwd(1));
    } else if( majusculeElt.checked 
        && ! minusculeElt.checked 
        && ! chiffreElt.checked
        && ! carSpecialElt.checked ){
            myPwdElt.innerHTML= modifierSequence(generatePwd(2));
    }else if( !majusculeElt.checked 
        && ! minusculeElt.checked 
        &&  chiffreElt.checked
        && ! carSpecialElt.checked ){
            myPwdElt.innerHTML= modifierSequence(generatePwd(3));
    } else if( !majusculeElt.checked 
        && ! minusculeElt.checked 
        && ! chiffreElt.checked
        &&  carSpecialElt.checked ){
            myPwdElt.innerHTML= modifierSequence(generatePwd(4));
    }
    
    
    else if  (majusculeElt.checked 
    &&  minusculeElt.checked 
    && ! chiffreElt.checked
    && ! carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(5));
} else if  (majusculeElt.checked 
    && ! minusculeElt.checked 
    &&  chiffreElt.checked
    && ! carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(6));
}else if  (majusculeElt.checked 
    && ! minusculeElt.checked 
    && ! chiffreElt.checked
    &&  carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(7));
} else if  (!majusculeElt.checked 
    &&  minusculeElt.checked 
    &&  chiffreElt.checked
    && ! carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(8));
}else if  (! majusculeElt.checked 
    &&   minusculeElt.checked 
    && ! chiffreElt.checked
    &&  carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(9));
}else if  (! majusculeElt.checked 
    &&  ! minusculeElt.checked 
    &&  chiffreElt.checked
    &&  carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(10));
}


else if  (majusculeElt.checked 
    &&  minusculeElt.checked 
    &&  chiffreElt.checked
    && ! carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(11));
}else if  (majusculeElt.checked 
    &&  minusculeElt.checked 
    && ! chiffreElt.checked
    &&  carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(12));
}else if  (majusculeElt.checked 
    &&  ! minusculeElt.checked 
    &&  chiffreElt.checked
    &&  carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(13));
}else if  (! majusculeElt.checked 
    &&  minusculeElt.checked 
    &&  chiffreElt.checked
    &&  carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(14));
}

else if  (majusculeElt.checked 
    &&  minusculeElt.checked 
    &&  chiffreElt.checked
    &&  carSpecialElt.checked ){
        myPwdElt.innerHTML = modifierSequence(generatePwd(15));
} else{
        text4Elt.style.color = "#8ceb34";
        text4Elt.innerHTML = ("Tu dois choisir au moins une option!");
        titrePrincipaleElt.innerHTML = ("");
        chariotElt.style.display = "none";
     }
}
}
);