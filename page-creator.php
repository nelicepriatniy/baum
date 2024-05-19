
<?php 
/*
* Template name: конструктор страниц
*/
get_header();
?>


<?php

// проверяем есть ли данные в гибком содержании
if( have_rows('dobavit_blok') ):

     // перебираем данные
    while ( have_rows('dobavit_blok') ) : the_row();

        if( get_row_layout() == 'main-block' ):

        	?>
            <section class="front-screen">
                <div class="container">
                    <h1 class="front-screen__heading"><?php the_sub_field('zagolovok_h1') ?></h1>
                </div>
                <!-- <img src="./media/bg/firstScreen.png" alt="front screen bg" class="front-screen__bg"> -->
                <video src="<?php the_sub_field('video_na_zadnij_fon') ?>" autoplay muted loop class="front-screen__bg"></video>
            </section>
            <?php

        elseif( get_row_layout() == 'gallery_block' ): 
        
            ?>
            <section class="gallery">
                <div class="container">
                    <div class="gallery-wrapper">
<?php if( have_rows('dobavit_tovar') ): while ( have_rows('dobavit_tovar') ) : the_row();?>
                        <div class="gallery-wrapper__item">
                            <img src="<?php the_sub_field('kartinka_tovara'); ?>" alt="gallery item bg" class="gallery-wrapper__item__img">
                            <p class="gallery-wrapper__item__name"><?php the_sub_field('nazvanie_tovara'); ?></p>
                        </div>
<?php endwhile;endif;?>
                    </div>
                </div>
            </section>
            <?php

        elseif( get_row_layout() == 'card_block' ): 
        
            ?>
            <section class="card">
                <img src="<?php the_sub_field('kartinka_tovara') ?>" alt="card bg" class="card__bg">
                <div class="container">
                    <div class="card__info">
                        <p class="card__info__name"><?php the_sub_field('zagolovok_tovara') ?></p>
                        <p class="card__info__product"><?php the_sub_field('nazvanie_tovara') ?></p>
                        <p class="card__info__model"><?php the_sub_field('model_tovara') ?></p>
                        <a href="#" class="card__info__href">
                            <svg viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.5015 8.13437L1.50146 8.13437" stroke="white" stroke-width="1.68" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.3013 0.912292L19.5613 8.14109L12.3013 15.3711" stroke="white" stroke-width="1.68" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                    </div>
                    <p class="card__desk"><?php the_sub_field('opisanie_tovara') ?></p>
                </div>
            </section>
            <?php

        elseif( get_row_layout() == 'gift_block' ): 
        
            ?>
            <section class="gift">
                <div class="container">
                    <div class="gift__heading"><?php the_sub_field('zagolovok') ?></div>
                    <div class="gift-wrapper">
<?php if( have_rows('dobavit_element_gift') ): while ( have_rows('dobavit_element_gift') ) : the_row();?>
                        <div class="gift-wrapper__item">
                            <img src="<?php the_sub_field('kartinka_elementa'); ?>" alt="gift wrapper item bg" class="gift-wrapper__item__bg">
                            <p class="gift-wrapper__item__text"><?php the_sub_field('zagolovok_tovara'); ?></p>
                        </div>
