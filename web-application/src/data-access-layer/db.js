const mysql   = require('mysql2')

const connection = mysql.createConnection({
	host     : 'database',
	user     : 'root',
	password : 'theRootPassword',
	database : 'webAppDatabase'
})

module.exports = connection