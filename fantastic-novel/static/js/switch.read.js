// Javascript for Read Text page
// Created by NumSubMaRk
// Date Created 12 January 2019

// Change font size
var nowfontsize = localStorage.getItem("fontsize");
$(".content").css("font-size", nowfontsize + "rem"), null == nowfontsize && "NaN" == nowfontsize || $(".content").css("font-size", nowfontsize);
var changefontsize = function (e) {
    var t = $(e).attr("data-type"),
        o = localStorage.getItem("fontsize");
    switch (null != o && "NaN" != o || (localStorage.setItem("fontsize", "1.4rem"), o = localStorage.getItem("fontsize")), t) {
        case "0":
            $(".content").css("font-size", 1 * o - .1 + "rem"), localStorage.setItem("fontsize", 1 * o - .1);
            break;
        case "1":
            $(".content").css("font-size", 1 * o + .1 + "rem"), localStorage.setItem("fontsize", 1 * o + .1);
            break;
        case "2":
            $(".content").css("font-size", "1.4rem"), localStorage.setItem("fontsize", 1.4);
            break;
        default:
            $(".content").css("font-size", 1 * o + "rem"), localStorage.setItem("fontsize", 1 * o)
    }
};
// Change Font Family and Fixed Size
var nowfont = localStorage.getItem("fontfamily");
$(".content").css("font-family", nowfont), null == nowfont && "NaN" == nowfont || $(".content").css("font-family", nowfont);
var changefont = function (t) {
    var o = $(t).attr("data-type"),
        e = localStorage.getItem("fontfamily");
    switch (null != e && "NaN" != e || (localStorage.setItem("fontfamily", "Arial"), e = localStorage.getItem("fontfamily")), o) {
        case "0":
            $(".content").css("font-family", "Arial"), localStorage.setItem("fontfamily", "Arial"), $(".content").css("font-size", "1.4rem"), localStorage.setItem("fontsize", 1.4);
            break;
        case "1":
            $(".content").css("font-family", "boonjot"), localStorage.setItem("fontfamily", "boonjot"), $(".content").css("font-size", "1.8rem"), localStorage.setItem("fontsize", 1.8);
            break;
        case "2":
            $(".content").css("font-family", "fc_lamoon"), localStorage.setItem("fontfamily", "fc_lamoon"), $(".content").css("font-size", "1.8rem"), localStorage.setItem("fontsize", 1.8);
            break;
        case "3":
            $(".content").css("font-family", "js_toomtam"), localStorage.setItem("fontfamily", "js_toomtam"), $(".content").css("font-size", "1.8rem"), localStorage.setItem("fontsize", 1.8);
            break;
        case "4":
            $(".content").css("font-family", "layiji_mahaniyom"), localStorage.setItem("fontfamily", "layiji_mahaniyom"), $(".content").css("font-size", "1.8rem"), localStorage.setItem("fontsize", 1.8);
            break;
        case "5":
            $(".content").css("font-family", "tf_arluck"), localStorage.setItem("fontfamily", "tf_arluck"), $(".content").css("font-size", "2rem"), localStorage.setItem("fontsize", 2);
            break;
        case "6":
            $(".content").css("font-family", "tf_nopscript"), localStorage.setItem("fontfamily", "tf_nopscript"), $(".content").css("font-size", "1.8rem"), localStorage.setItem("fontsize", 1.8);
            break;
        case "7":
            $(".content").css("font-family", "th_charmonman"), localStorage.setItem("fontfamily", "th_charmonman"), $(".content").css("font-size", "1.8rem"), localStorage.setItem("fontsize", 1.8);
            break;
        case "8":
            $(".content").css("font-family", "th_dan_vi_vek"), localStorage.setItem("fontfamily", "th_dan_vi_vek"), $(".content").css("font-size", "1.8rem"), localStorage.setItem("fontsize", 1.8);
            break;
        default:
            $(".content").css("font-family", "Arial"), localStorage.setItem("fontfamily", "Arial"), $(".content").css("font-size", "1.4rem"), localStorage.setItem("fontsize", 1.4)
    }
};
// Change Text Style
var nowfontweight = localStorage.getItem("fontweight");
$(".content").css("font-weight", nowfontweight), null == nowfontweight && "NaN" == nowfontweight || $(".content").css("font-weight", nowfontweight);
var changefontweight = function (t) {
    var e = $(t).attr("data-type"),
        o = localStorage.getItem("fontweight");
    switch (null != o && "NaN" != o || (localStorage.setItem("fontweight", "normal"), o = localStorage.getItem("fontweight")), e) {
        case "0":
            $(".content").css("font-weight", "normal"), localStorage.setItem("fontweight", "normal");
            break;
        case "1":
            $(".content").css("font-weight", "bold"), localStorage.setItem("fontweight", "bold");
            break;
        default:
            $(".content").css("font-weight", "normal"), localStorage.setItem("fontweight", "normal")
    }
};
//Change Read Mode
var swapStyleSheet = function (e) {
        document.getElementById("readMode").setAttribute("href", e), storebackground(e)
    },
    storebackground = function (e) {
        localStorage.setItem("sheetKey", e)
    },
    loadbackground = function () {
        document.getElementById("readMode").setAttribute("href", localStorage.getItem("sheetKey"))
    };
window.onload = loadbackground();