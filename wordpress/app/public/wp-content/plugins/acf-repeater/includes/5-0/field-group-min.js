!function($){var e=acf.field_group.field_object.extend({type:"repeater",actions:{render_settings:"render"},events:{"change .acf-field-setting-layout input":"_change_layout","focus .acf-field-setting-collapsed select":"_focus_collapsed"},focus:function(){this.$fields=this.$field.find(".acf-field-list:first")},render:function(){this.render_layout(),this.render_collapsed()},render_layout:function(){var e=this.setting("layout input:checked").val();this.$fields.attr("data-layout",e)},render_collapsed:function(){var e=this.setting("collapsed select"),t=[];t.push({label:e.find('option[value=""]').text(),value:""}),this.$fields.children(".acf-field-object").each(function(){var e=$(this);t.push({label:e.find(".field-label:first").val(),value:e.attr("data-key")})}),acf.render_select(e,t)},_change_layout:function(e){this.render_layout()},_focus_collapsed:function(e){this.render_collapsed()}})}(jQuery);