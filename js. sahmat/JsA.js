












//let one= document.getElementById('one');

//let data="";
let Mersedes={
    il: 2021,
    reng: "qara"

    

}



let Qalik={
    il: 2021,
    reng: "qara"

    

}


let BMWi8={
    il: 2021,
    reng: "qara-sari"


    

}


let Camaro={
    il: 2022,
    reng: "aq-qirmizi"

    

}

//let onf= document.getElementById('one');
//let data="";
function at(){
    let data="";
  document.getElementById('one').innerText=(` il : ${this.il} - reng : ${this.reng}`);
}


//(`il: ${this.il} - reng:${this.reng}`)
at.call(Mersedes);
at.call(Qalik);
at.call(Camaro);
at.call(BMWi8);

//one.innerHTML=data
//one.at();

































