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
  const avatar = document.getElementById("avatar");
  avatar.src = data.avatar_url;
  const isoDateString = data.created_at;
  const date = new Date(isoDateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  document.getElementById("date").textContent = formattedDate;
  document.getElementById("githubName").textContent = data.name;
  document.getElementById("login").textContent = `@${data.login}`;
  document.getElementById("bio").textContent =
    data.bio || "This profile has no bio";
  document.getElementById("public_repos").textContent = data.public_repos;
  document.getElementById("followers").textContent = data.followers;
  document.getElementById("following").textContent = data.following;
  document.getElementById("location").textContent = data.location || "Not Available";
  document.getElementById("twitter").textContent = data.twitter_username || "Not Available";
  document.getElementById("website").textContent = data.website || "Not Available";
  document.getElementById("company").textContent = data.company || "Not Available";

  return data;
}
