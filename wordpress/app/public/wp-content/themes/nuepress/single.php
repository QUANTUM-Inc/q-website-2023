<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>
			<?php
			/* Start the Loop */
			while ( have_posts() ) :
				the_post();
				if (is_preview()) {
					get_template_part( 'template-parts/content/content_preview', 'single' );
				} else {
					get_template_part( 'template-parts/content/content', 'single' );
				}


			endwhile; // End of the loop.
			?>

<?php
get_footer();
