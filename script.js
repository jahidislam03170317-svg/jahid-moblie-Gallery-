
const photos = [

{
  title:"Coffee Cartoon Cover",
  image:"iphone16.jpg",
  category:"iphone"
},

{
  title:"Pink Heart Bow Cover",
  image:"iphone15.jpg",
  category:"iphone"
},

{
  title:"Transparent Bear Frame Cover",
  image:"iphone15max.jpg",
  category:"iphone"
},

{
  title:"Mickey & Stitch Cover",
  image:"iphone16max.jpg",
  category:"iphone"
},

{
  title:"Mickey Cover",
  image:"s24.jpg",
  category:"samsung"
},

{
  title:"Bear Cover",
  image:"a55.jpg",
  category:"samsung"
},

{
  title:"Vivo V50 Cover",
  image:"v50.jpg",
  category:"vivo"
},

{
  title:"Oppo Reno13 Cover",
  image:"reno13.jpg",
  category:"oppo"
},

{
  title:"20W Charger",
  image:"charger.jpg",
  category:"other"
},

{
  title:"Type-C Cable",
  image:"typec.jpg",
  category:"other"
}
];


const albums=document.getElementById("albums");
const gallery=document.getElementById("gallery");

const viewer=document.getElementById("viewer");
const viewerImg=document.getElementById("viewerImg");

const counter=document.getElementById("counter");

const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");

const downloadBtn=document.getElementById("downloadBtn");
const closeViewer=document.getElementById("closeViewer");

let currentPhotos=[];
let currentIndex=0;
function openCategory(category){

albums.style.display="none";
gallery.style.display="grid";
gallery.innerHTML="";

currentPhotos=photos.filter(photo=>photo.category===category);

currentPhotos.forEach((photo,index)=>{

gallery.innerHTML+=`

<div class="photo">

<img src="${photo.image}" onclick="openPhoto(${index})">

<p>${photo.title}</p>

</div>

`;

});

gallery.innerHTML+=`

<div style="grid-column:1/-1;text-align:center;margin-top:20px;">

<button onclick="backHome()"
style="padding:12px 25px;
background:#0d6efd;
color:white;
border:none;
border-radius:10px;
font-size:16px;
cursor:pointer;">

🏠 Back

</button>

</div>

`;

}

function backHome(){

gallery.style.display="none";
albums.style.display="flex";

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".category button").forEach(btn=>{

if(btn.innerText.toLowerCase().includes(value)){

btn.style.display="inline-block";

}else{

btn.style.display="none";

}

});

});
function openPhoto(index){

currentIndex=index;

viewer.style.display="flex";

showPhoto();

}

function showPhoto(){

viewerImg.src=currentPhotos[currentIndex].image;

counter.innerHTML=(currentIndex+1)+" / "+currentPhotos.length;

downloadBtn.href=currentPhotos[currentIndex].image;

downloadBtn.setAttribute("download",currentPhotos[currentIndex].title);

}

prevBtn.onclick=function(){

if(currentIndex>0){

currentIndex--;

showPhoto();

}

}

nextBtn.onclick=function(){

if(currentIndex<currentPhotos.length-1){

currentIndex++;

showPhoto();

}

}

closeViewer.onclick=function(){

viewer.style.display="none";

}

viewer.onclick=function(e){

if(e.target===viewer){

viewer.style.display="none";

}

}



