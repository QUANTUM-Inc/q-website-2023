<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
global $quantum_parmalink;
global $quantum_root;

$keywords = getKeywords(pll_current_language());
$description = get_outline(get_the_ID());
if (pll_current_language() == "ja") {
    $quantum_parmalink = "en/";
    $quantum_root = "en/";
}

$mainvisual = get_article_img_url(get_the_ID());
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="<?= $keywords; ?>">
    <meta name="description" content="<?php echo $description; ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="quantum | <?php the_title(); ?>">
    <meta property="og:site_name" content="quantum">
    <meta property="og:description" content="<?php echo $description; ?>">
    <meta property="og:image" content="<?= $mainvisual; ?>">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <title>quantum | <?= the_title(); ?></title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136944646-1"></script>

    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());  gtag('config', 'UA-136944646-1');
    </script>

    <link rel="preload" href="/_nuxt/js/runtime.js" as="script"><link rel="preload" href="/_nuxt/js/commons/app.js" as="script"><link rel="preload" href="/_nuxt/css/vendors/app.css" as="style"><link rel="preload" href="/_nuxt/js/vendors/app.js" as="script"><link rel="preload" href="/_nuxt/css/app.css" as="style"><link rel="preload" href="/_nuxt/js/app.js" as="script">
          <link href="/_nuxt/css/vendors/app.css" rel="stylesheet"><link href="/_nuxt/css/app.css" rel="stylesheet">
</head>

<body class="<?php echo get_post_type(); ?> <?php echo pll_current_language(); ?>body">
<div class="blog" id="blog">
    <div class="interface">



