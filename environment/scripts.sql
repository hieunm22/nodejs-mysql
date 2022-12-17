create table products
(
  id bigint not null primary key AUTO_INCREMENT,
  productName text,
  releaseDate date,
  price bigint
)
insert into products(productName, releaseDate, price)
values ('iphone 14 pro max', '2022-09-14', 28000000)
, ('samsung s22', '2022-10-29', 25000000)
, ('pixel 6', '2021-05-10', 8000000)
