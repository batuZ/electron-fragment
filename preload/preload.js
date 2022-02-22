const { contextBridge, ipcRenderer } = require("electron");

// 粗暴的放开ipcRenderer
contextBridge.exposeInMainWorld('api', { send: ipcRenderer.send })

// 故作矜持的放开icpRenderer
// const channels = ['channle_1', 'channle_2']
// contextBridge.exposeInMainWorld('api', {
//     send: (channel, data) => {
//         if (channels.includes(channel))
//             ipcRenderer.send(channel, data)
//     },
// })

// 推荐的方式
// contextBridge.exposeInMainWorld('api', {
//     show_save: () => ipcRenderer.send('show_save')
// })