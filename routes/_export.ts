// Exports router modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var R=Object.defineProperty;var o=(t,e)=>{for(var u in e)R(t,u,{get:e[u],enumerable:!0})};import*as ae from"./_404.tsx";import*as te from"./_app.tsx";import*as re from"./blog.tsx";import*as se from"./index.tsx";var h={};o(h,{default:()=>P,desc:()=>b,title:()=>x});import{Fragment as M,jsx as s,jsxs as l}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as f}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as B}from"aleph/react";import D from"~/components/BlogMeta.tsx";var x="About",b="This is a blog documenting the progress of my various projects. The large majority of which involve the Haxe programming language.";function g(t){let e=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote"},f(),t.components);return l(M,{children:[s(B,{children:D({title:x,desc:b})}),`
`,s(e.h1,{id:"about",children:"About"}),`
`,l(e.p,{children:[`This is a blog documenting the progress of my various projects.
The large majority of which involve the `,s(e.a,{href:"https://haxe.org",children:"Haxe"}),`
programming language.`]}),`
`,l(e.p,{children:[`My ultimate goal is to make a living off of game development; most
of my projects are intended to help me achieve that goal. For example,
my most popular open source project, `,s(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),`,
was created to help me develop a powerful Haxe -> C++ transpiler
that fits with my needs.`]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:[s(e.a,{href:"https://github.com/RobertBorghese/reflaxe",children:"Reflaxe"}),` is a Haxe framework
for creating compilation targets using macros.`]}),`
`]}),`
`,l(e.p,{children:["Another project of mine is ",s(e.a,{href:"https://github.com/RobertBorghese/Haxe-UnrealEngine5",children:"Haxe-UnrealEngine5"}),`,
an experimental attempt at allowing Haxe to be used in Unreal Engine 5
using the aforementioned `,s(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP",children:"Reflaxe/C++"}),`
project.`]}),`
`,l(e.p,{children:[`Finally, I also have a passion for language design, and frequently
try and find creative ways to modify or improve the code I write
through creative macros or language modifications. I ultimately
wish to develop my own programming language, and have made
`,s(e.a,{href:"https://github.com/RobertBorghese/tastyfresh",children:"many"}),`
`,s(e.a,{href:"https://github.com/RobertBorghese/gimmick",children:"attempts"}),`
`,s(e.a,{href:"https://github.com/RobertBorghese/laxe",children:"before"}),"."]}),`
`,l(e.blockquote,{children:[`
`,l(e.p,{children:["Check out my ",s(e.a,{href:"https://github.com/RobertBorghese/Haxe-MagicArrayTools",children:"Magic Array Tools"}),`,
a Haxe library that helps generate hyper optimized code from
beautifully chained Array/Iterable extension functions.`]}),`
`]}),`
`,s(e.p,{children:"Thanks for reading this! Hope you enjoy your stay."})]})}function A(t={}){let{wrapper:e}=Object.assign({},f(),t.components);return e?s(e,Object.assign({},t,{children:s(g,t)})):g(t)}var P=A;var d={};o(d,{default:()=>$,desc:()=>w,title:()=>j});import{Fragment as F,jsx as i,jsxs as O}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as y}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as X}from"aleph/react";import E from"~/components/BlogMeta.tsx";import L from"~/components/GithubButton.tsx";var j="About Reflaxe",w="Reflaxe is a Haxe framework for creating compilation targets using macros.";function k(t){let e=Object.assign({h1:"h1",p:"p"},y(),t.components);return O(F,{children:[i(X,{children:E({title:j,desc:w})}),`
`,i(e.h1,{id:"reflaxe",children:"Reflaxe"}),`
`,i(e.p,{children:"Reflaxe is a Haxe framework for creating compilation targets using macros."}),`
`,i("hr",{}),`
`,i(e.p,{children:"Check out more information here:"}),`
`,i(L,{link:"https://github.com/RobertBorghese/reflaxe",url:"https://api.github.com/repos/RobertBorghese/reflaxe",badgeUrl:"https://github.com/RobertBorghese/reflaxe/actions/workflows/test.yml/badge.svg"})]})}function q(t={}){let{wrapper:e}=Object.assign({},y(),t.components);return e?i(e,Object.assign({},t,{children:i(k,t)})):k(t)}var $=q;var m={};o(m,{default:()=>J,desc:()=>_,title:()=>v});import{Fragment as U,jsx as n,jsxs as a}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as C}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as W}from"aleph/react";import G from"~/components/BlogMeta.tsx";import z from"~/components/BlogSubtext.tsx";var v="Reflaxe/C++ Devlog 1 - CallStack",_="A breakdown of the not-so-tedious process of making a call stack for my Haxe to C++ transpiler.";function N(t){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",span:"span",a:"a",em:"em",blockquote:"blockquote"},C(),t.components);return a(U,{children:[n(W,{children:G({title:v,desc:_})}),`
`,n(e.h1,{id:"reflaxec-devlog-1---callstack",children:"Reflaxe/C++ Devlog #1 - CallStack"}),`
`,n(z,{link:"https://github.com/RobertBorghese/reflaxe.CPP",url:"https://api.github.com/repos/RobertBorghese/reflaxe.CPP",badgeUrl:"https://github.com/RobertBorghese/reflaxe.CPP/actions/workflows/main.yml/badge.svg",date:"May 15, 2023",author:"Robert Borghese"}),`
`,n(e.h2,{id:"intro",children:"Intro"}),`
`,a(e.p,{children:["It wasn't until I started delving into the dreaded ",n(e.code,{children:"Dynamic"}),` type\r
that I realized Reflaxe/C++ lacked a proper error reporting system.\r
Throwing an error doesn't even print a message in C++; it just hangs\r
for like a minute then exits with a random 12 digit exit code. So before\r
I continued with implementing a runtime type system with Haxe's `,n(e.code,{children:"Dynamic"}),`,\r
I needed to make runtime errors look nicer and track easier for my own sanity.`]}),`
`,a(e.p,{children:[`The first part was easy. Instead of compiling Haxe throws as native C++\r
throws, I could instead print whatever the Error object was to `,n(e.code,{children:"std::err"}),`\r
(with its Haxe position), run `,n(e.code,{children:"exit(666)"}),`, and call it a day. Simply add a\r
define to decide whether the user wants native `,n(e.code,{children:"throw"}),`s or these simulated\r
ones and it's no biggie... except for the fact that wouldn't be compatible\r
with try/catch. Ooof.`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-comment",children:"// native throw"}),`\r
`,n(e.span,{className:"hljs-keyword",children:"throw"})," ",n(e.span,{className:"hljs-string",children:'"my runtime error"'}),`;\r
\r
`,n(e.span,{className:"hljs-comment",children:"// stderr throw"}),`\r
std::err << `,n(e.span,{className:"hljs-string",children:'"Main.hx:32: my runtime error"'}),` << std::endl;\r
`,n(e.span,{className:"hljs-built_in",children:"exit"}),"(",n(e.span,{className:"hljs-number",children:"666"}),`);
`]})}),`
`,a(e.p,{children:[`It would be nice to ONLY print/display errors on uncaught throws...\r
achieve something similar to Hashlink's nice error popup system... but\r
that's just not feasible when generating C++ source code. Oh well, native\r
`,n(e.code,{children:"throw"}),`s stay for now, I guess. I'll just wrap everything with try { ... }\r
while testing.`]}),`
`,n(e.h2,{id:"the-call-stack-problem",children:"The Call Stack Problem"}),`
`,a(e.p,{children:["Speaking of errors, taking a look into it made me realize the ",n(e.code,{children:"haxe.Exception"}),`\r
class wasn't fully implemented for Reflaxe/C++. It had a bare-bones version made\r
to help things run riiiiight at the start of this project's development, and now\r
was the perfect time to finish it. It was all fine and dandy except for `,n(e.code,{children:"stack"}),`.\r
A field which provided the `,n(e.code,{children:"haxe.CallStack"})," object for the error."]}),`
`,a(e.p,{children:["For those that don't know, the ",n(e.a,{href:"https://api.haxe.org/haxe/CallStack.html",children:"haxe.CallStack"}),`\r
class is a wonderful debugging class that provides the entire list of calls\r
made up to that point:`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[n(e.span,{className:"hljs-built_in",children:"trace"}),`(haxe.CallStack.toString(haxe.CallStack.callStack()));
`]})}),`
`,a(e.p,{children:["Similar to the ",n(e.code,{children:"Exception"})," class, ",n(e.code,{children:"haxe.CallStack"}),` had been given a very early\r
implementation to make things work, and then it was completely forgotten about.\r
But `,n(e.em,{children:"unlike"})," ",n(e.code,{children:"Exception"}),", it was not going to be as fun to complete."]}),`
`,a(e.blockquote,{children:[`
`,n(e.p,{children:"Ugh. If only C++ had a built in call stack like every other target."}),`
`]}),`
`,a(e.p,{children:[`The funny part is, it actually does. With the release of C++23, a new class was added:\r
`,n(e.a,{href:"https://en.cppreference.com/w/cpp/utility/basic_stacktrace",children:"std::basic_stacktrace"}),`.\r
Sooooo... I guess time to make C++23 the minimum required version!!`]}),`
`,n(e.p,{children:`Haha, I wish. Making C++17 the minimum version killed me; going any higher\r
and this project would be less compatible than the original Haxe/C++ target. X_X`}),`
`,n(e.p,{children:"So... time for option 2."}),`
`,n(e.h2,{id:"making-a-call-stack",children:"Making a Call Stack"}),`
`,n(e.p,{children:`When you really think about it though, tracking function calls isn't that hard.\r
After all, C++'s destructors are a great tool for tracking scopes!`}),`
`,n(e.p,{children:`Make a class that adds itself to a global stack when constructed,\r
then removes itself using the destructor. When generating the C++,\r
create an instance of that class at the start of every function. Pass\r
it the name of the class + function it's being used in and BOOM,\r
you have a global stack you can access at anywhere!`}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-keyword",children:"struct"})," ",n(e.span,{className:"hljs-title class_",children:"StackTracer"}),` {\r
  `,n(e.span,{className:"hljs-type",children:"static"}),` vector<StackTracer*> Stack;\r
\r
  `,n(e.span,{className:"hljs-built_in",children:"StackTracer"}),`(string cls, string method) {\r
    `,n(e.span,{className:"hljs-comment",children:"// store cls + method"}),`\r
    Stack.`,n(e.span,{className:"hljs-built_in",children:"push_back"}),"(",n(e.span,{className:"hljs-keyword",children:"this"}),`);\r
  }\r
