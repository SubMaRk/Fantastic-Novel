"use strict";
var scroller = {
    config: {
        hoverColor: "#DB7661",
        bgColor: "#1f2b31",
        opacity: 1
    },
    init: function () {
        var o, i, c, n = document.createElement("a"),
            t = ".scroll-top-button",
            e = document.createElement("img");
        $(e).text("^"), $(n).attr({
            href: "#top"
        }), $(e).attr({
            id: "up-btn",
            class: t.replace(".", ""),
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAATCAYAAABobNZCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMThEQkJGNTAwMDFENjJCODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjQ3MDE3RkUzN0M2MTFFMkI5MUNENTYyQzU3ODhFNEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjQ3MDE3RkQzN0M2MTFFMkI5MUNENTYyQzU3ODhFNEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MjY1MDg5QjNGMkZFMjExQUM3Q0Q4Nzg2MUU1NkM3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjgwMTE3NDA3MjA2ODExOERCQkY1MDAwMUQ2MkI4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psc29coAAAE7SURBVHjaYvj//z8DmTgOiM8CsTK5ZpBrccR/BDhPrgPIsTgKiH//RwVkhQCpFscA8Y//2AHIAaq0stwNiL/8xw+OAbEQtS13AuKX/4kD24FYgFqW25FgMUkOIMbiF//JA9uAmJ9cy22B+Dkew/8C8R0CDtgKxMKkWu5AhI/bgVgNiE8SEQVixFpuD8TPCBjYg6RekUgHiBCy3IkIi7uAmAlNnwIQnyAiDQjistyRiKAGWcyKI6pkiAiBbci5AEQwQoOakMXdeCxGdsBpIqIAFAKMIA36QPyWQKrugTqSmHJBhsgoUGNiYGD4BsQPGXCDfiAuAeL/DMSBJ0AcCsQn8ai5B8Q/kFPsGRxBTW61K4cjBCZgS3BKaPHVSYHFuHJBH76sBgqBo0DciyU7UeKAw0A8EYiZkeUAAgwAswRZ5V7ztVUAAAAASUVORK5CYII="
        }), "undefined" != typeof conf ? (o = void 0 === conf.bgColor ? scroller.config.bgColor : conf.bgColor, i = void 0 === conf.hoverColor ? scroller.config.hoverColor : conf.hoverColor, c = void 0 === conf.opacity ? scroller.config.opacity : conf.opacity) : (o = scroller.config.bgColor, i = scroller.config.hoverColor, c = scroller.config.opacity), $(n).append(e), $("body").prepend(n), $(n).prepend("<a name='top'></a>"), $(t).css({
            position: "absolute",
            bottom: "50px",
            right: "40px",
            color: "#fff",
            backgroundColor: o,
            opacity: c,
            webkitTransition: "background 0.4s",
            mozTransition: "background 0.4s",
            msTransition: "background 0.4s",
            transition: "background 0.4s",
            padding: "10px 5px",
            textAlign: "center",
            boxSizing: "content-box"
        }), $(t).on("mouseover", function () {
            $(this).css({
                backgroundColor: i,
                opacity: 1
            })
        }), $(t).on("mouseout", function () {
            $(this).css({
                color: void 0,
                backgroundColor: o,
                opacity: c
            })
        }), this.offset()
    },
    offset: function () {
        window.innerHeight;
        var n = $(".scroll-top-button");
        n.css("display", "none"), $(function () {
            var c = $("body").offset().top;
            n.offset().top;
            $(window).scroll(function () {
                var o = c - $(window).scrollTop();
                if (-200 < o && n.fadeOut("slow"), o <= -400) {
                    var i = window.innerHeight - 165;
                    n.fadeIn("slow"), n.css({
                        position: "fixed",
                        display: "block",
                        "z-index": 2
                    })
                }
            })
        }), this.scrolls()
    },
    scrolls: function () {
        $('a[href^="#top"]').on("click", function (o) {
            var i = $($(this).attr("href"));
            i.length && (o.preventDefault(), $("html, body").animate({
                scrollTop: i.offset().top
            }, 500))
        })
    }
};
$(function () {
    scroller.scrolls()
});