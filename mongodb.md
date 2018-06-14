Adv. of mongodb over RDBMS
- schema less : it is a document database in which collection holds different documents. Number of fields, content and size of the document can differ from one to another

- str. of single obj. is clear

- no complex joins

- deep query-ability. mongodb supports dynamic queies on documners using a doocumnet based query language that's nearly as powerful as sql.

- tuning

- ease of scale-out 

- conversion/mapping of application objects to data objects not needed.

- uses internal memory of storing the (windowed) working set, enabling faster access of data.

Why use mongodb?
- documnet orriented storage - data is stored in the form pf json style documents
- index on any attribute
- replication and high availablity
- auto-sharding
- rich queries
- fast in-place updates
- professionla supports by mongodb

where to use mongodb?
- big data
- content management and delivery
- mobile and social infratructure
- user data management
- data hub


some considerations while desiging schema in mongodb
- design your schema according to user requirements
- combine objects into one documents if you will use them togethor. otherwise separate them(but make sure there shiuld not br need of joins).
- dublicate the data (but limited) beacause disk space is cheap as compare to compute time.
- do joins while write, not on read.
- optimize your schema for more frequent use cases.
do complex aggregation in the schema

Example
-- suppose a client needs a database design for his blog/website and see the differences between RDBMS and MongoDB schema design. website has following requirements.
- every post has the unique title, describe and url.
- every post can have one or more tags.
- every post has name of its publisher and total number of likes.
- every post has comments given by users along with their name, message, date-time and  likes
- on each postm there can be zero or more comments
