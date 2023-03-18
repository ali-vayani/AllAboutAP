//Instance variables
let currentId;
let title = document.getElementsByClassName('articleHeader');
let exam = document.getElementsByClassName('examDate');
let courseInfo = document.getElementsByClassName('courseInfo');
let mcqInfo = document.getElementsByClassName('mcqInfo');
let mcqInfo1 = document.getElementsByClassName('mcqInfo1');
let mcqInfo2 = document.getElementsByClassName('mcqInfo2');
let mcqInfo3 = document.getElementsByClassName('mcqInfo3');
let xtraMcqInfo = document.getElementsByClassName('xtraMcqInfo');
let xxraMcqInfo = document.getElementsByClassName('xxtraMcqInfo');
let frqInfo = document.getElementsByClassName('frqInfo');
let frqT1 = document.getElementsByClassName('frqT1');
let frqT1Info = document.getElementsByClassName('frqT1Info');
let frqT1Infox2 = document.getElementsByClassName('frqT1Infox2');
let frqT2 = document.getElementsByClassName('frqT2');
let frqT2Infox2 = document.getElementsByClassName('frqT2Infox2');
let frqT2Info = document.getElementsByClassName('frqT2Info');
let frqT3 = document.getElementsByClassName('frqT3');
let frqT3Info = document.getElementsByClassName('frqT3Info');
let unit1 = document.getElementsByClassName('unit1');
let unit2 = document.getElementsByClassName('unit2');
let unit3 = document.getElementsByClassName('unit3');
let unit4 = document.getElementsByClassName('unit4');
let unit5 = document.getElementsByClassName('unit5');
let unit6 = document.getElementsByClassName('unit6');
let unit7 = document.getElementsByClassName('unit7');
let unit8 = document.getElementsByClassName('unit8');
let diff = document.getElementsByClassName('difficultyScale');
let study1 = document.getElementsByClassName('study1');
let study2 = document.getElementsByClassName('study2');
let resource1 = document.getElementsByClassName('resource1');
let resource2 = document.getElementsByClassName('resource2');
let resource3 = document.getElementsByClassName('resource3');
let compare =  document.getElementsByClassName('comparabilityClass');
let misc1 = document.getElementsByClassName('misc1');
let misc2 = document.getElementsByClassName('misc2');
let misc3 = document.getElementsByClassName('misc3');
//for charts
let donughtChart;
let barChart;
//Spanish lit specific 
let s1A = document.getElementsByClassName('s1A');
let s1B = document.getElementsByClassName('s1B');
let set1 = document.getElementsByClassName('set1');
let set2 = document.getElementsByClassName('set2');
let set3 = document.getElementsByClassName('set3');


