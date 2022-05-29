import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as o,a as n,b as a,F as c,d as u,e as p,o as l}from"./app.af53d2d3.js";var r="/assets/image-20220528231406062.1d7fa0fe.png";const i={},k=u(`<h2 id="\u6807\u51C6\u5E93\u542F\u52A8-web-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u6807\u51C6\u5E93\u542F\u52A8-web-\u670D\u52A1" aria-hidden="true">#</a> \u6807\u51C6\u5E93\u542F\u52A8 Web \u670D\u52A1</h2><p>Go\u8BED\u8A00\u5185\u7F6E\u4E86 <code>net/http</code> \u5E93\uFF0C\u5C01\u88C5\u4E86 HTTP \u7F51\u7EDC\u7F16\u7A0B\u7684\u57FA\u7840\u7684\u63A5\u53E3\uFF0C\u6211\u4EEC\u5B9E\u73B0\u7684<code>Gee</code> Web \u6846\u67B6\u4FBF\u662F\u57FA\u4E8E <code>net/http</code> \u7684\u3002\u6211\u4EEC\u63A5\u4E0B\u6765\u901A\u8FC7\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u7B80\u5355\u4ECB\u7ECD\u4E0B\u8FD9\u4E2A\u5E93\u7684\u4F7F\u7528\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u9488\u5BF9\u4E0D\u540C\u7684\u8DEF\u7531\uFF0C\u8C03\u7528\u4E0D\u540C\u7684\u54CD\u5E94\u51FD\u6570</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> indexHandler<span class="token punctuation">)</span>
	http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> helloHandler<span class="token punctuation">)</span>

	<span class="token comment">// \u76D1\u542C 8080 \u7684\u6240\u6709 http \u8BF7\u6C42</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">indexHandler</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">&quot;URL.Path = %q\\n&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">helloHandler</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> request<span class="token punctuation">.</span>Header <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">&quot;Header[%q] = %q\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u901A\u8FC7\u7F51\u5740\u8BBF\u95EE\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>localhost:8080/
localhost:8080/hello
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+r+`" alt="image-20220528231406062" loading="lazy"></p><h2 id="\u5B9E\u73B0-http-handler-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-http-handler-\u63A5\u53E3" aria-hidden="true">#</a> \u5B9E\u73B0 http.Handler \u63A5\u53E3</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Engine \u81EA\u5B9A\u4E49\u7684\u7A7A\u7ED3\u6784\u4F53</span>
<span class="token keyword">type</span> Engine <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u7ED3\u6784\u4F53\u5B9E\u73B0\u65B9\u6CD5\uFF1AServeHTTP</span>
<span class="token comment">// ResponseWrite\uFF1A\u5BF9\u8BF7\u6C42\u505A\u51FA\u54CD\u5E94</span>
<span class="token comment">// Request\uFF1A\u5305\u542B HTTP \u8BF7\u6C42\u7684\u6240\u6709\u4FE1\u606F\uFF08\u8BF7\u6C42\u5730\u5740\u3001Header\u3001Body\uFF09</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">switch</span> request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">&quot;URL.Path = %q\\n&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
		<span class="token keyword">break</span>
	<span class="token keyword">case</span> <span class="token string">&quot;/hello&quot;</span><span class="token punctuation">:</span>
		<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> request<span class="token punctuation">.</span>Header <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">&quot;Header[%q] = %q\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">break</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">&quot;404 NOT FOUND: %s\\n&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>URL<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>Engine<span class="token punctuation">)</span>

	<span class="token comment">// \u5C06\u6240\u6709\u7684 HTTP \u8BF7\u6C42\u8F6C\u5411\u6211\u4EEC\u81EA\u5DF1\u5B9A\u4E49\u7684\u5904\u7406\u903B\u8F91</span>
	log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">,</span> engine<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u5F53\u7136\u8FD9\u91CC\u4F60\u8BBF\u95EE\u4E24\u4E2A\u7F51\u5740\u4F1A\u5F97\u5230\u548C\u524D\u9762\u76F8\u540C\u7684\u7ED3\u679C\uFF0C\u8FD9\u91CC\u4E3B\u8981\u662F\u5B9E\u73B0\u7684\u65B9\u5F0F\u4E0D\u540C\u3002</p><h2 id="gee-\u6846\u67B6\u96CF\u5F62" tabindex="-1"><a class="header-anchor" href="#gee-\u6846\u67B6\u96CF\u5F62" aria-hidden="true">#</a> Gee \u6846\u67B6\u96CF\u5F62</h2><p>\u4F5C\u4E3A\u96CF\u5F62\uFF0C\u5B9E\u73B0\u4E86\u8DEF\u7531\u6620\u5C04\u8868\uFF0C\u63D0\u4F9B\u4E86\u7528\u6237\u6CE8\u518C\u9759\u6001\u8DEF\u7531\u7684\u65B9\u6CD5\uFF0C\u5305\u88C5\u4E86\u542F\u52A8\u670D\u52A1\u7684\u51FD\u6570\u3002</p><p>\u4EE3\u7801\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gee/
  <span class="token operator">|</span>--gee.go
  <span class="token operator">|</span>--go.mod
main.go
go.mod
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="gee-gee-go" tabindex="-1"><a class="header-anchor" href="#gee-gee-go" aria-hidden="true">#</a> gee/gee.go</h3><ul><li>\u9996\u5148\u5B9A\u4E49\u4E86\u7C7B\u578B <code>HandlerFunc</code>\uFF0C\u8FD9\u662F\u63D0\u4F9B\u7ED9\u6846\u67B6\u7528\u6237\u7684\uFF0C\u7528\u6765\u5B9A\u4E49\u8DEF\u7531\u6620\u5C04\u7684\u5904\u7406\u65B9\u6CD5\u3002\u6211\u4EEC\u5728 <code>Engine</code> \u4E2D\uFF0C\u6DFB\u52A0\u4E86\u4E00\u5F20\u8DEF\u7531\u6620\u5C04\u8868 <code>router</code>\uFF0Ckey \u7531\u8BF7\u6C42\u65B9\u6CD5\u548C\u9759\u6001\u8DEF\u7531\u5730\u5740\u6784\u6210\uFF0C\u4F8B\u5982 <code>GET-/</code>\u3001<code>GET-/hello</code>\u3001<code>POST-/hello</code>\uFF0C\u8FD9\u6837\u9488\u5BF9\u76F8\u540C\u7684\u8DEF\u7531\uFF0C\u5982\u679C\u8BF7\u6C42\u65B9\u6CD5\u4E0D\u540C\uFF0C\u53EF\u4EE5\u6620\u5C04\u4E0D\u540C\u7684\u5904\u7406\u65B9\u6CD5(Handler)\uFF0Cvalue \u662F\u7528\u6237\u6620\u5C04\u7684\u5904\u7406\u65B9\u6CD5\u3002</li><li>\u5F53\u7528\u6237\u8C03\u7528 <code>(*Engine).GET()</code> \u65B9\u6CD5\u65F6\uFF0C\u4F1A\u5C06\u8DEF\u7531\u548C\u5904\u7406\u65B9\u6CD5\u6CE8\u518C\u5230\u6620\u5C04\u8868 <em>router</em> \u4E2D\uFF0C<code>(*Engine).Run()</code> \u65B9\u6CD5\uFF0C\u662F <em>ListenAndServe</em> \u7684\u5305\u88C5\u3002</li><li><code>Engine</code> \u5B9E\u73B0\u7684 <em>ServeHTTP</em> \u65B9\u6CD5\u7684\u4F5C\u7528\u5C31\u662F\uFF0C\u89E3\u6790\u8BF7\u6C42\u7684\u8DEF\u5F84\uFF0C\u67E5\u627E\u8DEF\u7531\u6620\u5C04\u8868\uFF0C\u5982\u679C\u67E5\u5230\uFF0C\u5C31\u6267\u884C\u6CE8\u518C\u7684\u5904\u7406\u65B9\u6CD5\u3002\u5982\u679C\u67E5\u4E0D\u5230\uFF0C\u5C31\u8FD4\u56DE <em>404 NOT FOUND</em></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> gee

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// HandlerFunc defines the request handler used by gee</span>
<span class="token keyword">type</span> HandlerFunc <span class="token keyword">func</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span>

<span class="token comment">// Engine implement the interface of ServeHTTP</span>
<span class="token keyword">type</span> Engine <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8DEF\u7531\u6620\u5C04\u8868</span>
	router <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc
<span class="token punctuation">}</span>

