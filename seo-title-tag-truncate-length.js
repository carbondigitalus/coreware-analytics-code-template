$(document).ready(function() {
// CROP TITLE TAGS THAT ARE TOO LONG
const metaTitleTag = $('title').text();
if (metaTitleTag.length > 61) {

const extractMetaTitleTag = metaTitleTag.split('|')[0];
const updatedMetaTitleTag = extractMetaTitleTag.substring(0,36) + " | Second Right Resource";
$('title').text(updatedMetaTitleTag);

}
}); // END document.ready
