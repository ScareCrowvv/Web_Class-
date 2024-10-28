/*    JavaScript 7th Edition
      Chapter 3
      Project 03-02

      Application to generate a slide gallery
      Author: Daniel Borrell Diaz 
      Date: Oct 9 2024  

      Filename: project03-02.js
*/

let captions = [
    "International Space Station fourth expansion [2009]",
    "Assembling the International Space Station [1998]",
    "The Atlantis docks with the ISS [2001]",
    "The Atlantis approaches the ISS [2000]",
    "The Atlantis approaches the ISS [2000]",
    "International Space Station over Earth [2002]",
    "The International Space Station first expansion [2002]",
    "Hurricane Ivan from the ISS",
    "The Soyuz spacecraft approaches the ISS [2005]",
    "The international Space Station from above [2006]",
    "Mnuversing in space with the Canadam2",
    "The international Space Station second expansion [2006]",
    "The international space station thrid expansion [2007]",
    "The ISS over the Ionian Sea [2007]"
];

let htmlCode = "";

for (let i = 0; i < captions.length; i++) {
    
    htmlCode += `<figure>
                    <img alt='' src='slide${i}.jpg' />
                    <figcaption>${captions[i]}</figcaption>
                 </figure>`;
}

document.getElementById("gallery").innerHTML = htmlCode;
