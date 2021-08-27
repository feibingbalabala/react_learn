import App from '../components/App/App';
const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: App },
    childRoutes: [
      // { path: 'about', component: About },
      // { path: 'inbox',
      //   component: Inbox,
      //   childRoutes: [
      //     { path: '/messages/:id', component: Message },
      //     { path: 'messages/:id',
      //       onEnter: function (nextState, replaceState) {
      //         replaceState(null, '/messages/' + nextState.params.id)
      //       }
      //     }
      //   ]
      // }
    ]
  }
]

export default routeConfig
