let counter = 1;
function changeColor()
{
    window.localStorage.setItem('newCounter', counter);
    let counterNew = localStorage.getItem('newCounter');
    console.log(counterNew);
    
    if(counterNew % 2 == 0)
    {

        document.getElementById('colorMode').style.color = "#3f3f3f";
        document.getElementById('modeBtn').style.color = "#3f3f3f";
        document.getElementById('colorMode').style.background = "#f7f7f7";
        document.getElementById('modeBtn').style.background = "#f7f7f7";
        document.getElementById('colorMode').style.transition = "500ms ease-in";
        document.getElementById('modeBtn').style.transition = "500ms ease-in";
        counter++;

    }
    else
    {
        document.getElementById('colorMode').style.color = "#f7f7f7";
        document.getElementById('colorMode').style.background = "#3f3f3f";
        document.getElementById('modeBtn').style.background = "#3f3f3f";
        document.getElementById('modeBtn').style.color = "#f7f7f7";
        document.getElementById('colorMode').style.transition = "500ms ease-in";
        counter++;
    }
        
}
function courseColorChange()
{
    let counterNew = localStorage.getItem('newCounter');
    if(counterNew % 2 == 0)
    {
        const border = document.querySelectorAll('.border');
        let length = border.length;
        for(let i = 0; i < length; i++)
        {
            border[i].setAttribute('id', 'lightMode');
        }
        document.getElementById('sideBar').style.background = "#546fdb";
        document.getElementById('sideBar').style.transition = "500ms ease-in";
        document.body.style.background = "#f7f7f7";
        document.body.style.transition = "500ms ease-in";

    }
}

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

var sidebar = document.getElementById('sideBar');
var toggle = document.getElementById('toggle');
toggle.addEventListener('click', function()
{
    sidebar.classList.toggle('hidden');
});
