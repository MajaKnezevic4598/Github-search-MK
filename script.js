
// const url = `https://api.github.com/users/${username}/repos`


// const response = fetch(url);


function searchGitHubUser(username){

    const url = `https://api.github.com/users/${username}`;
    fetch(url).then(response=>response.json())
    .then(data =>{
        console.log(data);
        console.log(data.login);
        console.log(data.avatar_url);
        console.log(data.created_at);
        console.log(data.followers);
        console.log(data.following);
        console.log(data.public_repos);
        console.log(data.location);
        console.log(data.twitter_username);
    })

}

searchGitHubUser('MajaKnezevic4598')