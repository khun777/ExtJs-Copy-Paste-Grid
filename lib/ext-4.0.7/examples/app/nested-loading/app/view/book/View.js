/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial Software License Agreement provided with the Software or, alternatively, in accordance with the terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * The view which displays information about a speficied book
 * @extends Ext.panel.Panel
 */
Ext.define('Books.view.book.View', {
    alias: 'widget.bookview',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.apply(this, {
            id        : 'itemCt',
            cls       : 'item-ct',
            flex      : 2,
            border    : false,
            autoScroll: true,
            
            layout: {
                type : 'hbox',
                align: 'middle',
                pack : 'center'
            },
            
            items: [
                {
                    id    : 'imgCt',
                    border: false,
                    margin: '0 10 0 0',
                    width : 250,
                    height: 308
                },
                {
                    id    : 'contentCt',
                    width : 500,
                    border: false
                }
            ]
        });
                
        this.callParent(arguments);
    },
    
    /**
     * Binds a record to this view
     */
    bind: function(record) {
        var imgCt = Ext.getCmp('imgCt'),
            contentCt = Ext.getCmp('contentCt');
        
        var imgTpl = new Ext.XTemplate(
            '<img src="{image}" />'
        );
        
        var contentTpl = new Ext.XTemplate(
            '<div class="name">{name} <span>${price}</span></div>',
            '<div class="author">By {author}</div>',
            '<div class="detail">{detail}</div>'
        );
        
        imgTpl.overwrite(imgCt.el, record.data);
        contentTpl.overwrite(contentCt.el, record.data);
        
        //update the layout of the contentTpl
        contentCt.setHeight('auto');
        this.doLayout();
    }
});
