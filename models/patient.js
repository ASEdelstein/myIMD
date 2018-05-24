module.exports = function(sequelize, Sequelize) {

	var Patient = sequelize.define('Patient', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type:Sequelize.STRING,notEmpty: true},
		lastname: { type:Sequelize.STRING,notEmpty: true},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
		phone : {type:Sequelize.STRING,allowNull: true }, 
        address: {type:Sequelize.STRING,notEmpty: true},
        city: {type:Sequelize.STRING,notEmpty: true},
        state: {type:Sequelize.STRING,notEmpty: true},
        zipcode: {type:Sequelize.STRING,notEmpty: true},
        social: {type:Sequelize.STRING,notEmpty: true},
        gender: {type:Sequelize.STRING.notEmpty: true},
        visit: {type:Sequelize.TEXT.notEmpty: true},

});

	return Patient;

}