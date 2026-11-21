// Public contact and company details, shown in the footer of every page, on /contact, in the
// privacy statement and in the Organization JSON-LD. Google Ads requires verifiable contact details
// on landing pages, and Dutch law (Handelsregisterwet, art. 3:15d BW) requires the trade name,
// address, KvK number and VAT number on the website. Leave kvk/vat empty to hide them.
export const contact = {
  email: "pieter.elsharouni@gedekt.com",
  phone: "+31615320267", // for tel: links and structured data
  phoneDisplay: "+31 6 15320267",
  legalName: "PieterES", // registered trade name at the KvK; "Gedekt" is an extra trade name of it
  street: "Oudwijkerveldstraat 33",
  postalCode: "3581 JH",
  city: "Utrecht",
  country: "NL",
  kvk: "93002351",
  vat: "NL004992171B61", // btw-identificatienummer (not the omzetbelastingnummer)
};
