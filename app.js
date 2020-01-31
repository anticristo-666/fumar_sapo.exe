//declaramos las DOM en unas bonitas ordenaditas variables 
const win = document.getElementById('container');
const skreen = document.getElementById('screen');
const textbox = document.getElementById('textbox');
const options = document.getElementById('options');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const close  = document.getElementById('close');

//declaramos todes los textes que introducen el juego en una lista
const introTxtlines = [
    'tas bn fresh paseando en el desierto de Sonora cuando de repente te pasa lo más puto raro',
    'un sapo sobre una roca te chifla y al captar tu atención te dice : fumame mijo culo si no',
    'como te espanta tanto entras en shock, le das 2 3 fumes a su aceitito y entras al HIPERESPACIO',
    'ahí, dos entidades majestuosas te aseguran ser Dios',
    'un elfo maquina se acerca muy amablemente a aconsejarte que una de ellas en efecto es Dios pero la otra es un demonio mentiroso de muy baja vibración',
];

const introImg = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1h1At5Y0hULXRj5BSRtgax5lFwi66Jp1R0GnZRvEDflKVWiPb',
    'https://pics.me.me/badass-frog-3737874.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ7OtohRWxqhW-pVsVqoclsayfmmQXSn_v9EuclzW5jcvmdW4Y',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT54v6Pkszr8HPD8s2JaP4eIXf9AsbJRBC3H47cljj6JJYAJNLC',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnkalLU3Iq7t5neaMWYbXr7xqdqTuiXbWQNxnPo8rqjGN_qijx',
]

const conclusionTxtlines = [
    'la entidad comienza a acercarse más y más a ti hasta que solo ves patrones geometricos.....',
    'de repente, lo unico que percibes es una eterna lux blanca....',
    'y después... percibes la nada, ni una sola señal.....',
    '.......................',
];

const conclusionImg = [
   'https://thumbs.gfycat.com/HairyIndolentEasternnewt-mobile.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYRkm21HJWtfrNk02vTlVxQYgZSgOdmmn_dobnsCbiPTFtkwY1',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTocZ12lf3m18p-_b_EhoP9-TZOV6E2hVRO_pPZipNYmJZyveYM',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTocZ12lf3m18p-_b_EhoP9-TZOV6E2hVRO_pPZipNYmJZyveYM',
]

//creamos función q cambie el texto mediante nuestro click
function intro(textList, imgList){
    var i = 0;
    skreen.style.backgroundImage = `url("${imgList[i]}")`;
    textbox.innerHTML = textList[i];

    textbox.addEventListener('click', function(){
        i++;
        skreen.style.backgroundImage = `url("${imgList[i]}")`;
        textbox.innerHTML = textList[i];

        //if ya se nos acabaron los textos, toca la sig parte del juego
        if(i == textList.length){
            userChoice();
        }
    });
}

//permitir que el usuario introduzca su opcion y a partir de esta, invocar a la función que dará el resultado 
function userChoice(){
    skreen.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnkalLU3Iq7t5neaMWYbXr7xqdqTuiXbWQNxnPo8rqjGN_qijx')";
    textbox.innerHTML = 'a cuál de las dos entidades le haces caso?';
    options.style.display = 'block';
    options.addEventListener('click', function(e){
        if(e.target == uno){
            usrChoice = 1;
            conclusion(conclusionTxtlines, conclusionImg);
        };
        if(e.target == dos){
            usrChoice = 2;
            conclusion(conclusionTxtlines, conclusionImg);
        };
    });
}

//funcion que mostrara la conclusion del juego segun la elexion previa del user
function conclusion(textList, imgList){
    var result = Math.ceil(Math.random()*2);
    options.style.display = 'none';
    var i = 0;
    skreen.style.backgroundImage = `url("${imgList[i]}")`;
    textbox.innerHTML = textList[i];

    textbox.addEventListener('click', function(){
        i++;
        skreen.style.backgroundImage = `url("${imgList[i]}")`;
        textbox.innerHTML = textList[i];
        if(i == textList.length){
            if(usrChoice == result){
                skreen.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZOql9jbJhI-cXUe5oUydkreKH1R4M2CpdbzzBHTbNDfh5PhWK")';
                textbox.innerHTML = 'diositx te enseña los secretos más divinos del universo *ww*';

                textbox.addEventListener('click', jugarOtraVez);
            } else {
                skreen.style.backgroundImage = 'url("https://pm1.narvii.com/6328/28d12c0e32cbd59cce5605f1126cea0e3f38eb4b_hq.jpg")';
                textbox.innerHTML = 'el chamuco te come tus preciados organos :o';

                textbox.addEventListener('click', jugarOtraVez);
            }
        }
    });
}

//el user elige si secha otra ronda o no
function jugarOtraVez(){
    uno.innerHTML = 'si';
    dos.innerHTML = 'no';
    options.style.display = 'block';
    textbox.innerHTML = 'quieres volver a jugar?';

    options.addEventListener('click', function(e){
        if(e.target == uno){
            location.reload();
        }
        if(e.target == dos){
            win.style.display = 'none';
        }
    })
}

//funx q permite cerrar la ventana
function closeWin(){
    win.style.display = 'none';
}

var usrChoice;
intro(introTxtlines,introImg);
