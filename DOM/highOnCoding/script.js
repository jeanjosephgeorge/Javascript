
var headerdiv = document.createElement('div');
headerdiv.setAttribute('id','header');
headerdiv.setAttribute('style','margin: 20px; margin-left: 40px; margin-right: 40px;');
document.body.appendChild(headerdiv);

// FIRST ROW

var headerRowDiv = document.createElement('div');
headerRowDiv.setAttribute('class','row')
headerRowDiv.setAttribute('id','headerRow');
headerRowDiv.setAttribute('style','height: 180px; background-color: rgb(60, 154, 209)');
headerdiv.appendChild(headerRowDiv);

// HIGH ON CODING
var headerCol1 = document.createElement('div');
headerCol1.setAttribute('class','col-3');
headerCol1.setAttribute('style','line-height: 180px; text-align: center; font-size: 50px; color: white');
headerCol1.textContent = 'HighOnCoding';
headerRowDiv.appendChild(headerCol1);

//HOME
var headerCol2 = document.createElement('div');
headerCol2.setAttribute('class','col-1');
headerCol2.setAttribute('style','line-height: 180px; text-align: center; font-size: 30px; color: white')

    var aCol2 = document.createElement('a');
    aCol2.innerText = 'Home';
    aCol2.setAttribute('style','color: white;');
    aCol2.setAttribute('href','#');
    headerCol2.append(aCol2);
    headerRowDiv.append(headerCol2);

//CATEGORIES
var headerCol3 = document.createElement('div');
headerCol3.setAttribute('class','col-1');
headerCol3.setAttribute('style','line-height: 180px; text-align: center; font-size: 30px; color: white')

    var aCol3 = document.createElement('a');
    aCol3.innerText = 'Categories';
    aCol3.setAttribute('style','color: white;');
    aCol3.setAttribute('href','#');
    headerCol3.append(aCol3);
    headerRowDiv.append(headerCol3);

// empty

var headerCol4 = document.createElement('div');
headerCol4.setAttribute('class','col-7');
headerRowDiv.appendChild(headerCol4)


// SECOND ROW

var SectionTwo = document.createElement('div');
document.body.appendChild(SectionTwo);

var SectionTwoRow = document.createElement('div');
SectionTwoRow.setAttribute('class','row');
SectionTwoRow.setAttribute('style','height: 300px; margin-bottom: 20px;');
SectionTwo.appendChild(SectionTwoRow);

var SectionTwoRowCol1 = document.createElement('div');
SectionTwoRowCol1.setAttribute('class','col');
SectionTwoRow.appendChild(SectionTwoRowCol1);

//MAIN DIV
var SectionTwoRowCol2 = document.createElement('div');
SectionTwoRowCol2.setAttribute('class','col-10');
SectionTwoRowCol2.setAttribute('style','background-color: rgb(173, 173, 173);');
SectionTwoRow.appendChild(SectionTwoRowCol2);

//Content Top
var SectionTwoRowCol2Top = document.createElement('div');
SectionTwoRowCol2Top.setAttribute('class','row display-3 ml-4 mt-4');
SectionTwoRowCol2Top.setAttribute('style','background-color: rgb(173, 173, 173);')
SectionTwoRowCol2Top.textContent='Curse of the Current reviews';
SectionTwoRowCol2.appendChild(SectionTwoRowCol2Top);

//Content Bottom
var SectionTwoRowCol2Bot = document.createElement('div');
SectionTwoRowCol2Bot.setAttribute('class','row h4 ml-4 mt-3');
SectionTwoRowCol2Bot.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, fugiat accusantium qui at id eaque nostrum, quia mollitia minus odio ducimus doloribus dolor eveniet minima sit officiis doloremque nisi? Ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad commodi consectetur aliquid reiciendis placeat blanditiis fugit ex. Temporibus similique perspiciatis omnis at. Molestias, inventore. Quia non esse officia facere veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laboriosam. Ipsam eos aut, architecto aliquid exercitationem vel. Officia ipsum quis error reprehenderit a, quae rerum, distinctio asperiores perspiciatis, numquam est.'
SectionTwoRowCol2.appendChild(SectionTwoRowCol2Bot)

var SectionTwoRowCol3 = document.createElement('div');
SectionTwoRowCol3.setAttribute('class','col');
SectionTwoRow.appendChild(SectionTwoRowCol3)


//SECTION THREE

var SectionThree = document.createElement('div');
document.body.appendChild(SectionThree);

var SectionThreeContainer = document.createElement('div');
SectionThreeContainer.setAttribute('class','container-fluid');
SectionThreeContainer.setAttribute('style','height:300px; width: 85%');
SectionThree.appendChild(SectionThreeContainer);

var SectionThreeContainerCol = document.createElement('div');
SectionThreeContainerCol.setAttribute('class','col');
SectionThreeContainer.appendChild(SectionThreeContainerCol);

var SectionThreeContainerColRow1 = document.createElement('div');
SectionThreeContainerColRow1.setAttribute('class','row h3 text-primary');
SectionThreeContainerColRow1.textContent='Hello WatchKit';
SectionThreeContainerCol.appendChild(SectionThreeContainerColRow1);

var SectionThreeContainerColRow2 = document.createElement('div');
SectionThreeContainerColRow2.setAttribute('class','row mb-2');
SectionThreeContainerColRow2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, fugiat accusantium qui at id eaque nostrum, quia mollitia minus odio ducimus doloribus dolor eveniet minima sit officiis doloremque nisi? Ea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad commodi consectetur aliquid reiciendis placeat blanditiis fugit ex. Temporibus similique perspiciatis omnis at. Molestias, inventore. Quia non esse officia facere veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laboriosam. Ipsam eos aut, architecto aliquid exercitationem vel. Officia ipsum quis error reprehenderit a, quae rerum, distinctio asperiores perspiciatis, numquam est.';
SectionThreeContainerCol.appendChild(SectionThreeContainerColRow2);

var SectionThreeContainerColRow3 = document.createElement('div');
SectionThreeContainerColRow3.setAttribute('class','row');
SectionThreeContainerColRow3.setAttribute('style','height: 30px; background-color: rgb(255, 208, 0);')
SectionThreeContainerCol.appendChild(SectionThreeContainerColRow3);