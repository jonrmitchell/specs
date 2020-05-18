(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{451:function(e,t,r){"use strict";r.r(t);var a=r(55),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("This is a draft specification and still under development. If you have comments or suggestions please file them in the "),r("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue tracker"),r("OutboundLink")],1),e._v(". If you have explicit changes please fork the "),r("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("git repo"),r("OutboundLink")],1),e._v(" and submit a pull request.")])]),e._v(" "),r("h1",{attrs:{id:"page-frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$page.frontmatter.title))]),e._v(" "),r("p",[e._v(e._s(e.$page.frontmatter.abstract))]),e._v(" "),r("MetadataTable"),e._v(" "),r("h2",{attrs:{id:"language"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[e._v("#")]),e._v(" Language")]),e._v(" "),r("Language"),e._v(" "),r("h2",{attrs:{id:"changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("1.0.0rc1")]),e._v(": Initial text")])]),e._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("This document contains a "),r("em",[e._v("ColumnType")]),e._v(" taxonomy to be used for publishing spending data files. It should be used in conjunction with the budget taxonomy, as it contains some common "),r("em",[e._v("ColumnTypes")]),e._v(" as well.")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("ColumnTypes")]),e._v(" contained in this taxonomy contain:")]),e._v(" "),r("ul",[r("li",[e._v("Transactions Identifiers")]),e._v(" "),r("li",[e._v("Details about administrators, procurers, suppliers and recipients")]),e._v(" "),r("li",[e._v("Some Geographic related types (esp. for addresses)")])]),e._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/specs/fiscal-data-package/"}},[e._v("The Fiscal Data Package Spec")])],1)]),e._v(" "),r("h2",{attrs:{id:"location"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" Location")]),e._v(" "),r("p",[e._v("The canonic location for this taxonomy’s "),r("em",[e._v("ColumnType")]),e._v(" definition - to be used in fiscal data package descriptors - is")]),e._v(" "),r("p",[r("code",[e._v("https://specs.frictionlessdata.io/taxonomies/fiscal/spending.json")])]),e._v(" "),r("h2",{attrs:{id:"the-taxonomy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-taxonomy"}},[e._v("#")]),e._v(" The Taxonomy")]),e._v(" "),r("h4",{attrs:{id:"amounts-and-their-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#amounts-and-their-properties"}},[e._v("#")]),e._v(" Amounts and their properties")]),e._v(" "),r("h4",{attrs:{id:"geographic-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geographic-information"}},[e._v("#")]),e._v(" Geographic Information")]),e._v(" "),r("h5",{attrs:{id:"geo-address-city-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-city-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:city:code")])]),e._v(" "),r("p",[e._v("The code of the city part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("prior")]),e._v(": "),r("code",[e._v("geo:address:county:code")])]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"geo-address-city-label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-city-label"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:city:label")])]),e._v(" "),r("p",[e._v("The name of the city part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("geo:address:city:code")])])]),e._v(" "),r("h5",{attrs:{id:"geo-address-country-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-country-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:country:code")])]),e._v(" "),r("p",[e._v("The code of the country part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"geo-address-country-label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-country-label"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:country:label")])]),e._v(" "),r("p",[e._v("The name of the country part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("geo:address:country:code")])])]),e._v(" "),r("h5",{attrs:{id:"geo-address-county-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-county-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:county:code")])]),e._v(" "),r("p",[e._v("The code of the county part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("prior")]),e._v(": "),r("code",[e._v("geo:address:region:code")])]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"geo-address-county-label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-county-label"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:county:label")])]),e._v(" "),r("p",[e._v("The name of the county part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("geo:address:county:code")])])]),e._v(" "),r("h5",{attrs:{id:"geo-address-region-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-region-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:region:code")])]),e._v(" "),r("p",[e._v("The code of the region part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("prior")]),e._v(": "),r("code",[e._v("geo:address:country:code")])]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"geo-address-region-label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-region-label"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:region:label")])]),e._v(" "),r("p",[e._v("The name of the region part of the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("geo:address:region:code")])])]),e._v(" "),r("h5",{attrs:{id:"geo-address-street-address-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-street-address-description"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:street-address:description")])]),e._v(" "),r("p",[e._v("Actual street address in whole address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h5",{attrs:{id:"geo-address-zip-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geo-address-zip-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("geo:address:zip:code")])]),e._v(" "),r("p",[e._v("The postal code in the address")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("prior")]),e._v(": "),r("code",[e._v("geo:address:city:code")])]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h4",{attrs:{id:"actors-involved-in-the-transaction-administrator-procurer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actors-involved-in-the-transaction-administrator-procurer"}},[e._v("#")]),e._v(" Actors involved in the Transaction (Administrator, Procurer)")]),e._v(" "),r("h5",{attrs:{id:"administrator-generic-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#administrator-generic-id"}},[e._v("#")]),e._v(" "),r("code",[e._v("administrator:generic:id")])]),e._v(" "),r("p",[e._v("Unique identifier for the Administrator")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"administrator-generic-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#administrator-generic-name"}},[e._v("#")]),e._v(" "),r("code",[e._v("administrator:generic:name")])]),e._v(" "),r("p",[e._v("The display name for the Administrator")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("administrator:generic:id")])])]),e._v(" "),r("h5",{attrs:{id:"procurer-bank-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procurer-bank-account"}},[e._v("#")]),e._v(" "),r("code",[e._v("procurer:bank:account")])]),e._v(" "),r("p",[e._v("Unique identifier for the bank account of the Procurer")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h5",{attrs:{id:"procurer-bank-branch-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procurer-bank-branch-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("procurer:bank:branch:code")])]),e._v(" "),r("p",[e._v("Unique identifier of the bank’s branch of the Procurer")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"procurer-bank-branch-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procurer-bank-branch-name"}},[e._v("#")]),e._v(" "),r("code",[e._v("procurer:bank:branch:name")])]),e._v(" "),r("p",[e._v("Name of the bank’s branch of the Procurer")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("procurer:bank:branch:code")])])]),e._v(" "),r("h5",{attrs:{id:"procurer-bank-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procurer-bank-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("procurer:bank:code")])]),e._v(" "),r("p",[e._v("Unique identifier for the bank of the Procurer")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"procurer-generic-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procurer-generic-id"}},[e._v("#")]),e._v(" "),r("code",[e._v("procurer:generic:id")])]),e._v(" "),r("p",[e._v("Unique identifier for the Procurer")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"procurer-generic-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procurer-generic-name"}},[e._v("#")]),e._v(" "),r("code",[e._v("procurer:generic:name")])]),e._v(" "),r("p",[e._v("The display name of the Procurer")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("procurer:generic:id")])])]),e._v(" "),r("h4",{attrs:{id:"recipient-of-the-transaction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-of-the-transaction"}},[e._v("#")]),e._v(" Recipient of the Transaction")]),e._v(" "),r("h5",{attrs:{id:"recipient-bank-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-bank-account"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:bank:account")])]),e._v(" "),r("p",[e._v("Unique identifier for the bank account of the Recipient")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h5",{attrs:{id:"recipient-bank-branch-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-bank-branch-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:bank:branch:code")])]),e._v(" "),r("p",[e._v("Unique identifier of the bank’s branch of the Recipient")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"recipient-bank-branch-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-bank-branch-name"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:bank:branch:name")])]),e._v(" "),r("p",[e._v("Name of the bank’s branch of the Recipient")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("recipient:bank:branch:name")])])]),e._v(" "),r("h5",{attrs:{id:"recipient-bank-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-bank-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:bank:code")])]),e._v(" "),r("p",[e._v("Unique identifier for the bank of the Recipient")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-id"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:id")])]),e._v(" "),r("p",[e._v("Unique identifier for the Recipient")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-code-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-code-type"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:code-type")])]),e._v(" "),r("p",[e._v("Unique identifier for the codelist from which the legal entity code comes from")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("prior")]),e._v(": "),r("code",[e._v("recipient:generic:id")])]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:code")])]),e._v(" "),r("p",[e._v("Unique identifier for the legal entity")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("prior")]),e._v(": "),r("code",[e._v("recipient:generic:legal-entity:code-type")])]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-label"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:label")])]),e._v(" "),r("p",[e._v("Trading name (or other) of the legal entity")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("recipient:generic:legal-entity:code")])])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-point-of-contact-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-point-of-contact-description"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:point-of-contact:description")])]),e._v(" "),r("p",[e._v("Text describing the representative of the legal entity")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-receiving-project-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-receiving-project-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:receiving-project:code")])]),e._v(" "),r("p",[e._v("Code of the specific project inside the legal entity")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("prior")]),e._v(": "),r("code",[e._v("recipient:generic:legal-entity:code")])]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-receiving-project-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-receiving-project-description"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:receiving-project:description")])]),e._v(" "),r("p",[e._v("Name of the specific project inside the legal entity")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-receiving-project-label"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-receiving-project-label"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:receiving-project:label")])]),e._v(" "),r("p",[e._v("Name of the specific project inside the legal entity")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("recipient:generic:legal-entity:receiving-project:code")])])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-legal-entity-receiving-project-status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-legal-entity-receiving-project-status"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:legal-entity:receiving-project:status")])]),e._v(" "),r("p",[e._v("Status of the specific project inside the legal entity")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-name"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:name")])]),e._v(" "),r("p",[e._v("The display name for the Recipient")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("recipient:generic:id")])])]),e._v(" "),r("h5",{attrs:{id:"recipient-generic-url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipient-generic-url"}},[e._v("#")]),e._v(" "),r("code",[e._v("recipient:generic:url")])]),e._v(" "),r("p",[e._v("An Internet address for the Recipient")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h4",{attrs:{id:"supplier-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supplier-details"}},[e._v("#")]),e._v(" Supplier Details")]),e._v(" "),r("h5",{attrs:{id:"supplier-generic-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supplier-generic-id"}},[e._v("#")]),e._v(" "),r("code",[e._v("supplier:generic:id")])]),e._v(" "),r("p",[e._v("Unique identifier for the Supplier")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"supplier-generic-name"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supplier-generic-name"}},[e._v("#")]),e._v(" "),r("code",[e._v("supplier:generic:name")])]),e._v(" "),r("p",[e._v("The display name for the Supplier")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("labelOf")]),e._v(": "),r("code",[e._v("supplier:generic:id")])])]),e._v(" "),r("h4",{attrs:{id:"transaction-details"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-details"}},[e._v("#")]),e._v(" Transaction Details")]),e._v(" "),r("h5",{attrs:{id:"transaction-id-budget-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-budget-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:budget-code")])]),e._v(" "),r("p",[e._v("Unique identifier for the Budget Line for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-code"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:code")])]),e._v(" "),r("p",[e._v("A Unique identifier for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-contract-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-contract-id"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:contract-id")])]),e._v(" "),r("p",[e._v("Unique identifier for the Contract for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-court-order"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-court-order"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:court-order")])]),e._v(" "),r("p",[e._v("Unique identifier for the Court Order for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-invoice-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-invoice-id"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:invoice-id")])]),e._v(" "),r("p",[e._v("Unique identifier for the Invoice for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-purchase-order"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-purchase-order"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:purchase-order")])]),e._v(" "),r("p",[e._v("Unique identifier for the Purchase Order for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-tender-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-tender-id"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:tender-id")])]),e._v(" "),r("p",[e._v("Unique identifier for the Tender for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")]),e._v(" "),r("li",[r("em",[e._v("unique")]),e._v(": True")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-tender-kind"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-tender-kind"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:tender-kind")])]),e._v(" "),r("p",[e._v("Unique identifier for the Tender Kind for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])]),e._v(" "),r("h5",{attrs:{id:"transaction-id-transaction-kind"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#transaction-id-transaction-kind"}},[e._v("#")]),e._v(" "),r("code",[e._v("transaction-id:transaction-kind")])]),e._v(" "),r("p",[e._v("Unique identifier for the Transaction Kind for this transaction")]),e._v(" "),r("ul",[r("li",[r("em",[e._v("dataType")]),e._v(": string")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);