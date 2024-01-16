const posts = [];

const titleInputNode = document.querySelector ('.js-title-input');
const descInputNode = document.querySelector ('.js-desc-input');
const publicationBtnNode = document.querySelector ('.js-publication-btn');
const postsNode = document.querySelector ('.js-posts');

publicationBtnNode.addEventListener ('click', function () {

    const postFromUser = getPostFromUser(); 

    addPost(postFromUser);

    renderPosts();

});

function getPostFromUser () {

    const title = titleInputNode.value;
    const desc = descInputNode.value;

    return {

        title: title,
        desc: desc,
    };
}

function addPost ({title, desc}) {

    posts.push ({

        title: title,
        desc: desc,

    });

}

function getPosts () {

    return posts;
}

function renderPosts () {

    const post = getPosts ();

    let postsHTML = '';
   
    posts.forEach(post => {

        postsHTML += `<div class = 'post'>
        <p class = 'post__title'>${post.title} </p>
        <p class = 'post__desc'>${post.desc} </p>
        </div>`
    
    });

    postsNode.innerHTML = postsHTML;
    
}