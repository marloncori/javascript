const JaguarDb = require('./lib/jaguarDb').JaguarDb
const options = {logging: true}
const db = new JaguarDb(options)

db.connect('./data', (err) => {

	if(err) {
		console.log('Could not connect: ' + err)
		return
	}

	console.log('Connected!');

	const data = {title: 'hello', content: 'blah blah blah'};
	db.insert(data, (err, insertedData) => {

		if(err) {
			console.log('ERROR: ' + err)
			return
		}

		console.log('Inserted')
		console.dir(insertedData)

		updatedData = insertedData
		updatedData.title = 'hello world'
		updatedData.content = 'blah-blah-blah-blah'
		updatedData.insertedOn = new Date()
		db.update(updatedData, function(err) {
		
			if(err) {
				console.log('ERROR: ' + err)
				return
			}

			console.log('Updated')
			console.dir(updatedData)
		})

	})

})
