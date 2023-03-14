let apLangComp = 
{
    "name": "AP English Language and Composition",
    "courseInfo": "idk",
    "examDate": "Tuesday, May 9th 8:00 AM",
    "mcqInfo": "45 Questions | 1 hour | 45% of the total score"

};

let title = document.getElementsByClassName('articleHeader');
function settingText()
{
    title[0].innerHTML = apLangComp["name"];
}
