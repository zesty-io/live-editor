"use strict";(self.webpackChunkExplorer=self.webpackChunkExplorer||[]).push([[6247],{3336:e=>{function a(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var a={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(a).forEach((function(s){var n=a[s],r=[];/^\w+$/.test(s)||r.push(/\w+/.exec(s)[0]),"diff"===s&&r.push("bold"),e.languages.diff[s]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:r}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:a})}(e)}e.exports=a,a.displayName="diff",a.aliases=[]}}]);