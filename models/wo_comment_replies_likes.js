/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wo_comment_replies_likes', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		reply_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		user_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		timestamps: false,
		tableName: 'wo_comment_replies_likes'
	});
};
