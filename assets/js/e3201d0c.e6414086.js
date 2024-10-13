"use strict";(self.webpackChunkwangenius=self.webpackChunkwangenius||[]).push([[8217],{4180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(4848),o=n(8453);const s={title:"\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",sidebar_position:1,slug:"\u4e8c\u53c9\u6811\u7684\u76f4\u5f84"},i="\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",c={id:"dsa/leetcode/\u6811\u76f8\u5173/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",title:"\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",description:"\u91cd\u70b9\u5728\u7406\u89e3\u9012\u5f52\u7b97\u6cd5\u7684\u4f5c\u7528, \u5411\u4e0a\u4f20\u9012\u5b50\u6811\u7684\u503c.",source:"@site/docs/dsa/leetcode/\u6811\u76f8\u5173/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84.mdx",sourceDirName:"dsa/leetcode/\u6811\u76f8\u5173",slug:"/dsa/leetcode/\u6811\u76f8\u5173/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",permalink:"/docs/dsa/leetcode/\u6811\u76f8\u5173/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/leetcode/\u6811\u76f8\u5173/\u4e8c\u53c9\u6811\u7684\u76f4\u5f84.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",sidebar_position:1,slug:"\u4e8c\u53c9\u6811\u7684\u76f4\u5f84"},sidebar:"leetcode",previous:{title:"\u5355\u8c03\u6808",permalink:"/docs/dsa/leetcode/\u6808\u76f8\u5173/\u5355\u8c03\u6808"},next:{title:"\u5b50\u6811\u4e2d\u662f\u5426\u6709\u53e6\u4e00\u68f5\u5b50\u6811",permalink:"/docs/dsa/leetcode/\u6811\u76f8\u5173/\u5b50\u6811\u4e2d\u662f\u5426\u6709\u53e6\u4e00\u68f5\u5b50\u6811"}},d={},a=[];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u4e8c\u53c9\u6811\u7684\u76f4\u5f84",children:"\u4e8c\u53c9\u6811\u7684\u76f4\u5f84"}),"\n",(0,r.jsx)(t.admonition,{title:"\u5907\u6ce8",type:"success",children:(0,r.jsx)(t.p,{children:"\u91cd\u70b9\u5728\u7406\u89e3\u9012\u5f52\u7b97\u6cd5\u7684\u4f5c\u7528, \u5411\u4e0a\u4f20\u9012\u5b50\u6811\u7684\u503c."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"class Solution {\r\n  int sum;\r\n\r\n  int post(TreeNode *root) {\r\n    if (!root)\r\n      return 0;\r\n    int left = post(root->left);\r\n    int right = post(root->right);\r\n    sum = max(sum, left + right);\r\n    return max(left, right) + 1;\r\n  }\r\n\r\npublic:\r\n  int diameterOfBinaryTree(TreeNode *root) {\r\n    sum = 0;\r\n    post(root);\r\n    return sum;\r\n  }\r\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);