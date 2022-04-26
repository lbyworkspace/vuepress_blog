---
title: Hyperledger Fabric 基于Node.js的源码学习
date: '2022-4-26'
categories:
 - 笔记
tags:
 - Hyperledger Fabric
 - node.js
 - 区块链
---

::: tip
[基于该文档进行研究学习](https://hyperledger-fabric.readthedocs.io/en/latest/whatis.html)
::: 

## 技术要求
- 区块链的核心思想
- 扎实的js功底
- ts阅读fabric源码
- docker以及docker compose的使用
- shell脚本的使用

## 环境要求
- node
- docker
- 科学上网下载fabric binary二进制文件(国内网络下载要下一年，中途还可能失败重新下)

## 开始
### 读取bootstrap.sh脚本
[官方文档可得知](https://hyperledger-fabric.readthedocs.io/en/latest/install.html)
![image-20220426130759130](https://workdomain.cloud/picgo/image-20220426130759130.png)
```sh
# 官方提供的bootstrap.sh脚本
curl -sSL https://bit.ly/2ysbOFE | bash -s
# 但由于网络特别操蛋，这个网络我们是进不去的
# 我们可以进这个页面https://github.com/hyperledger/fabric/blob/main/scripts/bootstrap.sh，把脚本复制粘贴到本地
# 在bootstrap.sh脚本的当前目录的终端输入cat ./bootstrap.sh | bash -s 运行脚本
```
### 了解bootstrap.sh脚本作用
打开脚本可以看到几个关键函数
- `cloneSamplesRepo()`:克隆fabric官方例子
- `pullBinaries()`:拉取二进制文件
- `pullDockerImages()`:拉取docker官方镜像
![image-20220426131635273](https://workdomain.cloud/picgo/image-20220426131635273.png)
![image-20220426131938502](https://workdomain.cloud/picgo/image-20220426131938502.png)
![image-20220426131959804](https://workdomain.cloud/picgo/image-20220426131959804.png)

## 启动fabric网络
官方文档是基于test-network目录下进行学习与研究的<br>
但是本篇文章是基于Node SDK的研究与学习,主要学习目录是**fabcar**的一个例子，主要是用fabric网络记录汽车的所有信息<br>
所以感兴趣或者是刚开始学习都要先跟着官方文档走<br>
<br>
在fabcar目录下可以看到有两个shell脚本文件,我们可以点击查看具体是干什么的<br>
![image-20220426132816266](https://workdomain.cloud/picgo/image-20220426132816266.png)
### startFabric.sh
![image-20220426133644492](https://workdomain.cloud/picgo/image-20220426133644492.png)
### networkDown.sh
![image-20220426133905334](https://workdomain.cloud/picgo/image-20220426133905334.png)

```sh
# 在fabcar目录下输入，启动网络，并部署对应合约
./startFabric.sh
```

## 用node来调用智能合约
启动部署成功之后，终端会打印对应语言的SDK使用方式<br>
我们选择使用的是js脚本语言，所以只看**javascript**的<br>
我们要根据打印的信息一步一步来<br>
- `cd javascript`
- `npm install`
- `node enrollAdmin`
- `node registerUser`
- `node invoke`
- `node query`
![image-20220426134648271](https://workdomain.cloud/picgo/image-20220426134648271.png)

## 调用结果
调用`invoke.js`,可以看到交易提交成功
![image-20220426135245293](https://workdomain.cloud/picgo/image-20220426135245293.png)
调用`query.js`,可以看到他返回了所有汽车的记录数据
![image-20220426135426528](https://workdomain.cloud/picgo/image-20220426135426528.png)

那么想要用Node来调用fabric中的数据，那么就必须阅读fabric nodejs SDK的源码<br>
**特别蛋疼的是这个SDK没有官方文档**，只能看源码英文注释以及ts的基本功、还有对fabric的了解才能进行深入的学习<br>

## 源码学习
源码学习那当然从官方示例中的两个js文件中学习：`invoke.js`、`query.js`<br>
为了方便源码学习，在当前目录`npm install`，下载依赖
### invoke.js
**请看中文注释！请看中文注释！请看中文注释！**
```js
/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';
// 引入fabric网络模块中的网关、钱包
const { Gateway, Wallets } = require('fabric-network');
// 使用node的读取和路径模块
const fs = require('fs');
const path = require('path');

async function main() {
    try {
        // load the network configuration
        // 用路径模块读取test-network下节点的配置文件json
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        // 通过fs文件读取模块读取JSON字符串，然后转js对象
        let ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        // 通过钱包路径创建钱包对象，管理用户的身份信息
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // 检查刚刚注册的用户身份信息是否存在
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        // 创建网关，通过Node来连接区块链网络
        const gateway = new Gateway();
        // 下面会查看源码中的connenct方法
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        // 获取通道名为mychannel的通道
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        // 根据名字来获取智能合约
        const contract = network.getContract('fabcar');

        // Submit the specified transaction.
        // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
        // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR12', 'Dave')
        // 提交交易信息，形参为合约内的方法名、以及方法的入参
        // 以下是调用合约的创建汽车方法，注意这里是创建一个id为CAR13的汽车，等等查询的时候我们根据这个id来查询
        await contract.submitTransaction('createCar', 'CAR13', 'Honda', 'Accord', 'Black', 'Tom');
        console.log('Transaction has been submitted');

        // Disconnect from the gateway.
        //关闭连接
        await gateway.disconnect();

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

main();
```
![image-20220426151327183](https://workdomain.cloud/picgo/image-20220426151327183.png)
知道了合约如何调用，**那合约是什么？在哪里？**<br>
这可要追溯到我们的刚开始的**startFabric.sh脚本**中了
![image-20220426144912127](https://workdomain.cloud/picgo/image-20220426144912127.png)
根据目录返回根目录，找到/chaincode/fabcar/javascript目录
![image-20220426145124305](https://workdomain.cloud/picgo/image-20220426145124305.png)
```js
// index.js 通过index来引入
'use strict';

const FabCar = require('./lib/fabcar');

module.exports.FabCar = FabCar;
module.exports.contracts = [ FabCar ];

// fabcar.js 智能合约代码
'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {

    async initLedger(ctx) {
        console.info('============= START : Initialize Ledger ===========');
        const cars = [
            {
                color: 'blue',
                make: 'Toyota',
                model: 'Prius',
                owner: 'Tomoko',
            },
            {
                color: 'red',
                make: 'Ford',
                model: 'Mustang',
                owner: 'Brad',
            },
            {
                color: 'green',
                make: 'Hyundai',
                model: 'Tucson',
                owner: 'Jin Soo',
            },
            {
                color: 'yellow',
                make: 'Volkswagen',
                model: 'Passat',
                owner: 'Max',
            },
            {
                color: 'black',
                make: 'Tesla',
                model: 'S',
                owner: 'Adriana',
            },
            {
                color: 'purple',
                make: 'Peugeot',
                model: '205',
                owner: 'Michel',
            },
            {
                color: 'white',
                make: 'Chery',
                model: 'S22L',
                owner: 'Aarav',
            },
            {
                color: 'violet',
                make: 'Fiat',
                model: 'Punto',
                owner: 'Pari',
            },
            {
                color: 'indigo',
                make: 'Tata',
                model: 'Nano',
                owner: 'Valeria',
            },
            {
                color: 'brown',
                make: 'Holden',
                model: 'Barina',
                owner: 'Shotaro',
            },
        ];

        for (let i = 0; i < cars.length; i++) {
            cars[i].docType = 'car';
            await ctx.stub.putState('CAR' + i, Buffer.from(JSON.stringify(cars[i])));
            console.info('Added <--> ', cars[i]);
        }
        console.info('============= END : Initialize Ledger ===========');
    }

    async queryCar(ctx, carNumber) {
        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        console.log(carAsBytes.toString());
        return carAsBytes.toString();
    }

    async createCar(ctx, carNumber, make, model, color, owner) {
        console.info('============= START : Create Car ===========');

        const car = {
            color,
            docType: 'car',
            make,
            model,
            owner,
        };

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : Create Car ===========');
    }

    async queryAllCars(ctx) {
        const startKey = '';
        const endKey = '';
        const allResults = [];
        for await (const {key, value} of ctx.stub.getStateByRange(startKey, endKey)) {
            const strValue = Buffer.from(value).toString('utf8');
            let record;
            try {
                record = JSON.parse(strValue);
            } catch (err) {
                console.log(err);
                record = strValue;
            }
            allResults.push({ Key: key, Record: record });
        }
        console.info(allResults);
        return JSON.stringify(allResults);
    }

    async changeCarOwner(ctx, carNumber, newOwner) {
        console.info('============= START : changeCarOwner ===========');

        const carAsBytes = await ctx.stub.getState(carNumber); // get the car from chaincode state
        if (!carAsBytes || carAsBytes.length === 0) {
            throw new Error(`${carNumber} does not exist`);
        }
        const car = JSON.parse(carAsBytes.toString());
        car.owner = newOwner;

        await ctx.stub.putState(carNumber, Buffer.from(JSON.stringify(car)));
        console.info('============= END : changeCarOwner ===========');
    }

}

module.exports = FabCar;
```
从上述合约我们可以看到几个方法
- `queryCar`：根据id查询汽车
- `createCar`：创建汽车
- `queryAllCars`：查询所有汽车
- `changeCarOwner`：改变汽车车主信息
从合约还可以得知是继承了`Contract`类，查看`Contract`类即可获得所有如何使用合约对数据的操作的API
![image-20220426150105258](https://workdomain.cloud/picgo/image-20220426150105258.png)
![image-20220426150305820](https://workdomain.cloud/picgo/image-20220426150305820.png)
### query.js
```js
/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

// 调用的大部分都和invoke.js的差不多，就查询的哪里不一样
async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
        const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), 'wallet');
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get('appUser');
        if (!identity) {
            console.log('An identity for the user "appUser" does not exist in the wallet');
            console.log('Run the registerUser.js application before retrying');
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork('mychannel');

        // Get the contract from the network.
        const contract = network.getContract('fabcar');

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
        // 查询刚刚调用invoke创建的汽车，获取该汽车的所有信息
        const result = await contract.evaluateTransaction('queryCar', 'CAR13');
        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);

        // Disconnect from the gateway.
        await gateway.disconnect();
        
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

main();
```
查询结果：
![image-20220426150753285](https://workdomain.cloud/picgo/image-20220426150753285.png)




