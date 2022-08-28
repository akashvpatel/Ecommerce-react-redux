(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(t,e,c){t.exports={item:"CartItem_item__1zqFB",details:"CartItem_details__3GWQF",quantity:"CartItem_quantity__16Kq9",price:"CartItem_price__36nHx",itemprice:"CartItem_itemprice__3Kjxm",actions:"CartItem_actions__3SKzH"}},14:function(t,e,c){t.exports={header:"Courses_header__3oqBk",text:"Courses_text__1Nc29"}},16:function(t,e,c){t.exports={notification:"Notification_notification__YVZhE",error:"Notification_error__1kdCV",success:"Notification_success__3NWMN"}},22:function(t,e,c){t.exports={button:"CartButton_button__3cdXx",badge:"CartButton_badge__1SUqX"}},23:function(t,e,c){t.exports={item:"ProductItem_item__3f440",price:"ProductItem_price__2WfL3",actions:"ProductItem_actions__2-t5m","product-list":"ProductItem_product-list__Rif2D",card:"ProductItem_card__3XA06"}},24:function(t,e,c){t.exports={products:"Products_products__1-BSJ",productlist:"Products_productlist__3fdoE"}},37:function(t,e,c){t.exports={card:"Card_card__1zjBh"}},38:function(t,e,c){t.exports={cart:"Cart_cart__qHMN-"}},39:function(t,e,c){t.exports={header:"MainHeader_header__2z7Ez"}},41:function(t,e,c){t.exports={footer:"Footer_footer__Pp5GU"}},53:function(t,e,c){},66:function(t,e,c){"use strict";c.r(e);var i=c(33),r=c.n(i),n=c(0),s=c(5),a=c(9),o=(c(53),c(25)),d=c(36),l=c(37),j=c.n(l),u=c(1),b=function(t){return Object(u.jsx)("section",{className:"".concat(j.a.card," ").concat(t.className?t.className:""),children:t.children})},p=c(38),h=c.n(p),m=c(12),x=Object(m.b)({name:"cart",initialState:{items:[],totalQuantity:0},reducers:{addItemToCart:function(t,e){var c=e.payload,i=t.items.find((function(t){return t.id===c.id}));t.totalQuantity++,i?(i.quantity++,i.totalPrice=i.totalPrice+c.price):t.items.push({id:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.title})},removeItemFromCart:function(t,e){var c=e.payload,i=t.items.find((function(t){return t.id===c}));t.totalQuantity--,1===i.quantity?t.items=t.items.filter((function(t){return t.id!==c})):(i.quantity--,i.totalPrice=i.totalPrice-i.price)}}}),O=x.actions,f=x,_=c(10),v=c.n(_),C=function(t){var e=Object(s.b)(),c=t.item,i=c.title,r=c.quantity,n=c.total,a=c.price,o=c.id;return Object(u.jsxs)("li",{className:v.a.item,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("div",{className:v.a.price,children:["\u20b9",n.toFixed(2)," ",Object(u.jsxs)("span",{className:v.a.itemprice,children:["(\u20b9",a.toFixed(2),"/item)"]})]})]}),Object(u.jsxs)("div",{className:v.a.details,children:[Object(u.jsxs)("div",{className:v.a.quantity,children:["x ",Object(u.jsx)("span",{children:r})]}),Object(u.jsxs)("div",{className:v.a.actions,children:[Object(u.jsx)("button",{onClick:function(){e(O.removeItemFromCart(o))},children:"-"}),Object(u.jsx)("button",{onClick:function(){e(O.addItemToCart({id:o,title:i,price:a}))},children:"+"})]})]})]})},N=function(t){var e=Object(s.c)((function(t){return t.cart.items}));return Object(u.jsxs)(b,{className:h.a.cart,children:[Object(u.jsx)("h2",{children:"Your Shopping Cart"}),Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)(C,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))})]})},y=Object(m.b)({name:"ui",initialState:{cartIsShown:!1,notification:null},reducers:{toggle:function(t){t.cartIsShown=!t.cartIsShown},showNotification:function(t,e){t.notification={state:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),g=y.actions,I=y,S=c(22),P=c.n(S),q=function(t){var e=Object(s.b)(),c=Object(s.c)((function(t){return t.cart.totalQuantity}));return Object(u.jsx)(a.b,{to:"/cart",children:Object(u.jsxs)("button",{className:P.a.button,onClick:function(){e(g.toggle())},children:[Object(u.jsx)("span",{children:"My Cart"}),Object(u.jsx)("span",{className:P.a.badge,children:c})]})})},w=c(39),k=c.n(w),F=c(14),B=c.n(F),D=(c(55),c(40)),E=(c.p,function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(D.Carousel,{autoFocus:!0,autoPlay:!0,infiniteLoop:!0,children:[Object(u.jsx)("div",{className:B.a.header,children:Object(u.jsx)("div",{className:B.a.text,children:Object(u.jsx)("span",{children:Object(u.jsxs)("h1",{children:[" Full Stack ",Object(u.jsx)("br",{}),"Web  Development ",Object(u.jsx)("br",{}),"Course"]})})})}),Object(u.jsx)("div",{className:B.a.header,children:Object(u.jsx)("div",{className:B.a.text,children:Object(u.jsx)("span",{children:Object(u.jsxs)("h1",{children:["Highest Rated Android ",Object(u.jsx)("br",{}),"Development ",Object(u.jsx)("br",{}),"Course"]})})})})]})})}),A=c(23),H=c.n(A),J=function(t){var e=Object(s.b)(),c=t.title,i=t.price,r=t.description,n=t.id;return Object(u.jsx)("div",{children:Object(u.jsxs)(b,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:c}),Object(u.jsxs)("div",{className:H.a.price,children:["\u20b9",i]})]}),Object(u.jsx)("p",{children:r}),Object(u.jsx)("div",{className:H.a.actions,children:Object(u.jsx)("button",{onClick:function(){e(O.addItemToCart({id:n,title:c,price:i}))},children:"Add to Cart"})})]})})},M=c(24),W=c.n(M),z=[{id:"p1",price:6e3,title:"Web Development Course",description:"web developmet courses cover HTML,CSS,JavaScript,ReactJs"},{id:"p2",price:5e3,title:"Android Development Course",description:"Android developmenet course for android app development."},{id:"p3",price:6e3,title:"Cloud computing Course",description:"cloud computing course."},{id:"p4",price:5e3,title:"IOS DevelopmentCourse",description:"IOS developmenet course for IOS app development."}],Q=function(t){return Object(u.jsxs)("section",{className:W.a.products,children:[Object(u.jsx)(E,{}),Object(u.jsx)("h2",{children:"Buy your favorite products"}),Object(u.jsx)("div",{className:W.a.productlist,children:z.map((function(t){return Object(u.jsx)(J,{Key:t.id,id:t.id,title:t.title,price:t.price,description:t.description})}))})]})},T=function(t){return Object(u.jsxs)("header",{className:k.a.header,children:[Object(u.jsx)(a.b,{to:"/",style:{textDecoration:"none"},element:Object(u.jsx)(Q,{}),children:Object(u.jsx)("h1",{children:"\ud83d\udda5\ufe0fCourses"})}),Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(q,{})})})})]})},K=function(t){return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(T,{}),Object(u.jsx)("main",{children:t.children})]})},R=c(16),L=c.n(R),U=function(t){var e="";"error"===t.status&&(e=L.a.error),"success"===t.status&&(e=L.a.success);var c="".concat(L.a.notification," ").concat(e);return Object(u.jsxs)("section",{className:c,children:[Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.message})]})},X=c(2),G=c(41),V=c.n(G),Y=function(){return Object(u.jsx)("div",{className:V.a.footer,children:Object(u.jsx)("div",{children:"Made With \u2764\ufe0f By Akash Patel"})})},Z=!0;var $=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.cart})),c=Object(s.c)((function(t){return t.ui.notification}));return Object(n.useEffect)((function(){var c=function(){var c=Object(d.a)(Object(o.a)().mark((function c(){return Object(o.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t(g.showNotification({status:"pending",title:"Sending...",message:"Sending cart data..."})),c.next=3,fetch("https://redux-app-985ab-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify(e)});case 3:if(c.sent.ok){c.next=6;break}throw new Error("sending cart data failed.");case 6:t(g.showNotification({status:"success",title:"Success",message:"Sent cart data successfully"}));case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();Z?Z=!1:c().catch((function(e){t(g.showNotification({status:"error",title:"Error",message:"Sending cart data failed!"}))}))}),[e,t]),Object(u.jsxs)(n.Fragment,{children:[c&&Object(u.jsx)(U,{status:c.status,title:c.title,message:c.message}),Object(u.jsxs)(K,{children:[Object(u.jsxs)(X.c,{children:[Object(u.jsx)(X.a,{path:"/",element:Object(u.jsx)(Q,{})}),Object(u.jsx)(X.a,{path:"/",element:Object(u.jsx)(E,{})})]}),Object(u.jsx)(X.c,{children:Object(u.jsx)(X.a,{path:"/cart",element:Object(u.jsx)(N,{})})}),Object(u.jsx)(Y,{})]})]})},tt=Object(m.a)({reducer:{ui:I.reducer,cart:f.reducer}});r.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(a.a,{children:Object(u.jsx)(s.a,{store:tt,children:Object(u.jsx)($,{})})}))}},[[66,1,2]]]);
//# sourceMappingURL=main.b17f8bfb.chunk.js.map