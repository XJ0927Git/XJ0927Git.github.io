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

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","dc4120c9f89e62a1d2bf9a7f8c221553"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","abec615954fc5930e01016b0c5bb7bf6"],["F:/myBlog/public/2020/01/01/配置模板/index.html","571e853c21985e88a768755a093f8b73"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","50955c30fc2b820c768837a25e48670b"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","db6cae975013bd3fe8afb3cb0b4e2aac"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","88f2c29a385f079a0a49a5423b04e24d"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","5563cef1fe1fd948d467dd205b2eea47"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","60ff631ca5a3eb0565f47a2ec26d0063"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","2e1affc4dd358c428ed8421faa0db50d"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","5d7c9db9d23a6ca11ca3b1a0c978b4e2"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","c08cf24194d40dc917a52ecac647db32"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","d3327f746072694ff859a8bf1138a1b7"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","2beafefdf4464394de1fc8117d88faed"],["F:/myBlog/public/2021/02/17/Docker/1-Docker-简介/index.html","f39dace56156d98e7055163cc1bd74f3"],["F:/myBlog/public/2021/02/17/Docker/10-Docker-私有仓库/index.html","cd01fbc707445ee482d91cb6af0e797d"],["F:/myBlog/public/2021/02/17/Docker/2-Docker安装/index.html","649798493b8519cbe2ad25c0b503707c"],["F:/myBlog/public/2021/02/17/Docker/3-Docker常用命令/index.html","fbc2e74dd1ee165f114915e194fa10ad"],["F:/myBlog/public/2021/02/17/Docker/4-Docker-镜像/index.html","8d7c26e99e4a2620789cdfb03023161a"],["F:/myBlog/public/2021/02/17/Docker/5-Docker容器数据卷/index.html","b8680601cf38c36b81aa390f4f5f5675"],["F:/myBlog/public/2021/02/17/Docker/6-DockerFile-解析/index.html","03d9becbc466ffa29aef51559704c015"],["F:/myBlog/public/2021/02/17/Docker/7-Docker常用安装/index.html","e55a069f94cca8fe9497874f41636367"],["F:/myBlog/public/2021/02/17/Docker/8-本地镜像发布到阿里云/index.html","b74ca5c3b8f1b6218fd34052930ffd37"],["F:/myBlog/public/2021/02/17/Docker/9-服务编排/index.html","f0dec0ef87a48d93816166006c509578"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装-ElasticSearch-5-6-8/index.html","84d7033d0c9607b4700eee595706378f"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装ElasticSearch-6-8-0/index.html","4fd2996e89c623f4f113b9f0f8e4dabb"],["F:/myBlog/public/2021/02/17/Linux/0_在VM虚拟机下安装-Linux/index.html","280fb3745815705fdff8b789c5410f22"],["F:/myBlog/public/2021/02/17/Linux/10-Linux-基本命令/index.html","6c4dd4e82d3a76d50e0760ee5867f048"],["F:/myBlog/public/2021/02/17/Linux/11-Linux-安装-JDK8/index.html","0ae9ab380d92d3bb475c687744943130"],["F:/myBlog/public/2021/02/17/Linux/12-Linux安装MySQL/index.html","12717d5490a659ff763b7dd8a0c97b7a"],["F:/myBlog/public/2021/02/17/Linux/1_Xsell连接Linux/index.html","09b9a4946ae685b0ecf21702d266aef1"],["F:/myBlog/public/2021/02/17/Linux/2_CentOs 6 修改 IP 地址/index.html","2785ca43baf8c2388dd3fd0d7d93d271"],["F:/myBlog/public/2021/02/17/Linux/3-CentOs-7修改-IP-地址/index.html","2bfd529febca3c5a5025116dd779dc16"],["F:/myBlog/public/2021/02/17/Linux/4-设置主机名访问任意主机/index.html","fd159e9c8a3cada8180b092309b7e918"],["F:/myBlog/public/2021/02/17/Linux/5-CentOs-7-连接外网的解决办法/index.html","9a6b7e55afaf9e6506911d3fe4382090"],["F:/myBlog/public/2021/02/17/Linux/6-更改系统语言/index.html","5cbd9ae2765138fa6334cbf03487a439"],["F:/myBlog/public/2021/02/17/Linux/7-本地文件上传到Linux/index.html","c42f7b8449b2da94bb15ebda03de9c52"],["F:/myBlog/public/2021/02/17/Linux/8-CentOs-下安装-Tomcat/index.html","db251ed3f84de697722985c6b3cd7abd"],["F:/myBlog/public/2021/02/17/Linux/9-CentOs-设置防火墙及开放端口/index.html","b2a0489588f8a4047f735041e7a9779f"],["F:/myBlog/public/2021/02/17/工具/Git/index.html","6aadb283e8e9c6c35cb92850f0fcd8c0"],["F:/myBlog/public/2021/02/17/工具/Maven/index.html","7290393a01adb28e25dd0170a4ee5ea1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/1-可重入锁/index.html","d7a8e75cfc1e87b2931deed3e981c195"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/2-LockSupport/index.html","c0662f776646340a16ab326bb3b84f1e"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/3-AQS/index.html","ecedb36d94c52c60d9c620ec255da59e"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/1-安装Redis/index.html","2887a3e85c610676116b3f1a1f99e0f1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/2-redis传统五大基本类型的落地应用/index.html","5c704c529951d7382ebd06b553f1dccb"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/3-分布式锁/index.html","a845dbfcfba04dffea6eb28e20dcafb0"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/4-redis缓存过期淘汰策略/index.html","0922e964dd35da281904c39ea58b1237"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Github 学习/Github学习/index.html","ea26b0dae85e7f67199d5b5b12c533f7"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/1-谈谈volatile/index.html","c6e8b79ac3831082ec36ea1956f0613e"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/10-线程池/index.html","406b763ed0d4d822b49be4b09b9beddb"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/11-死锁编码及快速定位/index.html","57d0595d79bb1b972eac6acadd4453ea"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/2-CAS-底层原理/index.html","90f77b74554979ebc0a47870b503516a"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/3-谈谈原子类的ABA问题/index.html","fbe445b7e29b1f3d3d7cdde5b173a120"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/4-Collection-线程不安全的举例/index.html","09c015be9ddc7f720a69cb5a173e6403"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/5-TransferValue-是什么/index.html","18a73a40bf7a0f9ebd8fa7dca386b185"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/6-Java-的锁/index.html","5ce977ac16d52cae226ce5a0a47fbcf0"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/7-CountDownLatch-CyclicBarrier-Semaphore使用/index.html","cf6037804fa9ca750f9df59ab90a991e"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/8-阻塞队列/index.html","fda99671053256a33c00d7b8c7861e16"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/9-Synchronized-和-Lock-的区别与好处/index.html","b0e93097bb09496236695edc6fe424cc"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/0-JVM体系结构/index.html","c237b3e2b9a9e28dfbed746292376b55"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/1-GC-Roots分析/index.html","06a297d9e58ff72763df6c48cdd53edf"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/2-JVM参数调优/index.html","1c5a58d32e0ad427d734d009a013d81a"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/3-Java中的引用/index.html","fc0de56c580ec7828b34e73f90bd8e03"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/4-Java内存溢出OOM/index.html","1e6c169bc1e4232975c7512c1897afd7"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/5-垃圾收集器/index.html","d23098f5ce0d568e19724aa974faeb54"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Linux/Linux诊断原因/index.html","3eb3f374a97eb4fddede38d1bf7ee8e4"],["F:/myBlog/public/2021/02/18/面试/项目介绍/项目介绍/index.html","fa0fc8361f44ea7f6d6537d2d08b528f"],["F:/myBlog/public/2021/02/19/JVM/1-JVM体系结构与类加载系统/index.html","7a3a0e332de0867e47219ee771b03fce"],["F:/myBlog/public/2021/02/19/JVM/2-运行时数据区概述及线程/index.html","d65deff97d09faed5b721ca2d9178907"],["F:/myBlog/public/2021/02/19/JVM/3-程序计数器/index.html","4c15ea17a18558e257f889795f1c72e9"],["F:/myBlog/public/2021/02/19/JVM/4-本地方法接口/index.html","ee13144abc2f72a4cbc19fbc53ade1e1"],["F:/myBlog/public/2021/02/19/JVM/5-本地方法栈/index.html","e59a594819a9a7cdc0ee71a0e9d20908"],["F:/myBlog/public/2021/02/19/JVM/6-Java-虚拟机栈/index.html","a117fcf2ec2432073f6fa0483024d6be"],["F:/myBlog/public/2021/02/19/JVM/7-方法区/index.html","f1a16d0688c548f3bb94f075dedec03c"],["F:/myBlog/public/2021/02/19/JVM/8-Java堆/index.html","535ebe884f9d66b084b155bf6aa8dc45"],["F:/myBlog/public/2021/02/19/JVM/9-GC-四大算法详解/index.html","4d59eec4bc263de1aa9f6f4f091bbb35"],["F:/myBlog/public/2021/02/19/中间件/0-RabbitMQ简介/index.html","f6753b9c0d8f84860b55e260d10a4511"],["F:/myBlog/public/2021/02/19/中间件/1-RabbitMQ-的安装/index.html","9f69c11cd92c7bac1f28923de5038253"],["F:/myBlog/public/2021/02/19/中间件/2-web管理界面介绍/index.html","1f11dff1569bc7b44b8e4c19707978e6"],["F:/myBlog/public/2021/02/19/中间件/3-RabbitMQ协议与消息模型/index.html","0c670a573814c8478d74bc5c49d8a271"],["F:/myBlog/public/2021/02/19/中间件/4-Java-实现RabbitMQ/index.html","78d9f7ebbed625d7e1fd12c126631edf"],["F:/myBlog/public/2021/02/19/中间件/5-RabbitMQ连接工具类封装/index.html","f61fc6de8499485dd12717de1f9ae4a2"],["F:/myBlog/public/2021/02/19/中间件/6-SpringBoot-实现RabbitMQ/index.html","7bd3fe28003840886fe8195a38c04bb8"],["F:/myBlog/public/2021/02/19/中间件/7-MQ的应用场景/index.html","1d84abfb34d8258bfe7e2e75a0168db9"],["F:/myBlog/public/2021/02/19/中间件/8-RabbitMQ-集群/index.html","4babdd0d2473e9de944cfc52b61fb1a9"],["F:/myBlog/public/2021/02/19/中间件/9-RabbitMQ高级特性/index.html","6e5ed84072085890f18ebf61a8045e02"],["F:/myBlog/public/2021/02/19/面试/微服务-分布式/微服务-分布式/index.html","05e43bf5e721190bf0474d6cc9184589"],["F:/myBlog/public/404.html","c6c42007c4f11134ac442f11946bb539"],["F:/myBlog/public/Gallery/index.html","26a4eb51e169db249152d1f00c2787e0"],["F:/myBlog/public/Gallery/photos/index.html","ac26ef6d2d65cacbd051494f63e554db"],["F:/myBlog/public/Gallery/wallpaper/index.html","0fcae318cef99e6ff429439df6a5633d"],["F:/myBlog/public/about/index.html","f6a454a59c4986a772c7186840e92ccc"],["F:/myBlog/public/archives/2020/01/index.html","6dfac9aafc6518312c5008a2d0f27c13"],["F:/myBlog/public/archives/2020/index.html","ac68494e8c00d3c826b7237d7a5cc0fd"],["F:/myBlog/public/archives/2021/02/index.html","8934ea7ebc7c1095b5148f60561239a9"],["F:/myBlog/public/archives/2021/02/page/2/index.html","7578a8c7fc59bd176707ff5c54ea8a12"],["F:/myBlog/public/archives/2021/02/page/3/index.html","c68326e3f3f8b7ca81e365af9a270ca5"],["F:/myBlog/public/archives/2021/02/page/4/index.html","e1046b8f4033ef1fda0ad4b845c55c56"],["F:/myBlog/public/archives/2021/02/page/5/index.html","f862021f09b6d115cb9304f59ac765a6"],["F:/myBlog/public/archives/2021/02/page/6/index.html","3669e3732343e6b25edecf90e061e507"],["F:/myBlog/public/archives/2021/02/page/7/index.html","cc6b83f22994dafefb1a78f67c7923f4"],["F:/myBlog/public/archives/2021/02/page/8/index.html","b0d712d824f353ab354e2b7814777748"],["F:/myBlog/public/archives/2021/02/page/9/index.html","c61c2f8de422288e785d32c55127bdd4"],["F:/myBlog/public/archives/2021/index.html","c5ac52bcb979e13b14f18a6ee4dd716d"],["F:/myBlog/public/archives/2021/page/2/index.html","7f6e746e8053da7dfc527803d317a28d"],["F:/myBlog/public/archives/2021/page/3/index.html","a9776e6fb61568cfcf29d3b3fca80dff"],["F:/myBlog/public/archives/2021/page/4/index.html","4c43fbeba63cd61746fc517b5bdcb638"],["F:/myBlog/public/archives/2021/page/5/index.html","072c2ee0f854b892effc1df3b853fcf2"],["F:/myBlog/public/archives/2021/page/6/index.html","549be407ee588ab3ccf5a113f32e74d0"],["F:/myBlog/public/archives/2021/page/7/index.html","08461656ee698390a643331dbe4a7452"],["F:/myBlog/public/archives/2021/page/8/index.html","31c98ab7b527fc26f48d85e087fcf605"],["F:/myBlog/public/archives/2021/page/9/index.html","688b4970fc8b5666af76bc2598765b29"],["F:/myBlog/public/archives/index.html","a7f12e62a218c9d8f495b63b52c987e1"],["F:/myBlog/public/archives/page/2/index.html","736c3382b4b0ae4503fd45f8d3dc136a"],["F:/myBlog/public/archives/page/3/index.html","ec60a8d166cf5798b930d1dafb249cab"],["F:/myBlog/public/archives/page/4/index.html","de4f4ac7cafec785d16d37172e100825"],["F:/myBlog/public/archives/page/5/index.html","be647237c8fc2b3d0fa53ef255e3be1f"],["F:/myBlog/public/archives/page/6/index.html","b6ba563cb330b2c71dbd4375f31a5c20"],["F:/myBlog/public/archives/page/7/index.html","b8eaf7e8dc5c52229f5f4805df48ed10"],["F:/myBlog/public/archives/page/8/index.html","d47d42aff4da469f84d3d13842451e6d"],["F:/myBlog/public/archives/page/9/index.html","92ca7b7e44f8565f5708655143d20e82"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Docker/index.html","a04312e0a7809737a5e2872b76a044c1"],["F:/myBlog/public/categories/Docker/page/2/index.html","34464b31bd061adad74cd79436151f57"],["F:/myBlog/public/categories/Hexo博客/index.html","b5b7f5cb756a93e2cf9ecc4c14a172c8"],["F:/myBlog/public/categories/JVM/index.html","c1d2c6e51704257f30a20468f4bb72d5"],["F:/myBlog/public/categories/Linux/index.html","b7d648f57e83fde5ce3171d81ca13a63"],["F:/myBlog/public/categories/Linux/page/2/index.html","c197c7b62b517ee84172b8fbf99f2ae3"],["F:/myBlog/public/categories/index.html","0ab3bfd1e61b26076a42aa8364436bdb"],["F:/myBlog/public/categories/中间件/RabbitMQ/index.html","1a2c40b86c2595bdc0fa7bdd1e9099b6"],["F:/myBlog/public/categories/中间件/index.html","7f3fea962161e1bee75cbbd54ae0f18e"],["F:/myBlog/public/categories/工具/Git/index.html","df13abecbd936e3c5054ba066551d2f9"],["F:/myBlog/public/categories/工具/IDEA/index.html","f60a18aab45425ba6b29e44a03620994"],["F:/myBlog/public/categories/工具/Maven/index.html","10028a75d5b370cdd998ac01c3380b88"],["F:/myBlog/public/categories/工具/index.html","d6347aeb865ab2374f8109b22a44c298"],["F:/myBlog/public/categories/面试/index.html","d977d92e35e01221e6ee9eb2a6acacdc"],["F:/myBlog/public/categories/面试汇总/index.html","425c9d6bc2bdbe6bc4fab13ab6078d1d"],["F:/myBlog/public/categories/面试汇总/page/2/index.html","c8cda3c3600cb875844a04bba9fe2396"],["F:/myBlog/public/categories/面试汇总/page/3/index.html","e3becfd92f7e6f8d215b9a6ca6093bde"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/AQS/index.html","81004814cd98af52ca3b26a7a8c86509"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/Redis/index.html","8f3a9e52e55e795ed1c0b544ba52efb8"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/index.html","44623470d646b8ec80a53d9d0ca94e9c"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/index.html","51c1abc28538b280b006b95f2044c724"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/page/2/index.html","f08b61b755a180ca8ab09ec8f5ebcacf"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JVM/index.html","2e428e6ebbc0b4c05b5a152f0f464527"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/Linux/index.html","69805f8ce686875fdcb2654a34449f21"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/github/index.html","eeb411f97ccaca96659fa6ce91899e55"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/index.html","1dd2e12215d6856497d7a654b2e05741"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/page/2/index.html","377de348af2c0046b287a85d4dd3ad46"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/background.png","ae68d47378dae9d8953dc3002417cb34"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","0ea3cdb9c8c0480ea40543a637e0e4fd"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","ad85da220f6090f87b2eac3bc8f8f436"],["F:/myBlog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["F:/myBlog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/myBlog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/myBlog/public/music/index.html","9bcbae5ac95c01e9dbfe218718eded77"],["F:/myBlog/public/page/2/index.html","67182c64c27397bd5f7f9e728c22f476"],["F:/myBlog/public/page/3/index.html","ef0e7d5544e889fb603cb7b5d42d7ae3"],["F:/myBlog/public/page/4/index.html","42599f4e1d10a40c1e0b44ea6d7fe5a9"],["F:/myBlog/public/page/5/index.html","1d25a971851c26523a6f431cdd7dfde8"],["F:/myBlog/public/page/6/index.html","ed770193e274cf4c76c36bf0f1ab3963"],["F:/myBlog/public/page/7/index.html","bed9752be0c73743b47ed72dedb47fea"],["F:/myBlog/public/page/8/index.html","f726c59804451a0c924b3a386d6965b2"],["F:/myBlog/public/page/9/index.html","3d8c1b275e213355b273228c90c0faff"],["F:/myBlog/public/tags/AQS/index.html","2846cbc0592e41450c0df2feedfb650b"],["F:/myBlog/public/tags/Butterfly主题/index.html","00e3848d4be36966fc53a012d775b12b"],["F:/myBlog/public/tags/CAS/index.html","a65c521d5ec9c617f998539ac221f002"],["F:/myBlog/public/tags/Collection/index.html","db0931a8e76a19f506c4a151e247dca3"],["F:/myBlog/public/tags/Docker/index.html","b289f8c2854ec35e763db1a16643c0e9"],["F:/myBlog/public/tags/Docker/page/2/index.html","9ad399307b43b0bb76af35426b921d38"],["F:/myBlog/public/tags/Git/index.html","49876cc43fa6aa39bde9bfca750015de"],["F:/myBlog/public/tags/Github/index.html","7039753acae41bde7f4e6a46e7c46a6e"],["F:/myBlog/public/tags/Hexo/index.html","03ae56218b8448d4e47f89dcb34d8496"],["F:/myBlog/public/tags/IDEA/index.html","f2bc7167afc599f2bcf9bc42336e4b10"],["F:/myBlog/public/tags/JUC/index.html","390d7c21e1dfa5cea6c09c1cff6c86ab"],["F:/myBlog/public/tags/JUC/page/2/index.html","c752ab77475ae74d83a45ed13384d926"],["F:/myBlog/public/tags/JVM/index.html","ade1be362a8b3b8ffd6c7183f6f46cd0"],["F:/myBlog/public/tags/JVM/page/2/index.html","98cefcf36a44d79b9ee2b4442d338152"],["F:/myBlog/public/tags/Linux/index.html","3a4488b251f35501a98162ead81d6e8c"],["F:/myBlog/public/tags/Linux/page/2/index.html","7c9843cf03231b4366ad61245a7c8d9e"],["F:/myBlog/public/tags/LockSupport/index.html","351b7bb0b326b4755245520f26685ddf"],["F:/myBlog/public/tags/Maven/index.html","122c759e8bfbfcfe13cbb22e1bbde768"],["F:/myBlog/public/tags/Redis/index.html","a4a79bf9efd509a14e01c2d326baa0c2"],["F:/myBlog/public/tags/Synchronized/index.html","1b6b04097f66fbc52ed3b2913830c1f6"],["F:/myBlog/public/tags/Typora/index.html","340ab4c3a02012ac992c6fa8993ebb84"],["F:/myBlog/public/tags/Xshell/index.html","d1f990f410b1603efae3c519df8d521d"],["F:/myBlog/public/tags/index.html","2a09cc1268fc4132c8eb3803dcf63ce9"],["F:/myBlog/public/tags/volatile/index.html","874eb2202372d1f359716e376338af5f"],["F:/myBlog/public/tags/中间件/index.html","c86ab6c32a4c0d18a84fadba8d9284f4"],["F:/myBlog/public/tags/值传递/index.html","1dab0d127d01e2eee7e07569d93b78af"],["F:/myBlog/public/tags/分布式/index.html","a1c37c99bd07c2a513059795163ddd31"],["F:/myBlog/public/tags/分布式锁/index.html","ae1e0669e292c3c780a58a6a0816734f"],["F:/myBlog/public/tags/可重入锁/index.html","e78a58e3fbcf7d1ca7111954b46b4647"],["F:/myBlog/public/tags/线程池/index.html","ce5c06176f495b916663435e0f1f91c0"],["F:/myBlog/public/tags/锁/index.html","9c6aee1cc45c6a7309d7e6b84c3bf24a"],["F:/myBlog/public/tags/队列/index.html","67011b77ddcfa64b0a78c09ac20e5d74"],["F:/myBlog/public/tags/面试/index.html","17a5b92174c77010ac3d368babb9bd96"]];
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







