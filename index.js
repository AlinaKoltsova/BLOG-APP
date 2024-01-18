const posts = [];

const TITLE_VALIDATION_LIMIT = 100;
const DESC_VALIDATION_LIMIT = 200;

const titleInputNode = document.querySelector ('.js-title-input');
const descInputNode = document.querySelector ('.js-desc-input');
const publicationBtnNode = document.querySelector ('.js-publication-btn');
const postsNode = document.querySelector ('.js-posts');
const validationMessage = document.getElementById ('validationMessage');
const letterCounter = document.getElementById ('letterCounter');


publicationBtnNode.addEventListener ('click', function () {

    const postFromUser = getPostFromUser(); 

    addPost(postFromUser);

    renderPosts();

    document.getElementById("userDescInput").value = "";
    document.getElementById("userTitleInput").value = "";
    
});

titleInputNode.addEventListener ('input', validation);
descInputNode.addEventListener ('input', validation);

function validation () {

    const titleLength = titleInputNode.value.length;
    const descLength = descInputNode.value.length;
    

    if (titleLength > TITLE_VALIDATION_LIMIT) {

        validationMessage.innerText = `Длина заголовка превышает ${TITLE_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove ('validationMessage_hidden');
        publicationBtnNode.disabled = true;
        return;
    }

    if (descLength > DESC_VALIDATION_LIMIT) {

        validationMessage.innerText = `Длина описания превышает ${DESC_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove ('validationMessage_hidden');
        publicationBtnNode.disabled = true;
        return;
    }

    if (titleLength === 0 || descLength === 0 ) {

        publicationBtnNode.disabled = true;
        return;
    }

    validationMessage.classList.add ('validationMessage_hidden');
    publicationBtnNode.disabled = false;

}

function countCharacters()  {

    let userTitleInput = document.getElementById('userTitleInput').value;
    let userDescInput = document.getElementById('userDescInput').value;
    let TitleCount = TITLE_VALIDATION_LIMIT - userTitleInput.length;
    let DescCount = DESC_VALIDATION_LIMIT - userDescInput.length;
    document.getElementById('TitleCount').innerText = TitleCount;
    document.getElementById('DescCount').innerText = DescCount;
}

function getPostFromUser () {

    const title = titleInputNode.value;
    const desc = descInputNode.value;

    return {

        title: title,
        desc: desc,
    };
}

function addPost ({title, desc}) {

    const currentDatePost = new Date ();
    const months = [
        "января", "февраля", "марта",
        "апреля", "мая", "июня",
        "июля", "августа", "сентября",
        "октября", "ноября", "декабря"
      ];
    
    const russianMonth = months[currentDatePost.getMonth()];

    const formattedDate = `${currentDatePost.getDate()} ${russianMonth} ${currentDatePost.getFullYear()} 
    ${currentDatePost.getHours()}:${currentDatePost.getMinutes()}:${currentDatePost.getSeconds()}`


    posts.push ({

        formattedDate,
        title,
        desc,
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

        <p class = 'post__date'>${post.formattedDate} </p>
        <p class = 'post__title'>${post.title} </p>
        <p class = 'post__desc'>${post.desc} </p>
        </div>`
    
    });

    postsNode.innerHTML = postsHTML;
    
}