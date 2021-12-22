import USERS from '../../data/users.js';

export const prepeareUser = (id) => {
  const user = USERS.find(u => u.userId === id);
  if (user) return user.user
  return id
};
