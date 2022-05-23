$(document).ready(function() {

// UPDATE META DESCRIPTION

  // change meta description for pages with /product-category & group pages
  if (window.location.href.indexOf("product-category") > -1) {
    const createMetaDescriptionCategory = $('head').find('title').text().split(" | ")[0];
    const createMetaDescriptionCategory2RR = $('head').find('title').text().split(" | ")[1];
    const updatedMetaDescriptionCategory = "<meta name='Description' content='" + createMetaDescriptionCategory + " Product Category for " + createMetaDescriptionCategory2RR + "'/>";
    $('head').append(updatedMetaDescriptionCategory);
  }

}); // END document.ready
