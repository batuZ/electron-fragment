const ffi = require('ffi-napi');
const ref = require('ref-napi')
const refArray = require('ref-array-napi')
const Struct = require('ref-struct-napi')
const iconv = require('iconv-lite')
const { loader } = require('./dll_loader')

const AUTH_INFO = Struct({
    auth_id: refArray(ref.types.char, 64),
    auth_type: 'int',
    auth_status: 'int',
    auth_expins: 'long',
    auth_funs: 'int',
    auth_version: 'int'
})
const api = loader('D:\\work\\cesiumlab\\ori\\tiles_tool\\authorize.dll', {
    diveice_id: ['void', ['string']],
    verifyAuthSync: ['bool', ['string', ref.refType(AUTH_INFO)]],
    check_raster: ['int', ['string', 'string', 'int *']],
    check_shp: ['int', ['string', 'string', 'string']]
})

let strPnt = Buffer.alloc(36)
api.diveice_id(strPnt)
let str = ref.readCString(strPnt)
console.log(str)

let auth = new AUTH_INFO()
api.verifyAuthSync('D:\\2B27508F935C11EB80EE38F3AB5BFD62.lic', auth.ref())
console.log(ref.readCString(auth.auth_id.buffer));
console.log(auth.auth_type);
console.log(new Date(auth.auth_expins * 1000));
console.log(auth.auth_funs);
console.log(auth.auth_version);
// const my_callback = ffi.Callback('void', ['string'], (id) => {
//     console.log("id: ", id)
// })
// api.diveice_id_asyn(my_callback)

//let file_path = 'D:\\datas\\test_data\\dom\\姑苏区.tif'
// let file_path = 'D:\\datas\\test_data\\dom\\ed.tif'
// let to_gbk = iconv.encode(file_path, 'gbk')
// let wkt = ref.allocCString('')
// let nodata = ref.alloc('int');
// let res = api.check_raster(to_gbk, wkt, nodata)

// console.log('return: ', res)
// console.log('wkt: ', ref.readCString(wkt))
// console.log('nodata: ', nodata.deref())



//let file_path = 'D:\\datas\\test_data\\shp\\gusu-cute.shp'
// let file_path = 'D:\\datas\\test_data\\shp\\测试中文.shp'
// let to_gbk = iconv.encode(file_path, 'gbk')
// let wkt = Buffer.alloc(1024)
// let f_list = Buffer.alloc(1024 * 512)
// let res = api.check_shp(to_gbk, wkt, f_list)

// let wkt_res = ref.readCString(wkt)
// let fields_res = iconv.decode(f_list, 'gbk')
// console.log('return: ', res)
// console.log('wkt: ', wkt_res)
// console.log('f_list: ', fields_res)


