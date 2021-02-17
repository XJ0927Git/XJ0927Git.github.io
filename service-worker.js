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

var precacheConfig = [["F:/myBlog/public/2020/01/01/Hexo博客/1-为什么选择Hexo/index.html","c126d94f1b35c7d9c0261293dd012c47"],["F:/myBlog/public/2020/01/01/Hexo博客/2-Hexo本地部署/index.html","84fb059cc78a1088373d5e8adabe25d9"],["F:/myBlog/public/2020/01/01/配置模板/index.html","6bbdd98f5a2f55689935ac1cded96cce"],["F:/myBlog/public/2020/01/02/Hexo博客/3_部署到Gitee/index.html","1c3b6a9e5b7ecdc73d379d112e35ee45"],["F:/myBlog/public/2020/01/02/Hexo博客/4_Hexo部署到Github/index.html","f2e836f7577f105fce3b24c65346741b"],["F:/myBlog/public/2021/02/11/Hexo博客/5_Hexo终极部署Github-Vercel/index.html","60c0856acd1b05b014ef9ff7691f3ddb"],["F:/myBlog/public/2021/02/14/Hexo博客/6_Typora-PicGo-Gitee实现图片上传/index.html","68eb8abbfdd14fc585e51c37b6297628"],["F:/myBlog/public/2021/02/14/IDEA/10_IDEA-2019-3-4完美破解-亲测有效/index.html","1de2ad68fd29b8b200a8df60041b52f9"],["F:/myBlog/public/2021/02/14/IDEA/11_IDEA常用快捷键/index.html","7b732336d25016ddcb3445dd21e9334d"],["F:/myBlog/public/2021/02/14/IDEA/12_Debug调试/index.html","73e19d6568b96e330ccd9c80540f1f0b"],["F:/myBlog/public/2021/02/14/IDEA/7_给-IDEA-换个养眼的主题/index.html","e097d1169f3a927234edc43b4a1a0414"],["F:/myBlog/public/2021/02/14/IDEA/8_IDEA-类注释-方法注释的快捷设置/index.html","e15e9fe4b874380374d71006b228b636"],["F:/myBlog/public/2021/02/14/IDEA/9_IDEA单元测试/index.html","bc404d6921042196f0337b07d64908d5"],["F:/myBlog/public/2021/02/17/Docker/1-Docker-简介/index.html","4a0dbde8b9aaf4e17a4a79a0096451f0"],["F:/myBlog/public/2021/02/17/Docker/10-Docker-私有仓库/index.html","82511cd97169099f6b0578a94da5fb8a"],["F:/myBlog/public/2021/02/17/Docker/2-Docker安装/index.html","c0f3e924c01ccb10071c8760ee267f57"],["F:/myBlog/public/2021/02/17/Docker/3-Docker常用命令/index.html","ddf090334484623576ed3a162d916443"],["F:/myBlog/public/2021/02/17/Docker/4-Docker-镜像/index.html","3cf5b8ebc51cb1611feb90ea63ffc4c4"],["F:/myBlog/public/2021/02/17/Docker/5-Docker容器数据卷/index.html","62d2c5ef3896fca148a3512c1ff843bc"],["F:/myBlog/public/2021/02/17/Docker/6-DockerFile-解析/index.html","b6123b7c6e7f6adb385d0827ba43e9e8"],["F:/myBlog/public/2021/02/17/Docker/7-Docker常用安装/index.html","2e50388e316116b474f3bf765b08978a"],["F:/myBlog/public/2021/02/17/Docker/8-本地镜像发布到阿里云/index.html","37b5dccf164baa38db8a2ce688fde4c8"],["F:/myBlog/public/2021/02/17/Docker/9-服务编排/index.html","32006fb7e4e9ef90ce26ad24c8568463"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装-ElasticSearch-5-6-8/index.html","950d74f649962a44e37a6b796560f235"],["F:/myBlog/public/2021/02/17/Docker/Docker-安装ElasticSearch-6-8-0/index.html","6ee16d1966f611f4541a7fb4606168f0"],["F:/myBlog/public/2021/02/17/Linux/0_在VM虚拟机下安装-Linux/index.html","22c5f61cb9059b9787be367ce842471b"],["F:/myBlog/public/2021/02/17/Linux/10-Linux-基本命令/index.html","32c21a57dcf4c232d52d980bef009e71"],["F:/myBlog/public/2021/02/17/Linux/11-Linux-安装-JDK8/index.html","a6189fda4b9c90235c83f86373a44d96"],["F:/myBlog/public/2021/02/17/Linux/12-Linux安装MySQL/index.html","8a598feb678904f5209c088c2032ca71"],["F:/myBlog/public/2021/02/17/Linux/1_Xsell连接Linux/index.html","ac19e3287b4ccc5b154e6832e87357af"],["F:/myBlog/public/2021/02/17/Linux/2_CentOs 6 修改 IP 地址/index.html","e438053ef194533ce93ba7e9c3f5f14f"],["F:/myBlog/public/2021/02/17/Linux/3-CentOs-7修改-IP-地址/index.html","83b998d008ec37c59eb99c33f1169aee"],["F:/myBlog/public/2021/02/17/Linux/4-设置主机名访问任意主机/index.html","9ef0b2ad9b822960636933fc2304ff6a"],["F:/myBlog/public/2021/02/17/Linux/5-CentOs-7-连接外网的解决办法/index.html","2826c534f8120d1f4885f7a0a8f96a37"],["F:/myBlog/public/2021/02/17/Linux/6-更改系统语言/index.html","0b098783df3cbe16e36b53156941b53b"],["F:/myBlog/public/2021/02/17/Linux/7-本地文件上传到Linux/index.html","8c87840c8ba8dd21b217e769c8fa72ba"],["F:/myBlog/public/2021/02/17/Linux/8-CentOs-下安装-Tomcat/index.html","ff5b6e912b96255542fbf45254593353"],["F:/myBlog/public/2021/02/17/Linux/9-CentOs-设置防火墙及开放端口/index.html","803a5aff428722a8a38349e2790820a4"],["F:/myBlog/public/2021/02/17/大厂面试第三季_周阳老师/AQS/1-可重入锁/index.html","db68485c1258e98927229f6c8f73c9a3"],["F:/myBlog/public/2021/02/17/大厂面试第三季_周阳老师/AQS/2-LockSupport/index.html","a22c53075c0f130ed27849cf54151471"],["F:/myBlog/public/2021/02/17/大厂面试第三季_周阳老师/AQS/3-AQS/index.html","701b76831ab0c38fd80056c8e14a9ad5"],["F:/myBlog/public/2021/02/17/大厂面试第三季_周阳老师/Redis/1-安装Redis/index.html","f7f0cf37d15a8c5389fba8dcd8844e43"],["F:/myBlog/public/2021/02/17/大厂面试第三季_周阳老师/Redis/2-redis传统五大基本类型的落地应用/index.html","9a2e9343dce0b8e17cb42cfeff4dbd39"],["F:/myBlog/public/2021/02/17/大厂面试第三季_周阳老师/Redis/3-分布式锁/index.html","8178be00f42e6d85d3282c3934338ef5"],["F:/myBlog/public/2021/02/17/大厂面试第三季_周阳老师/Redis/4-redis缓存过期淘汰策略/index.html","79f396aceda4e5afea8f62d1c9cc394d"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/Github 学习/Github学习/index.html","0c1c9c58fd849aa362e06a5dd83a9ba9"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/1-谈谈volatile/index.html","262e72845182470ec86b1342ba9d94e0"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/10-线程池/index.html","7439b6a350222c5895da585947e73a13"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/11-死锁编码及快速定位/index.html","c502bd18802a5cd84d33c0c32952f2bb"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/2-CAS-底层原理/index.html","70f3592ecd81e3063b4543168c319a2d"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/3-谈谈原子类的ABA问题/index.html","9b160ea9f14b0f4e45daaeb663e82697"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/4-Collection-线程不安全的举例/index.html","3e944d63097ca4bb7e5fbba18cd2d652"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/5-TransferValue-是什么/index.html","b67fbb9b872cd0ce536318a62e31e7d2"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/6-Java-的锁/index.html","dee9c058ac0a9126d4350a21a74ab9cc"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/7-CountDownLatch-CyclicBarrier-Semaphore使用/index.html","574f788661764ad73b4090fbb27eec69"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/8-阻塞队列/index.html","6a2caf5f8e0a28f27b6de451c950f2ca"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JUC/9-Synchronized-和-Lock-的区别与好处/index.html","25c789e95815cfbab417bd35ad9959cb"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/0-JVM体系结构/index.html","e8d914eeb3b92e11a574aece3a886bd1"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/1-GC-Roots分析/index.html","6db3d702b31fe688baf37e53f42aafe0"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/2-JVM参数调优/index.html","d41108ac16aa350dfd6ffa93c0bf853d"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/3-Java中的引用/index.html","862c8ea35a115e06c01e6f7eab71d86f"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/4-Java内存溢出OOM/index.html","7c055b8abcde5b950ba55ef5bbfcaab8"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/JVM/5-垃圾收集器/index.html","7b9d51cd6ec04b0c8d1fc854da528c39"],["F:/myBlog/public/2021/02/17/大厂面试第二季_周阳老师/Linux/Linux诊断原因/index.html","f500bd6311ac887779097431c4745085"],["F:/myBlog/public/2021/02/17/工具/Git/index.html","e637de22b03858489285b81c59e3c9b9"],["F:/myBlog/public/2021/02/17/工具/Maven/index.html","31e58cf041fd5c91ee255de6a0cb973a"],["F:/myBlog/public/404.html","f3fc762207d0ad0e92045b91c982c546"],["F:/myBlog/public/Gallery/index.html","634d7d5c90d12c6826b7a4354cc00d6d"],["F:/myBlog/public/Gallery/photos/index.html","0f1cb801dcc5c92157c73a08a5fa2a75"],["F:/myBlog/public/Gallery/wallpaper/index.html","5ab0be475e6f407a3e03dd00bc2cb3e7"],["F:/myBlog/public/about/index.html","084af3fcafe3b1de3c527d1ca0fd30f6"],["F:/myBlog/public/archives/2020/01/index.html","044156229ad16754457a4b50eacfaa0c"],["F:/myBlog/public/archives/2020/index.html","4c79a9d4dacdac0bae89df43bde22664"],["F:/myBlog/public/archives/2021/02/index.html","aa53d697d6a7e8ab43ff001b2001ec8e"],["F:/myBlog/public/archives/2021/02/page/2/index.html","20e9dc0c6ad473184c692468a1c2e06b"],["F:/myBlog/public/archives/2021/02/page/3/index.html","5d89abcf12c092fee6c8f8723c10c8f8"],["F:/myBlog/public/archives/2021/02/page/4/index.html","cfbd4befcee61b00e9a315cd78b00ffd"],["F:/myBlog/public/archives/2021/02/page/5/index.html","5a39b6a175e69ad44060bf44bdf28089"],["F:/myBlog/public/archives/2021/02/page/6/index.html","d8d46a777df6427c6e23645049c706dd"],["F:/myBlog/public/archives/2021/02/page/7/index.html","f3b55e19253f2f494990cfeef81a7147"],["F:/myBlog/public/archives/2021/index.html","19dcc757aaefcb3a56cf3528b9e91c58"],["F:/myBlog/public/archives/2021/page/2/index.html","58ae6253bd648390aed829ebb7af2b1a"],["F:/myBlog/public/archives/2021/page/3/index.html","bc91d42fdb11d45445a9b777b693c1db"],["F:/myBlog/public/archives/2021/page/4/index.html","8aa6c1931d6bc0222cf7e60b16609fb6"],["F:/myBlog/public/archives/2021/page/5/index.html","18fb9237934d42400ed6934db535d285"],["F:/myBlog/public/archives/2021/page/6/index.html","fcbcd1f5f42a75faa89944482957533e"],["F:/myBlog/public/archives/2021/page/7/index.html","e611fa1fe6bdbcce2ad4d70b3980bde6"],["F:/myBlog/public/archives/index.html","84413c4468348c4f0f87f2e3065e1ebc"],["F:/myBlog/public/archives/page/2/index.html","a0e04aa259be2ce1ccee7aad50877494"],["F:/myBlog/public/archives/page/3/index.html","bccb69ae87d3f02b3830a946e2047f6a"],["F:/myBlog/public/archives/page/4/index.html","ce971ec9443ddeda1d1bf7ab3548ee72"],["F:/myBlog/public/archives/page/5/index.html","21c09384faf048bcb5a44197936f0dad"],["F:/myBlog/public/archives/page/6/index.html","9a2c30bbb5de1ee4e72c4b0b8f844e56"],["F:/myBlog/public/archives/page/7/index.html","bb7cb3acfd94e6746b7ba9156e479f56"],["F:/myBlog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["F:/myBlog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["F:/myBlog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["F:/myBlog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["F:/myBlog/public/categories/Docker/index.html","a143214c8c62d01ee8d347e9c87b4bd5"],["F:/myBlog/public/categories/Docker/page/2/index.html","79e4f2d46e49afba4905ecb717799517"],["F:/myBlog/public/categories/Hexo博客/index.html","dc9916a3583db065fda1cbbfc57c186d"],["F:/myBlog/public/categories/Linux/index.html","01999cf7fdbdd9197c5f3d9cae6051f3"],["F:/myBlog/public/categories/Linux/page/2/index.html","8028cf40ed216b00d4f6ee00f5938aab"],["F:/myBlog/public/categories/index.html","5428994afa8b68cd065661e7b6d70806"],["F:/myBlog/public/categories/工具/Git/index.html","1bfca3294ef0a2634c84ab6b7aaab08c"],["F:/myBlog/public/categories/工具/IDEA/index.html","548c300e355a3b61f6268fb70e90029d"],["F:/myBlog/public/categories/工具/Maven/index.html","4f8bec9e804129139ed09725745bd8bd"],["F:/myBlog/public/categories/工具/index.html","b72328a7fad13a0db071d7ff2e1e964f"],["F:/myBlog/public/categories/面试汇总/index.html","d4961934cbd5cccfa712df90cf7d3386"],["F:/myBlog/public/categories/面试汇总/page/2/index.html","9c33f73c301a42ea91a67ce8169370bb"],["F:/myBlog/public/categories/面试汇总/page/3/index.html","9d3dc01cbbe3bb67e3a63b687ee23f66"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/AQS/index.html","f9178716edf80dbac9888a534179de4f"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/Redis/index.html","e4e987ef76768e56c5b0ed932a0be9b9"],["F:/myBlog/public/categories/面试汇总/大厂面试第三季-周阳老师/index.html","eca2be2ec51a6fef513c18dbb2231290"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/index.html","a41c487bb5bc42ed35f7de220d87f19f"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JUC/page/2/index.html","f8e04f9e654218c16abcaab079e3f190"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/JVM/index.html","d098e61bdf6ea979eeac367d5a0d8e0c"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/Linux/index.html","362bf41aa52ec80c1d3182afd6f09e3d"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/github/index.html","1635741b4fd9826299152c39b56d6703"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/index.html","5b9409d27cfca6736d1a22ee6163b2c2"],["F:/myBlog/public/categories/面试汇总/大厂面试第二季-周阳老师/page/2/index.html","13065e83ae466bbd2707b5e3d8621369"],["F:/myBlog/public/css/index.css","d9c3b5b9b1b0c7b0f904dbbe302d16f4"],["F:/myBlog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/myBlog/public/img/1.jpg","87cbf4f0fa6df3f3ab26eb154d246be1"],["F:/myBlog/public/img/1.png","403f90e1dd168ddb49b52ae516cd0fa2"],["F:/myBlog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["F:/myBlog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/myBlog/public/img/alipay.png","7990b41e8ad5217a04bd2343221ef271"],["F:/myBlog/public/img/avatar.png","536cff414be1e52897a7fa461997801e"],["F:/myBlog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["F:/myBlog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/myBlog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/myBlog/public/img/red.png","78c70a1a612bdb3d494de4553715eda0"],["F:/myBlog/public/img/wechat.png","85d14bf3bf2da79e11f7571049d2e7ee"],["F:/myBlog/public/img/线性挂灯.png","039482113a9452598f7fd3a665462c39"],["F:/myBlog/public/index.html","82a26a77b57ae7148459afee938b1c4c"],["F:/myBlog/public/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["F:/myBlog/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["F:/myBlog/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["F:/myBlog/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["F:/myBlog/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["F:/myBlog/public/link/index.html","2d55e1ecc051d6ede72b6c014f0dd996"],["F:/myBlog/public/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["F:/myBlog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/myBlog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/myBlog/public/music/index.html","b0c377a8aa062215ef800c1c53b7b532"],["F:/myBlog/public/page/2/index.html","b198b83fdfdca279dd12d3ebba048daa"],["F:/myBlog/public/page/3/index.html","e9e2b1fea4edde77a5cc39ec8a614e9d"],["F:/myBlog/public/page/4/index.html","f6d9ba532085edd323ffa61160eb1a2a"],["F:/myBlog/public/page/5/index.html","2f65b1ba570f3e2081c2ff1231827a1c"],["F:/myBlog/public/page/6/index.html","6d9179b14e7cbd6e2051b3758cf1cfcf"],["F:/myBlog/public/page/7/index.html","69157be91eaa43155dd1d322ebf119ea"],["F:/myBlog/public/tags/AQS/index.html","a54a45562434594da6bb2b007df67a65"],["F:/myBlog/public/tags/Butterfly主题/index.html","31ab877708e3a5e4e104b747d58fcf56"],["F:/myBlog/public/tags/CAS/index.html","043d5114d7ae7abd51fb01cd1d7e4472"],["F:/myBlog/public/tags/Collection/index.html","472b1df052540dd8d26abc584b673761"],["F:/myBlog/public/tags/Docker/index.html","742ce5b83f91c53780df1f3dd5eef2a2"],["F:/myBlog/public/tags/Docker/page/2/index.html","abe7c24543d6fc1d64968e92f95b0ec9"],["F:/myBlog/public/tags/Git/index.html","5b609c3d45d4bc59411be5ab6f49131c"],["F:/myBlog/public/tags/Github/index.html","d11bbccfee3157447b2bf27d31699c5a"],["F:/myBlog/public/tags/IDEA/index.html","69396672d351dba2ce9e4fde5d0f6584"],["F:/myBlog/public/tags/JUC/index.html","bd6a64a682a6995bd14001f958f69a8d"],["F:/myBlog/public/tags/JUC/page/2/index.html","81e71a7e8338c9b757c493d26b70ea3b"],["F:/myBlog/public/tags/JVM/index.html","63ca90b39593ea2e1e5b7ffc4eff9d69"],["F:/myBlog/public/tags/Linux/index.html","73275d49b48539923114250522f4f1b3"],["F:/myBlog/public/tags/Linux/page/2/index.html","c12652f008a8d87dcafdc71916996b47"],["F:/myBlog/public/tags/LockSupport/index.html","371907a375389ca34ed27577b33804a0"],["F:/myBlog/public/tags/Maven/index.html","f4741d7fe63077b42138a7176cd09f8d"],["F:/myBlog/public/tags/Redis/index.html","d47c7854779979cdb6dd6a0a53bdb906"],["F:/myBlog/public/tags/Synchronized/index.html","b3cfc265c672eeb0489d492c00b7fdf7"],["F:/myBlog/public/tags/Typora/index.html","eb5089a787ae860e38b36e8477f5d257"],["F:/myBlog/public/tags/Xshell/index.html","e43fd0f4033a7e52df8f5777dc4e5ec1"],["F:/myBlog/public/tags/hexo/index.html","b93fef3e74534a4025c85d52bc023a83"],["F:/myBlog/public/tags/index.html","0a4e4d0d91b4811665e6774738ae8a83"],["F:/myBlog/public/tags/volatile/index.html","df1ba4fbd44ec8125478d18ad116e2c5"],["F:/myBlog/public/tags/值传递/index.html","e6fa8ffd44c8b555b741d039d7ca9d6d"],["F:/myBlog/public/tags/分布式锁/index.html","81adc2dbc44795188fabda228e6d060c"],["F:/myBlog/public/tags/可重入锁/index.html","063627afaae6790c99e2c50735536025"],["F:/myBlog/public/tags/线程池/index.html","0926a236081fcfb23b744bef3a009e36"],["F:/myBlog/public/tags/锁/index.html","d00d314c732df1974372b3803dc831eb"],["F:/myBlog/public/tags/队列/index.html","271d4d8284ab66ea8e98669092d98b1d"]];
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







