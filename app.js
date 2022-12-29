let counter = 0;
function changeColor()
{
    counter++;
    window.localStorage.setItem('newCounter', counter);
    
    if(counter % 2 != 0)
    {

        document.getElementById('colorMode').style.color = "#3f3f3f";
        document.getElementById('modeBtn').style.color = "#3f3f3f";
        document.getElementById('colorMode').style.background = "#f7f7f7";
        document.getElementById('modeBtn').style.background = "#f7f7f7";
        document.getElementById('colorMode').style.transition = "500ms ease-in";
        document.getElementById('modeBtn').style.transition = "500ms ease-in";

    }
    else
    {
        document.getElementById('colorMode').style.color = "#f7f7f7";
        document.getElementById('colorMode').style.background = "#3f3f3f";
        document.getElementById('modeBtn').style.background = "#3f3f3f";
        document.getElementById('modeBtn').style.color = "#f7f7f7";
        document.getElementById('colorMode').style.transition = "500ms ease-in";
    }
        
}
function courseColorChange()
{
    let counter = localStorage.getItem('newCounter');
    if(counter % 2 != 0)
    {

        document.getElementById('colorMode').style.color = "#f7f7f7";
        document.getElementById('colorMode').style.background = "#546fdb";
        document.getElementById('colorMode').style.transition = "500ms ease-in";
        document.body.style.background = "#f7f7f7";
        document.body.style.transition = "500ms ease-in";

    }
    else
    {
        document.getElementById('colorMode').style.color = "#f7f7f7";
        document.getElementById('colorMode').style.background = "#3f3f3f";
        document.getElementById('colorMode').style.transition = "500ms ease-in";
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
