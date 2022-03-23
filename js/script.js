{

  'use strict';

    // click event handler on left side menu

const titleClickHandler = function(event){
        event.preventDefault();
        const clickedElement = this;

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
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

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

generateTitleLinks();

// Tag generator

function generateTags(){

  /* [DONE] find all articles */

  const allArticles = document.querySelectorAll(optAticleSelector);

  console.log('Pokaz mi: ' + allArticles);

  /* [DONE] START LOOP: for every article: */

  for(let article of allArticles){

    /* [DONE ]find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    console.log('tagsWrapper is: ' + tagsWrapper);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get tags from data-tags attribute */

    const allTags = article.getAttribute('data-tags');

    console.log('Stała allTags pokazuje: ' + allTags);

    /* [DONE] split tags into array */

    const tagsArray = allTags.split(' ');

    /* [DONE] START LOOP: for each tag */

      for(let singleTag of tagsArray){

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + singleTag + '">' + singleTag + '</a></li>';

      /* [DONE] add generated code to html variable */

      let html = linkHTML;

      console.log('Wygenerowany link wygląda tak: ' + html)

    /* [DONE] END LOOP: for each tag */

      }

    /* insert HTML of all the links into the tags wrapper */

    tagsWrapper.innerHTML = html;

  /* END LOOP: for every article: */

  }

}

generateTags();








}
