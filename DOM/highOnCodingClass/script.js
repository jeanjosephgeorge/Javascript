

function nav(){


    //navbar
    var nav = document.createElement('nav');
    nav.setAttribute("class", "navbar navbar-expand navbar-dark p-4");
    nav.setAttribute("style", "background-color: rgb(82, 167, 250); ");

   

    //div container

    var div = document.createElement('div');
    div.setAttribute("class", "nav navbar-nav h3");
    nav.appendChild(div);

    //links
    //a1
    var a1 = document.createElement('a');
    a1.setAttribute('class', "nav-item nav-link active");
    a1.setAttribute('href', "#");
    a1.textContent = "HighOnCoding";

    div.appendChild(a1);

    //a2
    var a2 = document.createElement('a');
    a2.setAttribute('class', "nav-item nav-link active small pl-5");
    a2.setAttribute('href', "#");
    a2.textContent = "Home";

    div.appendChild(a2);


    //a3
    var a3 = document.createElement('a');
    a3.setAttribute('class', "nav-item nav-link small pl-5");
    a3.setAttribute('href', "#");
    a3.textContent = "Categories";

    div.appendChild(a3);

    return nav;
}

function grayBox(){

    var divMain = document.createElement('div');
    divMain.setAttribute('class', "container");

    //div 1

    var div1 = document.createElement('div');
    div1.setAttribute('class', "h1");
    div1.setAttribute('style', "color: rgb(83, 88, 94);" )


    return divMain;
}

var container = document.getElementById('container-fluid');
var navGlobal = nav();
container.appendChild(navGlobal);

var grayDivGlobal = grayBox();
container.appendChild(grayDivGlobal)






