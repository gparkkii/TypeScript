// api url
const url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// User Data
let user = {};

// Fetch Datasets
function fetchUser() {
  return axios.get(url);
}


function startApp() {
  axios.get(url)
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
