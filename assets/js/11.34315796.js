(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{233:function(e,t,i){"use strict";i.r(t);var o=i(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"directus-field-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#directus-field-types","aria-hidden":"true"}},[e._v("#")]),e._v(" Directus Field Types")]),e._v(" "),i("p",[e._v("In order to support multiple SQL vendors (MySQL, PostgreSQL, MS-SQL, etc) Directus has a generalized set of field types allowing for more control over API output ("),i("code",[e._v("array")]),e._v(", "),i("code",[e._v("json")]),e._v(", "),i("code",[e._v("boolean")]),e._v(", etc) and to better define system data ("),i("code",[e._v("m2o")]),e._v(", "),i("code",[e._v("alias")]),e._v(", "),i("code",[e._v("group")]),e._v(", etc). When creating or updating fields within the API, you also send a vendor-specific datatype for more granular DBA control over data storage.")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("alias")]),e._v(" – Fields that do not have corresponding column in the database")]),e._v(" "),i("li",[i("code",[e._v("array")]),e._v(" – Standard array format in API response")]),e._v(" "),i("li",[i("code",[e._v("binary")]),e._v(" – Binary strings limited by its length")]),e._v(" "),i("li",[i("code",[e._v("boolean")]),e._v(" – "),i("code",[e._v("true")]),e._v(" or "),i("code",[e._v("false")])]),e._v(" "),i("li",[i("code",[e._v("datetime")]),e._v(" – A date and time in ISO format, eg: "),i("code",[e._v("2018-09-19T14:00:43+00:00")])]),e._v(" "),i("li",[i("code",[e._v("date")]),e._v(" – Date, eg: "),i("code",[e._v("2018-09-19")])]),e._v(" "),i("li",[i("code",[e._v("time")]),e._v(" – Time, eg: "),i("code",[e._v("14:09:22")])]),e._v(" "),i("li",[i("code",[e._v("file")]),e._v(" – Foreign key to "),i("code",[e._v("directus_files.id")])]),e._v(" "),i("li",[i("code",[e._v("group")]),e._v(" – Groups fields together visually, children save group into "),i("code",[e._v("directus_fields.group")])]),e._v(" "),i("li",[i("code",[e._v("integer")]),e._v(" – Whole number")]),e._v(" "),i("li",[i("code",[e._v("decimal")]),e._v(" – Number that includes a decimal")]),e._v(" "),i("li",[i("code",[e._v("json")]),e._v(" – Standard JSON format in API response")]),e._v(" "),i("li",[i("code",[e._v("lang")]),e._v(" – Specific to translation interfaces, this stores the language key")]),e._v(" "),i("li",[i("code",[e._v("m2o")]),e._v(" – Many-to-One Relationship")]),e._v(" "),i("li",[i("code",[e._v("o2m")]),e._v(" – One-to-Many Relationship")]),e._v(" "),i("li",[i("code",[e._v("sort")]),e._v(" – System field that stores a item order within the collection items")]),e._v(" "),i("li",[i("code",[e._v("status")]),e._v(" – System field used for publishing workflows")]),e._v(" "),i("li",[i("code",[e._v("string")]),e._v(" – Any text or characters, limited by its length")]),e._v(" "),i("li",[i("code",[e._v("translation")]),e._v(" – Specific to translation interfaces, this is a "),i("code",[e._v("o2m")]),e._v(" type that stores multi-lingual content")]),e._v(" "),i("li",[i("code",[e._v("uuid")]),e._v(" – A Universally Unique Identifier")]),e._v(" "),i("li",[i("code",[e._v("datetime_created")]),e._v(" – System field to track the datetime an item was created, used by revisions")]),e._v(" "),i("li",[i("code",[e._v("datetime_updated")]),e._v(" – System field to track the datetime an item was updated, used by revisions")]),e._v(" "),i("li",[i("code",[e._v("user_created")]),e._v(" – System field to track the user who created an item, used by revisions")]),e._v(" "),i("li",[i("code",[e._v("user_updated")]),e._v(" – System field to track the user who updated an item, used by revisions")])])])}],!1,null,null,null);a.options.__file="field-types.md";t.default=a.exports}}]);