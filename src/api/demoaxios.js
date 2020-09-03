import axios from "axios";

function getUser( onSuccess, onError) {
     axios.
     get('https://hito-fake.herokuapp.com/data/user.json')
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