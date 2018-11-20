function Node(data, grphc, x, y, width, height, canvas) {
    this.data = data;
    this.grphc = grphc;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.parent = null;
    this.children = [];
}

Node.prototype.render = function () {
    switch (this.grphc) {
        case 1:
            Create_Rect(this.x, this.y, this.width, this.height, this.canvas)
            break;
        case 2:
            Create_Line(this.x, this.y, this.width, this.height, this.canvas)
            break;
        case 3:
            Create_Txt(this.x, this.y, this.width, this.height, this.canvas)
            break;
        default:
            throw new Error('rendering problem.');
    }
};

function Create_Rect(x, y, width, height, canvas) {
    Canvas = document.getElementById(canvas);
    if (Canvas.getContext) {
        Ctx = Canvas.getContext("2d");

        Ctx.fillStyle = 'orange';
        Ctx.lineWidth = 2;
        Ctx.lineCap = 'butt';
        Ctx.linJOin = 'miter';

        Ctx.fillRect(x, y, width, height); //mainRect
        Ctx.strokeRect(x, y, width, height); //mainRect 테두리
    };
}

function Create_Line(x, y, width, height, canvas) {
    Canvas = document.getElementById(canvas);
    if (Canvas.getContext) {
        Ctx = Canvas.getContext("2d");

        Ctx.fillStyle = 'orange';
        Ctx.lineWidth = 2;
        Ctx.lineCap = 'butt';
        Ctx.linJOin = 'miter';

        Ctx.beginPath();
        Ctx.moveTo(x + (85 / 100 * width), y + (85 / 100 * height));
        Ctx.lineTo(x + (15 / 100 * width), y + (15 / 100 * height));
        Ctx.moveTo(x + (85 / 100 * width), y + (15 / 100 * height));
        Ctx.lineTo(x + (15 / 100 * width), y + (85 / 100 * height));
        Ctx.closePath();
        Ctx.stroke();
    };
}

function Create_Txt(x, y, width, height, canvas){
    Canvas = document.getElementById(canvas);
    if (Canvas.getContext) {
        Ctx = Canvas.getContext("2d");

        Ctx.fillStyle = 'orange';
        Ctx.lineWidth = 2;
        Ctx.lineCap = 'butt';
        Ctx.linJOin = 'miter';

        Ctx.font = '16px serif';
        Ctx.strokeText('button', (width / 2), (height) / 2);
    };
}


function Tree() {
        var canv = document.createElement('canvas');
        canv.id = 'TreeCanv';
        document.body.appendChild(canv);
    var node = new Node(0, null, null, null, null, null, canv.id);
    this.len = 1;
    this._root = node;
}

Tree.prototype.traverseBF = function (callback) {
    var queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();
    while (currentTree) {
        if (currentTree.children === null) {
            alert('no child');
        }

        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }

        callback(currentTree);
        currentTree = queue.dequeue();
    }
};

Tree.prototype.contains = function (callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function (grphc, x, y, width, height, toData) {
    var child = new Node(this.len, grphc, x, y, width, height),
        parent = null,
        callback = function (node) {
            if (node.data === toData) {
                parent = node;
            }
        };

    this.contains(callback, this.traverseBF);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
        this.len += 1;
        child.canvas = parent.canvas;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
    this.traverseToRender();
};

Tree.prototype.remove = function (data, fromData) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;

    var callback = function (node) {
        if (node.data === fromData) {
            parent = node; //put the node that i find in the variable named 'parent'
        }
    };

    this.contains(callback, this.traverseBF);
    if (fromData === 0) {
        parent = this._root;
    }

    if (parent) {
        index = findIndex(parent.children, data);

        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
            //splice(위치, 갯수, (대용품)) 
            //ex) 위치에서 갯수만큼 없애고 대용품이 있다면 채워넣어라.
        }
        this.len -= 1;
    } else {
        throw new Error('Parent does not exist.');
    }
    this.traverseToRender();

    return childToRemove;
};

Tree.prototype.traverseToRender = function () {
    var queue = new Queue();

    queue.enqueue(this._root);

    currentTree = queue.dequeue();

    while (currentTree) {
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
        if (currentTree.data === 0) {
            currentTree = queue.dequeue();
        } else {
            currentTree.render();
            currentTree = queue.dequeue();
        }
    }
};

function findIndex(arr, data) {
    var index;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }

    return index;
}

function Queue() {
    this.dataStore = []
    this.enqueue = function enqueue(element) {
        this.dataStore.push(element)
    }
    this.dequeue = function dequeue() {
        return this.dataStore.shift()
    }
    this.front = function front() {
        return this.dataStore[0]
    }
    this.back = function back() {
        return this.dataStore[this.dataStore.length - 1]
    }
}