import{_ as s,a as i,o as t,a4 as a}from"./chunks/framework.DNizj_qy.js";const g=JSON.parse('{"title":"store","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/cool/store.md","filePath":"src/guide/cool/store.md","lastUpdated":null}'),n={name:"src/guide/cool/store.md"},e=a(`<h1 id="store" tabindex="-1">store <a class="header-anchor" href="#store" aria-label="Permalink to &quot;store&quot;">​</a></h1><h2 id="user" tabindex="-1">user <a class="header-anchor" href="#user" aria-label="Permalink to &quot;user&quot;">​</a></h2><p>用户数据缓存。</p><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>token</td><td>标识</td><td>string</td></tr><tr><td>setToken</td><td>设置标识</td><td>function</td></tr><tr><td>refreshToken</td><td>刷新标识</td><td>function</td></tr><tr><td>info</td><td>用户信息</td><td>Eps.UserInfoEntity</td></tr><tr><td>get</td><td>获取用户信息</td><td>function</td></tr><tr><td>set</td><td>设置用户信息</td><td>function</td></tr><tr><td>update</td><td>更新用户信息</td><td>function</td></tr><tr><td>clear</td><td>清空用户、token</td><td>function</td></tr><tr><td>logout</td><td>退出登陆</td><td>function</td></tr></tbody></table><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>更新用户信息</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;COOL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><h2 id="dict" tabindex="-1">dict <a class="header-anchor" href="#dict" aria-label="Permalink to &quot;dict&quot;">​</a></h2><p>字典数据缓存。</p><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>data</td><td>字典数据</td><td>object</td></tr><tr><td>get</td><td>获取数据列表</td><td>function</td></tr><tr><td>getLabel</td><td>获取名称</td><td>function</td></tr><tr><td>refresh</td><td>获取数据列表</td><td>function</td></tr></tbody></table><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><p>返回指定类型的数据列表</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dict.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;brand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 返回值为一个数组</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    label: &quot;COOL&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    value: 1,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    label: &quot;闪酷&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    value: 2,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">*/</span></span></code></pre></div><p>返回指定类型的数据文本 label</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useStore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dict.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLabel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;brand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回值为一个字符串 COOL</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>程序启动时会调用一次 <code>dict.refresh()</code> 获取所有的字典。有可能存在部分数据已被后台操作人员修改，可以在页面中单独刷新使用到的字典数据：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onShow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  dict.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">refresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;userTag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;userStatus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></div>`,16),h=[e];function l(p,d,k,r,o,c){return t(),i("div",null,h)}const u=s(n,[["render",l]]);export{g as __pageData,u as default};
