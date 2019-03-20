<?php
/*
    Plugin Name: WP PrismJS
    Plugin URI: http://#.com
    Description: A plugin that provides a nice UI for prism codeblock display.
    Author: Ryan McCormick
    Author URI: http://rtmccormick.com
    version: 0.1.5
*/

wp_register_script( 'wp-prismjs-plugin', plugins_url('/static/wp-prismjs-plugin.js', __FILE__), '', '', true);
wp_register_script( 'prismjs-global', plugins_url('/vendor/prism.js', __FILE__), '', '', true);

add_action('wp_enqueue_scripts', 'wp_codemirror_init');

function wp_codemirror_init()
{
    wp_enqueue_style('wp-prismjs-plugin', plugins_url('/vendor/prism.css', __FILE__));
    wp_enqueue_script('wp-prismjs-plugin');
    wp_enqueue_script('prismjs-global');
}

?>