/**
 * 将数组按指定大小分割为多个子数组
 * @param data 待分割的数组（非数组/空值返回空数组）
 * @param size 每块的大小（<=0 时返回空数组）
 * @returns 分割后的二维数组
 */
export function chunk(data: unknown[], size: number): unknown[][] {
    if (data === null || data === undefined || !Array.isArray(data) || size <= 0) {
        return []
    }


    let result: unknown[][] = []
    const totalLength = data.length;
    const chunkCount = Math.ceil(totalLength / size);
    for (let i = 0; i < chunkCount; i++) {
       const start = i * size;
       const end = Math.min(start + size, totalLength); // 避免越界        let tempArr  = data.slice(start, end)
       result.push(data.slice(start, end));
    }
    return result
}

