// All of this code was mostly made by Aditya Pulla 👍 

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
            // ✅ Reset quiz only when leaving the Quiz page
            if(pages[i].id == "Quiz")
            {
                resetQuiz();
            }
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

function resetQuiz()
{
        let answers = document.querySelectorAll('.answer'); // Select all radio buttons
        answers.forEach(answer => answer.checked = false); // Uncheck all
        document.getElementById("quizResult").innerText = ""; // Clear result text
}

function checkQuizAnswers()
{
        let answer1 = document.getElementById("B1");
        let answer2 = document.getElementById('C2');
        let answer3 = document.getElementById('B3');
        let answer4 = document.getElementById('D4');
        let answer5 = document.getElementById('A5');
        let score = 0; 
        if(answer1.checked)
        {
                score++
        }
        if(answer2.checked)
        {
                score++
        }
        if(answer3.checked)
        {
                score++
        }
        if(answer4.checked)
        {
                score++
        }
        if(answer5.checked)
        {
                score++
        }
        document.getElementById("quizResult").innerText = `You got ${score}/5 correct!`
}
