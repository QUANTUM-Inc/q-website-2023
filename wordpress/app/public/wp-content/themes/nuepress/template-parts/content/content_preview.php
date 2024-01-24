<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @since 1.0.0
 */

?>
<?php

get_field('outline');

$useMainvisual = get_field('use_mainvisual');
$mainVisual = get_field('main_visual');
$categoryNames = '';
foreach (get_the_category() as $category) {
    $categoryNames .= get_cat_name($category->term_id);
}
$hasLatest = get_field("latest_journal");
//var_dump($hasLatest);
$layouts = get_field('layouts');
if (!empty($hasLatest)) {
    $latestJurnals = get_posts(array(
        'post_type' => 'journal',
        'posts_per_page' => 1000,
    ));
    //var_dump($latestJurnals);
}


?>

<div class="project <?= $useMainvisual ? "" : "l-no-mv"; ?>">
    <? if ($useMainvisual) { ?>
        <section class='l-section l-mainvisual'>
            <picture>
                <source media="(max-width: 768px)" srcset="<?= get_field('main_visual_sp'); ?>">
                <img src='<?= $mainVisual['url']; ?>' alt=''>
            </picture>
        </section>
    <? } ?>

    <!-- 見出し -->
    <section class='l-section'>
        <div class='l-section__inner js-lazyclass'>
            <h2><?= the_title(); ?></h2>
        </div>
    </section>

    <!-- 基本情報 -->
    <section class='l-section'>
        <div class='l-section__inner'>
            <div class='l-text l-text-2column'>
                <div class='l-text-2column_1 type-tags js-lazyclass'>
                    <span class='<?= get_field("clients_partners") ? "hasclient" : ""; ?>'>
                        <?= $categoryNames; ?>
                    </span>
                    <? if (get_field("clients_partners")) { ?>
                        <span>clients/partners</span>
                    <? } ?>
                </div>
                <div class='l-text-2column_2 js-lazyclass'>
                    <p>
                        <?= get_field("outline"); ?>
                    </p>
                </div>
            </div>
        </div>
    </section>


    <?php if(!acf_is_empty($hasLatest)) { ?>
    <!-- Latest Journal Anchor -->
    <section class='l-section'>
        <div class='l-section__inner js-lazyclass'>
            <div class='l-text l-text-2column'>
                <div class='l-text-2column_1 type-tags'>
                    <a href='#'>- latest journal</a>
                </div>
                <div class='l-text-2column_2 type-void'></div>
            </div>
        </div>
    </section>
    <?php } ?>

    <?php if (!is_null($layouts)) { ?>
        <!-- ---- レイアウトパターン ---- -->
        <?php foreach ($layouts as $layout) { ?>
            <?php if (strpos($layout['layout_type'], "l-image1:") !== false) { ?>
                <!-- 画像1つ 通常 -->
                <section class='l-section'>
                    <div class='l-section__inner js-lazyclass'>
                        <div class='l-image l-image1 <?= $layout['is_right'] ? "right" : "" ?> <?= $layout['is_image_center'] ? "center" : "" ?> <?= $layout['custom_size'] ? "custom-size_".$layout['custom_size'] : "" ?>'>
                            <img src='<?= $layout['image1']; ?>' alt=''>
                        </div>
                    </div>
                </section>
            <?php } ?>


            <?php if (strpos($layout['layout_type'], "l-image1-wide") !== false) { ?>
                <!-- 画像1つ 通常 -->
                <section class='l-section'>
                    <div class='l-section__inner js-lazyclass'>
                        <div class='l-image l-image1-wide'>
                            <img src='<?= $layout['image1']; ?>' alt=''>
                        </div>
                    </div>
                </section>
            <?php } ?>

            <?php if (strpos($layout['layout_type'], "l-fullimage") !== false) { ?>
                <!-- 画像 ヨコイチ -->
                <section class='l-section'>
                    <div class='l-image l-fullimage js-lazyclass'>
                        <img src='<?= $layout['image1']; ?>' alt=''>
                    </div>
                </section>
            <?php } ?>

            <?php if (strpos($layout['layout_type'], "l-image-2column") !== false) { ?>
                <!-- 画像2カラム -->
                <section class='l-section'>
                    <div class='l-section__inner'>
                        <div class='l-image l-image-2column'>
                            <div class='image1 js-lazyclass'>
                                <?php if($layout['image1'] != false) { ?>
                                    <img src="<?= $layout['image1']; ?>" alt=''>
                                <?php } ?>
                            </div>
                            <div class='image2 js-lazyclass'>
                                <?php if($layout['image2'] != false) { ?>
                                    <img src="<?= $layout['image2']; ?>" alt=''>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </section>
            <?php } ?>


            <?php if (strpos($layout['layout_type'], "l-image-3column") !== false) { ?>
                <!-- 画像3カラム -->
                <section class='l-section related-links'>
                    <div class='l-section__inner'>
                        <div class='l-image l-image-3column'>
                            <div class='image0 js-lazyclass'>
                                <div class='image-area'>
                                    <?php if($layout['image1'] != false) { ?>
                                        <img src="<?= $layout['image1']; ?>" alt=''>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class='image1 js-lazyclass'>
                                <div class='image-area'>
                                    <?php if($layout['image2'] != false) { ?>
                                        <img src="<?= $layout['image2']; ?>" alt=''>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class='image2 js-lazyclass'>
                                <div class='image-area'>
                                    <?php if($layout['image3'] != false) { ?>
                                        <img src="<?= $layout['image3']; ?>" alt=''>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <?php } ?>


            <?php if (strpos($layout['layout_type'], "l-image-with-text") !== false) { ?>
                <!-- 画像3カラム -->
                <section class='l-section related-links'>
                    <div class='l-section__inner'>
                        <div class='l-image-with-text'>
                            <div class='image5 js-lazyclass'>
                                <?php if($layout['image5'] != false) { ?>
                                    <img src="<?= $layout['image5']; ?>" alt=''>
                                <?php } ?>
                            </div>
                            <div class='text'>
                                <div><?= $layout['text2']; ?></div>
                            </div>
                        </div>
                    </div>
                </section>
            <?php } ?>


            <?php if (strpos($layout['layout_type'], "l-image-4column") !== false) { ?>
                <!-- 画像2カラム（2行・4つ） -->
                <section class='l-section'>
                    <div class='l-section__inner'>
                        <div class='l-image l-image-2column'>
                            <div class='image1 js-lazyclass'>
                                <?php if($layout['image1'] != false) { ?>
                                    <img src="<?= $layout['image1']; ?>" alt=''>
                                <?php } ?>
                            </div>
                            <div class='image2 js-lazyclass'>
                                <?php if($layout['image2'] != false) { ?>
                                    <img src="<?= $layout['image2']; ?>" alt=''>
                                <?php } ?>
                            </div>
                            <div class='image1 js-lazyclass'>
                                <?php if($layout['image3'] != false) { ?>
                                    <img src="<?= $layout['image3']; ?>" alt=''>
                                <?php } ?>
                            </div>
                            <div class='image2 js-lazyclass'>
                                <?php if($layout['image4'] != false) { ?>
                                    <img src="<?= $layout['image4']; ?>" alt=''>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </section>
            <?php } ?>

            <?php if (strpos($layout['layout_type'], "l-embed") !== false) { ?>
                <!-- 画像1つ 通常 -->
                <section class='l-section'>
                    <div class='l-section__inner'>
                        <div class='l-image l-image1'>
                            <div class='l-image1__wrap'>
                                <?php echo $layout['embed']; ?>
                            </div>
                        </div>
                    </div>
                </section>
            <?php } ?>

            <?php if (strpos($layout['layout_type'], "l-text-2column") !== false) { ?>
                <!-- テキスト 1カラム -->
                <section class='l-section'>
                    <div class='l-section__inner'>
                        <div class='l-text l-text-2column'>
                            <div class='l-text-2column_1 type-void'></div>
                            <div class='l-text-2column_2 js-lazyclass'>
                                <?php echo $layout['text1']; ?>
                            </div>
                        </div>
                    </div>
                </section>
            <?php } ?>

            <?php if (strpos($layout['layout_type'], "l-title") !== false) { ?>
                <!-- 見出し -->
                <section class='l-section'>
                    <div class='l-section__inner js-lazyclass'>
                        <div class="l-title">
                            <h2 class='<?php echo $layout['align_center'] ? "type-center" : "";?>'>
                                <?php echo $layout['title']; ?>
                            </h2>
                        </div>
                    </div>
                </section>
            <?php } ?>

        <?php } ?>

    <?php } ?>


    <!-- Latest Journal -->
    <?php if(!acf_is_empty($hasLatest)) { ?>
        <section class='l-section latestjournal'>
            <div class='l-section__inner js-lazyclass'>
                <h2>latest journal</h2>

                <!-- 画像3カラム -->
                <div class='l-image l-image-3column'>
                    <?php
                        $index = 0;
                    foreach ($hasLatest as $journalID) {
                        foreach ($latestJurnals as $journal) {
                            if ($journal->ID == $journalID) {
                            ?>
                        <a href='<?php echo get_field("url", $journal->ID); ?>' target='_blank' class='latest js-lazyclass image<?= $index++; ?>'>
                            <div class='image-area'>
                                <img src='<?php echo get_field("thumbnail", $journal->ID); ?>' alt=''>
                            </div>
                            <p class='date'><?php echo get_field("ournal_date", $journal->ID); ?></p>
                            <p class='body'>
                                <?php echo get_the_title($journal->ID); ?>
                            </p>
                        </a>
                    <?php
                            }
                        }
                    }
                        ?>
                </div>
            </div>
        </section>
    <?php } ?>


    <section class='l-section contact-link gray mt'>
        <a href="/contact" class='l-section__inner js-lazyclass'>
            <h2>contact</h2>
        </a>
    </section>


</div>






