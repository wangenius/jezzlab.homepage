"use strict";(self.webpackChunkwangenius=self.webpackChunkwangenius||[]).push([[7400],{5574:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var t=n(4848),s=n(8453);const c={title:"vector",sidebar_position:2,slug:"vector"},i="vector",d={id:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL/vector",title:"vector",description:"\u5411\u91cf\uff08Vector\uff09\u662f\u4e00\u4e2a\u5c01\u88c5\u4e86\u52a8\u6001\u5927\u5c0f\u6570\u7ec4\u7684\u987a\u5e8f\u5bb9\u5668\uff08Sequence Container\uff09\u3002\u8ddf\u4efb\u610f\u5176\u5b83\u7c7b\u578b\u5bb9\u5668\u4e00\u6837\uff0c\u5b83\u80fd\u591f\u5b58\u653e\u5404\u79cd\u7c7b\u578b\u7684\u5bf9\u8c61\u3002\u53ef\u4ee5\u7b80\u5355\u7684\u8ba4\u4e3a\uff0c\u5411\u91cf\u662f\u4e00\u4e2a\u80fd\u591f\u5b58\u653e\u4efb\u610f\u7c7b\u578b\u7684\u52a8\u6001\u6570\u7ec4\u3002",source:"@site/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/vector.mdx",sourceDirName:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL",slug:"/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/vector",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/vector",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/vector.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"vector",sidebar_position:2,slug:"vector"},sidebar:"cpp",previous:{title:"array",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/array"},next:{title:"\u8fed\u4ee3\u5668",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u8fed\u4ee3\u5668"}},l={},o=[{value:"vector \u8fed\u4ee3\u5668",id:"vector-\u8fed\u4ee3\u5668",level:2},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:2},{value:"\u6210\u5458\u51fd\u6570",id:"\u6210\u5458\u51fd\u6570",level:2},{value:"\u8d4b\u503c",id:"\u8d4b\u503c",level:3},{value:"\u5927\u5c0f\u64cd\u4f5c",id:"\u5927\u5c0f\u64cd\u4f5c",level:3},{value:"\u5b58\u53d6\u64cd\u4f5c",id:"\u5b58\u53d6\u64cd\u4f5c",level:3},{value:"\u63d2\u5165\u548c\u5220\u9664",id:"\u63d2\u5165\u548c\u5220\u9664",level:3}];function h(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"vector",children:"vector"}),"\n",(0,t.jsx)(r.p,{children:"\u5411\u91cf\uff08Vector\uff09\u662f\u4e00\u4e2a\u5c01\u88c5\u4e86\u52a8\u6001\u5927\u5c0f\u6570\u7ec4\u7684\u987a\u5e8f\u5bb9\u5668\uff08Sequence Container\uff09\u3002\u8ddf\u4efb\u610f\u5176\u5b83\u7c7b\u578b\u5bb9\u5668\u4e00\u6837\uff0c\u5b83\u80fd\u591f\u5b58\u653e\u5404\u79cd\u7c7b\u578b\u7684\u5bf9\u8c61\u3002\u53ef\u4ee5\u7b80\u5355\u7684\u8ba4\u4e3a\uff0c\u5411\u91cf\u662f\u4e00\u4e2a\u80fd\u591f\u5b58\u653e\u4efb\u610f\u7c7b\u578b\u7684\u52a8\u6001\u6570\u7ec4\u3002"}),"\n",(0,t.jsxs)(r.admonition,{title:"vector\u548carray\u7684\u533a\u522b",type:"success",children:[(0,t.jsx)(r.p,{children:"vector\u7684\u6570\u636e\u5b89\u6392\u53ca\u64cd\u4f5c\u65b9\u5f0f\uff0c\u4e0earray\u975e\u5e38\u76f8\u4f3c\uff0c\u4e24\u8005\u7684\u552f\u4e00\u5dee\u522b\u5728\u4e8e\u7a7a\u95f4\u7684\u8fd0\u7528\u7684\u7075\u6d3b\u6027\u3002"}),(0,t.jsx)(r.p,{children:"array\u662f\u9759\u6001\u7a7a\u95f4\uff0c\u4e00\u65e6\u914d\u7f6e\u4e86\u4e00\u822c\u4e0d\u80fd\u6539\u53d8\uff0c\u5982\u679c\u8981\u6539\u53d8\u7a7a\u95f4\u5927\u5c0f\uff0c\u9700\u8981\u81ea\u884c\u5b8c\u6210\u4ee5\u4e0b\u4e09\u4e2a\u6b65\u9aa4\uff1a"}),(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"\u914d\u7f6e\u4e00\u5757\u65b0\u7684\u7a7a\u95f4"}),"\n",(0,t.jsx)(r.li,{children:"\u5c06\u65e7\u6570\u636e\u642c\u5f80\u65b0\u7684\u7a7a\u95f4"}),"\n",(0,t.jsx)(r.li,{children:"\u91ca\u653e\u539f\u6765\u7684\u7a7a\u95f4"}),"\n"]}),(0,t.jsx)(r.p,{children:"\u800cvector\u662f\u52a8\u6001\u7a7a\u95f4\uff0c\u4f46\u5176\u5b9evector\u7684\u52a8\u6001\u4e5f\u662f\u5bf9\u4e8e\u4e0a\u8ff0\u8fc7\u7a0b\u7684\u5c01\u88c5\uff0c\u5e76\u4e14vector\u914d\u7f6e\u7a7a\u95f4\u7684\u7b56\u7565\u4e5f\u8003\u8651\u4e86\u8fd0\u884c\u6210\u672c\uff0c\u91c7\u7528\u7279\u5b9a\u7684\u6269\u5c55\u7684\u7b56\u7565\uff08\u5e76\u4e0d\u662f\u7b80\u5355\u7684\u6210\u500d\u6269\u5c55\uff09\u3002"})]}),"\n",(0,t.jsx)(r.p,{children:"vector\u91c7\u7528\u7684\u6570\u636e\u7ed3\u6784\u975e\u5e38\u7b80\u5355\uff0c\u7ebf\u6027\u8fde\u7eed\u7a7a\u95f4\uff0c\u5b83\u4ee5\u4e24\u4e2a\u8fed\u4ee3\u5668_Myfirst\u548c_Mylast\u5206\u522b\u6307\u5411\u914d\u7f6e\u5f97\u6765\u7684\u8fde\u7eed\u7a7a\u95f4\u4e2d\u5df2\u88ab\u4f7f\u7528\u7684\u8303\u56f4\uff0c\u5e76\u4ee5\u8fed\u4ee3\u5668Myend\u6307\u5411\u6574\u5757\u8fde\u7eed\u5185\u5b58\u7a7a\u95f4\u7684\u5c3e\u7aef\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u4e3a\u4e86\u964d\u4f4e\u7a7a\u95f4\u914d\u7f6e\u65f6\u7684\u6210\u672c\uff0cvector\u5b9e\u9645\u914d\u7f6e\u7684\u5927\u5c0f\u53ef\u80fd\u6bd4\u7528\u6237\u7aef\u9700\u6c42\u5927\u4e00\u4e9b\uff0c\u4ee5\u5907\u5c06\u6765\u53ef\u80fd\u7684\u6269\u5145\uff0c\u8fd9\u4fbf\u662f\u5bb9\u91cf\u7684\u6982\u5ff5\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2avector\u5bb9\u5668\u7684\u5bb9\u91cf\u6c38\u8fdc\u5927\u4e8e\u7b49\u4e8e\u5176\u5927\u5c0f\uff0c\u4e00\u65e6\u5bb9\u91cf\u7b49\u4e8e\u5927\u5c0f\uff0c\u4fbf\u662f\u6ee1\u8f7d\uff0c\u4e0b\u6b21\u518d\u6709\u65b0\u589e\u5143\u7d20\uff0c\u6574\u4e2avector\u5bb9\u5668\u5c31\u5f97\u53e6\u89c5\u5c45\u6240\u3002"}),"\n",(0,t.jsx)(r.p,{children:"vector \u662f\u8868\u793a\u53ef\u4ee5\u6539\u53d8\u5927\u5c0f\u7684\u6570\u7ec4\u7684\u5e8f\u5217\u5bb9\u5668\u3002"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u65b9\u6cd5"}),(0,t.jsx)(r.th,{children:"\u542b\u4e49"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"vector"}),(0,t.jsx)(r.td,{children:"\u6784\u9020\u51fd\u6570"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"~vector"}),(0,t.jsx)(r.td,{children:"\u6790\u6784\u51fd\u6570\uff0c\u9500\u6bc1\u5bb9\u5668\u5bf9\u8c61"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"operator="}),(0,t.jsx)(r.td,{children:"\u5c06\u65b0\u5185\u5bb9\u5206\u914d\u7ed9\u5bb9\u5668\uff0c\u66ff\u6362\u5176\u5f53\u524d\u5185\u5bb9\uff0c\u5e76\u76f8\u5e94\u5730\u4fee\u6539\u5176\u5927\u5c0f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"begin"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"end"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u540e\u7684\u7406\u8bba\u5143\u7d20\u7684\u8fed\u4ee3\u5668"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rbegin"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u53cd\u5411\u8fed\u4ee3\u5668"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"rend"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u4e00\u4e2a\u53cd\u5411\u8fed\u4ee3\u5668\uff0c\u6307\u5411\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u524d\u7684\u7406\u8bba\u5143\u7d20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cbegin"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u5e38\u91cf\u8fed\u4ee3\u5668\uff08const_iterator\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"cend"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u540e\u7684\u7406\u8bba\u5143\u7d20\u7684\u5e38\u91cf\u8fed\u4ee3\u5668\uff08const_iterator\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"crbegin"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u5e38\u91cf\u53cd\u5411\u8fed\u4ee3\u5668\uff08const_reverse_iterator\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"crend"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u524d\u7684\u7406\u8bba\u5143\u7d20\u7684\u5e38\u91cf\u53cd\u5411\u8fed\u4ee3\u5668\uff08const_reverse_iterator\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"size"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5bb9\u5668\u4e2d\u5143\u7d20\u7684\u6570\u91cf"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"max_size"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5bb9\u5668\u53ef\u5bb9\u7eb3\u7684\u6700\u5927\u5143\u7d20\u6570"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resize"}),(0,t.jsx)(r.td,{children:"\u8c03\u6574\u5bb9\u5668\u7684\u5927\u5c0f\uff0c\u4f7f\u5176\u5305\u542b n\uff08\u53c2\u6570\uff09\u4e2a\u5143\u7d20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"capacity"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5f53\u524d\u4e3a vector \u5206\u914d\u7684\u5b58\u50a8\u7a7a\u95f4\uff08\u5bb9\u91cf\uff09\u7684\u5927\u5c0f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"empty"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de vector \u662f\u5426\u4e3a\u7a7a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"reserve"}),(0,t.jsx)(r.td,{children:"\u8bf7\u6c42 vector \u5bb9\u91cf\u81f3\u5c11\u8db3\u4ee5\u5305\u542b n\uff08\u53c2\u6570\uff09\u4e2a\u5143\u7d20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"shrink_to_fit"}),(0,t.jsx)(r.td,{children:"\u8981\u6c42\u5bb9\u5668\u51cf\u5c0f\u5176 capacity\uff08\u5bb9\u91cf\uff09\u4ee5\u9002\u5e94\u5176 size\uff08\u5143\u7d20\u6570\u91cf\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"operator[]"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5bb9\u5668\u4e2d\u7b2c n\uff08\u53c2\u6570\uff09\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"at"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5bb9\u5668\u4e2d\u7b2c n\uff08\u53c2\u6570\uff09\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"front"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5bf9\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"back"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5bf9\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"data"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u6307\u9488"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"assign"}),(0,t.jsx)(r.td,{children:"\u5c06\u65b0\u5185\u5bb9\u5206\u914d\u7ed9 vector\uff0c\u66ff\u6362\u5176\u5f53\u524d\u5185\u5bb9\uff0c\u5e76\u76f8\u5e94\u5730\u4fee\u6539\u5176 size"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"push_back"}),(0,t.jsx)(r.td,{children:"\u5728\u5bb9\u5668\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u540e\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pop_back"}),(0,t.jsx)(r.td,{children:"\u5220\u9664\u5bb9\u5668\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u6709\u6548\u5730\u5c06\u5bb9\u5668 size \u51cf\u5c11\u4e00\u4e2a"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"insert"}),(0,t.jsx)(r.td,{children:"\u901a\u8fc7\u5728\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20\u4e4b\u524d\u63d2\u5165\u65b0\u5143\u7d20\u6765\u6269\u5c55\u8be5\u5bb9\u5668\uff0c\u901a\u8fc7\u63d2\u5165\u5143\u7d20\u7684\u6570\u91cf\u6709\u6548\u5730\u589e\u52a0\u5bb9\u5668\u5927\u5c0f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"erase"}),(0,t.jsx)(r.td,{children:"\u4ece vector \u4e2d\u5220\u9664\u5355\u4e2a\u5143\u7d20\uff08position\uff09\u6216\u4e00\u7cfb\u5217\u5143\u7d20\uff08[first\uff0clast)\uff09\uff0c\u8fd9\u6709\u6548\u5730\u51cf\u5c11\u4e86\u88ab\u53bb\u9664\u7684\u5143\u7d20\u7684\u6570\u91cf\uff0c\u4ece\u800c\u7834\u574f\u4e86\u5bb9\u5668\u7684\u5927\u5c0f"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"swap"}),(0,t.jsx)(r.td,{children:"\u901a\u8fc7 x\uff08\u53c2\u6570\uff09\u7684\u5185\u5bb9\u4ea4\u6362\u5bb9\u5668\u7684\u5185\u5bb9\uff0cx \u662f\u53e6\u4e00\u4e2a\u7c7b\u578b\u76f8\u540c\u3001size \u53ef\u80fd\u4e0d\u540c\u7684 vector \u5bf9\u8c61"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"clear"}),(0,t.jsx)(r.td,{children:"\u4ece vector \u4e2d\u5220\u9664\u6240\u6709\u7684\u5143\u7d20\uff08\u88ab\u9500\u6bc1\uff09\uff0c\u7559\u4e0b size \u4e3a 0 \u7684\u5bb9\u5668"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"emplace"}),(0,t.jsx)(r.td,{children:"\u901a\u8fc7\u5728 position\uff08\u53c2\u6570\uff09\u4f4d\u7f6e\u5904\u63d2\u5165\u65b0\u5143\u7d20 args\uff08\u53c2\u6570\uff09\u6765\u6269\u5c55\u5bb9\u5668"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"emplace_back"}),(0,t.jsx)(r.td,{children:"\u5728 vector \u7684\u672b\u5c3e\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u5143\u7d20\uff0c\u7d27\u8ddf\u5728\u5f53\u524d\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u540e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"get_allocator"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u4e0evector\u5173\u8054\u7684\u6784\u9020\u5668\u5bf9\u8c61\u7684\u526f\u672c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"swap(vector)"}),(0,t.jsx)(r.td,{children:"\u5bb9\u5668 x\uff08\u53c2\u6570\uff09\u7684\u5185\u5bb9\u4e0e\u5bb9\u5668 y\uff08\u53c2\u6570\uff09\u7684\u5185\u5bb9\u4ea4\u6362\u3002\u4e24\u4e2a\u5bb9\u5668\u5bf9\u8c61\u90fd\u5fc5\u987b\u662f\u76f8\u540c\u7684\u7c7b\u578b\uff08\u76f8\u540c\u7684\u6a21\u677f\u53c2\u6570\uff09"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"relational operators (vector)"}),(0,t.jsxs)(r.td,{children:["\u5f62\u5982 ",(0,t.jsx)(r.code,{children:"vectorA > vectorB"}),"\uff1b\u4f9d\u6b64\u6bd4\u8f83\u6bcf\u4e2a\u5143\u7d20\u7684\u5927\u5c0f\u5173\u7cfb"]})]})]})]}),"\n",(0,t.jsxs)(r.admonition,{title:"\u6570\u636e\u7ed3\u6784",type:"tip",children:[(0,t.jsx)(r.p,{children:"\u6240\u8c13\u52a8\u6001\u589e\u52a0\u5927\u5c0f\uff0c\u5e76\u4e0d\u662f\u5728\u539f\u7a7a\u95f4\u4e4b\u540e\u7eed\u63a5\u65b0\u7a7a\u95f4\uff08\u56e0\u4e3a\u65e0\u6cd5\u4fdd\u8bc1\u539f\u7a7a\u95f4\u4e4b\u540e\u5c1a\u6709\u53ef\u914d\u7f6e\u7684\u7a7a\u95f4\uff09\uff0c\u800c\u662f\u4e00\u5757\u66f4\u5927\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u7136\u540e\u5c06\u539f\u6570\u636e\u62f7\u8d1d\u65b0\u7a7a\u95f4\uff0c\u5e76\u91ca\u653e\u539f\u7a7a\u95f4\u3002"}),(0,t.jsx)(r.p,{children:"\u56e0\u6b64\uff0c\u5bf9vector\u7684\u4efb\u4f55\u64cd\u4f5c\uff0c\u4e00\u65e6\u5f15\u8d77\u7a7a\u95f4\u7684\u91cd\u65b0\u914d\u7f6e\uff0c\u6307\u5411\u539fvector\u7684\u6240\u6709\u8fed\u4ee3\u5668\u5c31\u90fd\u5931\u6548\u4e86\u3002"})]}),"\n",(0,t.jsx)(r.h2,{id:"vector-\u8fed\u4ee3\u5668",children:"vector \u8fed\u4ee3\u5668"}),"\n",(0,t.jsx)(r.p,{children:"vector\u7ef4\u62a4\u4e00\u4e2a\u7ebf\u6027\u7a7a\u95f4\uff0c\u6240\u4ee5\u4e0d\u8bba\u5143\u7d20\u7c7b\u578b\u5982\u4f55\uff0c\u666e\u901a\u6307\u9488\u90fd\u53ef\u4ee5\u4f5c\u4e3avector\u7684\u8fed\u4ee3\u5668\u3002"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"\u56e0\u4e3avector\u8fed\u4ee3\u5668\u6240\u9700\u8981\u7684\u884c\u4e3a\uff0c\u5982operator*\uff0coperator->\uff0coperator++\uff0coperator--\uff0coperator+\uff0coperator-\uff0coperator+=\uff0coperator-=\uff0c\u666e\u901a\u6307\u9488\u5929\u751f\u5177\u5907\u3002"}),"\n",(0,t.jsx)(r.li,{children:"vector\u6307\u9488\u652f\u6301\u968f\u673a\u5b58\u53d6\uff0c\u800c\u666e\u901a\u6307\u9488\u6b63\u6709\u7740\u8fd9\u6837\u7684\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u6240\u4ee5\uff0cvector\u63d0\u4f9b\u7684\u662f\u968f\u673a\u8bbf\u95ee\u8fed\u4ee3\u5668\uff08Random Access Iterator\uff09\uff0c\u5176\u5185\u90e8\u7528\u666e\u901a\u6307\u9488\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",metastring:'title="\u4f7f\u7528\u8fed\u4ee3\u5668\u8fdb\u884c\u6b63\u5e8f\u904d\u5386"',children:"for (vector<T>::iterator it = v.begin(); it != v.end(); it++)\r\n{\r\n    cout << *it << endl;\r\n}\r\n/**\r\n * 1. \u8fed\u4ee3\u5668\u7684\u58f0\u660e\u65b9\u5f0f:  \u5bb9\u5668\u7c7b\u578b::\u8fed\u4ee3\u5668\u7c7b\u578b\r\n * 2. \u987a\u5e8f\u9996\u5c3e\u8fed\u4ee3\u5668\u7531begin()\u548cend()\u65b9\u6cd5\u751f\u6210\r\n*/\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",metastring:'title="\u4f7f\u7528\u8fed\u4ee3\u5668\u8fdb\u884c\u9006\u5411\u904d\u5386"',children:"for (vector<T>::reverse_iterator it = v.rbegin(); it != v.rend(); it++)\r\n{\r\n    cout << *it << endl;\r\n}\r\n/**\r\n  * 1. \u9006\u5411\u8fed\u4ee3\u5668\u4e0d\u518d\u662fiterator\uff0c\u800c\u662freverse_iterator\r\n  * 2. \u9006\u5e8f\u9996\u4f4d\u8fed\u4ee3\u5668\u7531rbegin()\u548crend()\u65b9\u6cd5\u751f\u6210\r\n*/\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u5224\u65ad\u8fed\u4ee3\u5668\u662f\u5426\u80fd\u968f\u673a\u8bbf\u95ee\u7684\u65b9\u6cd5:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"iterator++\uff1b\r\niterator--\uff1b\r\n//\u901a\u8fc7\u7f16\u8bd1\uff0c\u81f3\u5c11\u662f\u53cc\u5411\u8fed\u4ee3\u5668\r\n  \r\niterator = iterator + 1\uff1b\r\n//\u901a\u8fc7\u7f16\u8bd1\uff0c\u5219\u662f\u968f\u673a\u8bbf\u95ee\u8fed\u4ee3\u5668\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"vector<T> v; // \u91c7\u7528\u6a21\u7248\u7c7b\u5b9e\u73b0\uff0c\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\r\nvector<T> v(T* v1.begin(), T* v1.end()); // \u5c06v1[begin(), end())\u533a\u95f4\u4e2d\u7684\u5143\u7d20\u62f7\u8d1d\u7ed9\u672c\u8eab\r\nvector<T> v(int n, T elem); // \u5c06n\u4e2aelem\u62f7\u8d1d\u7ed9\u672c\u8eab\r\nvector<T> v(const vector<T> v1); // \u62f7\u8d1d\u6784\u9020\u51fd\u6570\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u6bd4\u5982:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"int array[5] = {1, 2, 3, 4, 5};\r\nvector<int> v(array, array + sizeof(array) / sizeof(int));\r\n// \u8054\u7cfb\u6211\u4eec\u4e4b\u524d\u63d0\u5230\u7684vector\u8fed\u4ee3\u5668\u672c\u8d28\u4e0a\u662f\u6307\u9488\u5c31\u4e0d\u96be\u7406\u89e3\u4e86\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u6210\u5458\u51fd\u6570",children:"\u6210\u5458\u51fd\u6570"}),"\n",(0,t.jsx)(r.h3,{id:"\u8d4b\u503c",children:"\u8d4b\u503c"}),"\n",(0,t.jsx)(r.p,{children:"\u7531\u4e8evector\u91c7\u7528\u6a21\u7248\u7c7b\u5b9e\u73b0\uff0c\u5176\u5b8c\u6574\u7684\u51fd\u6570\u58f0\u660e\u4f1a\u7a0d\u663e\u590d\u6742\uff0c\u4e0b\u9762\u65b9\u6cd5\u7684\u6f14\u793a\u4f1a\u7701\u7565\u7c7b\u578b\u754c\u5b9a\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"assign(beg, end); // \u5c06[beg, end)\u533a\u95f4\u4e2d\u7684\u6570\u636e\u62f7\u8d1d\u590d\u5236\u7ed9\u672c\u8eab\r\nassign(n, elem); // \u5c06n\u4e2aelem\u62f7\u8d1d\u7ed9\u672c\u8eab\r\nvector& operator=(const vector& vec); // \u91cd\u8f7d\u8d4b\u503c\u64cd\u4f5c\u7b26\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u4e92\u6362\u64cd\u4f5c\u4e5f\u53ef\u89c6\u4e3a\u4e00\u79cd\u7279\u6b8a\u7684\u8d4b\u503c\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"swap(vec); //\u5c06vec\u4e0e\u672c\u8eab\u7684\u5143\u7d20\u4e92\u6362\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u5de7\u7528swap\u6765\u6536\u7f29\u7a7a\u95f4\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"vector<int>(v).swap(v);\r\n// vector<int>(v): \u5229\u7528\u62f7\u8d1d\u6784\u9020\u51fd\u6570\u521d\u59cb\u5316\u533f\u540d\u5bf9\u8c61\r\n// swap(v): \u4ea4\u6362\u7684\u672c\u8d28\u5176\u5b9e\u53ea\u662f\u4e92\u6362\u6307\u5411\u5185\u5b58\u7684\u6307\u9488\r\n// \u533f\u540d\u5bf9\u8c61\u6307\u9488\u6307\u5411\u7684\u5185\u5b58\u4f1a\u7531\u7cfb\u7edf\u81ea\u52a8\u91ca\u653e\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u5927\u5c0f\u64cd\u4f5c",children:"\u5927\u5c0f\u64cd\u4f5c"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"int size(); // \u8fd4\u56de\u5bb9\u5668\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\r\nbool empty(); // \u5224\u65ad\u5bb9\u5668\u662f\u5426\u4e3a\u7a7a\r\n\r\nvoid resize(int num); \r\n// \u91cd\u65b0\u6307\u5b9a\u5bb9\u5668\u7684\u957f\u5ea6\u4e3anum\uff0c\u82e5\u5bb9\u5668\u53d8\u957f\uff0c\u5219\u4ee5\u9ed8\u8ba4\u503c\u586b\u5145\u65b0\u4f4d\u7f6e\u3002\r\n// \u82e5\u5bb9\u5668\u53d8\u77ed\uff0c\u5219\u672b\u5c3e\u8d85\u51fa\u5bb9\u5668\u957f\u5ea6\u7684\u5143\u7d20\u88ab\u5220\u9664\r\nvoid resize(int num, T elem); \r\n// \u91cd\u65b0\u6307\u5b9a\u5bb9\u5668\u7684\u957f\u5ea6\u4e3anum\uff0c\u82e5\u5bb9\u5668\u53d8\u957f\uff0c\u5219\u4ee5elem\u586b\u5145\u65b0\u4f4d\u7f6e\u3002\r\n// \u82e5\u5bb9\u5668\u53d8\u77ed\uff0c\u5219\u672b\u5c3e\u8d85\u51fa\u5bb9\u5668\u957f\u5ea6\u7684\u5143\u7d20\u88ab\u5220\u9664\r\n\r\nint capacity(); // \u8fd4\u56de\u5bb9\u5668\u7684\u5bb9\u91cf\r\nvoid reserve(int len); \r\n// \u5bb9\u5668\u9884\u7559len\u4e2a\u5143\u7d20\u957f\u5ea6\uff0c\u9884\u7559\u4f4d\u7f6e\u4e0d\u521d\u59cb\u5316\uff0c\u5143\u7d20\u4e0d\u53ef\u8bbf\u95ee\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u5b58\u53d6\u64cd\u4f5c",children:"\u5b58\u53d6\u64cd\u4f5c"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"T& at(int idx); // \u8fd4\u56de\u7d22\u5f15idx\u6240\u6307\u7684\u6570\u636e\uff0c\u5982\u679cidx\u8d8a\u754c\uff0c\u629b\u51faout_of_range\u5f02\u5e38\r\nT& operator[](int idx); // \u8fd4\u56de\u7d22\u5f15idx\u6240\u6307\u7684\u6570\u636e\uff0c\u5982\u679cidx\u8d8a\u754c\uff0c\u8fd0\u884c\u76f4\u63a5\u62a5\u9519\r\n\r\nT& front(); // \u8fd4\u56de\u9996\u5143\u7d20\u7684\u5f15\u7528\r\nT& back(); // \u8fd4\u56de\u5c3e\u5143\u7d20\u7684\u5f15\u7528\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u63d2\u5165\u548c\u5220\u9664",children:"\u63d2\u5165\u548c\u5220\u9664"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"insert(const_iterator pos, T elem); // \u5728pos\u4f4d\u7f6e\u5904\u63d2\u5165\u5143\u7d20elem\r\ninsert(const_iterator pos, int n, T elem); // \u5728pos\u4f4d\u7f6e\u63d2\u5165n\u4e2a\u5143\u7d20elem\r\ninsert(pos, beg, end); // \u5c06[beg, end)\u533a\u95f4\u5185\u7684\u5143\u7d20\u63d2\u5230\u4f4d\u7f6epos\r\npush_back(T elem); // \u5c3e\u90e8\u63d2\u5165\u5143\u7d20elem\r\npop_back(); // \u5220\u9664\u6700\u540e\u4e00\u4e2a\u5143\u7d20\r\n\r\nerase(const_iterator start, const_iterator end); // \u5220\u9664\u533a\u95f4[start, end)\u5185\u7684\u5143\u7d20\r\nerase(const_iterator pos); // \u5220\u9664\u4f4d\u7f6epos\u7684\u5143\u7d20\r\n\r\nclear(); // \u5220\u9664\u5bb9\u5668\u4e2d\u7684\u6240\u6709\u5143\u7d20\n"})})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var t=n(6540);const s={},c=t.createContext(s);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);