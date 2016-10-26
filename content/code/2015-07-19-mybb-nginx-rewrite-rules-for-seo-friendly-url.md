+++
Description = "Using Nginx with MyBB? Want friendly URLs? Here are the full set of Nginx rewrite rules for MyBB SEO friendly URLs"
categories = ["Tips & Tricks"]
date = "2015-07-19T17:50:23+01:00"
draft = false
slug = "mybb-nginx-rewrite-rules-for-seo-friendly-url"
title = "Nginx rewrite rules for MyBB SEO friendly URLs"
pageimage = ""
+++

I've recently switched a forum I run from Wordpress and bbPress to MyBB. Overall I've very happy with it but there are a few bits to watch out for with MyBB.

If you are running Nginx instead of Apache as your webserver then one of those things to watch out for is the need to manually update the rewrite rules needed for SEO friendly URLs.

## MyBB SEO friendly URLs

Below is the full set of Nginx rewrite rules for rewriting MyBB's SEO friendly URLs. To activate this option in MyBB you can do so from the Admin CP:

<!--more-->

```nginx
Admin CP > Configuration > Settings > Server and Optimization Options > Enable search engine friendly URLs? = Enabled
```

You can also enable the "Enable search engine friendly URLs in Archive?" option - it's the option under the "Enable search engine friendly URLs?".

If you decide to enable just the "Enable search engine friendly URLs?" option you can use the following nginx rewrite rules:

```
rewrite ^/forums/forum-([0-9]+)\.html$ /forums/forumdisplay.php?fid=$1;
rewrite ^/forums/forum-([0-9]+)-page-([0-9]+)\.html$ /forums/forumdisplay.php?fid=$1&page=$2;
rewrite ^/forums/thread-([0-9]+)\.html$ /forums/showthread.php?tid=$1;
rewrite ^/forums/thread-([0-9]+)-page-([0-9]+)\.html$ /forums/showthread.php?tid=$1&page=$2;
rewrite ^/forums/thread-([0-9]+)-lastpost\.html$ /forums/showthread.php?tid=$1&action=lastpost;
rewrite ^/forums/thread-([0-9]+)-nextnewest\.html$ /forums/showthread.php?tid=$1&action=nextnewest;
rewrite ^/forums/thread-([0-9]+)-nextoldest\.html$ /forums/showthread.php?tid=$1&action=nextoldest;
rewrite ^/forums/thread-([0-9]+)-newpost\.html$ /forums/showthread.php?tid=$1&action=newpost;
rewrite ^/forums/thread-([0-9]+)-post-([0-9]+)\.html$ /forums/showthread.php?tid=$1&pid=$2;
rewrite ^/forums/post-([0-9]+)\.html$ /forums/showthread.php?pid=$1;
rewrite ^/forums/announcement-([0-9]+)\.html$ /forums/announcements.php?aid=$1;
rewrite ^/forums/user-([0-9]+)\.html$ /forums/member.php?action=profile&uid=$1;
```

### Activating SEO friendly URLs in Archive

If you activate the "Enable search engine friendly URLs in Archive?" option you'll need the following extra rewrite rules:

```nginx
rewrite ^/forums/archive/index.php/forum-([0-9]+)\.html$ /forums/archive/index.php?forum-$1.html;
rewrite ^/forums/archive/index.php/thread-([0-9]+)\.html$ /forums/archive/index.php?thread-$1.html;
rewrite ^/forums/archive/index.php/forum-([0-9]+)-([0-9]+)\.html$ /forums/archive/index.php?forum-$1-$2.html;
rewrite ^/forums/archive/index.php/thread-([0-9]+)-([0-9]+)\.html$ /forums/archive/index.php?thread-$1-$2.html;
```

At first glance the second set of rules might not seem essential, but it's those rules that enable pagination. Without them you'll just get 404 errors for page 2 or above on any of the archive forum or thread lists.

### Activating SEO friendly URLs in main forum and archive

So the full set of nginx rewrite rules needed for activating both MyBB SEO friendly URL options are as follows:

~~~nginx
rewrite ^/forums/forum-([0-9]+)\.html$ /forums/forumdisplay.php?fid=$1;

rewrite ^/forums/forum-([0-9]+)-page-([0-9]+)\.html$ /forums/forumdisplay.php?fid=$1&page=$2;
rewrite ^/forums/thread-([0-9]+)\.html$ /forums/showthread.php?tid=$1;
rewrite ^/forums/thread-([0-9]+)-page-([0-9]+)\.html$ /forums/showthread.php?tid=$1&page=$2;
rewrite ^/forums/thread-([0-9]+)-lastpost\.html$ /forums/showthread.php?tid=$1&action=lastpost;
rewrite ^/forums/thread-([0-9]+)-nextnewest\.html$ /forums/showthread.php?tid=$1&action=nextnewest;
rewrite ^/forums/thread-([0-9]+)-nextoldest\.html$ /forums/showthread.php?tid=$1&action=nextoldest;
rewrite ^/forums/thread-([0-9]+)-newpost\.html$ /forums/showthread.php?tid=$1&action=newpost;
rewrite ^/forums/thread-([0-9]+)-post-([0-9]+)\.html$ /forums/showthread.php?tid=$1&pid=$2;
rewrite ^/forums/post-([0-9]+)\.html$ /forums/showthread.php?pid=$1;
rewrite ^/forums/announcement-([0-9]+)\.html$ /forums/announcements.php?aid=$1;
rewrite ^/forums/user-([0-9]+)\.html$ /forums/member.php?action=profile&uid=$1;
rewrite ^/forums/archive/index.php/forum-([0-9]+)\.html$ /forums/archive/index.php?forum-$1.html;
rewrite ^/forums/archive/index.php/thread-([0-9]+)\.html$ /forums/archive/index.php?thread-$1.html;
rewrite ^/forums/archive/index.php/forum-([0-9]+)-([0-9]+)\.html$ /forums/archive/index.php?forum-$1-$2.html;
rewrite ^/forums/archive/index.php/thread-([0-9]+)-([0-9]+)\.html$ /forums/archive/index.php?thread-$1-$2.html;
~~~
<!--more-->
