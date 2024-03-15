document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("form");
  searchButton.addEventListener("click", (event) => {
    fetchUserData(event);
  });
});

async function fetchUserData(event) {
  event.preventDefault();
  const inputValue = document.getElementById("userInput").value;
  let response = await fetch(`https://api.github.com/users/${inputValue}`);
  let data = await response.json();

  console.log(data);
  const noResults = document.getElementById("noResults");

  if (data.message === "Not Found") {
    console.log("no user found");
    noResults.textContent = "No results";
  } else {
    noResults.textContent = "";
    const avatar = document.getElementById("avatar");
    avatar.src = data.avatar_url;
    const isoDateString = data.created_at;
    const date = new Date(isoDateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);
    document.getElementById("date").textContent = formattedDate;
    document.getElementById("githubName").textContent = data.name;
    const userNameLink = document.getElementById("login");
    userNameLink.textContent = `@${data.login}`;
    userNameLink.href = data.html_url;
    document.getElementById("bio").textContent =
      data.bio || "This profile has no bio";
    document.getElementById("public_repos").textContent = data.public_repos;
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("following").textContent = data.following;
    document.getElementById("location").textContent =
      data.location || "Not Available";
    document.getElementById("twitter").textContent =
      data.twitter_username || "Not Available";
    document.getElementById("website").textContent =
      data.blog || "Not Available";
    document.getElementById("company").textContent =
      data.company || "Not Available";

    return data;
  }
}

function toggleTheme() {
  const body = document.body;
  const lightMode = document.getElementById("light");
  const darkMode = document.getElementById("dark");
  

  darkMode.addEventListener("click", () => {
    console.log("dark mode clicked");
    body.classList.add("darkMode");
    body.classList.remove("lightMode");
    lightMode.style.display = "block";
    darkMode.style.display = "none";
  });

  lightMode.addEventListener("click", () => {
    console.log("light mode clicked");
    body.classList.add("lightMode");
    body.classList.remove("darkMode");
    darkMode.style.display = "block";
    lightMode.style.display = "none";
  });
}
toggleTheme();
