import{_ as e,r as t,o,c as p,b as s,d as r,w as c,a,e as n}from"./app.b78ca57a.js";const D={},i=a(`<h1 id="\u83B7\u53D6\u9891\u9053\u6210\u5458\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u9891\u9053\u6210\u5458\u5217\u8868" aria-hidden="true">#</a> \u83B7\u53D6\u9891\u9053\u6210\u5458\u5217\u8868</h1><p>\u83B7\u53D6\u9891\u9053\u4E0B\u7684\u6210\u5458\u5217\u8868\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><ul><li>\u516C\u57DF\u673A\u5668\u4EBA\u6682\u4E0D\u652F\u6301\u7533\u8BF7\uFF0C\u4EC5\u79C1\u57DF\u673A\u5668\u4EBA\u53EF\u7528\uFF0C\u9009\u62E9\u79C1\u57DF\u673A\u5668\u4EBA\u540E\u9ED8\u8BA4\u5F00\u901A\u3002</li><li>\u6CE8\u610F: \u5F00\u901A\u540E\u9700\u8981\u5148\u5C06\u673A\u5668\u4EBA\u4ECE\u9891\u9053\u79FB\u9664\uFF0C\u7136\u540E\u91CD\u65B0\u6DFB\u52A0\uFF0C\u65B9\u53EF\u751F\u6548\u3002</li></ul></div><h2 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u793A\u4F8B</h2><div class="language-python ext-py line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> botpy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> botpy.message </span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> Message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MyClient</span><span style="color:#D4D4D4;">(</span><span style="color:#4EC9B0;">botpy</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Client</span><span style="color:#D4D4D4;">):</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">def</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">on_at_message_create</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">: Message):</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">self</span><span style="color:#D4D4D4;">.api.get_guild_members(</span><span style="color:#9CDCFE;">guild_id</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;xxxx&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">after</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;0&quot;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">limit</span><span style="color:#D4D4D4;">=</span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">intents = botpy.Intents(</span><span style="color:#9CDCFE;">public_guild_messages</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">True</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">client = MyClient(</span><span style="color:#9CDCFE;">intents</span><span style="color:#D4D4D4;">=intents)</span></span>
<span class="line"><span style="color:#D4D4D4;">client.run(</span><span style="color:#9CDCFE;">appid</span><span style="color:#D4D4D4;">={appid}, </span><span style="color:#9CDCFE;">token</span><span style="color:#D4D4D4;">={token})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>guild_id</td><td>\u662F</td><td>string</td><td>\u9891\u9053 ID</td></tr><tr><td>after</td><td>\u5426</td><td>string</td><td>\u4E0A\u4E00\u6B21\u56DE\u5305\u4E2D\u6700\u5927\u7684\u7528\u6237 ID\uFF0C \u5982\u679C\u662F\u7B2C\u4E00\u6B21\u8BF7\u6C42\u586B 0\uFF0C\u9ED8\u8BA4\u4E3A 0</td></tr><tr><td>limit</td><td>\u5426</td><td>number</td><td>\u5206\u9875\u5927\u5C0F\uFF0C1-1000\uFF0C\u9ED8\u8BA4\u662F 1</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u8BF4\u660E" aria-hidden="true">#</a> \u8FD4\u56DE\u8BF4\u660E</h2><p>\u8FD4\u56DE <a href="#member">Member</a> \u5BF9\u8C61\u3002</p><h2 id="member" tabindex="-1"><a class="header-anchor" href="#member" aria-hidden="true">#</a> Member</h2>`,10),d=s("thead",null,[s("tr",null,[s("th",null,"\u5B57\u6BB5\u540D"),s("th",null,"\u7C7B\u578B"),s("th",null,"\u63CF\u8FF0")])],-1),u=s("tr",null,[s("td",null,"user"),s("td",null,[s("a",{href:"#user"},"User")]),s("td",null,"\u7528\u6237\u7684\u9891\u9053\u57FA\u7840\u4FE1\u606F\uFF0C\u53EA\u6709\u6210\u5458\u76F8\u5173\u63A5\u53E3\u4E2D\u4F1A\u586B\u5145\u6B64\u4FE1\u606F")],-1),y=s("tr",null,[s("td",null,"nick"),s("td",null,"string"),s("td",null,"\u7528\u6237\u5728\u9891\u9053\u5185\u7684\u6635\u79F0")],-1),h=s("td",null,"roles",-1),C=s("td",null,"string[]",-1),m=n("\u7528\u6237\u5728\u9891\u9053\u5185\u7684\u8EAB\u4EFD\u7EC4 ID\uFF0C\u9ED8\u8BA4\u503C\u53EF\u53C2\u8003"),v=n("DefaultRoleIDs"),b=s("tr",null,[s("td",null,"joined_at"),s("td",null,"string"),s("td",null,[n("\u7528\u6237\u52A0\u5165\u9891\u9053\u7684\u65F6\u95F4\uFF0C\u662F\u4E2A "),s("code",null,"ISO8601 timestamp"),n(' \u5B57\u7B26\u4E32\uFF0C\u4F8B\uFF1A"2021-11-23T15:16:48+08:00"')])],-1),_=a(`<h2 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> User</h2><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>\u7528\u6237 ID</td></tr><tr><td>username</td><td>string</td><td>\u7528\u6237\u540D</td></tr><tr><td>avatar</td><td>string</td><td>\u7528\u6237\u5934\u50CF\u5730\u5740</td></tr><tr><td>bot</td><td>boolean</td><td>\u662F\u5426\u662F\u673A\u5668\u4EBA</td></tr></tbody></table><h2 id="\u8FD4\u56DE\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u793A\u4F8B" aria-hidden="true">#</a> \u8FD4\u56DE\u793A\u4F8B</h2><p><code>data</code>\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">[</span></span>
<span class="line"><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;user&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;id&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;\u7528\u6237 ID&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;username&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;\u7528\u6237\u540D&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;avatar&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;\u7528\u6237\u5934\u50CF\u5730\u5740&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;bot&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;public_flags&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;system&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;nick&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;roles&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&quot;4&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;joined_at&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;2021-11-23T15:16:48+08:00&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;deaf&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;mute&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;pending&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">false</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function q(E,f){const l=t("RouterLink");return o(),p("div",null,[i,s("table",null,[d,s("tbody",null,[u,y,s("tr",null,[h,C,s("td",null,[m,r(l,{to:"/develop/model/role.html#defaultroleids"},{default:c(()=>[v]),_:1})])]),b])]),_])}var F=e(D,[["render",q],["__file","get_guild_members.html.vue"]]);export{F as default};