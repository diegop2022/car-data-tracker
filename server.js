const express = require('express');
const routes = require('../car-data-tracker/routes/index');
// import sequelize connection
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
//sync sequlize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})



// const express = require('express');

// const db = require('./config/connection');
// const apiRoutes = require('./routes/index');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use('/api', apiRoutes);

// app.use((req, res) => {
//   res.status(404).end();
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected.');
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });