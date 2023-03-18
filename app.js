//Instance variables
let currentId;
let title = document.getElementsByClassName('articleHeader');
let courseInfo = document.getElementsByClassName('courseInfo');


//Clases obj
let classes = 
[
    //AP Lang Comp === 0
    {
        "name": "AP English Language and Composition",
        "courseInfo": "&#x2022 In this class you’ll learn how to understand writing and rhetorical arguments through reading, analyzing, and writing texts. You’ll explore topics such as rhetorical situations, claims and evidence, reasoning and organization, and style.",
        "cousePage":"langComp.html"
    },

    //AP Lit === 1
    {
        "name": "AP English Literature and Composition",
        "courseInfo": "&#x2022 In this class you’ll learn how to grasp a better understanding of different literature through analyzing characters, settings, structure, perspective, figurative language, and literary analysis.",
    },
    //Spanish lang
    {
        "name": "AP Spanish Language and Culture",
        "courseInfo": "&#x2022 This is a college-level course that is based on the Spanish language, as well as its influence on the Hispanic culture, communities, traditions, and families. Many of the students taking it will have already had some Spanish-speaking background, which is taken into account in the 80% pass rate across the last few years. If you do not have a Spanish-speaking background, expect a rigorous amount of coursework and studying if you are looking to succeed in the exam. ",
 
    },
    //spanish lit
    {
        "name": "AP Spanish Literature and Culture",
        "courseInfo": "&#x2022 AP Spanish Literature and Culture is a college-level course that is based primarily on analyzing and comparing literary works from the Spanish-speaking world, as well as studying its influence on the Hispanic culture across a variety of texts, poems, and artworks. If you do not already have a Spanish-speaking background, expect a rigorous amount of coursework and studying if you are looking to succeed in the exam. ",
    },
];

//Gets the id of the courseGridPage div that was clicked and stores it
function currentIdChange(id)
{
    localStorage.setItem("currentId", id);
}


//Sets the coursePgTxt
function coursePgTxt(id)
{

    //Ap Lang comp
    if(id === 0)
    {
        document.getElementById('class1').innerHTML = classes[id]["name"];
        document.getElementById('class1Blurb').innerHTML = classes[id]["courseInfo"];
    }
    //Ap lit comp
    if(id === 1)
    {
        document.getElementById('class2').innerHTML = classes[id]["name"];
        document.getElementById('class2Blurb').innerHTML = classes[id]["courseInfo"];
    }
    //Ap spanish lang
    if(id === 2)
    {
        document.getElementById('class3').innerHTML = classes[id]["name"];
        document.getElementById('class3Blurb').innerHTML = classes[id]["courseInfo"];
    }
    //Ap spanish lang
    if(id === 3)
    {
        document.getElementById('class4').innerHTML = classes[id]["name"];
        document.getElementById('class4Blurb').innerHTML = classes[id]["courseInfo"];
    }
    for(let i = id; i > -1; i--)
    {
        console.log(i);
        i--;
        coursePgTxt(i);
    }
    
}

//Home page observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));

//Sidebar stuff -- currently broken
var sidebar = document.getElementById('sideBar');
var toggle = document.getElementById('toggle');
toggle.addEventListener('click', function()
{
    sidebar.classList.toggle('hidden');
});
