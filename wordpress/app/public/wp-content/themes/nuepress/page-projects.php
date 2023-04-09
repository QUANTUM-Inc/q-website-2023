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

get_header('news');
// Featuredリスト
$featured_list = get_posts(array(
	'post_type' => 'post', // 特定のカスタム投稿タイプスラッグを指定
	'posts_per_page' => 3, // 取得件数
	'orderby'=>'meta_value_num',
	'order' => 'DESC',
	'meta_key'=>'featured_order',
	'meta_query' => array(
        array('key'=>'featured', 'value'=>'1', 'compare'=>'=='),
    )
));
// NEWSリスト
$news_list = get_posts(array(
	'post_type' => 'post', // 特定のカスタム投稿タイプスラッグを指定
	'orderby' => 'meta_value_num', // 表示順の基準データ
	'order' => 'DESC', // 表示順の方向
	'posts_per_page' => 500, // 取得件数
	'meta_key' => 'date',
));
?>
    <main id="news" class="fea">
        <section class="p-section" id="background">
            <video src="/assets/video/sp_news.mp4" preload="metadata" muted="muted" autoplay playsinline loop data-video="/assets/video/news.mp4" data-video-sp="/assets/video/sp_news.mp4"></video>
        </section>
        <section class="keyvisuals p-section c-section" id="keyvisual">
            <div class="wrap">
                <h2 class="title">
                    <p>News</p>
                </h2>
            </div>
        </section>

        <section class="p-section c-section" id="news-area">
            <div class="p-section__inner CATEGORY_all WORK_all YEAR_all">
                <?php
                    get_template_part( 'template-parts/news/tags', 'none' );
                ?>
                <h3>Featured</h3>
                <div class="news-wrap featured">
                    <?php
                        $count = 0;
                        // Load posts loop.
                        $isFirst = true;
                        foreach ($featured_list as $news) {
                            //the_post();
                            $count += 1;
                            set_query_var('count', $count);
                            set_query_var('news', $news);
                            get_template_part( 'template-parts/content/content', 'newslist');
                        }
                    ?>
                </div>

                <div class="news-wrap">
                <?php
                    $count = 0;
                    // Load posts loop.
                    $isFirst = true;

                    foreach ($news_list as $news) {
                        //the_post();
                        $count += 1;
                        //if (get_field('featured', $news->ID) != '1') {
                            set_query_var('count', $count);
                            set_query_var('news', $news);
                            get_template_part( 'template-parts/content/content', 'newslist');
                        //}

                    }
                ?>
                </div>

    		</div>
        </section>
    </main><!-- #main -->



<?php
get_footer();
