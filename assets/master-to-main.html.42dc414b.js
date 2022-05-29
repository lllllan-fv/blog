import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e}from"./app.af53d2d3.js";var s="/assets/image-20220513221237596.405a2782.png",n="/assets/image-20220513221328771.116d1733.png";const i={},r=e(`<div class="custom-container danger"><p class="custom-container-title">\u4E8B\u6545</p><p>\u628A\u9875\u9762\u62C9\u5230\u5E95\u90E8\uFF0C\u5982\u4F60\u6240\u89C1\uFF0C\u6709\u4E2A <code>\u7F16\u8F91\u6B64\u9875</code> \u7684\u6309\u94AE\u3002</p><p>\u5728\u8FD9\u4E4B\u524D\uFF0C\u4F60\u70B9\u51FB\u8FD9\u4E2A\u6309\u94AE\u4F1A\u8DF3\u8F6C\u5230\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u9875\u9762\uFF0C\u800C\u5B83\u7684\u94FE\u63A5\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>https://github.com/lllllan-fv/blog/edit/main/docs/grocery/git/master-to-main.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="\u4E8B\u6545\u8D77\u56E0" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u6545\u8D77\u56E0" aria-hidden="true">#</a> \u4E8B\u6545\u8D77\u56E0</h2><p>\u672C\u5730\u521B\u5EFA\u4ED3\u5E93\u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u5206\u652F\u4E3A <code>master</code>\uFF0C\u800C Github \u5728 2020 \u5E74 10 \u6708 1 \u65E5\u4E4B\u540E\u7684\u9ED8\u8BA4\u5206\u652F\u5C31\u6539\u6210\u4E86 <code>main</code>\u3002</p><p>\u56E0\u6B64\uFF0C\u5F53\u6211\u4EEC\u70B9\u51FB <code>\u7F16\u8F91\u6B64\u9875</code> \u6309\u94AE\u7684\u65F6\u5019\uFF0C Github \u4F1A\u9ED8\u8BA4\u53BB\u5BFB\u627E <code>main</code> \u5206\u652F\u4E0B\u7684\u76EE\u5F55\uFF0C\u90A3\u627E\u5F97\u5230\u5C31\u602A\u4E86\u3002</p><h2 id="\u4E8B\u6545\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u6545\u5904\u7406" aria-hidden="true">#</a> \u4E8B\u6545\u5904\u7406</h2><p>\u5C06 Github \u4ED3\u5E93\u7684 master \u5206\u652F\u8FC1\u79FB\u5230 main \u5206\u652F\u5C31\u597D\u4E86\uFF0C\u63A5\u4E0B\u6765\u7684\u5177\u4F53\u6B65\u9AA4\u3002</p><h3 id="\u672C\u5730\u4ED3\u5E93\u521B\u5EFA\u5E76\u63A8\u9001-main" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u4ED3\u5E93\u521B\u5EFA\u5E76\u63A8\u9001-main" aria-hidden="true">#</a> \u672C\u5730\u4ED3\u5E93\u521B\u5EFA\u5E76\u63A8\u9001 main</h3><blockquote><p>\u521B\u5EFA\u5E76\u5207\u6362\u5230\u5206\u652F main</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u63A8\u9001\u5206\u652F main</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="github-\u4FEE\u6539\u9ED8\u8BA4\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#github-\u4FEE\u6539\u9ED8\u8BA4\u5206\u652F" aria-hidden="true">#</a> Github \u4FEE\u6539\u9ED8\u8BA4\u5206\u652F</h3><blockquote><p>\u5230 settings \u4E2D\u4FEE\u6539\u9ED8\u8BA4\u5206\u652F</p></blockquote><div class="custom-container center"><p><img src="`+s+'" alt="image-20220513221237596" loading="lazy"></p><p><img src="'+n+`" alt="image-20220513221328771" loading="lazy"></p></div><h3 id="\u672C\u5730\u5220\u9664\u5E76\u63A8\u9001-master" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5220\u9664\u5E76\u63A8\u9001-master" aria-hidden="true">#</a> \u672C\u5730\u5220\u9664\u5E76\u63A8\u9001 master</h3><blockquote><p>\u5220\u9664\u672C\u5730 master</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -d master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u5220\u9664\u8FDC\u7A0B master</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin :master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,19);function t(d,c){return r}var m=a(i,[["render",t],["__file","master-to-main.html.vue"]]);export{m as default};
