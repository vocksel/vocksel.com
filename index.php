<?php
// Gets the file name for use as the title if a custom one is not specified below.
$path = $_SERVER['PHP_SELF'];
$page = basename($path);
$page = basename($path, '.php');

// Page specific variables.
$title           = "Home"; // Page Title
$keywords        = "";     // Keywords
$description     = "";     // Description
?>

<!DOCTYPE html>
<html lang="en">

<head>
<?php require('lib/inc/head.php');?>
</head>

<body id="home">
<?php
/* CONTENT
===================================*/ ?>
<div id="content">
	<header id="intro">
		<h1>Hi, I'm David.</h1>
		<h3>I build websites and have a ton of fun doing it.</h3>
	</header>

	<div id="links">
		<a href="mailto:me@voxeldavid.com" title="Send me an Email"><span>me@voxeldavid.com</span></a>
		<a target="_blank" href="//twitter.com/voxeldavid" title="Miscellaneous Tweets"><span>Twitter</span></a>
		<a target="_blank" href="//github.com/voxeldavid" title="View my GitHub profile"><span>Github</span></a>
		<a target="_blank" href="//gist.github.com/voxeldavid"title="Little snippets of code"><span>Gists</span></a>
	</div>

	<footer>
		<p>VoxelDavid.com - All Rights Reserved</p>
		<a href="http://blog.voxeldavid.com"><span>Blog</span></a>
		<a href="work/"><span>Work</span></a>
		<a href="archive/"><span>Site Archive</span></a>
	</footer>
</div>

<?php
/* SCRIPTS
===================================*/ ?>
<?php include_once('lib/inc/scripts.php');?>
</body>

</html>
