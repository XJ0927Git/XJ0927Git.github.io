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

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","d997c9e07d850a0b1e59cc1eaabe83f8"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","03a8a88e92c678d7a7e17358c7deb69d"],["F:/myBlog/public/2020/01/01/配置模板/index.html","a54f1775e0abea3b85c614d2c829fd9a"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","ab547e2881113ce166f348c894a1d3b0"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","e3c97dd750293da6e03a8455d0d81db2"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","17f4893d72ffa965f4179f3da3268a3c"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","9a454499d20685884022025edaccd4b3"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","a3816e585d593f637d1d1d243325f6be"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","5612cb161f131a368a3085002b4759f0"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","d948c3beef0c4531ace595137c0074da"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","e3b58a1408205414358d5a6093a05f8e"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","90cda9a1a574feb91d8d5ed108a78c1a"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","8bf92654b4caa49656e7241cd27d01b3"],["F:/myBlog/public/2021/02/17/Docker/1-Docker-简介/index.html","0602a748fcce68ffd55a54e2261dce1d"],["F:/myBlog/public/2021/02/17/Docker/10-Docker-私有仓库/index.html","dc17c966fb5bf292a64bac9dfcfe7cda"],["F:/myBlog/public/2021/02/17/Docker/2-Docker安装/index.html","1a2d367fcc5976f48db65d10edae16fd"],["F:/myBlog/public/2021/02/17/Docker/3-Docker常用命令/index.html","a6606ce99d491acaecfe1496028c61ab"],["F:/myBlog/public/2021/02/17/Docker/4-Docker-镜像/index.html","dc3c06053f1e37a9d82303b1e2461fb1"],["F:/myBlog/public/2021/02/17/Docker/5-Docker容器数据卷/index.html","e55c8c66abab44805c456ecfd0a05e18"],["F:/myBlog/public/2021/02/17/Docker/6-DockerFile-解析/index.html","65ffa565072e28b4910e7105a95d6536"],["F:/myBlog/public/2021/02/17/Docker/7-Docker常用安装/index.html","93c156bc435e928d4fc51ae2c34e359c"],["F:/myBlog/public/2021/02/17/Docker/8-本地镜像发布到阿里云/index.html","cf08c21b4b8e59429c74c75dd61f5ae2"],["F:/myBlog/public/2021/02/17/Docker/9-服务编排/index.html","f050084885ea45988bd176fe4a8b46c6"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装-ElasticSearch-5-6-8/index.html","1d8c3ca9da9466f89143dc1e7d830f30"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装ElasticSearch-6-8-0/index.html","e2fef5989e71b6e86f16cdea9f537ca8"],["F:/myBlog/public/2021/02/17/Linux/0_在VM虚拟机下安装-Linux/index.html","86c9301dd2941009c787c7fcba347e08"],["F:/myBlog/public/2021/02/17/Linux/10-Linux-基本命令/index.html","451022ad9be27184eddf2c9f5082adfb"],["F:/myBlog/public/2021/02/17/Linux/11-Linux-安装-JDK8/index.html","d894bf835670439ad7565a782a372b3a"],["F:/myBlog/public/2021/02/17/Linux/12-Linux安装MySQL/index.html","a33b834643ac997895cf3abf5a48ae89"],["F:/myBlog/public/2021/02/17/Linux/1_Xsell连接Linux/index.html","44bfce2577e568e99e6d4f44bfa049df"],["F:/myBlog/public/2021/02/17/Linux/2_CentOs 6 修改 IP 地址/index.html","e90992f7baf20b701a5bc8f661b79957"],["F:/myBlog/public/2021/02/17/Linux/3-CentOs-7修改-IP-地址/index.html","518d16a10c23414ec073183115e0b8d9"],["F:/myBlog/public/2021/02/17/Linux/4-设置主机名访问任意主机/index.html","677841ed7be12b370f1c38ec6ff9d782"],["F:/myBlog/public/2021/02/17/Linux/5-CentOs-7-连接外网的解决办法/index.html","23e046c1aa8fbfe85dfa33679d868343"],["F:/myBlog/public/2021/02/17/Linux/6-更改系统语言/index.html","b864091dfaa29cfc33920147e7d833ee"],["F:/myBlog/public/2021/02/17/Linux/7-本地文件上传到Linux/index.html","322d3bb35ecbc1e96199066847c349b8"],["F:/myBlog/public/2021/02/17/Linux/8-CentOs-下安装-Tomcat/index.html","56e9682050ba1b9a9f76616df83d625d"],["F:/myBlog/public/2021/02/17/Linux/9-CentOs-设置防火墙及开放端口/index.html","4f58898e60e1e9ac4fff6a2cf20b8e12"],["F:/myBlog/public/2021/02/17/工具/Git/index.html","4ad5ff06a3081ef2ec06c98ab0d30452"],["F:/myBlog/public/2021/02/17/工具/Maven/index.html","a7c453d28abb1adb3fc7eb160f230d7f"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/1-可重入锁/index.html","69827184abded8f089d6711c7da3c639"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/2-LockSupport/index.html","b12ebd1158439e904adee77b1965e2a3"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/AQS/3-AQS/index.html","115677fa3dd06949e9f5179ff3e496a9"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/1-安装Redis/index.html","ee9ff4856234e7e7d35e04b2e9b96018"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/2-redis传统五大基本类型的落地应用/index.html","860998366da6463845d9f66fe24ed6b1"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/3-分布式锁/index.html","434fc072fdc314070009b0f9e38ba786"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第三季_周阳老师/Redis/4-redis缓存过期淘汰策略/index.html","637506fa65fb717f5d84c865ef0eeecd"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Github 学习/Github学习/index.html","e4f8323eaa9f8b2b1b91489a9d055e47"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/1-谈谈volatile/index.html","8fd7b051b66388b85393386a353b7412"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/10-线程池/index.html","b32bc7712ba102d17821f243dc8dc447"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/11-死锁编码及快速定位/index.html","0c8b43bbd78a5b9337ea536654ff2bf5"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/2-CAS-底层原理/index.html","9e35f13b6aad9720c6b0b3e8389d0167"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/3-谈谈原子类的ABA问题/index.html","c05b172fe17de83ae825f4ace1c16735"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/4-Collection-线程不安全的举例/index.html","2334b8920d08fffdaaca488322bdd875"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/5-TransferValue-是什么/index.html","a875bea97e54b855743529127bd7d12b"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/6-Java-的锁/index.html","856c7c722b3200ca6152b2e1ffcddbff"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/7-CountDownLatch-CyclicBarrier-Semaphore使用/index.html","02cce4512f4bfac55d3964bef1186459"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/8-阻塞队列/index.html","b2328c87ab216fcf4a2a7d8912e2d741"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JUC/9-Synchronized-和-Lock-的区别与好处/index.html","2810fb510fdc75eda6ff4cd46c0382e3"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/0-JVM体系结构/index.html","dac854840f12acadd6386ff3ed2fa4fc"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/1-GC-Roots分析/index.html","c5a0592eb31fb2861997f1f55bffa032"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/2-JVM参数调优/index.html","71ba7ac48da517fe687e0228a2c2e152"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/3-Java中的引用/index.html","7a578720ea296b701aa8ca6fb5f27a53"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/4-Java内存溢出OOM/index.html","f178bab8119f15ea2f7afefb493e1c10"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/JVM/5-垃圾收集器/index.html","d480a45589009392c5b6b740bd23131a"],["F:/myBlog/public/2021/02/17/面试汇总/大厂面试第二季_周阳老师/Linux/Linux诊断原因/index.html","1d3ae86249b610ab00f36f84ad9fa6a4"],["F:/myBlog/public/2021/02/18/面试/项目介绍/项目介绍/index.html","46f7e44bfe0c878d86170db80638cb97"],["F:/myBlog/public/2021/02/19/JVM/1-JVM体系结构与类加载系统/index.html","0bae494d8538e1ec3bd134959874b96d"],["F:/myBlog/public/2021/02/19/JVM/2-运行时数据区概述及线程/index.html","d50d787c2984848a088ff2291b52a90f"],["F:/myBlog/public/2021/02/19/JVM/3-程序计数器/index.html","44a48c3ce476b8f131b39d0e8cb06aaf"],["F:/myBlog/public/2021/02/19/JVM/4-本地方法接口/index.html","b328ece89e5ff9dd92577974881eff60"],["F:/myBlog/public/2021/02/19/JVM/5-本地方法栈/index.html","593180a24e51aaecbb8548031e31760a"],["F:/myBlog/public/2021/02/19/JVM/6-Java-虚拟机栈/index.html","c82e8d597ea2288e163ee272b7c29ba1"],["F:/myBlog/public/2021/02/19/JVM/7-方法区/index.html","f3df44f981e040d523200ab5dc05a542"],["F:/myBlog/public/2021/02/19/JVM/8-Java堆/index.html","460e657e14fcc39f260f2216d1ac535c"],["F:/myBlog/public/2021/02/19/JVM/9-GC-四大算法详解/index.html","a1d22c5c35d0101ca4f08084fd9f1a89"],["F:/myBlog/public/2021/02/19/中间件/0-RabbitMQ简介/index.html","bb51a4bcde51cccf6eeebf8f27740b7b"],["F:/myBlog/public/2021/02/19/中间件/1-RabbitMQ-的安装/index.html","1fac106fd8ec4ba49ecc6cc397d0d055"],["F:/myBlog/public/2021/02/19/中间件/2-web管理界面介绍/index.html","a502d18f4330e8d9084c4295006c003e"],["F:/myBlog/public/2021/02/19/中间件/3-RabbitMQ协议与消息模型/index.html","ded7eae153f1c6ef399d1c80c87c7826"],["F:/myBlog/public/2021/02/19/中间件/4-Java-实现RabbitMQ/index.html","408ab39b18b85aa52514a98c76e97114"],["F:/myBlog/public/2021/02/19/中间件/5-RabbitMQ连接工具类封装/index.html","37083b9464a83090c7d6ce71d13c5598"],["F:/myBlog/public/2021/02/19/中间件/6-SpringBoot-实现RabbitMQ/index.html","48230d1e00b82185ea7495983e67410b"],["F:/myBlog/public/2021/02/19/中间件/7-MQ的应用场景/index.html","952e32a790ec516b64d551ba038bf06b"],["F:/myBlog/public/2021/02/19/中间件/8-RabbitMQ-集群/index.html","bebaa611c61199cfb4c380b8c3714da5"],["F:/myBlog/public/2021/02/19/中间件/9-RabbitMQ高级特性/index.html","2aca7ae4adf6fd88b4a1fa3b41676f32"],["F:/myBlog/public/2021/02/19/前端知识/CSS/CSS与CSS美化页面/index.html","fdf0aa9cb3b8ec83f3969dacf10d2b40"],["F:/myBlog/public/2021/02/19/前端知识/HTML/HTML5常用标签/index.html","71487c5d837966dc061a937a663a51bc"],["F:/myBlog/public/2021/02/19/面试/微服务-分布式/微服务-分布式/index.html","0b619cc71c8fa3376df52d1842bcfe51"],["F:/myBlog/public/2021/02/20/设计模式/2-原型模式/index.html","7b5821ce0b263ba19e640c7f0487bed9"],["F:/myBlog/public/2021/02/20/设计模式/七大原则/0-设计模式七大原则简介/index.html","9a0d44db9ea4b8e1db3f2338b4d3effc"],["F:/myBlog/public/2021/02/20/设计模式/设计模式/1-工厂模式/index.html","0c7f675da3fdfc6a1a530a6c32594929"],["F:/myBlog/public/2021/02/22/面试总结/面试总结/index.html","0d5adc3e82949da6a85edc9f80f620e1"],["F:/myBlog/public/2021/02/25/FastDFS/FastDFS/index.html","6be5578e1a91d27161b4bd128ad5c6dc"],["F:/myBlog/public/404.html","71cc716e996b5f4f60002b6c7bc69c87"],["F:/myBlog/public/Gallery/index.html","f8740763b1fdfac11c32e4c0e4fc4c31"],["F:/myBlog/public/Gallery/photos/index.html","ebf88f51aec6742708fe25980433ae87"],["F:/myBlog/public/Gallery/wallpaper/index.html","4d28eaa5d39ed2f43c3685755b8e2669"],["F:/myBlog/public/about/index.html","9c24c72bcf3fe0fed27ac3ce591b1f57"],["F:/myBlog/public/archives/2020/01/index.html","d3c08401ed9bc17a77a18c4f3f66bdcc"],["F:/myBlog/public/archives/2020/index.html","4f866fea396b0b17cb5ca920cb45d823"],["F:/myBlog/public/archives/2021/02/index.html","30ed3129f06f0befd7ad06c8b5cd9e50"],["F:/myBlog/public/archives/2021/02/page/2/index.html","0d321ce28a81084c3653f46884fa8e4d"],["F:/myBlog/public/archives/2021/02/page/3/index.html","7f1d47b7803ebf9b6ff0f2bdac652a91"],["F:/myBlog/public/archives/2021/02/page/4/index.html","ab5c1ab20e738a870d3b62235a86b83a"],["F:/myBlog/public/archives/2021/02/page/5/index.html","67457c403c1d5ad398b75c78ea1cec4e"],["F:/myBlog/public/archives/2021/02/page/6/index.html","42c8b2b22ccc3dc9def28032f423d868"],["F:/myBlog/public/archives/2021/02/page/7/index.html","d769529b0c0b269d0965ca5b82dbec5d"],["F:/myBlog/public/archives/2021/02/page/8/index.html","019e9a49dfa51a3b95ef20eb7088e3c9"],["F:/myBlog/public/archives/2021/02/page/9/index.html","eb0584c6e0f52866da3eb6aea21f8f6c"],["F:/myBlog/public/archives/2021/index.html","bee3dd0634df00c3033424fba74c2672"],["F:/myBlog/public/archives/2021/page/2/index.html","8da994e2b7c12223bd7b54a0c98b511d"],["F:/myBlog/public/archives/2021/page/3/index.html","92670e62b7153b03ae6550f8753263f2"],["F:/myBlog/public/archives/2021/page/4/index.html","ae9de2462474192800bf462416dbdc04"],["F:/myBlog/public/archives/2021/page/5/index.html","c3ff0f95faebda3243b26fc9f588d42f"],["F:/myBlog/public/archives/2021/page/6/index.html","6a212205324914b151de34fef8aa1445"],["F:/myBlog/public/archives/2021/page/7/index.html","433bd864d0bb2a35b81e80a8000e9e57"],["F:/myBlog/public/archives/2021/page/8/index.html","90da36577db3a25ff1211e17388d0e21"],["F:/myBlog/public/archives/2021/page/9/index.html","67b9c688d60559aca617bf4b6631d5a0"],["F:/myBlog/public/archives/index.html","0dc51801884ae398d02bcacb9ba8291f"],["F:/myBlog/public/archives/page/10/index.html","ae6c376ba7a438b9f29395b50dc6f7cd"],["F:/myBlog/public/archives/page/2/index.html","f4706864100b4e2b7308f4a582b5cddf"],["F:/myBlog/public/archives/page/3/index.html","015854b5fc90c751750c8a7e1758dcbb"],["F:/myBlog/public/archives/page/4/index.html","8db021848876a7690798afa8088d469a"],["F:/myBlog/public/archives/page/5/index.html","364d846b7ef99f0a4d205ff7150a6702"],["F:/myBlog/public/archives/page/6/index.html","439c23dc4444b2a69ab95ba1acdb8e01"],["F:/myBlog/public/archives/page/7/index.html","c33caaca8730ff234cb9a90a97ad826b"],["F:/myBlog/public/archives/page/8/index.html","e137c7da274bc14844080dba3249a176"],["F:/myBlog/public/archives/page/9/index.html","828a52c940340e1f634ca10449ae9679"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Docker/index.html","d782c6c4e1b0828996fc9c861a68bcf5"],["F:/myBlog/public/categories/Docker/page/2/index.html","5acf9acd6f402c95e80da43f5631b656"],["F:/myBlog/public/categories/Hexo博客/index.html","604ad592299c94d7cbf88007bdf5c3dd"],["F:/myBlog/public/categories/JVM/index.html","bf50f255a1bf0d297b17d067c632d195"],["F:/myBlog/public/categories/Linux/index.html","ba8914c534a9e697d863ceb21a956e86"],["F:/myBlog/public/categories/Linux/page/2/index.html","dd57fdbd585075be43ce4cb0c423a588"],["F:/myBlog/public/categories/index.html","35570f1cd0bff31c293d9fc0a1e3629d"],["F:/myBlog/public/categories/中间件/RabbitMQ/index.html","dfa79e2c8fe7025abda3ec14d63d29b6"],["F:/myBlog/public/categories/中间件/index.html","cd30d0c330517e95154ce6e3917358c6"],["F:/myBlog/public/categories/前端知识/CSS/index.html","160cdee60e79cc567793d6f5e96ae8bf"],["F:/myBlog/public/categories/前端知识/HTML/index.html","c89ccd16c60e2c6b362452cbc3f62b50"],["F:/myBlog/public/categories/前端知识/index.html","9e3b1e1978d945d569362579f0ff52b3"],["F:/myBlog/public/categories/工具/Git/index.html","df1161aacf19e3628af2733c44bef147"],["F:/myBlog/public/categories/工具/IDEA/index.html","af93a54715a37eaa34ae7b7fba900213"],["F:/myBlog/public/categories/工具/Maven/index.html","cf3065d9131b0d6d66e13c91b3cbe868"],["F:/myBlog/public/categories/工具/index.html","3e3041a470f569be9a022da01f3c6b28"],["F:/myBlog/public/categories/微服务/FastDFS/index.html","08ad74020f2a8629a79cd137922c2006"],["F:/myBlog/public/categories/微服务/index.html","f3d1f630f64e2f17b1834e0289dfb6c8"],["F:/myBlog/public/categories/设计模式/index.html","015ea50cf8b85514f1dc569588ed1c48"],["F:/myBlog/public/categories/设计模式/工厂模式/index.html","405903f13048e78078e07aa85199d08e"],["F:/myBlog/public/categories/面试/index.html","24340e7ec46bb15d989e16573237d053"],["F:/myBlog/public/categories/面试总结/index.html","2e11d7a62f0a644399f21d6c52161faa"],["F:/myBlog/public/categories/面试汇总/index.html","86989cb92db752e823d0dfdcb5c92dca"],["F:/myBlog/public/categories/面试汇总/page/2/index.html","02e61e1cf5f28929d259ace140d88ff9"],["F:/myBlog/public/categories/面试汇总/page/3/index.html","6ca526af6e4a43a2d1b67054a48aa63b"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/AQS/index.html","d5d67a5863975ec77a546bd6fc3bea8c"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/Redis/index.html","d96039dbc80e81c45711325ac80c5466"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/index.html","bf4bc0628b7f21a092d30c36a8c147bf"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/index.html","6546ea95b86fac593dfb0a2a4ec55d6b"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/page/2/index.html","ce7e0a53f00e7c351ad8fa1f1a9c6013"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JVM/index.html","db053e4e786123e4fb6a752f4eeabcf0"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/Linux/index.html","c852964db429a7f1ceffe329a0ff4903"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/github/index.html","90c9b4569f266bb059522ca6d0f83d39"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/index.html","1520d79f592c1b8bbac0c609a709ef0b"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/page/2/index.html","fa810f83e0ce619c7fba10cc3074fa09"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/background.png","ae68d47378dae9d8953dc3002417cb34"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","b4df6bdab4eed231f5d7cf51ea51a905"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","d10fbad3359c3670a6c885978935f858"],["F:/myBlog/public/music/index.html","0a5c07558189d193153ec6a064e0002a"],["F:/myBlog/public/page/10/index.html","4f31fea2980edc28e1bc9a95cd4bdc84"],["F:/myBlog/public/page/2/index.html","64ac63361de44576bdf820ab201df648"],["F:/myBlog/public/page/3/index.html","d0455b3f4bf268dfa9031e46a469752a"],["F:/myBlog/public/page/4/index.html","1c35f7a622779717c9162eb79d7f2cba"],["F:/myBlog/public/page/5/index.html","144c431ebcb00f10de40c8b8194c7063"],["F:/myBlog/public/page/6/index.html","4b806a0911571f082a64aa48436c326e"],["F:/myBlog/public/page/7/index.html","8effd786c9d7522b13666a7377a052e2"],["F:/myBlog/public/page/8/index.html","4260a8ce6fbdb8b52fc67383b342211e"],["F:/myBlog/public/page/9/index.html","0cf5cb308a16c9f66887d1740bf0e368"],["F:/myBlog/public/tags/AQS/index.html","b7a1d445473c70e1dddf666fd823dc70"],["F:/myBlog/public/tags/Butterfly主题/index.html","5ac5eff3369d89f0b00f4dd273e2eb72"],["F:/myBlog/public/tags/CAS/index.html","f38feb95a5d6c5c2c511a5311ac0a5ab"],["F:/myBlog/public/tags/CSS/index.html","0284385bf242ed4c5e651e1449c68d9e"],["F:/myBlog/public/tags/Collection/index.html","a230498e7647ddd2ca467df711dabd73"],["F:/myBlog/public/tags/Docker/index.html","b3e71f004ec38844376726588b4e2d4e"],["F:/myBlog/public/tags/Docker/page/2/index.html","65235ef84ef47ebd4e3a90375adcce95"],["F:/myBlog/public/tags/Git/index.html","4b505be6f955ce5d64e65f0cd015bf25"],["F:/myBlog/public/tags/Github/index.html","bc5a8feccd78db1fe8dfd97dd528f573"],["F:/myBlog/public/tags/HTML/index.html","a4973a2d1386e6c24548a52b89b48ed8"],["F:/myBlog/public/tags/Hexo/index.html","d435df08ea071c7668690b3d726c3822"],["F:/myBlog/public/tags/IDEA/index.html","e90cd87b9e129de44690a7c21b2def4d"],["F:/myBlog/public/tags/JUC/index.html","c0bdb397272d399c404859dc15e9ad49"],["F:/myBlog/public/tags/JUC/page/2/index.html","7e75f071d5257e48b8d7ba5ed4f73f1c"],["F:/myBlog/public/tags/JVM/index.html","cd3379abf08f60eab2598814a6f06ea6"],["F:/myBlog/public/tags/JVM/page/2/index.html","6b447d73e4318d0a3499de61c7ea1ad3"],["F:/myBlog/public/tags/Linux/index.html","ff64e986682e8d3633486db164e54072"],["F:/myBlog/public/tags/Linux/page/2/index.html","fb8f3e21bc9841822ac1e6e1bf644116"],["F:/myBlog/public/tags/LockSupport/index.html","82953bd3928e5c96adf4a3d2a2649d5a"],["F:/myBlog/public/tags/Maven/index.html","4ebfd1c66211fd05aca8ffe690624199"],["F:/myBlog/public/tags/Redis/index.html","5e72179626f25cc7efa1f1c679d028ac"],["F:/myBlog/public/tags/Synchronized/index.html","db225e5d9e547d79ba134ebaefcda111"],["F:/myBlog/public/tags/Typora/index.html","a555cbc0af568dfdb4cfc1baf1c2b8b3"],["F:/myBlog/public/tags/Xshell/index.html","06e7fba79aac1f27a32ad09ef6cd8a92"],["F:/myBlog/public/tags/index.html","50a79acc6b42560b2890c68b062c1156"],["F:/myBlog/public/tags/volatile/index.html","666789640d3a68c6e87331d75c3b7eb9"],["F:/myBlog/public/tags/七大原则/index.html","cbbb90b0b276f70e98604ffda34a46c5"],["F:/myBlog/public/tags/中间件/index.html","4380817f605373c7618f1249e2668e11"],["F:/myBlog/public/tags/值传递/index.html","062d0e98d25b6cf425863443b5eabf83"],["F:/myBlog/public/tags/分布式/index.html","15a1a217c837927470d53cb570c0c197"],["F:/myBlog/public/tags/分布式锁/index.html","ef45827872176ce283058ca3ec5b1661"],["F:/myBlog/public/tags/可重入锁/index.html","30f145f90aee75522246804b69625929"],["F:/myBlog/public/tags/线程池/index.html","17d1a8728b640df7eb46a4bd20b6817e"],["F:/myBlog/public/tags/设计模式/index.html","434b6540c243a0077de0cb3514e39ca6"],["F:/myBlog/public/tags/锁/index.html","a2282469c7144c9f7c5657af976ff520"],["F:/myBlog/public/tags/队列/index.html","33cfbfda80d072d936b85043f775facd"],["F:/myBlog/public/tags/面试/index.html","330738997228f7559024e446100af184"],["F:/myBlog/public/tags/面试总结/index.html","47783d885e9662346651e6e0ccaa3268"]];
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







