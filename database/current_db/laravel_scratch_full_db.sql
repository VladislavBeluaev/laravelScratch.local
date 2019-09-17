-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.0.15 - MySQL Community Server - GPL
-- Операционная система:         Win64
-- HeidiSQL Версия:              10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных laravel_scratch
CREATE DATABASE IF NOT EXISTS `laravel_scratch` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `laravel_scratch`;

-- Дамп структуры для таблица laravel_scratch.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.migrations: ~8 rows (приблизительно)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(3, '2014_10_12_000000_create_users_table', 1),
	(4, '2014_10_12_100000_create_password_resets_table', 1),
	(6, '2019_08_27_093631_create_projects', 2),
	(9, '2019_08_27_134821_create_tasks', 3),
	(11, '2019_08_28_110856_add_default_option_to_projects', 4),
	(12, '2019_08_28_120100_add_default_option_to_timestamps_tasks', 5),
	(17, '2019_09_09_072759_add_column_is_completed_to_tasks', 6),
	(18, '2019_09_09_072916_add_column_is_deleted_to_tasks', 6),
	(20, '2019_09_12_092229_add_column_is_deleted_to_projects', 7);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_scratch.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.password_resets: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_scratch.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.projects: ~5 rows (приблизительно)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`id`, `title`, `description`, `is_deleted`, `created_at`, `updated_at`) VALUES
	(1, 'ARRVLS', 'A storytelling podcast produced and written by Jonathan Hirsch that tells documentary audio stories about moments in our lives when we experience unexpected change.\r\nWhy We Love It: If blogs are the original side project, then podcasts are the new frontier. Still, unless you’re Serial, it probably won’t pay the bills (at least not right away!). That’s why Hirsch does this on the side of restaurant and freelance jobs.', 'recycle', '2019-08-27 09:43:27', '2019-09-13 10:05:43'),
	(2, 'WELL / AWARE', 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', '', '2019-08-27 09:47:10', '2019-09-12 09:11:51'),
	(3, 'Consultant us', 'The text about your services will look good here. Use this opportunity to profitably present your company to customers. Explain your competitive advantage.\r\nBurger King launched what, on the surface, seems like a clever, effective idea—call a truce to the “Burger Wars” by collaborating with (ahem) arch rival McDonald’s to offer the “McWhopper”.', 'recycle', '2019-08-28 15:08:54', '2019-09-16 15:04:52'),
	(4, 'Caruma My', 'Because it’s really the perfect example of a side project. It’s something that you’d actually want to do in your free time (eat burgers), but it also allows the designers who started it to hone their skills. And it’s led to impressive success: They were featured in Squarespace advertising since they use the platform, and they are looking to make a book or some sort of publication out of it.', 'recycle', '2019-08-28 16:07:29', '2019-09-13 10:05:34'),
	(5, 'Sketchplanations', 'What it Is: A weekly newsletter sending you simple sketches that teach you things.\r\n\r\nWhy We Love It: This started out as a personal, analog project—UX designer Jonathan Hey received a journal with a page every day for a year of sketching, which he used to practice the skill. When he got to the end, he wanted another challenge, so he decided to start sketching one explanation a day and sharing it with the world. He has now cut back to once a week because life happens, and that’s okay.', '', '2019-09-12 12:12:46', '2019-09-12 12:12:46');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_scratch.tasks
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `is_deleted` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.tasks: ~7 rows (приблизительно)
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` (`id`, `description`, `is_completed`, `is_deleted`, `created_at`, `updated_at`) VALUES
	(1, 'Go to marketssdsd', 0, 'recycle', '2019-08-27 14:23:51', '2019-09-12 09:06:16'),
	(2, 'Go to jobs', 1, '', '2019-08-27 14:23:51', '2019-09-11 20:38:24'),
	(3, 'Go to concert with friesdsnds', 0, '', '2019-08-27 14:23:51', '2019-09-12 09:13:03'),
	(4, 'Go to dinners', 0, 'recycle', '2019-08-28 15:09:00', '2019-09-11 20:38:27'),
	(5, 'Buy car mat', 0, '', '2019-08-28 15:09:02', '2019-09-11 20:40:12'),
	(6, 'Metting with friend', 0, '', '2019-08-28 15:11:47', '2019-09-11 14:00:02'),
	(7, 'Learn laravel scratchs', 1, '', '2019-09-09 15:30:45', '2019-09-11 20:38:15'),
	(16, 'Laracasts the bests', 0, '', '2019-09-09 16:20:51', '2019-09-11 20:21:11'),
	(17, 'Go to vitebsk', 0, '', '2019-09-11 17:03:15', '2019-09-11 17:03:15'),
	(18, 'Go to Novolukoml', 0, 'recycle', '2019-09-11 23:40:32', '2019-09-12 09:05:23');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_scratch.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.users: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
