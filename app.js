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
        "courseInfo":"AP Physics C: Electricity and Magnetism is a one-semester, calculus-based, college-level physics course, especially appropriate for students planning to specialize or major in one of the physical sciences or engineering. Students cultivate their understanding of physics through classroom study and activities as well as hands-on laboratory work as they explore concepts like change..."
    },
]

let mathClasses = 
[
    {
        "name": "AP Calculus AB",
        "courseInfo":"AP Calculus AB is an introductory class to Calculus. It can be compared to a college class that focuses on differential and integral calculus. You will explore the concepts, methods, and applications of differential and integral calculus along with solving different types of problems to show your knowledge of the course. "
    },
    {
        "name": "AP Calculus BC",
        "courseInfo":"Explore the concepts, methods, and applications of differential and  integral calculus, including topics such as parametric, polar, and  vector functions, and series. You’ll perform experiments and  investigations and solve problems by applying your knowledge and skills."
    },
    {
        "name": "AP Statistics",
        "courseInfo":"AP Statistics is an introductory college-level statistics course that is centered around collecting, analyzing, and drawing conclusions from data. Students cultivate a strong understanding of how to use technology, critical thinking and investigations to make data-based conclusions and predictions. While it is classified as a math course; it is very conceptual-based, containing strong amounts of explanation and writing."
    },
    {
        "name": "AP Computer Science A",
        "courseInfo":"AP Computer Science A (CSA) is an introductory class to Computer Science. It can be compared to a college class that is centered around the Java programming language. You will explore the core concepts, methods, and applications of analyzing and creating Java programs. "
    },
    {
        "name": "AP Computer Science Principles",
        "courseInfo":"AP Computer Science Principles is an introductory computing class covering the main principles of Computer Science, with students learning to design and analyze real-world applications in the field of programming. Basic concepts such as algorithms, programs, and other topics make up the core of the class.  It is said to be one of the easiest AP exams to pass."
    }
    
    
]

let ssClasses = 
[
    {
        "name":"AP World History: Modern",
        "courseInfo":"In this class, you’ll learn to cultivate an understanding of World History from c. 1200 CE to the present through analyzing historical sources and learning to make connections and craft historical arguments. You will explore concepts such as cultural emergence; growth of trade; migration and settlement; politics and power; empires and imperialism; growth of independent nations; and global warfare."
    },
    {
        "name":"AP United States History",
        "courseInfo":"In this class, you’ll learn to cultivate an understanding of U.S History from c. 1491 CE to the present through analyzing historical sources and learning to make connections and craft historical arguments as they explore concepts like American and national identity; work, exchange, and technology; geography and the environment; migration and settlement; politics and power; America in the world; American and regional culture; and social structures."
    },
    {
        "name":"AP Human Geography",
        "courseInfo":"In this class, you will learn how to analyze patterns and processes of humans in politics, migration, agriculture, and globalization through several models, population pyramids, maps, and graphs. You will also learn how to recognize patterns in human development, culture, and conflicts across the world. The class is very vocab-heavy, and you will need a general understanding of concepts to succeed. "
    },
    {
        "name":"AP United States Government and Politics",
        "courseInfo":"AP US Government and Politics is an introductory college-level course in the government and politics of the United States. Students gain a better understanding of the political concepts covered in the course units, including your ability to analyze the foundational documents and to apply Supreme Court decisions you studied in the course to real-life scenarios."
    },
    {
        "name":"AP Comparative Government and Politics",
        "courseInfo":"AP Comparative Government and Politics is an introductory college-level course in comparative politics. Students gain a better understanding of comparative government and politics by analyzing data and text-based sources, while also addressing several topics such as leadership and authority, stability, democratization, and types of political analysis."
    },
    {
        "name":"AP Macroeconomics",
        "courseInfo":"AP Macroeconomics is an introductory college-level course in economics. Students gain a better understanding of economic principles that apply to an economic system as a whole. The use of graphs, charts, and data to analyze, describe, and explain economic concepts will be present as well. "
    },
    {
        "name":"AP Microeconomics ",
        "courseInfo":"AP Microeconomics is an introductory college-level course in economics. Students gain a better understanding of the behavior of individuals within an economic system as a whole. The use of graphs, charts, and data to analyze and describe economic concepts will be present. "
    },
    {
        "name":"AP Psychology",
        "courseInfo":"In this class, you’ll explore ideas about behavioral and mental processes. You’ll learn different concepts of Psychology through reading and analyzing research data."
    }
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
        sciCoursePg(i-1);
    }
}

function mathCoursePg(id)
{
        //Ap ab
        if(id === 0)
        {
            document.getElementById('class1').innerHTML = mathClasses[id]["name"];
            document.getElementById('class1Blurb').innerHTML = mathClasses[id]["courseInfo"];
        }
        //Ap bc
        if(id === 1)
        {
            document.getElementById('class2').innerHTML = mathClasses[id]["name"];
            document.getElementById('class2Blurb').innerHTML = mathClasses[id]["courseInfo"];
        }
        //Ap stats
        if(id === 2)
        {
            document.getElementById('class3').innerHTML = mathClasses[id]["name"];
            document.getElementById('class3Blurb').innerHTML = mathClasses[id]["courseInfo"];
        }
        //Ap csa
        if(id === 3)
        {
            document.getElementById('class4').innerHTML = mathClasses[id]["name"];
            document.getElementById('class4Blurb').innerHTML = mathClasses[id]["courseInfo"];
        }
        //Ap csp
        if(id === 4)
        {
            document.getElementById('class5').innerHTML = mathClasses[id]["name"];
            document.getElementById('class5Blurb').innerHTML = mathClasses[id]["courseInfo"];
        }
        
    for(let i = id; i > -1; i--)
    {
        mathCoursePg(i-1);
    }
}

function ssCoursePg(id)
{
        //Ap wh
        if(id === 0)
        {
            document.getElementById('class1').innerHTML = ssClasses[id]["name"];
            document.getElementById('class1Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
        //Ap ush
        if(id === 1)
        {
            document.getElementById('class2').innerHTML = ssClasses[id]["name"];
            document.getElementById('class2Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
        //Ap hug
        if(id === 2)
        {
            document.getElementById('class3').innerHTML = ssClasses[id]["name"];
            document.getElementById('class3Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
        //Ap govpol
        if(id === 3)
        {
            document.getElementById('class4').innerHTML = ssClasses[id]["name"];
            document.getElementById('class4Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
        //Ap compgov
        if(id === 4)
        {
            document.getElementById('class5').innerHTML = ssClasses[id]["name"];
            document.getElementById('class5Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
        //Ap macro
        if(id === 5)
        {
            document.getElementById('class6').innerHTML = ssClasses[id]["name"];
            document.getElementById('class6Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
        //Ap micro
        if(id === 6)
        {
            document.getElementById('class7').innerHTML = ssClasses[id]["name"];
            document.getElementById('class7Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
        //Ap psych
        if(id === 7)
        {
            document.getElementById('class8').innerHTML = ssClasses[id]["name"];
            document.getElementById('class8Blurb').innerHTML = ssClasses[id]["courseInfo"];
        }
    
    for(let i = id; i > -1; i--)
    {
        ssCoursePg(i-1);
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
