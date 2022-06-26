import{_ as t,o as d,c as e,a as r}from"./app.b78ca57a.js";const s={},a=r('<h1 id="\u5B50\u9891\u9053\u6743\u9650\u5BF9\u8C61-channelpermissions" tabindex="-1"><a class="header-anchor" href="#\u5B50\u9891\u9053\u6743\u9650\u5BF9\u8C61-channelpermissions" aria-hidden="true">#</a> \u5B50\u9891\u9053\u6743\u9650\u5BF9\u8C61(ChannelPermissions)</h1><h3 id="channelpermissions" tabindex="-1"><a class="header-anchor" href="#channelpermissions" aria-hidden="true">#</a> ChannelPermissions</h3><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>channel_id</td><td>string</td><td>\u5B50\u9891\u9053 ID</td></tr><tr><td>user_id</td><td>string</td><td>\u7528\u6237 ID</td></tr><tr><td>permissions</td><td>string</td><td>\u7528\u6237\u62E5\u6709\u7684\u5B50\u9891\u9053\u6743\u9650\uFF0C\u5177\u4F53\u503C\u53C2\u8003<a href="#permissions">permissions</a></td></tr></tbody></table><h3 id="permissions" tabindex="-1"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> Permissions</h3><p>\u6743\u9650\u662F QQ \u9891\u9053\u7BA1\u7406\u9891\u9053\u6210\u5458\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u7BA1\u7406\u5458\u53EF\u4EE5\u5BF9\u4E0D\u540C\u7684\u4EBA\u3001\u4E0D\u540C\u7684\u5B50\u9891\u9053\u8BBE\u7F6E\u7279\u5B9A\u7684\u6743\u9650\u3002\u7528\u6237\u7684\u6743\u9650\u5305\u62EC<strong>\u4E2A\u4EBA\u6743\u9650</strong>\u548C<strong>\u8EAB\u4EFD\u7EC4\u6743\u9650</strong>\u4E24\u90E8\u5206\uFF0C\u6700\u7EC8\u751F\u6548\u662F\u53D6\u4E24\u79CD\u6743\u9650\u7684\u5E76\u96C6\u3002</p><p><em>\u6CE8\u610F\uFF1A\u4E0D\u80FD\u8BBE\u7F6EID\u4E3A1\u7684\u8EAB\u4EFD\u7EC4\u6743\u9650\u3002\u903B\u8F91\u4E0A\u672A\u83B7\u5F97\u4EFB\u4F55\u8EAB\u4EFD\u7EC4\u6743\u9650\u7684\u666E\u901A\u7528\u6237\u88AB\u5F52\u5230&quot;\u666E\u901A\u7528\u6237&quot;\u8EAB\u4EFD\u7EC4\uFF08ID=1\uFF09\u3002</em></p><p>\u6743\u9650\u4F7F\u7528\u4F4D\u56FE\u8868\u793A\uFF0C\u4F20\u9012\u65F6\u5E8F\u5217\u5316\u4E3A\u5341\u8FDB\u5236\u6570\u503C\u5B57\u7B26\u4E32\u3002\u5982\u6743\u9650\u503C\u4E3A<code>0x6FFF</code>\uFF0C\u4F1A\u88AB\u5E8F\u5217\u5316\u4E3A\u5341\u8FDB\u5236<code>&quot;28671&quot;</code>\u3002</p><table><thead><tr><th>\u6743\u9650</th><th>\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u53EF\u67E5\u770B\u5B50\u9891\u9053</td><td>0x0000000001 (1 &lt;&lt; 0)</td><td>\u76EE\u524D\u4EC5\u652F\u6301<code>\u6307\u5B9A\u6210\u5458</code>\u53EF\u89C1\u7C7B\u578B\uFF0C\u4E0D\u652F\u6301<code>\u8EAB\u4EFD\u7EC4</code>\u53EF\u89C1\u7C7B\u578B</td></tr><tr><td>\u53EF\u7BA1\u7406\u5B50\u9891\u9053</td><td>0x0000000002 (1 &lt;&lt; 1)</td><td>\u521B\u5EFA\u8005\u3001\u7BA1\u7406\u5458\u3001\u5B50\u9891\u9053\u7BA1\u7406\u5458\u90FD\u5177\u6709\u6B64\u6743\u9650</td></tr><tr><td>\u53EF\u53D1\u8A00\u5B50\u9891\u9053</td><td>0x0000000004 (1 &lt;&lt; 2)</td><td>\u652F\u6301<code>\u6307\u5B9A\u6210\u5458</code>\u53D1\u8A00\u7C7B\u578B\uFF0C\u652F\u6301<code>\u8EAB\u4EFD\u7EC4</code>\u53D1\u8A00\u7C7B\u578B</td></tr><tr><td>\u53EF\u76F4\u64AD\u5B50\u9891\u9053</td><td>0x0000000004 (1 &lt;&lt; 3)</td><td>\u652F\u6301<code>\u6307\u5B9A\u6210\u5458</code>\u53D1\u8D77\u76F4\u64AD\uFF0C\u652F\u6301<code>\u8EAB\u4EFD\u7EC4</code>\u53D1\u8D77\u76F4\u64AD\uFF1B\u4EC5\u53EF\u5728\u76F4\u64AD\u5B50\u9891\u9053\u4E2D\u8BBE\u7F6E</td></tr></tbody></table><h5 id="\u53C2\u6570\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u6570\u53C2\u8003</h5><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>add</td><td>string</td><td>\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u4F4D\u56FE\u8868\u793A\u8D4B\u4E88\u7528\u6237\u7684\u6743\u9650</td></tr><tr><td>remove</td><td>string</td><td>\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u4F4D\u56FE\u8868\u793A\u5220\u9664\u7528\u6237\u7684\u6743\u9650</td></tr></tbody></table>',10),n=[a];function o(h,i){return d(),e("div",null,n)}var l=t(s,[["render",o],["__file","channel_permission.html.vue"]]);export{l as default};
