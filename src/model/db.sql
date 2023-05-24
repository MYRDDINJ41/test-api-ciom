CREATE DATABASE storage_ciom;

USE storage_ciom;

CREATE TABLE solution_ciom(
	solution_id INT AUTO_INCREMENT,
    name_solution VARCHAR(50),
    tittle_solution VARCHAR(100),
    description_solution VARCHAR(100),
    date_create INT,
    date_update INT,
    PRIMARY KEY (solution_id)
);


CREATE TABLE main_category(
	main_category_id INT AUTO_INCREMENT,
    name_category VARCHAR(50),
    tittle_category VARCHAR(100),
    description_category VARCHAR(100),
    solution_id INT,
    date_create INT,
    date_update INT,
    PRIMARY KEY (main_category_id),
    FOREIGN KEY (solution_id) REFERENCES solution_ciom(solution_id)
);

CREATE TABLE sub_category(
	sub_category_id INT AUTO_INCREMENT,
    name_sub_category VARCHAR(50),
    tittle_sub_category VARCHAR(100),
    description_sub_category VARCHAR(100),
    route_img VARCHAR(255),
    main_category_id INT, 
    date_create INT,
    date_update INT,
    PRIMARY KEY (sub_category_id),
    FOREIGN KEY (main_category_id) REFERENCES main_category(main_category_id)
);

CREATE TABLE vid_sub_category(
	vid_sub_category_id INT AUTO_INCREMENT,
    name_vid VARCHAR(50),
    route_vid VARCHAR(255),
    sub_category_id INT,
    date_create INT,
    date_update INT,
    PRIMARY KEY (vid_sub_category_id),
    FOREIGN KEY (sub_category_id) REFERENCES sub_category(sub_category_id)
);

