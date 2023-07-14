import{_ as s,o as n,c as a,O as e}from"./chunks/framework.23072b34.js";const l="/cocoLib/assets/image-20230607130829660.4f329935.png",f=JSON.parse('{"title":"Vue3生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/12 Vue3生命周期.md","filePath":"vue3/12 Vue3生命周期.md","lastUpdated":null}'),o={name:"vue3/12 Vue3生命周期.md"},p=e('<h1 id="vue3生命周期" tabindex="-1">Vue3生命周期 <a class="header-anchor" href="#vue3生命周期" aria-label="Permalink to &quot;Vue3生命周期&quot;">​</a></h1><p><img src="'+l+`" alt="image-20230607130829660"></p><p><code>beforeCreate</code>、<code>created</code>被替换成了<code>setup</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">onBeforeMount</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在组件DOM实际渲染安装之前调用。在这一步中，根元素还不存在。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在组件的第一次渲染后调用，该元素现在可用，允许直接DOM访问</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onBeforeUpdate</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//数据更新时调用，发生在虚拟 DOM 打补丁之前。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onUpdated</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//DOM更新后，updated的方法即会调用。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onBeforeUnmount</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onUnmounted</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。</span></span></code></pre></div>`,4),t=[p];function c(i,r,d,_,u,A){return n(),a("div",null,t)}const m=s(o,[["render",c]]);export{f as __pageData,m as default};
