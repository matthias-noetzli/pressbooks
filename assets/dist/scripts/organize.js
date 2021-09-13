(()=>{"use strict";var t=function(){return(t=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var i in e=arguments[a])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},e=function(){function e(e,a,n){var i=this;this.target=e,this.endVal=a,this.options=n,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,a,n,r,o,s=t<0?"-":"";if(e=Math.abs(t).toFixed(i.options.decimalPlaces),n=(a=(e+="").split("."))[0],r=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){o="";for(var l=0,c=n.length;l<c;++l)0!==l&&l%3==0&&(o=i.options.separator+o),o=n[c-l-1]+o;n=o}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e},this.options=t(t({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(a),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return e.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},e.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},e.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();var a=window.jQuery,n={organize:{bulkToggle:[],oldParent:null,newParent:null,oldOrder:null,newOrder:null,sortableOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(t,e){n.organize.oldParent=a(e.item).parents("table").attr("id")},stop:function(t,e){n.organize.newParent=a(e.item).parents("table").attr("id"),p(a(e.item))}}}};function i(t){a.blockUI.defaults.applyPlatformOpacityRules=!1;var e,n=a('[role="alert"]');if("book"===t)e=PB_OrganizeToken.updating.book;else{var i=t.post_type.replace("-","");e=PB_OrganizeToken.updating[i]}n.children("p").text(e),n.addClass("loading-content").removeClass("visually-hidden"),a.blockUI({message:a(n),baseZ:1e5})}function r(t,e){var n,i=a('[role="alert"]');if("book"===t)n=PB_OrganizeToken[e].book;else{var r=t.post_type.replace("-","");n=PB_OrganizeToken[e][r]}a.unblockUI({onUnblock:function(){i.removeClass("loading-content").addClass("visually-hidden"),i.children("p").text(n)}})}function o(t,e){return"prev"===e?a(t).prev("[id^=part]"):"next"===e?a(t).next("[id^=part]"):void 0}function s(t){return{id:(t=a(t).attr("id").split("_"))[t.length-1],post_type:t[0]}}function l(t){var e=[];return t.children("tbody").children("tr").each((function(t,n){var i=s(a(n));e.push(i.id)})),e}function c(t){t.children("tbody").children("tr").each((function(e,n){var i="",r='<button class="move-up">Move Up</button>',o='<button class="move-down">Move Down</button>';a(n).is("tr:only-of-type")?t.is("[id^=part]")&&t.prev("[id^=part]").length&&t.next("[id^=part]").length?i=" | ".concat(r," | ").concat(o):t.is("[id^=part]")&&t.next("[id^=part]").length?i=" | ".concat(o):t.is("[id^=part]")&&t.prev("[id^=part]").length&&(i=" | ".concat(r)):i=a(n).is("tr:first-of-type")?t.is("[id^=part]")&&t.prev("[id^=part]").length?" | ".concat(r," | ").concat(o):" | ".concat(o):a(n).is("tr:last-of-type")?t.is("[id^=part]")&&t.next("[id^=part]").length?" | ".concat(r," | ").concat(o):" | ".concat(r):" | ".concat(r," | ").concat(o),a(n).children(".has-row-actions").children(".row-title").children(".row-actions").children(".reorder").html(i)}))}function p(t){var e=s(t);a.ajax({url:ajaxurl,type:"POST",data:{action:"pb_reorder",id:e.id,old_order:a("#".concat(n.organize.oldParent)).sortable("serialize"),new_order:a("#".concat(n.organize.newParent)).sortable("serialize"),old_parent:n.organize.oldParent.replace(/^part_([0-9]+)$/i,"$1"),new_parent:n.organize.newParent.replace(/^part_([0-9]+)$/i,"$1"),_ajax_nonce:PB_OrganizeToken.reorderNonce},beforeSend:function(){i(e),n.organize.oldParent!==n.organize.newParent&&c(a("#".concat(n.organize.oldParent))),c(a("#".concat(n.organize.newParent)))},success:function(){r(e,"success")},error:function(){r(e,"failure")}})}function u(t,n,o,s){var l,c,p,u={action:"pb_update_post_visibility",post_ids:t,_ajax_nonce:PB_OrganizeToken.postVisibilityNonce};a.ajax({url:ajaxurl,type:"POST",data:Object.assign(u,(l={},c=o,p=s,c in l?Object.defineProperty(l,c,{value:p,enumerable:!0,configurable:!0,writable:!0}):l[c]=p,l)),beforeSend:function(){i({post_type:n})},success:function(t){r({post_type:n},"success"),function(){var t={action:"pb_update_word_count_for_export",_ajax_nonce:PB_OrganizeToken.wordCountNonce};a.post(ajaxurl,t,(function(t){var n=parseInt(a("#wc-selected-for-export").text(),10);new e("wc-selected-for-export",t,{startVal:n,separator:""}).start()}))}()},error:function(){r({post_type:n},"failure")}})}function d(t,e,n){a.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_post_title_visibility",post_ids:t,show_title:n,_ajax_nonce:PB_OrganizeToken.showTitleNonce},beforeSend:function(){i({post_type:e})},success:function(t){r({post_type:e},"success")},error:function(){r({post_type:e},"failure")}})}a(document).ready((function(){a(".allow-bulk-operations #front-matter").sortable(n.organize.sortableOptions).disableSelection(),a(".allow-bulk-operations table#back-matter").sortable(n.organize.sortableOptions).disableSelection(),a(".allow-bulk-operations table.chapters").sortable(Object.assign(n.organize.sortableOptions,{connectWith:".chapters"})).disableSelection(),a("input[name=blog_public]").on("change",(function(t){var e,n=a(".publicize-alert"),o=a(".publicize-alert > span");e=1===parseInt(t.currentTarget.value,10)?1:0,a.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_global_privacy_options",blog_public:e,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){i("book")},success:function(){0===e?(n.removeClass("public").addClass("private"),o.text(PB_OrganizeToken.bookPrivate)):1===e&&(n.removeClass("private").addClass("public"),o.text(PB_OrganizeToken.bookPublic)),r("book","success")},error:function(){r("book","failure")}})})),a(".web_visibility, .export_visibility").on("change",(function(){var t,e=s(a(this).parents("tr")),n=0;a(this).is(":checked")&&(n=1),a(this).is('[id^="export_visibility"]')?t="export":a(this).is('[id^="web_visibility"]')&&(t="web"),u(e.id,e.post_type,t,n)})),a(".show_title").on("change",(function(t){var e=s(a(t.target).parents("tr")),n="";a(t.currentTarget).is(":checked")&&(n="on"),d(e.id,e.post_type,n)})),a(document).on("click",".move-up",(function(t){var e=a(t.target).parents("tr"),i=a(t.target).parents("table");if(n.organize.oldParent=i.attr("id"),e.is("tr:first-of-type")&&i.is("[id^=part]")&&i.prev("[id^=part]").length){var r=o(i,"prev");n.organize.newParent=r.attr("id"),r.append(e),p(e)}else n.organize.newParent=i.attr("id"),e.prev().before(e),p(e)})),a(document).on("click",".move-down",(function(t){var e=a(t.target).parents("tr"),i=a(t.target).parents("table");if(n.organize.oldParent=i.attr("id"),e.is("tr:last-of-type")&&i.is("[id^=part]")&&i.next("[id^=part]").length){var r=o(i,"next");n.organize.newParent=r.attr("id"),r.prepend(e),p(e)}else n.organize.newParent=i.attr("id"),e.next().after(e),p(e)})),a('.allow-bulk-operations table thead th span[id$="show_title"]').on("click",(function(t){var e=a(t.target).attr("id");e=e.replace("-","");var i=a(t.target).parents("table"),r=i.attr("id").split("_")[0];"part"===r&&(r="chapter");var o=l(i);n.organize.bulkToggle[e]?(i.find('tr td.column-showtitle input[type="checkbox"]').prop("checked",!1),n.organize.bulkToggle[e]=!1,d(o.join(),r,"")):(i.find('tr td.column-showtitle input[type="checkbox"]').prop("checked",!0),n.organize.bulkToggle[e]=!0,d(o.join(),r,"on"))})),a('.allow-bulk-operations table thead th span[id$="visibility"]').on("click",(function(t){var e=a(t.target).attr("id"),i=(e=e.replace("-","")).split("_");i=i[i.length-2];var r=a(t.target).parents("table"),o=r.attr("id").split("_")[0];"part"===o&&(o="chapter");var s=l(r);n.organize.bulkToggle[e]?(r.find("tr td.column-".concat(i," input[type=checkbox]")).prop("checked",!1),n.organize.bulkToggle[e]=!1,u(s.join(),o,i,0)):(r.find("tr td.column-".concat(i,' input[type="checkbox"]')).prop("checked",!0),n.organize.bulkToggle[e]=!0,u(s.join(),o,i,1))})),a(window).on("beforeunload",(function(){if(a.active>0)return"Changes you made may not be saved..."}))}))})();