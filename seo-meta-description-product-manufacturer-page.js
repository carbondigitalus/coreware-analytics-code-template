$(document).ready(function() {

// UPDATE META DESCRIPTION
  // change meta description for pages with /product-manufacturer pages
  if (window.location.href.indexOf("product-manufacturer") > -1) {
    const createMetaDescriptionManufacturerCompany = $('head').find('title').text().split(" | ")[0];
    const createMetaDescriptionManufacturer2RR = $('head').find('title').text().split(" | ")[1];
    const updatedMetaDescriptionManufacturer = "<meta name='Description' content='" + createMetaDescriptionManufacturerCompany + " Premiere Product Manufacturer for " + createMetaDescriptionManufacturer2RR + "'/>";
    $('head').append(updatedMetaDescriptionManufacturer);
  }
}); // END document.ready
