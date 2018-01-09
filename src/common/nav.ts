const getNavData: () => object[] = 
  function(): object[] { 
    return [
      {
        component: import('../layouts/BasicLayout'),
        layout: 'BasicLayout',
        name: '首页', // for breadcrumb
        path: '/',
        children: [
          {
            name: 'Dashboard',
            icon: 'dashboard',
            path: 'dashboard',
            children: [
              {
                name: '分析页',
                path: 'analysis',
                component: import('../routers/Dashboard/Analysis'),
              }
            ]
          }
        ]
      }
    ]; 
  };

export default getNavData;