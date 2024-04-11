import { onMounted, onActivated, onBeforeUnmount, onDeactivated, ref } from "vue";
import { debounce } from "../debounce";
import type { Ref } from "vue";
import type * as echarts from "echarts";

export default function resize(chart: Ref<echarts.ECharts | null>) {
  const $_resizeHandler = ref<EventListenerOrEventListenerObject | null>(null);

  onMounted(() => {
    initListener();
  });

  onBeforeUnmount(() => {
    destroyListener();
  });

  onActivated(() => {
    if (!$_resizeHandler.value) {
      // 避免重复初始化
      initListener();
    }

    // 激活保活图表时，自动调整大小
    resize();
  });

  onDeactivated(() => {
    destroyListener();
  });

  const initListener = () => {
    $_resizeHandler.value = debounce(() => {
      console.log("initListener");
      resize();
    }, 100);
    window.addEventListener("resize", $_resizeHandler.value);
  };

  const destroyListener = () => {
    console.log("destroyListener");
    window.removeEventListener("resize", $_resizeHandler.value!);
    $_resizeHandler.value = null;
  };

  const resize = () => {
    console.log("resize", chart);
    chart.value && chart.value.resize();
  };
}
