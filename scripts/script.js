const continer = document.getElementById('fscont');
const feSpeaker = [
  {
    id: 1,
    title: 'Yochai Brnklrt',
    img: '../images/s1.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    title: 'Soh Yeong Noh',
    img: '../images/s2.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  }];

const dynobj = [
  {
    id: 1,
    title: 'Faisal Mumtaz',
    img: '../images/s1.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    title: 'ABC',
    img: '../images/s2.png',
    heading: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    subheading: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

window.onload = () => {
  feSpeaker.forEach((project) => {
    continer.innerHTML += `<div class="row mt-4 dyn">
     <div class="col-4 ">
       <img  src="${project.img}" alt="speaker img not found" width="107px" height="106.4px">
     </div>
     <div class="col-8  fpRows">
         <div class="row fsH">${project.title}</div>
         <div class="row fsH2">${project.heading}</div>
         <span class="bar"></span>
         <div class="row fsH3">${project.subheading}</div>
     </div>
   </div>
   `;
  });
  continer.innerHTML += '<button onclick="expand()" class="btn  dropdown-toggle btn-down" type="button" id="dropdownMenuButton" data-toggle="dropdown" >More</button>';
};
function dynamicObj() {
  dynobj.forEach((project) => {
    continer.innerHTML += `<div class="row mt-4 dyn">
        <div class="col-4 ">
          <img  src="${project.img}" alt="speaker img not found" width="107px" height="106.4px">
        </div>
        <div class="col-8  fpRows">
            <div class="row fsH">${project.title}</div>
            <div class="row fsH2">${project.heading}</div>
            <span class="bar"></span>
            <div class="row fsH3">${project.subheading}</div>
        </div>
      </div>
      `;
  });
}

function expand() {
  continer.style.height = '600px';
  dynamicObj();
  document.getElementById('dropdownMenuButton').style.display = 'none';
}
if (0) {
  expand();
}