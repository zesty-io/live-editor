"use strict";(self.webpackChunkexplorer_cdn_ts=self.webpackChunkexplorer_cdn_ts||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,u=c.length;-1!==t.code.indexOf(r=n(a,u));)++u;return c[u]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(u){for(var i=0;i<u.length&&!(r>=o.length);i++){var s=u[i];if("string"===typeof s||s.content&&"string"===typeof s.content){var l=o[r],p=t.tokenStack[l],g="string"===typeof s?s:s.content,f=n(a,l),k=g.indexOf(f);if(k>-1){++r;var d=g.substring(0,k),h=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),m=g.substring(k+f.length),y=[];d&&y.push.apply(y,c([d])),y.push(h),m&&y.push.apply(y,c([m])),"string"===typeof s?u.splice.apply(u,[i,1].concat(y)):s.content=y}}else s.content&&c(s.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.2f2ebcde.chunk.js.map