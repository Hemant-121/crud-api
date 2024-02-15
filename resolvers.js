let users = [
    {id: "1", name: "Hemant", age: "23", email: "hemant121222@gmail.com"}
  ];
  
  const getAllUsers = () => {
    return users;
  };
  
  const createUser = (user) => {
    const { name, age, email } = user;
    const newUser = { id: String(users.length + 1), name, age, email };
    users.push(newUser);
    return newUser;
  };
  
  const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      return deletedUser;
    }
    return null;
  };
  
  module.exports = { getAllUsers, createUser, deleteUser };
  