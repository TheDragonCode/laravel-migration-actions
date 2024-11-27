import{_ as s,c as a,b as e,o as p}from"./app-DbZK4p7a.js";const t={};function i(l,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="creating-operations" tabindex="-1"><a class="header-anchor" href="#creating-operations"><span>Creating Operations</span></a></h1><p>To create an operation use the <code>make:operation</code> artisan command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan make:operation some_name</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The new operation&#39;s file will be placed in your <code>operations</code> directory in the base path of your app.</p><p>Each operation file name contains a timestamp, which allows Laravel to determine the order of the operations.</p><h2 id="asks-for-file-name" tabindex="-1"><a class="header-anchor" href="#asks-for-file-name"><span>Asks For File Name</span></a></h2><blockquote><p>The question will not be asked when calling a console command passing the <code>--quiet</code> parameter.</p></blockquote><p>When calling the <code>operations</code> console command without passing a name in the <code>name</code> parameter, you will be asked for a name for the file.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ php artisan make:operation</span>
<span class="line">  Creating an operation </span>
<span class="line"></span>
<span class="line"> ┌ What should the operation be named? ─────────────────────────┐</span>
<span class="line"> │ E.g. activate articles                                       │</span>
<span class="line"> └──────────────────────────────────────────────────────────────┘</span>
<span class="line">  Press Enter to autodetect</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can enter your own or simply press <code>Enter</code> to continue. In this case, automatic file name generation will be applied.</p><h2 id="automatically-generate-a-file-name" tabindex="-1"><a class="header-anchor" href="#automatically-generate-a-file-name"><span>Automatically Generate A File Name</span></a></h2><p>If you do not specify the &quot;name&quot; attribute, then the file name will be generated automatically according to the rule:</p><blockquote><p>git branch name ?: &#39;auto&#39;</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan make:operation</span>
<span class="line"></span>
<span class="line"><span class="token comment">### When the git repository is found (\`base_path(&#39;.git&#39;)\` directory is exists) and HEAD branch name is &#39;qwerty&#39;</span></span>
<span class="line"><span class="token comment"># 2022_10_11_225116_qwerty.php</span></span>
<span class="line"><span class="token comment"># 2022_10_11_225118_qwerty.php</span></span>
<span class="line"><span class="token comment"># 2022_10_11_225227_qwerty.php</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">### When the git repository is not found (\`base_path(&#39;.git&#39;)\` directory doesn&#39;t exists).</span></span>
<span class="line"><span class="token comment"># 2022_10_11_225116_auto.php</span></span>
<span class="line"><span class="token comment"># 2022_10_11_225118_auto.php</span></span>
<span class="line"><span class="token comment"># 2022_10_11_225227_auto.php</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nested-files" tabindex="-1"><a class="header-anchor" href="#nested-files"><span>Nested Files</span></a></h2><p>You can use nested paths to create operations:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan make:operation Foo/Bar/QweRty</span>
<span class="line">php artisan make:operation Foo/Bar/QweRty.php</span>
<span class="line"></span>
<span class="line">php artisan make:operation Foo<span class="token punctuation">\\</span>Bar<span class="token punctuation">\\</span>QweRty</span>
<span class="line">php artisan make:operation Foo<span class="token punctuation">\\</span>Bar<span class="token punctuation">\\</span>QweRty.php</span>
<span class="line"></span>
<span class="line">php artisan make:operation foo<span class="token punctuation">\\</span>bar<span class="token punctuation">\\</span>QweRty</span>
<span class="line">php artisan make:operation foo<span class="token punctuation">\\</span>bar<span class="token punctuation">\\</span>QweRty.php</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All of these commands will create a file called <code>operations/foo/bar/Y_m_d_His_qwe_rty.php</code>.</p><p>For example:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">php artisan make:operation foo<span class="token punctuation">\\</span>bar<span class="token punctuation">\\</span>QweRty</span>
<span class="line"><span class="token comment"># operations/foo/bar/2022_10_11_225734_qwe_rty.php</span></span>
<span class="line"></span>
<span class="line">php artisan make:operation foo<span class="token punctuation">\\</span>bar<span class="token punctuation">\\</span>QweRty.php</span>
<span class="line"><span class="token comment"># operations/foo/bar/2022_10_11_225734_qwe_rty.php</span></span>
<span class="line"></span>
<span class="line">php artisan make:operation foo/bar/QweRty</span>
<span class="line"><span class="token comment"># operations/foo/bar/2022_10_11_225734_qwe_rty.php</span></span>
<span class="line"></span>
<span class="line">php artisan make:operation foo/bar/QweRty.php</span>
<span class="line"><span class="token comment"># operations/foo/bar/2022_10_11_225734_qwe_rty.php</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="invokable-method" tabindex="-1"><a class="header-anchor" href="#invokable-method"><span>Invokable Method</span></a></h2><p>By default, the new operation class will contain the <code>__invoke</code> method, but you can easily replace it with public <code>up</code> name.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">use</span> <span class="token package">DragonCode<span class="token punctuation">\\</span>LaravelDeployOperations<span class="token punctuation">\\</span>Operation</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">Operation</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// some code</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note that the <code>__invoke</code> method has been added as a single call. This means that when the operation is running, it will be called, but not when it is rolled back.</p><p>You should also pay attention to the fact that if there is an <code>__invoke</code> method in the class, the <code>down</code> method will not be called.</p></blockquote><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">use</span> <span class="token package">DragonCode<span class="token punctuation">\\</span>LaravelDeployOperations<span class="token punctuation">\\</span>Operation</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">Operation</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// called when \`php artisan operations\` running</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// doesn&#39;t call when \`php artisan migrate:rollback\` running</span></span>
<span class="line">                                    <span class="token comment">// and any other commands to revert the operation.  </span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dependency-injection" tabindex="-1"><a class="header-anchor" href="#dependency-injection"><span>Dependency Injection</span></a></h2><p>You can also use the dependency injection with <code>__invoke</code>, <code>up</code> and <code>down</code> methods:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">use</span> <span class="token package">DragonCode<span class="token punctuation">\\</span>LaravelDeployOperations<span class="token punctuation">\\</span>Operation</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Tests<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Some</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">Operation</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__invoke</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Some</span> <span class="token variable">$some</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$value</span> <span class="token operator">=</span> <span class="token variable">$some</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;qwerty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre><code><span class="line"><span class="token keyword">use</span> <span class="token package">DragonCode<span class="token punctuation">\\</span>LaravelDeployOperations<span class="token punctuation">\\</span>Operation</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">use</span> <span class="token package">Tests<span class="token punctuation">\\</span>Concerns<span class="token punctuation">\\</span>Some</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">extends</span> <span class="token class-name">Operation</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Some</span> <span class="token variable">$some</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$value</span> <span class="token operator">=</span> <span class="token variable">$some</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;qwerty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">down</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Some</span> <span class="token variable">$some</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token variable">$value</span> <span class="token operator">=</span> <span class="token variable">$some</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;qwerty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const c=s(t,[["render",i],["__file","creating.html.vue"]]),r=JSON.parse(`{"path":"/guide/creating.html","title":"Creating Operations","lang":"en-US","frontmatter":{"description":"Creating Operations To create an operation use the make:operation artisan command: The new operation's file will be placed in your operations directory in the base path of your ...","head":[["meta",{"property":"og:url","content":"https://deploy-operations.dragon-code.pro/guide/creating.html"}],["meta",{"property":"og:site_name","content":"Laravel Deploy Operations"}],["meta",{"property":"og:title","content":"Creating Operations"}],["meta",{"property":"og:description","content":"Creating Operations To create an operation use the make:operation artisan command: The new operation's file will be placed in your operations directory in the base path of your ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-12T15:12:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T15:12:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Creating Operations\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T15:12:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Asks For File Name","slug":"asks-for-file-name","link":"#asks-for-file-name","children":[]},{"level":2,"title":"Automatically Generate A File Name","slug":"automatically-generate-a-file-name","link":"#automatically-generate-a-file-name","children":[]},{"level":2,"title":"Nested Files","slug":"nested-files","link":"#nested-files","children":[]},{"level":2,"title":"Invokable Method","slug":"invokable-method","link":"#invokable-method","children":[]},{"level":2,"title":"Dependency Injection","slug":"dependency-injection","link":"#dependency-injection","children":[]}],"git":{"updatedTime":1718205153000},"autoDesc":true,"filePathRelative":"guide/creating.md"}`);export{c as comp,r as data};
