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

var precacheConfig = [["F:/myBlog/public/2020/01/01/1-为什么选择Hexo/index.html","ff411ec727cfebaa187063b8f6fca549"],["F:/myBlog/public/2020/01/01/1/index.html","c172ebf37934d826638b0002214de174"],["F:/myBlog/public/2020/01/01/2-Hexo本地部署/index.html","b374ddaebe7f27440e8937310caa744e"],["F:/myBlog/public/2020/01/02/3_部署到Gitee/index.html","09ca2c8a2e8abb1f0b02152e4368c118"],["F:/myBlog/public/2020/01/02/4_Hexo部署到Github/index.html","29b0f0a159a236b3116a6931939943ec"],["F:/myBlog/public/2020/01/03/5_Hexo终极部署：Github + Vercel/index.html","0682dd86d011deffe8dbe0baf073c3e8"],["F:/myBlog/public/404.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/Gallery/index.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/Gallery/photos/index.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/Gallery/wallpaper/index.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/archives/2020/01/index.html","3dded952974d67bd34eccc6d9b9fe271"],["F:/myBlog/public/archives/2020/index.html","670ba759a83e738d39248dcc21b63bf2"],["F:/myBlog/public/archives/index.html","5e9ef801ec4b93266fa32aee888a1460"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Hexo博客/index.html","13b5cef5a248ce802b5cea90440f93e8"],["F:/myBlog/public/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/categories/教程类/index.html","f0170fddf590e6043b119195b8550378"],["F:/myBlog/public/css/index.css","fcd17c1aee781638cfd0c86caccfdf3b"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/index.html","ce60509b544e74d4a1d497fae5593985"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/tags/Butterfly主题/index.html","5ab454297f6b9f629ccfdea4fba65990"],["F:/myBlog/public/tags/Hexo/index.html","a3b053d4020b77ee40587a6f29c25cc2"],["F:/myBlog/public/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







