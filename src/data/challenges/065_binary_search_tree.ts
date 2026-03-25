import { registerChallenge } from '../challengeRegistry'

registerChallenge({
    id: '065_binary_search_tree',
    number: 65,
    title: 'Binary Search Tree',
    categoryId: 'math-algorithms',
    description: '이진 탐색 트리(BST)를 구현하고, 노드 삽입/탐색/중위 순회를 시각화합니다.',
    files: ['node.js', 'tree.js', 'sketch.js'],
    libraries: [],
    references: [
        { title: 'Coding Challenge #65: Binary Search Tree', url: 'https://thecodingtrain.com/challenges/65-binary-search-tree' },
    ],
    tags: ['BST', 'tree', 'data-structure', 'search'],
    difficulty: 'intermediate',
    explanation: [
        'Tree 클래스는 root 노드를 관리하며, addValue()로 새 값을 삽입합니다. Node의 addNode()에서 값이 현재 노드보다 작으면 왼쪽, 크면 오른쪽 자식으로 재귀적으로 이동합니다.',
        'Node의 좌표는 레벨에 따라 결정됩니다. dx = width/pow(2, level+1)로 레벨이 깊어질수록 좌우 간격이 절반으로 줄어들고, y는 75px씩 아래로 내려갑니다.',
        'visit() 메서드로 중위 순회(in-order traversal)를 수행하며, 각 노드를 원(ellipse)과 텍스트(text)로 그립니다. 부모와 자식 사이를 line()으로 연결하여 트리 구조를 시각화합니다.',
        'search()는 BST의 특성을 활용하여 O(log n) 탐색을 수행합니다. 현재 값과 비교하여 작으면 왼쪽, 크면 오른쪽으로 재귀 이동하고, 일치하면 해당 노드를 반환합니다.',
    ],
})
