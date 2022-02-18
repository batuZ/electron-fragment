#include "pch.h"
#include "Addins.h"

void testMSG()
{
	MessageBox(NULL, (wchar_t*)"从C++发出了一条消息", (wchar_t*)"message", MB_OK);
}

int testInt(int a, int b)
{
	return	(a + b);
}

int testIntPnt(int* a)
{
	int res = (*a * *a);
	*a = (*a + 100);
	return res;
}

bool testBool(int s)
{
	return s == 12;
}

const char* testString(const char* a, char* ref)
{
	strcpy(ref, "fffff");
	return a;
}

void testStruct(Mia* m)
{
	strcpy(m->description, "fdsafdsafdsafds");
	strcpy(m->name, "name");
	m->num = 44;
	m->pi = 3.14;
}

void testObjArr(Mia* m)
{
	Mia arr[3];
	arr[0].num = 11;
	strcpy(arr[0].name, "aaaa1");
	arr[1].num = 22;
	strcpy(arr[1].name, "aaaa2");
	arr[2].num = 33;
	strcpy(arr[2].name, "aaaa3");
	*m = arr[0];
}

void testCallback(_callback logCallBack)
{
	logCallBack(3);
}
