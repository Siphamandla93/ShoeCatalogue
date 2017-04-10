var tamplate =  document.getElementById('myTamplate');
var myDisplay = document.getElementById('display');
var whichone = document.getElementById('othershoes');
var Thisone =  document.getElementById('Izihlangu');
var othersWear= document.getElementById('wear');
var LadyWear= document.getElementById('ladyshoe');



var myTampleInfor = Handlebars.compile(tamplate.innerHTML);
var shoes = [
    {formal : 'formalShoe', price : 900, color : 'Dark', in_stock : 5, image : 'formal.jpg'},
    {Snaekers  : 'runningShoe', price : 1500, color : 'Brown', in_stock : 7, image : 'nike.jpg'},
    {Stars  : 'allstarTakkie', price : 1400, color: 'Red', in_stock : 4, image : "allstar.jpg"},
    {themazon  : 'workShoe', price : 500, color: 'maroon', in_stock : 3, image : 'amazon.jpg'},
  ];
var display = myTampleInfor({shoes});
myDisplay.innerHTML = display;

var filteredList = [];
for (var i=0;i<shoes.length;i++){
  var shoes = shoes[i];
  if (e.target.value === "ALL"){
    filteredList.push(Shoes);
  }
}

//Now use this with my template:
var filteredShoesHTML = template({ shoes : filteredList});
display.innerHTML = filteredShoesHTML;
