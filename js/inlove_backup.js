! function(t) {
    "use strict";
    var i = function(i) {
        var n = this;
        n.options = i, n.$window = t(window), n.$document = t(document), n.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera), n.$preloader = t(".inlove-preloader")
    };
    i.DEFAULT = {
        stickySidebar: !0
    };
    var n = t("body");
    i.prototype.init = function(i) {
        function o() {
            "undefined" != typeof t.fn.tooltip && t('[data-toggle="tooltip"]').tooltip({
                container: "body"
            }), "undefined" != typeof t.fn.popover && t('[data-toggle="popover"]').popover(), e.initSlick(), e.initPhotoSwipe(), e.initIsotope(), e.initAccordions(), e.initFullpage(), e.initSnowEffect(), e.initSectionsWithImage(), e.navbar(), e.navbarSubmenuFix(), e.initSidebar(), e.initSameHeightImg(), e.initSmoothAnchorScroll(), e.initScrollTopBtn(), e.initAjaxForm(), e.initJarallax(), e.initCounters(), e.initCountdown(), e.initScrollHeroBtn(), e.initInstagramScroll()
        }
        var e = this;
        e.options = t.extend({}, this.options, i), e.$preloader.length ? t(window).on("load", function() {
            o(), setTimeout(function() {
                e.$preloader.fadeOut(1e3, function() {
                    t(this).remove()
                }), n.addClass("inlove-loaded"), e.initWOWjs()
            }, 200)
        }) : (n.addClass("inlove-loaded"), o(), e.initWOWjs(), t(window).on("load", function() {
            e.refresh()
        }))
    }, i.prototype.refresh = function() {}, i.prototype.initJarallax = function() {
        "undefined" == typeof t.fn.jarallax || this.isMobile || (t(".inlove-parallax").jarallax(), t(".inlove-parallax-scale").jarallax({
            type: "scale-opacity",
            speed: .2
        }), t(".inlove-parallax-opacity").jarallax({
            type: "scroll-opacity"
        }))
    }, i.prototype.initSlick = function() {
        "undefined" != typeof t.fn.slick && (t(".inlove-header .slick-slider").slick({
            dots: !0,
            arrows: !1,
            infinite: !0,
            useTransform: !0,
            speed: 1e3,
            fade: !0,
            autoplay: !0,
            autoplaySpeed: 5e3
        }), t(".inlove-wishes.slick-slider").slick({
            dots: !0,
            arrows: !1,
            infinite: !0,
            useTransform: !0,
            speed: 1e3,
            autoplay: !0,
            autoplaySpeed: 7e3
        }))
    }, i.prototype.initIsotope = function() {
        if ("undefined" != typeof t.fn.isotope) {
            t(".isotope").each(function() {
                var i = t(this),
                    n = i.siblings(".isotope-filter:eq(0)");
                i.find("> .item").addClass("isotope-grid-item"), i.isotope({
                    itemSelector: ".isotope-grid-item",
                    transitionDuration: "0.5s"
                }), n.length && n.on("click", "[data-filter]", function(n) {
                    n.preventDefault();
                    var o = t(this).attr("data-filter");
                    t(this).addClass("active").siblings().removeClass("active"), i.isotope({
                        filter: "*" == o ? "" : "[data-filter*=" + o + "]"
                    })
                }), i.on("arrangeComplete", function() {
                    t(window).resize()
                }), t("img").on("load", function() {
                    i.isotope("layout")
                })
            })
        }
    }, i.prototype.initPhotoSwipe = function() {
        var i = t(".photoswipe-gallery");
        if ("undefined" != typeof PhotoSwipe && i.length) {
            var o = ['<div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">', '  <div class="pswp__bg"></div>', '  <div class="pswp__scroll-wrap">', '    <div class="pswp__container">', '      <div class="pswp__item"></div>', '      <div class="pswp__item"></div>', '      <div class="pswp__item"></div>', "    </div>", '    <div class="pswp__ui pswp__ui--hidden">', '      <div class="pswp__top-bar">', '        <div class="pswp__counter"></div>', '        <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>', '        <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>', '        <div class="pswp__preloader">', '          <div class="pswp__preloader__icn">', '            <div class="pswp__preloader__cut">', '              <div class="pswp__preloader__donut"></div>', "            </div>", "          </div>", "        </div>", "      </div>", '      <div class="pswp__loading-indicator"><div class="pswp__loading-indicator__line"></div></div>', '      <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>', '      <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>', '      <div class="pswp__caption">', '        <div class="pswp__caption__center">', "        </div>", "      </div>", "    </div>", "  </div>", "</div>"].join("\n");
            n.append(o);
            var e = function(i) {
                    for (var i, n, o, e, a = i.childNodes, r = a.length, s = [], l = 0; r > l; l++)
                        if (i = a[l], 1 === i.nodeType) {
                            i = t(i).find("> a")[0], n = i.children, o = i.getAttribute("data-size").split("x"), e = {
                                src: i.getAttribute("href"),
                                w: parseInt(o[0], 10),
                                h: parseInt(o[1], 10),
                                author: i.getAttribute("data-author")
                            }, e.el = i, n.length > 0 && (e.msrc = n[0].getAttribute("src"), n.length > 1 && (e.title = t(n).filter(".photoswipe-description").html()));
                            var d = i.getAttribute("data-med") || e.src;
                            d && (o = (i.getAttribute("data-med-size") || i.getAttribute("data-size")).split("x"), e.m = {
                                src: d,
                                w: parseInt(o[0], 10),
                                h: parseInt(o[1], 10)
                            }), e.o = {
                                src: e.src,
                                w: e.w,
                                h: e.h
                            }, s.push(e)
                        }
                    return s
                },
                a = function p(t, i) {
                    return t && (i(t) ? t : p(t.parentNode, i))
                },
                r = function(i) {
                    i = i || window.event, i.preventDefault ? i.preventDefault() : i.returnValue = !1;
                    var n = i.target || i.srcElement,
                        o = a(n, function(t) {
                            return "A" === t.tagName
                        });
                    if (o) {
                        var e = o.parentNode.parentNode,
                            r = t(o).parent().index();
                        return r >= 0 && l(r, e), !1
                    }
                },
                s = function() {
                    var t = window.location.hash.substring(1),
                        i = {};
                    if (t.length < 5) return i;
                    for (var n = t.split("&"), o = 0; o < n.length; o++)
                        if (n[o]) {
                            var e = n[o].split("=");
                            e.length < 2 || (i[e[0]] = e[1])
                        }
                    return i.gid && (i.gid = parseInt(i.gid, 10)), i
                },
                l = function(i, n, o, a) {
                    var r, s, l, d = t(".pswp")[0];
                    if (l = e(n), s = {
                            captionAndToolbarShowEmptyCaptions: !1,
                            mainClass: "pswp--minimal--dark",
                            barsSize: {
                                top: 0,
                                bottom: 0
                            },
                            captionEl: !0,
                            fullscreenEl: !1,
                            shareEl: !1,
                            bgOpacity: .85,
                            tapToClose: !0,
                            tapToToggleControls: !1,
                            addCaptionHTMLFn: function(t, i, n) {
                                if (!t.title && !t.author) return i.children[0].innerHTML = "", !1;
                                var o = "";
                                return t.title && (o += t.title), t.author && (t.title && (o += "<br>"), o += "<small>" + t.author + "</small>"), i.children[0].innerHTML = o, !0
                            },
                            galleryUID: n.getAttribute("data-pswp-uid"),
                            getThumbBoundsFn: function(t) {
                                var i = l[t].el.children[0],
                                    n = window.pageYOffset || document.documentElement.scrollTop,
                                    o = i.getBoundingClientRect();
                                return {
                                    x: o.left,
                                    y: o.top + n,
                                    w: o.width
                                }
                            }
                        }, a)
                        if (s.galleryPIDs) {
                            for (var c = 0; c < l.length; c++)
                                if (l[c].pid == i) {
                                    s.index = c;
                                    break
                                }
                        } else s.index = parseInt(i, 10) - 1;
                    else s.index = parseInt(i, 10);
                    if (!isNaN(s.index)) {
                        o && (s.showAnimationDuration = 0), r = new PhotoSwipe(d, PhotoSwipeUI_Default, l, s);
                        var p, u, f = !1,
                            h = !0;
                        r.listen("beforeResize", function() {
                            var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
                            t = Math.min(t, 2.5), p = r.viewportSize.x * t, p >= 1200 || !r.likelyTouchDevice && p > 800 || screen.width > 1200 ? f || (f = !0, u = !0) : f && (f = !1, u = !0), u && !h && r.invalidateCurrItems(), h && (h = !1), u = !1
                        }), r.listen("gettingData", function(t, i) {
                            f ? (i.src = i.o.src, i.w = i.o.w, i.h = i.o.h) : (i.src = i.m.src, i.w = i.m.w, i.h = i.m.h)
                        }), r.init()
                    }
                },
                d = 0;
            i.each(function() {
                t(this).attr("data-pswp-uid", d + 1), t(this).on("click", r), d++
            });
            var c = s();
            c.pid && c.gid && l(c.pid, this.$photoswipe.get(c.gid - 1), !0, !0)
        }
    }, i.prototype.initAccordions = function() {
        var i = this;
        t(".inlove-accordion").find(".collapse").on("shown.bs.collapse", function() {
            t(this).parent().find(".icon-plus").removeClass("icon-plus").addClass("icon-minus"), i.refresh()
        }).on("hidden.bs.collapse", function() {
            t(this).parent().find(".icon-minus").removeClass("icon-minus").addClass("icon-plus"), i.refresh()
        })
    }, i.prototype.initFullpage = function() {
        t("#fullpage").fullpage({
            navigation: !0,
            verticalCentered: !1
        })
    }, i.prototype.initWOWjs = function() {
        "undefined" != typeof WOW && (new WOW).init()
    }, i.prototype.initSnowEffect = function() {
        if (!this.isMobile) {
            var i = window.innerWidth,
                n = window.innerHeight;
            t(window).on("resize", function() {
                i = window.innerWidth, n = window.innerHeight
            }), t(".inlove-header-effect").each(function() {
                function o() {
                    clearTimeout(w), w = setTimeout(function() {
                        var t = d.getBoundingClientRect();
                        v = t.top >= n || t.top <= -1 * t.height
                    }, 200)
                }

                function e() {
                    if (requestAnimationFrame(e), !v) {
                        for (var t = new Date, o = 0; r > o; o++) h.moveTo(m[o].x, m[o].y), h.clearRect(m[o].x - m[o].r - 1, m[o].y - m[o].r - 1, 2 * m[o].r + 2, 2 * m[o].r + 2);
                        a(t - b), h.fillStyle = "#fff";
                        for (var o = 0; r > o; o++) h.beginPath(), h.arc(m[o].x, m[o].y, m[o].r, 0, l), h.closePath(), h.fill();
                        u.clearRect(0, 0, i, n), u.drawImage(f, 0, 0), b = t
                    }
                }

                function a(t) {
                    y += t / (200 * s);
                    for (var o = 0; r > o; o++) {
                        var e = m[o];
                        e.y += (Math.cos(y + e.d) + 1 + e.r / 2) / (t / s), e.x += 2 * Math.sin(y) / (t / s), (e.x > i + 5 || e.x < -5 || e.y > n) && (o % 3 > 0 ? m[o] = {
                            x: Math.random() * i,
                            y: -10,
                            r: e.r,
                            d: e.d
                        } : Math.sin(y) > 0 ? m[o] = {
                            x: -5,
                            y: Math.random() * n,
                            r: e.r,
                            d: e.d
                        } : m[o] = {
                            x: i + 5,
                            y: Math.random() * n,
                            r: e.r,
                            d: e.d
                        })
                    }
                }
                var r = 25,
                    s = 8,
                    l = 2 * Math.PI,
                    d = this,
                    c = t("<canvas>").css("opacity", .8).appendTo(this),
                    p = c[0],
                    u = p.getContext("2d"),
                    f = t("<canvas>")[0],
                    h = f.getContext("2d"),
                    v = !1;
                p.width = f.width = i, p.height = f.height = n, t(window).smartresize(function() {
                    p.width = f.width = i, p.height = f.height = n
                });
                var w;
                t(window).on("resize scroll load", o), o();
                for (var m = [], g = 0; r > g; g++) m.push({
                    x: Math.random() * i,
                    y: Math.random() * n,
                    r: 4 * Math.random() + 1,
                    d: Math.random() * r
                });
                var b = new Date,
                    y = 0;
                e()
            })
        }
    }, i.prototype.initSectionsWithImage = function() {
        t(".inlove-section-with-bg .inlove-back-image").each(function() {
            t(this).parents(".inlove-section-with-bg:eq(0)").addClass("inlove-section-with-image")
        })
    }, i.prototype.initScrollTopBtn = function() {
        t(".inlove-scroll-top").on("click", function() {
            t("html, body").stop().animate({
                scrollTop: 0
            }, 500, "swing")
        })
    }, i.prototype.navbar = function() {
        function i() {
            var i = t(window).scrollTop() >= o;
            i ? (a++, n.addClass("navbar-fixed-top"), e.show(), 1 == a && n.find(".wow").removeClass("wow")) : (n.removeClass("navbar-fixed-top"), e.hide())
        }
        var n = t(".inlove-navbar");
        if (n.hasClass("inlove-navbar-sticky")) {
            var o = n.offset().top,
                e = n.clone().css({
                    visibility: "hidden",
                    position: "relative",
                    opacity: 0
                }).hide();
            e.find(".wow").removeClass("wow"), e.find("[id]").removeAttr("id"), e.find("ul > li > div").remove(), e.insertBefore(n);
            var a = 0;
            t(window).on("resize", function() {
                e.show(), o = e.offset().top, e.hide()
            }), t(window).on("scroll resize", i), i()
        }
        t(".inlove-smooth-scroll").add(n).on("click", "a", function(i) {
            var o, e = this.hash;
            if (e && (o = t(e)).length) {
                i.preventDefault();
                var a = o.offset().top;
                (n.hasClass("inlove-navbar-fixed") || n.hasClass("inlove-navbar-sticky")) && (a -= n.outerHeight()), t("html, body").stop().animate({
                    scrollTop: a
                }, 1e3, "swing", function() {
                    window.location.hash = e
                })
            }
        }), location.hash && setTimeout(function() {
            window.scrollTo(0, t(location.hash).offset().top)
        }, 1)
    }, i.prototype.navbarSubmenuFix = function() {
        t(".inlove-navbar").on("click", ".dropdown-menu .dropdown-toggle", function(i) {
            t(this).parent(".dropdown").toggleClass("open"), i.preventDefault(), i.stopPropagation()
        })
    }, i.prototype.initSidebar = function() {
        if (this.options.stickySidebar) {
            var i = t(".inlove-navbar-fixed, .inlove-navbar-sticky").length;
            t(".inlove-sticky-sidebar").addClass("theiaStickySidebar").parent().css({
                "will-change": "min-height"
            }).theiaStickySidebar({
                additionalMarginTop: 30 + (i ? 70 : 0),
                additionalMarginBottom: 10
            })
        }
    }, i.prototype.initSameHeightImg = function() {
        var i = this;
        t(".inlove-image-same-height").each(function() {
            function n() {
                if (e.css({
                        width: "",
                        maxWidth: "",
                        marginLeft: ""
                    }), s && r) {
                    var t = s / r,
                        i = a.height() / a.width();
                    if (i > t) {
                        var n = 100 * (i - t) / t;
                        e.css({
                            width: n + 100 + "%",
                            maxWidth: n + 100 + "%",
                            marginLeft: -n / 2 + "%"
                        })
                    }
                }
            }
            var o = t(this),
                e = o.find("img"),
                a = o.parent(),
                r = e[0].width,
                s = e[0].height;
            e.one("load", function() {
                r = e[0].width, s = e[0].height, n()
            }), i.$window.on("resize", n), n()
        })
    }, i.prototype.initSmoothAnchorScroll = function() {
        t(".nav:not(.nav-tabs) a, .smooth-scroll").on("click", function() {
            var i = t(t(this).attr("href")),
                o = parseFloat(n.attr("data-offset")) || 0;
            return i.length ? (t("html, body").stop().animate({
                scrollTop: i.offset().top - o + 1
            }, 900), !1) : void 0
        })
    }, i.prototype.initAjaxForm = function() {
        t("form.inlove-ajax").on("submit", function(i) {
            i.preventDefault();
            var n = t(this),
                o = n.find('[type="submit"]'),
                e = o.data("ladda-button");
            if (!o.is(".disabled") && !o.is("[disabled]")) {
                if (!e) {
                    var e = Ladda.create(o[0]);
                    o.addClass("ladda-button").attr("data-style", "slide-down"), o.data("ladda-button", e)
                }
                e.start(), t.post(t(this).attr("action"), t(this).serialize(), function(t, i) {
                    swal({
                        type: "success",
                        title: "Success!",
                        text: t,
                        showConfirmButton: !0,
                        confirmButtonClass: "btn-default"
                    }), e.stop(), n[0].reset()
                }).fail(function(t) {
                    swal({
                        type: "error",
                        title: "Error!",
                        text: t.responseText,
                        showConfirmButton: !0,
                        confirmButtonClass: "btn-default"
                    }), e.stop()
                })
            }
        })
    }, i.prototype.initCounters = function() {
        function i() {
            var o = t(".progress-count .progress-bar").filter("[data-inlove-count]"),
                e = t(".inlove-count").filter("[data-inlove-count]"),
                a = o.length + e.length;
            if (!a) return void n.$window.off("load scroll", i);
            var r = n.$window.scrollTop() + n.$window.height(),
                s = n.$window.scrollTop();
            t(".progress-count .progress-bar").filter("[data-inlove-count]").each(function() {
                var i = t(this),
                    n = i.offset().top;
                r >= n && n >= s && (i.css("width", i.attr("data-inlove-count")), i.removeAttr("data-inlove-count"))
            }), t(".inlove-count").filter("[data-inlove-count]").each(function() {
                var i = t(this),
                    n = i.offset().top;
                r >= n && n >= s && (i.prop("Counter", 0).animate({
                    Counter: i.attr("data-inlove-count")
                }, {
                    duration: 2e3,
                    easing: "swing",
                    step: function(i) {
                        t(this).text(Math.ceil(i))
                    }
                }), i.removeAttr("data-inlove-count"))
            })
        }
        var n = this;
        t(".progress-count .progress-bar").each(function() {
            t(this).attr("data-inlove-count", t(this).attr("data-count") + "%").css("transition", "none").css("width", 0)
        }), setTimeout(function() {
            t(".progress-count .progress-bar").css("transition", "")
        }, 0), t(".inlove-count").each(function() {
            t(this).attr("data-inlove-count", t(this).attr("data-count") || parseInt(t(this).text())).html("0")
        }), n.$window.on("load scroll", i), i()
    }, i.prototype.initCountdown = function() {
        t(".inlove-countdown").each(function() {
            t(this).countdown(t(this).attr("data-countdown-end"), function(i) {
                t(this).html(i.strftime(['<div><span class="inlove-countdown-number">%m</span> <span class="inlove-countdown-label">Months</span></div>','<div><span class="inlove-countdown-number">%n</span> <span class="inlove-countdown-label">Days</span></div>', '<div><span class="inlove-countdown-number">%H</span> <span class="inlove-countdown-label">Hours</span></div>', '<div><span class="inlove-countdown-number">%M</span> <span class="inlove-countdown-label">Minutes</span></div>', '<div><span class="inlove-countdown-number">%S</span> <span class="inlove-countdown-label">Seconds</span></div>'].join(" ")))
            })
        })
    }, i.prototype.initScrollHeroBtn = function() {
        t(".inlove-scroll-btn").on("click", function(i) {
            i.preventDefault();
            var n = t(this).parents(".inlove-header:eq(0)");
            t("html, body").stop().animate({
                scrollTop: n.offset().top + n.innerHeight()
            }, 700)
        })
    }, i.prototype.initInstagramScroll = function() {
        if (!this.isMobile) {
            t(".inlove-instagram").each(function() {
                var i = t(this).children();
                i.jarallax({
                    type: "custom",
                    imgSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    imgWidth: 1,
                    imgHeight: 1,
                    onScroll: function(t) {
                        var n = Math.max(-50, -50 * (1 - t.visiblePercent));
                        i.css({
                            transform: "translate3d(0, " + n + "%, 0)",
                            opacity: t.visiblePercent < 0 ? 1 : t.visiblePercent
                        })
                    }
                })
            })
        }
    }, window.inlove = new i(i.DEFAULT)
}(jQuery), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }),
    function() {
        "use strict";
        for (var t = ["webkit", "moz"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) {
            var n = t[i];
            window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var o = 0;
            window.requestAnimationFrame = function(t) {
                var i = Date.now(),
                    n = Math.max(o + 16, i);
                return setTimeout(function() {
                    t(o = n)
                }, n - i)
            }, window.cancelAnimationFrame = clearTimeout
        }
    }(),
    function(t, i) {
        var n = function(t, i, n) {
            var o;
            return function() {
                function e() {
                    n || t.apply(a, r), o = null
                }
                var a = this,
                    r = arguments;
                o ? clearTimeout(o) : n && t.apply(a, r), o = setTimeout(e, i || 100)
            }
        };
        jQuery.fn[i] = function(t) {
            return t ? this.bind("resize", n(t)) : this.trigger(i)
        }
    }(jQuery, "smartresize");
var token = "3413497516.788cb43.a612989e97da4a9189f9593565563faf",
    hashtag = "saniaalex2017",
    num_photos = 6;
$.ajax({
    url: "https://api.instagram.com/v1/tags/" + hashtag + "/media/recent",
    dataType: "jsonp",
    type: "GET",
    data: {
        access_token: token,
        count: num_photos
    },
    success: function(a) {
        for (x in a.data) $("#hashInsta").append("<div class='col-sm-2 col-xs-4'><a href='" + a.data[x].link + "' target='_blank'><img src='" + a.data[x].images.standard_resolution.url + "' alt='" + a.data[x].caption.text + "'></a></div>")
    },
    error: function(a) {
        console.log(a)
    }
});