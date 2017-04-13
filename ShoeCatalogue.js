var tamplate =  document.getElementById('myTamplate');
var myDisplay = document.getElementById('display');
var whichone = document.getElementById('othershoes');
var thisone =  document.getElementById('Izihlangu');
var othersWear= document.getElementById('wear');
var ladyWear= document.getElementById('ladyshoe');
var took= document.getElementById('clickSearch');



//I am referencing my compiler which is my tamplate
var myTampleInfor = Handlebars.compile(tamplate.innerHTML);
var shoes = [
    {formal : 'formalShoe', price : 900, Size : 7, color : 'Brown', in_stock : 5, image : 'formal.jpg'},
    {Snaekers  : 'runningShoe', price : 1500, Size : 5, color : 'white', in_stock : 7, image : 'nike.jpg'},
    {Stars  : 'allstarTakkie', price : 1400, Size : 4, color: 'Red', in_stock : 4, image : "allstar.jpg"},
    {themazon  : 'workShoe', price : 500, Size : 6.5, color: 'maroon', in_stock : 3, image : 'amazon.jpg'},
    {themazon  : 'all', price : 400, Size : 9,color: 'Blue', in_stock : 4, image : 'picback.jpg'},
  ];
var display = myTampleInfor({shoes});
//myDisplay.innerHTML = display;

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
