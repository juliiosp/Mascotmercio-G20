--Ejecutar estos comandos en la consola H2

INSERT INTO DUENO_ESTABLECIMIENTO ( nombre, telefono, email, contraseña) 
VALUES ('Juan Pérez', 123456789, 'juan@example.com', 'contraseña123');

-- Insertar datos en la tabla DUENO_MASCOTA
INSERT INTO DUENO_MASCOTA (nombre, telefono, direccion, email, contraseña) 
VALUES ('María García', 123456789, 'Calle Principal 123', 'maria@example.com', 'contraseña123'),
       ('Pedro Martínez', 987654321, 'Avenida Central 456', 'pedro@example.com', 'contraseña456'),
       ('Ana López', 555555555, 'Plaza Mayor 789', 'ana@example.com', 'contraseña789');

-- Insertar datos en la tabla ESTABLECIMIENTO
INSERT INTO ESTABLECIMIENTO (nombre, telefono, direccion, email) 
VALUES ('Veterinaria Mascotas Felices', 123456789, 'Calle Principal 123', 'info@veterinariamascotasfelices.com'),
       ('Tienda de Mascotas Pequeñines', 987654321, 'Avenida Central 456', 'ventas@tiendademascotaspequenines.com'),
       ('Peluquería Canina Alegres Colitas', 555555555, 'Plaza Mayor 789', 'contacto@peluqueriacaninaalegrescolitas.com');

INSERT INTO Actividad (id, nombre, descripcion, disponibilidad, precio) 
VALUES (1, 'Baño de mascotas', 'Servicio de baño y aseo para mascotas', '2024-04-06', 25);

