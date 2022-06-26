import{_ as s,o as n,c as a,a as l}from"./app.b78ca57a.js";const e={},o=l(`<h1 id="\u673A\u5668\u4EBA\u4E0A\u9EA6" tabindex="-1"><a class="header-anchor" href="#\u673A\u5668\u4EBA\u4E0A\u9EA6" aria-hidden="true">#</a> \u673A\u5668\u4EBA\u4E0A\u9EA6</h1><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><div class="language-python ext-py line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> botpy</span></span>
<span class="line"><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> botpy.audio </span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> Audio</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MyClient</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">botpy</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Client</span><span style="color:#D4D4D4;">):</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">on_audio_start</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">audio</span><span style="color:#D4D4D4;">: Audio):</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">self</span><span style="color:#D4D4D4;">.api.on_microphone(audio.channel_id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">intents = botpy.Intents(</span><span style="color:#9CDCFE;">audio_action</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">True</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">client = MyClient(</span><span style="color:#9CDCFE;">intents</span><span style="color:#D4D4D4;">=intents)</span></span>
<span class="line"><span style="color:#D4D4D4;">client.run(</span><span style="color:#9CDCFE;">appid</span><span style="color:#D4D4D4;">={appid}, </span><span style="color:#9CDCFE;">token</span><span style="color:#D4D4D4;">={token})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>channel_id</td><td>String</td><td>\u5B50\u9891\u9053 id</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u8BF4\u660E" aria-hidden="true">#</a> \u8FD4\u56DE\u8BF4\u660E</h2><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),p=[o];function t(i,c){return n(),a("div",null,p)}var d=s(e,[["render",t],["__file","audio_on_mic.html.vue"]]);export{d as default};
