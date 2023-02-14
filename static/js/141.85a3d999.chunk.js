"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[141],{141:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,i,o,u,c,a,s,h,f=t(439),d=t(791),p=t(689),l=t(912),m=t(828),g=t(248),x=t(168),b=t(444),w=t(87),v=b.ZP.div(r||(r=(0,x.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  min-height: ","px;\n  padding-right: ","px;\n  padding-left: ","px;\n  padding-top: ","px;\n  padding-bottom: ","px;\n  margin-top: ","px;\n\n  background-color: ",";\n"])),(function(n){return n.theme.sizes.height[5]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.backgroundColor})),y=b.ZP.form(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: ","px;\n\n  background-color: ",";\n  border-radius: ","px;\n  overflow: hidden;\n"])),(function(n){return n.theme.sizes.width[5]}),(function(n){return n.theme.colors.backgroundSearchBar}),(function(n){return n.theme.radii.round})),Z=b.ZP.button(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: ","px;\n  height: ","px;\n  border: 0;\n\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1.5;\n  }\n"])),(function(n){return n.theme.sizes.width[2]}),(function(n){return n.theme.sizes.height[2]})),k=b.ZP.span(u||(u=(0,x.Z)(["\n  position: absolute;\n  width: ","px;\n  height: ","px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"])),(function(n){return n.theme.sizes.width[0]}),(function(n){return n.theme.sizes.height[0]})),z=b.ZP.input(c||(c=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: ","px;\n  border: none;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: ","px;\n    font-weight: ",";\n    margin: auto;\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontWeights.middle})),j=b.ZP.li(a||(a=(0,x.Z)(["\n  margin-bottom: ","px;\n  border: ",";\n  box-shadow: 0px 5px 12px -5px;\n  background-color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.twoBackgroundColor})),S=(0,b.ZP)(w.OL)(s||(s=(0,x.Z)(["\n  text-decoration: none;\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.text})),_=b.ZP.p(h||(h=(0,x.Z)(["\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n  margin-left: ","px;\n"])),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.space[9]})),P=t(184),q=function(){var n=(0,d.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=(0,d.useState)([]),o=(0,f.Z)(i,2),u=o[0],c=o[1];(0,d.useEffect)((function(){var n=new AbortController;if(t)return l.Z.get("".concat(g._n).concat(g.I2).concat(g.Fn,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),{signal:n.signal}).then((function(n){c(n.data.results)})).catch((function(n){console.log(n.message)})),function(){n.abort()}}),[t]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(v,{children:(0,P.jsxs)(y,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=e.elements.query.value;if(""===t.trim())return alert("Enter your request!");r(t),e.reset()},children:[(0,P.jsxs)(Z,{type:"submit",children:[(0,P.jsx)(m.Yfv,{}),(0,P.jsx)(k,{children:"Search"})]}),(0,P.jsx)(z,{type:"text",name:"query",placeholder:"Search film"})]})}),u.length>0?(0,P.jsx)("ul",{children:u.map((function(n){return(0,P.jsx)(j,{children:(0,P.jsx)(S,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))}):(0,P.jsx)(_,{children:"Enter your query in the search bar"}),(0,P.jsx)(p.j3,{})]})}},248:function(n,e,t){t.d(e,{DK:function(){return s},Fn:function(){return i},Ge:function(){return f},I2:function(){return u},_n:function(){return r},bV:function(){return c},uu:function(){return o},vX:function(){return h},wR:function(){return a}});var r="https://api.themoviedb.org/3",i="api_key=34aace01c22833500b5a31ff5ef2542a",o="/trending/movie/day?",u="/search/movie?",c="https://image.tmdb.org/t/p/w500",a="/movie/",s="/credits?",h="/reviews?",f="&language=en-US"}}]);
//# sourceMappingURL=141.85a3d999.chunk.js.map