$(document).ready(function() {

  // ADD PRODUCT SCHEMA FOR ALL PRODUCT PAGES
  const schemaBrand = $('#_product_manufacturer').text();
  let schemaName = $('#_product_description').text();
  const schemaImage = $('.product-image').attr('src');
  const schemaDescription = $('#specifications_section > p').text();
  const schemaURL = window.location.href;
  const schemaSKU = $('#_manufacturer_sku').text().split(' : ')[1];
  let schemaUPC = $('#_upc_code').text().split(' : ')[1];
  const schemaMPN = $('#_model').text().split(' : ')[1];
  const schemaPrice = $('#original_sale_price').text();
  const schemaPriceSale = $('#sale_price').text();

  function nameCheck() {
    if (schemaName.split('"')[0]) {
      schemaName = schemaName.split('"')[0] + 'in' + schemaName.split('"')[1]
      return schemaName;
    }
    return schemaName;
  }

  function descriptionCheck() {
    if (schemaDescription === '') {
      return nameCheck();
    }
    return schemaDescription;
  }

  function priceCheck() {
    if (schemaPrice === '') {
      return schemaPriceSale;
    }
    return schemaPrice;
  }

  function mpnCheck() {
    if (schemaMPN === '') {
      return '';
    }
    return schemaMPN;
  }

  function skuCheck() {
    if (schemaSKU === '') {
      return '';
    }
    return schemaSKU;
  }

  function upcCheck() {
    if (schemaUPC === '') {
      return '';
    }
    schemaUPC = '0'+schemaUPC;
    return schemaUPC;
  }

 const endTag = "</" + "script>";
  if (window.location.href.indexOf("/product/") > -1) {
    const customProductSchema = `<script type="application/ld+json">{"@context": "https://schema.org/","@type": "Product","name": "${nameCheck()}","image": "${schemaImage}","description": "${descriptionCheck()}","brand": "${schemaBrand}","sku": "${skuCheck()}","mpn": "${mpnCheck()}","gtin13": "${upcCheck()}","offers": {"@type": "Offer","url": "${schemaURL}","priceCurrency": "USD","price": "${priceCheck()}","priceValidUntil": "2030-12-31","availability": "https://schema.org/InStock","itemCondition": "https://schema.org/NewCondition"}}${endTag}`;
    $('head').append(customProductSchema);
  }

}); // END document.ready
