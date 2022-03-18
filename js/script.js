{

'use strict'

/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

// click event handler on left side menu

    const titleClickHandler = function(event){
        event.preventDefault();
        const clickedElement = this;
        console.log('Link was clicked!');
        console.log(event);
        console.log('clickedElement (with plus): ' + clickedElement);

/* [DONE] remove class 'active' from all article links */

    const activeLinks = document.querySelectorAll('.titles a.active');  

    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }  

/* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

/* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');  

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    } 

/* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    
    console.log("Clicked article href atribute is :" + articleSelector);
   
/* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);

    console.log("Clicked article id is :" + targetArticle);
   
/* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');

}

// Generate article title list function - Option start with every refreshing

const optAticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

const generateTitleLinks = function() {

    console.log('GTL function works');

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);

    function clearMessages(){
        titleList.innerHTML = '';
    }

    clearMessages()

    /* [IN PROGRESS] for each article */

    const allArticles = document.querySelectorAll(optAticleSelector);

    for(let oneArticle of allArticles){
        


    } 


        /* get the article id */

        /* find the title element */

        /* get the title from the title element */

        /* create HTML of the link */

        /* insert link into titleList */

}

// Hide/show article function - option starts with

const links = document.querySelectorAll('.titles a');

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }

generateTitleLinks()

}

/*

usuń zawartość listy linków w lewej kolumnie,
następnie dla każdego artykułu:
odczytaj jego id i zapisz je do stałej,
znajdź element z tytułem i zapisz jego zawartość do stałej,
na podstawie tych informacji stwórz kod HTML linka i zapisz go do stałej,
wstaw stworzony kod HTML do listy linków w lewej kolumnie.


zapisywanie wartości do stałej nie powinno już być problemem – znamy już zmienne let i stałe const,
umiemy znaleźć pojedynczy element za pomocą selektora CSS – wykorzystujemy funkcję querySelector,
w poprzednim module, w pliku functions.js poznaliśmy też sposób na odczytanie lub zmianę (w tym wyczyszczenie) 
zawartości elementu – za pomocą jego właściwości innerHTML,
niedawno nauczyliśmy się odczytywać atrybuty elementu, więc bez problemu odczytamy id elementu – wykorzystamy 
funkcję getAttribute,
stworzenie kodu HTML będzie po prostu połączeniem tekstu (kod HTML jest tekstem) ze stałymi przechowującymi id i tytuł 
artykułu,
dodawanie linka do listy można też wykonać za pomocą innerHTML.

Do samodzielnego wykonania tego zadania przyda Ci się informacja, że querySelector do tej pory wykonywaliśmy zawsze na
 elemencie document, ale równie dobrze możemy wykonać tę funkcję na dowolnym innym elemencie. Dzięki temu będziemy 
 mogli wyszukać tytuł w konkretnym artykule! */



