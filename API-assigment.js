console.log("hi there"); //To check if the .js file is linked to the .html file//

//The goal of this assigment is to make use of Europeana API to to have a rotation game//
//that cycles through images of Europeana//
//The variable URL consists of the Request link from Europeana with the search//
//value (query): 'modern art'//
//the idea behind this query, is that modern art can be abstract or illusional and this//
//makes it harder for the player to guess which way is up//

var xmlhttp = new XMLHttpRequest();
var URL = "http://www.europeana.eu/api/v2/search.json?wskey=RJ6eZR6Mk&query=modern+art&start=1&rows=24&profile=standard";
var method = "GET";
xmlhttp.open(method, URL, true);
xmlhttp.send();
  
  var myArray =[
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fna.memorix.nl%2Foai2%2F%3Fimage%3Dna%3Acol1%3Adat173993%3A173993.jpg%26type%3Dlarge&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fna.memorix.nl%2Foai2%2F%3Fimage%3Dna%3Acol1%3Adat261479%3A261479.jpg%26type%3Dlarge&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fna.memorix.nl%2Foai2%2F%3Fimage%3Dna%3Acol1%3Adat261480%3A261480.jpg%26type%3Dlarge&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fna.memorix.nl%2Foai2%2F%3Fimage%3Dna%3Acol1%3Adat261481%3A261481.jpg%26type%3Dlarge&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fna.memorix.nl%2Foai2%2F%3Fimage%3Dna%3Acol1%3Adat261482%3A261482.jpg%26type%3Dlarge&size=LARGE&type=IMAGE",, 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.rachelnet.net%2Fmedia%2Fmedem%2Fimages%2Fthumb.jpg&size=LARGE&type=SOUND",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1143%2Fsap01_72x01365_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1215%2Fsap53_70l06458_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1215%2Fsap53_70l06456_v.jpg&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F0963%2Fsap01_54p01046_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F0963%2Fsap01_54p01045_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F0963%2Fsap01_54p01044_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.europhoto.eu.com%2Fimages%2FANP-926132_thumb.jpg&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1183%2Fsap01_77p00927_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01775_v.jpg&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01774_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01772_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01328_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01326_v.jpg&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01323_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01321_v.jpg&size=LARGE&type=IMAGE", 
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1287%2Fsap53_71l01320_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1286%2Fsap53_71l00945_v.jpg&size=LARGE&type=IMAGE",
    "http://europeanastatic.eu/api/image?uri=http%3A%2F%2Fwww.culture.gouv.fr%2FWave%2Fimage%2Fmemoire%2F1286%2Fsap53_71l00228_v.jpg&size=LARGE&type=IMAGE"
    ];
    
    //This array is recieved with the code below. By looking at the edmPreview of the items//
    //in the variable Data, which gives me a list of 24 URL's, which I've copied in myArray//
    //To use this array of URL's, I've copied it into my cth-project.html from the previous//
    //assigments (1 and 2). In this way, the rotation game uses the URL's retrieved from an//
    //API (europeana) and rotates through images from an outer source//


    
xmlhttp.onreadystatechange = function(){
console.log(xmlhttp.readyState);            //Here, the console.log tells me the state is 4: DONE//

if (xmlhttp.readyState === 4) {             //when .readystate is 4, the operation is complete: state 'DONE'//
console.log(xmlhttp.responseText);          //This data matches the data I've requested from Europeana//
var test = xmlhttp.response;
var Data = JSON.parse(test);                 //turns it into object with the API KEY: "RJ6eZR6Mk"//
console.log(Data);                           //within this object, there is an array of 9 objects-->images!//

for (var i=0; i<Data.items.length; i++){
    console.log(Data.items[i].edmPreview[0]);
    myArray.push(Data.items[i].edmPreview[0]);
    console.log(myArray);
    }
    
} else{
   console.log("It doesn't work man");
}
};

