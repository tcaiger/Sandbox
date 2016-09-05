// -----------------------------------------------------------------------------
// Custom Scripts
// -----------------------------------------------------------------------------

var ONFIRE = ONFIRE || {};

$(document).ready(function () {

    ONFIRE = {
        settings      : {},
        init          : function () {
            //this.nav.init();
            this.mobileNav.init();
            this.demoMap.init();
            this.smoothScroll.init();
            this.productFilter.init();
            this.newsFilter.init();
            //this.faqAccordian.init();
            this.staffProfiles.init();
            this.mobileProfiles.init();
            this.validate.init();
        },
        nav           : {
            link    : $('.nav-dropdown'),
            settings: {
                duration: 300,
                queue   : false
            },
            init    : function () {
                var _this = this;
                this.link.hover(function () {
                    if ($(window).width() > 800) {
                        $(this).children().last().fadeIn(_this.settings);
                    }
                }, function () {
                    if (($(window).width() > 800)) {
                        $(this).children().last().fadeOut(_this.settings);
                    }
                });
            }
        },
        demoMap     : {
            button: $('.js-demo-map'),
            init  : function () {
                this.button.magnificPopup({
                    type: 'image'
                });
            }
        },
        smoothScroll     : {
            button: $('.js-scroll-button'),
            init  : function () {

                this.button.on('click', function () {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target     = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, 600);
                            return false;
                        }
                    }
                });
            }
        },
        mobileNav     : {
            button: $('.js-nav-btn'),
            inner: $('.js-mobile-menu-inner'),
            nav   : $('.js-mobile-menu'),
            open: false,
            init  : function () {
                var _this = this;
                this.button.on('click', function () {
                    if(!_this.open){
                        var height = $('.js-mobile-menu-inner').first().outerHeight();
                        _this.nav.css('height', height + 5);
                        _this.nav.toggleClass('active');
                    }else{
                        _this.nav.css('height', 0);
                    }
                    _this.open =! _this.open;
                });
            }
        },
        productFilter : {
            categoryLink: $('.js-category-link'),
            container   : $('.product-collection-container'),
            init        : function () {

                if (this.categoryLink.width()) {
                    var _this = this;
                    this.categoryLink.on('click', function (e) {

                        e.preventDefault();
                        var URLSegment = $(this).data('category');

                        if (URLSegment == 'all') {
                            var url = window.location.origin + '/products/';
                        } else {
                            var url = window.location.origin + '/products/category/' + URLSegment;
                        }

                        _this.container.fadeOut(100, function () {
                            _this.ajax(url)
                        });

                        window.history.pushState(url, null, url);
                        window.onpopstate = function (e) {
                            if (e.state) {
                                _this.ajax(e.state);
                            } else {
                                url = window.location.origin + '/products/category/all';
                                _this.ajax(url);
                            }
                        }
                    });
                }
            },
            ajax        : function (url) {
                var _this = this;
                $.ajax(url)
                    .done(function (response) {
                        _this.container.html(response);
                        _this.container.fadeIn(100);
                    })
                    .fail(function (xhr) {
                        alert('Error:' + xhr.responseText);
                    });
            }
        },
        newsFilter    : {
            newsCatLink: $('.js-newscat-link'),
            container  : $('.news-collection-container'),
            init       : function () {

                if (this.newsCatLink.width()) {

                    var _this = this;

                    this.newsCatLink.on('click', function (e) {

                        e.preventDefault();
                        var URLSegment = $(this).data('category');

                        if (URLSegment == 'all') {
                            var url = window.location.origin + '/news/';
                        } else {
                            var url = window.location.origin + '/news/category/' + URLSegment;
                        }

                        _this.container.fadeOut(100, function () {
                            _this.ajax(url);
                        })

                        window.history.pushState(url, null, url);
                        window.onpopstate = function (e) {
                            if (e.state) {
                                _this.ajax(e.state);
                            } else {
                                url = window.location.origin + '/news/category/all';
                                _this.ajax(url);
                            }
                        }
                    });
                }
            },
            ajax       : function (url) {
                var _this = this;
                $.ajax(url)
                    .done(function (response) {
                        _this.container.html(response);
                        _this.container.fadeIn(100);
                    })
                    .fail(function (xhr) {
                        alert('Error:' + xhr.responseText);
                    });
            }
        },
        faqAccordian  : {
            link  : $('.js-link'),
            faq   : $('.js-faq'),
            outer : $('.js-outer'),
            init  : function () {
                var _this = this;

                this.setup();

                this.link.on('click', function (e) {

                    e.preventDefault();

                    var target      = $(this).data('target');
                    var box         = $('#' + target);
                    var activeLinks = $('.js-' + target);
                    _this.link.removeClass('active');

                    if (box.hasClass('open')) {
                        box.css('height', 0);
                        box.removeClass('open');

                    } else {
                        // Remove active states of old
                        _this.outer.removeClass('open');
                        _this.outer.css('height', 0);

                        // Add active states to new
                        var height = box.find('.js-inner').outerHeight();
                        box.css('height', height + 50);
                        box.addClass('open');
                        activeLinks.addClass('active');
                    }

                    _this.scroll(this);
                })
            },
            setup : function () {
                var first       = $('.js-outer').first();
                var firstHeight = $('.js-inner').first().outerHeight();
                first.css('height', firstHeight + 50);
                first.addClass('open');
            },
            scroll: function (link) {
                if (location.pathname.replace(/^\//, '') == link.pathname.replace(/^\//, '') && location.hostname == link.hostname) {
                    var target = $(link.hash);
                    target     = target.length ? target : $('[name=' + link.hash.slice(1) + ']');
                    if (target.length) {


                        setTimeout(function () {

                            $('html, body').animate({
                                scrollTop: target.offset().top - 100
                            }, 500);
                            return false;


                        }, 300);


                    }
                }
            }
        },
        staffProfiles : {
            button   : $('.js-read-more'),
            close    : $('.js-close-btn'),
            container: $('.js-profiles'),
            init     : function () {
                if (this.button.width() && $(document).width() >= 753) {
                    var _this = this;
                    this.button.on('click', function (e) {
                        _this.container.addClass('active');

                        _this.select(this, 'name');
                        _this.select(this, 'position');
                        _this.select(this, 'copy');
                        _this.select(this, 'phone');
                        _this.select(this, 'email');

                        var imgURL = $(this).find('.js-select-img').data('url');
                        $('.js-img').attr('src', imgURL);

                    })
                    this.close.on('click', function (e) {
                        _this.container.removeClass('active');
                    })
                }
            },
            select   : function (profile, field) {
                var selected = $(profile).find('.js-select-' + field).html();
                $('.js-' + field).html(selected);
            }
        },
        mobileProfiles: {
            button: $('.js-profile-btn'),
            init  : function () {
                if (this.button.width() && $(document).width() < 753) {
                    this.button.on('click', function (e) {

                        var target  = $(this).data('target');
                        var profile = $('#' + target)

                        if (profile.hasClass('open')) {
                            profile.css('height', 0);
                            profile.removeClass('open');
                        } else {
                            var height = profile.find('.profile-inner').outerHeight();
                            profile.css('height', height);
                            profile.addClass('open');
                        }
                    })
                }
            }
        },
        validate      : {
            form    : $('form'),
            settings: {
                ignore: [],
                rules         : {
                    HiddenCaptcha: {
                        required: function () {
                            if(grecaptcha.getResponse() == '') {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                },
                errorElement  : 'span',
                errorClass    : 'validation-message',
                errorPlacement: function (error, element) {
                    element.after(error);
                }
            },
            init    : function () {
                var _this = this;
                if (this.form.length) {
                    this.form.validate(_this.settings);
                }
            }
        }
    }
    ONFIRE.init();
});