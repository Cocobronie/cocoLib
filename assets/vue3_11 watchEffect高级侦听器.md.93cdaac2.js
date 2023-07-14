import{_ as s,o as a,c as n,O as e}from"./chunks/framework.23072b34.js";const d=JSON.parse('{"title":"watchEffect高级侦听器","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/11 watchEffect高级侦听器.md","filePath":"vue3/11 watchEffect高级侦听器.md","lastUpdated":null}'),l={name:"vue3/11 watchEffect高级侦听器.md"},p=e(`<h1 id="watcheffect高级侦听器" tabindex="-1">watchEffect高级侦听器 <a class="header-anchor" href="#watcheffect高级侦听器" aria-label="Permalink to &quot;watchEffect高级侦听器&quot;">​</a></h1><h2 id="_1、使用方法" tabindex="-1">1、使用方法 <a class="header-anchor" href="#_1、使用方法" aria-label="Permalink to &quot;1、使用方法&quot;">​</a></h2><p>如果用到message 就只会监听message 就是用到几个监听几个 而且是非惰性 会默认调用一次</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let message = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let message2 = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"> watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //console.log(&#39;message&#39;, message.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;message2&#39;, message2.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="_2、清除副作用" tabindex="-1">2、清除副作用 <a class="header-anchor" href="#_2、清除副作用" aria-label="Permalink to &quot;2、清除副作用&quot;">​</a></h2><p>就是在触发监听之前会调用一个函数可以处理你的逻辑例如防抖</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">let message = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let message2 = ref&lt;string&gt;(&#39;&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"> watchEffect((oninvalidate) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //console.log(&#39;message&#39;, message.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    oninvalidate(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;message2&#39;, message2.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div><h2 id="_3、停止跟踪" tabindex="-1">3、停止跟踪 <a class="header-anchor" href="#_3、停止跟踪" aria-label="Permalink to &quot;3、停止跟踪&quot;">​</a></h2><p>watchEffect 返回一个函数 调用之后将停止更新</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">const stop =  watchEffect((oninvalidate) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //console.log(&#39;message&#39;, message.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    oninvalidate(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;message2&#39;, message2.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">    flush:&quot;post&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    onTrigger () {</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">stop()</span></span></code></pre></div><h2 id="_4、更多的配置项-flush、ontrigger" tabindex="-1">4、更多的配置项 <code>flush</code>、<code>onTrigger()</code> <a class="header-anchor" href="#_4、更多的配置项-flush、ontrigger" aria-label="Permalink to &quot;4、更多的配置项 \`flush\`、\`onTrigger()\`&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">watchEffect((oninvalidate) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //console.log(&#39;message&#39;, message.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">    oninvalidate(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;message2&#39;, message2.value);</span></span>
<span class="line"><span style="color:#A6ACCD;">},{</span></span>
<span class="line"><span style="color:#A6ACCD;">    flush:&quot;post&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    onTrigger () {    </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div>`,12),o=[p];function t(c,i,r,C,A,g){return a(),n("div",null,o)}const f=s(l,[["render",t]]);export{d as __pageData,f as default};
