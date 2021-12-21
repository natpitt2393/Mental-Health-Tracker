const path = require('path');
const express = require('express');
const session = require('express-session');
//test
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,

  //later comment out next 3 lines
  // store: new SequelizeStore({
  //   db: sequelize
  // })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`****** ${req.method} request on endpoint: ${req.url}`);
  next();
})
app.use(routes);

var dt = new Date();
var mm = dt.getMonth().toString().padStart(2, '0');
var dd = dt.getDay().toString().padStart(2, '0');
var yyyy = dt.getFullYear();

console.log(yyyy+"-"+mm+"-"+dd);



sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});