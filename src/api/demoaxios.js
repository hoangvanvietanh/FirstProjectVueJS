import axios from "axios";
 var domain = "https://hito-fake.herokuapp.com";
// var domain = "http://172.16.16.27:4000";
function getUser( onSuccess, onError) {
     axios.
     get(`${domain}/data/user.json`)
        .then((success, error) => {
            onSuccess(success),
            onError(error)
        })
        .catch(() => {
            //console.log(error);
        });
}
export default {
    getUser,
}