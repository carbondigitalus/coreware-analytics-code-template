$(document).ready(function() {

// UPDATE META DESCRIPTION
  // change meta description for pages with /product-department pages
  if (window.location.href.indexOf("product-department") > -1) {
    const createMetaDescriptionDepartment = $('head').find('title').text().split(" | ")[0];
    const createMetaDescriptionDepartment2RR = $('head').find('title').text().split(" | ")[1];
    const updatedMetaDescriptionDepartment = "<meta name='Description' content='" + createMetaDescriptionDepartment + " Product Department for " + createMetaDescriptionDepartment2RR + "'/>";
    $('head').append(updatedMetaDescriptionDepartment);
  }

}); // END document.ready
