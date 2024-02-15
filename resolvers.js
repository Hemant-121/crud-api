let users = [
    {id: "1", name: "Hemant", age: "23", email: "hemant121222@gmail.com"}
  ];

  let deletedUsersCount = 0
  
  const getAllUsers = () => {
    return users;
  };
  
  const createUser = (user) => {
    const { name, age, email } = user;
    const newUser = { id: String(users.length + 1 + deletedUsersCount), name, age, email };
    users.push(newUser);
    return newUser;
  };
  
  const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      deletedUsersCount += 1
      return deletedUser;
    }
    return null;
  };
  const updateUser = (id, updatedFields) => {
    const userIndex = users.findIndex((user) => user.id === id);
    
    if (userIndex !== -1) {
      // Update only the provided fields
      users[userIndex] = { ...users[userIndex], ...updatedFields };
      return users[userIndex];
    }
  
    return null;
  };
  
  module.exports = { getAllUsers, createUser, deleteUser, updateUser };
  