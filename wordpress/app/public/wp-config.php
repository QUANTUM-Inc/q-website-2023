<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'fNnClDfo+2ux2ABdADptQEavRIYAp4zPkh056wvc23OjwePi4g2OwbohJ+hs1/0pprv21ZPOdLY1GNnuk6lCcQ==');
define('SECURE_AUTH_KEY',  'VxuO4AK0FVw/KG/XtzklNqvkhPrNJwksHCBk8G9dZ49xMeDeXhxGjEHM/s2DBg+pMwNqbKvTRFnGoWLSFQpr9Q==');
define('LOGGED_IN_KEY',    '7hJGptt+KFgnuRoYyKb31d1yH2XAuQN7PBD1KmEjVYOGXMcQjZbaCz7wTXjoQ7SnErSQiSG8DwFZVkyDiy6MSw==');
define('NONCE_KEY',        'gbqSHhazQfoNFVUkb4quSWmkBLEgXKOkpP+D61koQlF1XohSg5mggbGTVbrnP+LChCVbd+v2X6AYHeBCCHRjQw==');
define('AUTH_SALT',        'c6nPGtInV4uf+Sa0Gi15gbtn+NbKc5oPAlUxTuzXVGLDJFa8Y+8+c7LaUlWgU4KvtLK5yLVViZJlXOMqxTgCdw==');
define('SECURE_AUTH_SALT', 'zQVvnGuxxTaABjlgYLgdIyOsdliZx79IGrht9iO3+rkP8l4IYwWj0EP/a1aGLjrS6+Lw6RKkQSM+QdvvauHqOg==');
define('LOGGED_IN_SALT',   'g42XZcvqIb/cZL2NTmUXjVHCC+qcpe5mJ+ro1wxk6oPmxsL6J1x1Jlmmg5c9P4ehxmQfNT5T0diM962DGBqb5g==');
define('NONCE_SALT',       'SkLsO5Sm35aKlpPu9dgQvtjEs+XndAM+GDTMyhYf33OWl6mF1fXzapq0yHZkC01fAhAc1fPDcmi/4on/cVfNDA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
