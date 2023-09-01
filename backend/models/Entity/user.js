module.exports=(sequelize,DataTypes)=>{
    const user=sequelize.define('users',
    {
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        mailid:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    }
    )
    return user

}