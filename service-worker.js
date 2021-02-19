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

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","f8046f073abe72069b9b1e49ec666329"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","3fd0c287b8b88d85739f2ae05cfead09"],["F:/myBlog/public/2020/01/01/配置模板/index.html","4afa39ce7e5bd2b4f740030db684b3a3"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","5fae480c164ac268581e3c317e658aa2"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","e28fa89377a447270f0aba26d4de12af"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","ebd25f9a7cca6bb387ae5d54975d34a9"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","71f2a15d2ed36322cc73af75d8890bb3"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","e0aac2913ab9b047fc01e38f53ca213a"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","ffe68d571c9911058255b57a89d8827b"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","327990e532e42f1b30a63819baf6429a"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","3469df2a2df49d8f4f2e3c8f10c47283"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","4c059e57212f8c708cc6d97d054e71d9"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","4c8c35cadb6c824d522e12377b7ea0e5"],["F:/myBlog/public/2021/02/17/Docker/1-Docker-简介/index.html","a606645af7657c3cb69e6cbe23b4e180"],["F:/myBlog/public/2021/02/17/Docker/10-Docker-私有仓库/index.html","9c8074d35b9246d7574fc57eb41639a1"],["F:/myBlog/public/2021/02/17/Docker/2-Docker安装/index.html","cd12412192cd7e819cf59c0cb6ca7ab7"],["F:/myBlog/public/2021/02/17/Docker/3-Docker常用命令/index.html","3a32a419873e4d0f259f3cbc4c964b71"],["F:/myBlog/public/2021/02/17/Docker/4-Docker-镜像/index.html","0a708fd0ea16be6f606d6635baa283b2"],["F:/myBlog/public/2021/02/17/Docker/5-Docker容器数据卷/index.html","2a78c3c9b800b89a2c24a046cc846b39"],["F:/myBlog/public/2021/02/17/Docker/6-DockerFile-解析/index.html","abacbd6189de19f91aa3039e3a70a026"],["F:/myBlog/public/2021/02/17/Docker/7-Docker常用安装/index.html","3001e5ea007f6657c2e1c50e861d522b"],["F:/myBlog/public/2021/02/17/Docker/8-本地镜像发布到阿里云/index.html","fe9910c1eec6eedc4e93403321964c64"],["F:/myBlog/public/2021/02/17/Docker/9-服务编排/index.html","3cc8f6b9633ffd6ec5d180b46e3afcf9"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装-ElasticSearch-5-6-8/index.html","31849f05c8588e430f4cec3573a69b11"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装ElasticSearch-6-8-0/index.html","1a18c70596308fc0730f996245feeab7"],["F:/myBlog/public/2021/02/17/Linux/0_在VM虚拟机下安装-Linux/index.html","0e33c580c29ba9112bdb7a94195200a0"],["F:/myBlog/public/2021/02/17/Linux/10-Linux-基本命令/index.html","ef51d8a63093629223b80db927dc4bdf"],["F:/myBlog/public/2021/02/17/Linux/11-Linux-安装-JDK8/index.html","8b6990bc0e4b07f9aac5e5999abca406"],["F:/myBlog/public/2021/02/17/Linux/12-Linux安装MySQL/index.html","80fca4015b9849166490f943c17c862f"],["F:/myBlog/public/2021/02/17/Linux/1_Xsell连接Linux/index.html","335af2fc3e3507be76cd26a66538e9e8"],["F:/myBlog/public/2021/02/17/Linux/2_CentOs 6 修改 IP 地址/index.html","37317103977c7b56e86cbc44298d6491"],["F:/myBlog/public/2021/02/17/Linux/3-CentOs-7修改-IP-地址/index.html","f92e4e257d9632cbfc04900c5b9d169d"],["F:/myBlog/public/2021/02/17/Linux/4-设置主机名访问任意主机/index.html","04f1924a599d8bcf6e05c1d45c7040be"],["F:/myBlog/public/2021/02/17/Linux/5-CentOs-7-连接外网的解决办法/index.html","3bcd3e5cf48c9cd323731796efa8a76f"],["F:/myBlog/public/2021/02/17/Linux/6-更改系统语言/index.html","eae2b701fc24492512f0bc6ef68677ce"],["F:/myBlog/public/2021/02/17/Linux/7-本地文件上传到Linux/index.html","6dcc52b8f6dc7774272170571d36467d"],["F:/myBlog/public/2021/02/17/Linux/8-CentOs-下安装-Tomcat/index.html","335462ec1e07100cbe6d31293c5238aa"],["F:/myBlog/public/2021/02/17/Linux/9-CentOs-设置防火墙及开放端口/index.html","b31d044be90dc6cf0a521c4a2514cfb6"],["F:/myBlog/public/2021/02/17/工具/Git/index.html","14968eba32d576cb637e43a156b54992"],["F:/myBlog/public/2021/02/17/工具/Maven/index.html","3783e6fb7d07514b8e68f49139b70ca4"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/1-可重入锁/index.html","1da96d38e2b8f5780bc5d1ea88b66b6e"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/2-LockSupport/index.html","2b7b0aeec5e4ffcf28dcb05423dc89f0"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/3-AQS/index.html","0f65297899c6dcdcc1df48b0e5642305"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/1-安装Redis/index.html","7dfae0c7d3debc72303b251a386b821f"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/2-redis传统五大基本类型的落地应用/index.html","6536429d0924e805d842b80f46894ebb"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/3-分布式锁/index.html","01b459aa0752f5dc4a64dcdca844bc0b"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/4-redis缓存过期淘汰策略/index.html","e4a6fc88cb8904ccdabb22e05a497ab3"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Github 学习/Github学习/index.html","9b6af92aeee5b52fa40f46816bf6caf4"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/1-谈谈volatile/index.html","054725b03025fe7ce2374ddb6ac92963"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/10-线程池/index.html","8a2f8f5a24782c83fe5591209cb6b075"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/11-死锁编码及快速定位/index.html","4bc87f6cdff1ae088032eaf75cd45071"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/2-CAS-底层原理/index.html","fde6c19f7cc3682e1f80a16e6c086c6f"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/3-谈谈原子类的ABA问题/index.html","1e163af33793fe4e39728bded65ec0ff"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/4-Collection-线程不安全的举例/index.html","e2335a65e0cea4484f842c44f8b03140"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/5-TransferValue-是什么/index.html","450f0cc52a469d9bdde9666963103705"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/6-Java-的锁/index.html","0831103e0160b7710f9cf4cca7aa9c05"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/7-CountDownLatch-CyclicBarrier-Semaphore使用/index.html","2637852af1cba8a7753ec31d2ea4d87c"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/8-阻塞队列/index.html","fcdabbd6afd852f25bd0fa6d9c618ba5"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/9-Synchronized-和-Lock-的区别与好处/index.html","05030f4f02c8c2396f1f6ccb90cee99b"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/0-JVM体系结构/index.html","e98efb02322e0429a985507e0a032d9f"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/1-GC-Roots分析/index.html","d38a31f07feef73fda68be03e4979e24"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/2-JVM参数调优/index.html","00e3f3bff59ec57b3c9f57936f44fb15"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/3-Java中的引用/index.html","9bcdaba6601cc78a748307cc551a1238"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/4-Java内存溢出OOM/index.html","05c2b82c9eb192b51fd39d2738722e5d"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/5-垃圾收集器/index.html","dbe70d7143ac5e45a85445af847be85a"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Linux/Linux诊断原因/index.html","8265820afae3a2d79c934beaebd27860"],["F:/myBlog/public/2021/02/18/面试/项目介绍/项目介绍/index.html","aad3658064ff997b34d496aed6293a95"],["F:/myBlog/public/2021/02/19/JVM/1-JVM体系结构与类加载系统/index.html","1d4c2c69079c52378504b6e18be4c72b"],["F:/myBlog/public/2021/02/19/JVM/2-运行时数据区概述及线程/index.html","d8fc3068f2937d9c0a365cac7044a37c"],["F:/myBlog/public/2021/02/19/JVM/3-程序计数器/index.html","542e5e472687cd3869a19164c9db139c"],["F:/myBlog/public/2021/02/19/JVM/4-本地方法接口/index.html","8f19e000351a0c4d024d5b5aae5da12a"],["F:/myBlog/public/2021/02/19/JVM/5-本地方法栈/index.html","a8a9014280e4706c4c972406ed310a13"],["F:/myBlog/public/2021/02/19/JVM/6-Java-虚拟机栈/index.html","930228828d5126a9e90e98b5e213fac0"],["F:/myBlog/public/2021/02/19/JVM/7-方法区/index.html","393039874b87cd585bc9ab042b2c151e"],["F:/myBlog/public/2021/02/19/JVM/8-Java堆/index.html","09bd602cd058f0df2f12837cf14f8bd4"],["F:/myBlog/public/2021/02/19/JVM/9-GC-四大算法详解/index.html","d8b7fdffcc7bd5e1f1726cdf47d55329"],["F:/myBlog/public/2021/02/19/中间件/0-RabbitMQ简介/index.html","4df50675d3e1b3ef8a1b3f92b11d752c"],["F:/myBlog/public/2021/02/19/中间件/1-RabbitMQ-的安装/index.html","fc512b43afc0933dd55f6eb8620c818e"],["F:/myBlog/public/2021/02/19/中间件/2-web管理界面介绍/index.html","e98bdf8cac2f03449b7c41cdf3cce0f3"],["F:/myBlog/public/2021/02/19/中间件/3-RabbitMQ协议与消息模型/index.html","23439d7095b6f09d858eb1edc7459664"],["F:/myBlog/public/2021/02/19/中间件/4-Java-实现RabbitMQ/index.html","87564d329855ce189d0edfe2b3529ab4"],["F:/myBlog/public/2021/02/19/中间件/5-RabbitMQ连接工具类封装/index.html","4b0eb73830d837d56016b7217bf3da68"],["F:/myBlog/public/2021/02/19/中间件/6-SpringBoot-实现RabbitMQ/index.html","a1e3513aac237226bf908aa8c699f1aa"],["F:/myBlog/public/2021/02/19/中间件/7-MQ的应用场景/index.html","dae742ed217af73cdae35e4d17982565"],["F:/myBlog/public/2021/02/19/中间件/8-RabbitMQ-集群/index.html","df32021bee23bae3e3793bc9a5c0ba5e"],["F:/myBlog/public/2021/02/19/中间件/9-RabbitMQ高级特性/index.html","c357260372465cf10103e3ccbfa5f02b"],["F:/myBlog/public/2021/02/19/面试/微服务-分布式/微服务-分布式/index.html","4f98ddb1434f22c40871d914af1a8b9b"],["F:/myBlog/public/404.html","b22e7b8dba72a560394115e9bd194cb4"],["F:/myBlog/public/Gallery/index.html","d94346393b5e9d49f799a6864c55f7bc"],["F:/myBlog/public/Gallery/photos/index.html","6cb231e60f9184374a5b177ca17bc2eb"],["F:/myBlog/public/Gallery/wallpaper/index.html","6a12248e116faf24bc59e86a87b9b679"],["F:/myBlog/public/about/index.html","978c4e2b2cd77e678b0eb8f7dc37ddcf"],["F:/myBlog/public/archives/2020/01/index.html","c4d027e72ed5b8219816ac4e10403fce"],["F:/myBlog/public/archives/2020/index.html","9bc639d987aa66061af2a23b9444d674"],["F:/myBlog/public/archives/2021/02/index.html","100ba6bf5b8e6ea6af32f15b994c6e98"],["F:/myBlog/public/archives/2021/02/page/2/index.html","e4b7ac624688cbbb5e39662012303f33"],["F:/myBlog/public/archives/2021/02/page/3/index.html","b32a8d4c106e6c7cabf9dfb42194ac3a"],["F:/myBlog/public/archives/2021/02/page/4/index.html","18256f1d56c13df188e804e45056ee55"],["F:/myBlog/public/archives/2021/02/page/5/index.html","628e6e77647c353c63352491f5e3976a"],["F:/myBlog/public/archives/2021/02/page/6/index.html","86c5d3654b82b0e8c0c31dbf3cec54a6"],["F:/myBlog/public/archives/2021/02/page/7/index.html","ce6b3a5b03a7ac93c6cecb1586ac3179"],["F:/myBlog/public/archives/2021/02/page/8/index.html","f92c072fc6477c6a8d17c075a5f8b794"],["F:/myBlog/public/archives/2021/02/page/9/index.html","7752b3897763c9b7d74a1ec011bd1789"],["F:/myBlog/public/archives/2021/index.html","82ad19a2de523a6ea61f2405e587e44e"],["F:/myBlog/public/archives/2021/page/2/index.html","7e76b47616a14ae95025e4f05a229904"],["F:/myBlog/public/archives/2021/page/3/index.html","997e112565275769962b8dd2c06b9b01"],["F:/myBlog/public/archives/2021/page/4/index.html","129e1ac1e27f07375d1d7700b21f16cd"],["F:/myBlog/public/archives/2021/page/5/index.html","aec85002865f60e1896892baa039e0dd"],["F:/myBlog/public/archives/2021/page/6/index.html","d8af8cc46593eee601853ca6f36b2e50"],["F:/myBlog/public/archives/2021/page/7/index.html","ad1fa5335b64f1d026cf1b8ef14911b2"],["F:/myBlog/public/archives/2021/page/8/index.html","a0657253b9c43ec1713e29b5a745c5e3"],["F:/myBlog/public/archives/2021/page/9/index.html","6a74969651f39ea3b8e6166b3fb4156f"],["F:/myBlog/public/archives/index.html","64c0efb8f51818f10e5e9e5597efd492"],["F:/myBlog/public/archives/page/2/index.html","8886ce37589e85f91d5f412451280554"],["F:/myBlog/public/archives/page/3/index.html","20b562c9afeb0d0d4e3a091e8172f9e7"],["F:/myBlog/public/archives/page/4/index.html","fc722a60082a2f2d192113cbd98a2318"],["F:/myBlog/public/archives/page/5/index.html","db7a3abad67f86ccfc369d5b44a9b918"],["F:/myBlog/public/archives/page/6/index.html","6a4c4158522c0287bfebbee91c78eab0"],["F:/myBlog/public/archives/page/7/index.html","584bfc1406a94e5f53cbb5ca1a8c6794"],["F:/myBlog/public/archives/page/8/index.html","f8291126c91a0e967d9cc2327d1820c2"],["F:/myBlog/public/archives/page/9/index.html","06f4a7ee97dbc97bb02795cc64f9c79a"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Docker/index.html","cd607aebb7f1635a49864033a0faa0d5"],["F:/myBlog/public/categories/Docker/page/2/index.html","6c7d1b2d363fe0f5c32895adf83a0e74"],["F:/myBlog/public/categories/Hexo博客/index.html","6bd9d97992b9224ef48fe86425ebad7f"],["F:/myBlog/public/categories/JVM/index.html","bd29310e486ca8c0798a14eba804025c"],["F:/myBlog/public/categories/Linux/index.html","d2f7374715de7a1f507f49dadde72f66"],["F:/myBlog/public/categories/Linux/page/2/index.html","3825474953fe3bba56f816e1507dbf64"],["F:/myBlog/public/categories/index.html","f9ba2fc227c4797c7f185ba4fb230db1"],["F:/myBlog/public/categories/中间件/RabbitMQ/index.html","93cba4222964cce9b888ae7e36046ae8"],["F:/myBlog/public/categories/中间件/index.html","0ea5273f8bac6571501a1af6274c681a"],["F:/myBlog/public/categories/工具/Git/index.html","8671059b0b01c2a2cfe2c89152d1a6da"],["F:/myBlog/public/categories/工具/IDEA/index.html","94213e0726fe053e432b0437f768c45a"],["F:/myBlog/public/categories/工具/Maven/index.html","00987eb3e550e7dc0c2b974c21ead94a"],["F:/myBlog/public/categories/工具/index.html","e6d1f704bdd3e214d803ec4e002bdea6"],["F:/myBlog/public/categories/面试/index.html","8561252aeee02157207e2f8c5109da23"],["F:/myBlog/public/categories/面试汇总/index.html","af7cf16dc3a45ca148c71c3a182eafd2"],["F:/myBlog/public/categories/面试汇总/page/2/index.html","f59e64de5d0a5db72c364cdf17de86e0"],["F:/myBlog/public/categories/面试汇总/page/3/index.html","17f8e888e83a232f36f6cef0ebba3e40"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/AQS/index.html","319380aa8d4805f94c7507ccd15bf51f"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/Redis/index.html","86bf559137c1709d9b23ec0bc45b808b"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/index.html","30100edd181c4d00ec87f2bc0482544d"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/index.html","9243308ad0b74a667e26bf2860e35f78"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/page/2/index.html","36075390e12fd6c5506f89202ade8e02"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JVM/index.html","bfd6d23641da414187458486b6e7e3ef"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/Linux/index.html","3e06a56504ca80d9fafd24eb0a0030d0"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/github/index.html","d16c3da03aab5712d396c81d541492de"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/index.html","519ef03b9e3e4f90562b3e7e19b52568"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/page/2/index.html","15cc32428656a778eafeb050612d0a97"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/background.png","ae68d47378dae9d8953dc3002417cb34"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","359f646f0b816f94a166db0a2a1e2b34"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","4eeb27e67c6b2bebb4e5c2c3866613c8"],["F:/myBlog/public/music/index.html","1a0db03248d4323db4e9e06bfa3ddd03"],["F:/myBlog/public/page/2/index.html","9337c1a63d07b3d930f1cee3fc74c2ba"],["F:/myBlog/public/page/3/index.html","ecf0fa0e195eb9d56b95b4400736e787"],["F:/myBlog/public/page/4/index.html","e2724c4a05a0986ae2ab8fbb4b5c492a"],["F:/myBlog/public/page/5/index.html","d993dec92d8d2eb787f09cbe5c6a2d35"],["F:/myBlog/public/page/6/index.html","a93d02096e9f94f9ea4c6b12380988a2"],["F:/myBlog/public/page/7/index.html","ffe50accce60ccd408bd6fce7397a57c"],["F:/myBlog/public/page/8/index.html","943a7e52dce862eb1f4d11240260dca2"],["F:/myBlog/public/page/9/index.html","bf5d4565e7b87e7967780e116011b5d1"],["F:/myBlog/public/tags/AQS/index.html","3ad2f971830b9d76bba0c5f737d786b9"],["F:/myBlog/public/tags/Butterfly主题/index.html","f29c1bd36090ea6c5bb8fb3968fa64a1"],["F:/myBlog/public/tags/CAS/index.html","9761438b87312006b0d316f2d06ae6d1"],["F:/myBlog/public/tags/Collection/index.html","56950fa62a386d734f7b3c2d45146e0a"],["F:/myBlog/public/tags/Docker/index.html","71d2ac2a0b69f0b5a655aef5a1561a4d"],["F:/myBlog/public/tags/Docker/page/2/index.html","5fdbe363136ae4888c41788a6f2e5af2"],["F:/myBlog/public/tags/Git/index.html","6d5c2132ef621972511632fb54a168d9"],["F:/myBlog/public/tags/Github/index.html","1e2c8d9017ab4331eece904aff03d62e"],["F:/myBlog/public/tags/Hexo/index.html","938bdac1ca4cb1ff39b2dc603daecd03"],["F:/myBlog/public/tags/IDEA/index.html","26110d08713c0c344c73be51df705da7"],["F:/myBlog/public/tags/JUC/index.html","85952df580efb47d24b233231cd1ee2c"],["F:/myBlog/public/tags/JUC/page/2/index.html","4e4c6346cb1a404ee787cdabfc445f75"],["F:/myBlog/public/tags/JVM/index.html","adac9c903eba6a160172c1866f1a1c72"],["F:/myBlog/public/tags/JVM/page/2/index.html","da9d5d59e99593b7aa1aa056f31caab2"],["F:/myBlog/public/tags/Linux/index.html","33adad5b8374a0074556ef503fafa309"],["F:/myBlog/public/tags/Linux/page/2/index.html","648a3670779e3290a9b72b54b0122a86"],["F:/myBlog/public/tags/LockSupport/index.html","b8e59c957da8afe0ca9f470f428f1e1e"],["F:/myBlog/public/tags/Maven/index.html","985959499ce83e0a788eb35e6ad896d9"],["F:/myBlog/public/tags/Redis/index.html","9402225b22e9210d79847ea3d372543d"],["F:/myBlog/public/tags/Synchronized/index.html","653689d18b3bebbd4a3acba94d7de161"],["F:/myBlog/public/tags/Typora/index.html","30f5f0294de350ee321b624697e12e12"],["F:/myBlog/public/tags/Xshell/index.html","621740d7a0bdf259fcf8518b6d19180a"],["F:/myBlog/public/tags/index.html","ea1c65eb8d8fa586e460ded8d53ec3e4"],["F:/myBlog/public/tags/volatile/index.html","0637023cdb4a69a0af120a1b7579f2d1"],["F:/myBlog/public/tags/中间件/index.html","e033c067ffcecde5125e53fa4b347d31"],["F:/myBlog/public/tags/值传递/index.html","dba44f65ec2887c99ffcb07f0ecfe28e"],["F:/myBlog/public/tags/分布式/index.html","955ee336a08b94003c0a404e27ed7b3f"],["F:/myBlog/public/tags/分布式锁/index.html","90146cfa87c8243ee5da9c7fa7af93d3"],["F:/myBlog/public/tags/可重入锁/index.html","6b4101dbcb1c16232826b91a95fd25c3"],["F:/myBlog/public/tags/线程池/index.html","5d9c0aa4ad58216e22e1f6670397333a"],["F:/myBlog/public/tags/锁/index.html","7756ae85a0bb1c64706dff5139f91d87"],["F:/myBlog/public/tags/队列/index.html","d13c00e4a7840b62741fab5571e95725"],["F:/myBlog/public/tags/面试/index.html","3dc6c785063c4e254ce953cf25128aa5"]];
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







