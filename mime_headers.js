const mime = require('mime')

mime.lookup('/path/to/file.txt')
mime.lookup('file.txt')
mime.lookup('.TXT')
mime.lookup('html')

