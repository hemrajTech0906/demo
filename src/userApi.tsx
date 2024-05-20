// src/api/usersApi.ts
export const usersApi = {
    getUsers: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    deleteUser: async (userId: number) => {
      await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
      });
    },
  };
  