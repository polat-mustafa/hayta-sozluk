import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

// user apis
const getAllUsers = () => api.get('/users');

const getUserById = (id) => api.get(`/users/${id}`);

const insertUser = (payload) => api.post(`/users`, payload);

const updateUserById = (id, payload) => api.put(`/users/${id}`, payload);

const deleteUserById = (id) => api.delete(`/users/${id}`);


// post apis
const getAllPosts = () => api.get('/posts');

const getPostById = (id) => api.get(`/posts/${id}`);

const insertPost = (payload) => api.post(`/posts`, payload);

const updatePostById = (id, payload) => api.put(`/posts/${id}`, payload);

const deletePostById = (id) => api.delete(`/posts/${id}`);

const getPostsByUserId = (id) => api.get(`/posts?userId=${id}`);


// category apis
const getAllCategories = () => api.get('/categories');

const getCategoryById = (id) => api.get(`/categories/${id}`);



export {
    getAllUsers,
    getUserById,
    insertUser,
    updateUserById,
    deleteUserById,
    getAllPosts,
    getPostById,
    insertPost,
    updatePostById,
    deletePostById,
    getPostsByUserId,
    getAllCategories,
    getCategoryById
}



