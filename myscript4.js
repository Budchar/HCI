var Create = {
    Create_Window: function (x, y, width, height) {
        
        Canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            Ctx = Canvas.getContext("2d");

            Ctx.fillStyle = 'orange';
            Ctx.lineWidth = 2;
            Ctx.lineCap = 'butt';
            Ctx.linJOin = 'miter';

            Ctx.fillRect(x, y, width, height); //mainRect
            Ctx.strokeRect(x, y, width, height); //mainRect 테두리
            Ctx.strokeRect(x, y, width, 1 / 3 * height); //upperRect 테두리
            this.Create_Close(x + (7 / 10 * width), y + (8 / 10 * height), 1 / 10 * width, 1 / 10 * height)
            this.Create_Hide(x + (7 / 10 * width) + (1 / 10 * width), y + (8 / 10 * height), 1 / 10 * width, 1 / 10 * height)

            Ctx.font = '32px serif';
            Ctx.strokeText('title', (width / 2), (height) / 2);
        };
    },

    Create_Close: function (x, y, width, height) {
        Canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            Ctx = Canvas.getContext("2d");
            Ctx.strokeRect(x, y, width, height);
            Ctx.beginPath();
            Ctx.moveTo(x+(85/100*width), y+(85/100*height));
            Ctx.lineTo(x+(15/100*width), y+(15/100*height));
            Ctx.moveTo(x+(85/100*width), y+(15/100*height));
            Ctx.lineTo(x+(15/100*width), y+(85/100*height));
            Ctx.closePath();
            Ctx.stroke();
        }
    },

    Create_Hide: function (x, y, width, height) {
        Canvas = document.getElementById("canvas");
        if (canvas.getContext) {
            Ctx = Canvas.getContext("2d");
            Ctx.strokeRect(x, y, width, height);
            Ctx.beginPath();
            Ctx.moveTo(x+(85/100*width), y+(75/100*height));
            Ctx.lineTo(x+(15/100*width), y+(75/100*height));
            Ctx.closePath();
            Ctx.stroke();
        }
    },

    Create_Txt: function(x, y, width, height){
        Canvas = document.getElementById("canvas2");
        if (canvas.getContext) {
            Ctx = Canvas.getContext("2d");

            Ctx.fillStyle = 'orange';
            Ctx.lineWidth = 2;
            Ctx.lineCap = 'butt';
            Ctx.linJOin = 'miter';

            Ctx.fillRect(x, y, width, height); //mainRect
            Ctx.strokeRect(x, y, width, height); //mainRect 테두리

            Ctx.font = '16px serif';
            Ctx.strokeText('txt_box', (width / 2), (height) / 2);
        };
    },

    Create_Menu: function(x, y, width, height, elnum){
        Canvas = document.getElementById("canvas3");
        if (canvas.getContext) {
            Ctx = Canvas.getContext("2d");

            Ctx.canvas.height = height*(elnum+1);
            Ctx.fillStyle = 'orange';
            Ctx.lineWidth = 2;
            Ctx.lineCap = 'butt';
            Ctx.linJOin = 'miter';

            Ctx.fillRect(x, y, width, height); //mainRect
            Ctx.strokeRect(x, y, width, height); //mainRect 테두리
            
            for(var i = 0; i < elnum; i++){
                Ctx.fillRect(x, y+(i*height), width, height); //mainRect
                Ctx.strokeRect(x, y+(i*height), width, height); //mainRect 테두리
                Ctx.strokeText('item'+i, (width / 2), (i+1)*(height));
            }//item 만들기

            Ctx.font = '16px serif';
            Ctx.strokeText('txt_box', (width / 2), (height) / 2);
        };
    },

    Create_Button: function(x, y, width, height){
        Canvas = document.getElementById("canvas4");
        if (canvas.getContext) {
            Ctx = Canvas.getContext("2d");

            Ctx.fillStyle = 'orange';
            Ctx.lineWidth = 2;
            Ctx.lineCap = 'butt';
            Ctx.linJOin = 'miter';

            this.roundRect(Ctx, x, y, width, height, 20, true); //mainRect

            Ctx.font = '16px serif';
            Ctx.strokeText('button', (width / 2), (height) / 2);
        };
    },

    roundRect: function(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == 'undefined') {
          stroke = true;
        }
        if (typeof radius === 'undefined') {
          radius = 5;
        }
        if (typeof radius === 'number') {
          radius = {tl: radius, tr: radius, br: radius, bl: radius};
        } else {
          var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
          for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
          }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
          ctx.fill();
        }
        if (stroke) {
          ctx.stroke();
        }
      
      },
};