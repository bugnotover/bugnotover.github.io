"use strict";Vue.component("yl-menu",{template:"#tpl-menu",props:["menu","apps"],data:function(){return{menu:{},apps:{}}},methods:{onItemClick:function(t){this.$emit("itemclick",t)},onItemContextMenu:function(t){this.$emit("itemcontextmenu",t)},onMainContextMenu:function(t){this.$emit("maincontextmenu",t)}}}),Vue.component("yl-menu-item",{template:"#tpl-menu-item",props:["item","apps","open","depth","itemid"],data:function(){return{itemid:null,item:{},apps:{},open:!1,depth:0}},methods:{click:function(){this.item.children?this.item.open=!this.item.open:this.$emit("itemclick",this.item)},onContextMenu:function(t){this.$emit("itemcontextmenu",{id:this.itemid,item:this.item,event:t})},onItemClick:function(t){this.$emit("itemclick",t)},onItemContextMenu:function(t){this.$emit("itemcontextmenu",t)}}});