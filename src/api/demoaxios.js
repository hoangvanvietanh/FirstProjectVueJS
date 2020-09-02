import axios from "axios";

function getUser( onSuccess, onError) {
     axios.
     get('http://192.168.1.31:4000/data/user.json')
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