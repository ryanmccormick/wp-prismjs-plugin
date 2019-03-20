<?php
/*
    Plugin Name: WP PrismJS
    Plugin URI: http://#.com
    Description: A plugin that provides a nice UI for prism codeblock display.
    Author: Ryan McCormick
    Author URI: http://rtmccormick.com
    version: 0.1.5
*/

wp_register_script( 'wp-codemirror-plugin', plugins_url('/static/wp-codemirror-plugin.js', __FILE__), '', '', true);

add_action('wp_enqueue_scripts', 'wp_codemirror_init');

function wp_codemirror_init()
{
    wp_enqueue_style('wp-codemirror-plugin', plugins_url('/static/wp-codemirror-plugin.css', __FILE__));
    wp_enqueue_script('wp-codemirror-plugin');
}

?>