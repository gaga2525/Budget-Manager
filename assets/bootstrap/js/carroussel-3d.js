! function(t) { t.fn.mdbCarousel3d = function(e) { let n, a, l, r = t.extend({ vertical: !1, interval: 5e3, autoplay: !0 }, e),
            i = t(this),
            o = t(this).find(".carousel-3d-inner"),
            s = o.find(".carousel-3d-item"),
            c = s.length,
            u = 0,
            f = r.vertical ? "rotateX" : "rotateY";

        function d() { let t = a * u * -1;
            o.css({ transform: "translateZ(" + -n + "px) " + f + "(" + t + "deg)" }) }

        function h() { u++, d() }

        function v() { f = r.vertical ? "rotateX" : "rotateY"; let t = i.outerHeight(),
                e = i.outerWidth();
            s.css({ height: t - 50 }), s.css({ width: e - 50 }),
                function() { a = 360 / c; let t = o.outerWidth(),
                        e = o.outerHeight(),
                        l = r.vertical ? e : t;
                    n = Math.round(l / 2 / Math.tan(Math.PI / c)); for (let t = 0; t < s.length; t++) { let e = s[t]; if (t < c) { e.style.opacity = 1; let l = a * t;
                            e.style.transform = f + "(" + l + "deg) translateZ(" + n + "px)" } else e.style.opacity = 0, e.style.transform = "none" }
                    d() }() }
        t(this).find(".prev-btn").on("click", function() { clearInterval(l), u--, d(), r.autoplay && (l = setInterval(h, r.interval)) }), t(this).find(".next-btn").on("click", function() { clearInterval(l), h(), r.autoplay && (l = setInterval(h, r.interval)) }), v(), r.autoplay && (l = setInterval(h, r.interval)), t(window).resize(v) } }(jQuery);