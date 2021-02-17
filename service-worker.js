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

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","639d40e564af25576b7f44ca228ab28a"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","1f4e72b80a348d72c1f2ac3fd7398368"],["F:/myBlog/public/2020/01/01/配置模板/index.html","95d75c7b27c4952d2e0fabad5f2a2517"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","f37bffda3b875949a197a48014826455"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","256ef8c8fd9e2ed51c7e60c9e29eb04c"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","708ac33f1533187f8c56277eaddcb91b"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","6ac726ced919c5bbad13d07d8ec68475"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","de6d117d14e6f7ecaab9046a87f0886a"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","23a69eebbf3f00b40032dcb2e04c1033"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","99e018b72d29d66d29106fe081f2026d"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","2a63753784214ab370c11250df0c3be3"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","2c45b8db1e6bea69212e86879819c23a"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","61525c443271af1a49c9fe895322a638"],["F:/myBlog/public/2021/02/16/Linux/0_在VM虚拟机下安装-Linux/index.html","40789526e3bf5df89305f5d0aba054cf"],["F:/myBlog/public/2021/02/16/Linux/1_Xsell连接Linux/index.html","c755ff016558b2fcc1677176446cd5e1"],["F:/myBlog/public/2021/02/16/Linux/2_Linux修改IP地址/index.html","01468735a4f52a0d92632947205d00e0"],["F:/myBlog/public/2021/02/17/Docker/1-Docker-简介/index.html","8fa0418f715be9bceafe6ceefd4f4122"],["F:/myBlog/public/2021/02/17/Docker/10-Docker-私有仓库/index.html","7beb7abb50d6836945422cad53d7688b"],["F:/myBlog/public/2021/02/17/Docker/2-Docker安装/index.html","7b4acf7088bbdc4a11a7a8d3dc62cded"],["F:/myBlog/public/2021/02/17/Docker/3-Docker常用命令/index.html","24c24e66e267106c6ad8d84a66162a1f"],["F:/myBlog/public/2021/02/17/Docker/4-Docker-镜像/index.html","93857c44bcb9b77614aeb0f6ffb76b51"],["F:/myBlog/public/2021/02/17/Docker/5-Docker容器数据卷/index.html","2f03e097b1fa377c049ad8a365592cbb"],["F:/myBlog/public/2021/02/17/Docker/6-DockerFile-解析/index.html","31624dc6fb933af9040516f04cbb92af"],["F:/myBlog/public/2021/02/17/Docker/7-Docker常用安装/index.html","f856502d525b1b5ff5e15fac278441f6"],["F:/myBlog/public/2021/02/17/Docker/8-本地镜像发布到阿里云/index.html","a6fc86870b62495a1cb74c6b79a945f9"],["F:/myBlog/public/2021/02/17/Docker/9-服务编排/index.html","a5f259acabd4b1474f26e3ad884b2ae0"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装-ElasticSearch-5-6-8/index.html","fdfcf5b20988674a118927d15c3afbb3"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装ElasticSearch-6-8-0/index.html","85063ac1da8ea6965355d1fdcf2e4595"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/Github 学习/Github学习/index.html","815163e1c95263ebedf003b7fb18a48b"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/1-谈谈volatile/index.html","593078477b1d34bae6e481d2768c70a6"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/10-线程池/index.html","49d1d4f03fdacbfca9162b3363c5903c"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/11-死锁编码及快速定位/index.html","490d38b6b8a5ba81724945c900e3b79f"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/2-CAS-底层原理/index.html","0b557c4eb26bec41c6378b46a46b6db6"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/3-谈谈原子类的ABA问题/index.html","8a0e65765a097b1b97ffb430147b35d3"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/4-Collection-线程不安全的举例/index.html","bc50dc65a25cb9115c4b690bb1dc408e"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/5-TransferValue-是什么/index.html","0dc0a5404354da7d2095dfa9ba1e6164"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/6-Java-的锁/index.html","384a71e292ccaad396ec9f5cfe256b91"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/7-CountDownLatch-CyclicBarrier-Semaphore使用/index.html","8c5e880a2dde693b943b944876d4f950"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/8-阻塞队列/index.html","df2a8c013d6ac2c7063b149355319461"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/9-Synchronized-和-Lock-的区别与好处/index.html","65714ebf0ee5a18d51ed649b0cb1db4c"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/0-JVM体系结构/index.html","5b1a2953d60383a0ffb49747e1437975"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/1-GC-Roots分析/index.html","d6c0faf58aff2c757a419c2a09f00998"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/2-JVM参数调优/index.html","93e41a441d08ccad19d89ec1a9edff85"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/3-Java中的引用/index.html","8fb4edb52ab4345cc9522e568af7702b"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/4-Java内存溢出OOM/index.html","bb5b6d2a1a4c1dac43b3ede068b5675d"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/5-垃圾收集器/index.html","f088f45b8a6fe157ffe9763be4247362"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/Linux/Linux诊断原因/index.html","b1b59c95f442cc60a1063e8db0a1575f"],["F:/myBlog/public/2021/02/17/工具/Git/index.html","2a8a0766589c2c0b9153f096cf8d3ee7"],["F:/myBlog/public/2021/02/17/工具/Maven/index.html","da718abce583de02a858d3d3d06bc769"],["F:/myBlog/public/404.html","959eec5c0671838205697cc70f50d33b"],["F:/myBlog/public/Gallery/index.html","00080da21d660de72bbda4b01c746f9b"],["F:/myBlog/public/Gallery/photos/index.html","107c797b4442d72062ef95b841e00815"],["F:/myBlog/public/Gallery/wallpaper/index.html","09016c2dceee7fa98476505768594874"],["F:/myBlog/public/about/index.html","4ebe81a7ec0912b4f91d702909ccced7"],["F:/myBlog/public/archives/2020/01/index.html","ce01fff14d45a44cfde231468bd3042e"],["F:/myBlog/public/archives/2020/index.html","0f1ff18b8bdcbd1c0f24a85b79910260"],["F:/myBlog/public/archives/2021/02/index.html","2f42a100ffb9486f5b63cd80845654bd"],["F:/myBlog/public/archives/2021/02/page/2/index.html","1d57c7bd47f92948e92718eac9907ca2"],["F:/myBlog/public/archives/2021/02/page/3/index.html","c439a22bafff0766ac3ceb1fdd0851ea"],["F:/myBlog/public/archives/2021/02/page/4/index.html","5ff3d4a80d0c4a57431741d6618aa4c4"],["F:/myBlog/public/archives/2021/02/page/5/index.html","1caf50fb3df98a8fc93b5c209629f484"],["F:/myBlog/public/archives/2021/index.html","a2f813704864d87e06fc1be90eee6687"],["F:/myBlog/public/archives/2021/page/2/index.html","90c6211abd54c318489365e64c814968"],["F:/myBlog/public/archives/2021/page/3/index.html","15219309f3c58d2e3ac01407fe734b0e"],["F:/myBlog/public/archives/2021/page/4/index.html","ce5b53b682a62dc0064298d91f7855a7"],["F:/myBlog/public/archives/2021/page/5/index.html","f94eb59c5e52df986c1fa64589892603"],["F:/myBlog/public/archives/index.html","f22e9dd24f7924a2e95319abb0f4baaf"],["F:/myBlog/public/archives/page/2/index.html","ce96b84a55cd0de2c3c889c8378042cd"],["F:/myBlog/public/archives/page/3/index.html","3b8ef7ca04e921441b346062f3867438"],["F:/myBlog/public/archives/page/4/index.html","e26221ba5b2c20ca7509688b02dd13bc"],["F:/myBlog/public/archives/page/5/index.html","16f092b98bf6bf9d3a61798e9b0eb2f3"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Docker/index.html","ae5733751ddd4040ea59b90e37f39434"],["F:/myBlog/public/categories/Docker/page/2/index.html","873ce564cf0d60edce0cf323f4911fef"],["F:/myBlog/public/categories/Hexo博客/index.html","ea20d80c356f5676b675daf118caecdd"],["F:/myBlog/public/categories/Linux/index.html","7895cd5133322ba9eeaad7f6a8834311"],["F:/myBlog/public/categories/index.html","cd2d6f711c495d522ae0cf6e711556bf"],["F:/myBlog/public/categories/工具/Git/index.html","e1297e287fb8a5621d6e147a35379430"],["F:/myBlog/public/categories/工具/IDEA/index.html","f54b5bc24ce8e8ecaf9b1198dfa1c99b"],["F:/myBlog/public/categories/工具/Maven/index.html","477bdff9b5e47fb851c130c19f5dcd40"],["F:/myBlog/public/categories/工具/index.html","7b7290a9da0ab987e126132fc29e7f03"],["F:/myBlog/public/categories/面试汇总/index.html","d0ccf005abf2ef78456ccf88b25a6b67"],["F:/myBlog/public/categories/面试汇总/page/2/index.html","eb117d91f02fdf3b1d40aff770fd8a3e"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/index.html","b46415c6fe7633d6e2213ba2c1ae3124"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JVM/index.html","2e36b78d122fef6f270c606088626b7b"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/Linux/index.html","677ae379670d5b73563d83a90ea35646"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/github/index.html","11816dee6628d313f343ccf5371845d3"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/index.html","ab264ec5bb78f99bd1ae69173039c07e"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/page/2/index.html","f73b099a814832cc46312bcb6a56f774"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","20aedc061ba83005c525311ac672b943"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","72413f014e47f4d73388e6d31af56dea"],["F:/myBlog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["F:/myBlog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/myBlog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/myBlog/public/music/index.html","2db34e8ca07e9710b5fe4e021a5eebed"],["F:/myBlog/public/page/2/index.html","6d7abe613739e3ea1fdd5dbde8172c15"],["F:/myBlog/public/page/3/index.html","f8d129a5ddf9cd67b25e0ed1f4c97d04"],["F:/myBlog/public/page/4/index.html","267d21a860610c29668347da5ea83ebc"],["F:/myBlog/public/page/5/index.html","30e3d6489a8230d1dbcb1c668164282b"],["F:/myBlog/public/tags/Butterfly主题/index.html","78f4541be2b87a0cceb874915d9b44be"],["F:/myBlog/public/tags/CAS/index.html","7781152493bc83f45cdc468fa336617f"],["F:/myBlog/public/tags/Collection/index.html","bb615331d36b44e26aa92030d39fa413"],["F:/myBlog/public/tags/Docker/index.html","5514016ea0517ff55f605d0cf3c50e6d"],["F:/myBlog/public/tags/Docker/page/2/index.html","5010b1e95a39fd175d5d5b7bcf452446"],["F:/myBlog/public/tags/Git/index.html","8043544080a10ef6b2cec8c4512247e0"],["F:/myBlog/public/tags/Github/index.html","67a7670685ca711945204a885e8172bb"],["F:/myBlog/public/tags/Hexo/index.html","54558a362f011978bf3af4c869ed7929"],["F:/myBlog/public/tags/IDEA/index.html","3e2fdfc0568c93f6916d56f7fe885c57"],["F:/myBlog/public/tags/JUC/index.html","1327cd9c07553522c7a227b77ef5de2c"],["F:/myBlog/public/tags/JVM/index.html","a19937b6c4523f104d11ddf22d093f53"],["F:/myBlog/public/tags/Linux/index.html","7606a6efa91b7504e474504ddfe96d22"],["F:/myBlog/public/tags/Maven/index.html","3ec46c18c3a04276c808ceb878b96b3d"],["F:/myBlog/public/tags/Synchronized/index.html","01b434aa30e8d66a622a0797f477501e"],["F:/myBlog/public/tags/Typora/index.html","06d8cd6fa7447e0ffa65cc26b21be2d0"],["F:/myBlog/public/tags/Xshell/index.html","f9bf78d16898ae53b699221086272e46"],["F:/myBlog/public/tags/index.html","11481a9f4b82450c1fcc4c0ef4549b07"],["F:/myBlog/public/tags/volatile/index.html","b41a4722052a7a87fec8b34d05c7e52a"],["F:/myBlog/public/tags/值传递/index.html","949edd2677e99ae87d1acf82b65a9345"],["F:/myBlog/public/tags/线程池/index.html","96eef596e806caa20bc39527c8489632"],["F:/myBlog/public/tags/锁/index.html","5557d09191e5f2078cd7610bcf326d9f"],["F:/myBlog/public/tags/队列/index.html","bf335a942e43645d7e31ded2661d3deb"]];
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







