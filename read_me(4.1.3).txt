var tree = new Tree();
tree.add(1, 25, 25, 100, 100, 0);
tree.add(2, 25, 25, 100, 100, 0);
tree.add(3, 25, 25, 100, 100, 0);
tree.traverseToRender();

������� �ܼ�â�� �Է����ֽø� rect, x��, ���ڰ� �߰� �˴ϴ�.

tree.remove(3, 0);

�Է����ֽø� text�� �������ϴ�.

tree.add(1:rect/2:x��/3:text, x��ǥ, y��ǥ, ����, ����, parent number)������ �ԷµǸ� �� ����� ���ڴ� ������� �Էµ˴ϴ�.
tree.remove(��� ��ȣ, parent ��ȣ)�� �Է����ָ� �����˴ϴ�.

���� �ڷᱸ���� �����ϴµ� ������� �־ �Ʒ� ����Ʈ�� �����Ͽ����ϴ�.
https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393