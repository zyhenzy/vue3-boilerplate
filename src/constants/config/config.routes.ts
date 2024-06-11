import DashboardView from '@/views/dashboard/DashboardView.vue'
import ChartView from '@/views/chart/ChartView.vue'
import type { IRoute } from '@/api/user/data'
import LineView from '@/views/chart/LineView.vue'
import BarView from '@/views/chart/BarView.vue'
import PieView from '@/views/chart/PieView.vue'
// import DataExcelView from '@/views/excel/DataExcelView.vue'
// import DomExcelView from '@/views/excel/DomExcelView.vue'
// import ExcelImportView from '@/views/excel/ExcelImportView.vue'
// import ExcelDownloadView from '@/views/excel/ExcelDownloadView.vue'
// import OfficeExcelView from '@/views/excel/OfficeExcelView.vue'
// import OfficeWordView from '@/views/word/OfficeWordView.vue'
// import DocxPreviewView from '@/views/word/DocxPreviewView.vue'
// import DocxTemplaterView from '@/views/word/DocxTemplaterView.vue'
import AxiosView from '@/views/util/AxiosView.vue'
import IframeView from '@/views/iframe/Index.vue'
import HooksView from '@/views/hooks/Index.vue'
import CanvasView from '@/views/canvas/Index.vue'
import StzbView from '@/views/stzb/StzbView.vue'
import AccountView from '@/views/stzb/AccountView.vue'
import WebGLView from '@/views/webGL/WebGL.vue'
import ThreeView from '@/views/webGL/Three.vue'
import IframeTest from "@/views/iframe/IframeTest.vue";

/**
 * 基础路由（左侧菜单）
 */
export const BaseRoute:IRoute[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      title: '仪表盘',
      hidden: false
    }
  },
  {
    path: '/chart',
    name: 'ChartView',
    meta: {
      title: 'Echart示例',
    },
    children:[
      {
        path: '/line',
        name: 'LineView',
        component: LineView,
        meta: {
          title: '折线图',
        }
      },
      {
        path: '/bar',
        name: 'BarView',
        component: BarView,
        meta: {
          title: '柱状图',
        }
      },
      {
        path: '/pie',
        name: 'PieView',
        component: PieView,
        meta: {
          title: '饼状图',
        }
      },
      {
        path: '/multi',
        name: 'ChartView',
        component: ChartView,
        meta: {
          title: '综合',
        }
      },
    ]
  },
  // {
  //   path: '/excel',
  //   name: 'ExcelView',
  //   meta: {
  //     title: 'Excel操作',
  //   },
  //   children:[
  //     {
  //       path: '/excelImport',
  //       name: 'ExcelImportView',
  //       component: ExcelImportView,
  //       meta: {
  //         title: '导入excel',
  //       }
  //     },
  //     {
  //       path: '/excelDownload',
  //       name: 'ExcelDownloadView',
  //       component: ExcelDownloadView,
  //       meta: {
  //         title: '下载excel',
  //       }
  //     },
  //     {
  //       path: '/dataExcel',
  //       name: 'DataExcelView',
  //       component: DataExcelView,
  //       meta: {
  //         title: '数据生成excel',
  //       }
  //     },
  //     {
  //       path: '/domExcel',
  //       name: 'DomExcelView',
  //       component: DomExcelView,
  //       meta: {
  //         title: '导出DOM为excel',
  //       }
  //     },
  //     {
  //       path: '/officeExcel',
  //       name: 'OfficeExcelView',
  //       component: OfficeExcelView,
  //       meta: {
  //         title: 'Office Excel/react-file-viewer',
  //       }
  //     },
  //   ]
  // },
  // {
  //   path: '/word',
  //   name: 'WordView',
  //   meta: {
  //     title: 'Word操作',
  //   },
  //   children:[
  //     {
  //       path: '/officeWord',
  //       name: 'OfficeWordView',
  //       component: OfficeWordView,
  //       meta: {
  //         title: 'Office Word',
  //       }
  //     },
  //     {
  //       path: '/docxPreview',
  //       name: 'DocxPreviewView',
  //       component: DocxPreviewView,
  //       meta: {
  //         title: 'Docx Preview',
  //       }
  //     },
  //     {
  //       path: '/docxTemplater',
  //       name: 'DocxTemplaterView',
  //       component: DocxTemplaterView,
  //       meta: {
  //         title: 'word模版填写',
  //       }
  //     },
  //   ]
  // },
  {
    path: '/util',
    name: 'Util',
    meta: {
      title: '工具类分装',
    },
    children:[
      {
        path: '/request',
        name: 'AxiosView',
        component: AxiosView,
        meta: {
          title: 'axios封装',
        }
      },
    ]
  },
  {
    path: '/iframe',
    name: 'Iframe',
    meta: {
      title: 'Iframe',
      hidden: false
    },
    children:[
      {
        path: '/iframe/request',
        name: 'IframeRequest',
        component: IframeView,
        meta: {
          title: 'Iframe交互',
        }
      },
      {
        path: '/iframe/test',
        name: 'IframeTest',
        component: IframeTest,
        meta: {
          title: 'Iframe测试',
        }
      },
    ]
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: HooksView,
    meta: {
      title: 'hooks使用',
      hidden: false
    }
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: CanvasView,
    meta: {
      title: 'canvas使用',
      hidden: false
    }
  },
  {
    path: '/stzb',
    name: 'STZB',
    component: StzbView,
    meta: {
      title: 'STZB',
      hidden: false
    }
  },
  {
    path: '/stzb/:id',
    name: 'Account',
    component: AccountView,
    meta: {
      title: '检索账号',
      hidden: true
    }
  },
  {
    path: '/webgl',
    name: 'webgl',
    meta: {
      title: 'WebGL',
      hidden: false
    },
    children:[
      {
        path: '/webglMeta',
        name: 'webglMeta',
        component: WebGLView,
        meta: {
          title: 'webgl meta',
        }
      },
      {
        path: '/three',
        name: 'ThreeJS',
        component: ThreeView,
        meta: {
          title: 'Three.js',
        }
      },
    ]
  },
]
