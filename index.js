const posts = [];

const TITLE_VALIDATION_LIMIT = 10;
const DESC_VALIDATION_LIMIT = 20;

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

});

titleInputNode.addEventListener ('input', validation);
descInputNode.addEventListener ('input', validation);

function validation () {

    const titleLength = titleInputNode.value.length;
    const descLength = descInputNode.value.length;
    
    if (titleLength > TITLE_VALIDATION_LIMIT) {

        validationMessage.innerText = `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove ('validationMessage_hidden');
        publicationBtnNode.disabled = true;
        return;
    }

    if (descLength > DESC_VALIDATION_LIMIT ) {

        validationMessage.innerText = `Длина описания не должна превышать ${DESC_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove ('validationMessage_hidden');
        publicationBtnNode.disabled = true;
        return;
    }

    validationMessage.classList.add ('validationMessage_hidden');
    publicationBtnNode.disabled = false;

}

function countCharacters()  {

    let userTitleInput = document.getElementById("userTitleInput").value;
    let userDescInput = document.getElementById("userDescInput").value;
    let charTitleCount = userTitleInput.length;
    let charDescCount = userDescInput.length;
    document.getElementById("charTitleCount").innerText = charTitleCount;
    document.getElementById("charDescCount").innerText = charDescCount;
}

function getPostFromUser () {

    const title = titleInputNode.value;
    const desc = descInputNode.value;

    return {

        title: title,
        desc: desc
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

    // data = new Date();
    // year = data.getFullYear ();
    // month = data.getMonth ();
    // day = data.getDate ();
    // hour = data.getHours ();
    // minutes = data.getMinutes ();

    // switch (month) {

    //     case 0: fmonth = "января"; break;
    //     case 1: fmonth = "февраля"; break;
    //     case 2: fmonth = "марта"; break;
    //     case 3: fmonth = "апреля"; break;
    //     case 4: fmonth = "мая"; break;
    //     case 5: fmonth = "июня"; break;
    //     case 6: fmonth = "июля"; break;
    //     case 7: fmonth = "августа"; break;
    //     case 8: fmonth = "сентября"; break;
    //     case 9: fmonth = "октября"; break;
    //     case 10: fmonth = "ноября"; break;
    //     case 11: fmonth = "декабря"; break;
    // }

    // fullDate = document.write (day + " " + fmonth + " " + year + " " + hour + ":" + minutes);

   
    posts.forEach(post => {

        postsHTML += `<div class = 'post'>

        <p class = 'post__title'>${post.title} </p>
        <p class = 'post__desc'>${post.desc} </p>
        </div>`
    
    });

    postsNode.innerHTML = postsHTML;
    
}

