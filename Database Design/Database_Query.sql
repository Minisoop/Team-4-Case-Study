/*DROP TABLE IF EXISTS product_category CASCADE;*/
CREATE TABLE IF NOT EXISTS product_category (
	id BIGSERIAL PRIMARY KEY,
	category_name VARCHAR(255) DEFAULT NULL
);

/*DROP TABLE IF EXISTS product CASCADE;*/
CREATE TABLE IF NOT EXISTS product (
	product_id bigserial not null,
	name varchar(255),
	description varchar(255),
	active boolean,
	date_created timestamp,
	image_url varchar(255),
	unit_price numeric(19, 2),
	units_in_stock int4,
	category_id BIGINT not null,
	primary key (product_id),
	CONSTRAINT kf_category FOREIGN KEY (category_id) REFERENCES product_category(id)
);

INSERT INTO product_category(category_name) 
	VALUES ('men');
INSERT INTO product_category(category_name) 
	VALUES ('women');
	
/*Men*/
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Shirt 1', 'Buttoned pale blue smart shirt', TRUE, NOW(),
	'assets/images/men/1.jpg', 80,50,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Shirt 2', 'Buttoned blue smart shirt', TRUE, NOW(),
	'assets/images/men/2.png', 100,40,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Shirt Allen 1', 'Buttoned beige smart shirt', TRUE, NOW(),
	'assets/images/men/allen1.png', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Shirt Allen 2', 'Buttoned sea blue smart shirt', TRUE, NOW(),
	'assets/images/men/allen2.png', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Casual Shirt 1', 'Buttoned black short-sleeve shirt', TRUE, NOW(),
	'assets/images/men/casual1.png', 60,100,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Casual Shirt 2', 'Buttoned dark blue shirt', TRUE, NOW(),
	'assets/images/men/casual2.jpg', 80,50,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Casual Shirt 3', 'Buttoned navy green shirt', TRUE, NOW(),
	'assets/images/men/casual3.jpg', 100,40,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Casual Shirt 4', 'Buttoned checkered blue smart shirt', TRUE, NOW(),
	'assets/images/men/casual4.jpg', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Denim jacket', 'Denim overshirt for men', TRUE, NOW(),
	'assets/images/men/denim4.png', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Formal shirt white', 'Buttoned blue-tinted white formal shirt', TRUE, NOW(),
	'assets/images/men/formal1.jpg', 60,100,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Formal shirt blue-grey', 'Buttoned blue-tinted dark grey formal shirt', TRUE, NOW(),
	'assets/images/men/formal2.jpg', 80,50,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Formal shirt emerald-green', 'Buttoned emerald green formal shirt', TRUE, NOW(),
	'assets/images/men/formal3.jpeg', 100,40,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Formal shirt grey', 'Buttoned grey formal shirt', TRUE, NOW(),
	'assets/images/men/formal4.webp', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Jacket 1', 'Black-Green jumper jacket', TRUE, NOW(),
	'assets/images/men/jacket1.jpg', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Jacket 2', 'Navy green puff jacket', TRUE, NOW(),
	'assets/images/men/jacket2.jpg', 160,100,1);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Jacket 3', 'Beige fluffy jumper-jacket', TRUE, NOW(),
	'assets/images/men/jacket3.jpg', 80,50,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Tuffed jeans', 'Blue denim jeans with scuff marks', TRUE, NOW(),
	'assets/images/men/jeans2.jpg', 135,40,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Jeans slim', 'denim slim jeans', TRUE, NOW(),
	'assets/images/men/jeans3.jpg', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Jeans straight', 'denim straight jeans', TRUE, NOW(),
	'assets/images/men/jeans4.png', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Summer shirt', 'Dark shirt with birhgt flower decorations', TRUE, NOW(),
	'assets/images/men/summer1.png', 60,100,1);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Shiny summer shirt', 'Shiny black buttonless short-sleeved shirt', TRUE, NOW(),
	'assets/images/men/summer2.png', 80,50,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Summer shirts bundle', 'Black and white complimentary shirts for summer', TRUE, NOW(),
	'assets/images/men/summer3.png', 120,40,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Summer v-neck', 'Green-beige short-sleeve v-neck shirt', TRUE, NOW(),
	'assets/images/men/summer4.png', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Blue sweatshirt', 'Light blue sweatshirt', TRUE, NOW(),
	'assets/images/men/sweatshirt.jpg', 120,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Dark Sweatshirt', 'Buttoned black short-sleeve shirt', TRUE, NOW(),
	'assets/images/men/sweatshirt1.jfif', 60,100,1);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Denim-style throw shirt', 'Long-sleeved buttoned denim-style shirt', TRUE, NOW(),
	'assets/images/men/throw4.png', 80,50,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('T-Shirt Dark', 'Dark Blue T-Shirt with coloured collar', TRUE, NOW(),
	'assets/images/men/tshirt1.jpg', 70,40,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('T-Shirt Stripy', 'T-Shirt with white, grey and red stripes', TRUE, NOW(),
	'assets/images/men/tshirt2.jpg', 60,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('T-Shirt two tone', 'T-shirt, upper half dark blue, lower half white', TRUE, NOW(),
	'assets/images/men/tshirt3.jpg', 60,25,1);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Black sweatshirt', 'Black long-sleeved shirt', TRUE, NOW(),
	'assets/images/men/tshirt4.jpg', 75,100,1);

/*Women*/
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Allen Dress 1', 'Blue flowered dress', TRUE, NOW(),
	'assets/images/women/allen3.png', 180,50,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Allen Dress 2', 'Beige buttoned dress', TRUE, NOW(),
	'assets/images/women/allen4.png', 160,100,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Denim Dress 1', 'Straight buttoned denim dress', TRUE, NOW(),
	'assets/images/women/denim1.png', 180,40,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Denim Dress 2', 'Flaring dark denim dress', TRUE, NOW(),
	'assets/images/women/denim2.png', 120,25,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Denim Jacket', 'Light denim overshirt', TRUE, NOW(),
	'assets/images/women/denim5.png', 120,25,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Tuffed jeans', 'Denim jeans with suffs', TRUE, NOW(),
	'assets/images/women/j1.jpg', 180,50,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Dark jeans', 'Dark denim slim-fit jeans', TRUE, NOW(),
	'assets/images/women/j2.webp', 160,100,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('High jeans', 'pale jeans with purple hue', TRUE, NOW(),
	'assets/images/women/j3.jpg', 180,40,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Demin jeans', 'Slim moderate denim jeanrs', TRUE, NOW(),
	'assets/images/women/j4.jpg', 120,25,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Straight jeans', 'These might be mens jeans', TRUE, NOW(),
	'assets/images/women/jeans1.jpg', 120,25,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Mustard-yellow kurti', 'Lovely orange-yellow kurti', TRUE, NOW(),
	'assets/images/women/kurti1.png', 180,50,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Flowered brown kurti', 'Beige kurti with blue and white flowers', TRUE, NOW(),
	'assets/images/women/kurti2.png', 160,100,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Flowered blue-green kurti', 'Green kurti with blue flowers', TRUE, NOW(),
	'assets/images/women/kurti3.png', 180,40,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Red Kurti', 'Large, fancy kurti with lepeord-patterned shoulder piece', TRUE, NOW(),
	'assets/images/women/kurti4.png', 350,25,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Blue plazo', 'Blue plazo with white dots', TRUE, NOW(),
	'assets/images/women/plazo1.png', 80,25,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Green plazo', 'Dark green plazo with shoulder piece', TRUE, NOW(),
	'assets/images/women/plazo2.png', 80,50,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Pink plazo', 'Pink plazo', TRUE, NOW(),
	'assets/images/women/plazo3.png', 80,100,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Black plazo', 'Black plazo with golden trimmed shoulder-piece', TRUE, NOW(),
	'assets/images/women/plazo4.png', 125,40,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Dark red saree', 'Dark red saree', TRUE, NOW(),
	'assets/images/women/saree1.png', 120,25,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Colourful saree', 'Saree of red, green, blue and gold', TRUE, NOW(),
	'assets/images/women/saree2.png', 120,25,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Red saree', 'Vivid red saree', TRUE, NOW(),
	'assets/images/women/saree3.png', 180,50,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Yellow saree', 'Vivid yellow saree', TRUE, NOW(),
	'assets/images/women/saree4.png', 160,100,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Black skirt', 'Black dotted skirt', TRUE, NOW(),
	'assets/images/women/skirt3.png', 180,40,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Blue skirt', 'Blue skirt with orange-red flowers', TRUE, NOW(),
	'assets/images/women/skirt4.png', 120,25,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Beige throw','Large beige throw', TRUE, NOW(),
	'assets/images/women/throw3.png', 220,25,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Flowery top', 'Thin top with flowers', TRUE, NOW(),
	'assets/images/women/top1.png', 50,50,2);
	
INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Green top', 'Dark green top with long flowery sleeves', TRUE, NOW(),
	'assets/images/women/top2.png', 80,100,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Red top', 'Red top with long sleeves', TRUE, NOW(),
	'assets/images/women/top3.png', 80,40,2);

INSERT INTO product (name, description, active, date_created, image_url, unit_price, units_in_stock, category_id)
	VALUES ('Pink top', 'Ping top with puff shoulders', TRUE, NOW(),
	'assets/images/women/top4.png', 120,25,2);

/*DROP TABLE IF EXISTS users;*/
CREATE TABLE IF NOT EXISTS users(
	id serial primary key,
	First_Name varchar(255) default null,
	Last_Name varchar (255) default null,
	Email_Id varchar (255) default null,
	Mobile_Number varchar(255) default null,
	BirthDate date default null,
	Password varchar (255) default null,
	unique (Email_Id)
);

/*SELECT * FROM product_category;*/
/*SELECT * FROM product;*/
SELECT * FROM users;