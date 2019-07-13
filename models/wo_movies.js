/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_movies', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		genre: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		stars: {
			type: DataTypes.STRING(300),
			allowNull: false,
			defaultValue: ''
		},
		producer: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: ''
		},
		country: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: ''
		},
		release: {
			type: "YEAR(4)",
			allowNull: true
		},
		quality: {
			type: DataTypes.STRING(10),
			allowNull: true,
			defaultValue: ''
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cover: {
			type: DataTypes.STRING(500),
			allowNull: false,
			defaultValue: 'upload/photos/d-film.jpg'
		},
		source: {
			type: DataTypes.STRING(1000),
			allowNull: false,
			defaultValue: ''
		},
		iframe: {
			type: DataTypes.STRING(1000),
			allowNull: false,
			defaultValue: ''
		},
		video: {
			type: DataTypes.STRING(3000),
			allowNull: false,
			defaultValue: ''
		},
		views: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		rating: {
			type: DataTypes.STRING(11),
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		timestamps: false,
		tableName: 'wo_movies'
	});
};
