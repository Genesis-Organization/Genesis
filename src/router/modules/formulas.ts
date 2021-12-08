import { RouteRecordRaw } from 'vue-router'
import Empty from '@/views/Empty.vue'
import SelectScience from '@/views/formulas/SelectScience.vue'
import SelectBranch from '@/views/formulas/SelectBranch.vue'
import Formulas from '@/views/formulas/Formulas.vue'

const formulasRoutes: RouteRecordRaw[] = [
  {
    path: '/formulas',
    name: 'Formulas',
    component: Empty,
    children: [
      {
        path: '',
        name: 'FormulasHome',
        component: SelectScience,
      },
      {
        path: ':id',
        name: 'FormulasBranch',
        component: SelectBranch,
      },
      {
        path: ':id/:branch',
        name: 'Formulas',
        component: Formulas,
      },
    ],
  },
]

export default formulasRoutes
