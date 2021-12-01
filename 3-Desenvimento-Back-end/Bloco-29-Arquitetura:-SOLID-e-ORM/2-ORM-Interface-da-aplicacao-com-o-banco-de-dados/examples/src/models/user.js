const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  },
  // {
  //   freezeTableName: true,
  //   tableName: 'NomeDaTabela',
  // }
  {
    underscored: true,
    tableName: 'Users',
  });

  return User;
};

module.exports = User;