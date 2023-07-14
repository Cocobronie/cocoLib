import{_ as s,o as a,c as n,O as l}from"./chunks/framework.23072b34.js";const p="/cocoLib/images/assets/1671017924981.png",o="/cocoLib/images/assets/1671018781557.png",h=JSON.parse('{"title":"JavaScript 基础 - 第2天","description":"","frontmatter":{},"headers":[],"relativePath":"JS/基础知识点/JSBasic02.md","filePath":"JS/基础知识点/JSBasic02.md","lastUpdated":null}'),t={name:"JS/基础知识点/JSBasic02.md"},e=l(`<h1 id="javascript-基础-第2天" tabindex="-1">JavaScript 基础 - 第2天 <a class="header-anchor" href="#javascript-基础-第2天" aria-label="Permalink to &quot;JavaScript 基础 - 第2天&quot;">​</a></h1><blockquote><p>理解什么是流程控制，知道条件控制的种类并掌握其对应的语法规则，具备利用循环编写简易ATM取款机程序能力</p></blockquote><ul><li>运算符</li><li>语句</li><li>综合案例</li></ul><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><h3 id="算术运算符" tabindex="-1">算术运算符 <a class="header-anchor" href="#算术运算符" aria-label="Permalink to &quot;算术运算符&quot;">​</a></h3><p>数字是用来计算的，比如：乘法 * 、除法 / 、加法 + 、减法 - 等等，所以经常和算术运算符一起。</p><p>算术运算符：也叫数学运算符，主要包括加、减、乘、除、取余（求模）等</p><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td>+</td><td>求和</td></tr><tr><td>-</td><td>求差</td></tr><tr><td>*</td><td>求积</td></tr><tr><td>/</td><td>求商</td></tr><tr><td><strong>%</strong></td><td>取模（取余数），开发中经常用于作为某个数字是否被整除</td></tr></tbody></table><blockquote><p>注意：在计算失败时，显示的结果是 NaN （not a number）</p></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 算术运算符</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//  4 </span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(num </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// 20</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(num </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> num)  </span><span style="color:#676E95;font-style:italic;">// 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 取模(取余数)  使用场景：  用来判断某个数是否能够被整除</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//  0  </span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//  0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//  2</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">//  3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 注意事项 : 如果我们计算失败，则返回的结果是 NaN (not a number)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pink老师</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pink老师</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pink老师</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)   </span><span style="color:#676E95;font-style:italic;">// pink老师2</span></span></code></pre></div><h3 id="赋值运算符" tabindex="-1">赋值运算符 <a class="header-anchor" href="#赋值运算符" aria-label="Permalink to &quot;赋值运算符&quot;">​</a></h3><p>赋值运算符：对变量进行赋值的运算符</p><p>= 将等号右边的值赋予给左边, 要求左边必须是一个容器</p><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td>+=</td><td>加法赋值</td></tr><tr><td>-+</td><td>减法赋值</td></tr><tr><td>*=</td><td>乘法赋值</td></tr><tr><td>/=</td><td>除法赋值</td></tr><tr><td>%=</td><td>取余赋值</td></tr></tbody></table><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">let num = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// num = num + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// 采取赋值运算符</span></span>
<span class="line"><span style="color:#A6ACCD;">// num += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">num += 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(num)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="自增-自减运算符" tabindex="-1">自增/自减运算符 <a class="header-anchor" href="#自增-自减运算符" aria-label="Permalink to &quot;自增/自减运算符&quot;">​</a></h3><table><thead><tr><th>符号</th><th>作用</th><th>说明</th></tr></thead><tbody><tr><td>++</td><td>自增</td><td>变量自身的值加1，例如: x++</td></tr><tr><td>--</td><td>自减</td><td>变量自身的值减1，例如: x--</td></tr></tbody></table><ol><li>++在前和++在后在单独使用时二者并没有差别，而且一般开发中我们都是独立使用</li><li>++在后（后缀式）我们会使用更多</li></ol><blockquote><p>注意：</p><ol><li>只有变量能够使用自增和自减运算符</li><li>++、-- 可以在变量前面也可以在变量后面，比如: x++ 或者 ++x</li></ol></blockquote><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // let num = 10</span></span>
<span class="line"><span style="color:#A6ACCD;">    // num = num + 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // num += 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // // 1. 前置自增</span></span>
<span class="line"><span style="color:#A6ACCD;">    // let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ++i</span></span>
<span class="line"><span style="color:#A6ACCD;">    // console.log(i)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    // let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // console.log(++i + 1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2. 后置自增</span></span>
<span class="line"><span style="color:#A6ACCD;">    // let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // i++</span></span>
<span class="line"><span style="color:#A6ACCD;">    // console.log(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // console.log(i++ + 1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    // 了解 </span></span>
<span class="line"><span style="color:#A6ACCD;">    let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(i++ + ++i + i)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="比较运算符" tabindex="-1">比较运算符 <a class="header-anchor" href="#比较运算符" aria-label="Permalink to &quot;比较运算符&quot;">​</a></h3><p>使用场景：比较两个数据大小、是否相等，根据比较结果返回一个布尔值（true / false）</p><table><thead><tr><th>运算符</th><th>作用</th></tr></thead><tbody><tr><td>&gt;</td><td>左边是否大于右边</td></tr><tr><td>&lt;</td><td>左边是否小于右边</td></tr><tr><td>&gt;=</td><td>左边是否大于或等于右边</td></tr><tr><td>&lt;=</td><td>左边是否小于或等于右边</td></tr><tr><td>===</td><td>左右两边是否<code>类型</code>和<code>值</code>都相等（重点）</td></tr><tr><td>==</td><td>左右两边<code>值</code>是否相等</td></tr><tr><td>!=</td><td>左右值不相等</td></tr><tr><td>!==</td><td>左右两边是否不全等</td></tr></tbody></table><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(3 &gt; 5)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(3 &gt;= 3)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(2 == 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 比较运算符有隐式转换 把&#39;2&#39; 转换为 2  双等号 只判断值</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(2 == &#39;2&#39;)  // true</span></span>
<span class="line"><span style="color:#A6ACCD;">  // console.log(undefined === null)</span></span>
<span class="line"><span style="color:#A6ACCD;">  // === 全等 判断 值 和 数据类型都一样才行</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 以后判断是否相等 请用 ===  </span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(2 === &#39;2&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(NaN === NaN) // NaN 不等于任何人，包括他自己</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(2 !== &#39;2&#39;)  // true  </span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(2 != &#39;2&#39;) // false </span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;-------------------------&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;a&#39; &lt; &#39;b&#39;) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;aa&#39; &lt; &#39;ab&#39;) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;aa&#39; &lt; &#39;aac&#39;) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;-------------------------&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="逻辑运算符" tabindex="-1">逻辑运算符 <a class="header-anchor" href="#逻辑运算符" aria-label="Permalink to &quot;逻辑运算符&quot;">​</a></h3><p>使用场景：可以把多个布尔值放到一起运算，最终返回一个布尔值</p><table><thead><tr><th>符号</th><th>名称</th><th>日常读法</th><th>特点</th><th>口诀</th></tr></thead><tbody><tr><td>&amp;&amp;</td><td>逻辑与</td><td>并且</td><td>符号两边有一个假的结果为假</td><td>一假则假</td></tr><tr><td>||</td><td>逻辑或</td><td>或者</td><td>符号两边有一个真的结果为真</td><td>一真则真</td></tr><tr><td>!</td><td>逻辑非</td><td>取反</td><td>true变false false变true</td><td>真变假，假变真</td></tr></tbody></table><table><thead><tr><th>A</th><th>B</th><th>A &amp;&amp; B</th><th>A || B</th><th>!A</th></tr></thead><tbody><tr><td>false</td><td>false</td><td>false</td><td>false</td><td>true</td></tr><tr><td>false</td><td>true</td><td>false</td><td>true</td><td>true</td></tr><tr><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td></tr><tr><td>true</td><td>true</td><td>true</td><td>true</td><td>false</td></tr></tbody></table><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 逻辑与 一假则假</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(true &amp;&amp; true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(false &amp;&amp; true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(3 &lt; 5 &amp;&amp; 3 &gt; 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(3 &lt; 5 &amp;&amp; 3 &lt; 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 逻辑或 一真则真</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(true || true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(false || true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(false || false)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 逻辑非  取反</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(!true)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(!false)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    let num = 6</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(num &gt; 5 &amp;&amp; num &lt; 10)</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;-----------------&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="运算符优先级" tabindex="-1">运算符优先级 <a class="header-anchor" href="#运算符优先级" aria-label="Permalink to &quot;运算符优先级&quot;">​</a></h3><blockquote><p>逻辑运算符优先级： ！&gt; &amp;&amp; &gt; ||</p></blockquote><h2 id="语句" tabindex="-1">语句 <a class="header-anchor" href="#语句" aria-label="Permalink to &quot;语句&quot;">​</a></h2><h3 id="表达式和语句" tabindex="-1">表达式和语句 <a class="header-anchor" href="#表达式和语句" aria-label="Permalink to &quot;表达式和语句&quot;">​</a></h3><p><img src="`+p+`" alt="67101792498"></p><h3 id="分支语句" tabindex="-1">分支语句 <a class="header-anchor" href="#分支语句" aria-label="Permalink to &quot;分支语句&quot;">​</a></h3><p>分支语句可以根据条件判定真假，来选择性的执行想要的代码</p><p>分支语句包含：</p><ol><li>if分支语句（重点）</li><li>三元运算符</li><li>switch语句</li></ol><h4 id="if-分支语句" tabindex="-1">if 分支语句 <a class="header-anchor" href="#if-分支语句" aria-label="Permalink to &quot;if 分支语句&quot;">​</a></h4><p>语法：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;">(条件表达式) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 满足条件要执行的语句</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>小括号内的条件结果是布尔值，为 true 时，进入大括号里执行代码；为false，则不执行大括号里面代码</p><p>小括号内的结果若不是布尔类型时，会发生类型转换为布尔值，类似Boolean()</p><p>如果大括号只有一个语句，大括号可以省略，但是，俺们不提倡这么做~</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 单分支语句</span></span>
<span class="line"><span style="color:#A6ACCD;">    // if (false) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// if (3 &gt; 5) {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// if (2 === &#39;2&#39;) {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//  1. 除了0 所有的数字都为真</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   if (0) {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 2.除了 &#39;&#39; 所有的字符串都为真 true</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// if (&#39;pink老师&#39;) {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// if (&#39;&#39;) {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   console.log(&#39;执行语句&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// // if (&#39;&#39;) console.log(&#39;执行语句&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 1. 用户输入</span></span>
<span class="line"><span style="color:#A6ACCD;">    let score </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">prompt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请输入成绩</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 2. 进行判断输出</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">if</span><span style="color:#A6ACCD;"> (score </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">700</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">alert</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">恭喜考入黑马程序员</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-----------------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="if双分支语句" tabindex="-1">if双分支语句 <a class="header-anchor" href="#if双分支语句" aria-label="Permalink to &quot;if双分支语句&quot;">​</a></h4><p>如果有两个条件的时候，可以使用 if else 双分支语句</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (条件表达式)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 满足条件要执行的语句</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 不满足条件要执行的语句</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1. 用户输入</span></span>
<span class="line"><span style="color:#A6ACCD;">    let uname = prompt(&#39;请输入用户名:&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    let pwd = prompt(&#39;请输入密码:&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2. 判断输出</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (uname === &#39;pink&#39; &amp;&amp; pwd === &#39;123456&#39;) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">恭喜登录成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">用户名或者密码错误</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="if-多分支语句" tabindex="-1">if 多分支语句 <a class="header-anchor" href="#if-多分支语句" aria-label="Permalink to &quot;if 多分支语句&quot;">​</a></h4><p>使用场景： 适合于有多个条件的时候</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 1. 用户输入</span></span>
<span class="line"><span style="color:#A6ACCD;">    let score = +prompt(&#39;请输入成绩：&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 2. 判断输出</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (score &gt;= 90) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成绩优秀，宝贝，你是我的骄傲</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else if (score &gt;= 70) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成绩良好，宝贝，你要加油哦~~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else if (score &gt;= 60) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成绩及格，宝贝，你很危险~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">成绩不及格，宝贝，我不想和你说话，我只想用鞭子和你说话~</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="三元运算符-三元表达式" tabindex="-1">三元运算符（三元表达式） <a class="header-anchor" href="#三元运算符-三元表达式" aria-label="Permalink to &quot;三元运算符（三元表达式）&quot;">​</a></h4><p><strong>使用场景</strong>： 一些简单的双分支，可以使用 三元运算符（三元表达式），写起来比 if else双分支 更简单</p><p><strong>符号</strong>：? 与 : 配合使用</p><p>语法：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">条件 </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> 表达式1 ： 表达式2</span></span></code></pre></div><p>例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 三元运算符（三元表达式）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 语法格式</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 条件 ? 表达式1 : 表达式2 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 执行过程 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.1 如果条件为真，则执行表达式1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.2 如果条件为假，则执行表达式2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3. 验证</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5 &gt; 3 ? &#39;真的&#39; : &#39;假的&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">真的</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">假的</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// let age = 18 </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// age = age + 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  age++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 用户输入 </span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">prompt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请您输入一个数字:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 判断输出- 小于10才补0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// num = num &lt; 10 ? 0 + num : num</span></span>
<span class="line"><span style="color:#A6ACCD;">num </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> num </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> num</span></span>
<span class="line"><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(num)</span></span></code></pre></div><h4 id="switch语句-了解" tabindex="-1">switch语句（了解） <a class="header-anchor" href="#switch语句-了解" aria-label="Permalink to &quot;switch语句（了解）&quot;">​</a></h4><p>使用场景： 适合于有多个条件的时候，也属于分支语句，大部分情况下和 if多分支语句 功能相同</p><p>注意：</p><ol><li>switch case语句一般用于等值判断, if适合于区间判断</li><li>switchcase一般需要配合break关键字使用 没有break会造成case穿透</li><li>if 多分支语句开发要比switch更重要，使用也更多</li></ol><p>例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// switch分支语句</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 语法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// switch (表达式) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   case 值1:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     代码1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     break</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   case 值2:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     代码2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     break</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   ...</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   default:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     代码n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  switch (2) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    case </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">您选择的是1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    break  </span><span style="color:#676E95;font-style:italic;">// 退出switch</span></span>
<span class="line"><span style="color:#A6ACCD;">    case </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">您选择的是2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    break  </span><span style="color:#676E95;font-style:italic;">// 退出switch</span></span>
<span class="line"><span style="color:#A6ACCD;">    case </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">您选择的是3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    break  </span><span style="color:#676E95;font-style:italic;">// 退出switch</span></span>
<span class="line"><span style="color:#A6ACCD;">    default:</span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">没有符合条件的</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="断点调试" tabindex="-1">断点调试 <a class="header-anchor" href="#断点调试" aria-label="Permalink to &quot;断点调试&quot;">​</a></h4><p>**作用：**学习时可以帮助更好的理解代码运行，工作时可以更快找到bug</p><p>浏览器打开调试界面</p><ol><li>按F12打开开发者工具</li><li>点到源代码一栏 （ sources ）</li><li>选择代码文件</li></ol><p>**断点：**在某句代码上加的标记就叫断点，当程序执行到这句有标记的代码时会暂停下来</p><h3 id="循环语句" tabindex="-1">循环语句 <a class="header-anchor" href="#循环语句" aria-label="Permalink to &quot;循环语句&quot;">​</a></h3><p>使用场景：重复执行 指定的一段代码，比如我们想要输出10次 &#39;我学的很棒&#39;</p><p>学习路径：</p><p>1.while循环</p><p>2.for 循环（重点）</p><h4 id="while循环" tabindex="-1">while循环 <a class="header-anchor" href="#while循环" aria-label="Permalink to &quot;while循环&quot;">​</a></h4><p>while : 在…. 期间， 所以 while循环 就是在满足条件期间，重复执行某些代码。</p><p><strong>语法：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (条件表达式) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#676E95;font-style:italic;">// 循环体    </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// while循环: 重复执行代码</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 需求: 利用循环重复打印3次 &#39;月薪过万不是梦，毕业时候见英雄&#39;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">write</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">月薪过万不是梦，毕业时候见英雄~&lt;br&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">// 这里千万不要忘了变量自增否则造成死循环</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>循环三要素：</p><p>1.初始值 （经常用变量）</p><p>2.终止条件</p><p>3.变量的变化量</p><p>例如：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // // 1. 变量的起始值</span></span>
<span class="line"><span style="color:#A6ACCD;">  // let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">  // // 2. 终止条件</span></span>
<span class="line"><span style="color:#A6ACCD;">  // while (i &lt;= 3) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//   document.write(&#39;我要循环三次 &lt;br&gt;&#39;)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//   // 3. 变量的变化量</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//   i++</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 1. 变量的起始值</span></span>
<span class="line"><span style="color:#A6ACCD;">  let end </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">prompt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请输入次数:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">let i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 终止条件</span></span>
<span class="line"><span style="color:#82AAFF;">while</span><span style="color:#A6ACCD;"> (i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> end) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  document.write(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">我要循环三次 &lt;br&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 3. 变量的变化量</span></span>
<span class="line"><span style="color:#F07178;">  i++</span></span>
<span class="line"><span style="color:#F07178;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">&lt;/script&gt;</span></span></code></pre></div><h4 id="中止循环" tabindex="-1">中止循环 <a class="header-anchor" href="#中止循环" aria-label="Permalink to &quot;中止循环&quot;">​</a></h4><p><code>break</code> 中止整个循环，一般用于结果已经得到, 后续的循环不需要的时候可以使用（提高效率）</p><p><code>continue</code> 中止本次循环，一般用于排除或者跳过某一个选项的时候</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // let i = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">    // while (i &lt;= 5) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   console.log(i)</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   if (i === 3) {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//     break  // 退出循环</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//   i++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    let i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">while</span><span style="color:#A6ACCD;"> (i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">i</span><span style="color:#A6ACCD;"> === 3</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">continue</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log(i)</span></span>
<span class="line"><span style="color:#A6ACCD;">      i++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h4 id="无限循环" tabindex="-1">无限循环 <a class="header-anchor" href="#无限循环" aria-label="Permalink to &quot;无限循环&quot;">​</a></h4><p>1.while(true) 来构造“无限”循环，需要使用break退出循环。（常用）</p><p>2.for(;😉 也可以来构造“无限”循环，同样需要使用break退出循环。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 无限循环  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 需求： 页面会一直弹窗询问你爱我吗？</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// (1). 如果用户输入的是 &#39;爱&#39;，则退出弹窗</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// (2). 否则一直弹窗询问</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. while(true) 无限循环</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// while (true) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   let love = prompt(&#39;你爱我吗?&#39;)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   if (love === &#39;爱&#39;) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//     break</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. for(;;) 无限循环</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">love</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">prompt</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你爱我吗?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">love</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">爱</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="综合案例-atm存取款机" tabindex="-1">综合案例-ATM存取款机 <a class="header-anchor" href="#综合案例-atm存取款机" aria-label="Permalink to &quot;综合案例-ATM存取款机&quot;">​</a></h2><p><img src="`+o+`" alt="67101878155"></p><p>分析：</p><p>①：提示输入框写到循环里面（无限循环）</p><p>②：用户输入4则退出循环 break</p><p>③：提前准备一个金额预先存储一个数额 money</p><p>④：根据输入不同的值，做不同的操作</p><p>​ (1) 取钱则是减法操作， 存钱则是加法操作，查看余额则是直接显示金额</p><p>​ (2) 可以使用 if else if 多分支 来执行不同的操作</p><p>完整代码：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 1. 开始循环 输入框写到 循环里面</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 3. 准备一个总的金额</span></span>
<span class="line"><span style="color:#A6ACCD;">  let money = 100</span></span>
<span class="line"><span style="color:#A6ACCD;">while (true) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  let re </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">prompt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">请您选择操作：</span></span>
<span class="line"><span style="color:#C3E88D;">1.存钱</span></span>
<span class="line"><span style="color:#C3E88D;">2.取钱</span></span>
<span class="line"><span style="color:#C3E88D;">3.查看余额</span></span>
<span class="line"><span style="color:#C3E88D;">4.退出</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 2. 如果用户输入的 4 则退出循环， break  写到if 里面，没有写到switch里面， 因为4需要break退出循环</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">if</span><span style="color:#A6ACCD;"> (re </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    break</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 4. 根据输入做操作</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">switch</span><span style="color:#A6ACCD;"> (re) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    case </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 存钱</span></span>
<span class="line"><span style="color:#A6ACCD;">      let cun </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">prompt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请输入存款金额</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      money </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> money </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> cun</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">      case </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 存钱</span></span>
<span class="line"><span style="color:#A6ACCD;">      let qu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;">prompt</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请输入取款金额</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      money </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> money </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> qu</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">      case </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 存钱</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">alert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">您的银行卡余额是</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">money</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      break</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,107),c=[e];function r(i,y,D,C,A,F){return a(),n("div",null,c)}const f=s(t,[["render",r]]);export{h as __pageData,f as default};
