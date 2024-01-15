let postTitle = '';

const titleInputNode = document.querySelector ('.js-title-input');
const publicationBtnNode = document.querySelector ('.js-publication-btn');
const postsNode = document.querySelector ('.js-posts');

publicationBtnNode.addEventListener ('click', function () {

    postTitle = titleInputNode.value;

    postsNode.innerText = postTitle;

    console.log (postTitle);

});