//Clases obj
let classes = 
[
    //AP Lang Comp === 0
    {
        "barChart": '\barCharts\English Language Bar Chart.js',
        "name": "AP English Language and Composition",
        "courseInfo": "&#x2022 In this class you’ll learn how to understand writing and rhetorical arguments through reading, analyzing, and writing texts. You’ll explore topics such as rhetorical situations, claims and evidence, reasoning and organization, and style.",
        "examDate": " Tuesday, May 9th 8:00 AM",
        "mcqInfo": " 45 Questions | 1 hour | 45% of the total score",
        "mcq1info": "&#x2022 23-25 Reading questions",
        "mcq2info": "&#x2022 20-22 Writing questions",
        "frqInfo":" 3 Questions | 2 hours and 15 mins |  55% of the total score",
        "frqT1": "&#x2022 Synthesis Question (6 pt)",
        "frqT1Info": "&#x2022 You’re provided with 6 - 7 texts about a specific topic. You’re asked to create an argument that combines and cites at least 3 of the sources to support your thesis",
        "frqT2": "&#x2022 Rhetorical Analysis (6 pt)",
        "frqT2Info":"&#x2022 You’ll read a nonfiction text and analyze the writes language choices and their intended meaning to the text.",
        "frqT3": "&#x2022 Argument (6 pt)",
        "frqT3Info": "&#x2022 You’ll be asked to create an evidence-based argument based on a given topic.",
        "unit1": " 1. Rhetorical Situation: Reading",
        "unit2": " 2. Rhetorical Situation: Writing",
        "unit3": " 3. Claims and Evidence: Reading",
        "unit4": " 4. Claims and Evidence: Writing",
        "unit5": " 5. Reasoning and Organization: Reading",
        "unit6": " 6. Reasoning and Organization: Writing",
        "unit7": " 7. Style: Reading",
        "unit8": " 8. Style: Writing",
        "diff": "&#x2022 5.1/10",
        "study1": "&#x2022 Practice timing yourself on the various essays since you have 2 hours and 15 minutes for 3 essays",
        "study2": "&#x2022 Do practice passages from various online resources",
        "resource1": "&#x2022 Practice Material and Explanations: UWorld",
        "resource2": "&#x2022 Past FRQs",
        "resource3": "&#x2022 ",
        "compare": "&#x2022 AP English Literature and Composition",
        "misc1": "&#x2022 No prerequisite for AP Language and Composition",
        "misc2": "&#x2022 2 Semester class"
    },

    //AP Lit === 1
    {
        "barChart": 'AllAboutAP-main\barCharts\English Literature Bar Chart.js',
        "name": "AP English Literature and Composition",
        "courseInfo": "&#x2022 In this class you’ll learn how to grasp a better understanding of different literature through analyzing characters, settings, structure, perspective, figurative language, and literary analysis.",
        "examDate": " Wednesday, May 3rd 8:00 AM",
        "mcqInfo": " 55 Questions, 1 hour, 45% of the total score",
        "mcq1info": "&#x2022 2 of the passages will be fiction and 2 of the passages will be poetry.",
        "mcq2info": "",
        "frqInfo":" 3 Questions, 2 hours, 55% of the total score",
        "frqT1": "Poetry Analysis",
        "frqT1Info": "&#x2022 Literary analysis of a specific poem",
        "frqT2": "&#x2022 Prose Fiction Analysis",
        "frqT2Info":"&#x2022 Literary analysis of a fiction passage ",
        "frqT3": "&#x2022  Literary Argument",
        "frqT3Info": "&#x2022 An analysis of a specific concept, issue, or element in a work selected by the student. ",
        "unit1": " &#x2022 Unit 1, 4, and 7: Short Fiction",
        "unit2": " &#x2022 Units 2, 5, and 8: Poetry",
        "unit3": " &#x2022 Units 3, 6, and 9: Longer Fiction or Drama",
        "unit4": " ",
        "unit5": " ",
        "unit6": " ",
        "unit7": " ",
        "unit8": " ",
        "diff": "&#x2022 7.4/10",
        "study1": "&#x2022 ",
        "study2": "&#x2022 ",
        "resource1": "&#x2022 ",
        "resource2": "&#x2022 ",
        "resource3": "&#x2022 ",
        "compare": "&#x2022 Comparability: AP English Language and Composition ",
        "misc1": "&#x2022 No prerequisite for AP Literature and Composition",
        "misc2": "&#x2022 2 Semester class"
    },
    //Spanish lang
    {
        "barChart": 'AllAboutAP-main\barCharts\Spanish Language Bar Chart.js',
        "name": "AP Spanish Language and Culture",
        "courseInfo": "&#x2022 This is a college-level course that is based on the Spanish language, as well as its influence on the Hispanic culture, communities, traditions, and families. Many of the students taking it will have already had some Spanish-speaking background, which is taken into account in the 80% pass rate across the last few years. If you do not have a Spanish-speaking background, expect a rigorous amount of coursework and studying if you are looking to succeed in the exam. ",
        "examDate": " Wednesday, May 10 8:00 AM",
        "mcqInfo": " Section 1A: 40 minutes  |  30 questions  |  23% of total score",
        "mcq1info": "&#x2022 Involves interpretive communication: print materials.",
        "mcq2info": "&#x2022 Section 1B: MCQ with Audio:  55 minutes  |  35 questions  |  27% of  total score",
        "frqInfo":" Involves interpretive communication: audio texts, and audio combined with print texts",
        "frqT1": "  Section 2A: (Written)  1 hour and 10 minutes  |  2 questions |  25% of total score",
        "frqT1Info": "&#x2022 Interpersonal Writing:  read and reply to an email message (15 minutes)",
        "frqT1Infox2": "&#x2022 Presentational Writing: write an argumentative essay (55 minutes)",
        "frqT2": "&#x2022 Section 2B: (Spoken)  18 minutes  |  2 questions |  25% of total score",
        "frqT2Info":"&#x2022 Interpersonal Speaking: participate in 5 exchanges in a simulated conversation (20 seconds for each)",
        "frqT2Infox2": "&#x2022 Presentational Speaking: deliver a presentation (2 minutes long) over cultural comparison",
        "frqT3": "",
        "frqT3Info": "",
        "unit1": " Unit 1: Families in Different Societies",
        "unit2": " Unit 2: The Influence of Language and Culture on Identity",
        "unit3": " Unit 3: Influences of Beauty and Art",
        "unit4": " Unit 4: How Science and Technology Affect Our Lives",
        "unit5": " Unit 5: Factors that Impact the Quality of Life",
        "unit6": " Unit 6: Environmental, Political, and Societal Changes",
        "unit7": " ",
        "unit8": " ",
        "diff": "&#x2022 5.1/10",
        "study1": "&#x2022 ",
        "study2": "&#x2022 ",
        "resource1": "&#x2022 ",
        "resource2": "&#x2022 ",
        "resource3": "&#x2022 ",
        "compare": "&#x2022 Comparable to: AP Spanish Literature and Culture ",
        "misc1": "&#x2022 No Offical Prerequisites, however, some schools require a beginner level Spanish class to be taken first.",
        "misc2": "&#x2022 2 Semester Course"
    },
    //spanish lit
    {
        "barChart": 'AllAboutAP-main\barCharts\Spanish Literature Bar Chart.js',
        "name": "AP Spanish Literature and Culture",
        "courseInfo": "&#x2022 AP Spanish Literature and Culture is a college-level course that is based primarily on analyzing and comparing literary works from the Spanish-speaking world, as well as studying its influence on the Hispanic culture across a variety of texts, poems, and artworks. If you do not already have a Spanish-speaking background, expect a rigorous amount of coursework and studying if you are looking to succeed in the exam. ",
        "examDate": " Monday, May 1st 12:00 PM",
        "mcqInfo": "",
        "s1A":"&#x2022 Section 1A: 20 minutes  |  15 questions  |  10% of total score",
        "set1": "&#x2022 An excerpt from an interview with an author",
        "set2": "&#x2022 A recited poem (not on the required reading list)",
        "set3": "&#x2022 A presentation on a literary topic related to course content",
        "s1B":"&#x2022 Section 1B: 1 hour  |  50 questions  |  40% of  total score",
        "mcq1info":"&#x2022 Includes 6 sets of 7-10 questions based on readings from both in and out of the required reading list",
        "frqInfo":" 1 hour and 40 minutes  |  4 questions |  50% of total score",
        "frqT1": "&#x2022 2 Short Answer Questions (Suggested time:  ~30 mins | 15 mins each)",
        "frqT1Info": "&#x2022 Students explain how the given theme in an excerpt relates to the literary work from which it was taken ",
        "frqT1Infox2": "&#x2022 Students compare how a particular theme is represented in a given text and image",
        "frqT2": "&#x2022 2 Essay Questions (Suggested time: ~70 minutes | 35 minutes each)",
        "frqT2Info":"&#x2022 Students analyze how a given text represents the characteristics of a certain genre as well as a particular historical, cultural, or social context.",
        "frqT3": "",
        "frqT3Info": "&#x2022 Students analyze how a given text represents the characteristics of a certain genre as well as a particular historical, cultural, or social context.",
        "unit1": " Unit 1: La época medieval",
        "unit2": " Unit 2: El siglo XVI",
        "unit3": " Unit 3: El siglo XVII",
        "unit4": " Unit 4: La literatura romántica, realista y naturalista",
        "unit5": " Unit 5: La Generación del 98 y el Modernismo",
        "unit6": " Unit 6: Teatro y poesía del siglo XX",
        "unit7": " Unit 7: El Boom latinoamericano",
        "unit8": " Unit 8: Escritores contemporáneos de Estados Unidos, y España          ",
        "diff": "&#x2022 6.5/10",
        "study1": "&#x2022 ",
        "study2": "&#x2022 ",
        "resource1": "&#x2022 ",
        "resource2": "&#x2022 ",
        "resource3": "&#x2022 ",
        "compare": "&#x2022 Comparable to: AP English Literature and Composition (in Spanish)",
        "misc1": "&#x2022 Required Reading List: AP Spanish Literature required-reading-list",
        "misc2": "&#x2022 No Prerequisites",
        "misc3": "2 Semester Course"
    },
    {
        "name": "",
        "courseInfo": "&#x2022 ",
        "examDate": " ",
        "mcqInfo": " ",
        "mcq1info": "&#x2022 ",
        "mcq2info": "&#x2022 ",
        "frqInfo":" ",
        "frqT1": " ",
        "frqT1Info": "&#x2022 ",
        "frqT2": "&#x2022 ",
        "frqT2Info":"&#x2022 ",
        "frqT3": "&#x2022 ",
        "frqT3Info": "&#x2022 ",
        "unit1": " ",
        "unit2": " ",
        "unit3": " ",
        "unit4": " ",
        "unit5": " ",
        "unit6": " ",
        "unit7": " ",
        "unit8": " ",
        "diff": "&#x2022 ",
        "study1": "&#x2022 ",
        "study2": "&#x2022 ",
        "resource1": "&#x2022 ",
        "resource2": "&#x2022 ",
        "resource3": "&#x2022 ",
        "compare": "&#x2022 ",
        "misc1": "&#x2022 ",
        "misc2": "&#x2022 "
    },
];

