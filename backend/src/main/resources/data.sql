INSERT INTO tb_user (name, email, password) VALUES ('Rose', 'rose@email.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Axl', 'axl@email.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_FUNCTIONARY');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_trainer (name, age, cpf, cell_phone) VALUES ('Rafael Miranda Souza', 37, '999.999.999-99', '31 9 9999-9999');
INSERT INTO tb_trainer (name, age, cpf, cell_phone) VALUES ('Alessandra Abreu Nunes', 38, '999.999.999-99', '31 9 9999-9999');
INSERT INTO tb_trainer (name, age, cpf, cell_phone) VALUES ('Lucas Vasconcelo', 38, '999.999.999-99', '31 9 9999-9999');
INSERT INTO tb_trainer (name, age, cpf, cell_phone) VALUES ('Sabrina Magalhães Costa', 37, '999.999.999-99', '31 9 9999-9999');

INSERT INTO tb_member (name, height, weight, bmi, rank, trainer_id) VALUES ('Amanda Costa Mezenga', 1.68, 50.0, 17.72, 'MAGREZA', 2);
INSERT INTO tb_member (name, height, weight, bmi, rank, trainer_id) VALUES ('Joana Manuela Silva', 1.62, 65.0, 24.77, 'NORMAL', 4);
INSERT INTO tb_member (name, height, weight, bmi, rank, trainer_id) VALUES ('Leonardo Roberto Costa', 1.77, 90.0, 28.73, 'SOBREPESO', 1);
INSERT INTO tb_member (name, height, weight, bmi, rank, trainer_id) VALUES ('Kassio Marinho Santos', 1.82, 110.0, 33.21, 'OBESIDADE', 4);
INSERT INTO tb_member (name, height, weight, bmi, rank, trainer_id) VALUES ('Roberto Augusto Abreu', 1.78, 140.0, 44.19, 'OBESIDADE GRAVE', 3);


