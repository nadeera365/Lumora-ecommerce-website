#!/bin/sh
# Run once from the frontend folder AFTER copying the new files in.
# Removes the old, unused files from the earlier version (new code does not use them).
rm -f  src/App.css src/cart.jsx src/shop.css
rm -rf src/api
rm -f  src/components/Header.jsx src/components/Footer.jsx src/components/HeroSlider.jsx
rm -f  src/components/header.css src/components/SiteHeader.css src/components/HeroSlider.css
rm -f  src/pages/Orders.jsx src/pages/Product.jsx
rm -f  src/pages/*.css
echo "Old files removed."
