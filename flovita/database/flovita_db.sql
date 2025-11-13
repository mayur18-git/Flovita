CREATE DATABASE flovita_db;
USE flovita_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, category, price, image, description) VALUES
('Casual T-Shirt', 'men', 25.00, '/assets/images/1.jpg', 'Comfortable cotton t-shirt for everyday wear.'),
('Slim Fit Jeans', 'men', 50.00, '/assets/images/11.jpg', 'Stylish slim fit jeans with stretch.'),
('Floral Dress', 'women', 40.00, '/assets/images/12.jpg', 'Elegant floral dress for summer.'),
('High-Waisted Pants', 'women', 45.00, '/assets/images/13.jpg', 'Trendy high-waisted pants.'),
('Kids Hoodie', 'kids', 30.00, '/assets/images/14.jpg', 'Cozy hoodie for kids.'),
('Colorful Sneakers', 'kids', 35.00, '/assets/images/15.jpg', 'Fun sneakers for active play.'),
('Leather Handbag', 'accessories', 60.00, '/assets/images/16.jpg', 'Classic leather handbag.'),
('Gold Necklace', 'accessories', 20.00, '/assets/images/17.jpg', 'Delicate gold necklace.');