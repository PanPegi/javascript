import express from 'express';

const app = express();
app.get('/', (req, res) => {
  const neco = { name: 'vojta' };
  res.json(neco);
});

app.listen(3000, () => {
  console.log('cau');
});
