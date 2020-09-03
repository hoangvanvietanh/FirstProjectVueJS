import axios from "axios";

function getUser( onSuccess, onError) {
     axios.
     get('http://172.16.16.27:4000/data/user.json')
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