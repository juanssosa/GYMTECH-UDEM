-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-10-2022 a las 23:49:36
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gymtech-udem`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medical_record`
--

CREATE TABLE `medical_record` (
  `mrid` int(10) NOT NULL,
  `a_medical` text NOT NULL,
  `a_deportive` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medical_record`
--

INSERT INTO `medical_record` (`mrid`, `a_medical`, `a_deportive`) VALUES
(1, 'No tiene', 'NA'),
(2, 'NA', 'NA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserve`
--

CREATE TABLE `reserve` (
  `rid` int(10) NOT NULL,
  `date` date NOT NULL,
  `hour` varchar(20) NOT NULL,
  `reserve_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserve`
--

INSERT INTO `reserve` (`rid`, `date`, `hour`, `reserve_status`) VALUES
(1, '2022-10-01', '16:35', 'Activo'),
(2, '2022-10-02', '08:51', 'Activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `sex` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `sex`, `email`, `username`, `password`, `rol`) VALUES
(1, 'Juan', 'Masculino', 'juan@gmail.com', 'juann', '123', 'Est'),
(2, 'Maria', 'Femenino', 'maria@gmail.com', 'mariaa', '123', 'Est'),
(3, 'Raul', 'Maculino', 'raul@gmail.com', 'raull', '123', 'Empl');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `medical_record`
--
ALTER TABLE `medical_record`
  ADD PRIMARY KEY (`mrid`);

--
-- Indices de la tabla `reserve`
--
ALTER TABLE `reserve`
  ADD PRIMARY KEY (`rid`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `medical_record`
--
ALTER TABLE `medical_record`
  MODIFY `mrid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `reserve`
--
ALTER TABLE `reserve`
  MODIFY `rid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
