let postTitle = '';

const titleInputNode = document.querySelector ('.js-title-input');
const publicationBtnNode = document.querySelector ('.js-publication-btn');

publicationBtnNode.addEventListener ('click', function () {

    postTitle = titleInputNode.value;

    console.log (postTitle);


});