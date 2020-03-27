
// import { loader } from 'sdk'
interface routersConfig {
  path: string;
  component: () => Promise<React.ReactNode>;
}
const routersConfig:Array<routersConfig> = [
  // {
  //   path: '/home',
  //   component: () => import('pages/home'),
  // },
]

export default routersConfig
