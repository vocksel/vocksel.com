<?php
/* META DATA
===================================*/ ?>
<meta charset="utf-8">
<?php
if ($description != "") {
	// If there is a custom page description.
	echo '<meta name="description" content="' . $description .'">';
} else {
	// Otherwise use the default one.
	echo '<meta name="description" content="">';
};
?>

<?php
if ($keywords != "") {
	// If there are predefined page keywords.
	echo '<meta name="keywords"    content="' . $keywords .'">';
} else {
	// Otherwise use the default ones.
	echo '<meta name="keywords"    content="">';
};
?>

<?php
/**
 * Note to future self: I put the title at the bottom so the meta tags are grouped together.
 */

if ($title != "") {
	//If there is a predefined title.
	echo "<title>" . $title . " - VoxelDavid.com</title>";
} else {
	//Otherwise use the page name.
	echo "<title>" . ucfirst($page) . " - VoxelDavid.com</title>";
};
?>


<?php
/* LINKS
===================================*/ ?>
<link rel="shortcut icon" href="lib/img/favicon.png">
<link rel="stylesheet" href="lib/css/master.css" type="text/css">

<?php
/* JQUERY
===================================*/ ?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
// If Google's jQuery cannot be accessed, use a local copy.
if (!window.jQuery) {document.write('<script src="lib/js/libs/jquery-1.9.1.min.js"><'+'/script>');}
</script>
