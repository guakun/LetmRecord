$(function () {
  // 借用了
  if (!hasUserLogin()) {
    return
  }
  const view = $('.record-list-box')
  const model = {
    init: () => {
    },
    fetch: () => {
      const query = new AV.Query('Record')
      query.include('owner')
      query.equalTo('username', AV.User.current().attributes.username)
      return query.find()
    },
  }
  const controller = {
    view: null,
    model: null,
    init: function(view, model) {
      this.view = view
      this.model = model
      this.model.init()
      this.loadRecords()
      this.bindEvents()
    },

    bindEvents: () => {

    },

    loadRecords: function() {
      this.model.fetch()
        .then((records) => {
          let array = records.map(record => record.attributes)
          array.forEach((item) => {
            let li = document.createElement('li')
            li.innerHTML = `<div class='record-date-box'>${item.date}</div><div class='record-number-box'> ${item.number}KG</div>`
            this.view.append(li)
          })
        })
    },
  }

  controller.init(view, model)
})