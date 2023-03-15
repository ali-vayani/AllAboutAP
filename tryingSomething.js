

let apLangComp = 
{
    "name": "AP English Language and Composition",
    "courseInfo": " In this class you’ll learn how to understand writing and rhetorical arguments through reading, analyzing, and writing texts. You’ll explore topics such as rhetorical situations, claims and evidence, reasoning and organization, and style.",
    "examDate": " Tuesday, May 9th 8:00 AM",
    "mcqInfo": " 45 Questions | 1 hour | 45% of the total score",
    "readingMcqInfo": " 23-25 Reading questions",
    "writingMcqInfo": " 20-22 Writing questions",
    "frqInfo":" 3 Questions | 2 hours and 15 mins |  55% of the total score",
    "frqT1": " Synthesis Question (6 pt)",
    "frqT1Info": " You’re provided with 6 - 7 texts about a specific topic. You’re asked to create an argument that combines and cites at least 3 of the sources to support your thesis",
    "frqT2": " Rhetorical Analysis (6 pt)",
    "frqT2Info":" You’ll read a nonfiction text and analyze the writes language choices and their intended meaning to the text.",
    "frqT3": " Argument (6 pt)",
    "frqT3Info": " You’ll be asked to create an evidence-based argument based on a given topic.",
    "unit1": " 1. Rhetorical Situation: Reading",
    "unit2": " 2. Rhetorical Situation: Writing",
    "unit3": " 3. Claims and Evidence: Reading",
    "unit4": " 4. Claims and Evidence: Writing",
    "unit5": " 5. Reasoning and Organization: Reading",
    "unit6": " 6. Reasoning and Organization: Writing",
    "unit7": " 7. Style: Reading",
    "unit8": " 8. Style: Writing",
    "diff": " 5.1/10",
    "study1": " ",
    "study2": " ",
    "resource1": " ",
    "resource2": " ",
    "resource3": " ",
    "compare": " AP English Literature and Composition",
    "misc1": " No prerequisite for AP Language and Composition",
    "misc2": " 2 Semester class"
};

let title = document.getElementsByClassName('articleHeader');
let exam = document.getElementsByClassName('examDate');
let courseInfo = document.getElementsByClassName('courseInfo');
let mcqInfo = document.getElementsByClassName('mcqInfo');
let xtraMcqInfo = document.getElementsByClassName('xtraMcqInfo');
let xxraMcqInfo = document.getElementsByClassName('xxtraMcqInfo');
let frqInfo = document.getElementsByClassName('frqInfo');
let frqT1 = document.getElementsByClassName('frqT1');
let frqT1Info = document.getElementsByClassName('frqT1Info');
let frqT2 = document.getElementsByClassName('frqT2');
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
function settingText()
{
    title[0].innerHTML = apLangComp["name"];
    exam[0].innerHTML = exam[0].innerHTML + apLangComp["examDate"];
    courseInfo[0].innerHTML = apLangComp["courseInfo"];
    mcqInfo[0].innerHTML = mcqInfo[0].innerHTML + apLangComp["mcqInfo"];
    xtraMcqInfo[0].innerHTML = xtraMcqInfo[0].innerHTML + apLangComp["readingMcqInfo"];
    xxraMcqInfo[0].innerHTML = xxraMcqInfo[0].innerHTML + apLangComp["writingMcqInfo"];
    frqInfo[0].innerHTML = frqInfo[0].innerHTML + apLangComp["frqInfo"];
    frqT1[0].innerHTML = frqT1[0].innerHTML + apLangComp["frqT1"];
    frqT1Info[0].innerHTML = frqT1Info[0].innerHTML + apLangComp["frqT1Info"];
    frqT2[0].innerHTML = frqT2[0].innerHTML + apLangComp["frqT2"];
    frqT2Info[0].innerHTML = frqT2Info[0].innerHTML + apLangComp["frqT2Info"];
    frqT3[0].innerHTML = frqT3[0].innerHTML + apLangComp["frqT3"];
    frqT3Info[0].innerHTML = frqT3Info[0].innerHTML + apLangComp["frqT3Info"];
    unit1[0].innerHTML = unit1[0].innerHTML + apLangComp["unit1"];
    unit2[0].innerHTML = unit2[0].innerHTML + apLangComp["unit2"];
    unit3[0].innerHTML = unit3[0].innerHTML + apLangComp["unit3"];
    unit4[0].innerHTML = unit4[0].innerHTML + apLangComp["unit4"];
    unit5[0].innerHTML = unit5[0].innerHTML + apLangComp["unit5"];
    unit6[0].innerHTML = unit6[0].innerHTML + apLangComp["unit6"];
    unit7[0].innerHTML = unit7[0].innerHTML + apLangComp["unit7"];
    unit8[0].innerHTML = unit8[0].innerHTML + apLangComp["unit8"];
    diff[0].innerHTML = diff[0].innerHTML + apLangComp["diff"];
    study1[0].innerHTML = study1[0].innerHTML + apLangComp["study1"];
    study2[0].innerHTML = study2[0].innerHTML + apLangComp["study2"];
    resource1[0].innerHTML = resource1[0].innerHTML + apLangComp["resource1"];
    resource2[0].innerHTML = resource2[0].innerHTML + apLangComp["resource2"];
    resource3[0].innerHTML = resource3[0].innerHTML + apLangComp["resource3"];
    compare[0].innerHTML = compare[0].innerHTML + apLangComp["compare"];
    misc1[0].innerHTML = misc1[0].innerHTML + apLangComp["misc1"];
    misc2[0].innerHTML = misc2[0].innerHTML + apLangComp["misc2"];
}


function coursePgTxt()
{
    document.getElementById('class1').innerHTML = apLangComp["name"];
    document.getElementById('class1Blurb').innerHTML = apLangComp["courseInfo"];
}