\r
  ~`,n(e.span,{className:"hljs-built_in",children:"StackTracer"}),"() { Stack.",n(e.span,{className:"hljs-built_in",children:"pop_back"}),`(); }\r
}\r
\r
`,n(e.span,{className:"hljs-comment",children:"// ---"}),`\r
\r
`,n(e.span,{className:"hljs-comment",children:"// some function"}),`\r
`,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-type",children:"void"})," ",n(e.span,{className:"hljs-title",children:"doSomething"}),n(e.span,{className:"hljs-params",children:"()"})," "]}),`{\r
  `,a(e.span,{className:"hljs-function",children:["StackTracer ",n(e.span,{className:"hljs-title",children:"st"}),a(e.span,{className:"hljs-params",children:["(",n(e.span,{className:"hljs-string",children:'"Main"'}),", ",n(e.span,{className:"hljs-string",children:'"doSomething"'}),")"]})]}),"; ",n(e.span,{className:"hljs-comment",children:"// will destroy when func done"}),`\r
  `,n(e.span,{className:"hljs-comment",children:"// do stuff"}),`\r
}
`]})}),`
`,n(e.h2,{id:"the-haxe-target-call-stack-experience",children:"The Haxe Target Call Stack Experience"}),`
`,a(e.p,{children:[`To actually implement the call stack, we have to convert our custom stack\r
data into Haxe's. Thankfully, there's this super convenient hidden class\r
that exists just for this purpose: `,n(e.a,{href:"https://github.com/HaxeFoundation/haxe/blob/development/std/haxe/NativeStackTrace.hx",children:"NativeStackTrace"}),"."]}),`
`,a(e.blockquote,{children:[`
`,a(e.p,{children:[`All we gotta do is implement a version of this class with the functions filled\r
out in our target's `,n(e.code,{children:"_std"})," folder."]}),`
`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[n(e.span,{className:"hljs-keyword",children:"extern"})," ",a(e.span,{className:"hljs-class",children:[n(e.span,{className:"hljs-keyword",children:"class"})," ",n(e.span,{className:"hljs-title",children:"NativeStackTrace"})," "]}),`{\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"saveStack"})]}),"(exception:",n(e.span,{className:"hljs-type",children:"Any"}),"):",n(e.span,{className:"hljs-type",children:"Void"}),`;\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"callStack"})]}),"():",n(e.span,{className:"hljs-type",children:"Any"}),`;\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"exceptionStack"})]}),"():",n(e.span,{className:"hljs-type",children:"Any"}),`;\r
	`,n(e.span,{className:"hljs-keyword",children:"static"})," ",n(e.span,{className:"hljs-keyword",children:"public"})," ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"toHaxe"})]}),"(nativeStackTrace:",n(e.span,{className:"hljs-type",children:"Any"}),", skip:",n(e.span,{className:"hljs-type",children:"Int "}),"= ",n(e.span,{className:"hljs-number",children:"0"}),"):",n(e.span,{className:"hljs-type",children:"Array"}),`<StackItem>;\r
}
`]})}),`
`,a(e.p,{children:["The ",n(e.code,{children:"Any"}),` types can be replaced with our own target's unique call stack\r
list type. For example, `,n(e.a,{href:"https://github.com/HaxeFoundation/haxe/blob/development/std/cs/_std/haxe/NativeStackTrace.hx",children:"C# uses System.Diagnostics.StackTrace"}),`\r
and `,a(e.a,{href:"https://github.com/HaxeFoundation/haxe/blob/development/std/python/_std/haxe/NativeStackTrace.hx",children:["Python uses an ",n(e.code,{children:"Array"})," of tuples"]}),`.\r
From there, we implement functions to generate the stack from an exception\r
or an arbitrary call, and finally we write the `,n(e.code,{children:"toHaxe"})," function to convert it."]}),`
`,a(e.p,{children:[`What was especially interesting was discovering how inconsistent call stacks are\r
for each target. While Haxe provides an enum for structuring the call stack in\r
the form of `,n(e.a,{href:"https://api.haxe.org/haxe/StackItem.html",children:"haxe.StackItem"}),`, the\r
way each case is used is different for each target.`]}),`
`,a(e.p,{children:["Going to the ",n(e.a,{href:"https://try.haxe.org/#DD7c3724",children:"Haxe Playground"}),` and clicking between\r
each target, you can see how the call stack differs drastically:`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[a(e.span,{className:"hljs-class",children:[n(e.span,{className:"hljs-keyword",children:"class"})," ",n(e.span,{className:"hljs-title",children:"Test"})," "]}),`{\r
  `,n(e.span,{className:"hljs-keyword",children:"static"})," ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
    `,n(e.span,{className:"hljs-built_in",children:"trace"}),`(haxe.CallStack.toString(haxe.CallStack.callStack()));\r
  }\r
}
`]})}),`
`,n("table",{style:{display:"block",padding:"12px",marginTop:"30px",overflowX:"scroll"},children:a("tbody",{children:[a("tr",{children:[n("td",{style:{paddingRight:"20px",textAlign:"center"},children:"JavaScript"}),n("td",{className:"fakecode-holder",children:n("div",{className:"fakecode",children:a(e.p,{children:[`Test.hx:3: Called from (unknown).main\r
(`,n(e.a,{href:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026",children:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026"}),` line\r
92 column 67) Called from\r
`,n(e.a,{href:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026",children:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026"}),` line\r
405 column 6 Called from\r
`,n(e.a,{href:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026",children:"https://try.haxe.org/program/D005409d/run?r=0.5763444059826026"}),` line\r
406 column 3`]})})})]}),a("tr",{children:[n("td",{children:"HashLink"}),n("td",{className:"fakecode-holder",children:n("div",{className:"fakecode",children:a(e.p,{children:["Test.hx:3: Called from haxe.",n(e.em,{children:"CallStack.$CallStack_Impl"}),`.callStack\r
(/home/haxer/haxe/versions/4.3.1/std/haxe/CallStack.hx line 52) Called\r
from $Test.main (Test.hx line 3)`]})})})]}),a("tr",{children:[n("td",{children:"Eval"}),n("td",{className:"fakecode-holder",children:n("div",{className:"fakecode",children:n(e.p,{children:"Test.hx:3: Called from Test.main (Test.hx line 3 column 35)"})})})]})]})}),`
`,a(e.p,{children:["In fact, most targets only appear to use ",n(e.code,{children:"Method"})," and ",n(e.code,{children:"FilePos"}),` from\r
`,n(e.code,{children:"haxe.StackItem"}),". The rest are for niche cases with certain targets."]}),`
`,n(e.p,{children:`This was a nice change of pace from the usual, restrictive nature of\r
the Haxe API, as this would allow me to make sure the Reflaxe/C++\r
call stack was as nice as possible.`}),`
`,n(e.h2,{id:"line-tracking",children:"Line tracking"}),`
`,a(e.p,{children:["While filling out the ",n(e.code,{children:"StackItem"}),`s, it became clear I'd forgetten something.\r
Call stacks do not just require a list of functions, but the `,n(e.em,{children:"exact"}),` line\r
they're called from.`]}),`
`,a(e.p,{children:["Taking a peak into ",n(e.a,{href:"https://github.com/HaxeFoundation/hxcpp/blob/c3e5ab85b0c19688f7494ae44909ed4bfc63bdb7/include/hx/StackContext.h#LL170C72-L170C72",children:"hxcpp"}),`,\r
it appears their solution is to do what I've done so far, but also update\r
the function's stack tracing variable every expression. THAT'S what all those\r
ugly `,n(e.code,{children:"HXLINE"})," do (guess it was kinda obvious)."]}),`
`,n(e.p,{children:`It wouldn't be too hard to implement that as well... and it's not like\r
I have much of a choice, but wooooow it destroys the beautiful Reflaxe/C++\r
code I had so much pride in.`}),`
`,a(e.p,{children:["But in the end, I implemented it. All it took was overriding ",n(e.code,{children:"Reflaxe"}),`'s\r
`,n(e.code,{children:"prefixExpressionContent"}),` function and generating content before\r
every expression was a piece of cake.`]}),`
`,n(e.h2,{id:"final-conversion",children:"Final Conversion"}),`
`,a(e.p,{children:[`I was worried about the way local functions would be printed,\r
but as discussed before, we only need to use the `,n(e.code,{children:"StackItem"}),`s we need.\r
Like with the Haxe/Python target, I opted to the `,n(e.code,{children:"FilePos(Method(...), ...)"}),`\r
combo for everything.`]}),`
`,a(e.p,{children:[n(e.code,{children:"Method"}),` allows for any text to be added for the class and function, so\r
even in rare cases like local functions, I was able to generate a nice,\r
custom format that stood supreme to other targets:`]}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-haxe",children:[a(e.span,{className:"hljs-class",children:[n(e.span,{className:"hljs-keyword",children:"class"})," ",n(e.span,{className:"hljs-title",children:"Test"})," "]}),`{\r
  `,n(e.span,{className:"hljs-keyword",children:"static"})," ",a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"main"})]}),`() {\r
    `,a(e.span,{className:"hljs-function",children:[n(e.span,{className:"hljs-keyword",children:"function"})," ",n(e.span,{className:"hljs-title",children:"a"})]}),`() {\r
      final b = () ->\r
        `,n(e.span,{className:"hljs-built_in",children:"trace"}),`(haxe.CallStack.toString(haxe.CallStack.callStack()));\r
      b();\r
    }\r
    a();\r
  }\r
}
`]})}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-text",children:`Called from Test.main.a.b (Test.hx line 5 column 3)\r
Called from Test.main.a (Test.hx line 4 column 2)\r
Called from Test.main (Test.hx line 3 column 1)
`})}),`
`,n(e.h2,{id:"result",children:"Result"}),`
`,a(e.p,{children:[`Since Reflaxe/C++ does not use any dependencies, all the code (both the C++\r
implementation and Haxe externs) is implemented in the `,n(e.code,{children:"NativeStackTrace"}),`\r
module.`]}),`
`,a(e.p,{children:["You can check it out ",n(e.a,{href:"https://github.com/RobertBorghese/reflaxe.CPP/blob/main/std/cxx/_std/haxe/NativeStackTrace.hx",children:"here"}),"!"]}),`
`,a(e.p,{children:[`Reflaxe's DCE system is powerful; you only pay for what you use.\r
Unfortunately... it looks like you'll always be using the\r
`,n(e.code,{children:"NativeStackTrace"})," code."]}),`
`,n(e.p,{children:`Reflaxe/C++'s once beautiful "Hello World" output now looks like this:`}),`
`,n(e.pre,{children:a(e.code,{className:"hljs language-cpp",children:[n(e.span,{className:"hljs-type",children:"void"})," _Main::Main_Fields_::",n(e.span,{className:"hljs-built_in",children:"main"}),`() {\r
  `,n(e.span,{className:"hljs-built_in",children:"HCXX_STACK_METHOD"}),"(",n(e.span,{className:"hljs-string",children:'"Main.hx"'}),", ",n(e.span,{className:"hljs-number",children:"1"}),", ",n(e.span,{className:"hljs-number",children:"0"}),", ",n(e.span,{className:"hljs-string",children:'"_Main::Main_Fields_"'}),", ",n(e.span,{className:"hljs-string",children:'"main"'}),`)\r
\r
  `,n(e.span,{className:"hljs-built_in",children:"HCXX_LINE"}),"(",n(e.span,{className:"hljs-number",children:"1"}),`)\r
  std::cout << `,n(e.span,{className:"hljs-string",children:'"Main.hx:2: Hello world!"'}),` << std::endl;\r
}
`]})}),`
`,n(e.h2,{id:"opt-in-option",children:"Opt In Option"}),`
`,a(e.p,{children:[`In the end, I decided to disable call stack features by default. Reflaxe/C++\r
is a clean code generator first. Only when a certain define is enabled (`,n(e.code,{children:"-D cxx_callstack"}),`)\r
does `,n(e.code,{children:"haxe.CallStack.callStack()"}),` return the stack. If it's not enabled, an\r
empty array is returned and a message is printed:`]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-text",children:`Call stack features must be enabled using -D cxx_callstack
`})}),`
`,n(e.p,{children:`Hopefully this intrinsically teaches users the benefits of keeping the\r
call stack enabled vs disabled. And more importantly, allow me to\r
advertise Reflaxe/C++ as the prettiest C++ output in all the land!`}),`
`,n(e.h2,{id:"whats-left-to-be-done",children:"What's Left To Be done"}),`
`,n(e.p,{children:`I didn't bring up multi-threading support because... I didn't do anything\r
about it. In the future, I'll need to keep separate call stacks for each\r
thread. But threads have not been implemented yet, so that's a problem\r
for future me!`}),`
`,n(e.p,{children:"Anyway, that's about it for this log. May you visit again!"})]})}function Y(t={}){let{wrapper:e}=Object.assign({},C(),t.components);return e?n(e,Object.assign({},t,{children:n(N,t)})):N(t)}var J=Y;var p={};o(p,{default:()=>ne,desc:()=>I,title:()=>H});import{Fragment as K,jsx as r,jsxs as c}from"https://esm.sh/v120/react@18.2.0/jsx-runtime";import{useMDXComponents as T}from"https://esm.sh/v120/@mdx-js/react@2.3.0";import{Head as V}from"aleph/react";import Q from"~/components/BlogMeta.tsx";import Z from"~/components/GithubButton.tsx";var H="About Reflaxe/C++",I="Reflaxe/C++ is an alternative C++ target for Haxe that generates dependent-less, GC-less C++17 code.";function S(t){let e=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",span:"span"},T(),t.components);return c(K,{children:[r(V,{children:Q({title:H,desc:I})}),`
`,r(e.h1,{id:"reflaxec",children:"Reflaxe/C++"}),`
`,r(e.p,{children:"Reflaxe/C++ is an alternative C++ target for Haxe that generates dependent-less, GC-less C++17 code."}),`
`,r("hr",{}),`
`,r(e.p,{children:"The goal of this project is simple: create a compilation target for Haxe that generates minimal, human-readable C++ that can be compiled without linking additional libraries and does not rely on any garbage collection system."}),`
`,r(e.p,{children:r(e.strong,{children:"Haxe Code"})}),`
`,r(e.pre,{children:c(e.code,{className:"hljs language-haxe",children:[c(e.span,{className:"hljs-function",children:[r(e.span,{className:"hljs-keyword",children:"function"})," ",r(e.span,{className:"hljs-title",children:"main"})]}),`() {
  `,r(e.span,{className:"hljs-built_in",children:"trace"}),"(",r(e.span,{className:"hljs-string",children:'"Hello world!"'}),`);
}
`]})}),`
`,r(e.p,{children:r(e.strong,{children:"Reflaxe/C++ Output"})}),`
`,r(e.pre,{children:c(e.code,{className:"hljs language-cpp",children:[c(e.span,{className:"hljs-meta",children:["#",r(e.span,{className:"hljs-keyword",children:"include"})," ",r(e.span,{className:"hljs-string",children:'"Main.h"'})]}),`

`,c(e.span,{className:"hljs-meta",children:["#",r(e.span,{className:"hljs-keyword",children:"include"})," ",r(e.span,{className:"hljs-string",children:"<iostream>"})]}),`

`,r(e.span,{className:"hljs-type",children:"void"})," _Main::Main_Fields_::",r(e.span,{className:"hljs-built_in",children:"main"}),`() {
	std::cout << `,r(e.span,{className:"hljs-string",children:'"Main.hx:2: Hello world!"'}),` << std::endl;
}
`]})}),`
`,r(e.p,{children:"Check out more information here:"}),`
`,r(Z,{link:"https://github.com/RobertBorghese/reflaxe.CPP",url:"https://api.github.com/repos/RobertBorghese/reflaxe.CPP",badgeUrl:"https://github.com/RobertBorghese/reflaxe.CPP/actions/workflows/main.yml/badge.svg"})]})}function ee(t={}){let{wrapper:e}=Object.assign({},T(),t.components);return e?r(e,Object.assign({},t,{children:r(S,t)})):S(t)}var ne=ee;var _e={"/_404":ae,"/_app":te,"/blog":re,"/":se,"/blog/index":h,"/blog/reflaxe/index":d,"/blog/reflaxe-cpp/1":m,"/blog/reflaxe-cpp/index":p,depGraph:{"modules":[{"specifier":"./routes\\blog\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe\\index.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\1.mdx"},{"specifier":"./routes\\blog\\reflaxe-cpp\\index.mdx"}]}};export{_e as default};
