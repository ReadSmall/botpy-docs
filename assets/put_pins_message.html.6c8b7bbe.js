import{_ as s,o as a,c as n,a as e}from"./app.b78ca57a.js";const l={},t=e(`<h1 id="\u521B\u5EFA\u7CBE\u534E\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7CBE\u534E\u6D88\u606F" aria-hidden="true">#</a> \u521B\u5EFA\u7CBE\u534E\u6D88\u606F</h1><p>\u7528\u4E8E\u5C06<code>messageId</code>\u6DFB\u52A0\u4E3A\u5B50\u9891\u9053 <code>channelId</code> \u5185\u7684\u7CBE\u534E\u6D88\u606F\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>\u7CBE\u534E\u6D88\u606F\u5728\u4E00\u4E2A\u5B50\u9891\u9053\u5185\u6700\u591A\u53EA\u80FD\u521B\u5EFA <code>20</code> \u6761\u3002</li><li>\u53EA\u6709\u53EF\u89C1\u7684\u6D88\u606F\u624D\u80FD\u88AB\u8BBE\u7F6E\u4E3A\u7CBE\u534E\u6D88\u606F\u3002</li><li>\u63A5\u53E3\u8FD4\u56DE\u5BF9\u8C61\u4E2D <code>message_ids</code> \u4E3A\u5F53\u524D\u8BF7\u6C42\u540E\u5B50\u9891\u9053\u5185\u6240\u6709\u7CBE\u534E\u6D88\u606F <code>message_id</code> \u6570\u7EC4\u3002</li></ul></div><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><div class="language-python ext-py line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> botpy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> botpy.message </span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> Message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MyClient</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">botpy</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Client</span><span style="color:#D4D4D4;">):</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">on_at_message_create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">: Message):</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">self</span><span style="color:#D4D4D4;">.api.put_pin(</span><span style="color:#9CDCFE;">channel_id</span><span style="color:#D4D4D4;">=message.channel_id, </span><span style="color:#9CDCFE;">message_id</span><span style="color:#D4D4D4;">=message.id)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">intents = botpy.Intents(</span><span style="color:#9CDCFE;">public_guild_messages</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">True</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">client = MyClient(</span><span style="color:#9CDCFE;">intents</span><span style="color:#D4D4D4;">=intents)</span></span>
<span class="line"><span style="color:#D4D4D4;">client.run(</span><span style="color:#9CDCFE;">appid</span><span style="color:#D4D4D4;">={appid}, </span><span style="color:#9CDCFE;">token</span><span style="color:#D4D4D4;">={token})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>channel_id</td><td>\u662F</td><td>string</td><td>\u5B50\u9891\u9053 ID</td></tr><tr><td>message_id</td><td>\u662F</td><td>string</td><td>\u6D88\u606F ID</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u8BF4\u660E" aria-hidden="true">#</a> \u8FD4\u56DE\u8BF4\u660E</h2><p>\u8FD4\u56DE <a href="#pinsmessage">PinsMessage</a> \u5BF9\u8C61\u3002</p><h3 id="pinsmessage" tabindex="-1"><a class="header-anchor" href="#pinsmessage" aria-hidden="true">#</a> PinsMessage</h3><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>guild_id</td><td>string</td><td>\u9891\u9053 ID</td></tr><tr><td>channel_id</td><td>string</td><td>\u5B50\u9891\u9053 ID</td></tr><tr><td>message_ids</td><td>string \u5217\u8868</td><td>\u6D88\u606F ID \u5217\u8868</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u793A\u4F8B" aria-hidden="true">#</a> \u8FD4\u56DE\u793A\u4F8B</h2><p><code>data</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;guild_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;xxxxxx&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;channel_id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;xxxxxx&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;message_ids&quot;</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">&quot;xxxxx&quot;</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[t];function p(i,c){return a(),n("div",null,o)}var r=s(l,[["render",p],["__file","put_pins_message.html.vue"]]);export{r as default};