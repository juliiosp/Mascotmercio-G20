--Ejecutar estos comandos en la consola H2

INSERT INTO DUENO_ESTABLECIMIENTO ( nombre, telefono, email, contraseña) 
VALUES ('Juan Pérez', 123456789, 'juan@example.com', 'contraseña123');

-- Insertar datos en la tabla DUENO_MASCOTA
INSERT INTO DUENO_MASCOTA (nombre, telefono, direccion, email, contraseña) 
VALUES ('María García', 123456789, 'Calle Principal 123', 'maria@example.com', 'contraseña123');

-- Insertar datos en la tabla ESTABLECIMIENTO
INSERT INTO ESTABLECIMIENTO (nombre, telefono, direccion, email) 
VALUES ('Veterinaria Mascotas Felices', 123456789, 'Calle Principal 123', 'info@veterinariamascotasfelices.com');

INSERT INTO ACTIVIDAD (id, nombre, descripcion, disponibilidad, precio) 
VALUES (1, 'Baño de mascotas', 'Servicio de baño y aseo para mascotas', '2024-04-06', 25);

INSERT INTO Reserva (fecha, numpersonas, nummascotas) VALUES 
('2024-04-11', 3, 0),
('2024-04-12', 1, 2),
('2024-04-13', 4, 1),
('2024-04-14', 2, 0),
('2024-04-15', 5, 3);


