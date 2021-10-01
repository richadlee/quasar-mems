import { api } from '../boot/axios'

const getProductLogs = (type, gouki) => api.get(`/product-logs?filter[where][PL_TYPE]=${type}%20&filter[where][PL_GOUKINO]=${gouki}%20`).then(res => res.data)

const getProcessStartEndLogs = (type, gouki) => api.get(`/product-logs?filter[where][PPSEL_TYPE]=${type}%20&filter[where][PPSEL_GOUKINO]=${gouki}%20`).then(res => res.data)

const getEquipOperationLogs = (line) => api.get(`/product-logs?filter[where][EOL_LINENO]=${line}`).then(res => res.data)

export {
  getProductLogs,
  getProcessStartEndLogs,
  getEquipOperationLogs
}
