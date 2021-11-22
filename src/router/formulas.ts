import { RouteRecordRaw } from 'vue-router'
import Empty from '../views/Empty.vue'
import Formulas from '../views/formulas/Formulas.vue'
import SelectBranch from '../views/formulas/SelectBranch.vue'

const formulasRoutes: RouteRecordRaw = {
  path: '/formulas',
  name: 'Formulas',
  component: Empty,
  children: [
    {
      path: '',
      name: 'FormulasHome',
      component: Formulas,
    },
    {
        path: ':id',
        name: 'FormulasBranch',
        component: SelectBranch,
        props:true,
    },
  ],
}

export default formulasRoutes
