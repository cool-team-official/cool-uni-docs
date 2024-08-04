import{_ as s,a as t,o as i,a5 as a}from"./chunks/framework.CpIJ5ljH.js";const g=JSON.parse('{"title":"SliderVerify 图片拖动验证","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/components/extend/slider-verify.md","filePath":"src/guide/components/extend/slider-verify.md","lastUpdated":null}'),e={name:"src/guide/components/extend/slider-verify.md"},l=a(`<h1 id="sliderverify-图片拖动验证" tabindex="-1">SliderVerify 图片拖动验证 <a class="header-anchor" href="#sliderverify-图片拖动验证" aria-label="Permalink to &quot;SliderVerify 图片拖动验证&quot;">​</a></h1><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>类型</td><td>string</td><td>fill / rotate</td><td>fill</td></tr><tr><td>image</td><td>图片</td><td>string</td><td></td><td></td></tr><tr><td>offset</td><td>偏移值</td><td>number</td><td></td><td>5</td></tr><tr><td>title</td><td>标题</td><td>string</td><td></td><td></td></tr><tr><td>placeholder</td><td>文案</td><td>string</td><td></td><td></td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>success</td><td>成功回调</td><td></td></tr><tr><td>fail</td><td>是吧回调</td><td></td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><h3 id="拖动验证" tabindex="-1">拖动验证 <a class="header-anchor" href="#拖动验证" aria-label="Permalink to &quot;拖动验证&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @tap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;refs.sliderVerify?.open()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;打开&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-slider-verify</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;拖动验证&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Bg1&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;setRefs(&#39;sliderVerify&#39;)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h3 id="旋转验证" tabindex="-1">旋转验证 <a class="header-anchor" href="#旋转验证" aria-label="Permalink to &quot;旋转验证&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @tap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;refs.sliderVerify2?.open()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;打开&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-slider-verify</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;旋转验证&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rotate&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Avatar4&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;setRefs(&#39;sliderVerify2&#39;)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div>`,10),n=[l];function h(d,r,p,k,o,E){return i(),t("div",null,n)}const y=s(e,[["render",h]]);export{g as __pageData,y as default};
