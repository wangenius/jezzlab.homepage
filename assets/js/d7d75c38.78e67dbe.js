"use strict";(self.webpackChunkwangenius=self.webpackChunkwangenius||[]).push([[6286],{8653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=t(4848),r=t(8453);const i={title:"list",sidebar_position:7,slug:"list"},l="list",a={id:"lang/python/\u6570\u636e\u7c7b\u578b/list",title:"list",description:"Lists are used to store multiple items in a single variable.",source:"@site/docs/lang/python/\u6570\u636e\u7c7b\u578b/list.mdx",sourceDirName:"lang/python/\u6570\u636e\u7c7b\u578b",slug:"/lang/python/\u6570\u636e\u7c7b\u578b/list",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/list",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/python/\u6570\u636e\u7c7b\u578b/list.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"list",sidebar_position:7,slug:"list"},sidebar:"python",previous:{title:"bool",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/bool"},next:{title:"Sets",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/Sets"}},h={},o=[{value:"type()",id:"type",level:3},{value:"constructor",id:"constructor",level:2},{value:"access",id:"access",level:2},{value:"change",id:"change",level:2},{value:"insert &amp; remove",id:"insert--remove",level:2},{value:"loop",id:"loop",level:2},{value:"list comprehension",id:"list-comprehension",level:3},{value:"sort",id:"sort",level:2},{value:"copy()",id:"copy",level:2},{value:"join",id:"join",level:2},{value:"\u6210\u5458\u51fd\u6570",id:"\u6210\u5458\u51fd\u6570",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"list",children:"list"}),"\n",(0,s.jsx)(n.p,{children:"Lists are used to store multiple items in a single variable."}),"\n",(0,s.jsx)(n.p,{children:"Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage."}),"\n",(0,s.jsx)(n.p,{children:"Lists are created using square brackets:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'mylist = ["apple", "banana", "cherry"]\r\nprint(mylist)\n'})}),"\n",(0,s.jsx)(n.p,{children:"List items are ordered, changeable, and allow duplicate values(Since lists are indexed, lists can have items with the same value)."}),"\n",(0,s.jsx)(n.p,{children:"List items are indexed, the first item has index [0], the second item has index [1] etc."}),"\n",(0,s.jsx)(n.p,{children:"When we say that lists are ordered, it means that the items have a defined order, and that order will not change."}),"\n",(0,s.jsx)(n.p,{children:"If you add new items to a list, the new items will be placed at the end of the list."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry", "apple", "cherry"]\r\nprint(thislist)\r\nprint(len(thislist)) # length of list\n'})}),"\n",(0,s.jsx)(n.p,{children:"A list can contain different data types:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'list1 = ["abc", 34, True, 40, "male"]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"type",children:"type()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'mylist = ["apple", "banana", "cherry"]\r\nprint(type(mylist))\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"<class 'list'>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"constructor",children:"constructor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = list(("apple", "banana", "cherry")) # note the double round-brackets\r\nprint(thislist)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"access",children:"access"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry"]\r\nprint(thislist[-1])\r\nprint(thislist[1])\r\nfruits = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]\r\nprint(fruits[2:5])\r\nprint(fruits[-4:-1])\r\nif "apple" in thislist:\r\n  print("Yes, \'apple\' is in the fruits list")\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"cherry\r\nbanana\r\n['cherry', 'orange', 'kiwi']\r\n['orange', 'kiwi', 'melon']\r\nYes, 'apple' is in the fruits list\n"})}),"\n",(0,s.jsx)(n.h2,{id:"change",children:"change"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]\r\nthislist[1:3] = ["blackcurrant", "watermelon"]\r\nprint(thislist)\r\n\r\nthislist = ["apple", "banana", "cherry"]\r\nthislist[1:2] = ["blackcurrant", "watermelon"]\r\nprint(thislist)\r\n\r\nthislist = ["apple", "banana", "cherry"]\r\nthislist[1:3] = ["blackcurrant"]\r\nprint(thislist)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"['apple', 'blackcurrant', 'watermelon', 'orange', 'kiwi','mango']\r\n['apple', 'blackcurrant', 'watermelon', 'cherry']\r\n['apple',\"blackcurrant\"]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"insert--remove",children:"insert & remove"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'ls2 = ["mango", "pineapple", "papaya"]\r\nls = ["apple", "banana", "cherry"]\r\n\r\nls.append("orange")\r\nprint(ls)\r\nls.insert(1,"melon")\r\nprint(ls)\r\nls.extend(ls2)\r\nprint(ls)\r\nls.append("banana")\r\nls.remove("banana")\r\nprint(ls)\r\nls.pop(1)\r\nprint(ls)\r\nls.pop()\r\nprint(ls)\r\nls.clear()\r\nprint(ls)\r\ndel ls\r\nprint(ls)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:'["apple","banana","cherry", "orange"]\r\n["apple","melon","banana","cherry", "orange"]\r\n["apple","melon","banana","cherry", "orange","mango","pineapple","papaya"]\r\n["apple","melon","cherry", "orange","mango","pineapple","papaya","banana"]\r\n["apple","cherry", "orange","mango","pineapple","papaya","banana"]\r\n["apple","cherry", "orange","mango","pineapple","papaya"]\r\n[]\r\nNameError: name \'thislist\' is not defined\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you do not specify the index, the pop() method removes the last item."}),"\n",(0,s.jsx)(n.p,{children:"If there are more than one item with the specified value, the remove() method removes the first occurance;"}),"\n",(0,s.jsx)(n.p,{children:"The extend() method does not have to append lists, you can add any iterable object (tuples, sets, dictionaries etc.)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry"]\r\nthistuple = ("kiwi", "orange")\r\nthislist.extend(thistuple)\r\nprint(thislist)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"loop",children:"loop"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="for"',children:'thislist = ["apple", "banana", "cherry"]\r\nfor x in thislist:\r\n  print(x)\r\n\r\nfor i in range(len(thislist)):\r\n  print(thislist[i]) # The iterable created in the example above is [0, 1, 2].\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry"]\r\ni = 0\r\nwhile i < len(thislist):\r\n  print(thislist[i])\r\n  i = i + 1\n'})}),"\n",(0,s.jsx)(n.h3,{id:"list-comprehension",children:"list comprehension"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"newlist = [expression for item in iterable if condition == True]\n"})}),"\n",(0,s.jsx)(n.p,{children:"list comprehension offers the shortest syntax for looping through lists:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry"]\r\n[print(x) for x in thislist]\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"apple\r\nbanana\r\ncherry\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'fruits = ["apple", "banana", "cherry", "kiwi", "mango"]\r\nnewlist = [x for x in fruits if "a" in x]\r\nprint(newlist)\r\nnewlist = [x for x in range(10)]\r\nnewlist = [x.upper() for x in fruits]\r\nnewlist = [\'hello\' for x in fruits] # \u5c06\u6240\u6709\u7684fruits\u7684\u90fd\u6362\u6210hello\r\nnewlist = [x if x != "banana" else "orange" for x in fruits] # \u5982\u679c\u4e0d\u662fbanana\u5c31\u662fx\uff0c\u5c06\u6240\u6709\u7684banana\u6362\u6210orange\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"['apple', 'banana', 'mango']\n"})}),"\n",(0,s.jsx)(n.h2,{id:"sort",children:"sort"}),"\n",(0,s.jsx)(n.p,{children:"List objects have a sort() method that will sort the list alphanumerically, ascending, by default:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'foods = ["orange", "mango", "kiwi", "pineapple", "banana"]\r\nfoods.sort()\r\nprint(foods)\r\nnums = [100, 50, 65, 82, 23]\r\nnums.sort()\r\nprint(nums)\r\n\r\nnums.sort(reverse=true)\r\nprint(nums)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:'["banana","kiwi","mango","orange","pineapple"]\r\n[23,50,65,82,100]\r\n[100,82,65,50,23]\n'})}),"\n",(0,s.jsx)(n.p,{children:"By default the sort() method is case sensitive, resulting in all capital letters being sorted before lower case letters:\r\n\u5927\u5c0f\u5199\u654f\u611f\uff0c\u5927\u5199\u5728\u5c0f\u5199\u524d\u9762"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"thislist.sort(key = str.lower)\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also customize your own function by using the keyword argument key = function."}),"\n",(0,s.jsx)(n.p,{children:"The function will return a number that will be used to sort the list (the lowest number first):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Sort the list based on how close the number is to 50:\r\ndef myfunc(n):\r\n  return abs(n - 50)\r\nthislist = [100, 50, 65, 82, 23]\r\nthislist.sort(key = myfunc)\r\nprint(thislist)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["banana", "Orange", "Kiwi", "cherry"]\r\nthislist.reverse()\r\nprint(thislist)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"copy",children:"copy()"}),"\n",(0,s.jsx)(n.p,{children:"You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2."}),"\n",(0,s.jsx)(n.p,{children:"There are ways to make a copy, one way is to use the built-in List method copy()."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry"]\r\nmylist = thislist.copy()\r\nprint(mylist)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Another way to make a copy is to use the built-in method list()."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'thislist = ["apple", "banana", "cherry"]\r\nmylist = list(thislist)\r\nprint(mylist)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"join",children:"join"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'list1 = ["a", "b", "c"]\r\nlist2 = [1, 2, 3]\r\nlist3 = list1 + list2\r\nprint(list3)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:'["a","b","c",1,2,3]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6210\u5458\u51fd\u6570",children:"\u6210\u5458\u51fd\u6570"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"name"}),(0,s.jsx)(n.th,{children:"description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"append()"}),(0,s.jsx)(n.td,{children:"Adds an element at the end of the list"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clear()"}),(0,s.jsx)(n.td,{children:"Removes all the elements from the list"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"copy()"}),(0,s.jsx)(n.td,{children:"Returns a copy of the list"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count()"}),(0,s.jsx)(n.td,{children:"Returns the number of elements with the specified value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"extend()"}),(0,s.jsx)(n.td,{children:"Add the elements of a list (or any iterable), to the end of the current list"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"index()"}),(0,s.jsx)(n.td,{children:"Returns the index of the first element with the specified value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"insert()"}),(0,s.jsx)(n.td,{children:"Adds an element at the specified position"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pop()"}),(0,s.jsx)(n.td,{children:"Removes the element at the specified position"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"remove()"}),(0,s.jsx)(n.td,{children:"Removes the item with the specified value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"reverse()"}),(0,s.jsx)(n.td,{children:"Reverses the order of the list"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sort()"}),(0,s.jsx)(n.td,{children:"Sorts the list"})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);