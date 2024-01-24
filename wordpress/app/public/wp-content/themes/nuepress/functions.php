<?php

// Addded to end of the post excerpt if longer than 55 words
function new_excerpt_more($more)
{
  return '…';
}
add_filter('excerpt_more', 'new_excerpt_more');

// Increase max page limit
function increase_per_page_limit($params)
{
  if (isset($params['per_page'])) {
    $params['per_page']['maximum'] = 1000000;
  }
  return $params;
}

add_filter('rest_post_collection_params', 'increase_per_page_limit', 10, 2);
add_filter('rest_projects_collection_params', 'increase_per_page_limit', 10, 2);
add_filter('rest_journal_collection_params', 'increase_per_page_limit', 10, 2);
add_filter('rest_page_collection_params', 'increase_per_page_limit', 10, 2);
add_filter('rest_news_collection_params', 'increase_per_page_limit', 10, 2);
add_filter('rest_category_collection_params', 'increase_per_page_limit', 10, 2);
add_filter('rest_user_collection_params', 'increase_per_page_limit', 10, 2);

// APIから不要項目を削除----
add_action('rest_prepare_projects', 'remove_post_links', 10, 3);
function remove_post_links($response, $post, $request) {
    $links = $response->get_links();
    $params = $request->get_params();

    foreach ( $links as $key => $value) {
        $response->remove_link($key);
    }
    // nolayout指定でacf部分をカット
    if (!empty($params['nolayout'])) {
        //var_dump($response->data['acf']['layouts']);
        //die;
        if (!empty($response->data['acf']['layouts'])) {
            $response->data['acf']['layouts'] = null;
        }
    }

    return $response;
 }

// Hide customize theme options
function remove_customize_theme_options($wp_customize)
{
  $wp_customize->remove_section('colors');
  $wp_customize->remove_section('header_image');
  $wp_customize->remove_section('background_image');
  $wp_customize->remove_panel('nav_menus');
  $wp_customize->remove_section('static_front_page');
  $wp_customize->remove_section('custom_css');
}
add_action('customize_register', 'remove_customize_theme_options', 50);

// Remove comments from admin
function my_remove_admin_menus()
{
//   remove_menu_page( 'edit.php?post_type=page' );
  remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'my_remove_admin_menus');

/*【管理画面】投稿メニューを非表示 */
function remove_menus () {
  global $menu;
  remove_menu_page( 'edit.php' ); // 投稿を非表示
}
add_action('admin_menu', 'remove_menus');

// Removes comment from admin bar
function mytheme_admin_bar_render()
{
  global $wp_admin_bar;
  $wp_admin_bar->remove_menu('comments');
}
add_action('wp_before_admin_bar_render', 'mytheme_admin_bar_render');

// https://github.com/WordPress/gutenberg/issues/1761#issuecomment-412876340
add_filter('rest_url', function ($url) {
  $url = str_replace(home_url(), site_url(), $url);
  return $url;
});


/* ================================ *
   WP REST APIのオリジナルエンドポイント追加
 * ================================ */
function add_rest_original_endpoint() {
    //エンドポイントを登録
    register_rest_route('wp/custom', '/notes', array(
        'methods' => 'GET',
        //エンドポイントにアクセスした際に実行される関数
        'callback' => 'note_magazine_feed',
    ));

    /*register_rest_route('wp/custom', '/projectlist', array(
        'methods' => 'GET',
        //エンドポイントにアクセスした際に実行される関数
        'callback' => 'project_lists',
    ));*/
}
add_action('rest_api_init', 'add_rest_original_endpoint');

//RSSの読み込み
function note_magazine_feed(){
   $num = 4;
   include_once( ABSPATH . WPINC . '/feed.php' );
   $rss = fetch_feed( 'https://note.com/quantum_studio/m/m4512a0eb7e07/rss' );
   if ( !is_wp_error( $rss ) ) {
       $maxitems = $rss->get_item_quantity($num);
       $rss_items = $rss->get_items( 0, $maxitems );
   }
   if ( !empty( $maxitems ) ) {
       if ($maxitems == 0){
           echo '<!-- RSSデータがありませんでした -->';
       } else {
            $result = array();
            foreach( $rss_items as $item ) {
                array_push($result, array(
                    'title' => $item->get_title(),
                    'updateDate' => $item->get_date('Y/m/d'),
                    'link' => $item->get_permalink()
                ));
            }
            return $result;
       }
   }
   return array();
}

function project_lists( $args, $request ) {
    include_once( ABSPATH . WPINC . '/feed.php' );
    $rss = fetch_feed( 'https://note.com/quantum_studio/m/m4512a0eb7e07/rss' );
}

/* ================================ *

 * ================================ */
add_filter("rest_projects_query", function( $args, $request ) {

    if ($request['menuorder']) {
        $args['orderby'] = 'menu_order';
        //$args['fields'] = 'ids';
        /*var_dump($args);
        die;*/
        /*
        $args['meta_query'][] = [
          'key' => 'fuga',
          'value' => esc_sql(''),
        ];*/
    }
    if ($request['preview']) {
        $args['status'] = 'private';
    }
    return $args;
}, 10, 2 );

/* ================================ *
  プレビューリンク変更
 * ================================ */
//プレビューを押したときのリンク先を変更
/*add_filter( 'preview_post_link', function($link) {
    global $post_type;
    if($post_type == 'projects'){
        $link = str_replace("/quantum2021", "", $link);
    }
    return $link;
});*/


// 画像の圧縮率
add_filter( 'jpeg_quality', function( $arg ){ return 100; } );

/* ================================ *
 for Sinle Page
 * ================================ */
function getKeywords($lang) {
    $result = "";
    if ($lang == "ja") {
        $result = "quantum, QUANTUM, クオンタム, Startup Stduio, スタートアップスタジオ, スタートアップ・スタジオ, Be a Founder";
    } else {
        $result = "quantum, QUANTUM, Startup Studio, Be a Founder";
    }
    return $result;
}

function get_article_img_url($id)
{
    // 記事ページの場合
    if (is_single()) {
        return get_field("main_visual")["url"];
    }
}
function get_outline($id)
{
    // 記事ページの場合
    if (is_single()) {
        return get_field("outline");
    }
}