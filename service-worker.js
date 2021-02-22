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

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","eb3c681663436f1f9a77df3bb22e98a8"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","45a7b552db7a93cf1a0dcb5a33620ae6"],["F:/myBlog/public/2020/01/01/配置模板/index.html","ce19eb0e9bcdde40584a7eaa1a935df8"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","5a167903829ea565266099a4105bd9e2"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","42d2910ede7cabf29e9da014ddea9b57"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","9137e098972dd95b12120e03a5805141"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","4837f0a15f09a882e9b063b670bcd559"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","241382125f95a0a1dc137034b4dd1a63"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","4e17bd79e2e9ade2c158b04ba740e09d"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","93419c46d283e6accefbdb374d4697ff"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","11cb1beccda8e35781a7b6314297bd3a"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","b0bf6ba8860e927aec69e5666a0a0059"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","1703e4a8b98688191e47070c15b8317c"],["F:/myBlog/public/2021/02/17/Docker/1-Docker-简介/index.html","9b912447801ba4874a5c45cccfdea345"],["F:/myBlog/public/2021/02/17/Docker/10-Docker-私有仓库/index.html","01505ae557a45324e6bdc9e0f21375b4"],["F:/myBlog/public/2021/02/17/Docker/2-Docker安装/index.html","6e1b1a67b0f5f9a1fc52ccb48e239433"],["F:/myBlog/public/2021/02/17/Docker/3-Docker常用命令/index.html","8ac338aee0a44ebb2c87870e01b85f9e"],["F:/myBlog/public/2021/02/17/Docker/4-Docker-镜像/index.html","7ac1f73f49581e4a3a068528175e992d"],["F:/myBlog/public/2021/02/17/Docker/5-Docker容器数据卷/index.html","34a67d406c871ae9a877fe5ec1b74585"],["F:/myBlog/public/2021/02/17/Docker/6-DockerFile-解析/index.html","2b72360b7aaa04f6503eb26b900ea140"],["F:/myBlog/public/2021/02/17/Docker/7-Docker常用安装/index.html","6d18be727e9a8ae9d69d47b87e575024"],["F:/myBlog/public/2021/02/17/Docker/8-本地镜像发布到阿里云/index.html","a97479559083bb1b1e8245114bcf0d39"],["F:/myBlog/public/2021/02/17/Docker/9-服务编排/index.html","43afcb3989c2498550bcd7763724f2be"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装-ElasticSearch-5-6-8/index.html","a063b989803e59b7fefb9c5abdf10ee9"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装ElasticSearch-6-8-0/index.html","33c577dc1deb8e76a6e7562bbbb52e46"],["F:/myBlog/public/2021/02/17/Linux/0_在VM虚拟机下安装-Linux/index.html","b3d79c1cc30613f46e6b8092cf4c0168"],["F:/myBlog/public/2021/02/17/Linux/10-Linux-基本命令/index.html","e2276836d3753f86d1e824f898952e11"],["F:/myBlog/public/2021/02/17/Linux/11-Linux-安装-JDK8/index.html","55ef21ff83f93bd32c4446672736a683"],["F:/myBlog/public/2021/02/17/Linux/12-Linux安装MySQL/index.html","528553658a1990c62fa58af81e6b6a5a"],["F:/myBlog/public/2021/02/17/Linux/1_Xsell连接Linux/index.html","1c2163421e845825ecf6bae07fbb9f36"],["F:/myBlog/public/2021/02/17/Linux/2_CentOs 6 修改 IP 地址/index.html","0d75d5d815a07c14b807e6acf52d6dfe"],["F:/myBlog/public/2021/02/17/Linux/3-CentOs-7修改-IP-地址/index.html","08a00d19eb1fb7da306c9346fd570652"],["F:/myBlog/public/2021/02/17/Linux/4-设置主机名访问任意主机/index.html","81f8b10f754623ce65a2f2540e54006a"],["F:/myBlog/public/2021/02/17/Linux/5-CentOs-7-连接外网的解决办法/index.html","cbb7c53fa13caafaf79c9647eb48161c"],["F:/myBlog/public/2021/02/17/Linux/6-更改系统语言/index.html","edea577e8bfecc764925571a81cbcabe"],["F:/myBlog/public/2021/02/17/Linux/7-本地文件上传到Linux/index.html","1a2ce753a6a9bed8bcc3203518ed2e99"],["F:/myBlog/public/2021/02/17/Linux/8-CentOs-下安装-Tomcat/index.html","e65021d2ab98100058e97bc060638b2e"],["F:/myBlog/public/2021/02/17/Linux/9-CentOs-设置防火墙及开放端口/index.html","116b94967ae4da5a956201654a193ab1"],["F:/myBlog/public/2021/02/17/工具/Git/index.html","a4cc6e47ac93b1d206ce93d9896b2460"],["F:/myBlog/public/2021/02/17/工具/Maven/index.html","c648eaee4f2805f9845713ebe1e610fe"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/1-可重入锁/index.html","04ca68e55bfe063d18f2943e01b4dbd9"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/2-LockSupport/index.html","e00ec20f622e23411c6a9123a7a9bcca"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/3-AQS/index.html","041671d3c9e13eb8e8a9de28ed44b5cb"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/1-安装Redis/index.html","7f5c4f2b40cd74e6b5763980cd3b480a"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/2-redis传统五大基本类型的落地应用/index.html","726f7d050f02664d6e9eb9a28d77da53"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/3-分布式锁/index.html","6252dff8a9493ac2d89d4a78b455362d"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/4-redis缓存过期淘汰策略/index.html","795dfaaf8e89ae1f2c37864e355f1b37"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Github 学习/Github学习/index.html","17143c7a872a30bdc707f9f777087e48"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/1-谈谈volatile/index.html","8a1423c4d395b368f267e6095b7b3424"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/10-线程池/index.html","8c2bb2e70eef28d879d8a778428d6812"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/11-死锁编码及快速定位/index.html","87190b355d0a9e46b6f0b75278e477be"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/2-CAS-底层原理/index.html","a6d7fd8faf87f1e35f63c92c580f1ba1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/3-谈谈原子类的ABA问题/index.html","7094a12f6b87bcc5c401b18ed060905f"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/4-Collection-线程不安全的举例/index.html","dce9eed7d87144cb781e774f505d2ac8"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/5-TransferValue-是什么/index.html","b294f8aef167e648e7b88d5e1660858c"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/6-Java-的锁/index.html","570379cbf3a7a20d69e7d3b9dddf9af1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/7-CountDownLatch-CyclicBarrier-Semaphore使用/index.html","75807b20946c7ca1bf8cef8ce7152147"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/8-阻塞队列/index.html","a4417734d8fd3e7e99a07ede547e1554"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/9-Synchronized-和-Lock-的区别与好处/index.html","f341dd7cb43eee922f9180b3c566dac0"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/0-JVM体系结构/index.html","8c4e168dd5b3b64a5fcb4651d5b86445"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/1-GC-Roots分析/index.html","202f14ca2e33b39fc3ea201c80a7b8b7"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/2-JVM参数调优/index.html","a67ab634f05074b2fdbfee5ff8573cac"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/3-Java中的引用/index.html","7cae60c41c71269aa136de36032e3f02"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/4-Java内存溢出OOM/index.html","b0eca773aeedede4cfceb36ab7de00be"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/5-垃圾收集器/index.html","7613bcf44fc3b3683703301f3c1c7c8f"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Linux/Linux诊断原因/index.html","8572d4a83677c8d75d7c115418053c18"],["F:/myBlog/public/2021/02/18/面试/项目介绍/项目介绍/index.html","71ee5e16b5fcda658458bd16f07536f5"],["F:/myBlog/public/2021/02/19/JVM/1-JVM体系结构与类加载系统/index.html","0e101019b92f5f2e6dc655b8ac6d8f6f"],["F:/myBlog/public/2021/02/19/JVM/2-运行时数据区概述及线程/index.html","cba2b10941a923a2adf9c2022d364841"],["F:/myBlog/public/2021/02/19/JVM/3-程序计数器/index.html","125687b407727de8b8d44b5bc6d47552"],["F:/myBlog/public/2021/02/19/JVM/4-本地方法接口/index.html","001e815945c1d387d2b0e18257bae08d"],["F:/myBlog/public/2021/02/19/JVM/5-本地方法栈/index.html","87fdf0e295c49ac30f4da93893ad8bbc"],["F:/myBlog/public/2021/02/19/JVM/6-Java-虚拟机栈/index.html","0a30fbb3a41ca00f0502c248795bd9f2"],["F:/myBlog/public/2021/02/19/JVM/7-方法区/index.html","cf916f8b39ad3ecbb2e94c8ecda20bee"],["F:/myBlog/public/2021/02/19/JVM/8-Java堆/index.html","53df657f1eab4c8c923ffddbca94218e"],["F:/myBlog/public/2021/02/19/JVM/9-GC-四大算法详解/index.html","1112ef4fabfe9bf9db78d1288e69b3fa"],["F:/myBlog/public/2021/02/19/中间件/0-RabbitMQ简介/index.html","cd1320dbe6517baf2df3f59392de0b2d"],["F:/myBlog/public/2021/02/19/中间件/1-RabbitMQ-的安装/index.html","e83d47a4fd05b9e0500a896211031a22"],["F:/myBlog/public/2021/02/19/中间件/2-web管理界面介绍/index.html","982e28ccfc9a1f5686901db0086bb1af"],["F:/myBlog/public/2021/02/19/中间件/3-RabbitMQ协议与消息模型/index.html","6dbdad31e56985cba5d36ab1cb8087e6"],["F:/myBlog/public/2021/02/19/中间件/4-Java-实现RabbitMQ/index.html","24c13b8e8e5be090d02bee88795c9059"],["F:/myBlog/public/2021/02/19/中间件/5-RabbitMQ连接工具类封装/index.html","1bc7edc25bd2e183850acd65718b63f4"],["F:/myBlog/public/2021/02/19/中间件/6-SpringBoot-实现RabbitMQ/index.html","f1dea2845f4a62556e789bce23f88733"],["F:/myBlog/public/2021/02/19/中间件/7-MQ的应用场景/index.html","ff825d02424e4fedda8476dbbf53f50c"],["F:/myBlog/public/2021/02/19/中间件/8-RabbitMQ-集群/index.html","912501ef1de211c4071b37109e1fb599"],["F:/myBlog/public/2021/02/19/中间件/9-RabbitMQ高级特性/index.html","8369f8ddacd515d1694784d803f8ebc5"],["F:/myBlog/public/2021/02/19/前端知识/CSS/CSS与CSS美化页面/index.html","d2ae68b2cde128cca9218bde1fc9674b"],["F:/myBlog/public/2021/02/19/前端知识/HTML/HTML5常用标签/index.html","552f78df0899b0335d06b7de13cbd6b0"],["F:/myBlog/public/2021/02/19/面试/微服务-分布式/微服务-分布式/index.html","818528720fe631d80ce0681ca7b398ba"],["F:/myBlog/public/2021/02/20/设计模式/2-原型模式/index.html","d087b53561b14ead0b67458232543e87"],["F:/myBlog/public/2021/02/20/设计模式/七大原则/0-设计模式七大原则简介/index.html","f2f77e51ef1706b87b328a6433197cc0"],["F:/myBlog/public/2021/02/20/设计模式/设计模式/1-工厂模式/index.html","10d9ad8edb2b82ca0196336b69e5735e"],["F:/myBlog/public/2021/02/22/面试总结/面试总结/index.html","c1bda66b74c8938a6efe8b1d85f2c0dc"],["F:/myBlog/public/404.html","43c9d52bd373c505b977efcefed52c03"],["F:/myBlog/public/Gallery/index.html","35e4dfffa4f4c42fbb83639ee91ba7b7"],["F:/myBlog/public/Gallery/photos/index.html","42b8cd44f6627360c0223f58709f814e"],["F:/myBlog/public/Gallery/wallpaper/index.html","7f81b5a883b0735c07d7d88d9082d41e"],["F:/myBlog/public/about/index.html","b80089ffd43c3daff7b6c85b8eba29ee"],["F:/myBlog/public/archives/2020/01/index.html","69eedd4e519dd169a1775295bb7547fb"],["F:/myBlog/public/archives/2020/index.html","a3a8266ae58bd2c5d1d27255040da7f5"],["F:/myBlog/public/archives/2021/02/index.html","a614adcc3c499524c005a58a0743554d"],["F:/myBlog/public/archives/2021/02/page/2/index.html","e602699f0486e0aeb7cef1d88a2eecc3"],["F:/myBlog/public/archives/2021/02/page/3/index.html","10208bba7fdc97e458c454e6285bdd0c"],["F:/myBlog/public/archives/2021/02/page/4/index.html","2b66325993fd421de007fbdfe757f1ba"],["F:/myBlog/public/archives/2021/02/page/5/index.html","1b27bc9b6b3cfdae0fb4e98a43c6716e"],["F:/myBlog/public/archives/2021/02/page/6/index.html","8d2e29d1caa0f161695a21fc59120312"],["F:/myBlog/public/archives/2021/02/page/7/index.html","2dc41a6f27e0e047e750d3ace6bbae25"],["F:/myBlog/public/archives/2021/02/page/8/index.html","ac2011701c31f9bcb1497711388c1d8c"],["F:/myBlog/public/archives/2021/02/page/9/index.html","c37a122225c7592a4395b586cd986cdb"],["F:/myBlog/public/archives/2021/index.html","7948d60186f97bd7a06f0265a6aa0493"],["F:/myBlog/public/archives/2021/page/2/index.html","66ca2cbf97e7bf697e60730d2626e415"],["F:/myBlog/public/archives/2021/page/3/index.html","f367be46d6f0aad162d636be75903696"],["F:/myBlog/public/archives/2021/page/4/index.html","c3ebf964c9b8577560d64e28a8a70ff2"],["F:/myBlog/public/archives/2021/page/5/index.html","4fb8fd63f3fc29036482c6d1a5317cc7"],["F:/myBlog/public/archives/2021/page/6/index.html","96d5c87a5449b693cab952aaba94ac10"],["F:/myBlog/public/archives/2021/page/7/index.html","696bbef82dffcfe7729fb6d1da3d6905"],["F:/myBlog/public/archives/2021/page/8/index.html","73bda07ee733ff7c3f2a23bd7f13e978"],["F:/myBlog/public/archives/2021/page/9/index.html","aa833a7de48f932fc7f58491103c64a6"],["F:/myBlog/public/archives/index.html","de3af557b73fa8b8342eeab84ff0bdca"],["F:/myBlog/public/archives/page/10/index.html","2f165d168d9879b50614b7665d4e8a3c"],["F:/myBlog/public/archives/page/2/index.html","6ce7daac95b9c595404e8039e50333ea"],["F:/myBlog/public/archives/page/3/index.html","8d64f60f7206a3033895ed4e6797c89c"],["F:/myBlog/public/archives/page/4/index.html","d08fa02f7c664468f8bf614396b27702"],["F:/myBlog/public/archives/page/5/index.html","152f916bc54965dba31f1e982956cd37"],["F:/myBlog/public/archives/page/6/index.html","30fa69e0ff15a1d15b1ea1797cef3dd0"],["F:/myBlog/public/archives/page/7/index.html","b133477c706859d38ebf532aaa3d33db"],["F:/myBlog/public/archives/page/8/index.html","718a0e0b31fe60afb143d170b94d5ae5"],["F:/myBlog/public/archives/page/9/index.html","803f48c61b74a7465daf3355b227dc1b"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Docker/index.html","0dce767cdf805d8a5707d6b1e2c97850"],["F:/myBlog/public/categories/Docker/page/2/index.html","7361ea6312e4a64f553246b1c68985ac"],["F:/myBlog/public/categories/Hexo博客/index.html","697083a17e401a47bea3232407dfcb52"],["F:/myBlog/public/categories/JVM/index.html","d8363459a0eb76d37c8f3c70c0c9fc30"],["F:/myBlog/public/categories/Linux/index.html","9e6ac1c846a18104798e76722be9f360"],["F:/myBlog/public/categories/Linux/page/2/index.html","c3e5b28aeee5d71d5fe3f23910bcbe9e"],["F:/myBlog/public/categories/index.html","144b44ea672d77785c7cf561937fd779"],["F:/myBlog/public/categories/中间件/RabbitMQ/index.html","023578cc8f556ded75c455374c7f6744"],["F:/myBlog/public/categories/中间件/index.html","edea698d42af5e625914cd31697249d1"],["F:/myBlog/public/categories/前端知识/CSS/index.html","fa2b551422f48221507ac011e7b9fd20"],["F:/myBlog/public/categories/前端知识/HTML/index.html","3e6dcdf4a550d9afdf2ab39f6c1e7aaf"],["F:/myBlog/public/categories/前端知识/index.html","fe98d9d62cfbc8a6c37555d69e7cf00a"],["F:/myBlog/public/categories/工具/Git/index.html","dbc41cc6a6a255f9726b094b17c27416"],["F:/myBlog/public/categories/工具/IDEA/index.html","21b744f5d12039409602f3fa73b4c4b3"],["F:/myBlog/public/categories/工具/Maven/index.html","f81e1f55e76ab1b3b862341f42958437"],["F:/myBlog/public/categories/工具/index.html","b8d092376534c9730a91d59bd495981f"],["F:/myBlog/public/categories/设计模式/index.html","cc7a2a0ec50e5b22bbf58342bb78b03e"],["F:/myBlog/public/categories/设计模式/工厂模式/index.html","127fdd2cc6e7dc20f121cb0ee5a6c9cb"],["F:/myBlog/public/categories/面试/index.html","cea3e55af56e604c407234c043af9978"],["F:/myBlog/public/categories/面试总结/index.html","d7229c2a776b9a119c944d39541dd37c"],["F:/myBlog/public/categories/面试汇总/index.html","6974673d190b8e4675e1af807f331857"],["F:/myBlog/public/categories/面试汇总/page/2/index.html","9bba284b6431b9f4213d66cb44685ab3"],["F:/myBlog/public/categories/面试汇总/page/3/index.html","bca259be2580087ac4adf1ed66f99f3b"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/AQS/index.html","e33bcb0329f0bd8afeb4f5040e236dac"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/Redis/index.html","a2223da7456fa36236d9999a1a2b3e54"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/index.html","bcf5c6c97a28acde75aa59b31d8c343a"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/index.html","48fa2e07a339b742531d16eaabb89c42"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/page/2/index.html","fba0d656c60238da80540a1792a17a54"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JVM/index.html","c11113f4415b4dfdb481754894c90ca5"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/Linux/index.html","fce7c45436b61cb967a73126b057c1c9"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/github/index.html","1c37f1969970017779e66c6d71f4cae7"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/index.html","1070013740cb4ddc04d6b5a29dd82e65"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/page/2/index.html","f8ce29d1c3769c6c8bab01b206e3534d"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/background.png","ae68d47378dae9d8953dc3002417cb34"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","6849e1886b3910ce6ccd8894d6052775"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","f4caadb5fc4096b5571ec40dddbba64b"],["F:/myBlog/public/music/index.html","d5f2c99da8b456e51de718b5c14d099b"],["F:/myBlog/public/page/10/index.html","22ecc8a11408bea2d0089df7e4c5147b"],["F:/myBlog/public/page/2/index.html","7f00aab0aceab9956124580eb8fe7bf5"],["F:/myBlog/public/page/3/index.html","49dbb52b4a375dde482a7c282fa7376f"],["F:/myBlog/public/page/4/index.html","62c9d47a4bb3d609f8a25a1527f365dd"],["F:/myBlog/public/page/5/index.html","cdb3d95077ad3fdcdedf7113f3af4ca9"],["F:/myBlog/public/page/6/index.html","05b64888bacced3078b3a4c0baea84ed"],["F:/myBlog/public/page/7/index.html","3431c3c30dbd62246b6368c8d1bcbdab"],["F:/myBlog/public/page/8/index.html","7ce282d4e1f1ea7cf2ee8c6ae321d670"],["F:/myBlog/public/page/9/index.html","770784f23e9747a7dee81d7e18c98bf2"],["F:/myBlog/public/tags/AQS/index.html","e6d2a5b2f1b16b32762ffe9783042c4f"],["F:/myBlog/public/tags/Butterfly主题/index.html","404ef0728266f62cef7dff1eac983bfa"],["F:/myBlog/public/tags/CAS/index.html","310bb75467355623c901bece4b788f2e"],["F:/myBlog/public/tags/CSS/index.html","9f5c651145a5d5b2fc7b9d639d44fe79"],["F:/myBlog/public/tags/Collection/index.html","73696d3aa31399ec7a34d9252f0e579e"],["F:/myBlog/public/tags/Docker/index.html","a3bb5958ecce507e9bf2ceb010564586"],["F:/myBlog/public/tags/Docker/page/2/index.html","35c3fa3461030c52c58fe59800da3aaf"],["F:/myBlog/public/tags/Git/index.html","07f2376e83308473b7649b2bcf978f7a"],["F:/myBlog/public/tags/Github/index.html","a1fa7ed468eff03e9c59c8b416794c7f"],["F:/myBlog/public/tags/HTML/index.html","fe0f5eb3415b507496f4d813de766527"],["F:/myBlog/public/tags/Hexo/index.html","6397031a985942d9053b936ba721d03d"],["F:/myBlog/public/tags/IDEA/index.html","eab5c5e1daaa745afdeadab8d22855ba"],["F:/myBlog/public/tags/JUC/index.html","2eeb72c02e05de23208d3fc564111ee4"],["F:/myBlog/public/tags/JUC/page/2/index.html","7561387e85b2fc7e048b34ff30ed923c"],["F:/myBlog/public/tags/JVM/index.html","30368ee7e72fdbdb36a2d430919b9ee6"],["F:/myBlog/public/tags/JVM/page/2/index.html","f50e9ef2f6076e427aa659ee80995256"],["F:/myBlog/public/tags/Linux/index.html","4d93ad86cb7facf9d57f85d3e47bb65e"],["F:/myBlog/public/tags/Linux/page/2/index.html","7683792567b4b43cea2be2d4170c6407"],["F:/myBlog/public/tags/LockSupport/index.html","53924bf930d62e5d3842853ef30cefb7"],["F:/myBlog/public/tags/Maven/index.html","48d8f0490279e37d86a952c381f565cb"],["F:/myBlog/public/tags/Redis/index.html","b2aad69448cf435553e55bd3d8520aa2"],["F:/myBlog/public/tags/Synchronized/index.html","4b52f0470d18b28472c52886a5680bbe"],["F:/myBlog/public/tags/Typora/index.html","0f798b7e20e92786ee5916b9fcf325a9"],["F:/myBlog/public/tags/Xshell/index.html","8dd098f6734c9e52716c799c63bcb43b"],["F:/myBlog/public/tags/index.html","995023be01323b4ccb353fadf291495a"],["F:/myBlog/public/tags/volatile/index.html","9138951b70b6a79c229d269964add460"],["F:/myBlog/public/tags/七大原则/index.html","37e9fc4d2c1d6b5a433a13b62d884fe8"],["F:/myBlog/public/tags/中间件/index.html","7f3ab5bb4db593910e1a7efb372b594c"],["F:/myBlog/public/tags/值传递/index.html","a72666598d51eb655878563defe7689c"],["F:/myBlog/public/tags/分布式/index.html","1f6ebf4c2e59cece36467362cdf82122"],["F:/myBlog/public/tags/分布式锁/index.html","024de348258e56ce473fce6c1fc4857d"],["F:/myBlog/public/tags/可重入锁/index.html","cc5f8111ed065a685ece775fc5a35c65"],["F:/myBlog/public/tags/线程池/index.html","46c8fdaa5a558608d914662a15b85250"],["F:/myBlog/public/tags/设计模式/index.html","46567915d69e950e6551f7762a890721"],["F:/myBlog/public/tags/锁/index.html","a8fb4bbe963817498b0ddc1158c4959b"],["F:/myBlog/public/tags/队列/index.html","5c6e38574725946356800afba7916354"],["F:/myBlog/public/tags/面试/index.html","4ef120be5588de0931ef13c4e3f0cefa"],["F:/myBlog/public/tags/面试总结/index.html","4ea5921fd5bdad0d70b3b4cc61fc4c6a"]];
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







