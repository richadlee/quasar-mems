import { api } from '../boot/axios'
import { Notify } from 'quasar'

const successNotify = {
  message: '成功',
  type: 'positive',
  timeout: 1000
}
const getAllRecords = () => api.get('/pc-records').then(res => res.data)

const contentPatch = (value, initialvalue, id) => {
  api.patch(`/pc-records/${id}`, {
    content: value
  }).then(res => {
    if (res.status === 204) {
      Notify.create(successNotify)
    }
  })
}

const distinctionPatch = (value, initialvalue, id) => {
  api.patch(`/pc-records/${id}`, {
    distinction: value
  }).then(res => {
    if (res.status === 204) {
      Notify.create(successNotify)
    }
  })
}
const occurAtPatch = (value, initialvalue, id) => {
  api.patch(`/pc-records/${id}`, {
    occurAt: value
  }).then(res => {
    if (res.status === 204) {
      Notify.create(successNotify)
    }
  })
}
const fixBeforePatch = (value, initialvalue, id) => {
  api.patch(`/pc-records/${id}`, {
    fixBefore: value
  }).then(res => {
    if (res.status === 204) {
      Notify.create(successNotify)
    }
  })
}
const progressPatch = (value, initialvalue, id) => {
  api.patch(`/pc-records/${id}`, {
    progress: value
  }).then(res => {
    if (res.status === 204) {
      Notify.create(successNotify)
    }
  })
}
const handlerPatch = (value, initialvalue, id) => {
  api.patch(`/pc-records/${id}`, {
    handler: value
  }).then(res => {
    if (res.status === 204) {
      Notify.create(successNotify)
    }
  })
}
const checkPatch = (value, initialvalue, id) => {
  api.patch(`/pc-records/${id}`, {
    check: value
  }).then(res => {
    if (res.status === 204) {
      Notify.create(successNotify)
    }
  })
}
const getNoFixRecords = (value, initialvalue, id) => {
  return (
    api.get('/pc-records?filter[where][progress][eq]=').then(res => res.data)
  )
}

const createNewRecord = (data) => api.post('/pc-records', data).then(res => {
  if (res.status === 200) {
    Notify.create(successNotify)
  }
  return res.status
})

export {
  getAllRecords,
  contentPatch,
  distinctionPatch,
  occurAtPatch,
  fixBeforePatch,
  progressPatch,
  handlerPatch,
  checkPatch,
  getNoFixRecords,
  createNewRecord
}
