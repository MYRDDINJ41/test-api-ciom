CREATE DATABASE storage_ciom;

USE storage_ciom;

CREATE TABLE solution_ciom (
    id_solution INT AUTO_INCREMENT PRIMARY KEY,
    name_solution VARCHAR(50),
    tittle_solution VARCHAR(50),
    img_solution VARCHAR(255),
    description_solution VARCHAR(200),
    date_create INT,
    date_update INT
);

CREATE TABLE category_solution (
    id_category INT AUTO_INCREMENT PRIMARY KEY,
    name_category VARCHAR(50),
    tittle_category VARCHAR(50),
    description_category VARCHAR(200),
    img_category VARCHAR(255),
    id_solution INT,
    date_create INT,
    date_update INT,
    FOREIGN KEY (id_solution) REFERENCES solution_ciom(id_solution)
);

CREATE TABLE storage_category (
    id_sc INT AUTO_INCREMENT PRIMARY KEY,
    name_sc VARCHAR(50),
    tittle_sc VARCHAR(100),
    description_sub_category VARCHAR(200),
    img_sc VARCHAR(255),
    vid_sc VARCHAR(255),
    id_category INT, 
    date_create INT,
    date_update INT,
    FOREIGN KEY (id_category) REFERENCES category_solution(id_category)
);

