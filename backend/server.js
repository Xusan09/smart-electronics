const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve frontend build files
const frontendBuild = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendBuild)) {
  app.use(express.static(frontendBuild));
}

const getProducts = () => {
  const data = fs.readFileSync(path.join(__dirname, 'data/products.json'), 'utf-8');
  return JSON.parse(data);
};

app.get('/api/products', (req, res) => {
  const { search, category } = req.query;
  let products = getProducts();
  if (category) products = products.filter(p => p.category === category);
  if (search) {
    const q = search.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const products = getProducts();
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Товар не найден' });
  res.json(product);
});

app.get('/api/categories', (req, res) => {
  const products = getProducts();
  const categories = [...new Set(products.map(p => p.category))];
  res.json(categories);
});

// All other routes serve frontend
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../frontend/dist/index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.json({ message: 'Smart Electronics API is running!' });
  }
});

app.listen(PORT, () => {
  console.log(`Smart Electronics backend running on port ${PORT}`);
});
