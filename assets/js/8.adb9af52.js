(window.webpackJsonp=window.webpackJsonp||[]).push([[8,13],{110:function(t,e,a){},111:function(t,e,a){},226:function(t,e,a){"use strict";var r=a(110);a.n(r).a},227:function(t,e,a){"use strict";var r=a(111);a.n(r).a},256:function(t,e,a){"use strict";a.r(e);a(60),a(61),a(62);var r=a(45),s=(a(44),{name:"ProjectCard",props:{path:{type:String,required:!0}},computed:{projectPage:function(){var t=this;return this.$site.pages.find((function(e){return e.regularPath===t.path}))},project:function(){return this.projectPage.frontmatter}}}),n=(a(226),a(2)),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("b-card-title",{staticClass:"mt-0"},[t._v(t._s(t.project.title))]),t._v(" "),a("b-card-sub-title",[t._v(t._s(t.project.subtitle))])],1),t._v(" "),a("b-card-img-lazy",{staticClass:"card-image",attrs:{src:t.project.image||"https://via.placeholder.com/400x600","image-alt":t.project.imageAlt||"TODO: Alt. image description",bottom:""}})],1)}),[],!1,null,"bdb7b514",null).exports,o={components:{BasicLayout:r.default,ProjectCard:i},computed:{projects:function(){var t=this;return this.$site.pages.filter((function(e){var a=e.regularPath;return t.$page.frontmatter.indexed.includes(a)}))}}},c=(a(227),Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("basic-layout",[e("div",{staticClass:"theme-default-content",attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"flex-container"},this._l(this.projects,(function(t){return e("router-link",{key:t.regularPath,staticClass:"flex-item",attrs:{to:t.regularPath}},[e("ProjectCard",{attrs:{path:t.regularPath}})],1)})),1)])])}),[],!1,null,"829d82be",null));e.default=c.exports},45:function(t,e,a){"use strict";a.r(e);var r=a(52),s=a(53),n=a(21),i={components:{Navbar:r.a,Sidebar:s.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(n.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},o=a(2),c=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t._t("content")],2)}),[],!1,null,null,null);e.default=c.exports}}]);