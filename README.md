### How to setup db
```
mkdir db
mongod --dbpath ./db --port 28018
# Wait a bit for mongo server
mongoimport --port 28018 --db gray-rabbit10-api --collection points --type json --file points.json --jsonArray
```

### How to start server
```
npm install
npm run dev
```

_NOTICE: Check if port 28018 already in use. It's not default one, so it shouldn't be_ 
