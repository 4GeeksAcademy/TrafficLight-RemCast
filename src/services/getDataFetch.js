import { getResourceList } from "./getResourceList"
import { getResourceDetails } from "./getResourceDetails"


export const getDataFetch = (resource) => {
    return getResourceList(resource)
    .then((resourceList) => {
        return Promise.all(resourceList.map((resource) => {
            return getResourceDetails(resource.url);
        }));
    })
    .catch((err) => {
        throw new Error('Error al obtener datos: ' + err.message);
    });
}