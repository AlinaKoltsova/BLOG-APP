let post = {

    title: '',
    desc: '',
};

const titleInputNode = document.querySelector ('.js-title-input');
const descInputNode = document.querySelector ('.js-desc-input');
const publicationBtnNode = document.querySelector ('.js-publication-btn');
const postsNode = document.querySelector ('.js-posts');

publicationBtnNode.addEventListener ('click', function () {

    const postFromUser = getPostFromUser();

    setPost(postFromUser);

    renderPost();

});

function getPostFromUser () {

    const title = titleInputNode.value;
    const desc = descInputNode.value;

    return {

        title: title,
        desc: desc,
    };
}

function setPost (newPost) {

    post = newPost;

}

function getPost () {

    return post;
}

function renderPost () {

    const post = getPost ();

    const postHTML = `
    <div class = 'post'>
        <p class = 'post__title'>${post.title} </p>
        <p class = 'post__desc'>${post.desc} </p>
    </div>
    `;

    postsNode.innerHTML = postHTML;
    
}