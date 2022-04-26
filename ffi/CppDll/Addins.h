#pragma once

#include <iostream>
#include <string>
#pragma warning(disable:4996)
#define ADDINDLL __declspec(dllexport)

typedef struct mia {
	char name[128];
	char description[256];
	int num;
	double pi;
}Mia;
 
using _callback = void(int);

extern "C"
{
	ADDINDLL void testMSG();
	ADDINDLL int testInt(int a, int b);
	ADDINDLL int testIntPnt(int * a);
	ADDINDLL bool testBool(int s);
	ADDINDLL const char* testString(const char* a, char* ref);
	ADDINDLL void testStruct(Mia* m);
	ADDINDLL void testObjArr(Mia* m);
	ADDINDLL void testCallback(_callback logCallBack);

	ADDINDLL void stringTest(std::string& res);
}