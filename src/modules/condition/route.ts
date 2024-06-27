import ConditionView from "./page/ConditionView.vue";
import type {IRoute} from "@/api/user/data";
import AccountView from "./page/AccountView.vue";

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
    {
        path: '/account/:id',
        name: 'Account',
        component: AccountView,
        meta: {
            title: '账号',
            hidden: true
        }
    },
]
