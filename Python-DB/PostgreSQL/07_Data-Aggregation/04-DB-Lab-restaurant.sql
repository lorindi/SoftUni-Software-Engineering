

CREATE TABLE departments (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	department_id INT NOT NULL,
	salary NUMERIC,
	CONSTRAINT fk_department_id FOREIGN KEY(department_id) REFERENCES departments(id)
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL
);

CREATE TABLE  products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	category_id INT NOT NULL,
	price REAL NOT NULL,
	CONSTRAINT fk_cateogory_id FOREIGN KEY(category_id) REFERENCES categories(id)
);

INSERT INTO departments(name) VALUES ('Management'), ('Kitchen Staff'), ('Service Staff'), ('Housekeeping Staff'), ('Security Staff');

INSERT INTO employees (first_name, last_name, department_id, salary) VALUES ('Jasmine','Maggot',2,1250.00), 
('Nancy','Olson',2,1350.00), ('Karen','Bender',1,2400.00), ('Pricilia','Parker',2,980.00),
('Stephen','Bedford',2,780.00),('Jack','McGee',1,1700.00),('Clarence','Willis',3,650.00),
('Michael','Boren',3,780.00),('Lila','Young',4,NULL), ('Steve','Benson',3,NULL), ('Jenny','Hale',3,NULL);

INSERT INTO categories(name) VALUES('salads'),('appetizers'),('soups'),('main'),('desserts');

INSERT INTO products (name, category_id,price) VALUES ('Lasagne', 4,12.99),
('Linguine Positano with Chicken', 4,11.69),
('Chicken Marsala', 4,13.69),
('Calamari', 2,14.89),
('Tomato Caprese with Fresh Burrata', 2,7.99),
('Wood-Fired Italian Wings', 2,9.90),
('Caesar Side Salad', 1,8.79),
('House Side Salad', 1,6.79),
('Johny Rocco Salad', 1,6.90),
('Minestrone', 3,8.89),
('Sausage & Lentil', 3,7.90),
('Mama Mandolas Sicilian Chicken Soup', 3,6.90),
('Tiramisu', 5,4.90),
('John Cole', 5,5.60),
('Mini Cannoli', 5,5.60);