<?php

$id = get_the_ID();
$page = get_post($id);

if (!$page) {
  exit();
}

$slug = $page->post_name;
$parent_id = $page->post_parent;

$args = array(
  'post_type'      => 'page',
  'name'           => 'careers',
  'posts_per_page' => 1,
  'no_found_rows'  => true,
);
$posts = get_posts($args);

if (!$posts || $posts[0]->ID != $parent_id) {
  exit();
}


header('Location: /careers/detail?id='.$page->ID, true, 301);
exit();