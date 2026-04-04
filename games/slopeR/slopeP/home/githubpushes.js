const toggleBtn = document.getElementById('toggleButton');
const changelogBox = document.getElementById('changelogBlock');

// Fetch recent commits from GitHub
fetch('https://api.github.com/repos/lonfro/SlopePlusWeb/commits?per_page=15')
  .then(response => response.json())
  .then(commits => {
    changelogBox.innerHTML = commits.map(commit =>
      `<p>
        <strong>${commit.commit.author.name}</strong>: 
        <a href="${commit.html_url}" target="_blank" style="color:#20bd20;text-decoration:underline;">
          ${commit.commit.message.split('\n')[0]}
        </a><br>
        <span style="font-size:0.8em;color:#888;">${commit.commit.author.date.slice(0,10)}</span>
      </p>`
    ).join('');
  });


toggleBtn.addEventListener('click', function() {
  changelogBox.classList.toggle('expanded');
  toggleBtn.innerHTML = changelogBox.classList.contains('expanded') ? '&#x25B2;' : '&#x25BC;';
});
