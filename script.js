class GitHub {
  async getUserDetails(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    this.createUserCard(userData);
  }

  createUserCard(user) {
    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="user-card">
        <img class="avatar" src="${user.avatar_url}" alt="${user.login}" />
        <div class="userInfo"><h2>${user.name}</h2>
        <p>${user.bio}</p>
        <p>Followers: ${user.followers} | Following: ${user.following}</p>
        <p>Repos: ${user.public_repos}</p>
        <p>Twitter: ${user.twitter_username || 'Not provided'}</p>
        <p>Location: ${user.location || 'Not provided'}</p>
        </div>
      </div>
    `;
  }
}

const github = new GitHub();
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('search').value;
  if (username) {
    github.getUserDetails(username);
  }
});