<span class="token comment">// New is the constructor of gee.Engine</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Engine <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Engine<span class="token punctuation">{</span>router<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc<span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">addRoute</span><span class="token punctuation">(</span>method <span class="token builtin">string</span><span class="token punctuation">,</span> pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	key <span class="token operator">:=</span> method <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> pattern
	log<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Route %4s - %s&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span>
	engine<span class="token punctuation">.</span>router<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> handler
<span class="token punctuation">}</span>

<span class="token comment">// GET defines the method to add GET request</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">GET</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// POST defines the method to add POST request</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">POST</span><span class="token punctuation">(</span>pattern <span class="token builtin">string</span><span class="token punctuation">,</span> handler HandlerFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	engine<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> handler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Run defines the method to start a http server</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span>addr <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span>addr<span class="token punctuation">,</span> engine<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>engine <span class="token operator">*</span>Engine<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>writer http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	key <span class="token operator">:=</span> request<span class="token punctuation">.</span>Method <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
	<span class="token keyword">if</span> handler<span class="token punctuation">,</span> ok <span class="token operator">:=</span> engine<span class="token punctuation">.</span>router<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> ok <span class="token punctuation">{</span>
		<span class="token function">handler</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> request<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>writer<span class="token punctuation">,</span> <span class="token string">&quot;404 NOT FOUND: %s\\n&quot;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>URL<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h3 id="gee-go-mod" tabindex="-1"><a class="header-anchor" href="#gee-go-mod" aria-hidden="true">#</a> gee/go.mod</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module gee

go 1.18
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="main-go" tabindex="-1"><a class="header-anchor" href="#main-go" aria-hidden="true">#</a> main.go</h3><p>\u4F7F\u7528 <code>GET()</code> \u65B9\u6CD5\u6765\u6DFB\u52A0\u9759\u6001\u8DEF\u7531\uFF0C\u6700\u540E\u901A\u8FC7 <code>Run()</code> \u6765\u542F\u52A8 Web \u670D\u52A1</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;gee&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gee<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;URL.Path = %q\\n&quot;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> req<span class="token punctuation">.</span>Header <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;Header[%q] = %q\\n&quot;</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8080&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="go-mod" tabindex="-1"><a class="header-anchor" href="#go-mod" aria-hidden="true">#</a> go.mod</h3><p>\u4F7F\u7528 <code>replace</code> \u5C06 gee \u6307\u5411 <code>./gee</code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module base3

go 1.18

require gee v0.0.0

replace gee =<span class="token punctuation">&gt;</span> ./gee
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,25),b={href:"https://github.com/geektutu/7days-golang/tree/master/gee-web/day1-http-base",target:"_blank",rel:"noopener noreferrer"},d=p("7days-golang/gee-web/day1-http-base at master \xB7 geektutu/7days-golang (github.com)"),m={href:"https://geektutu.com/post/gee-day1.html",target:"_blank",rel:"noopener noreferrer"},g=p("Go\u8BED\u8A00\u52A8\u624B\u5199Web\u6846\u67B6 - Gee\u7B2C\u4E00\u5929 http.Handler | \u6781\u5BA2\u5154\u5154 (geektutu.com)");function h(f,q){const s=e("ExternalLinkIcon");return l(),o(c,null,[k,n("ul",null,[n("li",null,[n("p",null,[n("a",b,[d,a(s)])])]),n("li",null,[n("p",null,[n("a",m,[g,a(s)])])])])],64)}var v=t(i,[["render",h],["__file","http-base.html.vue"]]);export{v as default};