<?php endwhile;endif;?>
                    </div>
                </div>
            </section>
            <?php

        elseif( get_row_layout() == 'video_block' ): 
        
            ?>
            <section class="video">
                <video src="<?php the_sub_field('video') ?>" autoplay muted loop></video>
            </section>
            <?php

        elseif( get_row_layout() == 'video_block' ): 
        
            ?>
            <section class="deliviry">
                <div class="container">
                     <div class="deliviry-left">
                        <p class="deliviry-left__heading"><?php the_sub_field('zagolovok') ?></p>
                        <div class="deliviry-left-items">
                            <div class="deliviry-left__item">
                                <svg class="deliviry-left__item__svg" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.20312 11.1621H23.7589V12.4985H8.20312V11.1621Z" fill="white" fill-opacity="0.24" />
                                    <path d="M24.5383 19.6974V9.09523C24.5383 8.56066 24.1285 8.0261 23.4692 8.0261H6.95118C6.41662 8.0261 5.88206 8.43593 5.88206 9.09523V19.6974C5.88206 20.232 6.29189 20.7665 6.95118 20.7665H23.4514C24.1285 20.6418 24.5383 20.232 24.5383 19.6974ZM25.8747 19.6974C25.8747 21.0338 24.8056 22.1207 23.4514 22.1207H6.95118C5.61478 22.1207 4.52783 21.0516 4.52783 19.6974V9.09523C4.52783 7.75882 5.59696 6.67188 6.95118 6.67188H23.4514C24.7878 6.67188 25.8747 7.741 25.8747 9.09523V19.6974Z" fill="white" fill-opacity="0.24" />
                                    <path d="M17.9717 15.7461H20.3416V18.116H17.9717V15.7461ZM21.4998 15.7461H23.8697V18.116H21.4998V15.7461Z" fill="white" fill-opacity="0.24" />
                                </svg>
                                <p class="deliviry-left__item__text">Оплата любыми способами. В том числе </p>
                                <img src="./media/icons/doly.png" alt="" class="deliviry-left__item__doly">
                            </div>
                            <div class="deliviry-left__item">
                                <svg class="deliviry-left__item__svg" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4065 19.0179L19.0409 11.3836M5.26855 21.3082C5.26855 21.7126 5.429 22.1005 5.71468 22.3868C6.00036 22.673 6.38794 22.8342 6.79236 22.835H23.594C23.9984 22.8342 24.386 22.673 24.6716 22.3868C24.9573 22.1005 25.1178 21.7126 25.1178 21.3082V18.2025C24.4585 18.0238 23.8764 17.6329 23.4614 17.0904C23.0464 16.5479 22.8215 15.8838 22.8215 15.2007C22.8215 14.5177 23.0464 13.8536 23.4614 13.311C23.8764 12.7685 24.4585 12.3777 25.1178 12.1989V9.09327C25.1178 8.68885 24.9573 8.30095 24.6716 8.01469C24.386 7.72844 23.9984 7.56722 23.594 7.56641H6.79236C6.38794 7.56722 6.00036 7.72844 5.71468 8.01469C5.429 8.30095 5.26855 8.68885 5.26855 9.09327V12.1928C5.93307 12.3676 6.52101 12.7575 6.94056 13.3017C7.36011 13.8458 7.58765 14.5136 7.58765 15.2007C7.58765 15.8878 7.36011 16.5556 6.94056 17.0998C6.52101 17.6439 5.93307 18.0339 5.26855 18.2086V21.3082Z" stroke="white" stroke-opacity="0.28" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.1726 12.9097C12.3751 12.9097 12.5693 12.8292 12.7124 12.6861C12.8556 12.5429 12.936 12.3487 12.936 12.1462C12.936 11.9438 12.8556 11.7496 12.7124 11.6064C12.5693 11.4632 12.3751 11.3828 12.1726 11.3828C11.9701 11.3828 11.776 11.4632 11.6328 11.6064C11.4896 11.7496 11.4092 11.9438 11.4092 12.1462C11.4092 12.3487 11.4896 12.5429 11.6328 12.6861C11.776 12.8292 11.9701 12.9097 12.1726 12.9097ZM18.2801 19.0171C18.4825 19.0171 18.6767 18.9367 18.8199 18.7935C18.9631 18.6504 19.0435 18.4562 19.0435 18.2537C19.0435 18.0512 18.9631 17.857 18.8199 17.7139C18.6767 17.5707 18.4825 17.4903 18.2801 17.4903C18.0776 17.4903 17.8834 17.5707 17.7402 17.7139C17.5971 17.857 17.5166 18.0512 17.5166 18.2537C17.5166 18.4562 17.5971 18.6504 17.7402 18.7935C17.8834 18.9367 18.0776 19.0171 18.2801 19.0171Z" stroke="white" stroke-opacity="0.28" stroke-width="0.89067" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p class="deliviry-left__item__text">При первом заказе с сайта скидка 10%</p>
                            </div>
                        </div>
                        <a href="<?php the_sub_field('ssylka_knopki_podrobnee_o_dostavke') ?>" class="deliviry-button">Подробнее о доставке</a>
                     </div>
                     <div class="deliviry-right">
                        <img src="<?php the_sub_field('kartinka_dostavki') ?>" alt="" class="deliviry-right__bg">
                        <div class="deliviry-right__text">Привезем заказ в двойной упаковке, надежно защищающей технику</div>
                     </div>
                </div>
                <div class="container garant">
                    <div class="deliviry-garant-left">
                        <p class="deliviry-garant-left__heading">2 года гарантии при заказе с сайта</p>
                        <p class="deliviry-garant-left__text">Безупречный сервис и быстрые сроки рассмотрения заявок</p>
                    </div>
                    <div class="deliviry-garant-right">
                        <p class="deliviry-garant-right__text">Рассмотрение обращения за день, обмен или возврат – 5-7 дней</p>
                        <a href="<?php the_sub_field('ssylka_knopki_o_vozvrate_i_garantii') ?>" class="deliviry-garant-right__button">О возврате и гарантии</a>
                    </div>
                </div>
            </section>
            <?php

        endif;

    endwhile;

else :

    // макетов не найдено

endif;

?>

<?php
get_footer(); ?>