"use strict";(self.webpackChunkreact_cmu_docs_2024=self.webpackChunkreact_cmu_docs_2024||[]).push([[1804],{4217:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var s=t(4848),o=t(8453);const c={sidebar_position:6},i="State And Event",r={id:"state-and-event",title:"State And Event",description:"state mainly is manipulate data inside React and Event is HTML event which we do in the web app e.g. click, scroll, submit etc...",source:"@site/docs/state-and-event.md",sourceDirName:".",slug:"/state-and-event",permalink:"/react-workshop-docs-2024/docs/state-and-event",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"More about JSX",permalink:"/react-workshop-docs-2024/docs/jsx"},next:{title:"Nested Components",permalink:"/react-workshop-docs-2024/docs/nested-components"}},l={},a=[{value:"React State",id:"react-state",level:2},{value:"Event",id:"event",level:2},{value:"onClick event",id:"onclick-event",level:3},{value:"onChange event",id:"onchange-event",level:3},{value:"onSubmit event",id:"onsubmit-event",level:3},{value:"Counter Component",id:"counter-component",level:2},{value:"Create Counter component",id:"create-counter-component",level:3},{value:"Change count state by onClick event",id:"change-count-state-by-onclick-event",level:3},{value:"Setter function of useState",id:"setter-function-of-usestate",level:3},{value:"Challenge Accepted",id:"challenge-accepted",level:3},{value:"Answer",id:"answer",level:4}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:c}=n;return c||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"state-and-event",children:"State And Event"})}),"\n",(0,s.jsx)(n.p,{children:"state mainly is manipulate data inside React and Event is HTML event which we do in the web app e.g. click, scroll, submit etc..."}),"\n",(0,s.jsx)(n.h2,{id:"react-state",children:"React State"}),"\n",(0,s.jsx)(n.p,{children:"State is different from props that props receive only cannot change itself, unlike state can update a data."}),"\n",(0,s.jsxs)(n.p,{children:["start with ",(0,s.jsx)(n.code,{children:"useState"})," which is part of ",(0,s.jsx)(n.code,{children:"react hook"})]}),"\n",(0,s.jsx)(n.p,{children:"syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// first import useState api from react\nimport { useState } from 'react'\n\n//       state   setState fn           state type, default value of state\n  const [count, setCount] = useState<number>(101)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"count"})," is state cannot change, it is still be ",(0,s.jsx)(n.code,{children:"immutable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setCount"})," function to change the ",(0,s.jsx)(n.code,{children:"count"}),", we want to change the ",(0,s.jsx)(n.code,{children:"count"})," but the theory said ",(0,s.jsx)(n.code,{children:"count"})," must be ",(0,s.jsx)(n.code,{children:"immutable"})," so to setting a count we have to set with new value only with this callback."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<number>"})," type of this state, now it is number."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"(101)"})," default value of this state which the ",(0,s.jsx)(n.code,{children:"count"})," will be 101 at the beginning."]}),"\n",(0,s.jsxs)(n.p,{children:["Why useState return ",(0,s.jsx)(n.code,{children:"array"}),"? it can declare any variable state name, also setter function, but have to use in correct index."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hook"})," in React mean React API helper which start with ",(0,s.jsx)(n.code,{children:"use"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"useState"}),"\n",(0,s.jsx)(n.li,{children:"useContext"}),"\n",(0,s.jsx)(n.li,{children:"useRef"}),"\n",(0,s.jsx)(n.li,{children:"etc..."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Can declare and use inside any Component"}),"\n",(0,s.jsx)(n.h2,{id:"event",children:"Event"}),"\n",(0,s.jsxs)(n.p,{children:["JSX can bind HTML event but unlike original HTML, JSX use any HTML prop with ",(0,s.jsx)(n.code,{children:"camelCase"})]}),"\n",(0,s.jsx)(n.h3,{id:"onclick-event",children:"onClick event"}),"\n",(0,s.jsx)(n.p,{children:"We can bind onclick event"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<button onclick="myFunction()">Click me</button>\n'})}),"\n",(0,s.jsx)(n.p,{children:"example onClick event in JSX"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<button \n    onClick={() => {}} \n>\n    Click me\n</button>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"() => {}"})," this is anonymous function means function without name"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"onClick"})," is the html props, receive ",(0,s.jsx)(n.code,{children:"callback"})," ",(0,s.jsx)(n.code,{children:"() => {}"})," (well just think about it is a function for now)"]}),"\n",(0,s.jsx)(n.h3,{id:"onchange-event",children:"onChange event"}),"\n",(0,s.jsxs)(n.p,{children:["Any input field, mostly use ",(0,s.jsx)(n.code,{children:"onChange"})," event to keep the typing input data."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"{3}",children:"<input\n    type=\"text\"\n    onChange={(event) => {\n        console.log('text: ', event.target.value);\n    }}\n></input>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"onsubmit-event",children:"onSubmit event"}),"\n",(0,s.jsx)(n.p,{children:"It is props of form tag"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"<form onSubmit={() => {}}></form>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Has two form type in React"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Controlled form\nWe declare all input field values with state, ",(0,s.jsx)(n.code,{children:"useState"})," of cause.\nThen bind all input's value ",(0,s.jsx)(n.code,{children:"props"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Also change input value with ",(0,s.jsx)(n.code,{children:"onChange"})," event."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"{10,13}",children:"const [firstName, setFirstName] = useState<string>('Nook')\nconst [phone, setPhone] = useState<string>('0932363326')\n\nreturn (\n    <form onSubmit={(e) => {\n        e.preventDefault()\n        console.log('firstName: ', firstName)\n        console.log('phone: ', phone)\n    }}>\n        <input type=\"text\" value={firstName} \n            onChange={e => setFirstName(e.target.value)}\n        />\n        <input type=\"text\" value={phone} \n            onChange={e => setPhone(e.target.value)}\n        />\n        <button type=\"submit\">submit</button>\n    </form>\n)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Uncontrolled form\nWe did not control with state, let browser handle for us but we have to declare ",(0,s.jsx)(n.code,{children:"name"})," prop and ",(0,s.jsx)(n.code,{children:"defaultValue"})," prop on every ",(0,s.jsx)(n.code,{children:"<input />"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This method can retrieve form data in many ways. one way is use ",(0,s.jsx)(n.code,{children:"FormData"})," Api"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"{12,13}",children:'    <form\n        onSubmit={(event) => {\n          // prevent page refresh after submit\n          event.preventDefault();\n\n          // convert all input inside form to Object Data\n          const formData = new FormData(event.currentTarget);\n          const formEntries = Object.fromEntries(formData.entries());\n          console.log(formEntries);\n        }}\n      >\n        <input type="text" name="firstName" defaultValue="Nook" />\n        <input type="text" name="phone" defaultValue="0932363326" />\n        <button type="submit">submit</button>\n      </form>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Why ",(0,s.jsx)(n.code,{children:"event.preventDefault();"})," ?\nTo prevent original behavior of browser, onSubmit form will refresh page after we emit submit."]}),"\n",(0,s.jsx)(n.h2,{id:"counter-component",children:"Counter Component"}),"\n",(0,s.jsxs)(n.p,{children:["Counter component is the good way to understand ",(0,s.jsx)(n.code,{children:"useState"})," hook"]}),"\n",(0,s.jsx)(n.h3,{id:"create-counter-component",children:"Create Counter component"}),"\n",(0,s.jsxs)(n.p,{children:["Like old one, Create ",(0,s.jsx)(n.code,{children:"Counter"})," component in src/components"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"import a useState from react(this should be help from VScode)"}),"\n",(0,s.jsx)(n.li,{children:"declare count and setCount"}),"\n",(0,s.jsx)(n.li,{children:"render count in JSX"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// Counter.tsx\n\nimport { useState } from 'react';\n\nexport const Counter = () => {\n  const [count, setCount] = useState<number>(101);\n\n  return <p>{count}</p>;\n};\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"use in App.tsx (Ops!, I don't remember again)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We will get the 101 result."}),"\n",(0,s.jsx)(n.h3,{id:"change-count-state-by-onclick-event",children:"Change count state by onClick event"}),"\n",(0,s.jsxs)(n.p,{children:["We want to change the ",(0,s.jsx)(n.code,{children:"count"}),", it has multiple ways, a way to done it via onClick event."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Declare handleClick function inside the component."}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"div"})," tag to be root of this component (don't forget root of any component should be one level)"]}),"\n",(0,s.jsxs)(n.li,{children:["create a ",(0,s.jsx)(n.code,{children:"button"})," inside ",(0,s.jsx)(n.code,{children:"div"}),' call "Plus" or any name']}),"\n",(0,s.jsx)(n.li,{children:"bind onClick props with function from 1."}),"\n",(0,s.jsxs)(n.li,{children:["We can use setter state ",(0,s.jsx)(n.code,{children:"useCount"})," on below;"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"{9-11,17}",children:"//Counter.tsx\n\nimport { useState } from 'react';\n\nexport const Counter = () => {\n  const [count, setCount] = useState<number>(101);\n\n  // actually type of the onClick event is `event: React.MouseEvent<HTMLButtonElement, MouseEvent>` but now we don't want it.\n  const handleClick = () => {\n    setCount((prevCount) => prevCount + 1);\n  };\n\n  return (\n    <div>\n      <p>{count}</p>\n\n      <button type=\"button\" onClick={handleClick}>\n        Plus\n      </button>\n    </div>\n  );\n};\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"button"})," has two types"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"submit"})," use in ",(0,s.jsx)(n.code,{children:"<form>"})," for submitting, e.g. click or press Enter"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"button"})," any click"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"handleClick"})," function now we use setter state fn to change the count state."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"counter-result",src:t(113).A+"",width:"903",height:"540"})}),"\n",(0,s.jsxs)(n.p,{children:["What is ",(0,s.jsx)(n.code,{children:"setCount((prevCount) => prevCount + 1)"})]}),"\n",(0,s.jsx)(n.h3,{id:"setter-function-of-usestate",children:"Setter function of useState"}),"\n",(0,s.jsx)(n.p,{children:"Setter state can set a new value of state in many ways"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Set directly"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// change new `count` to 300\nsetCount(300);\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Set via ",(0,s.jsx)(n.code,{children:"callback"})," (this word again!) which callback have to one parameter the previous state and have to return new state.\nIn Case we want to use previous value to computed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// Best Practice\nsetCount((prevCount) => {\n    return prevCount + 1\n});\n\n// Short callback version, if we have one statement it will do and return at one line no curly bracket\nsetCount((prevCount) => prevCount + 1);\n\n// This can be done too, but not recommend, it may cause issue in the future(now it not difference)\nsetCount(count + 1);\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"challenge-accepted",children:"Challenge Accepted"}),"\n",(0,s.jsx)(n.p,{children:"Create minus button to minus the count by -1"}),"\n",(0,s.jsx)(n.h4,{id:"answer",children:"Answer"}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:"Show me"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"{8,12-14,20,23-25}",children:'//Counter.tsx\n\nimport { useState } from \'react\';\n\nexport const Counter = () => {\n  const [count, setCount] = useState<number>(101);\n\n  const handleClickPlus = () => {\n    setCount((prevCount) => prevCount + 1);\n  };\n\n  const handleClickMinus = () => {\n    setCount((prev) => prev -1)\n  }\n\n  return (\n    <div>\n      <p>{count}</p>\n\n      <button type="button" onClick={handleClickPlus}>\n        Plus\n      </button>\n      <button type="button" onClick={handleClickMinus}>\n        Minus\n      </button>\n    </div>\n  );\n};\n'})})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},113:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/counter_result-ff93bb2e3313862ed91e893dc978253e.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},c=s.createContext(o);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);