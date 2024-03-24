export const getUsers = async (page) => {
  const users = await // API to fetch the random people details
  (
    await fetch(`https://randomuser.me/api/?page=${page}&results=50`)
  ).json();
  return users.results;
};
