/* eslint-disable @typescript-eslint/no-unused-vars */
const url = "https://jsonplaceholder.typicode.com/users/1";
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const address = document.querySelector("#address");

let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address.city;
  response.address.street;
});
