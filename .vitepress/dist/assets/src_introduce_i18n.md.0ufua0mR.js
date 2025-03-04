import{_ as i,a as s,o as a,a5 as l}from"./chunks/framework.CpIJ5ljH.js";const g=JSON.parse('{"title":"国际化","description":"","frontmatter":{},"headers":[],"relativePath":"src/introduce/i18n.md","filePath":"src/introduce/i18n.md","lastUpdated":null}'),n={name:"src/introduce/i18n.md"},t=l(`<h1 id="国际化" tabindex="-1">国际化 <a class="header-anchor" href="#国际化" aria-label="Permalink to &quot;国际化&quot;">​</a></h1><p>国际化插件，支持多语言切换。</p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li><p>在 <code>HBuilderX</code> 中设置 <code>manifest.json</code> 的默认语言</p></li><li><p>在根目录下的 <code>locale</code> 中配置：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> i18n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createI18n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  locale: uni.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  messages: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;zh-Hans&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: zhHans,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;zh-Hant&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: zhHant,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    en,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    es,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>配置后，使用命令 cool-i18n create 翻译，会自动更新 locale 目录。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>messages 中配置的语言数量决定了翻译时会同时翻译的语言数量</p></div></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>需要翻译的内容需要在 <code>$t()</code> <code>t()</code> 中使用，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { t } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/@/locale&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// html</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你好&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;我是{name}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;神仙&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><p>内容使用 <code>中文</code>，ai 会全文检索并自动翻译成其他语言。</p><h2 id="翻译" tabindex="-1">翻译 <a class="header-anchor" href="#翻译" aria-label="Permalink to &quot;翻译&quot;">​</a></h2><p>安装翻译工具</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pnpm i @cool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vue/ai </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">g</span></span></code></pre></div><p>运行命令</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">创建翻译文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i18n create</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">清除翻译文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i18n </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">clear</span></span></code></pre></div><p>执行完成后，会在对应的模块、插件目录下生成 <code>locale</code> 目录。</p><h2 id="语言配置对照表" tabindex="-1">语言配置对照表 <a class="header-anchor" href="#语言配置对照表" aria-label="Permalink to &quot;语言配置对照表&quot;">​</a></h2><ul><li>简体中文（zh-cn）</li><li>美国英语（en）</li><li>阿塞拜疆语（az）</li><li>德语（de）</li><li>葡萄牙语（pt）</li><li>西班牙语（es）</li><li>丹麦语（da）</li><li>法语（fr）</li><li>挪威语（nb-NO）</li><li>繁体中文（zh-tw）</li><li>意大利语（it）</li><li>韩语（ko）</li><li>日语（ja）</li><li>荷兰语（nl）</li><li>越南语（vi）</li><li>俄语（ru）</li><li>土耳其语（tr）</li><li>巴西葡萄牙语（pt-br）</li><li>波斯语（fa）</li><li>泰语（th）</li><li>印度尼西亚语（id）</li><li>保加利亚语（bg）</li><li>普什图语（pa）</li><li>波兰语（pl）</li><li>芬兰语（fi）</li><li>瑞典语（sv）</li><li>希腊语（el）</li><li>斯洛伐克语（sk）</li><li>加泰罗尼亚语（ca）</li><li>捷克语（cs）</li><li>乌克兰语（uk）</li><li>土库曼语（tk）</li><li>泰米尔语（ta）</li><li>拉脱维亚语（lv）</li><li>南非荷兰语（af）</li><li>爱沙尼亚语（et）</li><li>斯洛文尼亚语（sl）</li><li>阿拉伯语（ar）</li><li>希伯来语（he）</li><li>立陶宛语（lt）</li><li>蒙古语（mn）</li><li>哈萨克语（kk）</li><li>匈牙利语（hu）</li><li>罗马尼亚语（ro）</li><li>库尔德语（ku）</li><li>库尔德语 (ckb)</li><li>维吾尔语 (ug-cn)</li><li>高棉语 (km)</li><li>塞尔维亚语 (sr)</li><li>巴斯克语 (eu)</li><li>吉尔吉斯语 (ky)</li><li>亚美尼亚语 (hy-am)</li><li>克罗地亚语（hr）</li><li>世界语 (eo)</li><li>孟加拉语 (bn)</li><li>马来语 (ms)</li></ul>`,16),e=[t];function p(h,k,d,c,o,r){return a(),s("div",null,e)}const u=i(n,[["render",p]]);export{g as __pageData,u as default};
