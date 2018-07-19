/**
    NOTE: This file is the rough initial version. 
    I have *NOT* encapsulated, or tidied. Use this at your demise *COUGH* risk
    The code to swap out all 3 images at the bottom is NOT DONE YET!

    Come back when it's done.
 */
//An example datasource
var datasource = [{
      small: "https://www.publicdomainpictures.net/pictures/20000/velka/background-with-flower-and-butterfl-1326054113zvO.jpg",
      medium:"https://www.publicdomainpictures.net/pictures/20000/velka/background-with-flower-and-butterfl-1326054113zvO.jpg",
      large:"https://www.publicdomainpictures.net/pictures/20000/velka/background-with-flower-and-butterfl-1326054113zvO.jpg"
},
{small: "https://www.publicdomainpictures.net/pictures/210000/velka/boat-in-caribbean-14884763094mZ.jpg",medium:"https://www.publicdomainpictures.net/pictures/210000/velka/boat-in-caribbean-14884763094mZ.jpg",large:"https://www.publicdomainpictures.net/pictures/210000/velka/boat-in-caribbean-14884763094mZ.jpg"},
{small: "https://www.publicdomainpictures.net/pictures/240000/velka/christmas-background-1512409099ojz.jpg",medium:"https://www.publicdomainpictures.net/pictures/240000/velka/christmas-background-1512409099ojz.jpg",large:"https://www.publicdomainpictures.net/pictures/240000/velka/christmas-background-1512409099ojz.jpg"},
{small: "https://www.publicdomainpictures.net/pictures/30000/velka/sunset-in-harbor.jpg",medium:"https://www.publicdomainpictures.net/pictures/30000/velka/sunset-in-harbor.jpg",large:"https://www.publicdomainpictures.net/pictures/30000/velka/sunset-in-harbor.jpg"}
];


// datasource.forEach(function (entity) {
//   console.log(entity);
// },this);

var len = datasource.length;
//We have 3 blocks (previous image, current image, next image). "1" is the center block
var selected = 1;
var nxt = document.getElementById('next');
var prev = document.getElementById('prev');

function updateImages(selected) {
  if (selected == 0) {
    document.querySelectorAll(".ImageSml img")[0].src = datasource[len-1].small;
    document.querySelectorAll(".ImageSml img")[1].src = datasource[0].small;
    document.querySelectorAll(".ImageSml img")[2].src = datasource[1].small;
  } else if (selected == (len-1)) {
    document.querySelectorAll(".ImageSml img")[0].src = datasource[len-2].small;
    document.querySelectorAll(".ImageSml img")[1].src = datasource[len-1].small;
    document.querySelectorAll(".ImageSml img")[2].src = datasource[0].small;
  } else {
    document.querySelectorAll(".ImageSml img")[0].src = datasource[selected-1].small;
    document.querySelectorAll(".ImageSml img")[1].src = datasource[selected].small;
    document.querySelectorAll(".ImageSml img")[2].src = datasource[selected+1].small;

  }
}

//Change which block is "selected"
function changeSelection(selected) {
  updateImages(selected);
  document.querySelectorAll(".ImageSml").forEach(function(element) {
    element.className = "ImageSml";
  });
  document.querySelectorAll(".ImageSml")[1].className = "ImageSml selected";
  document.querySelector(".ImageMed img").src = datasource[selected].medium;

  

}

//Add our click event to "previous"
prev.addEventListener("click",function (event) {
  selected --;
  if (selected < 0) {
    selected = len -1;
  }
  changeSelection(selected);
});

//Add our click event to "next"
nxt.addEventListener("click",function () {
  selected++;
  if (selected == len) {
    selected = 0;
  }
  changeSelection(selected);
});
changeSelection(selected);