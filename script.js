
window.onload = function(){

  const changeTheme = document.querySelector(".change-theme");
  const avatar = document.querySelector(".left-image img");
  const name = document.querySelector(".name-heading");
  const dataLogin = document.querySelector(".data-login");
  const bioInfo = document.querySelector(".bio");
  const repos = document.querySelector(".repos>h1");
  const followers = document.querySelector(".follower>h1");
  const following = document.querySelector(".following>h1");
  const location = document.querySelector(".location + p");
  const company = document.querySelector(".company + p");
  const website = document.querySelector(".website + p");
  const twitter = document.querySelector(".twitter + p");
  const searchResult = document.querySelector(".search-result");
  const btn = document.querySelector("button");
  const input = document.querySelector("input[type=text]");
  const body = document.querySelector(".light-theme");
  const moonSun = document.getElementById("svgMoonSun");
  const imageLocation = document.querySelector(".location");
  const imageWebsite = document.querySelector(".website");
  const imageCompany = document.querySelector(".company");
  const imageTwitter = document.querySelector(".twitter");
  const joined = document.querySelector(".joined>p");
  const blogLink = document.querySelector(".blog-link");
  

  changeTheme.addEventListener("click", change);
  function change() {
    if (body.classList == "light-theme") {
      body.classList = "dark-theme";
      changeTheme.textContent = "LIGHT";
      moonSun.setAttribute("data", "./starter-code/assets/icon-sun.svg");
      imageLocation.setAttribute("src", "./starter-code/assets/icon-location-white.svg");
      imageWebsite.setAttribute("src", "./starter-code/assets/icon-website-white.svg");
      imageCompany.setAttribute("src", "./starter-code/assets/icon-company-white.svg");
      imageTwitter.setAttribute("src","./starter-code/assets/icon-twitter-white.svg")
    } else if (body.classList == "dark-theme") {
      body.classList = "light-theme";
      changeTheme.textContent = "DARK";
      moonSun.setAttribute("data", "./starter-code/assets/icon-moon.svg");
      imageLocation.setAttribute("src","./starter-code/assets/icon-location.svg");
      imageWebsite.setAttribute("src","./starter-code/assets/icon-website.svg");
      imageCompany.setAttribute("src","./starter-code/assets/icon-company.svg");
      imageTwitter.setAttribute("src","./starter-code/assets/icon-twitter.svg");
    }
  } //end event listener change theme

  function getGithubUserName(username) {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No user with that username`);
        }
        console.log(response)
        return response.json();
      })
      .then((data) => {
       renderData(data);
       console.log(data)
      })
      .catch((err) => {
        console.log(err)
        searchResult.style.display = "block";
      });
  }


  btn.addEventListener("click", function () {
      let inputValue = input.value;
    getGithubUserName(inputValue);
  });
 
  input.addEventListener('keypress',function(event){
      if(event.keyCode == 13) {
          let inputValue = input.value;
          getGithubUserName(inputValue)
      }
  });
  input.addEventListener("click",function(){
    if(input.value){
      input.value = "";
    }
    if(searchResult.style.display = "block"){
       searchResult.style.display = "none";
    }
  })

  function renderData(data){
      avatar.setAttribute("src",data.avatar_url);
      dataLogin.textContent = `@${data.login}`;
        checkIfNull(data,"name",name);
        checkBio(data);
        checkIfNull(data,"location",location);
        checkIfNull(data, "company", company);
        checkIfNull(data,"html_url",blogLink);
        checkIfNull(data,"twitter_username",twitter)
        repos.textContent = data.public_repos;
        followers.textContent = data.followers;
        following.textContent = data.following;
         const joinedDate = formatDate(data);
         joined.textContent = joinedDate;
  }


  function checkBio(data){
      if(data.bio !== null){
        bioInfo.textContent = data.bio
      } else {
          return false
      }
  }

function checkIfNull(data,property,element){
    if(data[property]){
        element.textContent = data[property];
        if(element.className == "blog-link"){
          element.setAttribute("href",data.html_url);
          // element.style = "word-wrap:break-word";
        }
        if (
          element.previousElementSibling !== null &&
          element.previousElementSibling.tagName == "IMG"
        ) {
        const img = element.previousElementSibling;
          if (img.className == "twitter" ) {
              img.setAttribute("style","opacity:1;");
              img.nextElementSibling.style.color = "var(--paragraf-color)";
          }
       
    }}
    if(!(data[property])){
       
        element.textContent = "Not Available";
        element.classList.add("dinamic-not-available");
         if (element.previousElementSibling !==null && element.previousElementSibling.tagName == 'IMG' ){
             const img = element.previousElementSibling;
             switch(img.className){
                 case "location":   
                 case  "website":
                 case  "company": 
                 case  "twitter":
                    img.classList.add("transparent-img");
                    break;
               
             }//kraj switcha
         }
    }
}

function formatDate(data){
    const arrayOfMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct", "Nov","Dec"];
    let date = data.created_at;
    let startingDate = new Date(date);
    let day = startingDate.getDate();
    let month = startingDate.getMonth();
    let year = startingDate.getFullYear();
    return `Joined ${day} ${arrayOfMonths[month]} ${year}`;
    
}

 
}//end load event