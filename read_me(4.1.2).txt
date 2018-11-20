var tree = new Tree();
tree.add(1, 25, 25, 100, 100, 0);
tree.add(2, 25, 25, 100, 100, 0);
tree.add(3, 25, 25, 100, 100, 0);
tree.traverseToRender();

순서대로 콘솔창에 입력해주시면 rect, x선, 글자가 추가 됩니다.

tree.remove(3, 0);

입력해주시면 text가 없어집니다.

tree.add(1:rect/2:x선/3:text, x좌표, y좌표, 넓이, 높이, parent number)순으로 입력되며 각 노드의 숫자는 순서대로 입력됩니다.
tree.remove(노드 번호, parent 번호)를 입력해주면 삭제됩니다.

제가 자료구조를 구성하는데 어려움이 있어서 아래 사이트를 참고하였습니다.
https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393