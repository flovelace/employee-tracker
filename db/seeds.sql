INSERT INTO department (dept_name)
VALUES
('Management'),
('Engineering'),
('Customer Support'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Engineering Manager', 125000, 1),
('Customer Support Manager', 95000, 1),
('Legal Counsel', 150000, 1),
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
('Guybrush', 'Threepwood', 3, NULL);