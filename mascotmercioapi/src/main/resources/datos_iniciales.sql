--Ejecutar estos comandos en la consola H2

-- Para la tabla DUENO_ESTABLECIMIENTO
INSERT INTO DUENO_ESTABLECIMIENTO (id, nombre, telefono, email, contraseña) VALUES 
(1, 'Ana Martínez', 987654321, 'ana@example.com', 'secreta123'),
(2, 'Carlos Rodríguez', 654321987, 'carlos@example.com', '1234abcd'),
(3, 'Laura López', 456789123, 'laura@example.com', 'p@ssw0rd'),
(4, 'David Fernández', 321987654, 'david@example.com', 'davi123!'),
(5, 'Marta Sánchez', 789123456, 'marta@example.com', '9876marta');

-- Para la tabla DUENO_MASCOTA
INSERT INTO DUENO_MASCOTA (id, nombre, telefono, direccion, email, contraseña) VALUES 
(1, 'Roberto Pérez', 456123789, 'Calle Secundaria 456', 'roberto@example.com', '12345678'),
(2, 'Cristina Martín', 987654321, 'Avenida Central 789', 'cristina@example.com', '654abcd!'),
(3, 'Javier Gómez', 321654987, 'Plaza Principal 321', 'javier@example.com', 'javier123'),
(4, 'Sandra Ruiz', 654789123, 'Camino Largo 987', 'sandra@example.com', 'sandrita'),
(5, 'Pablo García', 789321654, 'Paseo Corto 654', 'pablo@example.com', 'pablo456!');

INSERT INTO ESTABLECIMIENTO (id, nombre, telefono, direccion, email, dueno_Establecimiento_Id) VALUES
(1, 'Peluquería Canina', 123456789, 'Calle Gran Vía, 1', 'info@peluqueria.es', 1),
(2, 'Guardería Canina', 123456789, 'Calle Princesa, 2', 'info@guarderia.es', 2),
(3, 'Veterinaria', 123456789, 'Calle Mayor, 3', 'info@veterinaria.es', 3),
(4, 'Paseador de Perros', 123456789, 'Calle San Bernardo, 4', 'info@paseo.es', 4),
(5,'Vacunación', 123456789, 'Calle Moncloa, 5', 'info@vacunas.es', 5);

INSERT INTO ACTIVIDAD (nombre, descripcion, disponibilidad, precio, establecimiento_Id) VALUES
('Peluquería', 'Corte de pelo y baño', '12024-04-06', 100, 1),
('Guardería', 'Cuidado de mascotas', '2024-04-07', 200, 2),
('Paseo', 'Paseo de mascotas', '2024-04-08', 50, 3),
('Consulta', 'Consulta veterinaria', '2024-09-10', 150, 4),
('Vacunación', 'Vacunación de mascotas','2024-04-10', 80, 5);

INSERT INTO RESERVA (fecha, numpersonas, nummascotas, dueno_Mascota_Id) VALUES 
('2024-04-06', 1, 1, 1),
('2024-04-07', 2, 2, 2),
('2024-04-08', 3, 3, 3),
('2024-04-09', 4, 4, 4),
('2024-04-10', 5, 5, 5);

INSERT INTO VALORACION (calificacion, fecha, foto ,reseña, dueno_Mascota_Id, establecimiento_Id) VALUES
(5, '2024-04-11', '', 'Excelente servicio', 1, 1),
(4, '2024-04-12', '', 'Muy buen servicio', 2, 2),
(3, '2024-04-13', '', 'Buen servicio', 3, 3),
(2, '2024-04-14', '', 'Regular servicio', 4, 3),
(1, '2024-04-15', '', 'Malo servicio', 5, 2);

