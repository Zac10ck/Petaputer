!function(){"use strict";tippy(".tooltip-element",{arrow:!0,arrowType:"round",animation:"fade"}),frappe.ready(function(){var e=frappe.utils.get_url_arg("referral-id");e&&function(e,r,t){t*=864e5;var a={value:r,expiry:(new Date).getTime()+t};localStorage.setItem(e,JSON.stringify(a))}("referral_id",e,30)})}();
//# sourceMappingURL=pricing.js.map
