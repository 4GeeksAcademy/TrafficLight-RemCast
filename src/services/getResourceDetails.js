export const getResourceDetails = (url) => {
    return fetch(url).then((res) => {
        if (!res.ok) {
            throw  Error('Ha habido un erroren la adquisicion de recursos');
        }
        return res.json();
    })
    .then((res) =>  {
       return  {
        uid: res.result._id,
        ...res.result.properties    
    };
    })
    .catch((err) => console.log(err));
}