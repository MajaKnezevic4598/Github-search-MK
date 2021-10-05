
const changeTheme = document.querySelector(".change-theme");
// const main = document.querySelector(".main");
// const moonSunImage = document.querySelector(".devifinder img");

// const devifinder = document.querySelector(".devifinder");
// const searchBox = document.querySelector(".search-box");
// const input = document.querySelector("input[type=text]");
// const githubInfo = document.querySelector(".github-info");
// const followers = document.querySelector(".followers");
// const infoParagrafs = githubInfo.querySelectorAll("p");
// const bottomImages = document.querySelectorAll(".bottom-info>div img");


const body = document.querySelector(".light-theme");

const moonSun = document.getElementById("svgMoonSun");
console.log(moonSun);
const sunUrl = "./starter-code/assets/icon-sun.svg";
const moonUrl = "./starter-code/assets/icon-moon.svg";

moonSun.addEventListener('load',function(){

    changeTheme.addEventListener("click",change)

})

    // moonSun.addEventListener("load",function(){
    // let objectUrl =moonSun.attributes.data.value;
   
    // console.log(objectUrl)
    
    // const svgClass = moonSun.contentDocument.querySelector("svg");  

//      let objectUrl = moonSun.attributes.data.value;
//         changeTheme.addEventListener("click",function(){
           
//             if(objectUrl == moonUrl) {
//                 console.log('mesec je');
               
//                 moonSun.setAttribute("data","/starter-code/assets/icon-sun.svg");
//                 console.log(objectUrl)
//             }
//             if(objectUrl == sunUrl){
//                 console.log('sada je sunce')
//                 moonSun.setAttribute("data","/starter-code/assets/icon-moon-svg");
//             }
          
//             // moonSun.setAttribute("data", "./starter-code/assets/icon-sun.svg");
//             // console.log(moonSun)
//         //   const documentMoon = moonSun.contentDocument.querySelector(".moon");
//         //   documentMoon.querySelector("path").setAttribute("fill","#fff");
//         // console.log(documentMoon)
//         // })

//     // const documentMoon = moonSun.contentDocument.querySelector(".moon");
//     // documentMoon.querySelector("path").setAttribute("fill","red");
    
    
// })




   function change(){
    if(body.classList == "light-theme"){
      console.log("light");
      body.classList = "dark-theme";
      changeTheme.textContent = "LIGHT";
    moonSun.setAttribute("data", "./starter-code/assets/icon-sun.svg");
    }
    else if(body.classList == 'dark-theme'){
        body.classList = 'light-theme';
        changeTheme.textContent = "DARK";
         moonSun.setAttribute("data", "./starter-code/assets/icon-moon.svg");

    }

    
   }
 

// function searchGitHubUser(username){

//     const url = `https://api.github.com/users/${username}`;
//     fetch(url).then(response=>response.json())
//     .then(data =>{
//         console.log(data);
//         console.log(data.login);
//         console.log(data.avatar_url);
//         console.log(data.created_at);
//         console.log(data.followers);
//         console.log(data.following);
//         console.log(data.public_repos);
//         console.log(data.location);
//         console.log(data.twitter_username);
//     })

// }

// searchGitHubUser('MajaKnezevic4598')