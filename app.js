let counter = 0;
function changeColor()
{
    counter++;
    
    if(counter % 2 != 0)
    {
        document.body.style.color = "#3f3f3f";
        document.body.style.background = "#f7f7f7";
        document.body.style.transition = "500ms ease-in";
        document.getElementById('modeBtn').style.background = "#f7f7f7";
        document.getElementById('modeBtn').style.color = "#3f3f3f";
        document.getElementById('footer').style.color = "#f7f7f7";
        document.getElementById('modeBtn').style.transition = "500ms ease-in";
    }
    else
    {
        document.body.style.color = "#f7f7f7";
        document.body.style.background = "#3f3f3f";
        document.getElementById('modeBtn').style.background = "#3f3f3f";
        document.getElementById('modeBtn').style.color = "#f7f7f7";
        document.getElementById('footer').style.color = "#3f3f3f";
        document.getElementById('modeBtn').style.transition = "500ms ease-in";
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