const express = require('express');
const router = express.Router();
const items = require('../../data/item_list');

for (let  i = 0; i< 10; i++) {
  items.push(...items);
}
// Get All items
router.get('/', (req, res) => res.json(items));

// Paginate Items
router.get('/page/:page_number/amount/:page_amount', (req, res) => {
  const page = parseInt(req.params.page_number) - 1;
  const pageAmount = parseInt(req.params.page_amount);
  const found = items.slice(page * pageAmount, (page + 1) * pageAmount);

  if (found) {
    setTimeout(() => {
      res.json(found);
    }, 10000)
  } else {
    res.status(400).json({ msg: `No items with the specified parameters` });
  }
});
router.get('imageUrl/:id', (req, res) => {
  const img = 'https://images.unsplash.com/photo-' + req.params.id  + '?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
  res.json(img);

});

module.exports = router;
