/**
 * Language files for Fantastic Novel Template
 * FIle name : index.dict.js
 * Developer : SubMaRk
 * Website   : https://naynum.engineer
 * Date      : June 27, 2019
 * Update    : June 29, 2019
 */
$(function() {
    var dict = {
        
    };
    
    var nowlang=localStorage.getItem("nowlang");if(nowlang==null){var _t=$('body').translate({lang:"th",t:dict});var str=_t.g("translate");localStorage.setItem("nowlang","th");document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content","th")}else{var _t=$('body').translate({lang:nowlang,t:dict});var str=_t.g("translate");document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content",nowlang)};$(".lang_selector").click(function(ev){var lang=$(this).attr("data-value");_t.lang(lang);document.querySelector("meta[http-equiv='Content-Language']").setAttribute("content",lang);localStorage.setItem("nowlang",lang);ev.preventDefault()})
});