const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let card = document.getElementById("card")


function loadPosts(){
    for(let i = 0; i < posts.length; i++){
        card.innerHTML += `<section class=new-post>
                <div class="container">
                    <img class="avatar"  src=${posts[i].avatar} alt="avatar of user">
                    <p class="name">${posts[i].name}</p>
                    <p class="location">${posts[i].location}</p>
                    <img  class="post user-post" src=${posts[i].post} alt="potrait of vangogh">
                </div>
                <div class="icon-pack">
                    <img class="icon icon-heart" src="images/icon-heart.png" alt="heart shaped icon">
                    <img class="icon"  src="images/icon-comment.png" alt="comment icon">
                    <img class="icon"  src="images/icon-dm.png" alt="message icon">
                </div>
                <p class="likes"><span class="numberOfLikes">${posts[i].likes}</span> likes</p>
                <p class="comment"><span>${posts[i].username}</span>${posts[i].comment}</p>
            </section>`

    }

}



loadPosts()