INSERT INTO solution_ciom (name_solution, tittle_solution, description_solution, date_create, date_update)
VALUES
    ('Desarrollo Web', 'Título Desarrollo Web', 'Descripción Desarrollo Web', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Soluciones Capacitación & Edtech', 'Título Soluciones Capacitación & Edtech', 'Descripción Soluciones Capacitación & Edtech', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Audiovisual & Streaming', 'Título Audiovisual & Streaming', 'Descripción Audiovisual & Streaming', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Contenidos elearning', 'Título Contenidos elearning', 'Descripción Contenidos elearning', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO main_category (name_category, tittle_category, description_category, solution_id, date_create, date_update)
VALUES
    ('Categoría 1 Desarrollo Web', 'Título Categoría 1 Desarrollo Web', 'Descripción Categoría 1 Desarrollo Web', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Categoría 2 Desarrollo Web', 'Título Categoría 2 Desarrollo Web', 'Descripción Categoría 2 Desarrollo Web', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Categoría 1 Soluciones Capacitación & Edtech', 'Título Categoría 1 Soluciones Capacitación & Edtech', 'Descripción Categoría 1 Soluciones Capacitación & Edtech', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Categoría 2 Soluciones Capacitación & Edtech', 'Título Categoría 2 Soluciones Capacitación & Edtech', 'Descripción Categoría 2 Soluciones Capacitación & Edtech', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Categoría 1 Audiovisual & Streaming', 'Título Categoría 1 Audiovisual & Streaming', 'Descripción Categoría 1 Audiovisual & Streaming', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Categoría 2 Audiovisual & Streaming', 'Título Categoría 2 Audiovisual & Streaming', 'Descripción Categoría 2 Audiovisual & Streaming', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Categoría 1 Contenidos elearning', 'Título Categoría 1 Contenidos elearning', 'Descripción Categoría 1 Contenidos elearning', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Categoría 2 Contenidos elearning', 'Título Categoría 2 Contenidos elearning', 'Descripción Categoría 2 Contenidos elearning', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

INSERT INTO sub_category (name_sub_category, tittle_sub_category, description_sub_category, route_img, main_category_id, date_create, date_update)
VALUES
    ('Subcategoría 1.1 Desarrollo Web', 'Título Subcategoría 1.1 Desarrollo Web', 'Descripción Subcategoría 1.1 Desarrollo Web', 'ruta_img1.1.jpg', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 1.2 Desarrollo Web', 'Título Subcategoría 1.2 Desarrollo Web', 'Descripción Subcategoría 1.2 Desarrollo Web', 'ruta_img1.2.jpg', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.1 Desarrollo Web', 'Título Subcategoría 2.1 Desarrollo Web', 'Descripción Subcategoría 2.1 Desarrollo Web', 'ruta_img2.1.jpg', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.2 Desarrollo Web', 'Título Subcategoría 2.2 Desarrollo Web', 'Descripción Subcategoría 2.2 Desarrollo Web', 'ruta_img2.2.jpg', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 1.1 Soluciones Capacitación & Edtech', 'Título Subcategoría 1.1 Soluciones Capacitación & Edtech', 'Descripción Subcategoría 1.1 Soluciones Capacitación & Edtech', 'ruta_img1.1.jpg', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 1.2 Soluciones Capacitación & Edtech', 'Título Subcategoría 1.2 Soluciones Capacitación & Edtech', 'Descripción Subcategoría 1.2 Soluciones Capacitación & Edtech', 'ruta_img1.2.jpg', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.1 Soluciones Capacitación & Edtech', 'Título Subcategoría 2.1 Soluciones Capacitación & Edtech', 'Descripción Subcategoría 2.1 Soluciones Capacitación & Edtech', 'ruta_img2.1.jpg', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.2 Soluciones Capacitación & Edtech', 'Título Subcategoría 2.2 Soluciones Capacitación & Edtech', 'Descripción Subcategoría 2.2 Soluciones Capacitación & Edtech', 'ruta_img2.2.jpg', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 1.1 Audiovisual & Streaming', 'Título Subcategoría 1.1 Audiovisual & Streaming', 'Descripción Subcategoría 1.1 Audiovisual & Streaming', 'ruta_img1.1.jpg', 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 1.2 Audiovisual & Streaming', 'Título Subcategoría 1.2 Audiovisual & Streaming', 'Descripción Subcategoría 1.2 Audiovisual & Streaming', 'ruta_img1.2.jpg', 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.1 Audiovisual & Streaming', 'Título Subcategoría 2.1 Audiovisual & Streaming', 'Descripción Subcategoría 2.1 Audiovisual & Streaming', 'ruta_img2.1.jpg', 6, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.2 Audiovisual & Streaming', 'Título Subcategoría 2.2 Audiovisual & Streaming', 'Descripción Subcategoría 2.2 Audiovisual & Streaming', 'ruta_img2.2.jpg', 6, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 1.1 Contenidos elearning', 'Título Subcategoría 1.1 Contenidos elearning', 'Descripción Subcategoría 1.1 Contenidos elearning', 'ruta_img1.1.jpg', 7, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 1.2 Contenidos elearning', 'Título Subcategoría 1.2 Contenidos elearning', 'Descripción Subcategoría 1.2 Contenidos elearning', 'ruta_img1.2.jpg', 7, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.1 Contenidos elearning', 'Título Subcategoría 2.1 Contenidos elearning', 'Descripción Subcategoría 2.1 Contenidos elearning', 'ruta_img2.1.jpg', 8, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Subcategoría 2.2 Contenidos elearning', 'Título Subcategoría 2.2 Contenidos elearning', 'Descripción Subcategoría 2.2 Contenidos elearning', 'ruta_img2.2.jpg', 8, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());


INSERT INTO vid_sub_category (name_vid, route_vid, sub_category_id, date_create, date_update)
VALUES
    ('Video 1.1.1 Desarrollo Web', 'ruta_video_1.1.1.mp4', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 1.1.2 Desarrollo Web', 'ruta_video_1.1.2.mp4', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.1 Desarrollo Web', 'ruta_video_2.1.1.mp4', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.2 Desarrollo Web', 'ruta_video_2.1.2.mp4', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 1.1.1 Soluciones Capacitación & Edtech', 'ruta_video_1.1.1.mp4', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 1.1.2 Soluciones Capacitación & Edtech', 'ruta_video_1.1.2.mp4', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.1 Soluciones Capacitación & Edtech', 'ruta_video_2.1.1.mp4', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.2 Soluciones Capacitación & Edtech', 'ruta_video_2.1.2.mp4', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 1.1.1 Audiovisual & Streaming', 'ruta_video_1.1.1.mp4', 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 1.1.2 Audiovisual & Streaming', 'ruta_video_1.1.2.mp4', 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.1 Audiovisual & Streaming', 'ruta_video_2.1.1.mp4', 6, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.2 Audiovisual & Streaming', 'ruta_video_2.1.2.mp4', 6, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 1.1.1 Contenidos elearning', 'ruta_video_1.1.1.mp4', 7, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 1.1.2 Contenidos elearning', 'ruta_video_1.1.2.mp4', 7, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.1 Contenidos elearning', 'ruta_video_2.1.1.mp4', 8, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Video 2.1.2 Contenidos elearning', 'ruta_video_2.1.2.mp4', 8, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());
 