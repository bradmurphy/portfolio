!function e(t,o,a){function n(i,l){if(!o[i]){if(!t[i]){var c="function"==typeof require&&require;if(!l&&c)return c(i,!0);if(s)return s(i,!0);var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r}var d=o[i]={exports:{}};t[i][0].call(d.exports,function(e){var o=t[i][1][e];return n(o?o:e)},d,d.exports,e,t,o,a)}return o[i].exports}for(var s="function"==typeof require&&require,i=0;i<a.length;i++)n(a[i]);return n}({1:[function(e,t,o){"use strict";var a=e("./controllers/AnimationController"),n=new a;n.start()},{"./controllers/AnimationController":2}],2:[function(e,t,o){(function(e){"use strict";function o(){this.redCirc=document.getElementById("redCirc"),this.micIcon=document.getElementById("micIcon"),this.okGoogle=document.getElementById("okGoogle"),this.gIcon=document.getElementById("gIcon"),this.gIcon2=document.getElementById("gIcon2"),this.grayCirc=document.getElementById("grayCirc"),this.question=document.getElementById("question"),this.questionSpan=document.getElementById("questionSpan"),this.whiteCirc=document.getElementById("whiteCirc"),this.whiteCirc2=document.getElementById("whiteCirc2"),this.chicklet=document.getElementById("chicklet"),this.endframeHeader=document.getElementById("endframeHeader"),this.iconWrapper=document.getElementById("icon-wrapper"),this.cta=document.getElementById("cta"),this.wrapper=document.getElementById("wrapper"),this.qNumWords,this.init()}var a,n="undefined"!=typeof window?window.TweenMax:"undefined"!=typeof e?e.TweenMax:null,s="undefined"!=typeof window?window.SplitText:"undefined"!=typeof e?e.SplitText:null;o.prototype.init=function(){n.set(this.chicklet,{scaleX:0,scaleY:0}),n.set(this.redCirc,{scaleX:0,scaleY:0}),n.set(this.gIcon,{autoAlpha:0,scaleX:1.1,scaleY:1.1}),n.set(this.whiteCirc2,{scaleX:0,scaleY:0}),n.set(this.endframeHeader,{autoAlpha:0}),this.wrapper.style.display="block"},o.prototype.start=function(){a=this,n.to(this.redCirc,.7,{delay:1,scaleX:1.1,scaleY:1.1,ease:Expo.easeOut,onStart:this.swapIcons,onComplete:this.removeWhiteCirc}),n.to(this.redCirc,.7,{delay:1.7,scaleX:1,scaleY:1,ease:Expo.easeIn})},o.prototype.swapIcons=function(){n.to(a.micIcon,.1,{delay:.2,autoAlpha:0}),n.to(a.gIcon,.1,{delay:.2,autoAlpha:1}),n.to(a.gIcon,.7,{delay:.7,scaleX:1,scaleY:1,ease:Expo.easeIn,force3D:!0}),n.to(a.redCirc,.5,{delay:1.5,scaleX:1.1,scaleY:1.1,ease:Expo.easeOut}),n.to(a.gIcon,.5,{delay:1.5,scaleX:1.1,scaleY:1.1,ease:Expo.easeOut,force3D:!0}),n.delayedCall(1.6,a.drawQuestion)},o.prototype.removeWhiteCirc=function(){a.whiteCirc.style.display="none"},o.prototype.drawQuestion=function(){a.okGoogle.style.display="none",a.question.style.display="block";var e=a.question.innerHTML,t=e.split(" ");a.qNumWords=t.length,n.to(a.grayCirc,.15,{scaleX:1.7,scaleY:1.7,ease:Expo.easeIn,onComplete:a.pulseVoiceIcon});for(var o=new s(a.question,{type:"words, lines",linesClass:"line++",position:"absolute"}),i=o.lines,l=.3,c=0;c<i.length-1;c++){var r=i[c],d=r.childNodes.length,u=d*l*c+1;n.delayedCall(u+.6,a.shiftLines)}n.staggerFromTo(o.words,.1,{opacity:0},{opacity:.25},l),n.staggerTo(o.words,.1,{delay:.5,opacity:1},l)},o.prototype.shiftLines=function(){n.set(a.question,{y:"-=29",scale:.89}),n.set(a.iconWrapper,{y:"-=16"}),n.set(a.cta,{y:"+=16"})},o.prototype.getRandomRange=function(e,t){return Math.random()*(t-e)+e},o.prototype.pulseVoiceIcon=function(){this.dur=.13,this.dur2=2*this.dur,this.toScale;for(var e=0;e<a.qNumWords;e++)this.toScale=a.getRandomRange(1.5,1.65),n.to(a.grayCirc,this.dur,{scaleX:this.toScale,scaleY:this.toScale,delay:e*this.dur2,ease:Expo.easeIn}),n.to(a.grayCirc,this.dur,{scaleX:1.4,scaleY:1.4,delay:e*this.dur2+this.dur,ease:Expo.easeIn});n.delayedCall(a.qNumWords*this.dur2,a.closePulse)},o.prototype.closePulse=function(){n.to(a.grayCirc,.2,{delay:.1,scaleX:0,scaleY:0,ease:Expo.easeIn}),n.to(a.grayCirc,.5,{delay:.6,scaleX:0,scaleY:0,ease:Expo.easeOut}),n.to(a.redCirc,.5,{delay:.6,scaleX:1,scaleY:1,ease:Expo.easeOut}),n.to(a.gIcon,.5,{delay:.6,scaleX:1,scaleY:1,ease:Expo.easeOut,force3D:!0}),n.delayedCall(2.6,a.animateEndframe)},o.prototype.animateEndframe=function(){n.to(a.redCirc,.8,{scaleX:1.2,scaleY:1.2,ease:Expo.easeOut}),n.to(a.gIcon,.8,{scaleX:1.2,scaleY:1.2,ease:Expo.easeOut,force3D:!0}),n.to(a.whiteCirc2,1,{scaleX:1.5,scaleY:1.5,ease:Expo.easeOut,delay:.2}),n.to(a.question,.35,{delay:.5,autoAlpha:0,onStart:a.animateChicklet}),n.to(a.cta,.35,{delay:.5,autoAlpha:0}),n.delayedCall(1,a.animateEndframeText)},o.prototype.animateChicklet=function(){n.set(a.gIcon2,{autoAlpha:0}),a.gIcon2.style.display="block",n.to(a.chicklet,.75,{scaleX:1,scaleY:1,ease:Expo.easeIn}),n.to(a.chicklet,1,{delay:.75,borderRadius:"10%",ease:Expo.easeOut}),n.to(a.gIcon2,.3,{delay:.75,autoAlpha:1})},o.prototype.animateEndframeText=function(){for(var e,t=new s(a.endframeHeader,{type:"words, lines",linesClass:"line++",position:"absolute"}),o=t.lines,i=0;i<o.length-1;i++){o[i];e=o.length-1}1===e?n.set(a.cta,{y:"12"}):n.set(a.cta,{y:"0"}),n.set(a.cta,{autoAlpha:0}),n.to(a.endframeHeader,1,{autoAlpha:1,ease:Expo.easeInOut}),n.to(a.cta,1,{autoAlpha:1,ease:Expo.easeInOut})},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);