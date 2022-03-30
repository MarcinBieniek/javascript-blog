{

  'use strict';

// [step 1]

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

/* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);

/* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');

}


// [step 2]

const optAticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector  = '.post-author',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = '5';
    optCloudClassPrefix = 'tag-size-';


const generateTitleLinks = function(customSelector = '') {

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);

    function clearMessages(){
        titleList.innerHTML = '';
    }

    clearMessages()

    /* [DONE] for each article */

    const allArticles = document.querySelectorAll(optAticleSelector + customSelector);

    let html = '';

    for(let oneArticle of allArticles){

        /* [DONE] get the article id */

        const articleID = oneArticle.getAttribute('id');

        /* [DONE] find the title element */
         /* [DONE] get the title from the title element */

        const articleTitle = oneArticle.querySelector(optTitleSelector).innerHTML;

        /* [DONE] create HTML of the link */

        const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';

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

// [step 3 / step 7 NEW / step 8 - add calculateTagsParams function]

const calculateTagsParams = function(tags){

  const params = {max: 0, min: 999999};

    for(let tag in tags){
        params.max = Math.max(tags[tag], params.max);
        params.min = Math.min(tags[tag], params.min);
    }

  return params;

}

const calculateTagsClass = function(count, params){

  const normalizedCount = count - params.min;
  const normalizedMax = params.max - params.min;
  const percentage = normalizedCount / normalizedMax;
  const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

  return optCloudClassPrefix + classNumber;

}

function generateTags(){

  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  let html = '';

  /* [DONE] find all articles */

  const allArticles = document.querySelectorAll(optAticleSelector);

  /* [DONE] START LOOP: for every article: */

  for(let article of allArticles){

    /* [DONE ]find tags wrapper */

    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* [DONE] make html variable with empty string */

    /* [DONE] get tags from data-tags attribute */

    const dataTags = article.getAttribute('data-tags');

    /* [DONE] split tags into array */

    const tagsArray = dataTags.split(' ');

    /* [DONE] START LOOP: for each tag */

      for(let tag of tagsArray){

      /* [DONE] generate HTML of the link */

      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';

      /* [DONE] add generated code to html variable */

      html = html + linkHTML + ' ';

      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]) {
        /* [NEW] add generated code to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }

    /* [DONE] END LOOP: for each tag */

      }

    /* [DONE] insert HTML of all the links into the tags wrapper */

    tagsWrapper.innerHTML = html;

  /* [DONE] END LOOP: for every article: */

  }

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  const tagsParams = calculateTagsParams(allTags);

  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';

  /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){

    /* [NEW] generate code of a link and add it to allTagsHTML */

      allTagsHTML += '<li><a class="' + calculateTagsClass(allTags[tag], tagsParams) + '"href="#tag-' + tag + '">' + tag + ' ' + '</a></li>';

    /* [NEW] END LOOP: for each tag in allTags: */

    }

  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;

}

generateTags();


// [step 4 - add action after click on tag]

function tagClickHandler(event){

  /* [DONE] prevent default action for this event */

  event.preventDefault();

  /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');

  /* [DONE] START LOOP: for each active tag link */

  for(let activeTag of activeTags){

    /* [DONE] remove class active */

    activeTag.classList.remove('active');

  /* [DONE] END LOOP: for each active tag link */

  }

  /* find all tag links with "href" attribute equal to the "href" constant */

  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

  /* START LOOP: for each found tag link */

  for(let tagLink of tagLinks){

    /* add class active */

    tagLink.classList.add('active');

  /* END LOOP: for each found tag link */

  }

  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');

}

function addClickListenersToTags(){
  /* find all links to tags */

  const links = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */

  for(let link of links){

    /* add tagClickHandler as event listener for that link */

   link.addEventListener('click', tagClickHandler);

  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

// [step 5 - adding authors]

const generateAuthors = function(){

  /* [DONE] find all articles */

  const allArticles = document.querySelectorAll(optAticleSelector);

  /* [DONE] START LOOP: for every article: */

  for(let article of allArticles){

    /* [DONE] find autors wrapper */

    const authorsWrapper = article.querySelector(optArticleAuthorSelector);

    /* [DONE] make html variable with empty string */

    let html = '';

    /* [DONE] get authors from data-authors attribute */

    const author = article.getAttribute('data-author');

    /* generate HTML of the link */

    const linkHTML = '<a href="#author-' + author + '">' + author + ' ' + '</a>';

    /* add generated code to html variable */

    html = html + linkHTML;

    /* insert HTML of all the links into the authors wrapper */

    authorsWrapper.innerHTML = html;

  /* END LOOP: for every author: */

  }

}

generateAuthors();

  /* [step 6 - add action after click on author] */

  const authorClickHandler = function(event){

    /* [DONE] prevent default action for this event / */

    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');

    /* [DONE] make a new constant "author" and extract author from the "href" constant */

    const author = href.replace('#author-', '');

    /* [DONE] find all author links with class active */

    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');

    /* [DONE] START LOOP: for each active author link */

    for(let activeAuthorLink of activeAuthorLinks){

      /* [DONE] remove class active */

      activeAuthorLink.classList.remove('active');

    /* [DONE] END LOOP: for each active tag link */

    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found author link */

    for(let authorLink of authorLinks){

      /* add class active */

      authorLink.classList.add('active');

    /* END LOOP: for each found tag link / */

    }

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-author="' + author + '"]');

  }

  function addClickListenersToAuthors(){

    /* find all links to authors */

    const linksAuthor = document.querySelectorAll('a[href^="#author-"]');

    /* START LOOP: for each author */

    for(let linkAuthor of linksAuthor){

      /* add tagClickHandler as event listener for that link */

     linkAuthor.addEventListener('click', authorClickHandler);

    /* END LOOP: for each link */
    }
  }

  addClickListenersToAuthors();

}


