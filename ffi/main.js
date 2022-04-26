// https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial
// https://blog.csdn.net/fuhanghang/article/details/116058577?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-2-116058577.pc_agg_new_rank&utm_term=ffi-napi+%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B&spm=1000.2123.3001.4430
const ffi = require('ffi-napi');
const ref = require('ref-napi')
const { api, mia, mia_list } = require('./dll_loader')

let res;
// ---- 连接测试 testMSG: ['void', []]
// api.testMSG()


// ---- 传参,返回值 testInt: ['int', ['int', 'int']]
// res = api.testInt(2, 3)
// console.log(res)


// ---- 整型指针参数返回结果 testIntPnt: ['int', ['int *']]
// let intp = ref.alloc('int', 3);
// api.testIntPnt(intp)
// console.log(intp.deref())


// ---- 返回bool , testBool: ['bool', ['int']]
// res = api.testBool(12)
// console.log(res)


// ---- char*,const char* 参数和返回值 testString: ['string', ['string', 'string']]
// let const_charPtn = 'file_path'
// let charPtn = ref.allocCString('default str')
// res = api.testString(const_charPtn, charPtn)
// console.log('---node_print: ', res)
// console.log('---node_print: ', ref.readCString(charPtn))


// ---- 传递中文字符串
// const iconv = require('iconv-lite')
// let const_charPtn_gbk = iconv.encode("-->中文字符串<--", 'gbk')
// let charPtn = ref.allocCString('default str')
// let charPtn_gbk = iconv.encode(charPtn, 'gbk')
// res = api.testString(const_charPtn_gbk, charPtn_gbk)


// ---- 接收参数返回结果中的中文字符串
// const iconv = require('iconv-lite')
// let charPtn = ref.allocCString('default str')
// api.testString('', charPtn)
// console.log('---node_print: ', iconv.decode(charPtn, 'gbk'))


// ---- 接收返回值中的中文字符串, 尝试失败！！！
// const iconv = require('iconv-lite')
// res = api.testString('', '')
// console.log('---node_print: ', iconv.decode(Buffer.from(res), 'gbk'))


// ---- 尝试使用std::string失败！！可以传进去，但会产生内存冲突
// const iconv = require('iconv-lite')
// let charPtn = ref.allocCString('default str')
// let charPtn = Buffer.from('Hello World');
// let charPtn = iconv.encode("Sample input stringUUpp在地愿为连理枝", 'gbk');
// api.stringTest(charPtn)
// console.log('---node_print: ', iconv.decode(charPtn, 'gbk'))
// console.log('---node_print: ', ref.readCString(charPtn))


// ---- 对象参数 testStruct: ['void', [ref.refType(mia)]]
// let aMia = new mia()
// api.testStruct(aMia.ref())
// console.log(aMia.num)
// console.log(ref.readCString(aMia.name.buffer))
// console.log(aMia.pi)
// console.log(ref.readCString(aMia.description.buffer))


// ---- 对象数组  testObjArr: ['void', [mia_list]]
// let res_list = new mia_list(3)
// api.testObjArr(res_list)
// console.log(res_list[0].num)
// console.log(ref.readCString(res_list[0].name.buffer))
// console.log('---------------------')


// ---- 回调函数
// const my_callback = ffi.Callback('void', ['int'], (id) => { console.log("id: ", id) })
// api.testCallback(my_callback)


