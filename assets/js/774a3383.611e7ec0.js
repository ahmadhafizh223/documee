(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{107:function(e,l,t){"use strict";t.r(l);var a=t(0),i=t.n(a),n=t(118),d=t(210),o=t(236),s=t.n(o),r=t(237),u=t(238);const m=new d.QoreClient(r);m.init(u);var p=s()(m),c=t(208),f=t(315),y=t(209);l.default=function(){const{data:e,status:l}=p.view("allMember").useListRow({limit:10,order:"asc"});return i.a.createElement(n.a,{title:"Formnew"},i.a.createElement("div",{style:{textAlign:"center",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"20px"}},i.a.createElement("h1",null,"Coba"),e.length,e.map((e=>i.a.createElement(c.a,{style:{padding:"2rem 0",backgroundColor:"blue",marginTop:"1.5rem"}},i.a.createElement(f.a,null,i.a.createElement("h3",{className:"mb-0 text--warning"},"INI USER")),i.a.createElement(y.a,null,i.a.createElement("span",null,e.email)))))))}},237:function(e){e.exports=JSON.parse('{"version":"v1","endpoint":"https://prod-qore-app.qorebase.io","projectId":"I4FMZ3AJfGxQakb","organizationId":"jOFw6slDwPhyzDM","authenticationId":"nCRpkP6qBsShicE","WARNING":"[WARNING] This file is generated by running `$ qore codegen` on your root project, please do not edit"}')},238:function(e){e.exports=JSON.parse('{"WARNING":"[WARNING] This file is generated by running `$ qore codegen` on your root project, please do not edit","tables":[{"name":"Departemen","type":null,"id":"departemen","fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true},{"name":"description","type":"text","deletionProtection":false,"defaultValue":null,"id":"description","displayField":false},{"name":"Project","type":"relation","deletionProtection":false,"defaultValue":null,"id":"project","table":"project","column":"deptPic","multiple":true,"relatedTableFields":[],"displayField":false},{"name":"User 1","type":"relation","deletionProtection":false,"defaultValue":null,"id":"user1","table":"user","column":"departemen","multiple":true,"relatedTableFields":[],"displayField":false}]},{"name":"DocumentationDetail","type":null,"id":"documentationDetail","fields":[{"name":"title","type":"text","deletionProtection":false,"defaultValue":null,"id":"title","displayField":true},{"name":"projectId","type":"relation","deletionProtection":false,"defaultValue":null,"id":"projectId","table":"project","column":"documentationDetail","multiple":false,"relatedTableFields":["name"],"displayField":false},{"name":"categoryId","type":"relation","deletionProtection":false,"defaultValue":null,"id":"categoryId","table":"documentCategory","column":"documentationDetail1","multiple":false,"relatedTableFields":["name"],"displayField":false},{"name":"timestamp","type":"date","deletionProtection":false,"defaultValue":null,"id":"timestamp","displayField":false},{"name":"description","type":"text","deletionProtection":false,"defaultValue":null,"id":"description","displayField":false},{"name":"contributors","type":"relation","deletionProtection":false,"defaultValue":null,"id":"contributors","table":"user","column":"documentationDetail2","multiple":false,"relatedTableFields":["name"],"displayField":false}]},{"name":"DocumentCategory","type":null,"id":"documentCategory","fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true},{"name":"DocumentationDetail 1","type":"relation","deletionProtection":false,"defaultValue":null,"id":"documentationDetail1","table":"documentationDetail","column":"categoryId","multiple":true,"relatedTableFields":[],"displayField":false}]},{"name":"member","type":"auth","id":"member","fields":[{"name":"email","type":"text","deletionProtection":true,"defaultValue":null,"id":"email","displayField":true},{"name":"role","type":"role","deletionProtection":true,"defaultValue":null,"id":"role","displayField":false},{"name":"password","type":"password","deletionProtection":false,"id":"password","displayField":false}]},{"name":"Project","type":null,"id":"project","fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true},{"name":"deptPic","type":"relation","deletionProtection":false,"defaultValue":null,"id":"deptPic","table":"departemen","column":"project","multiple":false,"relatedTableFields":["name"],"displayField":false},{"name":"projectMember","type":"relation","deletionProtection":false,"defaultValue":null,"id":"projectMember","table":"user","column":"project1","multiple":true,"relatedTableFields":["name"],"displayField":false},{"name":"DocumentationDetail","type":"relation","deletionProtection":false,"defaultValue":null,"id":"documentationDetail","table":"documentationDetail","column":"projectId","multiple":true,"relatedTableFields":[],"displayField":false}]},{"name":"Role","type":null,"id":"role","fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true},{"name":"description","type":"text","deletionProtection":false,"defaultValue":null,"id":"description","displayField":false},{"name":"User 2","type":"relation","deletionProtection":false,"defaultValue":null,"id":"user2","table":"user","column":"role","multiple":true,"relatedTableFields":[],"displayField":false}]},{"name":"User","type":null,"id":"user","fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true},{"name":"Project 1","type":"relation","deletionProtection":false,"defaultValue":null,"id":"project1","table":"project","column":"projectMember","multiple":true,"relatedTableFields":[],"displayField":false},{"name":"departemen","type":"relation","deletionProtection":false,"defaultValue":null,"id":"departemen","table":"departemen","column":"user1","multiple":false,"relatedTableFields":["name"],"displayField":false},{"name":"email","type":"text","deletionProtection":false,"defaultValue":null,"id":"email","displayField":false},{"name":"password","type":"password","deletionProtection":false,"id":"password","displayField":false},{"name":"role","type":"relation","deletionProtection":false,"defaultValue":null,"id":"role","table":"role","column":"user2","multiple":false,"relatedTableFields":["name"],"displayField":false},{"name":"DocumentationDetail 2","type":"relation","deletionProtection":false,"defaultValue":null,"id":"documentationDetail2","table":"documentationDetail","column":"contributors","multiple":true,"relatedTableFields":[],"displayField":false}]}],"roles":[{"name":"admin","isAdmin":true,"isEditor":false,"isPublic":false,"permissions":[]},{"name":"public","isAdmin":false,"isEditor":false,"isPublic":true,"permissions":[{"insert":false,"select":true,"update":false,"delete":false,"viewId":"allMember"},{"insert":false,"select":true,"update":false,"delete":false,"viewId":"allProject"},{"insert":false,"select":true,"update":false,"delete":false,"viewId":"allDepartemen"},{"insert":false,"select":true,"update":false,"delete":false,"viewId":"allUser"},{"insert":false,"select":true,"update":false,"delete":false,"viewId":"allDocumentationDetail"},{"insert":false,"select":true,"update":false,"delete":false,"viewId":"allDocumentCategory"},{"insert":false,"select":true,"update":false,"delete":false,"viewId":"allRole"}]}],"forms":[],"views":[{"id":"allMember","name":"All member","tableId":"member","parameters":[],"sorts":[],"fields":[{"name":"email","type":"text","deletionProtection":true,"defaultValue":null,"id":"email","displayField":true,"design":null},{"name":"role","type":"role","deletionProtection":true,"defaultValue":null,"id":"role","displayField":false,"design":null},{"name":"password","type":"password","deletionProtection":false,"id":"password","displayField":false,"design":null}],"design":null},{"id":"allProject","name":"All Project","tableId":"project","parameters":[],"sorts":[],"fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true,"design":{"width":258}},{"name":"deptPic","type":"relation","deletionProtection":false,"defaultValue":null,"id":"deptPic","table":"departemen","column":"project","multiple":false,"relatedTableFields":["name"],"displayField":false,"design":null},{"name":"projectMember","type":"relation","deletionProtection":false,"defaultValue":null,"id":"projectMember","table":"user","column":"project1","multiple":true,"relatedTableFields":["name"],"displayField":false,"design":null}],"design":null},{"id":"allDepartemen","name":"All Departemen","tableId":"departemen","parameters":[],"sorts":[],"fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true,"design":null},{"name":"description","type":"text","deletionProtection":false,"defaultValue":null,"id":"description","displayField":false,"design":null}],"design":null},{"id":"allUser","name":"All User","tableId":"user","parameters":[],"sorts":[],"fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true,"design":null},{"name":"departemen","type":"relation","deletionProtection":false,"defaultValue":null,"id":"departemen","table":"departemen","column":"user1","multiple":false,"relatedTableFields":["name"],"displayField":false,"design":null},{"name":"email","type":"text","deletionProtection":false,"defaultValue":null,"id":"email","displayField":false,"design":null},{"name":"password","type":"password","deletionProtection":false,"id":"password","displayField":false,"design":null},{"name":"role","type":"relation","deletionProtection":false,"defaultValue":null,"id":"role","table":"role","column":"user2","multiple":false,"relatedTableFields":["name"],"displayField":false,"design":null}],"design":null},{"id":"allDocumentationDetail","name":"All DocumentationDetail","tableId":"documentationDetail","parameters":[],"sorts":[],"fields":[{"name":"title","type":"text","deletionProtection":false,"defaultValue":null,"id":"title","displayField":true,"design":null},{"name":"timestamp","type":"date","deletionProtection":false,"defaultValue":null,"id":"timestamp","displayField":false,"design":null},{"name":"projectId","type":"relation","deletionProtection":false,"defaultValue":null,"id":"projectId","table":"project","column":"documentationDetail","multiple":false,"relatedTableFields":["name"],"displayField":false,"design":null},{"name":"categoryId","type":"relation","deletionProtection":false,"defaultValue":null,"id":"categoryId","table":"documentCategory","column":"documentationDetail1","multiple":false,"relatedTableFields":["name"],"displayField":false,"design":null},{"name":"description","type":"text","deletionProtection":false,"defaultValue":null,"id":"description","displayField":false,"design":null},{"name":"contributors","type":"relation","deletionProtection":false,"defaultValue":null,"id":"contributors","table":"user","column":"documentationDetail2","multiple":false,"relatedTableFields":["name"],"displayField":false,"design":null}],"design":null},{"id":"allDocumentCategory","name":"All DocumentCategory","tableId":"documentCategory","parameters":[],"sorts":[],"fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true,"design":null}],"design":null},{"id":"allRole","name":"All Role","tableId":"role","parameters":[],"sorts":[],"fields":[{"name":"name","type":"text","deletionProtection":false,"defaultValue":null,"id":"name","displayField":true,"design":null},{"name":"description","type":"text","deletionProtection":false,"defaultValue":null,"id":"description","displayField":false,"design":null}],"design":null}]}')}}]);