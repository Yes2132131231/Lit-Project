// all of dis was code was made mostly by Aditya Pulla :thumbs up:// 
const pages = document.querySelectorAll('.page')
function showPage(pageId)
{
    for( let i = 0; i < pages.length; i++)
    {
        if( pages[i].id == pageId)
        {  
            pages[i].style.display = 'block';
            pages[i].style.opacity = "0";
            pages[i].style.position = "relative";
            pages[i].style.bottom = "-200px";
        }
        else
        { 
            pages[i].style.display = 'none';
        }
        
        
    }   
    setTimeout(() => animatethis(pageId), 4)
}
showPage("titleScreen");

function animatethis(pageId)
{
    let activePage = document.getElementById(pageId);

    if (activePage) 
    {
        activePage.style.transition = "opacity 0.5s ease-in-out, bottom 0.5s ease-in-out";
        activePage.style.opacity = "1"; 
        activePage.style.bottom = "0px";
    }

}