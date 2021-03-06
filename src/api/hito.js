import axios from "axios";
import {db, firebase} from "../firebase";

 var domain = "https://hito-fake-server.herokuapp.com";
// var domain = "http://127.0.0.1:8000";
//var domain = "http://hito-fake.local";
 function login(user_login, onSuccess, onError) {
    var uname = user_login.username;
    var pass = user_login.password;
    localStorage.setItem('email', uname)
    axios
        .post(`${domain}/api/login?username=${uname}&password=${pass}`)
        .then((success, error) => {
            firebase
                .auth()
                .signInWithEmailAndPassword(uname+'@gmail.com', pass)
            onSuccess(success.data),
            onError(error)
        })
        .catch((error) => {
            if(error){
                if(error.response.data.success == false){
                    window.location.href = "/";
                }
            }
            
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
        .catch((error) => {
            //console.log(error)
            if(error.message.split(" ")[5] == "401"){
                localStorage.clear();
                window.location.href = "/";
            }
            //console.log();
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
            firebase.auth().createUserWithEmailAndPassword(user.username+'@gmail.com', user.password)
            db.collection("users").doc(user.username).set({notification: 0, username: user.username})
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
            console.log('vào đây');
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
    bodyFormData.append('username', post.username);
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
