var fs = require('fs');
var path = require('path');

const util = require('../utils/utility.js');

// GraphQL: Resolvers
const resolvers = {
	Query: {
		student: async function(parent, args) {
			let db = await util.find({}, 'users');
			return db
		},
		getStudent: async function(parent, args) {
			let db = await util.find({}, 'users');
			let i = 0;
			let result = {}
			
			while (i < db.length) {
				if (db[i]._id == args._id) {
					result = {};
					result = Object.assign({}, db[i]);
					break;
				} else {
					// throw new Error('DataNotFoundException');
					result = {
						error: {
							code: 404,
							message: 'Invalid user ID! Please insert correct ID'
						}
					}
				}

				i++;
			}

			console.log(result);

			return result;
		}
	},
	Mutation: {
		createNewStudent: async function(_A, args) {
			let docs = await util.find({}, 'users');
			let postObject = {
				_id: util.ObjectId(),
				name: args.name,
				email: args.email,
				password: util.generatePassword(),
				area: args.area,
				adult: true
				// adult: () => args.age > 17 ? true : false
			}

			console.log(postObject);
			docs.push(postObject);

			let resp = await util.save(docs, 'users');
			if (resp.write == true) {
				return {_id: postObject._id}
			} else {
				// let fileNotUpdated = new Error('FileNotFoundException');
				// throw fileNotUpdated;
			}
		}
	}	
};



// Exports
module.exports = resolvers;