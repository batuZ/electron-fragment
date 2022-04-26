const ffi = require('ffi-napi');
const ref = require('ref-napi')
const refArray = require('ref-array-napi')
const Struct = require('ref-struct-napi')
const path = require('path')
const fs = require('fs')
const lib_path = './CppDll/release/CppDll.dll'

function loader(func_list) {
    let res
    if (fs.existsSync(lib_path)) {
        let ori_path = process.cwd(),
            dir_name = path.dirname(lib_path),
            base_name = path.basename(lib_path)
        try {
            process.chdir(dir_name)
            res = new ffi.Library(base_name, func_list)
        } catch (err) {
            console.error('----->: ', err)
        } finally {
            process.chdir(ori_path)
        }
    } else {
        console.error('-----> 目标库不存在: ', lib_path)
    }
    return res
}

const mia = Struct({
    name: refArray(ref.types.char, 128),
    description: refArray(ref.types.char, 256),
    num: 'int',
    pi: 'double'
})

const mia_list = refArray(mia)

exports.api = loader({
    testMSG: ['void', []],                          //void testMSG();
    testInt: ['int', ['int', 'int']],               //int testInt(int a, int b);
    testIntPnt: ['int', ['int *']],                 //int testIntPnt(int * a);
    testBool: ['bool', ['int']],                    //bool testBool(int s);
    testString: ['string', ['string', 'string']],   //const char* testString(const char* a, char* ref);
    testStruct: ['void', [ref.refType(mia)]],       //void testStruct(Mia* m);
    testObjArr: ['void', [mia_list]],               //void testObjArr(Mia* m);
    testCallback: ['void', ['pointer']],            //void testCallback(_callback logCallBack);
    stringTest: ['void', ['string']],
})
exports.mia = mia
exports.mia_list = mia_list


