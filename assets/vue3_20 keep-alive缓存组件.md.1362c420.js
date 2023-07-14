import{_ as s,o as a,c as n,O as l}from"./chunks/framework.23072b34.js";const C=JSON.parse('{"title":"内置组件keep-alive","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/20 keep-alive缓存组件.md","filePath":"vue3/20 keep-alive缓存组件.md","lastUpdated":null}'),e={name:"vue3/20 keep-alive缓存组件.md"},p=l(`<h1 id="内置组件keep-alive" tabindex="-1">内置组件keep-alive <a class="header-anchor" href="#内置组件keep-alive" aria-label="Permalink to &quot;内置组件keep-alive&quot;">​</a></h1><p>有时候我们不希望组件被重新渲染影响使用体验；或者处于性能考虑，避免多次重复渲染降低性能。而是希望组件可以缓存下来,维持当前的状态。这时候就需要用到keep-alive组件。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 基本 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;component :is=&quot;view&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 多个条件判断的子组件 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;A v-if=&quot;flag&quot;&gt;&lt;/A&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;B v-else&gt;&lt;/B&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 和 \`&lt;transition&gt;\` 一起使用 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;keep-alive&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;component :is=&quot;view&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="include-、-exclude、max属性" tabindex="-1"><code>include</code> 、 <code>exclude</code>、<code>max</code>属性 <a class="header-anchor" href="#include-、-exclude、max属性" aria-label="Permalink to &quot;\`include\` 、 \`exclude\`、\`max\`属性&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">						//默认全部缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;A v-if=&quot;flag&quot;&gt;&lt;/A&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;B v-else&gt;&lt;/B&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">include</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">		//只缓存A组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;A v-if=&quot;flag&quot;&gt;&lt;/A&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;B v-else&gt;&lt;/B&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">exclude</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">		//不缓存A组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;A v-if=&quot;flag&quot;&gt;&lt;/A&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;B v-else&gt;&lt;/B&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">keep-alive</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">max</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">				//缓存10个比较常用的组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;A v-if=&quot;flag&quot;&gt;&lt;/A&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;B v-else&gt;&lt;/B&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">keep-alive</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="keep-alive生命周期" tabindex="-1">keep-alive生命周期 <a class="header-anchor" href="#keep-alive生命周期" aria-label="Permalink to &quot;keep-alive生命周期&quot;">​</a></h2><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//初始化</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onActivated</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//keep-alive初始化</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onDeactivated</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//keep-alive卸载</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onUnmounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//卸载</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><p><strong><code>onActivated</code>、<code>onDeactivated</code>，只有使用<code>keep-alive</code>组件时才有</strong></p><ul><li><strong>初次进入时：</strong> <code>onMounted</code> =&gt; <code>onActivated</code></li><li><strong>退出后</strong>触发 <code>deactivated</code></li><li><strong>再次进入</strong>只会触发 <code>onActivated</code></li><li>事件挂载的方法等，只执行一次的放在 <code>onMounted</code>中；组件每次进去执行的方法放在 <code>onActivated</code>中</li></ul>`,10),o=[p];function t(c,r,i,D,y,F){return a(),n("div",null,o)}const d=s(e,[["render",t]]);export{C as __pageData,d as default};
