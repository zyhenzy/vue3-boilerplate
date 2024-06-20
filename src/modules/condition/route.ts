import ConditionView from "./page/ConditionView.vue";
import type {IRoute} from "@/api/user/data";
import StzbView from "@/views/stzb/StzbView.vue";

/**
 * 条件路由
 */
export const ConditionRoute:IRoute[] = [
    {
        path: '/condition',
        name: 'Condition',
        component: ConditionView,
        meta: {
            title: '条件',
            hidden: false
        }
    },
]
