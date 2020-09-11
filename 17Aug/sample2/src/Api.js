import axios from "axios";

//const host = "http://dev.api.github.com";
//const host = "http://test.api.github.com";
const host = "http://api.github.com"; // in production

export default {
    getUsers: function (name) { // or (url) // see documentation of axios -npm from website
        return axios.get(`${host}/users/${name}`)
            //return axios.get(`http://api.github.com/users/${name}`)
            .then(function (result) { // .then((result) => result);
                return result;
            })
            .catch((e) => e);
    },
    getRepo: function (username) {
        return axios.get(`http://api.github.com/users/${username}/repos`) // api.github.com - is a Host , testing- another Host
            // return axios.get(`${host}/users/${username}/repos`)
            .then(function (result) { // .then((result) => result);
                return result;
            })
            .catch((e) => e);
    },
};

// api is an object 
// api = {name: ''}
