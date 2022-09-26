---
slug: 2022-9-21
title: STL算法
tags: [algorithm]
---

### 简单STL算法

STL是算法比赛中较为常用的工具，例如栈、队列、集合的容器可以很好的化简问题。


:::tip 通用模板
    通用头文件 #include<bits/stdc++.h>
    取消输入输出流：ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
:::

### vector向量


```c++
    定义方法：vector<数据类型> 变量名 || vector<数据类型> 数组名(数组个数)

    vector的初始化：
    1、vector<int> ve(10); //ve向量中有10个整型的数据 但没有给出初始值
    2、vector<int> ve(10,1);//ve向量中有10个整型的数据，并且赋值了初始值1（全部为1）
    3、vector<int> ve1 ; vector<int> ve2(ve1);//用ve1向量来赋值ve2向量，相当于把ve1复制给ve2
    4、int a[7]={1,2,3,4,5,6,7};vector<int> ve(a,a+7);//从数组中获取初值

    对vector的重要操作：
    （1）a.assign(b.begin(), b.begin()+3); //b为向量，将b的0~2个元素构成的向量赋给a
    （2）a.assign(4,2); //是a只含4个元素，且每个元素为2
    （3）a.back(); //返回a的最后一个元素
    （4）a.front(); //返回a的第一个元素
    （5）a[i]; //返回a的第i个元素，当且仅当a[i]存在2013-12-07
    （6）a.clear(); //清空a中的元素
    （7）a.empty(); //判断a是否为空，空则返回ture,不空则返回false
    （8）a.pop_back(); //删除a向量的最后一个元素
    （9）a.erase(a.begin()+1,a.begin()+3); //删除a中第1个（从第0个算起）到第2个元素，也就是说删除的元素从a.begin()+1算起（包括它）一直到a.begin()+3（不包括它）
    （10）a.push_back(5); //在a的最后一个向量后插入一个元素，其值为5
    （11）a.insert(a.begin()+1,5); //在a的第1个元素（从第0个算起）的位置插入数值5，如a为1,2,3,4，插入元素后为1,5,2,3,4
    （12）a.insert(a.begin()+1,3,5); //在a的第1个元素（从第0个算起）的位置插入3个数，其值都为5
    （13）a.insert(a.begin()+1,b+3,b+6); //b为数组，在a的第1个元素（从第0个算起）的位置插入b的第3个元素到第5个元素（不包括b+6），如b为1,2,3,4,5,9,8，插入元素后为1,4,5,9,2,3,4,5,9,8
    （14）a.size(); //返回a中元素的个数；
    （15）a.capacity(); //返回a在内存中总共可以容纳的元素个数
    （16）a.resize(10); //将a的现有元素个数调至10个，多则删，少则补，其值随机
    （17）a.resize(10,2); //将a的现有元素个数调至10个，多则删，少则补，其值为2
    （18）a.reserve(100); //将a的容量（capacity）扩充至100，也就是说现在测试a.capacity();的时候返回值是100.这种操作只有在需要给a添加大量数据的时候才显得有意义，因为这将避免内存多次容量扩充操作（当a的容量不足时电脑会自动扩容，当然这必然降低性能） 
    （19）a.swap(b); //b为向量，将a中的元素和b中的元素进行整体性交换
    （20）a==b; //b为向量，向量的比较操作还有!=,>=,<=,>,<

    从vector中读取元素：
    1、通过下标方式读取：
    int a[6]={1,2,3,4,5,6};
    vector<int> b(a,a+4);
    for(int i=0;i<=b.size()-1;i++)
        cout<<b[i]<<" ";
    

    2、通过遍历器方式读取：
    int a[6]={1,2,3,4,5,6};
    vector<int> b(a,a+4);
    for(vector<int>::iterator it=b.begin();it!=b.end();it++)//定义遍历器
        cout<<*it<<" ";

    vector的重要用法：
    需要包含#include<algorithm>头文件

    （1）sort(a.begin(),a.end()); //对a中的从a.begin()（包括它）到a.end()（不包括它）的元素进行从小到大排列
    （2）reverse(a.begin(),a.end()); //对a中的从a.begin()（包括它）到a.end()（不包括它）的元素倒置，但不排列，如a中元素为1,3,2,4,倒置后为4,2,3,1
    （3）copy(a.begin(),a.end(),b.begin()+1); //把a中的从a.begin()（包括它）到a.end()（不包括它）的元素复制到b中，从b.begin()+1的位置（包括它）开始复制，覆盖掉原有元素
    （4）find(a.begin(),a.end(),10); //在a中的从a.begin()（包括它）到a.end()（不包括它）的元素中查找10，若存在返回其在向量中的位置
```
:::caution vector功能广泛
    vector是一种非常自由的STL容器，可以像数组一样的方式读取和改变元素值，在算法题中有重要的用途
:::
### stack栈

### queue队列 dueue优先队列等

### map映射

:::tip map
    头文件：#include<map>
    创建方式：map <typename,typename> XXX;
:::

```c++

```
### set集合和multiset多集


