import httpClient from '../http-common';

/**查詢全部 */
const getAll = () => {
    return httpClient.get();
}

/**新增 */
const create = (data) => {
    return httpClient.post('',data);
}

/**查詢特定 */
const get = id => {
    return httpClient.get(`/${id}`);
}

/**更新 */
const update = (id, data )=> {
    return httpClient.put(`/${id}`,data);
}

/**刪除 */
const remove = id => {
    return httpClient.delete(`/${id}`);
}

const user = {
    getAll,
    create,
    get,
    update,
    remove,
};
export default user;