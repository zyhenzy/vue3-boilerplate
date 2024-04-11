// 延迟函数
export const sleep = (delayTime = 1000) => {
  const realDelayTime = delayTime + Math.random() * 5000;
  return new Promise(resolve => setTimeout(resolve, realDelayTime));
};
