# mock server 的数据库

数据结构是：

``` javascript
[
  {
    name: 'storage',
    description: '一个配置文件',
    createTime: '2017-11-11',
    mock:[
      {
        api:'/list',
        description: '一个接口',
        createTime:'2017-11-11',
        mockString: '{....}'
      },
      {
        api:'/list',
        description: '一个接口',
        createTime:'2017-11-11',
        mockString: '{....}'
      }
    ]
  }
]
```