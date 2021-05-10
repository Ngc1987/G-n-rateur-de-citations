const citationPlace = document.querySelector(".citationText");
const citationAuthor = document.querySelector(".citationName");


fetch("citations2.json").then(function(response) {
    response.json().then(function(json) {
        citations = json.citations;
        showCitation(citations);
    })
});




window.addEventListener("click", showCitation);

function showCitation(citations) {

    // for(i=0; i < citations.length; i++) {

    
        randomCitation = [citations[Math.floor(Math.random() * citations.length)]];
        citationPlace.innerText = randomCitation[0].citation;
        citationAuthor.innerText = randomCitation[0].auteur;
        // console.log(randomCitation);
        // console.log(citations[Math.floor(Math.random() * citations.length)].auteur);
    // }
    
};