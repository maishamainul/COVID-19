var text = '';
function findcountries (){
    text = document.getElementById('Search Countries').value;
    connectcountries(text)
}

function connectcountries (text) {
    

    
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => loadcountries(data));
    

}

connectcountries();

function loadcountries(data){
    console.table(data);

    var container = document.getElementById('main-container');

}

function moreDetails(){
    fetch('https://restcountries.com/data/png/per.png')
    .then(res=>res.json())
    .then(data=>loadDetails(data));
}

function loadDetails(){
    var newContainer = document.getElementById("main-container");

    newContainer.innerHTML = '<p>Population:<b> ${data[0].population}</b></p>; ' 
    container.appendchild(newDiv);                          
                                   
}