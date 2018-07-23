// init

const appId = 'H3gx8kPlRUNsKlzRC8S368y6-gzGzoHsz'
const appKey = 'xHbxppORe8Kuir1F0mP03E91'
AV.init({
  appId,
  appKey,
})

// test
// db: gwkpTable
// name: gwkp
const testLeanCloud = function () {
  const GwkpTable = AV.Object.extend('GwkpTable')
  var o = new GwkpTable()
  o.save({
    name: 'gwkp'
  }).then(function (object) {
    log('save success')
  })
}