//Gets the id of the courseGridPage div that was clicked and stores it
function currentIdChange(id)
{
    localStorage.setItem("currentId", id);
}


//Sets the text on the course info page
function settingText()
{
    currentId = localStorage.getItem("currentId");
    donughtChart = document.getElementById('donughtChart');
    barChart = document.getElementById('barChart');
    
    //barChart.setAttribute('src', classes[currentId]["barChart"])

    barChart.setAttribute('src', "langChart.js")

    title[0].innerHTML = classes[currentId]["name"];
    exam[0].innerHTML = exam[0].innerHTML + classes[currentId]["examDate"];
    courseInfo[0].innerHTML = classes[currentId]["courseInfo"];
    mcqInfo[0].innerHTML = mcqInfo[0].innerHTML + classes[currentId]["mcqInfo"];
    xtraMcqInfo[0].innerHTML = classes[currentId]["mcq1info"];
    xxraMcqInfo[0].innerHTML = classes[currentId]["mcq2info"];
    frqInfo[0].innerHTML = frqInfo[0].innerHTML + classes[currentId]["frqInfo"];
    frqT1[0].innerHTML = classes[currentId]["frqT1"];
    frqT1Info[0].innerHTML = classes[currentId]["frqT1Info"];
    frqT2[0].innerHTML = classes[currentId]["frqT2"];
    frqT2Info[0].innerHTML = classes[currentId]["frqT2Info"];
    frqT3[0].innerHTML = classes[currentId]["frqT3"];
    frqT3Info[0].innerHTML = frqT3Info[0].innerHTML + classes[currentId]["frqT3Info"];
    unit1[0].innerHTML = classes[currentId]["unit1"];
    unit2[0].innerHTML = classes[currentId]["unit2"];
    unit3[0].innerHTML = classes[currentId]["unit3"];
    unit4[0].innerHTML = classes[currentId]["unit4"];
    unit5[0].innerHTML = classes[currentId]["unit5"];
    unit6[0].innerHTML = classes[currentId]["unit6"];
    unit7[0].innerHTML = classes[currentId]["unit7"];
    unit8[0].innerHTML = classes[currentId]["unit8"];
    diff[0].innerHTML = classes[currentId]["diff"];
    study1[0].innerHTML = classes[currentId]["study1"];
    study2[0].innerHTML = classes[currentId]["study2"];
    resource1[0].innerHTML = classes[currentId]["resource1"];
    resource2[0].innerHTML = classes[currentId]["resource2"];
    resource3[0].innerHTML = classes[currentId]["resource3"];
    compare[0].innerHTML = classes[currentId]["compare"];
    misc1[0].innerHTML = classes[currentId]["misc1"];
    misc2[0].innerHTML = classes[currentId]["misc2"];

    //Spanish lang specific
    if(currentId == 2)
    {
        frqT1Infox2[0].innerHTML = classes[currentId]["frqT1Infox2"];
        frqT2Infox2[0].innerHTML = classes[currentId]["frqT2Infox2"];
    }

    //Spanish Lit specifics
    if(currentId == 3)
    {
        s1A[0].innerHTML = classes[currentId]["s1A"];
        s1B[0].innerHTML = classes[currentId]["s1B"];
        set1[0].innerHTML = classes[currentId]["set1"];
        set2[0].innerHTML = classes[currentId]["set2"];
        set3[0].innerHTML = classes[currentId]["set3"];
        misc3[0].innerHTML = classes[currentId]["misc3"];
        frqT1Infox2[0].innerHTML = classes[currentId]["frqT1Infox2"];
    }


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
