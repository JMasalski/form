const towary = [
    "Towar1", "Towar2", "Towar3"
];
const towaryOb = [
    {id:0, nazwa: "Towar4"},
    {id:1, nazwa: "Towar5"},
    {id:2, nazwa: "Towar6"}
]



function funkcja(f){
    let imie = f.imie.value;
    let suma =Number(f.l1.value) + Number(f.l2.value);
    let zgoda;
    if(f.zgoda.checked)
        zgoda = "TAK";
    else
        zgoda = "NIE";

    let select =f.sel.value;

    let opcja; 
    for (const item of f.radio) {
        if (item.checked) opcja = item.value;
    }
    console.log(`Imię: ${imie} Suma = ${suma} Zgoda:${zgoda} Select: ${select}, Radio: ${opcja}`)
}

function select1(){
    let select = document.querySelector("#sel1");
    towary.forEach(item => {
        let opcja = document.createElement('option');
        opcja.value = opcja.textContent = item;
        select.appendChild(opcja)
    })
}

function selectOb(){
    let select = document.querySelector("#sel1");
    for(const k of Object.keys(towaryOb)){
        let opcja = document.createElement('option');
        opcja.value = opcja.textContent = towaryOb[k].nazwa;
        select.appendChild(opcja);
    }
}