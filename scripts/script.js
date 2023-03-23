const continer = document.getElementById('fscont');
const divstic = document.getElementById('divstic');
const divdynmic = document.getElementById('divdynmic');

const feSpeaker = [
  {
    id: 1,
    title: 'Yochai Brnklrt',
    img: '../s1.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    title: 'Soh Yeong Noh',
    img: '../s2.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  }];

const dynobj = [
  {
    id: 1,
    title: 'Faisal Mumtaz',
    img: '../s1.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    title: 'ABC',
    img: '../s2.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

function dynamicObj() {
  dynobj.forEach((project) => {
    if (window.innerWidth < 768) {
      continer.innerHTML += `<div class="row mt-4 dyn2">
        <div class="col-5 col-md-4">
          <img  src="${project.img}" alt="speaker img not found" width="107px" height="106.4px">
        </div>
        <div class="col-7 col-md-8  fpRows">
            <div class="row fsH">${project.title}</div>
            <div class="row fsH2">${project.heading}</div>
            <span class="bar"></span>
            <div class="row fsH3">${project.subheading}</div>
        </div>
      </div>`;
    } else {
      divdynmic.innerHTML += `<div class="row mt-4 dyn2">
        <div class="col-5 col-md-4">
          <img  src="${project.img}" alt="speaker img not found" width="107px" height="106.4px">
        </div>
        <div class="col-7 col-md-8  fpRows">
            <div class="row fsH">${project.title}</div>
            <div class="row fsH2">${project.heading}</div>
            <span class="bar"></span>
            <div class="row fsH3">${project.subheading}</div>
        </div>
      </div>`;
    }
  });
}
function expand() {
  continer.style.height = '600px';
  dynamicObj();
  document.getElementById('dropdownMenuButton').style.display = 'none';
}
window.onload = () => {
  feSpeaker.forEach((project) => {
    divstic.innerHTML += `<div class="row mt-4  dyn">
     <div class="col-5 col-md-4">
       <img  src="${project.img}" alt="speaker img not found" width="107px" height="106.4px">
     </div>
     <div class="col-7  col-md-8 fpRows">
         <div class="row fsH">${project.title}</div>
         <div class="row fsH2">${project.heading}</div>
         <span class="bar"></span>
         <div class="row fsH3">${project.subheading}</div>
     </div>
   </div>
   `;
  });
  if (window.innerWidth > 767) {
    expand();
  } else {
    continer.innerHTML += '<button onclick="expand()" class="btn  dropdown-toggle btn-down" type="button" id="dropdownMenuButton" data-toggle="dropdown" >More</button>';
  }
};
