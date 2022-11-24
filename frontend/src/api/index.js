import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
});

// user apis
const getAllUsers = () => api.get('/users');

const getFetchLimitUsers = (limit) => api.get(`/pages/${limit}`);

const getUserById = (id) => api.get(`/users/${id}`);

const insertUser = (payload) => api.post(`/users`, payload);

const updateUserById = (id, payload) => api.put(`/users/${id}`, payload);

const deleteUserById = (id) => api.delete(`/users/${id}`);


// post apis
const getAllPosts = () => api.get('/posts');

const getFetchLimitPosts = (limit) => api.get(`posts/pages/${limit = 2}`);

const getPostById = (id) => api.get(`/posts/${id}`);

const insertPost = (payload) => api.post(`/posts`, payload);

const updatePostById = (id, payload) => api.put(`/posts/${id}`, payload);

const deletePostById = (id) => api.delete(`/posts/${id}`);

const getPostsByUserId = (id) => api.get(`/posts?userId=${id}`);


// category apis
const getAllCategories = () => api.get('/categories');

const getCategoryById = (id) => api.get(`/categories/${id}`);

// Dummyjson news apis

const getNews = () => axios.get('https://dummyjson.com/users');

//SignIn request api

const signIn = (payload) => api.post(`/login`, payload);

//Register request api

const register = (payload) => api.post(`/register`, payload);


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
    getCategoryById,
    getNews,
    getFetchLimitUsers,
    getFetchLimitPosts,
    signIn,
    register
}



