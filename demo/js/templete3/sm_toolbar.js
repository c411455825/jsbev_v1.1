/**
 * Class: SuperMap.Bev.ToolBar
 * 模板三顶部工具栏。
 */
(function () {
    SuperMap.Bev.Class.create(
        "SuperMap.Bev.ToolBar",
        {
            /**
             * APIProperty: body
             * {HTMLElement} 父容器
             */
            body:null,
            /**
             * Constructor: SuperMap.Bev.ToolBar
             * 实例化 ToolBar 类。
             *
             * Parameters:
             * body - {HTMLElement} 父容器
             *
             * Examples:
             * (code)
             * var myToolBar = new SuperMap.Bev.ToolBar($("#toolbar"));
             * (end)
             */
            init:function (body) {
                var bg,d1;

                bg = $("<div>")
                    .css({
                        "position":"absolute",
                        "width":"100%",
                        "height":"100%"
                    })
                    .addClass("ui-state-default")//ui-widget-header
                    .appendTo(body);

                d1 = this.createBtn(body,"demo/img/resizemap.png",function(){},"全副显示");
                d1 = this.createBtn(body,"demo/img/draw_t3.png",function(){},"定位");
                d1 = this.createBtn(body,"demo/img/mesure_t3.png",function(){},"绘制");
                d1 = this.createBtn(body,"demo/img/geolocate_t3.png",function(){},"绘制");
            },
            /**
             * Method: createBtn
             * 创建一个按钮。
             *
             * Returns:
             * {HTMLElement}  返回 Dom 对象。
             */
            createBtn:function(container,imgSrc,click,title){
                var btn,icon,t1;

                btn = $("<span>")
                    .css({
                        "display":"inline-block",
                        "height":"70px",
                        "width":"54px",
                        "position":"relative",
                        "margin":"10px 5px 0px 5px"
                    })
                    //.addClass("ui-state-default")
                    .attr({
                        "title":title
                    })
                    .click(click)
                    .appendTo(container);

                icon = $("<img>")
                    .attr({
                        "src":imgSrc
                    })
                    .css({
                        "height":"54px",
                        "width":"54px",
                        "position":"absolute"
                    })
                    .appendTo(btn);

                t1 = $("<div>")
                    .css({
                        "position":"absolute",
                        "bottom":"0px",
                        "font-size":"10px",
                        "width":"100%",
                        "text-align":"center",
                        "vertical-align":"bottom",
                        "-webkit-text-size-adjust":"none"
                    })
                    .html(title)
                    .appendTo(btn);

                return btn;
            }
        },
        null,                              //父类
        false,                             //是否是静态类
        [                                  //初始化该类之前需要加载的js文件
            "demo/js/ui/jquery.ui.widget.js"
        ]
    );
})();
