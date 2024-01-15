let post = '';

const titleInputNode = document.querySelector ('.js-title-input');
const publicationBtnNode = document.querySelector ('.js-publication-btn');
const postsNode = document.querySelector ('.js-posts');

publicationBtnNode.addEventListener ('click', function () {

    const postFromUser = getPostFromUser();

    setPost(postFromUser);

    renderPost();

});

function getPostFromUser () {

    const post = titleInputNode.value;
    return post;
}

function setPost (newPost) {

    post = newPost;

}

function renderPost () {

    postsNode.innerText = post;
}