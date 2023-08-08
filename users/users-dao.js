import initialUsers from './users.js';
let users = [...initialUsers];



export const findAllUsers = () => users;


export const findUserById = (uid) => {
 const index = users.findIndex((u) => u._id === uid);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByUsername = (username) => {
 const index = users.findIndex((u) => u.username === username);
 if (index !== -1) return users[index];
 return null;
};


export const findUserByCredentials = (username, password) => {
 const index = users.findIndex((u) => u.username === username && u.password === password);
 if (index !== -1) return users[index];
 return null;
};


export const createUser = (user) => users.push(user);


export const updateUser = (username, user) => {
    const index = users.findIndex((u) => u.username === username);
    if (index === -1) return {status: 'error', message: 'User not found'};
    users[index] = { ...users[index], ...user };
    return {status: 'ok'};
  };
  
export const deleteUser = (uid) => {
 const index = users.findIndex((u) => u._id === uid);
 users.splice(index, 1);
 return {status: 'ok'}
};
