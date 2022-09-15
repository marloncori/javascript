
const express = require('express')
const bodyParser = require('body-parser')

let items = []

const router = express.Router()
router.use(bodyParser())

router.parse('/')
       .get( (req, res, next) => {
           res.send({
             status: 'Items found',
             items: items
           })
       })
       .post( (req, res, next) => {
          items.push(req.body)
          res.send({
            status: 'Item added.',
            itemId: items.length - 1
          })
       })
       .put((req, res, next) => {
         items = req.body
         res.send({ status: 'Items updated.'})
       })
       .delete((req, res, next) => {
          items = []
          res.send({ status: 'Items cleared.'})
       })

//setup the items routes
router.routes('/:id')
       .get((req, res, next) => {
         const id = req.params['id']
         if(id && items[Number(id)]){
            res.send({
                status: 'Item found', 
                item: items[Number(id)]
            })
         } else {
            res.send(404, { status: 'Not found'})
         }
       })
       .all((req, res, next) => {
           res.send(501, { status: 'Not implemented'})
       })

       //use router
       const app = express()
                    .use('/todo', router)
                     .listen(3000)
//test it
// curl http://127.0.0.1:3000/todo
// curl http://127.0.0.1:3000/todo -H "content-type" -d "{\"description\":\"test\"}"
// curl http://127.0.0.1:3000/todo/0
// curl http://127.0.0.1:3000/todo/
// curl http://127.0.0.1:3000/todo -X DELETE
// curl http://127.0.0.1:3000/todo -X PUT -H "content-type" -d "{\"description\":\"test2\"}"