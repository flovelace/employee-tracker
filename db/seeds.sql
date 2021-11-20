INSERT INTO department (dept_name)
VALUES
('Management'),
('Engineering'),
('Customer Support'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Engineering Manager', 125000, 1),
('Director of Customer Experience', 95000, 1),
('Senior Legal Counsel', 150000, 1),
('Senior Developer', 90000, 2),
('Junior Developer', 60000, 2),
('Intern Developer', 40000, 2),
('Team Leader', 50000, 3),
('Customer Support Agent', 45000, 3),
('Lawyer', 100000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Jill', 'Valentine', 1, NULL),
('Elaine', 'Benes', 2, NULL),
('Guybrush', 'Threepwood', 3, NULL),
('Art', 'Vandelay', 4, 1),
('Chris', 'Lightfellow', 4, 1),
('Geralt', 'of Rivia', 5, 1),
('Cloud', 'Strife', 5, 1),
('Gandalf (the Grey)', 'Stormcrow', 6, 1),
('Aerith', 'Gainsborough', 7, 2),
('Chloe', 'Price', 8, 2),
('Max', 'Caulfield', 8, 2),
('Larry', 'David', 8, 2),
('Lionel', 'Hutz', 9, 3),
('Phoenix', 'Wright', 9, 3);