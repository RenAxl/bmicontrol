create table tb_member (id  bigserial not null, age int4, bmi float8, height float8, name varchar(255), rank varchar(255), weight float8, trainer_id int8, primary key (id));
create table tb_role (id  bigserial not null, authority varchar(255), primary key (id));
create table tb_trainer (id  bigserial not null, age int4, cell_phone varchar(255), cpf varchar(255), name varchar(255), primary key (id));
create table tb_user (id  bigserial not null, email varchar(255), name varchar(255), password varchar(255), primary key (id));
create table tb_user_role (user_id int8 not null, role_id int8 not null, primary key (user_id, role_id));
alter table tb_user add constraint UK_4vih17mube9j7cqyjlfbcrk4m unique (email);
alter table tb_member add constraint FK5ow670erkcfbyw5u6mmfki7ye foreign key (trainer_id) references tb_trainer;
alter table tb_user_role add constraint FKea2ootw6b6bb0xt3ptl28bymv foreign key (role_id) references tb_role;
alter table tb_user_role add constraint FK7vn3h53d0tqdimm8cp45gc0kl foreign key (user_id) references tb_user;
