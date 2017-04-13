var tamplate =  document.getElementById('myTamplate');
var myDisplay = document.getElementById('display');
var whichone = document.getElementById('othershoes');
var thisone =  document.getElementById('Izihlangu');
var othersWear= document.getElementById('wear');
var ladyWear= document.getElementById('ladyshoe');
var took= document.getElementById('clickSearch');




var myTampleInfor = Handlebars.compile(tamplate.innerHTML);
var shoes = [
    {formal : 'formalShoe', price : 900, color : 'Brown', in_stock : 5, image : 'formal.jpg'},
    {Snaekers  : 'runningShoe', price : 1500, color : 'white', in_stock : 7, image : 'nike.jpg'},
    {Stars  : 'allstarTakkie', price : 1400, color: 'Red', in_stock : 4, image : "allstar.jpg"},
    {themazon  : 'workShoe', price : 500, color: 'maroon', in_stock : 3, image : 'amazon.jpg'},
    {themazon  : 'all', price : 400, color: 'Blue', in_stock : 4, image : 'picback.jpg'},
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

    if ( thisone.value === shoes[i].color){
      filteredList.push(shoes[i]);
    }
    else if (thisone.value === "allShoes"){
        filteredList.push(shoes[i]);
    }
  }


  //Now use this with my template:
  var filteredShoesHTML = myTampleInfor({ shoes : filteredList});
  myDisplay.innerHTML = filteredShoesHTML;
  console.log("me");
});
