function traverseTree(node) {
    let depth = 0;
    let count = 0;
    if (node.children.length === 0) {
        return { depth: 1, count: 1 };
    }
    for (const child of node.children) {
        const { depth: childDepth, count: childCount } = traverseTree(child);
        depth = Math.max(depth, childDepth + 1);
        count += childCount;
    }
    return { depth, count: count + 1 };
}

// 测试
const tree = {
    val: 2345,
    children: [
        {
            val: 3456,
            children:[
                {
                    val: 23456,
                    children: []
                },
                {
                    val: 6777,
                    children: [
                        {
                            val: 66,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            val: 4545,
            children: [
                {
                    val: 44,
                    children: []
                },
                {
                    val: 5,
                    children: []
                }
            ]
        }
    ]
}
const { depth, count } = traverseTree(tree);
console.log('Tree depth:', depth);
console.log('Number of children:', count);