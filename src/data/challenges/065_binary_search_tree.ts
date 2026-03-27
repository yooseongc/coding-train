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
        { title: 'Wikipedia - Binary Search Tree', url: 'https://en.wikipedia.org/wiki/Binary_search_tree' },
        { title: 'Wikipedia - Tree Traversal', url: 'https://en.wikipedia.org/wiki/Tree_traversal' },
        { title: 'Visualgo - Binary Search Tree', url: 'https://visualgo.net/en/bst' },
    ],
    tags: ['BST', 'tree', 'data-structure', 'search'],
    difficulty: 'intermediate',
    explanation: [
        '이진 탐색 트리(Binary Search Tree, BST)는 각 노드가 최대 두 개의 자식을 가지며, 왼쪽 서브트리의 모든 값은 부모보다 작고, 오른쪽 서브트리의 모든 값은 부모보다 큰 정렬된 이진 트리입니다. 이 자료구조는 1960년대에 개발되어 컴퓨터 과학의 기본적인 자료구조로 자리잡았습니다.',
        'Tree 클래스는 root 노드를 관리하며, addValue()로 새 값을 삽입합니다. Node의 addNode()에서 값이 현재 노드보다 작으면 왼쪽, 크면 오른쪽 자식으로 재귀적으로 이동합니다. 균형 잡힌 BST에서 삽입, 탐색, 삭제의 평균 시간 복잡도는 O(log n)입니다.',
        'Node의 좌표는 레벨에 따라 결정됩니다. dx = width/pow(2, level+1)로 레벨이 깊어질수록 좌우 간격이 절반으로 줄어들고, y는 75px씩 아래로 내려갑니다. visit() 메서드로 중위 순회(in-order traversal)를 수행하면 값이 오름차순으로 방문됩니다.',
        'search()는 BST의 특성을 활용하여 이진 탐색과 동일한 원리로 동작합니다. 현재 값과 비교하여 작으면 왼쪽, 크면 오른쪽으로 재귀 이동하고, 일치하면 해당 노드를 반환합니다. 최악의 경우(편향 트리)에는 O(n)으로 퇴화하며, 이를 방지하기 위해 AVL 트리나 레드-블랙 트리 같은 자가 균형 BST가 개발되었습니다.',
        'BST는 데이터베이스 인덱싱, 파일 시스템의 디렉터리 구조, 컴파일러의 심볼 테이블, 우선순위 큐 구현 등 다양한 분야에서 활용됩니다. 트리 순회 방식에는 중위(in-order), 전위(pre-order), 후위(post-order), 레벨 순서(level-order) 등이 있으며, 각각 다른 용도로 사용됩니다.',
    ],
})
