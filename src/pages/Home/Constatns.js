const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'center',
    field: row => row.id,
    sortable: true,
    style: 'width: 30px'
  },
  { name: 'distinction', align: 'center', label: '区分', field: 'distinction', sortable: true, style: 'width: 80px' },
  { name: 'content', align: 'center', label: '问题点', field: 'content' },
  { name: 'occurAt', align: 'center', label: '发生时间', field: 'occurAt', sortable: true, style: 'width: 130px' },
  { name: 'priority', align: 'center', label: '优先级', field: 'priority', style: 'width: 120px' },
  { name: 'fixBefore', align: 'center', label: '计划对应', field: 'fixBefore', style: 'width: 130px' },
  { name: 'progress', align: 'center', label: '进度', field: 'progress', sortable: true, style: 'width: 100px' },
  { name: 'handler', align: 'center', label: '担当', field: 'handler', style: 'width: 100px' },
  { name: 'check', align: 'center', label: '确认结果', field: 'check', sortable: true, style: 'width: 100px' }
]

const rows = [
  {
    ID: 1,
    区分: 'PC1',
    问题点: 'Problems #1',
    记入时间: '2021-09-20',
    计划对应时间: '2021-09-21',
    进度: '80%',
    担当: 'KDG',
    确认结果: 'OK'
  },
  {
    ID: 2,
    区分: 'PC2',
    问题点: 'Problems #2',
    记入时间: '2021-09-19',
    计划对应时间: '2021-09-21',
    进度: '100%',
    担当: 'TOP',
    确认结果: ''
  }
]
// const rows = [
//   {
//     ID: '1',
//     生产线: 'GEN3-PCU-PM',
//     工程: '回流炉',
//     设备: '加热室',
//     发生日期: '2019-12-16',
//     发生阶段: '量产',
//     标题: '加热室POS3温度异常',
//     现象: '加热室POS3 左下温度差异常，POS3 PM1加热器停止工作，POS3 PM1半田未融解',
//     原因: '回流炉热电偶配线保护膜选型错误(耐热400℃)，在高温下被烧毁，热电偶测温异常导致POS3 PM1 ZONE1与ZONE2温度差大于25℃，加热器停止',
//     对应: '异常热电偶更换为新品',
//     对策: '回流炉预热区与加热区热电偶均更换成绝缘保护膜(耐热1500℃，SiO2与Al2O3材质)，追加隔热治具',
//     计划: '2020-05-11',
//     进度: '对应中',
//     停机时间: '240',
//     频度: '1',
//     标签: '仕样',
//     担当: '齋藤',
//     更新时间: '2020-05-11 13:09:52',
//     备注: ''
//   }
// ]
export {
  columns,
  rows
}
