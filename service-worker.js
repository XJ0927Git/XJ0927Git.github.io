/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","2f1135f873e7eccf033a5110ec2b7500"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","56ec44d657084196da9bfd7bb50bdcb0"],["F:/myBlog/public/2020/01/01/配置模板/index.html","065a545eb1db5cf195b885126f95c3b4"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","7f9050d4eb4900af3b3614c013d12de3"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","aa1bd1d7ca3cee3041dd7b421150b2d1"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","57f221cebad8f6725e4305ce27177941"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","5075eda1c7063ed1a431bfc98c874ff8"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","ea163356ba5cfc24c6d60427a416db93"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","3afcaaa1581bbd197ea227434c9df440"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","395e5ee8b6c07a5188d55d7e515ec7ff"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","f47335b39d48e064a0c328831c74a3d0"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","daf77ce1fde2d5890da6685374ddd165"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","922ec566a11b886bfbc33290a8b0b59f"],["F:/myBlog/public/2021/02/16/Linux/0_在VM虚拟机下安装-Linux/index.html","fabebb5ef2cedff48ca076ef3f3a97e2"],["F:/myBlog/public/2021/02/16/Linux/1_Xsell连接Linux/index.html","7358957aaaf71619b7f31199909f55b9"],["F:/myBlog/public/2021/02/16/Linux/2_Linux修改IP地址/index.html","a887fae26b5d850294a1ffccdcd013c1"],["F:/myBlog/public/404.html","a949bb089a74d8980d7fd5f8ac18232b"],["F:/myBlog/public/Gallery/index.html","aecb598fc811fc880a5da44fe5188066"],["F:/myBlog/public/Gallery/photos/index.html","db8e7507c24efc14d797d1ef4747d0cd"],["F:/myBlog/public/Gallery/wallpaper/index.html","6e40079ebde86b882736d74038f08bbb"],["F:/myBlog/public/about/index.html","09fbd77d6bb8db22cfe68987423c3ec5"],["F:/myBlog/public/archives/2020/01/index.html","78a82d7b3bce5371471ec4cce4be1c40"],["F:/myBlog/public/archives/2020/index.html","e01edaf82a42964e93f6fc99f231789b"],["F:/myBlog/public/archives/2021/02/index.html","a9a6b80fefa7c390b22134e82275a121"],["F:/myBlog/public/archives/2021/02/page/2/index.html","c1380e6106298cf278092471aec2185a"],["F:/myBlog/public/archives/2021/index.html","7e8461cdebb14b22ff512f293b98c6da"],["F:/myBlog/public/archives/2021/page/2/index.html","7e0c521a00c0aaa4a0956ad713fe7daa"],["F:/myBlog/public/archives/index.html","96e92227925603b60ad6265b6019aaa3"],["F:/myBlog/public/archives/page/2/index.html","cdbddc9e65f86700af77c88ee6f2385b"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Hexo博客/index.html","c08fac0451385be4984e396769a4d1a0"],["F:/myBlog/public/categories/IDEA/index.html","3506a962537e732fe80538dda8ef1704"],["F:/myBlog/public/categories/Linux/index.html","d4c051a62c3383e5d9f501f68f62b23e"],["F:/myBlog/public/categories/index.html","20326117a6eacb85a015b723dec934ec"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","9f05a1d165ff4e09e440d1cdb21c0d0f"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","53d5c7b1b03633078e836b982262b6e2"],["F:/myBlog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["F:/myBlog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/myBlog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/myBlog/public/music/index.html","3bdce772b6955b7be5e4f504287a2dcb"],["F:/myBlog/public/page/2/index.html","6bb7fe89d079ee1fed6c0b3ac83ca603"],["F:/myBlog/public/tags/Butterfly主题/index.html","78844d72391b07a71f250ead5c28b525"],["F:/myBlog/public/tags/Hexo/index.html","24f31e5d25a57152d26809a00ffd4897"],["F:/myBlog/public/tags/IDEA/index.html","bccb6126763b5637e3d2d4d1f8a81fe0"],["F:/myBlog/public/tags/Linux/index.html","cdf34f67522439c57266f45a47a7ec91"],["F:/myBlog/public/tags/Typora/index.html","aa0efc3a69053b5a352c1fe39ae6a23c"],["F:/myBlog/public/tags/Xshell/index.html","c6655d5d0edd73cdb53fbe7aa3a7af83"],["F:/myBlog/public/tags/index.html","4cc92fb6fc3d27deb043a64a8b26bdae"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







