const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('home/home');
});

router.get('/account', async (req, res) => {
    res.render('account/account');
});

router.get('/login', async (req, res) => {
    res.render('login/login');
});

router.get('/track-order', async (req, res) => {
    res.render('track-order/track-order');
});

router.get('/cart-shop', async (req, res) => {
    res.render('cart-shop/cart-shop');
});

router.get('/checkout', async (req, res) => {
    res.render('checkout/checkout');
});

router.get('/shop-list', async (req, res) => {
    res.render('shop-list/shop-list');
});

router.get('/wishlist', async (req, res) => {
    res.render('wishlist/wishlist');
});

module.exports = router;