-- Insertar soluciones
INSERT INTO solution_ciom (name_solution, tittle_solution, img_solution, description_solution, date_create, date_update)
VALUES
    ('Desarrollo Web', 'Solución Desarrollo Web', 'ruta_imagen_desarrollo_web.jpg', 'Descripción de la solución de Desarrollo Web', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Soluciones Capacitación & Edtech', 'Solución Capacitación & Edtech', 'ruta_imagen_capacitacion_edtech.jpg', 'Descripción de la solución de Capacitación & Edtech', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Audiovisual & Streaming', 'Solución Audiovisual & Streaming', 'ruta_imagen_audiovisual_streaming.jpg', 'Descripción de la solución de Audiovisual & Streaming', UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Contenidos elearning', 'Solución Contenidos elearning', 'ruta_imagen_contenidos_elearning.jpg', 'Descripción de la solución de Contenidos elearning', UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- Insertar categorías por solución
INSERT INTO category_solution (name_category, tittle_category, description_category, img_category, id_solution, date_create, date_update)
VALUES
    -- Categorías para Desarrollo Web
    ('HTML', 'Categoría HTML', 'Descripción de la categoría HTML', 'ruta_imagen_html.jpg', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('CSS', 'Categoría CSS', 'Descripción de la categoría CSS', 'ruta_imagen_css.jpg', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('JavaScript', 'Categoría JavaScript', 'Descripción de la categoría JavaScript', 'ruta_imagen_javascript.jpg', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Frameworks', 'Categoría Frameworks', 'Descripción de la categoría Frameworks', 'ruta_imagen_frameworks.jpg', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Responsive Design', 'Categoría Responsive Design', 'Descripción de la categoría Responsive Design', 'ruta_imagen_responsive_design.jpg', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),

    -- Categorías para Soluciones Capacitación & Edtech
    ('Plataformas Elearning', 'Categoría Plataformas Elearning', 'Descripción de la categoría Plataformas Elearning', 'ruta_imagen_plataformas_elearning.jpg', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Gamificación', 'Categoría Gamificación', 'Descripción de la categoría Gamificación', 'ruta_imagen_gamificacion.jpg', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Realidad Virtual', 'Categoría Realidad Virtual', 'Descripción de la categoría Realidad Virtual', 'ruta_imagen_realidad_virtual.jpg', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Inteligencia Artificial', 'Categoría Inteligencia Artificial', 'Descripción de la categoría Inteligencia Artificial', 'ruta_imagen_inteligencia_artificial.jpg', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Analítica de Datos', 'Categoría Analítica de Datos', 'Descripción de la categoría Analítica de Datos', 'ruta_imagen_analitica_datos.jpg', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),

    -- Categorías para Audiovisual & Streaming
    ('Producción Audiovisual', 'Categoría Producción Audiovisual', 'Descripción de la categoría Producción Audiovisual', 'ruta_imagen_produccion_audiovisual.jpg', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Transmisión en Vivo', 'Categoría Transmisión en Vivo', 'Descripción de la categoría Transmisión en Vivo', 'ruta_imagen_transmision_en_vivo.jpg', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Edición de Video', 'Categoría Edición de Video', 'Descripción de la categoría Edición de Video', 'ruta_imagen_edicion_video.jpg', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Plataformas Streaming', 'Categoría Plataformas Streaming', 'Descripción de la categoría Plataformas Streaming', 'ruta_imagen_plataformas_streaming.jpg', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Diseño de Sonido', 'Categoría Diseño de Sonido', 'Descripción de la categoría Diseño de Sonido', 'ruta_imagen_diseno_sonido.jpg', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),

    -- Categorías para Contenidos elearning
    ('Diseño Instruccional', 'Categoría Diseño Instruccional', 'Descripción de la categoría Diseño Instruccional', 'ruta_imagen_diseno_instruccional.jpg', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Creación de Contenidos', 'Categoría Creación de Contenidos', 'Descripción de la categoría Creación de Contenidos', 'ruta_imagen_creacion_contenidos.jpg', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Evaluación y Retroalimentación', 'Categoría Evaluación y Retroalimentación', 'Descripción de la categoría Evaluación y Retroalimentación', 'ruta_imagen_evaluacion_retroalimentacion.jpg', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Gestión de Aprendizaje', 'Categoría Gestión de Aprendizaje', 'Descripción de la categoría Gestión de Aprendizaje', 'ruta_imagen_gestion_aprendizaje.jpg', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Recursos Didácticos', 'Categoría Recursos Didácticos', 'Descripción de la categoría Recursos Didácticos', 'ruta_imagen_recursos_didacticos.jpg', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

-- Insertar subcategorías en storage_category
-- Subcategorías para la solución de Desarrollo Web
INSERT INTO storage_category (name_sc, tittle_sc, description_sub_category, img_sc, vid_sc, id_category, date_create, date_update)
VALUES
    ('Introducción a HTML', 'Subcategoría Introducción a HTML', 'Descripción de la subcategoría Introducción a HTML', 'ruta_imagen_html_1.jpg', 'ruta_video_html_1.mp4', 1, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('CSS Avanzado', 'Subcategoría CSS Avanzado', 'Descripción de la subcategoría CSS Avanzado', 'ruta_imagen_css_1.jpg', 'ruta_video_css_1.mp4', 2, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('JavaScript para Principiantes', 'Subcategoría JavaScript para Principiantes', 'Descripción de la subcategoría JavaScript para Principiantes', 'ruta_imagen_javascript_1.jpg', 'ruta_video_javascript_1.mp4', 3, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Frameworks de Desarrollo Web', 'Subcategoría Frameworks de Desarrollo Web', 'Descripción de la subcategoría Frameworks de Desarrollo Web', 'ruta_imagen_frameworks_1.jpg', 'ruta_video_frameworks_1.mp4', 4, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Diseño Responsivo', 'Subcategoría Diseño Responsivo', 'Descripción de la subcategoría Diseño Responsivo', 'ruta_imagen_responsive_design_1.jpg', 'ruta_video_responsive_design_1.mp4', 5, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Plataformas LMS', 'Subcategoría Plataformas LMS', 'Descripción de la subcategoría Plataformas LMS', 'ruta_imagen_plataformas_lms_1.jpg', 'ruta_video_plataformas_lms_1.mp4', 6, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Gamificación en la Educación', 'Subcategoría Gamificación en la Educación', 'Descripción de la subcategoría Gamificación en la Educación', 'ruta_imagen_gamificacion_1.jpg', 'ruta_video_gamificacion_1.mp4', 7, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Realidad Virtual en la Educación', 'Subcategoría Realidad Virtual en la Educación', 'Descripción de la subcategoría Realidad Virtual en la Educación', 'ruta_imagen_realidad_virtual_1.jpg', 'ruta_video_realidad_virtual_1.mp4', 8, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Inteligencia Artificial en la Educación', 'Subcategoría Inteligencia Artificial en la Educación', 'Descripción de la subcategoría Inteligencia Artificial en la Educación', 'ruta_imagen_inteligencia_artificial_1.jpg', 'ruta_video_inteligencia_artificial_1.mp4', 9, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Análisis de Datos en la Educación', 'Subcategoría Análisis de Datos en la Educación', 'Descripción de la subcategoría Análisis de Datos en la Educación', 'ruta_imagen_analisis_datos_1.jpg', 'ruta_video_analisis_datos_1.mp4', 10, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Producción de Videos', 'Subcategoría Producción de Videos', 'Descripción de la subcategoría Producción de Videos', 'ruta_imagen_produccion_videos_1.jpg', 'ruta_video_produccion_videos_1.mp4', 11, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Transmisión en Vivo de Eventos', 'Subcategoría Transmisión en Vivo de Eventos', 'Descripción de la subcategoría Transmisión en Vivo de Eventos', 'ruta_imagen_transmision_en_vivo_1.jpg', 'ruta_video_transmision_en_vivo_1.mp4', 12, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Edición de Video Avanzada', 'Subcategoría Edición de Video Avanzada', 'Descripción de la subcategoría Edición de Video Avanzada', 'ruta_imagen_edicion_video_1.jpg', 'ruta_video_edicion_video_1.mp4', 13, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Plataformas de Streaming', 'Subcategoría Plataformas de Streaming', 'Descripción de la subcategoría Plataformas de Streaming', 'ruta_imagen_plataformas_streaming_1.jpg', 'ruta_video_plataformas_streaming_1.mp4', 14, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Diseño de Sonido Profesional', 'Subcategoría Diseño de Sonido Profesional', 'Descripción de la subcategoría Diseño de Sonido Profesional', 'ruta_imagen_diseno_sonido_1.jpg', 'ruta_video_diseno_sonido_1.mp4', 15, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Diseño Instruccional Avanzado', 'Subcategoría Diseño Instruccional Avanzado', 'Descripción de la subcategoría Diseño Instruccional Avanzado', 'ruta_imagen_diseno_instruccional_1.jpg', 'ruta_video_diseno_instruccional_1.mp4', 16, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Creación de Contenidos Interactivos', 'Subcategoría Creación de Contenidos Interactivos', 'Descripción de la subcategoría Creación de Contenidos Interactivos', 'ruta_imagen_creacion_contenidos_1.jpg', 'ruta_video_creacion_contenidos_1.mp4', 17, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Evaluación Online', 'Subcategoría Evaluación Online', 'Descripción de la subcategoría Evaluación Online', 'ruta_imagen_evaluacion_online_1.jpg', 'ruta_video_evaluacion_online_1.mp4', 18, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Gestión de Aprendizaje Personalizada', 'Subcategoría Gestión de Aprendizaje Personalizada', 'Descripción de la subcategoría Gestión de Aprendizaje Personalizada', 'ruta_imagen_gestion_aprendizaje_1.jpg', 'ruta_video_gestion_aprendizaje_1.mp4', 19, UNIX_TIMESTAMP(), UNIX_TIMESTAMP()),
    ('Recursos Didácticos Digitales', 'Subcategoría Recursos Didácticos Digitales', 'Descripción de la subcategoría Recursos Didácticos Digitales', 'ruta_imagen_recursos_didacticos_1.jpg', 'ruta_video_recursos_didacticos_1.mp4', 20, UNIX_TIMESTAMP(), UNIX_TIMESTAMP());

