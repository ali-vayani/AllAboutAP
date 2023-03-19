//Instance variables
let currentId;
let title = document.getElementsByClassName('articleHeader');
let courseInfo = document.getElementsByClassName('courseInfo');


//Classes obj
let langClasses = 
[
    //AP Lang Comp === 0
    {
        "name": "AP English Language and Composition",
        "courseInfo": "&#x2022 In this class you’ll learn how to understand writing and rhetorical arguments through reading, analyzing, and writing texts. You’ll explore topics such as rhetorical situations, claims and evidence, reasoning and organization, and style.",
    },

    //AP Lit === 1
    {
        "name": "AP English Literature and Composition",
        "courseInfo": "&#x2022 In this class you’ll learn how to grasp a better understanding of different literature through analyzing characters, settings, structure, perspective, figurative language, and literary analysis.",
    },
    //Spanish lang == 2
    {
        "name": "AP Spanish Language and Culture",
        "courseInfo": "&#x2022 This is a college-level course that is based on the Spanish language, as well as its influence on the Hispanic culture, communities, traditions, and families. Many of the students taking it will have already had some Spanish-speaking background, which is taken into account in the 80% pass rate across the last few years. If you do not have a Spanish-speaking background, expect a rigorous amount of coursework and studying if you are looking to succeed in the exam. ",
 
    },
    //spanish lit == 3
    {
        "name": "AP Spanish Literature and Culture",
        "courseInfo": "&#x2022 AP Spanish Literature and Culture is a college-level course that is based primarily on analyzing and comparing literary works from the Spanish-speaking world, as well as studying its influence on the Hispanic culture across a variety of texts, poems, and artworks. If you do not already have a Spanish-speaking background, expect a rigorous amount of coursework and studying if you are looking to succeed in the exam. ",
    },
];

let sciClasses =
[
    {
        "name":"AP Biology",
        "courseInfo":"AP Biology is an introductory college-level biology course. You’ll cultivate a strong understanding of biology through investigations and exploring topics such as evolution, energetic, information storage and transfer, and system interactions. "
    },
    {
        "name":"AP Chemistry",
        "courseInfo":"AP Chemistry is an introductory college-level chemistry course. Students cultivate their understanding of chemistry through inquiry-based lab investigations as they explore the four Big Ideas: scale, proportion, and quantity; structure and properties of substances; transformations; and energy."
    },
    {
        "name":"AP Environmental Science",
        "courseInfo":"AP Environmental Science is a course based on identifying and analyzing environmental problems, including learning about earth systems and resources. You’ll cultivate a strong understanding of the living world, as well as the many environmental aspects, consequences, and effects that humans have caused. Expect a low amount of coursework and studying, as this is a relatively easy AP exam, despite the rate of receiving a 5 being unusually low. "
    },
    {
        "name":"AP Physics 1: Algebra-Based",
        "courseInfo":"AP Physics 1 is notorious for having the lowest pass rate out of any AP Exam along with being very difficult. Despite this, it is one of the more popular AP Classes with over 130,00 students taking it in the 2021 school year. AP Physics 1 is an algebra-based, introductory college-level course. You can expect to learn Physics that’s on the more Mechanical side, such as Kinematics, Momentum, Forces, and more. You should also expect to participate in laboratory work and work hands-on during this class."
    },
    {
        "name":"AP Physics 2: Algebra-Based",
        "courseInfo":"AP Physics 2 is an algebra-based, introductory college-level physics course. Students cultivate their understanding of physics through classroom study, in-class activity, and hands-on, inquiry-based laboratory work as they explore concepts like systems, fields, force interactions, change, conservation, waves, and probability."
    },
    {
        "name":"AP Physics C Mechanics",
        "courseInfo":"AP Physics C Mechanics has a high pass rate at 74%. This means that almost three-quarters of students who take this exam pass it. Despite its pass rate, AP Physics C Mechanics is a very challenging class. You’re expected to have a strong Physics foundation along with knowledge of Calculus. You should expect to be met with concepts such as forces, particle interactions, gravitational fields, and conservation. "
    },
    {
        "name":"AP Physics C Electricity and Magnetism",
        "courseInfo":"AP Physics C: Electricity and Magnetism is a one-semester, calculus-based, college-level physics course, especially appropriate for students planning to specialize or major in one of the physical sciences or engineering. Students cultivate their understanding of physics through classroom study and activities as well as hands-on laboratory work as they explore concepts like change, force interactions, fields, and conservation."
    },
]
//Gets the id of the courseGridPage div that was clicked and stores it
function currentIdChange(id)
{
    localStorage.setItem("currentId", id);
}


//Sets the coursePgTxt
function langCoursePgTxt(id)
{

    //Ap Lang comp
    if(id === 0)
    {
        document.getElementById('class1').innerHTML = langClasses[id]["name"];
        document.getElementById('class1Blurb').innerHTML = langClasses[id]["courseInfo"];
    }
    //Ap lit comp
    if(id === 1)
    {
        document.getElementById('class2').innerHTML = langClasses[id]["name"];
        document.getElementById('class2Blurb').innerHTML = langClasses[id]["courseInfo"];
    }
    //Ap spanish lang
    if(id === 2)
    {
        document.getElementById('class3').innerHTML = langClasses[id]["name"];
        document.getElementById('class3Blurb').innerHTML = langClasses[id]["courseInfo"];
    }
    //Ap spanish lit
    if(id === 3)
    {
        document.getElementById('class4').innerHTML = langClasses[id]["name"];
        document.getElementById('class4Blurb').innerHTML = langClasses[id]["courseInfo"];
    }
    for(let i = id; i > -1; i--)
    {
        console.log(i);
        i--;
        langCoursePgTxt(i);
    }
    
}

function sciCoursePg(id)
{

    //Ap bio
    if(id === 0)
    {
        document.getElementById('class1').innerHTML = sciClasses[id]["name"];
        document.getElementById('class1Blurb').innerHTML = sciClasses[id]["courseInfo"];
    }
    //Ap chem
    if(id === 1)
    {
        document.getElementById('class2').innerHTML = sciClasses[id]["name"];
        document.getElementById('class2Blurb').innerHTML = sciClasses[id]["courseInfo"];
    }
    //Apes
    if(id === 2)
    {
        document.getElementById('class3').innerHTML = sciClasses[id]["name"];
        document.getElementById('class3Blurb').innerHTML = sciClasses[id]["courseInfo"];
    }
    //Ap1
    if(id === 3)
    {
        document.getElementById('class4').innerHTML = sciClasses[id]["name"];
        document.getElementById('class4Blurb').innerHTML = sciClasses[id]["courseInfo"];
    }
    //ap2
    if(id === 4)
    {
        document.getElementById('class5').innerHTML = sciClasses[id]["name"];
        document.getElementById('class5Blurb').innerHTML = sciClasses[id]["courseInfo"];
    }
    //mech
    if(id === 5)
    {
        document.getElementById('class6').innerHTML = sciClasses[id]["name"];
        document.getElementById('class6Blurb').innerHTML = sciClasses[id]["courseInfo"];
    }
    //e&m
    if(id === 6)
    {
        document.getElementById('class7').innerHTML = sciClasses[id]["name"];
        document.getElementById('class7Blurb').innerHTML = sciClasses[id]["courseInfo"];
    }

    for(let i = id; i > -1; i--)
    {
        console.log(i);
        i--;
        sciCoursePg(i);
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
