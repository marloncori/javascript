const express = require('express')
const app = express()

const JaguarDb = require('./lib/jaguarDb').JaguarDb
const db = new JaguarDb({logging:true})

db.connect('./data', (err) => {
    if(err){
        console.log('Could not connect to database: ' + err);
       return;
    }

    db.ensureIndexSync('title')
})

app.use(express.bodyParser())
       .get('/new', (req, res) => {
         let newTopic = {title: 'Learning Nodejs', contet: ' It is not quite boring and it may be even easier than both C# and Java with their frameworks.'}
         db.insert(newTopic, (err, doc) => {
            if(err){
                console.dir(err)
                res.send(' There was an error adding the topic')
            }
            else {
                res.redirect('/' + doc._id + '/edit')
            }
         })
       })
       .get('/:id/edit', (req, res) => {
         const id = req.params.id
         db.findById(id, (err, doc) => {  
            if(err) {
              console.dir(err);
              res.send('Error while looking for topic');
              return;
            }
            const html = '<p>' + 
            '<form id="edit" method="post">' + 
            '  <p>Title:<input type="text" name="title" value="' + doc.title + '"/></p>' +
            '  <p>Content:<br/>' + 
            '  <textarea rows="4" cols="50" name="content">' + doc.content + '</textarea></p>' +
            '  <input type="submit"/>' + 
            '</form>' + 
            '</p>'
            res.send(html)
          })
        })
        .post('/:id/edit', (req, res) => {
            const id = parseInt(req.params.id, 10)
            const data = {
                _id: id,
                title: req.body.title,
                content: req.body.content
            }
            db.update(data, (err, doc) => {
                if(err) {
                    console.dir(err);
                    res.send('There was an error saving the record');
                    return;
                  }
                  res.redirect('/' + id);
            })
        })
        .get('/:id', (req, res) => {
            const id = parseInt(req.params.id, 10)
            db.findById(id, (err, doc) => {
                if(err) {
                    console.log('error: ' + err);
                    res.send('Error fetching document [' + id + ']. Error: ' + err);
                    return;
                  }
                  if(doc === null) {
                    console.log('not found: ' + id);
                    res.send('Document id [' + id + '] was not found.');
                    return;
                  }
                  const html = '<p>' + 
                  '<b>id: ' + doc._id + '</b><br/>' +
                   '<b><span style="color: yellow">title:</span></b> ' + doc.title + '<br/>' +  
                     '<b><span style="color: green">content:</span></b> ' + doc.content + 
        '              </p>' + 
                       '<p><a href=/' + doc._id + '/edit>Edit</a></p>' + 
                         '<p><a href=/>Home</a></p>';
              res.send(html);
            })
        })
        .get('/', (req, res) => {

            let query = {};
            let fields = {title: 1};
            db.find(query, fields, (err, docs) => {
              if(err) {
                res.send('Error reading documents: ' + err);
                return;
              }

              let i = 0
              let html = ""
               if(docs.length === 0){
                 html = "<p><span style="color: red">No topics have been added</span></p>"
               } 
               else {
                for(i = 0; i<docs.length; i++) {
                    var url = "<a href=/" + docs[i]._id + " >" + docs[i].title + "</a>"
                    html += '<p>' + 
                      '<b>id: ' + docs[i]._id + '</b><br/>' +
                      '<b>title:</b> ' + url + '<br/>' +  
                      '</p>';
                  }
                }
                html += '<p><a href=/new >Add new topic</a></p>';
                res.send(html);
            })
        })

    console.log("Server has started, listening at:  http://localhost:3000")
    app.listen(3000)