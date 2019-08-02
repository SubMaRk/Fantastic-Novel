/**
 * Language files for Fantastic Novel Template
 * FIle name : global.js
 * Developer : SubMaRk
 * Website   : https://naynum.engineer
 * Date      : July 2, 2019
 * Update    : July 2, 2019
 */

// Detect all anchors in the website
$('a').attr('target', function() {
    if(this.host == location.host) return '_self'; else return '_blank';
})