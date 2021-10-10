"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[177],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=p,c=m["".concat(o,".").concat(d)]||m[d]||k[d]||r;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function d(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3280:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(7462),p=n(3366),r=(n(7294),n(3905)),l=["components"],i={},o="Input",s={unversionedId:"classes/Input",id:"classes/Input",isDocsHomePage:!1,title:"Input",description:"The Input class represents a single MIDI input port. This object is derived from the host's",source:"@site/api/classes/Input.md",sourceDirName:"classes",slug:"/classes/Input",permalink:"/webmidi/api/classes/Input",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enumerations",permalink:"/webmidi/api/classes/Enumerations"},next:{title:"InputChannel",permalink:"/webmidi/api/classes/InputChannel"}},u=[{value:"<code>new Input(...)</code>",id:"new-input",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>.channels</code>",id:"channels",children:[]},{value:"<code>.connection</code>",id:"connection",children:[]},{value:"<code>.id</code>",id:"id",children:[]},{value:"<code>.manufacturer</code>",id:"manufacturer",children:[]},{value:"<code>.name</code>",id:"name",children:[]},{value:"<code>.octaveOffset</code>",id:"octaveoffset",children:[]},{value:"<code>.state</code>",id:"state",children:[]},{value:"<code>.type</code>",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>.addListener(...)</code>",id:"addlistener",children:[]},{value:"<code>.addOneTimeListener(...)</code>",id:"addonetimelistener",children:[]},{value:"<code>.close()</code>",id:"close",children:[]},{value:"<code>.destroy()</code>",id:"destroy",children:[]},{value:"<code>.hasListener(...)</code>",id:"haslistener",children:[]},{value:"<code>.open()</code>",id:"open",children:[]},{value:"<code>.removeListener(...)</code>",id:"removelistener",children:[]}]},{value:"Events",id:"events",children:[{value:"<code>&quot;activesensing&quot;</code>",id:"activesensing",children:[]},{value:"<code>&quot;clock&quot;</code>",id:"clock",children:[]},{value:"<code>&quot;closed&quot;</code>",id:"closed",children:[]},{value:"<code>&quot;continue&quot;</code>",id:"continue",children:[]},{value:"<code>&quot;disconnected&quot;</code>",id:"disconnected",children:[]},{value:"<code>&quot;midimessage&quot;</code>",id:"midimessage",children:[]},{value:"<code>&quot;opened&quot;</code>",id:"opened",children:[]},{value:"<code>&quot;reset&quot;</code>",id:"reset",children:[]},{value:"<code>&quot;songposition&quot;</code>",id:"songposition",children:[]},{value:"<code>&quot;songselect&quot;</code>",id:"songselect",children:[]},{value:"<code>&quot;start&quot;</code>",id:"start",children:[]},{value:"<code>&quot;stop&quot;</code>",id:"stop",children:[]},{value:"<code>&quot;sysex&quot;</code>",id:"sysex",children:[]},{value:"<code>&quot;timecode&quot;</code>",id:"timecode",children:[]},{value:"<code>&quot;tunerequest&quot;</code>",id:"tunerequest",children:[]},{value:"<code>&quot;unknownmidimessage&quot;</code>",id:"unknownmidimessage",children:[]}]}],k={toc:u};function m(e){var t=e.components,n=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"input"},"Input"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," class represents a single MIDI input port. This object is derived from the host's\nMIDI subsystem and should not be directly instantiated. Instead, you can access to inputs by\nreferring to the ",(0,r.kt)("a",{parentName:"p",href:"WebMidi#inputs"},(0,r.kt)("inlineCode",{parentName:"a"},"WebMidi.inputs"))," array."),(0,r.kt)("p",null,"Note that a single device may expose several inputs."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("a",{parentName:"p",href:"EventEmitter"},(0,r.kt)("inlineCode",{parentName:"a"},"EventEmitter"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fires"),": ",(0,r.kt)("a",{parentName:"p",href:"Input#event:opened"},(0,r.kt)("inlineCode",{parentName:"a"},"opened")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:disconnected"},(0,r.kt)("inlineCode",{parentName:"a"},"disconnected")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:closed"},(0,r.kt)("inlineCode",{parentName:"a"},"closed")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:midimessage"},(0,r.kt)("inlineCode",{parentName:"a"},"midimessage")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:sysex"},(0,r.kt)("inlineCode",{parentName:"a"},"sysex")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:timecode"},(0,r.kt)("inlineCode",{parentName:"a"},"timecode")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:songposition"},(0,r.kt)("inlineCode",{parentName:"a"},"songposition")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:songselect"},(0,r.kt)("inlineCode",{parentName:"a"},"songselect")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:tunerequest"},(0,r.kt)("inlineCode",{parentName:"a"},"tunerequest")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:clock"},(0,r.kt)("inlineCode",{parentName:"a"},"clock")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:start"},(0,r.kt)("inlineCode",{parentName:"a"},"start")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:continue"},(0,r.kt)("inlineCode",{parentName:"a"},"continue")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:stop"},(0,r.kt)("inlineCode",{parentName:"a"},"stop")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:activesensing"},(0,r.kt)("inlineCode",{parentName:"a"},"activesensing")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:reset"},(0,r.kt)("inlineCode",{parentName:"a"},"reset")),", ",(0,r.kt)("a",{parentName:"p",href:"Input#event:unknownmidimessage"},(0,r.kt)("inlineCode",{parentName:"a"},"unknownmidimessage"))),(0,r.kt)("h3",{id:"new-input"},(0,r.kt)("inlineCode",{parentName:"h3"},"new Input(...)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Input(midiInput)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"channels"},(0,r.kt)("inlineCode",{parentName:"h3"},".channels")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Array.","<","InputChannel",">"),(0,r.kt)("p",null,"Array containing the 16 ",(0,r.kt)("a",{parentName:"p",href:"InputChannel"},(0,r.kt)("inlineCode",{parentName:"a"},"InputChannel"))," objects available for this ",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),". The\nchannels are numbered 1 through 16."),(0,r.kt)("h3",{id:"connection"},(0,r.kt)("inlineCode",{parentName:"h3"},".connection")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"Input port's connection state: ",(0,r.kt)("inlineCode",{parentName:"p"},'"pending"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"open"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"closed"'),"."),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},".id")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"ID string of the MIDI port. The ID is host-specific. Do not expect the same ID on different\nplatforms. For example, Google Chrome and the Jazz-Plugin report completely different IDs for\nthe same port."),(0,r.kt)("h3",{id:"manufacturer"},(0,r.kt)("inlineCode",{parentName:"h3"},".manufacturer")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"Name of the manufacturer of the device that makes this input port available."),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},".name")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"Name of the MIDI input"),(0,r.kt)("h3",{id:"octaveoffset"},(0,r.kt)("inlineCode",{parentName:"h3"},".octaveOffset")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("p",null,"An integer to offset the reported octave of incoming notes. By default, middle C (MIDI note\nnumber 60) is placed on the 4th octave (C4)."),(0,r.kt)("p",null,"If, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"octaveOffset")," is set to 2, MIDI note number 60 will be reported as C6. If\n",(0,r.kt)("inlineCode",{parentName:"p"},"octaveOffset")," is set to -1, MIDI note number 60 will be reported as C3."),(0,r.kt)("p",null,"Note that this value is combined with the global offset value defined on the ",(0,r.kt)("inlineCode",{parentName:"p"},"WebMidi")," object\n(if any)."),(0,r.kt)("h3",{id:"state"},(0,r.kt)("inlineCode",{parentName:"h3"},".state")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"State of the input port: ",(0,r.kt)("inlineCode",{parentName:"p"},'"connected"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"disconnected"'),"."),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},".type")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"Port type. In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"Input"),", this is always: ",(0,r.kt)("inlineCode",{parentName:"p"},'"input"'),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"addlistener"},(0,r.kt)("inlineCode",{parentName:"h3"},".addListener(...)")),(0,r.kt)("p",null,"Adds an event listener that will trigger a function callback when the specified event happens.\nThe event can be ",(0,r.kt)("strong",{parentName:"p"},"channel-bound")," or ",(0,r.kt)("strong",{parentName:"p"},"input-wide"),". Channel-bound events are dispatched by\n{@link InputChannel} objects and are tied to a specific MIDI channel while input-wide events\nare dispatched by the {@link Input} object itself and are not tied to a specific channel."),(0,r.kt)("p",null,"When listening for an input-wide event, you must specify the event to listen for and the\ncallback function to trigger when the event happens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'WebMidi.inputs[0].addListener("midimessage", someFunction);\n')),(0,r.kt)("p",null,"To listen for a channel-bound event, you must also specify the event to listen for and the\nfunction to trigger but you have to add the channels you wish to listen on in the ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\nparameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'WebMidi.inputs[0].addListener("noteon", someFunction, {channels: [1, 2, 3]});\n')),(0,r.kt)("p",null,"The code above will add a listener for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"noteon"')," event and call ",(0,r.kt)("inlineCode",{parentName:"p"},"someFunction")," when the\nevent is triggered on MIDI channels ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,r.kt)("p",null,"Note that, when adding events to channels, it is the {@link InputChannel} instance that\nactually gets a listener added and not the `{@link Input} instance."),(0,r.kt)("p",null,"Note: if you want to add a listener to a single MIDI channel you should probably do so directly\non the {@link InputChannel} object itself."),(0,r.kt)("p",null,"There are 6 families of events you can listen to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MIDI System Common")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[songposition]","{@link Input#event:songposition}"),(0,r.kt)("li",{parentName:"ul"},"[songselect]","{@link Input#event:songselect}"),(0,r.kt)("li",{parentName:"ul"},"[sysex]","{@link Input#event:sysex}"),(0,r.kt)("li",{parentName:"ul"},"[timecode]","{@link Input#event:timecode}"),(0,r.kt)("li",{parentName:"ul"},"[tunerequest]","{@link Input#event:tunerequest}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MIDI System Real-Time")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[clock]","{@link Input#event:clock}"),(0,r.kt)("li",{parentName:"ul"},"[start]","{@link Input#event:start}"),(0,r.kt)("li",{parentName:"ul"},"[continue]","{@link Input#event:continue}"),(0,r.kt)("li",{parentName:"ul"},"[stop]","{@link Input#event:stop}"),(0,r.kt)("li",{parentName:"ul"},"[activesensing]","{@link Input#event:activesensing}"),(0,r.kt)("li",{parentName:"ul"},"[reset]","{@link Input#event:reset}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"State Change")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[opened]","{@link Input#event:opened}"),(0,r.kt)("li",{parentName:"ul"},"[closed]","{@link Input#event:closed}"),(0,r.kt)("li",{parentName:"ul"},"[disconnected]","{@link Input#event:disconnected}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Catch-All")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[midimessage]","{@link Input#event:midimessage}"),(0,r.kt)("li",{parentName:"ul"},"[unknownmidimessage]","{@link Input#event:unknownmidimessage}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Channel Voice")," Events (channel-specific)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[channelaftertouch]","{@link InputChannel#event:channelaftertouch}"),(0,r.kt)("li",{parentName:"ul"},"[controlchange]","{@link InputChannel#event:controlchange}"),(0,r.kt)("li",{parentName:"ul"},"[keyaftertouch]","{@link InputChannel#event:keyaftertouch}"),(0,r.kt)("li",{parentName:"ul"},"[noteoff]","{@link InputChannel#event:noteoff}"),(0,r.kt)("li",{parentName:"ul"},"[noteon]","{@link InputChannel#event:noteon}"),(0,r.kt)("li",{parentName:"ul"},"[nrpn]","{@link InputChannel#event:nrpn}"),(0,r.kt)("li",{parentName:"ul"},"[pitchbend]","{@link InputChannel#event:pitchbend}"),(0,r.kt)("li",{parentName:"ul"},"[programchange]","{@link InputChannel#event:programchange}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Channel Mode")," Events (channel-specific)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"allnotesoff"),(0,r.kt)("li",{parentName:"ul"},"allsoundoff"),(0,r.kt)("li",{parentName:"ul"},"localcontrol"),(0,r.kt)("li",{parentName:"ul"},"monomode"),(0,r.kt)("li",{parentName:"ul"},"omnimode"),(0,r.kt)("li",{parentName:"ul"},"resetallcontrollers"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"NRPN")," Events (channel-specific)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nrpndataentrycoarse"),(0,r.kt)("li",{parentName:"ul"},"nrpndataentryfine"),(0,r.kt)("li",{parentName:"ul"},"nrpndatabuttonincrement"),(0,r.kt)("li",{parentName:"ul"},"nrpndatabuttondecrement"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RPN")," Events (channel-specific)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rpndataentrycoarse"),(0,r.kt)("li",{parentName:"ul"},"rpndataentryfine"),(0,r.kt)("li",{parentName:"ul"},"rpndatabuttonincrement"),(0,r.kt)("li",{parentName:"ul"},"rpndatabuttondecrement")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"addListener(event, listener, options, options.arguments, options.channels, options.context, options.duration, options.prepend, options.remaining) \u21d2 Array.","<","Listener",">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("h3",{id:"addonetimelistener"},(0,r.kt)("inlineCode",{parentName:"h3"},".addOneTimeListener(...)")),(0,r.kt)("p",null,"Adds a one-time event listener that will trigger a function callback when the specified event\nhappens. The event can be ",(0,r.kt)("strong",{parentName:"p"},"channel-bound")," or ",(0,r.kt)("strong",{parentName:"p"},"input-wide"),". Channel-bound events are\ndispatched by {@link InputChannel} objects and are tied to a specific MIDI channel while\ninput-wide events are dispatched by the {@link Input} object itself and are not tied to a\nspecific channel."),(0,r.kt)("p",null,"When listening for an input-wide event, you must specify the event to listen for and the\ncallback function to trigger when the event happens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'WebMidi.inputs[0].addListener("midimessage", someFunction);\n')),(0,r.kt)("p",null,"To listen for a channel-bound event, you must also specify the event to listen for and the\nfunction to trigger but you have to add the channels you wish to listen on in the ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\nparameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'WebMidi.inputs[0].addListener("noteon", someFunction, {channels: [1, 2, 3]});\n')),(0,r.kt)("p",null,"The code above will add a listener for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"noteon"')," event and call ",(0,r.kt)("inlineCode",{parentName:"p"},"someFunction")," when the\nevent is triggered on MIDI channels ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,r.kt)("p",null,"Note that, when adding events to channels, it is the {@link InputChannel} instance that\nactually gets a listener added and not the `{@link Input} instance."),(0,r.kt)("p",null,"Note: if you want to add a listener to a single MIDI channel you should probably do so directly\non the {@link InputChannel} object itself."),(0,r.kt)("p",null,"There are 6 families of events you can listen to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MIDI System Common")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[songposition]","{@link Input#event:songposition}"),(0,r.kt)("li",{parentName:"ul"},"[songselect]","{@link Input#event:songselect}"),(0,r.kt)("li",{parentName:"ul"},"[sysex]","{@link Input#event:sysex}"),(0,r.kt)("li",{parentName:"ul"},"[timecode]","{@link Input#event:timecode}"),(0,r.kt)("li",{parentName:"ul"},"[tunerequest]","{@link Input#event:tunerequest}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MIDI System Real-Time")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[clock]","{@link Input#event:clock}"),(0,r.kt)("li",{parentName:"ul"},"[start]","{@link Input#event:start}"),(0,r.kt)("li",{parentName:"ul"},"[continue]","{@link Input#event:continue}"),(0,r.kt)("li",{parentName:"ul"},"[stop]","{@link Input#event:stop}"),(0,r.kt)("li",{parentName:"ul"},"[activesensing]","{@link Input#event:activesensing}"),(0,r.kt)("li",{parentName:"ul"},"[reset]","{@link Input#event:reset}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"State Change")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[opened]","{@link Input#event:opened}"),(0,r.kt)("li",{parentName:"ul"},"[closed]","{@link Input#event:closed}"),(0,r.kt)("li",{parentName:"ul"},"[disconnected]","{@link Input#event:disconnected}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Catch-All")," Events (input-wide)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[midimessage]","{@link Input#event:midimessage}"),(0,r.kt)("li",{parentName:"ul"},"[unknownmidimessage]","{@link Input#event:unknownmidimessage}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Channel Voice")," Events (channel-specific)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[channelaftertouch]","{@link InputChannel#event:channelaftertouch}"),(0,r.kt)("li",{parentName:"ul"},"[controlchange]","{@link InputChannel#event:controlchange}"),(0,r.kt)("li",{parentName:"ul"},"[keyaftertouch]","{@link InputChannel#event:keyaftertouch}"),(0,r.kt)("li",{parentName:"ul"},"[noteoff]","{@link InputChannel#event:noteoff}"),(0,r.kt)("li",{parentName:"ul"},"[noteon]","{@link InputChannel#event:noteon}"),(0,r.kt)("li",{parentName:"ul"},"[nrpn]","{@link InputChannel#event:nrpn}"),(0,r.kt)("li",{parentName:"ul"},"[pitchbend]","{@link InputChannel#event:pitchbend}"),(0,r.kt)("li",{parentName:"ul"},"[programchange]","{@link InputChannel#event:programchange}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Channel Mode")," Events (channel-specific)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"allnotesoff"),(0,r.kt)("li",{parentName:"ul"},"allsoundoff"),(0,r.kt)("li",{parentName:"ul"},"localcontrol"),(0,r.kt)("li",{parentName:"ul"},"monomode"),(0,r.kt)("li",{parentName:"ul"},"omnimode"),(0,r.kt)("li",{parentName:"ul"},"resetallcontrollers")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"addOneTimeListener(event, listener, options, options.arguments, options.channels, options.context, options.duration, options.prepend) \u21d2 Array.","<","Listener",">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("h3",{id:"close"},(0,r.kt)("inlineCode",{parentName:"h3"},".close()")),(0,r.kt)("p",null,"Closes the input. When an input is closed, it cannot be used to listen to MIDI messages until\nthe input is opened again by calling ","[Input.open()]","{@link Input#open}."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"close() \u21d2 Promise.","<","Input",">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("h3",{id:"destroy"},(0,r.kt)("inlineCode",{parentName:"h3"},".destroy()")),(0,r.kt)("p",null,"Destroys the ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," by remove all listeners, emptying the ",(0,r.kt)("inlineCode",{parentName:"p"},"channels")," array and unlinking the\nMIDI subsystem."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"destroy() \u21d2 Promise.","<","void",">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("h3",{id:"haslistener"},(0,r.kt)("inlineCode",{parentName:"h3"},".hasListener(...)")),(0,r.kt)("p",null,"Checks if the specified event type is already defined to trigger the listener function. For\nchannel-specific events, the function will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," only if all channels have the listener\ndefined."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"hasListener(event, listener, options, options.channels) \u21d2 Boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("h3",{id:"open"},(0,r.kt)("inlineCode",{parentName:"h3"},".open()")),(0,r.kt)("p",null,"Opens the input for usage. This is usually unnecessary as the port is open automatically when\nWebMidi is enabled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"open() \u21d2 Promise.","<","Input",">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("h3",{id:"removelistener"},(0,r.kt)("inlineCode",{parentName:"h3"},".removeListener(...)")),(0,r.kt)("p",null,"Removes the specified listener for the specified event. If no listener is specified, all\nlisteners for the specified event will be removed. If no event is specified, all listeners for\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," as well as all listeners for all ",(0,r.kt)("inlineCode",{parentName:"p"},"InputChannels")," will be removed."),(0,r.kt)("p",null,"By default, channel-specific listeners will be removed from all channels unless the\n",(0,r.kt)("inlineCode",{parentName:"p"},"options.channel")," narrows it down."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"removeListener(type, listener, options, options.channels, options.context, options.remaining)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"activesensing"},(0,r.kt)("inlineCode",{parentName:"h3"},'"activesensing"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when an ",(0,r.kt)("strong",{parentName:"p"},"active sensing")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"clock"},(0,r.kt)("inlineCode",{parentName:"h3"},'"clock"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"timing clock")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"closed"},(0,r.kt)("inlineCode",{parentName:"h3"},'"closed"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Event emitted when the {@link Input} has been closed by calling the {@link Input#close}\nmethod."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("h3",{id:"continue"},(0,r.kt)("inlineCode",{parentName:"h3"},'"continue"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"continue")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"disconnected"},(0,r.kt)("inlineCode",{parentName:"h3"},'"disconnected"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Event emitted when the {@link Input} becomes unavailable. This event is typically fired\nwhen the MIDI device is unplugged."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Object"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target.connection"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target.id"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target.manufacturer"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target.name"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target.state"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target.type"),":string"),(0,r.kt)("h3",{id:"midimessage"},(0,r.kt)("inlineCode",{parentName:"h3"},'"midimessage"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Event emitted when any MIDI message is received on an ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.statusByte"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.dataBytes"),":Array.","<","number",">"),(0,r.kt)("h3",{id:"opened"},(0,r.kt)("inlineCode",{parentName:"h3"},'"opened"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Event emitted when the {@link Input} has been opened by calling the {@link Input#open}\nmethod."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("h3",{id:"reset"},(0,r.kt)("inlineCode",{parentName:"h3"},'"reset"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"reset")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"songposition"},(0,r.kt)("inlineCode",{parentName:"h3"},'"songposition"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"song position")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"songselect"},(0,r.kt)("inlineCode",{parentName:"h3"},'"songselect"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"song select")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"song"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"start"},(0,r.kt)("inlineCode",{parentName:"h3"},'"start"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"start")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"stop"},(0,r.kt)("inlineCode",{parentName:"h3"},'"stop"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"stop")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"sysex"},(0,r.kt)("inlineCode",{parentName:"h3"},'"sysex"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"system exclusive")," message has been received.\nYou should note that, to receive ",(0,r.kt)("inlineCode",{parentName:"p"},"sysex")," events, you must call the ",(0,r.kt)("inlineCode",{parentName:"p"},"WebMidi.enable()"),"\nmethod with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sysex")," option set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'WebMidi.enable({sysex: true})\n .then(() => console.log("WebMidi has been enabled with sysex support."))\n .catch(err => console.log("WebMidi could not be enabled."))\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"timecode"},(0,r.kt)("inlineCode",{parentName:"h3"},'"timecode"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"time code quarter frame")," message has been\nreceived."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"tunerequest"},(0,r.kt)("inlineCode",{parentName:"h3"},'"tunerequest"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when a ",(0,r.kt)("strong",{parentName:"p"},"tune request")," message has been received."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"),(0,r.kt)("h3",{id:"unknownmidimessage"},(0,r.kt)("inlineCode",{parentName:"h3"},'"unknownmidimessage"')),(0,r.kt)("p",null,"Type: Object"),(0,r.kt)("p",null,"Input-wide (system) event emitted when an unknown MIDI message has been received. It could\nbe, for example, one of the undefined/reserved messages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"target"),":Input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"message"),":Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timestamp"),":number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type"),":string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.data"),":Array"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"event.rawData"),":Uint8Array"))}m.isMDXComponent=!0}}]);