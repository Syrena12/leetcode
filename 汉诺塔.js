function hanoi(n, source, auxiliary, destination) {
    if (n > 0) {
        // 将 n-1 个盘子从源柱移动到辅助柱
        hanoi(n - 1, source, destination, auxiliary);

        // 将第 n 个盘子从源柱移动到目标柱
        console.log(`Move disk ${n} from ${source} to ${destination}`);

        // 将之前移动到辅助柱的 n-1 个盘子移动到目标柱
        hanoi(n - 1, auxiliary, source, destination);
    }
}

// 测试
const numDisks = 3;
const sourceRod = "A";
const auxiliaryRod = "B";
const destinationRod = "C";
hanoi(numDisks, sourceRod, auxiliaryRod, destinationRod);
