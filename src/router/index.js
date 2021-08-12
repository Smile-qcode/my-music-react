import QDiscover from '@/pages/discover';
import QFriend from '@/pages/friend';
import QMine from '@/pages/mine';
const routes = [
  {
    path: "/",
    exact: true,
    component: QDiscover
  }, 
  {
    path: "/discover",
    component: QDiscover
  }, 
  {
    path: "/mine",
    component: QMine
  },
  {
    path: "/friend",
    component: QFriend
  },
];

export default routes;