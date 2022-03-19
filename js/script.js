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

// Generate article title list function - this function starts with every refreshing

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

    /* [DONE] for each article */

    const allArticles = document.querySelectorAll(optAticleSelector);

    let html = '';

    for(let oneArticle of allArticles){
        
        /* [DONE] get the article id */

        const articleID = oneArticle.getAttribute('id');

        console.log('pobrany atrybut id to: ' + articleID);  

        /* [DONE] find the title element */
         /* [DONE] get the title from the title element */

        const articleTitle = oneArticle.querySelector(optTitleSelector).innerHTML;

        console.log('pobrany TYTUŁ to: ' + articleTitle);

        /* [DONE] create HTML of the link */

        const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';

        console.log(linkHTML);

        /* insert link into titleList 

        const titleList = document.querySelector(optTitleListSelector);

        titleList.insertAdjacentHTML('afterbegin', linkHTML); */
        
        html = html + linkHTML;

    }   

    titleList.innerHTML = html;    

    const links = document.querySelectorAll('.titles a');

    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }

}

// Hide/show article function - option starts with



generateTitleLinks();

}

