const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/catigories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/courses-categories', (req, res) => {
  res.send(categories);
});

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if(id === "00"){
    res.send(courses);
  }else{
    const category_courses = courses.filter(c => c.category_id === id);
    res.send(category_courses);
  }
  
});

app.get('/courses', (req,res) => {
  res.send(courses)
})


app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find(c => c.id === id);
  res.send(selectedCourse)
})


app.listen(port, () => {
  console.log(`Online learning server is running on port:, ${port}`)
})