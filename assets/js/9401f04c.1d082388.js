"use strict";(self.webpackChunkwangenius=self.webpackChunkwangenius||[]).push([[9640],{5797:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=t(4848),r=t(8453);const c={},d=void 0,i={id:"lang/rust/\u6d4b\u8bd5/\u6d4b\u8bd5\u7684\u7ec4\u7ec7\u7ed3\u6784",title:"\u6d4b\u8bd5\u7684\u7ec4\u7ec7\u7ed3\u6784",description:"\u672c\u7ae0\u4e00\u5f00\u59cb\u5c31\u63d0\u5230\uff0c\u6d4b\u8bd5\u662f\u4e00\u4e2a\u590d\u6742\u7684\u6982\u5ff5\uff0c\u800c\u4e14\u4e0d\u540c\u7684\u5f00\u53d1\u8005\u4e5f\u91c7\u7528\u4e0d\u540c\u7684\u6280\u672f\u548c\u7ec4\u7ec7\u3002Rust \u793e\u533a\u503e\u5411\u4e8e\u6839\u636e\u6d4b\u8bd5\u7684\u4e24\u4e2a\u4e3b\u8981\u5206\u7c7b\u6765\u8003\u8651\u95ee\u9898\uff1a\u5355\u5143\u6d4b\u8bd5\uff08unit tests\uff09\u4e0e \u96c6\u6210\u6d4b\u8bd5\uff08integration tests\uff09\u3002\u5355\u5143\u6d4b\u8bd5\u503e\u5411\u4e8e\u66f4\u5c0f\u800c\u66f4\u96c6\u4e2d\uff0c\u5728\u9694\u79bb\u7684\u73af\u5883\u4e2d\u4e00\u6b21\u6d4b\u8bd5\u4e00\u4e2a\u6a21\u5757\uff0c\u6216\u8005\u662f\u6d4b\u8bd5\u79c1\u6709\u63a5\u53e3\u3002\u800c\u96c6\u6210\u6d4b\u8bd5\u5bf9\u4e8e\u4f60\u7684\u5e93\u6765\u8bf4\u5219\u5b8c\u5168\u662f\u5916\u90e8\u7684\u3002\u5b83\u4eec\u4e0e\u5176\u4ed6\u5916\u90e8\u4ee3\u7801\u4e00\u6837\uff0c\u901a\u8fc7\u76f8\u540c\u7684\u65b9\u5f0f\u4f7f\u7528\u4f60\u7684\u4ee3\u7801\uff0c\u53ea\u6d4b\u8bd5\u516c\u6709\u63a5\u53e3\u800c\u4e14\u6bcf\u4e2a\u6d4b\u8bd5\u90fd\u6709\u53ef\u80fd\u4f1a\u6d4b\u8bd5\u591a\u4e2a\u6a21\u5757\u3002",source:"@site/docs/lang/rust/\u6d4b\u8bd5/\u6d4b\u8bd5\u7684\u7ec4\u7ec7\u7ed3\u6784.md",sourceDirName:"lang/rust/\u6d4b\u8bd5",slug:"/lang/rust/\u6d4b\u8bd5/\u6d4b\u8bd5\u7684\u7ec4\u7ec7\u7ed3\u6784",permalink:"/docs/lang/rust/\u6d4b\u8bd5/\u6d4b\u8bd5\u7684\u7ec4\u7ec7\u7ed3\u6784",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u6d4b\u8bd5/\u6d4b\u8bd5\u7684\u7ec4\u7ec7\u7ed3\u6784.md",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u6d4b\u8bd5",permalink:"/docs/lang/rust/\u6d4b\u8bd5/"},next:{title:"\u8fd0\u884c\u6d4b\u8bd5",permalink:"/docs/lang/rust/\u6d4b\u8bd5/\u8fd0\u884c\u6d4b\u8bd5"}},o={},l=[{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"\u6d4b\u8bd5\u6a21\u5757\u548c <code>[#[cfg(test)]](https://rust.bootcss.com/ch11-03-test-organization.html#%E6%B5%8B%E8%AF%95%E6%A8%A1%E5%9D%97%E5%92%8C-cfgtest)</code>",id:"\u6d4b\u8bd5\u6a21\u5757\u548c-cfgtesthttpsrustbootcsscomch11-03-test-organizationhtmle6b58be8af95e6a8a1e59d97e5928c-cfgtest",level:4},{value:"\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570",id:"\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570",level:4},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:3},{value:"<em>tests</em> \u76ee\u5f55",id:"tests-\u76ee\u5f55",level:4},{value:"\u96c6\u6210\u6d4b\u8bd5\u4e2d\u7684\u5b50\u6a21\u5757",id:"\u96c6\u6210\u6d4b\u8bd5\u4e2d\u7684\u5b50\u6a21\u5757",level:4},{value:"\u4e8c\u8fdb\u5236 crate \u7684\u96c6\u6210\u6d4b\u8bd5",id:"\u4e8c\u8fdb\u5236-crate-\u7684\u96c6\u6210\u6d4b\u8bd5",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\u672c\u7ae0\u4e00\u5f00\u59cb\u5c31\u63d0\u5230\uff0c\u6d4b\u8bd5\u662f\u4e00\u4e2a\u590d\u6742\u7684\u6982\u5ff5\uff0c\u800c\u4e14\u4e0d\u540c\u7684\u5f00\u53d1\u8005\u4e5f\u91c7\u7528\u4e0d\u540c\u7684\u6280\u672f\u548c\u7ec4\u7ec7\u3002Rust \u793e\u533a\u503e\u5411\u4e8e\u6839\u636e\u6d4b\u8bd5\u7684\u4e24\u4e2a\u4e3b\u8981\u5206\u7c7b\u6765\u8003\u8651\u95ee\u9898\uff1a",(0,n.jsx)(s.strong,{children:"\u5355\u5143\u6d4b\u8bd5"}),"\uff08",(0,n.jsx)(s.em,{children:"unit tests"}),"\uff09\u4e0e ",(0,n.jsx)(s.strong,{children:"\u96c6\u6210\u6d4b\u8bd5"}),"\uff08",(0,n.jsx)(s.em,{children:"integration tests"}),"\uff09\u3002\u5355\u5143\u6d4b\u8bd5\u503e\u5411\u4e8e\u66f4\u5c0f\u800c\u66f4\u96c6\u4e2d\uff0c\u5728\u9694\u79bb\u7684\u73af\u5883\u4e2d\u4e00\u6b21\u6d4b\u8bd5\u4e00\u4e2a\u6a21\u5757\uff0c\u6216\u8005\u662f\u6d4b\u8bd5\u79c1\u6709\u63a5\u53e3\u3002\u800c\u96c6\u6210\u6d4b\u8bd5\u5bf9\u4e8e\u4f60\u7684\u5e93\u6765\u8bf4\u5219\u5b8c\u5168\u662f\u5916\u90e8\u7684\u3002\u5b83\u4eec\u4e0e\u5176\u4ed6\u5916\u90e8\u4ee3\u7801\u4e00\u6837\uff0c\u901a\u8fc7\u76f8\u540c\u7684\u65b9\u5f0f\u4f7f\u7528\u4f60\u7684\u4ee3\u7801\uff0c\u53ea\u6d4b\u8bd5\u516c\u6709\u63a5\u53e3\u800c\u4e14\u6bcf\u4e2a\u6d4b\u8bd5\u90fd\u6709\u53ef\u80fd\u4f1a\u6d4b\u8bd5\u591a\u4e2a\u6a21\u5757\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u4e3a\u4e86\u4fdd\u8bc1\u4f60\u7684\u5e93\u80fd\u591f\u6309\u7167\u4f60\u7684\u9884\u671f\u8fd0\u884c\uff0c\u4ece\u72ec\u7acb\u548c\u6574\u4f53\u7684\u89d2\u5ea6\u7f16\u5199\u8fd9\u4e24\u7c7b\u6d4b\u8bd5\u90fd\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002"}),"\n",(0,n.jsx)(s.h3,{id:"\u5355\u5143\u6d4b\u8bd5",children:(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95",children:"\u5355\u5143\u6d4b\u8bd5"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5355\u5143\u6d4b\u8bd5\u7684\u76ee\u7684\u662f\u5728\u4e0e\u5176\u4ed6\u90e8\u5206\u9694\u79bb\u7684\u73af\u5883\u4e2d\u6d4b\u8bd5\u6bcf\u4e00\u4e2a\u5355\u5143\u7684\u4ee3\u7801\uff0c\u4ee5\u4fbf\u4e8e\u5feb\u901f\u800c\u51c6\u786e\u7684\u67d0\u4e2a\u5355\u5143\u7684\u4ee3\u7801\u529f\u80fd\u662f\u5426\u7b26\u5408\u9884\u671f\u3002\u5355\u5143\u6d4b\u8bd5\u4e0e\u4ed6\u4eec\u8981\u6d4b\u8bd5\u7684\u4ee3\u7801\u5171\u540c\u5b58\u653e\u5728\u4f4d\u4e8e ",(0,n.jsx)(s.em,{children:"src"})," \u76ee\u5f55\u4e0b\u76f8\u540c\u7684\u6587\u4ef6\u4e2d\u3002\u89c4\u8303\u662f\u5728\u6bcf\u4e2a\u6587\u4ef6\u4e2d\u521b\u5efa\u5305\u542b\u6d4b\u8bd5\u51fd\u6570\u7684 ",(0,n.jsx)(s.code,{children:"tests"})," \u6a21\u5757\uff0c\u5e76\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"cfg(test)"})," \u6807\u6ce8\u6a21\u5757\u3002"]}),"\n",(0,n.jsxs)(s.h4,{id:"\u6d4b\u8bd5\u6a21\u5757\u548c-cfgtesthttpsrustbootcsscomch11-03-test-organizationhtmle6b58be8af95e6a8a1e59d97e5928c-cfgtest",children:[(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#%E6%B5%8B%E8%AF%95%E6%A8%A1%E5%9D%97%E5%92%8C-cfgtest",children:"\u6d4b\u8bd5\u6a21\u5757\u548c "}),(0,n.jsx)(s.code,{children:"[#[cfg(test)]](https://rust.bootcss.com/ch11-03-test-organization.html#%E6%B5%8B%E8%AF%95%E6%A8%A1%E5%9D%97%E5%92%8C-cfgtest)"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u6d4b\u8bd5\u6a21\u5757\u7684 ",(0,n.jsx)(s.code,{children:"#[cfg(test)]"})," \u6ce8\u89e3\u544a\u8bc9 Rust \u53ea\u5728\u6267\u884c ",(0,n.jsx)(s.code,{children:"cargo test"})," \u65f6\u624d\u7f16\u8bd1\u548c\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801\uff0c\u800c\u5728\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"cargo build"})," \u65f6\u4e0d\u8fd9\u4e48\u505a\u3002\u8fd9\u5728\u53ea\u5e0c\u671b\u6784\u5efa\u5e93\u7684\u65f6\u5019\u53ef\u4ee5\u8282\u7701\u7f16\u8bd1\u65f6\u95f4\uff0c\u5e76\u4e14\u56e0\u4e3a\u5b83\u4eec\u5e76\u6ca1\u6709\u5305\u542b\u6d4b\u8bd5\uff0c\u6240\u4ee5\u80fd\u51cf\u5c11\u7f16\u8bd1\u4ea7\u751f\u7684\u6587\u4ef6\u7684\u5927\u5c0f\u3002\u4e0e\u4e4b\u5bf9\u5e94\u7684\u96c6\u6210\u6d4b\u8bd5\u56e0\u4e3a\u4f4d\u4e8e\u53e6\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u6240\u4ee5\u5b83\u4eec\u5e76\u4e0d\u9700\u8981 ",(0,n.jsx)(s.code,{children:"#[cfg(test)]"})," \u6ce8\u89e3\u3002\u7136\u800c\u5355\u5143\u6d4b\u8bd5\u4f4d\u4e8e\u4e0e\u6e90\u7801\u76f8\u540c\u7684\u6587\u4ef6\u4e2d\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"#[cfg(test)]"})," \u6765\u6307\u5b9a\u4ed6\u4eec\u4e0d\u5e94\u8be5\u88ab\u5305\u542b\u8fdb\u7f16\u8bd1\u7ed3\u679c\u4e2d\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u56de\u5fc6\u672c\u7ae0\u7b2c\u4e00\u90e8\u5206\u65b0\u5efa\u7684 ",(0,n.jsx)(s.code,{children:"adder"})," \u9879\u76ee\u5417\uff0cCargo \u4e3a\u6211\u4eec\u751f\u6210\u4e86\u5982\u4e0b\u4ee3\u7801\uff1a"]}),"\n",(0,n.jsx)(s.p,{children:"\u6587\u4ef6\u540d: src/lib.rs"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Rust",children:"\r\n#[cfg(test)]\r\nmod tests {\r\n    #[test]\r\n    fn it_works() {\r\n        assert_eq!(2 + 2, 4);\r\n    }\r\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u5c31\u662f\u81ea\u52a8\u751f\u6210\u7684\u6d4b\u8bd5\u6a21\u5757\u3002",(0,n.jsx)(s.code,{children:"cfg"})," \u5c5e\u6027\u4ee3\u8868 ",(0,n.jsx)(s.em,{children:"configuration"})," \uff0c\u5b83\u544a\u8bc9 Rust \u5176\u4e4b\u540e\u7684\u9879\u53ea\u5e94\u8be5\u88ab\u5305\u542b\u8fdb\u7279\u5b9a\u914d\u7f6e\u9009\u9879\u4e2d\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u914d\u7f6e\u9009\u9879\u662f ",(0,n.jsx)(s.code,{children:"test"}),"\uff0c\u5373 Rust \u6240\u63d0\u4f9b\u7684\u7528\u4e8e\u7f16\u8bd1\u548c\u8fd0\u884c\u6d4b\u8bd5\u7684\u914d\u7f6e\u9009\u9879\u3002\u901a\u8fc7\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"cfg"})," \u5c5e\u6027\uff0cCargo \u53ea\u4f1a\u5728\u6211\u4eec\u4e3b\u52a8\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"cargo test"})," \u8fd0\u884c\u6d4b\u8bd5\u65f6\u624d\u7f16\u8bd1\u6d4b\u8bd5\u4ee3\u7801\u3002\u9700\u8981\u7f16\u8bd1\u7684\u4e0d\u4ec5\u4ec5\u6709\u6807\u6ce8\u4e3a ",(0,n.jsx)(s.code,{children:"#[test]"})," \u7684\u51fd\u6570\u4e4b\u5916\uff0c\u8fd8\u5305\u62ec\u6d4b\u8bd5\u6a21\u5757\u4e2d\u53ef\u80fd\u5b58\u5728\u7684\u5e2e\u52a9\u51fd\u6570\u3002"]}),"\n",(0,n.jsx)(s.h4,{id:"\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570",children:(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#%E6%B5%8B%E8%AF%95%E7%A7%81%E6%9C%89%E5%87%BD%E6%95%B0",children:"\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6d4b\u8bd5\u793e\u533a\u4e2d\u4e00\u76f4\u5b58\u5728\u5173\u4e8e\u662f\u5426\u5e94\u8be5\u5bf9\u79c1\u6709\u51fd\u6570\u76f4\u63a5\u8fdb\u884c\u6d4b\u8bd5\u7684\u8bba\u6218\uff0c\u800c\u5728\u5176\u4ed6\u8bed\u8a00\u4e2d\u60f3\u8981\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570\u662f\u4e00\u4ef6\u56f0\u96be\u7684\uff0c\u751a\u81f3\u662f\u4e0d\u53ef\u80fd\u7684\u4e8b\u3002\u4e0d\u8fc7\u65e0\u8bba\u4f60\u575a\u6301\u54ea\u79cd\u6d4b\u8bd5\u610f\u8bc6\u5f62\u6001\uff0cRust \u7684\u79c1\u6709\u6027\u89c4\u5219\u786e\u5b9e\u5141\u8bb8\u4f60\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570\u3002\u8003\u8651\u793a\u4f8b 11-12 \u4e2d\u5e26\u6709\u79c1\u6709\u51fd\u6570 ",(0,n.jsx)(s.code,{children:"internal_adder"})," \u7684\u4ee3\u7801\uff1a"]}),"\n",(0,n.jsx)(s.p,{children:"\u6587\u4ef6\u540d: src/lib.rs"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Rust",children:"\r\npub fn add_two(a: i32) -> i32 {\r\n    internal_adder(a, 2)\r\n}\r\n\r\nfn internal_adder(a: i32, b: i32) -> i32 {\r\n    a + b\r\n}\r\n\r\n#[cfg(test)]\r\nmod tests {\r\n    use super::*;\r\n\r\n    #[test]\r\n    fn internal() {\r\n        assert_eq!(4, internal_adder(2, 2));\r\n    }\r\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u793a\u4f8b 11-12\uff1a\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570"}),"\n",(0,n.jsxs)(s.p,{children:["\u6ce8\u610f ",(0,n.jsx)(s.code,{children:"internal_adder"})," \u51fd\u6570\u5e76\u6ca1\u6709\u6807\u8bb0\u4e3a ",(0,n.jsx)(s.code,{children:"pub"}),"\uff0c\u4e0d\u8fc7\u56e0\u4e3a\u6d4b\u8bd5\u4e5f\u4e0d\u8fc7\u662f Rust \u4ee3\u7801\u540c\u65f6 ",(0,n.jsx)(s.code,{children:"tests"})," \u4e5f\u4ec5\u4ec5\u662f\u53e6\u4e00\u4e2a\u6a21\u5757\uff0c\u6211\u4eec\u5b8c\u5168\u53ef\u4ee5\u5728\u6d4b\u8bd5\u4e2d\u5bfc\u5165\u548c\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"internal_adder"}),"\u3002\u5982\u679c\u4f60\u5e76\u4e0d\u8ba4\u4e3a\u5e94\u8be5\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570\uff0cRust \u4e5f\u4e0d\u4f1a\u5f3a\u8feb\u4f60\u8fd9\u4e48\u505a\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u96c6\u6210\u6d4b\u8bd5",children:(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95",children:"\u96c6\u6210\u6d4b\u8bd5"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5728 Rust \u4e2d\uff0c\u96c6\u6210\u6d4b\u8bd5\u5bf9\u4e8e\u4f60\u9700\u8981\u6d4b\u8bd5\u7684\u5e93\u6765\u8bf4\u5b8c\u5168\u662f\u5916\u90e8\u7684\u3002\u540c\u5176\u4ed6\u4f7f\u7528\u5e93\u7684\u4ee3\u7801\u4e00\u6837\u4f7f\u7528\u5e93\u6587\u4ef6\uff0c\u4e5f\u5c31\u662f\u8bf4\u5b83\u4eec\u53ea\u80fd\u8c03\u7528\u4e00\u90e8\u5206\u5e93\u4e2d\u7684\u516c\u6709 API \u3002\u96c6\u6210\u6d4b\u8bd5\u7684\u76ee\u7684\u662f\u6d4b\u8bd5\u5e93\u7684\u591a\u4e2a\u90e8\u5206\u80fd\u5426\u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\u3002\u4e00\u4e9b\u5355\u72ec\u80fd\u6b63\u786e\u8fd0\u884c\u7684\u4ee3\u7801\u5355\u5143\u96c6\u6210\u5728\u4e00\u8d77\u4e5f\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\uff0c\u6240\u4ee5\u96c6\u6210\u6d4b\u8bd5\u7684\u8986\u76d6\u7387\u4e5f\u662f\u5f88\u91cd\u8981\u7684\u3002\u4e3a\u4e86\u521b\u5efa\u96c6\u6210\u6d4b\u8bd5\uff0c\u4f60\u9700\u8981\u5148\u521b\u5efa\u4e00\u4e2a ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u3002"]}),"\n",(0,n.jsxs)(s.h4,{id:"tests-\u76ee\u5f55",children:[(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#tests-%E7%9B%AE%E5%BD%95",children:"tests"})}),(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#tests-%E7%9B%AE%E5%BD%95",children:" \u76ee\u5f55"})]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e3a\u4e86\u7f16\u5199\u96c6\u6210\u6d4b\u8bd5\uff0c\u9700\u8981\u5728\u9879\u76ee\u6839\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\uff0c\u4e0e ",(0,n.jsx)(s.em,{children:"src"})," \u540c\u7ea7\u3002Cargo \u77e5\u9053\u5982\u4f55\u53bb\u5bfb\u627e\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u7684\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u3002\u63a5\u7740\u53ef\u4ee5\u968f\u610f\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u521b\u5efa\u4efb\u610f\u591a\u7684\u6d4b\u8bd5\u6587\u4ef6\uff0cCargo \u4f1a\u5c06\u6bcf\u4e00\u4e2a\u6587\u4ef6\u5f53\u4f5c\u5355\u72ec\u7684 crate \u6765\u7f16\u8bd1\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u8ba9\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a\u96c6\u6210\u6d4b\u8bd5\u3002\u4fdd\u7559\u793a\u4f8b 11-12 \u4e2d ",(0,n.jsx)(s.em,{children:"src/lib.rs"})," \u7684\u4ee3\u7801\u3002\u521b\u5efa\u4e00\u4e2a ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\uff0c\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6 ",(0,n.jsx)(s.em,{children:"tests/integration(\u96c6\u6210)_test.rs"}),"\uff0c\u5e76\u8f93\u5165\u793a\u4f8b 11-13 \u4e2d\u7684\u4ee3\u7801\u3002"]}),"\n",(0,n.jsx)(s.p,{children:"\u6587\u4ef6\u540d: tests/integration(\u96c6\u6210)_test.rs"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Rust",children:"use adder;\r\n\r\n#[test]\r\nfn it_adds_two() {\r\n    assert_eq!(4, adder::add_two(2));\r\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u793a\u4f8b 11-13\uff1a\u4e00\u4e2a ",(0,n.jsx)(s.code,{children:"adder"})," crate \u4e2d\u51fd\u6570\u7684\u96c6\u6210\u6d4b\u8bd5"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e0e\u5355\u5143\u6d4b\u8bd5\u4e0d\u540c\uff0c\u6211\u4eec\u9700\u8981\u5728\u6587\u4ef6\u9876\u90e8\u6dfb\u52a0 ",(0,n.jsx)(s.code,{children:"use adder"}),"\u3002\u8fd9\u662f\u56e0\u4e3a\u6bcf\u4e00\u4e2a ",(0,n.jsx)(s.code,{children:"tests"})," \u76ee\u5f55\u4e2d\u7684\u6d4b\u8bd5\u6587\u4ef6\u90fd\u662f\u5b8c\u5168\u72ec\u7acb\u7684 crate\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6bcf\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5bfc\u5165\u5e93\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5e76\u4e0d\u9700\u8981\u5c06 ",(0,n.jsx)(s.em,{children:"tests/integration(\u96c6\u6210)_test.rs"})," \u4e2d\u7684\u4efb\u4f55\u4ee3\u7801\u6807\u6ce8\u4e3a ",(0,n.jsx)(s.code,{children:"#[cfg(test)]"}),"\u3002 ",(0,n.jsx)(s.code,{children:"tests"})," \u6587\u4ef6\u5939\u5728 Cargo \u4e2d\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u6587\u4ef6\u5939\uff0c Cargo \u53ea\u4f1a\u5728\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"cargo test"})," \u65f6\u7f16\u8bd1\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u3002\u73b0\u5728\u5c31\u8fd0\u884c ",(0,n.jsx)(s.code,{children:"cargo test"})," \u8bd5\u8bd5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"$ cargo test\r\n   Compiling adder v0.1.0 (file:///projects/adder)\r\n    Finished dev [unoptimized + debuginfo] target(s) in 0.31 secs\r\n     Running target/debug/deps/adder-abcabcabc\r\n\r\nrunning 1 test\r\ntest tests::internal ... ok\r\n\r\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\r\n\r\n     Running target/debug/deps/integration_test-ce99bcc2479f4607\r\n\r\nrunning 1 test\r\ntest it_adds_two ... ok\r\n\r\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\r\n\r\n   Doc-tests adder\r\n\r\nrunning 0 tests\r\n\r\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u73b0\u5728\u6709\u4e86\u4e09\u4e2a\u90e8\u5206\u7684\u8f93\u51fa\uff1a\u5355\u5143\u6d4b\u8bd5\u3001\u96c6\u6210\u6d4b\u8bd5\u548c\u6587\u6863\u6d4b\u8bd5\u3002\u7b2c\u4e00\u90e8\u5206\u5355\u5143\u6d4b\u8bd5\u4e0e\u6211\u4eec\u4e4b\u524d\u89c1\u8fc7\u7684\u4e00\u6837\uff1a\u6bcf\u4e2a\u5355\u5143\u6d4b\u8bd5\u4e00\u884c\uff08\u793a\u4f8b 11-12 \u4e2d\u6709\u4e00\u4e2a\u53eb\u505a ",(0,n.jsx)(s.code,{children:"internal"})," \u7684\u6d4b\u8bd5\uff09\uff0c\u63a5\u7740\u662f\u4e00\u4e2a\u5355\u5143\u6d4b\u8bd5\u7684\u6458\u8981\u884c\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u96c6\u6210\u6d4b\u8bd5\u90e8\u5206\u4ee5\u884c ",(0,n.jsx)(s.code,{children:"Running target/debug/deps/integration-test-ce99bcc2479f4607"}),"\uff08\u5728\u8f93\u51fa\u6700\u540e\u7684\u54c8\u5e0c\u503c\u53ef\u80fd\u4e0d\u540c\uff09\u5f00\u5934\u3002\u63a5\u4e0b\u6765\u6bcf\u4e00\u884c\u662f\u4e00\u4e2a\u96c6\u6210\u6d4b\u8bd5\u4e2d\u7684\u6d4b\u8bd5\u51fd\u6570\uff0c\u4ee5\u53ca\u4e00\u4e2a\u4f4d\u4e8e ",(0,n.jsx)(s.code,{children:"Doc-tests adder"})," \u90e8\u5206\u4e4b\u524d\u7684\u96c6\u6210\u6d4b\u8bd5\u7684\u6458\u8981\u884c\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\uff0c\u5355\u5143\u6d4b\u8bd5\u51fd\u6570\u8d8a\u591a\uff0c\u5355\u5143\u6d4b\u8bd5\u90e8\u5206\u7684\u7ed3\u679c\u884c\u5c31\u4f1a\u8d8a\u591a\u3002\u540c\u6837\u7684\uff0c\u5728\u96c6\u6210\u6587\u4ef6\u4e2d\u589e\u52a0\u7684\u6d4b\u8bd5\u51fd\u6570\u8d8a\u591a\uff0c\u4e5f\u4f1a\u5728\u5bf9\u5e94\u7684\u6d4b\u8bd5\u7ed3\u679c\u90e8\u5206\u589e\u52a0\u8d8a\u591a\u7684\u7ed3\u679c\u884c\u3002\u6bcf\u4e00\u4e2a\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u6709\u5bf9\u5e94\u7684\u6d4b\u8bd5\u7ed3\u679c\u90e8\u5206\uff0c\u6240\u4ee5\u5982\u679c\u5728 ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u4e2d\u589e\u52a0\u66f4\u591a\u6587\u4ef6\uff0c\u6d4b\u8bd5\u7ed3\u679c\u4e2d\u5c31\u4f1a\u6709\u66f4\u591a\u96c6\u6210\u6d4b\u8bd5\u7ed3\u679c\u90e8\u5206\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u6d4b\u8bd5\u51fd\u6570\u7684\u540d\u79f0\u4f5c\u4e3a ",(0,n.jsx)(s.code,{children:"cargo test"})," \u7684\u53c2\u6570\u6765\u8fd0\u884c\u7279\u5b9a\u96c6\u6210\u6d4b\u8bd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"cargo test"})," \u7684 ",(0,n.jsx)(s.code,{children:"--test"})," \u540e\u8ddf\u6587\u4ef6\u7684\u540d\u79f0\u6765\u8fd0\u884c\u67d0\u4e2a\u7279\u5b9a\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u6d4b\u8bd5\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"$ cargo test --test integration_test\r\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\r\n     Running target/debug/integration_test-952a27e0126bb565\r\n\r\nrunning 1 test\r\ntest it_adds_two ... ok\r\n\r\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u8fd9\u4e2a\u547d\u4ee4\u53ea\u8fd0\u884c\u4e86 ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u4e2d\u6211\u4eec\u6307\u5b9a\u7684\u6587\u4ef6 ",(0,n.jsx)(s.code,{children:"integration_test.rs"})," \u4e2d\u7684\u6d4b\u8bd5\u3002"]}),"\n",(0,n.jsx)(s.h4,{id:"\u96c6\u6210\u6d4b\u8bd5\u4e2d\u7684\u5b50\u6a21\u5757",children:(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E4%B8%AD%E7%9A%84%E5%AD%90%E6%A8%A1%E5%9D%97",children:"\u96c6\u6210\u6d4b\u8bd5\u4e2d\u7684\u5b50\u6a21\u5757"})}),"\n",(0,n.jsxs)(s.p,{children:["\u968f\u7740\u96c6\u6210\u6d4b\u8bd5\u7684\u589e\u52a0\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5728 ",(0,n.jsx)(s.code,{children:"tests"})," \u76ee\u5f55\u589e\u52a0\u66f4\u591a\u6587\u4ef6\u4ee5\u4fbf\u66f4\u597d\u7684\u7ec4\u7ec7\u4ed6\u4eec\uff0c\u4f8b\u5982\u6839\u636e\u6d4b\u8bd5\u7684\u529f\u80fd\u6765\u5c06\u6d4b\u8bd5\u5206\u7ec4\u3002\u6b63\u5982\u6211\u4eec\u4e4b\u524d\u63d0\u5230\u7684\uff0c\u6bcf\u4e00\u4e2a ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u90fd\u88ab\u7f16\u8bd1\u4e3a\u5355\u72ec\u7684 crate\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5c06\u6bcf\u4e2a\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u5f53\u4f5c\u5176\u81ea\u5df1\u7684 crate \u6765\u5bf9\u5f85\uff0c\u8fd9\u66f4\u6709\u52a9\u4e8e\u521b\u5efa\u5355\u72ec\u7684\u4f5c\u7528\u57df\uff0c\u8fd9\u79cd\u5355\u72ec\u7684\u4f5c\u7528\u57df\u80fd\u63d0\u4f9b\u66f4\u7c7b\u4f3c\u4e0e\u6700\u7ec8\u4f7f\u7528\u8005\u4f7f\u7528 crate \u7684\u73af\u5883\u3002\u7136\u800c\uff0c\u6b63\u5982\u4f60\u5728\u7b2c\u4e03\u7ae0\u4e2d\u5b66\u4e60\u7684\u5982\u4f55\u5c06\u4ee3\u7801\u5206\u4e3a\u6a21\u5757\u548c\u6587\u4ef6\u7684\u77e5\u8bc6\uff0c",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u4e0d\u80fd\u50cf ",(0,n.jsx)(s.em,{children:"src"})," \u4e2d\u7684\u6587\u4ef6\u90a3\u6837\u5171\u4eab\u76f8\u540c\u7684\u884c\u4e3a\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u5f53\u4f60\u6709\u4e00\u4e9b\u5728\u591a\u4e2a\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u90fd\u4f1a\u7528\u5230\u7684\u5e2e\u52a9\u51fd\u6570\uff0c\u800c\u4f60\u5c1d\u8bd5\u6309\u7167\u7b2c\u4e03\u7ae0 \u201c\u5c06\u6a21\u5757\u79fb\u52a8\u5230\u5176\u4ed6\u6587\u4ef6\u201d \u90e8\u5206\u7684\u6b65\u9aa4\u5c06\u4ed6\u4eec\u63d0\u53d6\u5230\u4e00\u4e2a\u901a\u7528\u7684\u6a21\u5757\u4e2d\u65f6\uff0c ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u4e2d\u4e0d\u540c\u6587\u4ef6\u7684\u884c\u4e3a\u5c31\u4f1a\u663e\u5f97\u5f88\u660e\u663e\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u53ef\u4ee5\u521b\u5efa \u4e00\u4e2a",(0,n.jsx)(s.em,{children:"tests/common.rs"})," \u6587\u4ef6\u5e76\u521b\u5efa\u4e00\u4e2a\u540d\u53eb ",(0,n.jsx)(s.code,{children:"setup"})," \u7684\u51fd\u6570\uff0c\u6211\u4eec\u5e0c\u671b\u8fd9\u4e2a\u51fd\u6570\u80fd\u88ab\u591a\u4e2a\u6d4b\u8bd5\u6587\u4ef6\u7684\u6d4b\u8bd5\u51fd\u6570\u8c03\u7528\uff1a"]}),"\n",(0,n.jsx)(s.p,{children:"\u6587\u4ef6\u540d: tests/common.rs"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Rust",children:"\r\npub fn setup() {\r\n    // \u7f16\u5199\u7279\u5b9a\u5e93\u6d4b\u8bd5\u6240\u9700\u7684\u4ee3\u7801\r\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u518d\u6b21\u8fd0\u884c\u6d4b\u8bd5\uff0c\u5c06\u4f1a\u5728\u6d4b\u8bd5\u7ed3\u679c\u4e2d\u770b\u5230\u4e00\u4e2a\u65b0\u7684\u5bf9\u5e94 ",(0,n.jsx)(s.em,{children:"common.rs"})," \u6587\u4ef6\u7684\u6d4b\u8bd5\u7ed3\u679c\u90e8\u5206\uff0c\u5373\u4fbf\u8fd9\u4e2a\u6587\u4ef6\u5e76\u6ca1\u6709\u5305\u542b\u4efb\u4f55\u6d4b\u8bd5\u51fd\u6570\uff0c\u4e5f\u6ca1\u6709\u4efb\u4f55\u5730\u65b9\u8c03\u7528\u4e86 ",(0,n.jsx)(s.code,{children:"setup"})," \u51fd\u6570\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Plain",metastring:"Text",children:"running 1 test\r\ntest tests::internal ... ok\r\n\r\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\r\n\r\n     Running target/debug/deps/common-b8b07b6f1be2db70\r\n\r\nrunning 0 tests\r\n\r\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\r\n\r\n     Running target/debug/deps/integration_test-d993c68b431d39df\r\n\r\nrunning 1 test\r\ntest it_adds_two ... ok\r\n\r\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\r\n\r\n   Doc-tests adder\r\n\r\nrunning 0 tests\r\n\r\ntest result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u5e76\u4e0d\u60f3\u8981",(0,n.jsx)(s.code,{children:"common"})," \u51fa\u73b0\u5728\u6d4b\u8bd5\u7ed3\u679c\u4e2d\u663e\u793a ",(0,n.jsx)(s.code,{children:"running 0 tests"})," \u3002\u6211\u4eec\u53ea\u662f\u5e0c\u671b\u5176\u80fd\u88ab\u5176\u4ed6\u591a\u4e2a\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u4e2d\u8c03\u7528\u7f62\u4e86\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e3a\u4e86\u4e0d\u8ba9 ",(0,n.jsx)(s.code,{children:"common"})," \u51fa\u73b0\u5728\u6d4b\u8bd5\u8f93\u51fa\u4e2d\uff0c\u6211\u4eec\u5c06\u521b\u5efa ",(0,n.jsx)(s.em,{children:"tests/common/mod.rs"})," \uff0c\u800c\u4e0d\u662f\u521b\u5efa ",(0,n.jsx)(s.em,{children:"tests/common.rs"})," \u3002\u8fd9\u662f\u4e00\u79cd Rust \u7684\u547d\u540d\u89c4\u8303\uff0c\u8fd9\u6837\u547d\u540d\u544a\u8bc9 Rust \u4e0d\u8981\u5c06 ",(0,n.jsx)(s.code,{children:"common"})," \u770b\u4f5c\u4e00\u4e2a\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u3002\u5c06 ",(0,n.jsx)(s.code,{children:"setup"})," \u51fd\u6570\u4ee3\u7801\u79fb\u52a8\u5230 ",(0,n.jsx)(s.em,{children:"tests/common/mod.rs"})," \u5e76\u5220\u9664 ",(0,n.jsx)(s.em,{children:"tests/common.rs"})," \u6587\u4ef6\u4e4b\u540e\uff0c\u6d4b\u8bd5\u8f93\u51fa\u4e2d\u5c06\u4e0d\u4f1a\u51fa\u73b0\u8fd9\u4e00\u90e8\u5206\u3002",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u4e2d\u7684\u5b50\u76ee\u5f55\u4e0d\u4f1a\u88ab\u4f5c\u4e3a\u5355\u72ec\u7684 crate \u7f16\u8bd1\u6216\u4f5c\u4e3a\u4e00\u4e2a\u6d4b\u8bd5\u7ed3\u679c\u90e8\u5206\u51fa\u73b0\u5728\u6d4b\u8bd5\u8f93\u51fa\u4e2d\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e00\u65e6\u62e5\u6709\u4e86 ",(0,n.jsx)(s.em,{children:"tests/common/mod.rs"}),"\uff0c\u5c31\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a\u6a21\u5757\u4ee5\u4fbf\u5728\u4efb\u4f55\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\u4e2d\u4f7f\u7528\u3002\u8fd9\u91cc\u662f\u4e00\u4e2a ",(0,n.jsx)(s.em,{children:"tests/integration(\u96c6\u6210)_test.rs"})," \u4e2d\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"setup"})," \u51fd\u6570\u7684 ",(0,n.jsx)(s.code,{children:"it_adds_two"})," \u6d4b\u8bd5\u7684\u4f8b\u5b50\uff1a"]}),"\n",(0,n.jsx)(s.p,{children:"\u6587\u4ef6\u540d: tests/integration(\u96c6\u6210)_test.rs"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-Rust",children:"use adder;\r\n\r\nmod common;\r\n\r\n#[test]\r\nfn it_adds_two() {\r\n    common::setup();\r\n    assert_eq!(4, adder::add_two(2));\r\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6ce8\u610f ",(0,n.jsx)(s.code,{children:"mod common;"})," \u58f0\u660e\u4e0e\u793a\u4f8b 7-25 \u4e2d\u5c55\u793a\u7684\u6a21\u5757\u58f0\u660e\u76f8\u540c\u3002\u63a5\u7740\u5728\u6d4b\u8bd5\u51fd\u6570\u4e2d\u5c31\u53ef\u4ee5\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"common::setup()"})," \u4e86\u3002"]}),"\n",(0,n.jsx)(s.h4,{id:"\u4e8c\u8fdb\u5236-crate-\u7684\u96c6\u6210\u6d4b\u8bd5",children:(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#%E4%BA%8C%E8%BF%9B%E5%88%B6-crate-%E7%9A%84%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95",children:"\u4e8c\u8fdb\u5236 crate \u7684\u96c6\u6210\u6d4b\u8bd5"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u9879\u76ee\u662f\u4e8c\u8fdb\u5236 crate \u5e76\u4e14\u53ea\u5305\u542b ",(0,n.jsx)(s.em,{children:"src/main.rs"})," \u800c\u6ca1\u6709 ",(0,n.jsx)(s.em,{children:"src/lib.rs"}),"\uff0c\u8fd9\u6837\u5c31\u4e0d\u53ef\u80fd\u5728 ",(0,n.jsx)(s.em,{children:"tests"})," \u76ee\u5f55\u521b\u5efa\u96c6\u6210\u6d4b\u8bd5\u5e76\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"extern crate"})," \u5bfc\u5165 ",(0,n.jsx)(s.em,{children:"src/main.rs"})," \u4e2d\u5b9a\u4e49\u7684\u51fd\u6570\u3002\u53ea\u6709\u5e93 crate \u624d\u4f1a\u5411\u5176\u4ed6 crate \u66b4\u9732\u4e86\u53ef\u4f9b\u8c03\u7528\u548c\u4f7f\u7528\u7684\u51fd\u6570\uff1b\u4e8c\u8fdb\u5236 crate \u53ea\u610f\u5728\u5355\u72ec\u8fd0\u884c\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["\u4e3a\u4ec0\u4e48 Rust \u4e8c\u8fdb\u5236\u9879\u76ee\u7684\u7ed3\u6784\u660e\u786e\u91c7\u7528 ",(0,n.jsx)(s.em,{children:"src/main.rs"})," \u8c03\u7528 ",(0,n.jsx)(s.em,{children:"src/lib.rs"})," \u4e2d\u7684\u903b\u8f91\u7684\u65b9\u5f0f\uff1f\u56e0\u4e3a\u901a\u8fc7\u8fd9\u79cd\u7ed3\u6784\uff0c\u96c6\u6210\u6d4b\u8bd5 ",(0,n.jsx)(s.strong,{children:"\u5c31\u53ef\u4ee5"})," \u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"extern crate"})," \u6d4b\u8bd5\u5e93 crate \u4e2d\u7684\u4e3b\u8981\u529f\u80fd\u4e86\uff0c\u800c\u5982\u679c\u8fd9\u4e9b\u91cd\u8981\u7684\u529f\u80fd\u6ca1\u6709\u95ee\u9898\u7684\u8bdd\uff0c",(0,n.jsx)(s.em,{children:"src/main.rs"})," \u4e2d\u7684\u5c11\u91cf\u4ee3\u7801\u4e5f\u5c31\u4f1a\u6b63\u5e38\u5de5\u4f5c\u4e14\u4e0d\u9700\u8981\u6d4b\u8bd5\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"\u603b\u7ed3",children:(0,n.jsx)(s.a,{href:"https://rust.bootcss.com/ch11-03-test-organization.html#%E6%80%BB%E7%BB%93",children:"\u603b\u7ed3"})}),"\n",(0,n.jsx)(s.p,{children:"Rust \u7684\u6d4b\u8bd5\u529f\u80fd\u63d0\u4f9b\u4e86\u4e00\u4e2a\u786e\u4fdd\u5373\u4f7f\u4f60\u6539\u53d8\u4e86\u51fd\u6570\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4e5f\u80fd\u7ee7\u7eed\u4ee5\u671f\u671b\u7684\u65b9\u5f0f\u8fd0\u884c\u7684\u9014\u5f84\u3002\u5355\u5143\u6d4b\u8bd5\u72ec\u7acb\u5730\u9a8c\u8bc1\u5e93\u7684\u4e0d\u540c\u90e8\u5206\uff0c\u4e5f\u80fd\u591f\u6d4b\u8bd5\u79c1\u6709\u51fd\u6570\u5b9e\u73b0\u7ec6\u8282\u3002\u96c6\u6210\u6d4b\u8bd5\u5219\u68c0\u67e5\u591a\u4e2a\u90e8\u5206\u662f\u5426\u80fd\u7ed3\u5408\u8d77\u6765\u6b63\u786e\u5730\u5de5\u4f5c\uff0c\u5e76\u50cf\u5176\u4ed6\u5916\u90e8\u4ee3\u7801\u90a3\u6837\u6d4b\u8bd5\u5e93\u7684\u516c\u6709 API\u3002\u5373\u4f7f Rust \u7684\u7c7b\u578b\u7cfb\u7edf\u548c\u6240\u6709\u6743\u89c4\u5219\u53ef\u4ee5\u5e2e\u52a9\u907f\u514d\u4e00\u4e9b bug\uff0c\u4e0d\u8fc7\u6d4b\u8bd5\u5bf9\u4e8e\u51cf\u5c11\u4ee3\u7801\u4e2d\u4e0d\u7b26\u5408\u671f\u671b\u884c\u4e3a\u7684\u903b\u8f91 bug \u4ecd\u7136\u662f\u5f88\u91cd\u8981\u7684\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u8ba9\u6211\u4eec\u5c06\u672c\u7ae0\u548c\u5176\u4ed6\u4e4b\u524d\u7ae0\u8282\u6240\u5b66\u7684\u77e5\u8bc6\u7ec4\u5408\u8d77\u6765\uff0c\u5728\u4e0b\u4e00\u7ae0\u4e00\u8d77\u7f16\u5199\u4e00\u4e2a\u9879\u76ee\uff01"})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>i});var n=t(6540);const r={},c=n.createContext(r);function d(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);