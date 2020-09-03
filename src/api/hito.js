import axios from "axios";
 var domain = "https://hito-fake-server.herokuapp.com";

 function login(user_login, onSuccess, onError) {
    var uname = user_login.username;
    var pass = user_login.password;
    axios
        .post(`${domain}/api/login?email=${uname}&password=${pass}`)
        .then((success, error) => {
            onSuccess(success.data),
            onError(error)
        })
        .catch(() => {
            //console.log(e);
        });
}

 function getListPosts(token, onSuccess, onError) {
    var AuthStr = "Bearer ".concat(token);
     axios
        .get(`${domain}/api/posts`, {
            headers: { Accept: "application/json", Authorization: AuthStr },
        })
        .then((success, error) => {
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
            //console.log( error);
        });
}

function getUserLogin(token, onSuccess, onError) {
    var AuthStr = "Bearer ".concat(token);
     axios
        .get(`${domain}/api/users`, {
            headers: { Accept: "application/json", Authorization: AuthStr },
        })
        .then((success, error) => {
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
            //console.log(error);
        });
}

function register(user, onSuccess, onError) {
    var bodyFormData = new FormData();
    bodyFormData.append('name', user.name);
    bodyFormData.append('username', user.username);
    bodyFormData.append('password', user.password);
    bodyFormData.append('c_password', user.c_password);
    bodyFormData.append('email', user.email);
     axios
        .post(`${domain}/api/register`, bodyFormData)
        .then((success, error) => {
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
            //console.log(error);
        });
}

function updateUser(user, token, onSuccess, onError) {
    var AuthStr = "Bearer ".concat(token);
    //console.log(AuthStr)
    var bodyFormData = new FormData();
    bodyFormData.append('name', user.name);
    bodyFormData.append('gender', user.gender);
    bodyFormData.append('address', user.address);
    bodyFormData.append('phone_number', user.phone_number);
    bodyFormData.append('department', user.department);
    bodyFormData.append('birth_day', user.birth_day);
    bodyFormData.append('birth_place', user.birth_place);
     axios
        .post(`${domain}/api/userupdate/${user.id}`, bodyFormData,{
            headers: { Accept: "application/json", Authorization: AuthStr},
        })
        .then((success, error) => {
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
            //console.log(error);
        });
}

function createPost(post, token, onSuccess, onError) {
    var AuthStr = "Bearer ".concat(token);
    //console.log(AuthStr)
    var bodyFormData = new FormData();
    bodyFormData.append('user_id', post.user_id);
    bodyFormData.append('title', post.title);
    bodyFormData.append('content', post.content);
    bodyFormData.append('url_image', post.url_image);
    bodyFormData.append('status', post.status);

     axios
        .post(`${domain}/api/createpost`, bodyFormData,{
            headers: { Accept: "application/json", Authorization: AuthStr},
        })
        .then((success, error) => {
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
            //console.log(error);
        });
}

function deletePost(idPost, token, onSuccess, onError) {
    var AuthStr = "Bearer ".concat(token);
     axios
        .delete(`${domain}/api/deletepost/${idPost}`,{
            headers: { Accept: "application/json", Authorization: AuthStr},
        })
        .then((success, error) => {
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
        });
}
export default {
    login,
    getListPosts,
    getUserLogin,
    register,
    createPost,
    deletePost,
    updateUser
}