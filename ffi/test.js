const ffi = require('ffi-napi');
const ref = require('ref-napi')
const refArray = require('ref-array-napi')
const Struct = require('ref-struct-napi')


const _void = 'void'
const _int = 'int'
const _intp = 'int *'
const _bool = 'bool'
const _string = 'string'
const _double = 'double'
const _callback = 'pointer'

const mia = Struct({
    name: refArray(ref.types.char, 128),
    description: refArray(ref.types.char, 256),
    num: _int,
    pi: _double
})

const mia_list = refArray(mia)

const myDll = new ffi.Library(__dirname + '\\Dll1.dll', {
    // void func()
    testMSG: [_void, []],

    // int func(int,int)
    testInt: [_int, [_int, _int]],

    // int func(int*,int*)
    testIntPnt: [_int, [_intp]],

    // bool func(int)
    testBool: [_bool, [_int]],

    // const char* func(const char*, char*)
    testString: [_string, [_string, _string]],

    // void func(object*)
    testStruct: [_void, [ref.refType(mia)]],

    // void func(object[])
    testObjArr: [_void, [mia_list]],

    // void func(callback)
    testCallback: [_void, [_callback]]
});

let res
// res = myDll.testMSG()
// res = myDll.testInt(1, 2)
// res = myDll.testBool(12)

// 异步
// let a = ref.alloc(_int, 12);
// res = myDll.testIntPnt(a)
// myDll.testIntPnt.async(a, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(a.deref())
//         console.log(res)
//     }
// })

// 回调
// const my_callback = ffi.Callback(_void, [_int], id => console.log("id: ", id))
// myDll.testCallback(my_callback)


// let b = ref.allocCString('')
// res = myDll.testString('aaa', b)
// console.log(ref.readCString(b))

// 对象
// let aMia = new mia()
// myDll.testStruct(aMia.ref())
// console.log(aMia.num)
// console.log(ref.readCString(aMia.name.buffer))
// console.log(aMia.pi)
// console.log(ref.readCString(aMia.description.buffer))

// object[]
// let res_list = new mia_list(3)
// myDll.testObjArr(res_list)


// console.log(res_list[1].num)
// console.log(ref.readCString(res_list[1].name.buffer))
// console.log('---------------------')


// https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial
// https://blog.csdn.net/fuhanghang/article/details/116058577?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-2-116058577.pc_agg_new_rank&utm_term=ffi-napi+%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B&spm=1000.2123.3001.4430




