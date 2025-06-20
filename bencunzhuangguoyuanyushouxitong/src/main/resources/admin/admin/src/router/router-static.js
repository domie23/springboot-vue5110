import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gonggao from '@/views/modules/gonggao/list'
    import guoshu from '@/views/modules/guoshu/list'
    import guoshuCollection from '@/views/modules/guoshuCollection/list'
    import guoshuOrder from '@/views/modules/guoshuOrder/list'
    import guoyuan from '@/views/modules/guoyuan/list'
    import guoyuanLiuyan from '@/views/modules/guoyuanLiuyan/list'
    import guoyuanYuyue from '@/views/modules/guoyuanYuyue/list'
    import news from '@/views/modules/news/list'
    import shuiguo from '@/views/modules/shuiguo/list'
    import shuiguoCollection from '@/views/modules/shuiguoCollection/list'
    import shuiguoOrder from '@/views/modules/shuiguoOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryGuoshu from '@/views/modules/dictionaryGuoshu/list'
    import dictionaryGuoshuCollection from '@/views/modules/dictionaryGuoshuCollection/list'
    import dictionaryGuoshuOrder from '@/views/modules/dictionaryGuoshuOrder/list'
    import dictionaryGuoyuan from '@/views/modules/dictionaryGuoyuan/list'
    import dictionaryGuoyuanYuyueYesno from '@/views/modules/dictionaryGuoyuanYuyueYesno/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShuiguo from '@/views/modules/dictionaryShuiguo/list'
    import dictionaryShuiguoCollection from '@/views/modules/dictionaryShuiguoCollection/list'
    import dictionaryShuiguoOrder from '@/views/modules/dictionaryShuiguoOrder/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryGuoshu',
        name: '果树类型',
        component: dictionaryGuoshu
    }
    ,{
        path: '/dictionaryGuoshuCollection',
        name: '收藏表类型',
        component: dictionaryGuoshuCollection
    }
    ,{
        path: '/dictionaryGuoshuOrder',
        name: '订单类型',
        component: dictionaryGuoshuOrder
    }
    ,{
        path: '/dictionaryGuoyuan',
        name: '果园类型',
        component: dictionaryGuoyuan
    }
    ,{
        path: '/dictionaryGuoyuanYuyueYesno',
        name: '报名状态',
        component: dictionaryGuoyuanYuyueYesno
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionaryNews',
        name: '水果类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShuiguo',
        name: '水果类型',
        component: dictionaryShuiguo
    }
    ,{
        path: '/dictionaryShuiguoCollection',
        name: '收藏表类型',
        component: dictionaryShuiguoCollection
    }
    ,{
        path: '/dictionaryShuiguoOrder',
        name: '订单类型',
        component: dictionaryShuiguoOrder
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/guoshu',
        name: '果树',
        component: guoshu
      }
    ,{
        path: '/guoshuCollection',
        name: '果树收藏',
        component: guoshuCollection
      }
    ,{
        path: '/guoshuOrder',
        name: '果树订单',
        component: guoshuOrder
      }
    ,{
        path: '/guoyuan',
        name: '果园',
        component: guoyuan
      }
    ,{
        path: '/guoyuanLiuyan',
        name: '果园留言',
        component: guoyuanLiuyan
      }
    ,{
        path: '/guoyuanYuyue',
        name: '果园预约',
        component: guoyuanYuyue
      }
    ,{
        path: '/news',
        name: '水果资讯',
        component: news
      }
    ,{
        path: '/shuiguo',
        name: '水果预售',
        component: shuiguo
      }
    ,{
        path: '/shuiguoCollection',
        name: '水果收藏',
        component: shuiguoCollection
      }
    ,{
        path: '/shuiguoOrder',
        name: '水果预售订单',
        component: shuiguoOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
