-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.25 - MySQL Community Server (GPL)
-- Операционная система:         Win32
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.migrations: ~13 rows (приблизительно)
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
	(20, '2019_09_12_092229_add_column_is_deleted_to_projects', 7),
	(21, '2019_09_27_192712_create_news_categories_table', 8),
	(22, '2019_09_27_192744_create_news_table', 8),
	(23, '2019_09_28_083816_add_column_is_deleted_to_news_categories', 8),
	(24, '2019_09_29_184943_create_news_images_table', 8);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_scratch.news
CREATE TABLE IF NOT EXISTS `news` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fk_category` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `news_fk_category_foreign` (`fk_category`),
  CONSTRAINT `news_fk_category_foreign` FOREIGN KEY (`fk_category`) REFERENCES `news_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.news: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` (`id`, `title`, `description`, `fk_category`, `created_at`, `updated_at`) VALUES
	(4, '«И никаких роллтонов!» Потратили первую стипендию первокурсницы в гипермаркете', 'У нас были только 40 рублей, желание потратить деньги и первокурсница. Итак, это молодая и дерзкая Настя. Недавно она получила 98,7 рубля — такую минимальную стипендию дает студентам БГУ. А если посчитать расходы на жилье и проездной, остается всего ничего. Мы решили отобрать оставшуюся сумму у первокурсницы и повели ее в гипермаркет возле общаги. Это первая стипендия, когда девятки в зачетке еще не заработали тебе на жизнь, а жить ее нужно. Довольствуемся тем, что есть, делаем ошибки в расчетах и ищем спасительное слово «акция». Вперед.', 1, '2019-09-30 13:17:34', '2019-09-30 13:17:34'),
	(5, 'Разведенный отец Максим Лысенко: был женат два раза, и от двух браков у меня по одному ребенку. Я плохой человек?', 'Может ли отец, ушедший из дома, считаться полноценным родителем? Может ли муж, покинувший семью, оставаться другом и партнером? Что движет мужчиной, который сознательно отказывается от обязательств быть вместе с женщиной, «пока смерть не разлучит»? Эти вопросы для кого-то сложные, для кого-то риторические, а для кого-то уже давно решенные: мир не черно-белый — и все наши «навсегда» сразу вызывают множество сомнений.', 2, '2019-09-30 13:38:40', '2019-09-30 13:38:40'),
	(6, 'Как в СССР видели автомобильные салоны будущего. Топ футуристичных интерьеров', 'Советские автопроизводители довольно часто создавали прототипы, заглядывающие за завесу времени. Но в большинстве своем это были либо эскизы, либо масштабные макеты типа ВАЗ X 1990 года. Над автомобильными интерьерами концептов в СССР практически не работали. Да и зачем? Для заметок в тематических журналах достаточно эффектного экстерьера. Публика, привыкшая к однотипным «Жигулям» и «Москвичам», будет рада и этому. Если копнуть концептуальное наследие советских автопроизводителей глубже, отыщем лишь пару-тройку моделей с интересными салонами. Они и демонстрируют нам будущее, каким его видели в Советах.', 3, '2019-09-30 14:35:55', '2019-09-30 14:35:55'),
	(7, 'Украинец попытался штурмовать белорусскую границу на кроссовере Ford', 'В автомобильном пункте пропуска «Славутич» (граница Беларуси и Украины) кроссовер Ford Kuga столкнулся с элементами пограничной инфраструктуры. Как пишет государственная погранслужба Украины, водитель автомобиля двигался на выезд из Украины и проигнорировал требования пограничного наряда об остановке.\r\n\r\nЧтобы предотвратить проезд через государственную границу, украинские пограничники применили средство принудительной остановки. В результате повреждено это самое средство, а также защитная стойка комплекса автоматизированного контроля «Янтарь». Значительные повреждения получил и сам автомобиль.', 3, '2019-09-30 14:51:50', '2019-09-30 14:51:50');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_scratch.news_categories
CREATE TABLE IF NOT EXISTS `news_categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deleted` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.news_categories: ~6 rows (приблизительно)
/*!40000 ALTER TABLE `news_categories` DISABLE KEYS */;
INSERT INTO `news_categories` (`id`, `title`, `is_deleted`, `created_at`, `updated_at`) VALUES
	(1, 'люди', '', '2019-09-30 11:40:14', '2019-09-30 11:40:14'),
	(2, 'мнения', '', '2019-09-30 11:40:24', '2019-09-30 11:40:24'),
	(3, 'авто', '', '2019-09-30 11:40:31', '2019-09-30 11:40:31'),
	(4, 'технологии', '', '2019-09-30 11:40:43', '2019-09-30 11:40:43'),
	(5, 'недвижимость', '', '2019-09-30 11:40:56', '2019-09-30 11:40:56'),
	(6, 'в мире', '', '2019-09-30 11:41:04', '2019-09-30 11:41:04');
/*!40000 ALTER TABLE `news_categories` ENABLE KEYS */;

-- Дамп структуры для таблица laravel_scratch.news_images
CREATE TABLE IF NOT EXISTS `news_images` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `src` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `fk_news` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `news_images_fk_news_foreign` (`fk_news`),
  CONSTRAINT `news_images_fk_news_foreign` FOREIGN KEY (`fk_news`) REFERENCES `news` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.news_images: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `news_images` DISABLE KEYS */;
INSERT INTO `news_images` (`id`, `name`, `src`, `alt`, `fk_news`, `created_at`, `updated_at`) VALUES
	(4, 'eL6Es1ZgnxSPH8CntZYxcvfuCqaGYY4QHRnSkqQr.jpeg', 'uploads/news_img/eL6Es1ZgnxSPH8CntZYxcvfuCqaGYY4QHRnSkqQr.jpeg', '', 4, '2019-09-30 13:17:34', '2019-09-30 13:17:34'),
	(5, 'GTFoz3zEdaPoTst1rjzTmFTSKfU9zxo8j4JWxNwm.jpeg', 'uploads/news_img/GTFoz3zEdaPoTst1rjzTmFTSKfU9zxo8j4JWxNwm.jpeg', '', 5, '2019-09-30 13:38:40', '2019-09-30 13:38:40'),
	(6, 'XtscSB9f99vlgH38UxNoXhqzXvG84mdtEyWBWTk2.jpeg', 'uploads/news_img/XtscSB9f99vlgH38UxNoXhqzXvG84mdtEyWBWTk2.jpeg', '', 6, '2019-09-30 14:35:55', '2019-09-30 14:35:55'),
	(7, 'i8k6josOSJKdYHC3Jw8tOEfjpNoU3hMVOgKk2rpu.jpeg', 'uploads/news_img/i8k6josOSJKdYHC3Jw8tOEfjpNoU3hMVOgKk2rpu.jpeg', '', 7, '2019-09-30 14:51:50', '2019-09-30 14:51:50');
/*!40000 ALTER TABLE `news_images` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы laravel_scratch.projects: ~6 rows (приблизительно)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`id`, `title`, `description`, `is_deleted`, `created_at`, `updated_at`) VALUES
	(1, 'ARRVLS', 'A storytelling podcast produced and written by Jonathan Hirsch that tells documentary audio stories about moments in our lives when we experience unexpected change.\r\nWhy We Love It: If blogs are the original side project, then podcasts are the new frontier. Still, unless you’re Serial, it probably won’t pay the bills (at least not right away!). That’s why Hirsch does this on the side of restaurant and freelance jobs.', '', '2019-08-27 09:43:27', '2019-09-13 10:05:43'),
	(2, 'WELL / AWAREs', 'Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', '', '2019-08-27 09:47:10', '2019-09-23 12:55:01'),
	(3, 'Consultant us', 'The text about your services will look good here. Use this opportunity to profitably present your company to customers. Explain your competitive advantage. And so on...\r\nBurger King launched what, on the surface, seems like a clever, effective idea—call a truce to the “Burger Wars” by collaborating with (ahem) arch rival McDonald’s to offer the “McWhopper”.', '', '2019-08-28 15:08:54', '2019-09-27 11:57:28'),
	(4, 'Caruma My', 'Because it’s really the perfect example of a side project. It’s something that you’d actually want to do in your free time (eat burgers), but it also allows the designers who started it to hone their skills. And it’s led to impressive success: They were featured in Squarespace advertising since they use the platform, and they are looking to make a book or some sort of publication out of it.', '', '2019-08-28 16:07:29', '2019-09-27 12:30:40'),
	(5, 'Sketchplanations', 'What it Is: A weekly newsletter sending you simple sketches that teach you things.\r\n\r\nWhy We Love It: This started out as a personal, analog project—UX designer Jonathan Hey received a journal with a page every day for a year of sketching, which he used to practice the skill. When he got to the end, he wanted another challenge, so he decided to start sketching one explanation a day and sharing it with the world. He has now cut back to once a week because life happens, and that’s okay.', '', '2019-09-12 12:12:46', '2019-09-27 12:30:33'),
	(6, 'Hong Kong-Zhuhai-Macau Bridge, Hong Kong', 'Let\'s kick things off with one of the most amazing constructions in the world. This is an incredible feat of engineering. The Hong Kong to Zuchai to Macau Bridge system is an ongoing project consisting of bridges, artificial islands, and tunnels.\r\n\r\nThese three cities are all located in the Pearl River Delta in East Asia. The entire project began in 2009 and will stretch over 50km. The entire project has been designed to stand for at least 120 years. The last bridge was completed last year and the entire project is due to open in December of this year.', '', '2019-09-20 12:40:09', '2019-09-27 12:32:04');
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

-- Дамп данных таблицы laravel_scratch.tasks: ~10 rows (приблизительно)
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` (`id`, `description`, `is_completed`, `is_deleted`, `created_at`, `updated_at`) VALUES
	(1, 'Go to market', 1, '', '2019-08-27 14:23:51', '2019-09-27 12:42:05'),
	(2, 'Go to jobs', 0, '', '2019-08-27 14:23:51', '2019-09-27 10:05:15'),
	(3, 'Go to concert with friends', 0, '', '2019-08-27 14:23:51', '2019-09-27 10:01:41'),
	(4, 'Go to dinners', 0, '', '2019-08-28 15:09:00', '2019-09-27 10:07:23'),
	(5, 'Buy car mat', 0, '', '2019-08-28 15:09:02', '2019-09-27 10:01:44'),
	(6, 'Metting with friends', 0, '', '2019-08-28 15:11:47', '2019-09-27 10:06:52'),
	(7, 'Learn laravel scratchs', 0, '', '2019-09-09 15:30:45', '2019-09-27 09:58:06'),
	(16, 'Laracasts the bests', 0, '', '2019-09-09 16:20:51', '2019-09-27 09:58:56'),
	(17, 'Go to vitebsk from Minsk', 0, '', '2019-09-11 17:03:15', '2019-09-27 10:07:01'),
	(18, 'Go to Novolukoml', 0, '', '2019-09-11 23:40:32', '2019-09-27 09:47:17');
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
