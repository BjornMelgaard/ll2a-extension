// import 'rxjs/add/operator/filter'
// import 'rxjs/add/operator/mapTo'

const pingEpic = action$ =>
  action$.filter(action => action.type === 'PING')
    .mapTo({ type: 'PONG' })

export default pingEpic
