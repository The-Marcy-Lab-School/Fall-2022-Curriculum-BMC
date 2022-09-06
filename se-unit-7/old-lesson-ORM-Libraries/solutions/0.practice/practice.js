/**
 * 0. require in Sequelize
 */

const Sequelize = require('sequelize');

/**
 * 1. define a new instance of Sequelize:
 */
const db = new Sequelize('postgres://localhost:5432/sequelize-practice', {
	logging: false
});

/**
 * 2. Create a model to represent Fellows here at Marcy Lab.
 * Include first name, last name, phone number, email address, age.
 */

const Fellow = db.define('fellow', {
	firsName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	phoneNumber: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING,
		unique: true
	},
	age: {
		type: Sequelize.INTEGER
	}
});

/**
 * 3. Create a model to represent Staff here at Marcy Lab.
 * Include first name, last name, a boolean value about whether they are awesome (with a default to true).
 */

const Staff = db.define('staff', {
	firsName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	isAwesome: {
		type: Sequelize.BOOLEAN,
		defaultValue: true
	}
});

/**
 * 4. Create a model to represent Mentors that volunteer with Marcy Lab.
 * Include first name, last name, count of mentor conversations.
 */

const Mentor = db.define('mentor', {
	firsName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	sessionCount: {
		type: Sequelize.INTEGER
	}
});

/**
 * 5. Create a model to represent Projects.
 * Include project name, start date that has a default value of today, due date, and a status (complete, incomplete) that cannot be null.
 */

const Project = db.define('project', {
	name: {
		type: Sequelize.STRING
	},
	startDate: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	},
	dueDate: {
		type: Sequelize.DATE
	},
	status: {
		type: Sequelize.STRING,
		isIn: [['complete', 'incomplete']],
		allowNull: false
	}
});

/**
 * 6. Create model to represent Programs at Marcy Lab.
 * Include program name (software engineering, data science), number of fellows, and start date
 */

const Program = db.define('program', {
	name: {
		type: Sequelize.STRING,
		isIn: [['software engineering', 'data science']]
	},
	fellows: {
		type: Sequelize.INTEGER
	},
	startDate: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
});

/**
 * 7. Make a many to many association between fellows and projects.
 */

Fellow.belongsToMany(Project, { through: 'FellowProjects' });
Project.belongsToMany(Fellow, { through: 'FellowProjects' });

/**
 * 8. Make a one to one association between fellows and mentors.
 */

Fellow.hasOne(Mentor);
Mentor.belongsTo(Fellow);

/**
 * 9. Make a one to many association between fellow and programs;
 */

Program.hasMany(Fellow);
Fellow.belongsTo(Program);

/**
 * 10. Export the database and tables from this file.
 */

module.exports = {
	db,
	Fellow,
	Staff,
	Mentor,
	Project,
	Program
};

/**
 * 11. Require in an express router.
 */

const router = require('express').Router();

/**
 * 12. Create a route that would find all of the fellows entries and
 * give the response an array in json format
 * when the app hits the /fellows endpoint.
 */

router.get('/fellows', async (req, res, next) => {
	try {
		const fellows = await Fellow.findAll();
		res.json(fellows);
	} catch (err) {
		next(err);
	}
});

/**
 * 13. Create a route that would one Project by id,
 * and give the response object in json format
 * when the app hits the /projects/:id endpoint.
 */

router.get('/projects/:projectId', async (req, res, next) => {
	try {
		const fellow = await Fellow.indOne({
			where: { id: req.params.projectId }
		});
		res.json(fellow);
	} catch (err) {
		next(err);
	}
});
