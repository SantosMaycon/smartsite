if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,o,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(o.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/34xuvqTojoq3mRFEMDgGF/_buildManifest.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/34xuvqTojoq3mRFEMDgGF/_ssgManifest.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.c606857fba99741043f6.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.8724eef40258c461ff57.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/main-64eb223a56de075461ad.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/pages/_app-643b7b964c9fae6eef4a.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/pages/_error-9d1c805ac695bc0dd14c.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/pages/index-65dad8a59bf416adae16.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"34xuvqTojoq3mRFEMDgGF"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/fonts/gotham-black.woff2",revision:"2da40184a3e70a8721f5ecb9f3f4d228"},{url:"/fonts/gotham-bold.woff2",revision:"aeff58d78c2c12165f6a85840510dcca"},{url:"/fonts/gotham-book.woff2",revision:"143b4034d45c8c3ad50bf40265c9d6a7"},{url:"/fonts/gotham-light.woff2",revision:"a2a8c70557da0c4d4db489d9f66e14b3"},{url:"/img/forbidden-fountain.png",revision:"0d71e8ea3455b9266eac3a2545190480"},{url:"/img/forbidden-lockerroom.png",revision:"1c3b0cc3cdd97dd4aeda9866d4b36e62"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/icon-hour.png",revision:"8e5e8af171f9df4cd2cb0e71441f1f22"},{url:"/img/logo.svg",revision:"152fb3ee3baf060805cbcfb6bc335783"},{url:"/img/partial-fountain.png",revision:"7375cafae8e6dc7e7b081f63b2dfe27d"},{url:"/img/partial-lockerroom.png",revision:"31f004cdb71563368168f5e8b10f6425"},{url:"/img/recommended-mask.png",revision:"7e9db9a41fadf6fe0cde6ccb75209edc"},{url:"/img/recommended-towel.png",revision:"d826b254cc6fb72ba04eba02d1f64170"},{url:"/img/required-lockerroom.png",revision:"404fe892a3a6c01977d929785c6229ca"},{url:"/img/required-mask.png",revision:"f08c258824a9db6a117c37b83d99ac53"},{url:"/img/required-towel.png",revision:"fd607142c27fd8a81b4c6f4f25d013d8"},{url:"/manifest.json",revision:"33fcd1eabf353690dfd71b771dfe6739"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
