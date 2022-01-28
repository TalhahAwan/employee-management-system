INSERT INTO departments (name)
VALUES 
    ("Creative"),
    ("Sound Engineering"),
    ("Management"),
    ("Executive");


INSERT INTO roles (title, salary, departments_id)
VALUES 
    ("Rapper", "5000000", 1),
    ("Producer", "3000000", 2),
    ("Agent", "1000000", 3),
    ("Label Owner", "5000000", 4);


INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES 
    ("J", "Cole", 1,null),
    ("Metro", "Boomin", 2,1),
    ("Ibrahim", "Hamad", 3,1),
    ("Jay", "Z", 4,null);
