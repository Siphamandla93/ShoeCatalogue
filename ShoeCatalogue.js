var tamplate =  document.getElementById('myTamplate');
var myDisplay = document.getElementById('display');
var whichone = document.getElementById('othershoes');
var thisone =  document.getElementById('Izihlangu');
var othersWear= document.getElementById('wear');
var ladyWear= document.getElementById('ladyshoe');
var took= document.getElementById('clickSearch');
var dropdown= document.getElementById('SelectShoes');
var Sizedropdown= document.getElementById('Selectsize');
var addingStock= document.getElementById('addstock');
var InputColor= document.getElementById('Txtcolor');
var inputSize= document.getElementById('Txtsize');
var inputestock= document.getElementById('Txtin-stock');
var inputePrice= document.getElementById('Txtprice');
var inputeImage= document.getElementById('Txtimage');





//Compiling my tamplate
var myTampleInfor = Handlebars.compile(tamplate.innerHTML);
var shoes = [
    {Type : 'formalShoe', price : 900, Size : 8, color : 'Brown', in_stock : 5, image : 'formal.jpg'},
    {Type  : 'runningShoe', price : 1500, Size : 5, color : 'white', in_stock : 7, image : 'nike.jpg'},
    {Type : 'allstarTakkie', price : 1400, Size : 4, color: 'Red', in_stock : 4, image : "allstar.jpg"},
    {Type  : 'workShoe', price : 10000, Size : 6, color: 'maroon', in_stock : 3, image : 'amazon.jpg'},
    {Type  : 'all', price : 800, Size : 9,color: 'Blue', in_stock : 5, image : 'JJjoe.jpg'},
    {Type  : 'sleepons', price : 1200, Size : 3,color: 'Dackblue', in_stock : 4, image : 'sleepon.jpg'},
  ];

addingStock.addEventListener("click", function(){
  console.log('Anele')
});
  //compiling color dropdown
  var colors = Handlebars.compile(dropdown.innerHTML);
  //for (var i = 0; i < shoes.length; i++) {
    // console.log(shoes[i].color);
    thisone.innerHTML = colors({shoes: shoes});
  //}

  //compiling size dropdown
  var thisSize = Handlebars.compile(Sizedropdown.innerHTML);
  for (var i = 0; i < shoes.length; i++) {
    othersWear.innerHTML = thisSize({shoes: shoes});
  }


  //myDisplay.innerHTML = display;

var display = myTampleInfor({shoes});

var outPut = function searchShoes(){
  var filteredList = [];
  for (var i=0;i<shoes.length;i++){

    if ( thisone.value === shoes[i].color){
      filteredList.push(shoes);
    }
  }

  //Now use this with my template:
  var filteredShoesHTML = myTampleInfor({ shoes : filteredList});
//  myDisplay.innerHTML = filteredShoesHTML;
  console.log("me");

};

took.addEventListener("click", function(){
  var filteredList = [];
  for (var i=0;i<shoes.length;i++){
//If Shoes selected by color it must display the shoes
    if ( thisone.value === shoes[i].color){
      filteredList.push(shoes[i]);
    }
    //If filtering by size display the shoe that is selected by that size
  else if ( othersWear.value == shoes[i].Size){
      filteredList.push(shoes[i]);
    }
// If this one . value=== allShoes display all of them
    else if (thisone.value === "allShoes"){
        filteredList.push(shoes[i]);
    }
  }


  //Now i am displaying my data
  var filteredShoesHTML = myTampleInfor({ shoes : filteredList});
  myDisplay.innerHTML = filteredShoesHTML;
  console.log("me");
});
