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

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","331eb9459640051c28c84f88792aaf1d"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","b1b4f56b346f83b404ab2fcaa863627e"],["F:/myBlog/public/2020/01/01/配置模板/index.html","e715572737194444862bd5e2e62914db"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","b3ee15023638efdbe33053cb60f3db70"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","bb9e348a426f7b2f77d21a1ff305406a"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","1e77554064d4a4451a90004ecd8bc3ad"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","17f02ff54b425404ba90957b978431af"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","83ddcff939805bee8132872eb8641e4a"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","0878f7069a4b4249743657f5e4715448"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","77208442ee99decefa238cc3b1168139"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","c5fe1da5dab1eaf028ee32f1fc68f699"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","fe8a122a4b306931dcca35f226c2b3b0"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","3e0c8a2b949fb2679de138fac7226004"],["F:/myBlog/public/2021/02/17/Docker/1-Docker-简介/index.html","bf2766d054418f3f0fbf1856c6af978e"],["F:/myBlog/public/2021/02/17/Docker/10-Docker-私有仓库/index.html","f3284ed9de9fbf7bb4e22865694ee346"],["F:/myBlog/public/2021/02/17/Docker/2-Docker安装/index.html","128e126a8b92022a4a2be038a9b1d342"],["F:/myBlog/public/2021/02/17/Docker/3-Docker常用命令/index.html","90b0208807dcd2a4753f2b1649613081"],["F:/myBlog/public/2021/02/17/Docker/4-Docker-镜像/index.html","84f80edc0bd25dcc67c4186a7f0e7f28"],["F:/myBlog/public/2021/02/17/Docker/5-Docker容器数据卷/index.html","8faabe74f15c6af19646f97cd49ab04c"],["F:/myBlog/public/2021/02/17/Docker/6-DockerFile-解析/index.html","d6a9bc9733027a6dd81ff06bb5240834"],["F:/myBlog/public/2021/02/17/Docker/7-Docker常用安装/index.html","3386915d5aa7b21298a5c813ec61a6b3"],["F:/myBlog/public/2021/02/17/Docker/8-本地镜像发布到阿里云/index.html","23e756c8fb732a337d3d83c9d123787f"],["F:/myBlog/public/2021/02/17/Docker/9-服务编排/index.html","5c0193382228b5138a38d3d00f8b8a11"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装-ElasticSearch-5-6-8/index.html","77e0ded83979d7a853b856db6fe4cc1d"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装ElasticSearch-6-8-0/index.html","021077cebadedcfcac3a28200f2204eb"],["F:/myBlog/public/2021/02/17/Linux/0_在VM虚拟机下安装-Linux/index.html","23f117677c8442006cd506faab036ae1"],["F:/myBlog/public/2021/02/17/Linux/10-Linux-基本命令/index.html","41506beca88d194a0e22221a53210d80"],["F:/myBlog/public/2021/02/17/Linux/11-Linux-安装-JDK8/index.html","0688b60958d461dca67795eb79c85c4b"],["F:/myBlog/public/2021/02/17/Linux/12-Linux安装MySQL/index.html","27ecdec9c8ad5feb4e139d7358ee765b"],["F:/myBlog/public/2021/02/17/Linux/1_Xsell连接Linux/index.html","a4c4b9eb2220c275a81f19e65a33f4a4"],["F:/myBlog/public/2021/02/17/Linux/2_CentOs 6 修改 IP 地址/index.html","727c5ab318fa951fd051c8d23203cd9e"],["F:/myBlog/public/2021/02/17/Linux/3-CentOs-7修改-IP-地址/index.html","34cd6e3e8d1aa1846963cf16958cb13d"],["F:/myBlog/public/2021/02/17/Linux/4-设置主机名访问任意主机/index.html","f64d27ef95fe705ca7232a2627e79cab"],["F:/myBlog/public/2021/02/17/Linux/5-CentOs-7-连接外网的解决办法/index.html","31f3b813eeb1ed83d361782b1a08cf35"],["F:/myBlog/public/2021/02/17/Linux/6-更改系统语言/index.html","a930ca19c6a3b0af067b25d292df82ed"],["F:/myBlog/public/2021/02/17/Linux/7-本地文件上传到Linux/index.html","de2f1f5384a78b24f53e6ec9c227fd18"],["F:/myBlog/public/2021/02/17/Linux/8-CentOs-下安装-Tomcat/index.html","e071c33547bae8d40efa6518eaf0ad19"],["F:/myBlog/public/2021/02/17/Linux/9-CentOs-设置防火墙及开放端口/index.html","50f1d3f05e728dc09cfe6274922dfd7e"],["F:/myBlog/public/2021/02/17/工具/Git/index.html","bf9171852d8522765915e9fa510b02d0"],["F:/myBlog/public/2021/02/17/工具/Maven/index.html","45ca713e32adb8ed4672ddbf07128ec1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/1-可重入锁/index.html","690be8d5cb9f59a720d24011b7318389"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/2-LockSupport/index.html","8c46d0447f83a0d594947ab9e99e7a34"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/3-AQS/index.html","4e50053460dee77b20a51e584f1bec37"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/1-安装Redis/index.html","1f0100069c19720a3198e9d8f7d55b4f"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/2-redis传统五大基本类型的落地应用/index.html","d1421a2176f760e2ab6404b546bc5b97"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/3-分布式锁/index.html","9c2f63d528a482d6dbc2440baa2d3fbc"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/4-redis缓存过期淘汰策略/index.html","7079d16cf04f35e428d552b4381b0b21"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Github 学习/Github学习/index.html","24e31647721b6bf8ab149ce778644721"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/1-谈谈volatile/index.html","cca1d53dac9903fba1a3cfd7ccb6b0bf"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/10-线程池/index.html","ccb13e3f35e60423c44ba7232bbce826"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/11-死锁编码及快速定位/index.html","e7b4a0be29db309f643867ca10df5284"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/2-CAS-底层原理/index.html","699b1ec4db91fdda71594314472470ee"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/3-谈谈原子类的ABA问题/index.html","a81783498fa5d1add3d1487c2095dfa1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/4-Collection-线程不安全的举例/index.html","1a8be567bcfd6dc6748a790f4765d7e6"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/5-TransferValue-是什么/index.html","11814b0c5154c1962cda5acfc08f0e14"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/6-Java-的锁/index.html","1d249711b227f2639f822ff932fe13c1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/7-CountDownLatch-CyclicBarrier-Semaphore使用/index.html","02a098406272a7fa8773ae37d79320ed"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/8-阻塞队列/index.html","50c8f63f41aa164af00f3459b6216ce1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/9-Synchronized-和-Lock-的区别与好处/index.html","3dde4063a59d02c829db714230c715b0"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/0-JVM体系结构/index.html","62bb243485a80cbe2dc53319b1fcea1c"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/1-GC-Roots分析/index.html","eb8acc9af8e9db9fcea01b2e857507a2"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/2-JVM参数调优/index.html","0558e3cfe30068657650ac1f3b2fdcb7"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/3-Java中的引用/index.html","c10d191ab696ebd0a54a2a6c4e55b248"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/4-Java内存溢出OOM/index.html","fff2780fd463e6c949056910cb08dfe0"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/5-垃圾收集器/index.html","cca0e3fb130df4c067b9c02df144085d"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Linux/Linux诊断原因/index.html","04b20381818287c646621fb4c8d388bb"],["F:/myBlog/public/2021/02/18/面试/项目介绍/项目介绍/index.html","9773f6d6baa489b674b819847d2e8753"],["F:/myBlog/public/2021/02/19/JVM/1-JVM体系结构与类加载系统/index.html","6706473026abbb4de945d3ae1d9548d3"],["F:/myBlog/public/2021/02/19/JVM/2-运行时数据区概述及线程/index.html","699e8c794df6140fe105da771f2edf89"],["F:/myBlog/public/2021/02/19/JVM/3-程序计数器/index.html","a9e06bde3bc629f243ced0ea7499266b"],["F:/myBlog/public/2021/02/19/JVM/4-本地方法接口/index.html","85c7f8db3198d46a049bdfd975c56b86"],["F:/myBlog/public/2021/02/19/JVM/5-本地方法栈/index.html","59d3247ffb515afb4f389b9f167ad42b"],["F:/myBlog/public/2021/02/19/JVM/6-Java-虚拟机栈/index.html","9a7195fc7f99281661414a59d791064b"],["F:/myBlog/public/2021/02/19/JVM/7-方法区/index.html","215fb3cfcb56da83da1554accb6e1b2f"],["F:/myBlog/public/2021/02/19/JVM/8-Java堆/index.html","1afc628daa5e7e12f6d0f53822ea6f5e"],["F:/myBlog/public/2021/02/19/JVM/9-GC-四大算法详解/index.html","e5efbf9e7db9ed1393eed3b90de28f13"],["F:/myBlog/public/2021/02/19/中间件/0-RabbitMQ简介/index.html","1ccb5be0fb5dfa2c73c6bb80cc41a343"],["F:/myBlog/public/2021/02/19/中间件/1-RabbitMQ-的安装/index.html","b4910410b43cee5a196e20f9da65e0c9"],["F:/myBlog/public/2021/02/19/中间件/2-web管理界面介绍/index.html","99a32aeea5f56f69e2ad676eef18b62e"],["F:/myBlog/public/2021/02/19/中间件/3-RabbitMQ协议与消息模型/index.html","5260d49a862ce8daf366488c3ef8abe9"],["F:/myBlog/public/2021/02/19/中间件/4-Java-实现RabbitMQ/index.html","9e48bad547f29bc63ac34f5a655edd37"],["F:/myBlog/public/2021/02/19/中间件/5-RabbitMQ连接工具类封装/index.html","874680fa49a8b585af7e861efe8dd43a"],["F:/myBlog/public/2021/02/19/中间件/6-SpringBoot-实现RabbitMQ/index.html","100d3267b94f3101eceb0164b37f8c46"],["F:/myBlog/public/2021/02/19/中间件/7-MQ的应用场景/index.html","f5c038baae3f0b401f53d11be7606846"],["F:/myBlog/public/2021/02/19/中间件/8-RabbitMQ-集群/index.html","cfb3d056664976982b291afed0d87f59"],["F:/myBlog/public/2021/02/19/中间件/9-RabbitMQ高级特性/index.html","735e66e9ec830e30c8f403ba70885667"],["F:/myBlog/public/2021/02/19/前端知识/CSS/CSS与CSS美化页面/index.html","1a12e95d15f207b5429133d058189f98"],["F:/myBlog/public/2021/02/19/前端知识/HTML/HTML5常用标签/index.html","1fef04bc0e399385498bc11e35602be5"],["F:/myBlog/public/2021/02/19/面试/微服务-分布式/微服务-分布式/index.html","5af581a243982ad58bb8d70aae64cfc5"],["F:/myBlog/public/2021/02/20/设计模式/2-原型模式/index.html","7fa1a012e0176edb48306505f997ed5f"],["F:/myBlog/public/2021/02/20/设计模式/七大原则/0-设计模式七大原则简介/index.html","6fa10de25c8ad6da36effe745cced48d"],["F:/myBlog/public/2021/02/20/设计模式/设计模式/1-工厂模式/index.html","8d8fd5364677feac0d5907002a22f02a"],["F:/myBlog/public/404.html","56f1d93d0449fdf5d0ccce9ffb21dfe1"],["F:/myBlog/public/Gallery/index.html","36a65cde4d7881ae6b367508110c5c57"],["F:/myBlog/public/Gallery/photos/index.html","4e2a1c01ad6abf37fbf55ec3428e4676"],["F:/myBlog/public/Gallery/wallpaper/index.html","9d43f26d1e6a1bc19f8ca9949e2d64c5"],["F:/myBlog/public/about/index.html","b5be3208fba33cf282621b84bddb8b12"],["F:/myBlog/public/archives/2020/01/index.html","95b99929e491ac4caa3a60b76544d8af"],["F:/myBlog/public/archives/2020/index.html","3ce53b5347692fa41b32ef7432babe70"],["F:/myBlog/public/archives/2021/02/index.html","3886e9bc86de37767c67a1588e4daf76"],["F:/myBlog/public/archives/2021/02/page/2/index.html","829ffa37627564e2d7a85ee9cba536d8"],["F:/myBlog/public/archives/2021/02/page/3/index.html","d055005b141f81bba5f6bbbac67ea6ff"],["F:/myBlog/public/archives/2021/02/page/4/index.html","229bc4dc69e960037ea55a9f89f7cd12"],["F:/myBlog/public/archives/2021/02/page/5/index.html","c92203bb33c77c00444284fde410e731"],["F:/myBlog/public/archives/2021/02/page/6/index.html","908173938e2d327adf4b77b0271c8da4"],["F:/myBlog/public/archives/2021/02/page/7/index.html","112823909dbe67ae68a41ab2fa6a7385"],["F:/myBlog/public/archives/2021/02/page/8/index.html","58acd8bf53cdb283e40654f74b1892c1"],["F:/myBlog/public/archives/2021/02/page/9/index.html","8c689edeab55010bb3883f39f58d493f"],["F:/myBlog/public/archives/2021/index.html","cc85612ce34110a1939c94a07f63c7be"],["F:/myBlog/public/archives/2021/page/2/index.html","a0b57cfee6e0ffd86fa58499e54cf8ea"],["F:/myBlog/public/archives/2021/page/3/index.html","4fc17a914005165bfaad6eebf12f7df7"],["F:/myBlog/public/archives/2021/page/4/index.html","3ba9307eaa244bd2c564028a869417b4"],["F:/myBlog/public/archives/2021/page/5/index.html","4664fccbda2c98b4bd76b70e8e49f913"],["F:/myBlog/public/archives/2021/page/6/index.html","4c154ab6db3ae2bb50e1e9ada505b53d"],["F:/myBlog/public/archives/2021/page/7/index.html","a44cb471d61ce8ceeb98ed415d243e09"],["F:/myBlog/public/archives/2021/page/8/index.html","b7b5ae5220528ebd71840cab434ac535"],["F:/myBlog/public/archives/2021/page/9/index.html","28049676177b4f838ab8ae0149077092"],["F:/myBlog/public/archives/index.html","04109689cbbc52ffd8f46f8beb9c6479"],["F:/myBlog/public/archives/page/10/index.html","97fbf595587443e92d2ff89b438c18f9"],["F:/myBlog/public/archives/page/2/index.html","8de467c140c233e48e86bc37d76992c4"],["F:/myBlog/public/archives/page/3/index.html","7da86037c903572c6ae7f01bed42227a"],["F:/myBlog/public/archives/page/4/index.html","b55116f4affbde7d527f7839d78aeb46"],["F:/myBlog/public/archives/page/5/index.html","3ab0c2f66a7bb431a5b8772b59b7bfe2"],["F:/myBlog/public/archives/page/6/index.html","f043a032261a718ca3b681ed5c07f1a5"],["F:/myBlog/public/archives/page/7/index.html","47272bbe743e4a564f08a0d032aecb94"],["F:/myBlog/public/archives/page/8/index.html","5be4b36c08d5e8fd81a2d63785132002"],["F:/myBlog/public/archives/page/9/index.html","1197aa8b332f82199b88eda627e487b0"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Docker/index.html","e499c2a43aafa8f325cb78bc3e21ebe3"],["F:/myBlog/public/categories/Docker/page/2/index.html","02e624250fab317d0b46f261ea6b992e"],["F:/myBlog/public/categories/Hexo博客/index.html","56fe969efb98c5dce4586d3c83e4f68b"],["F:/myBlog/public/categories/JVM/index.html","83fdaf3610271b47ef15ca6ba14903e3"],["F:/myBlog/public/categories/Linux/index.html","04ffef30edf117c775d5ab86274235fd"],["F:/myBlog/public/categories/Linux/page/2/index.html","abd001b2217a95a4252cce35b066ed3f"],["F:/myBlog/public/categories/index.html","a354834185afbe7a7859eced2e27b720"],["F:/myBlog/public/categories/中间件/RabbitMQ/index.html","7d6edcd474d4060ab7ae639d5ddd84f7"],["F:/myBlog/public/categories/中间件/index.html","0456c81fc7d078f1436a7fb2750c9862"],["F:/myBlog/public/categories/前端知识/CSS/index.html","727aad5b8e9e87110caf826c3192f166"],["F:/myBlog/public/categories/前端知识/HTML/index.html","b3fc7aecad2655641af045ec8abbf568"],["F:/myBlog/public/categories/前端知识/index.html","0f7c806287f4e6e32847af2707a64d27"],["F:/myBlog/public/categories/工具/Git/index.html","8ffcdb1363e910eecadb7e58c8f67a03"],["F:/myBlog/public/categories/工具/IDEA/index.html","5a60b27d717ebba88517d34937fbc9b0"],["F:/myBlog/public/categories/工具/Maven/index.html","9331bfd9207b55fa43633ffd91a1a2d5"],["F:/myBlog/public/categories/工具/index.html","2de56830e86ac73f76d6dd139f0953dd"],["F:/myBlog/public/categories/设计模式/index.html","0fc3d9d957100a1d3ec67f552e74b771"],["F:/myBlog/public/categories/设计模式/工厂模式/index.html","688b7ef9f48c20555e7438efd9ec1645"],["F:/myBlog/public/categories/面试/index.html","6c0fefd1b41f5939c117524052a3123d"],["F:/myBlog/public/categories/面试汇总/index.html","542b104268b85d6f1bf44ccfe3039b0d"],["F:/myBlog/public/categories/面试汇总/page/2/index.html","5ed24644dfd5558f853da08e37a87632"],["F:/myBlog/public/categories/面试汇总/page/3/index.html","6a90283ecd8ef63dfe7f753b74f08e4d"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/AQS/index.html","df0c4a6d36f09dd8cd016a0d0ac96fa8"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/Redis/index.html","64123e35ccc4b11b3b0f583d0fcd29dc"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/index.html","296a74b242093eda0c8cd9fb2794cb77"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/index.html","89581152bc3960713234ac82373ceef9"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/page/2/index.html","d861d15050a459f32c570af71d58ce64"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JVM/index.html","31dd2d9e5b74a3555f46f18777f076a2"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/Linux/index.html","202d042c187edde587fbce88d70308cc"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/github/index.html","0aacc020cdfb70c79678917db02c503e"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/index.html","e5deba645d71358d4780ba9134b0d5b7"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/page/2/index.html","f12dca575e14628fc21d1d62bcc50a0f"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/background.png","ae68d47378dae9d8953dc3002417cb34"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","3ec8a1e394641e469009eda8f1f5dc3e"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","a29513609ec17bef97e3b0cd82dfbf57"],["F:/myBlog/public/music/index.html","27cc8f5e6de0749539e39fd5b9a6874e"],["F:/myBlog/public/page/10/index.html","8326efb3ab214b8d2f4f606c78ae26e5"],["F:/myBlog/public/page/2/index.html","b5832fb8dd29aae8f337c3b8de0b577c"],["F:/myBlog/public/page/3/index.html","031206abfcb6278a6286b437dd1db11b"],["F:/myBlog/public/page/4/index.html","b26ffb3d63e4249c287427a448da2842"],["F:/myBlog/public/page/5/index.html","c77f9b47a9b6bded38ebec6bc900bf1d"],["F:/myBlog/public/page/6/index.html","93b230a0e6f1910b2c84d362546a47d2"],["F:/myBlog/public/page/7/index.html","a5b870da72e683b112117cdfcf2a47db"],["F:/myBlog/public/page/8/index.html","1e51c52377b2be79a2873d8813347d34"],["F:/myBlog/public/page/9/index.html","120f65c20de75736be8840ea42452277"],["F:/myBlog/public/tags/AQS/index.html","9173d608e026c5741e2b7da541b87fc3"],["F:/myBlog/public/tags/Butterfly主题/index.html","5a11656db2139183a6eabf57e9c620f6"],["F:/myBlog/public/tags/CAS/index.html","38d39f0d0eca02485489da1f6dbedfc8"],["F:/myBlog/public/tags/CSS/index.html","7f51a4f9b345b0d5e1bc0d8442413f80"],["F:/myBlog/public/tags/Collection/index.html","d93844df72a2bf1c83edaee907526999"],["F:/myBlog/public/tags/Docker/index.html","dbb40882d79162f64bbdd88ca093bfc4"],["F:/myBlog/public/tags/Docker/page/2/index.html","4744c4d77ffcdf2f0dce3424bb22e871"],["F:/myBlog/public/tags/Git/index.html","e74da0552dcc92ffc1d189318fdf4997"],["F:/myBlog/public/tags/Github/index.html","aca6a4146a89f65b81afda5762b70d6c"],["F:/myBlog/public/tags/HTML/index.html","3d33e825989e70535823a6ea87e51ed8"],["F:/myBlog/public/tags/IDEA/index.html","22bd2a9823e88192b061be1ec46d9868"],["F:/myBlog/public/tags/JUC/index.html","4af80d9134b124ef17b3f0d9ad4e4e57"],["F:/myBlog/public/tags/JUC/page/2/index.html","0778baa07e13b9c414ab1ece36cff203"],["F:/myBlog/public/tags/JVM/index.html","b95e49750e07d7ceafb5733a3030ac67"],["F:/myBlog/public/tags/JVM/page/2/index.html","f7fcd609e488a0feff48e63bfef05de3"],["F:/myBlog/public/tags/Linux/index.html","9de7230668abb3a94780a4f7a08c20c4"],["F:/myBlog/public/tags/Linux/page/2/index.html","06f0c8f9f282504f95b7eec1b67ec892"],["F:/myBlog/public/tags/LockSupport/index.html","71f5cdd6479ef7177cd73fc0fb3b85dd"],["F:/myBlog/public/tags/Maven/index.html","c58e3caca8d363adb1b828f19b09baf5"],["F:/myBlog/public/tags/Redis/index.html","83cb19a6ba604652577b20dced0163b4"],["F:/myBlog/public/tags/Synchronized/index.html","15ffb2ad8ee083495100756d292d1314"],["F:/myBlog/public/tags/Typora/index.html","546c72c9c9a9effb79b03d001f506ed5"],["F:/myBlog/public/tags/Xshell/index.html","0118478a16bb87764ac4b541ecfb07cb"],["F:/myBlog/public/tags/hexo/index.html","2f1a0d9e5d517d1da18a852a53d10b6d"],["F:/myBlog/public/tags/index.html","530d478599d7c79b39aabea93b33b495"],["F:/myBlog/public/tags/volatile/index.html","2847903113ead8d3f1a685829f0d3202"],["F:/myBlog/public/tags/七大原则/index.html","2dd1ccb600f902c86303f0fe11572444"],["F:/myBlog/public/tags/中间件/index.html","306f34e0cbee65df758e3dd74de33d47"],["F:/myBlog/public/tags/值传递/index.html","f31119fb1bf85f0deb2efcaa2545e9f5"],["F:/myBlog/public/tags/分布式/index.html","44757748940042dfcd8da7f6ef89dd95"],["F:/myBlog/public/tags/分布式锁/index.html","6faeb144e7df46773b50b53a58d54e38"],["F:/myBlog/public/tags/可重入锁/index.html","b9f704f8dcb4a9eb309e76e16c36778f"],["F:/myBlog/public/tags/线程池/index.html","d15d2cc764e15ffd0ee0a88f59e8a9d2"],["F:/myBlog/public/tags/设计模式/index.html","11cd81a4080b72da42ee563b34c0b922"],["F:/myBlog/public/tags/锁/index.html","5a063c63437351a5c229707191e126fc"],["F:/myBlog/public/tags/队列/index.html","2addc792b9cec8dc2c8244ee677e8bf2"],["F:/myBlog/public/tags/面试/index.html","c009bbfd512e40d354ed90d1fcdefb71"]];
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







