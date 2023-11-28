const img = document.getElementById("person-img");
const author = document.getElementById("author");// name
const job = document.getElementById("job");
const about = document.getElementById("about");


const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const random = document.querySelector(".random-btn");


const reviews = [ 
    {
        id:1,
        name : 'Prince Bhardwaj',
        job : 'Front-end Devloper',
        img :  './images/pp1.png',
        about: 'Be proficient in coding languages such as HTML, CSS, JavaScript, and jQuery. Understand server-side CSS. Be experienced with graphic design applications .',

    },

    {
        id: 2,
        name: 'Anshu Sharma',
        job: 'Java Devloper',
        img: './images/anshu.jpg',
        about: 'Commonly used Java tools for Java development include IDEs like Eclipse, IntelliJ IDEA, and NetBeans, build tools like Maven and Gradle, version control systems like Git..',
      },
      {
        id: 3,
        name: 'Rachit Sharma',
        job: 'Android Devloper',
        img: './images/rachit.png',
        about: 'Designing and developing advanced applications for the Android platform. Unit-testing code for robustness, including edge cases, usability, and general reliability. Bug fixing and improving application performance..',
      },

      {
        id: 4,
        name: 'Sandeep Kumar',
        job: 'Operation Manager',
        img: './images/sandeep.png',
        about: 'Operations Managers oversee operational activities at every level of an organization. Their duties include hiring and training employees and managing quality assurance programs.. ',
      },

      {
        id: 5,
        name: 'Abhishek Sharma',
        job: 'Java Programer',
        img: './images/abhishek.png',
        about: 'Commonly used Java tools for Java development include IDEs like Eclipse, IntelliJ IDEA, and NetBeans, build tools like Maven and Gradle, version control systems like Git... ',
      },

];

let currentItem = 0;


window.addEventListener('DOMContentLoaded', function()
{
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    about.textContent = item.about; 

});

function showperson(person)
{
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    about.textContent = item.about; 

}


// show next person

next.addEventListener('click', function()
{
   currentItem++;

   if(currentItem> reviews.length -1)
   {
    currentItem = 0;
   }

   showperson(currentItem);
   

});

// prev button

prev.addEventListener('click', function()
{
     currentItem--;

     if(currentItem<0)
     {
        currentItem = reviews.length -1;
     }

     showperson(currentItem);

});

random.addEventListener('click', function()
{
     random.textContent = "9536851421";

    //  currentItem = Math.floor(Math.random()*reviews.length);
    //  showperson(currentItem);

});


