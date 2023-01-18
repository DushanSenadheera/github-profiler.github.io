var form = document.getElementById('myForm');
document.getElementById('profile-content').style.display = 'none';

form.addEventListener('submit', function (e) {

    e.preventDefault();

    var search = document.getElementById('search').value;
    var name = search.split(' ').join('');

    fetch('https://api.github.com/users/' + name)
    .then((result) => result.json())

        .then((data) => {

            document.getElementById('profile-content').style.display = 'block';

            document.getElementById('name').innerHTML = `<a target="_blank" href = "https://github.com/${data.login}">${data.name}</a>`;
            document.getElementById('username').innerHTML = data.login;
            document.getElementById('profileImg').innerHTML = `<img src="${data.avatar_url}" alt="profile image" class="img-fluid">`;
            document.getElementById('bio').innerHTML = data.bio;
            document.getElementById('followers').innerHTML = data.followers;
            document.getElementById('following').innerHTML = data.following;
            document.getElementById('repos').innerHTML = data.public_repos;
            document.getElementById('location').innerHTML = data.location;

        })

});