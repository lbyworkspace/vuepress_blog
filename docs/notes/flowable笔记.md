---
title: flowable笔记
date: '2022-3-29'
categories:
 - 笔记
tags:
 - flowable
 - Bpmn2.0
---

::: tip
[基于该文档进行研究学习](https://tkjohn.github.io/flowable-userguide)
::: 

## Bpmn2.0结构

- `process`：一个流程的具体内容在标签内进行定义

- `Event`：事件，事件的分类有很多，可以归类为启动事件、结束事件、边界事件、捕获中间事件

  - 启动事件：

    - 空启动事件：起始点毫无作用的一个节点

    - 定时器启动事件：定时启动流程，**不需要调用API**，在部署的时候就开始计时<img src="https://workdomain.cloud/picgo/image-20220325182335454.png" alt="image-20220325182335454" style="zoom:50%;" />

    - 消息启动事件：使用具名消息启动流程实例，消息名用于选择**正确**的启动事件。

      使用`startProcessInstanceByMessage(String messageName);`启动流程实例

      <img src="https://workdomain.cloud/picgo/image-20220325183919520.png" alt="image-20220325183919520" style="zoom:50%;" />

      ```xml
      //普通启动事件声明加上messageEventDefinition子元素,并指定哪个消息名
      <definitions id="definitions"
        xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
        xmlns:flowable="http://flowable.org/bpmn"
        targetNamespace="Examples"
        xmlns:tns="Examples">
      
        <message id="newInvoice" name="newInvoiceMessage" />
      
        <process id="invoiceProcess">
      
          <startEvent id="messageStart" >
          	<messageEventDefinition messageRef="tns:newInvoice" />
          </startEvent>
          ...
        </process>
      
      </definitions>
      ```

    - 信号启动事件：接收到某一信号时启动事件，这个信号可以是流程实例中抛出的中间事件、也可以是调用API`runtimeService.signalEventReceivedXXX方法`触发

      <img src="https://workdomain.cloud/picgo/image-20220325183857687.png" alt="image-20220325183857687" style="zoom:50%;" />

      ```xml
      //在启动事件上声明加上signalEventDefinition子元素并且指定信号名
      <signal id="theSignal" name="The Signal" />
      
      <process id="processWithSignalStart1">
        <startEvent id="theStart">
          <signalEventDefinition id="theSignalEventDefinition" signalRef="theSignal"  />
        </startEvent>
        <sequenceFlow id="flow1" sourceRef="theStart" targetRef="theTask" />
        <userTask id="theTask" name="Task in process A" />
        <sequenceFlow id="flow2" sourceRef="theTask" targetRef="theEnd" />
        <endEvent id="theEnd" />
      </process>
      ```

    - 错误启动事件：可用在子流程中，该子流程是由错误事件所触发的子流程，**不可用来启动流程实例**

      <img src="https://workdomain.cloud/picgo/image-20220326142254153.png" alt="image-20220326142254153" style="zoom:50%;" />

  - 结束事件：标记流程或者子流程中一个分支的结束，会抛出一个结果，结果类型有子元素所决定

    - 空结束事件：无结果的结束

      <img src="https://workdomain.cloud/picgo/image-20220326141611772.png" alt="image-20220326141611772" style="zoom:50%;" />

    - 错误结束事件：结束当前流程，并抛出一个错误

      <img src="https://workdomain.cloud/picgo/image-20220326141557194.png" alt="image-20220326141557194" style="zoom:50%;" />

    - 终止结束事件：当执行到终止结束事件时，无论该终止结束事件在流程、子流程或者嵌套子流程中，都会结束整个流程

      <img src="https://workdomain.cloud/picgo/image-20220326141544001.png" alt="image-20220326141544001" style="zoom:50%;" />

    - 取消结束事件：当到达取消结束事件时，会抛出取消事件，且必须由**取消边界事件**捕获。取消边界事件将取消事务，并触发**补偿边界事件**中所指定的补偿处理器。

  - 边界事件：当捕获到边界事件，**会停止当前活动**，并沿着边界事件的顺序流继续执行

    边界事件的分类有：

    - 定时器边界事件：定时中断当前任务，走边界事件的顺序流

      <img src="https://workdomain.cloud/picgo/image-20220326114813249.png" alt="image-20220326114813249" style="zoom:50%;" />

      定时事件又分为中断与非中断事件，即走边界事件顺序流的时候，**不终止原本的活动**，一个典型使用场景，是在一段时间之后发送提醒邮件，但不影响正常的流程流向

    - 错误边界事件：与错误结束事件一起使用，当捕获到到错误结束事件就会走错误边界事件

      <img src="https://workdomain.cloud/picgo/image-20220326122001798.png" alt="image-20220326122001798" style="zoom:50%;" />

    - 消息边界事件：当前活动捕获到与所定义的消息具有相同名称的消息时，会触发消息边界事件

      消息边界事件既可以是**中断**当前活动也可以是**不中断**当前活动的

    - 信号边界事件：当前活动捕获到与所定义的信号具有相同名称的信号时，会触发信号边界事件，与消息不一样的是，**信号是全局的**，所有活动都能接受其信号

    - 补偿边界事件：与**取消边界事件**一起使用，当活动被取消时，会进入补偿边界事件所指定的补偿处理器中

      <img src="https://workdomain.cloud/picgo/image-20220326124519947.png" alt="image-20220326124519947" style="zoom:50%;" />

  - 捕获中间事件：捕获事件后自动沿着出口顺序流继续执行的事件

    - 定时器捕获中间事件：即指定时间后继续执行后续的活动

      <img src="https://workdomain.cloud/picgo/image-20220326130728061.png" alt="image-20220326130728061" style="zoom:50%;" />

    - 信号捕获中间事件：接收到与其定义信号相同名的信号时，自动执行后续活动

      <img src="https://workdomain.cloud/picgo/image-20220326130839637.png" alt="image-20220326130839637" style="zoom:50%;" />

    - 消息捕获中间事件：接收到与其定义消息相同名的消息时，自动执行后续活动

      <img src="https://workdomain.cloud/picgo/image-20220326131023578.png" alt="image-20220326131023578" style="zoom:50%;" />

  

- `sequenceFlow`：顺序流，用于节点之间的相连，其中属性sourceRef为连接的始节点，targetRef为连接的终节点，这两个属性不可缺少，有两种顺序流：条件顺序流、默认顺序流

  - 条件顺序流：条件顺序流中的表达式要能解析出boolean值，否则会抛出异常

    <img src="https://workdomain.cloud/picgo/image-20220325175018409.png" alt="image-20220325175018409" style="zoom:50%;" />

    ```xml
    <sequenceFlow id="flow" sourceRef="theStart" targetRef="theTask">
      <conditionExpression xsi:type="tFormalExpression">
        <![CDATA[${order.price > 100 && order.price < 250}]]>
      </conditionExpression>
    </sequenceFlow>
    ```

  - 默认顺序流：只有当没有顺序流可以选择时，才会选择默认顺序流作为出口

    <img src="https://workdomain.cloud/picgo/image-20220325175237017.png" alt="image-20220325175237017" style="zoom:50%;" />

    <img src="https://workdomain.cloud/picgo/image-20220325175317075.png" alt="image-20220325175317075" style="zoom:50%;" />

    比如上图：当条件A、B都为fasle，即可选择中间的默认顺序流作为出口

    

- `endEvent`：流程结束节点

- 网关：

  - 排他网关：选择根据各个路径的约束计算出来的第一个为true的路径

    选择根据各个路径的约束计算出来的第一个为true的路径

    ```xml
    //添加在sequenceFlow标签中
    <sequenceFlow id="flow3" sourceRef="bossApprove" targetRef="end">
    	<conditionExpression xsi:type="tFormalExpression"><![CDATA[${input=='通过'}]]></conditionExpression>
    </sequenceFlow>
    ```

    <img src="https://workdomain.cloud/picgo/image-20220325111844430.png" alt="image-20220325111844430" style="zoom:50%;" />

  - 并行网关：具有分支和汇聚的作用，可以让多条线路同时执行，但是在汇聚网关的时候，要等待连接汇聚并行网关的所有路线到达此网关才会通行

    ```xml
    <parallelGateway id="myParallelGateway" />
    ```

    <img src="https://workdomain.cloud/picgo/image-20220325111918038.png" alt="image-20220325111918038" style="zoom:50%;" />

  - 包容网关：就是排他网关和并行网关合并在一起，他会为每条计算为true的路径开辟并行执行的路径，同样具有分支和汇聚的作用

    ```xml
    <inclusiveGateway id="myInclusiveGateway" />
    ```

    <img src="https://workdomain.cloud/picgo/image-20220325111943884.png" alt="image-20220325111943884" style="zoom:50%;" />

- `userTask`：任务节点,最常用的就是用户任务

  - 可以指定任务的到期时间

    ```xml
    <userTask id="theTask" name="Important task" flowable:dueDate="${dateVariable}"/>
    ```

  - 可以指定任务的**执行人**、**候选人**、**候选组**

    ```xml
    //指定执行人为lby
    <userTask id="theTask" name="my task" flowable:assignee="lby" />
    
    //指定候选人为lby、hhh
    <userTask id="theTask" name="my task" flowable:candidateUsers="lby,hhh" />
    
    //指定候选组为development(研发部)、product(产品部)
    <userTask id="theTask" name="my task" flowable:candidateGroups="development,product" />
    
    ```

  - 可以通过任务监听器**查询数据库**指定任务执行的**执行人**、**候选人**、**候选组**

    ```java
    public class MyAssignmentHandler implements TaskListener {
    
      public void notify(DelegateTask delegateTask) {
        // 在这里调用service层查询身份信息
    
        // 然后调用如下命令：
        delegateTask.setAssignee("human");//设置办理人
        delegateTask.addCandidateUser("humans",...);//设置办理候选人
        delegateTask.addCandidateGroup("group");//设置办理候选组
      }
    
    }
    ```

  
  - 其余任务还有如下：
  
    - 脚本任务：运行一段js脚本的任务
  
    - java服务任务：改任务主要就是调用java类的、service层等等
  
    - http任务：该任务主要是发送http请求
  
    - shell任务：该任务主要是运行shell脚本
  
    - 任务监听器：只用定义在**用户任务**中使用，用于执行**自定义的Java逻辑或表达式**
  
      ```xml
      //创建一个TaskListener接口的实现类MyTaskCreateListener
      <userTask id="myTask" name="My Task" >
        <extensionElements>
          <flowable:taskListener event="create" class="org.flowable.MyTaskCreateListener" />
        </extensionElements>
      </userTask>
      ```
  
      ```java
      public class MyTaskCreateListener implements TaskListener {
      
        public void notify(DelegateTask delegateTask) {
          // 这里是要实现的业务逻辑
        }
      }
      ```
  
    - 执行监听器：用于监听流程执行到某一处地方执行**外部Java代码或计算表达式**。
  
      ```xml
      //在想监听的节点标签内加上该标签
      <extensionElements>
          <flowable:executionListener
            class="org.flowable.examples.bpmn.executionlistener.ExampleExecutionListenerOne"
            event="start" />
      </extensionElements>
      ```
  
      ```java
      //实现ExecutionListener接口
      public class ExampleExecutionListenerOne implements ExecutionListener {
      
        public void notify(ExecutionListenerExecution execution) throws Exception {
         	
        }
      }
      ```
  
      

- 流程启动认证

  默认情况下，任何人都可以启动已部署流程定义的新流程实例，但可以使用启动认证限制某些流程定义只有**部分用户**或者组可以启动

  ```xml
  <process id="myProcess" flowable:candidateStarterUsers="user1, user2"
       flowable:candidateStarterGroups="group1">
      ...
  </process>
  ```



## 导入依赖

```xml
<dependencies>
  <!-- 官方依赖 -->
  <dependency>
    <groupId>org.flowable</groupId>
    <artifactId>flowable-engine</artifactId>
    <version>6.3.0</version>
  </dependency>
  
  <!-- 集成spring，对于spring容器很友好，与上面的依赖二选一
	这个依赖已经自动装配各个service的bean，例如repositoryService、taskService等等 -->
  <dependency>
    <groupId>org.flowable</groupId>
    <artifactId>flowable-spring-boot-starter</artifactId>
    <version>6.6.0</version>
  </dependency>
 
  <!-- mysql依赖 -->
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
  </dependency>
  
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
</dependencies>
```



## 创建流程引擎

有两种方式创建

- 通过spring容器创建ProcessEngine实例

  **默认会读取application.yml中的数据库配置来进行初始化**，如果要自定义流程引擎，则要实现`EngineConfigurationConfigurer`接口，重写configure方法，通过链式编程的方式进行自定义配置

  ```java
  @Configuration
  public class FlowAbleConfig implements EngineConfigurationConfigurer<SpringProcessEngineConfiguration> {
  
      @Override
      public void configure(SpringProcessEngineConfiguration springProcessEngineConfiguration) {
          springProcessEngineConfiguration
                  .setJdbcDriver("")
                  .setJdbcUsername("")
                  .setJdbcPassword("")
                  .setJdbcUrl("");
      }
  }
  ```

- 通过启动时读取xml文件进行实例化

  在resources目录下创建flowable.cfg.xml文件

  ```xml
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
  
    <bean id="processEngineConfiguration" class="org.flowable.engine.impl.cfg.StandaloneProcessEngineConfiguration">
  
      <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/flowable" />
      <property name="jdbcDriver" value="com.mysql.cj.jdbc.Driver" />
      <property name="jdbcUsername" value="root" />
      <property name="jdbcPassword" value="lby20010429" />
      <property name="databaseSchemaUpdate" value="true" />
    </bean>
  
  </beans>
  ```

  获取流程引擎

  ```java
  ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
  ```

  我推荐使用第一种方案获取流程引擎

  

## 数据库的创建

应用启动会自动检测数据库中表的完整性，如有不完整会自动创建缺少的表，一共是79张表

<img src="https://workdomain.cloud/picgo/image-20220325112124912.png" alt="image-20220325112124912" style="zoom:50%;" />

重点关注以下开头的表

- `act_re_*`：re代表repository，这类表一般存放静态资源，如流程的定义以及流程图片的存储
- `act_ru_*`：ru代表runtime，这类表一般存储流程实例、任务、变量等，一旦流程结束会清空记录
- `act_hi_*`：hi代表history，这类表储存已完成流程实例的数据，也就是上面删除的数据



## 流程定义

1. 流程定义的文件一般都是以**\*\*.bpmn20.xml**、**\*\*.bpmn**结尾

2. 流程定义的文件要放在resources目录下的processes文件夹中，应用启动时会自动部署该文件夹下的流程
3. 一个流程定义文件可以定义多个流程，也可以定义一个流程(**推荐一个文件定义一个流程定义**)，以`<process></process>`标签中的id区分一个文件不同流程

以下为一个**简单**的假期流程定义文件

<img src="https://workdomain.cloud/picgo/image-20220325135504215.png" alt="image-20220325135504215" style="zoom:50%;" />

```xml
<definitions id="definitions"
  targetNamespace="http://flowable.org/bpmn20"
  xmlns:flowable="http://flowable.org/bpmn"
  xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL">

    <process id="myProcess" name="申请假期流程">
			
      <startEvent id="start" />

      <sequenceFlow id="flow1" sourceRef="start" targetRef="userApply" />

      <userTask id="userApply" name="用户申请" flowable:assignee="${taskUser}"></userTask>

      <sequenceFlow id="flow2" sourceRef="userApply" targetRef="bossApprove" />

      <userTask id="bossApprove" name="老板审批" ></userTask>

      <sequenceFlow id="flow3" sourceRef="bossApprove" targetRef="end">
      	<conditionExpression xsi:type="tFormalExpression"><![CDATA[${input=='通过'}]]></conditionExpression>
      </sequenceFlow>
      
      <endEvent id="end" />

    </process>

</definitions>
```

## 流程部署

流程部署将使用`repositoryService`进行部署

```java
//手动启动指定bpmn文件的流程
Deployment deployment = repositoryService.createDeployment()
  .addClasspathResource("applyHoliday.bpmn20.xml")
  .deploy();

//自动启动流程的话，则要吧bpmn文件放在resources目录下的processes文件夹下，应用启动时自动部署最新版本的流程文件
```

## 启动流程实例

启动流程将使用`runtimeService`进行启动

```java
@GetMapping("/apply/{username}")
public ResponseEntity applyProcess(@PathVariable String username){
  Map params = new HashMap<>();
  params.put("username",username);
  ProcessInstance myProcess = runtimeService.startProcessInstanceByKey("myProcess",params);
  return ResponseEntity.ok("流程启动成功,流程实例Id为"+myProcess.getId());
}
```

<img src="https://workdomain.cloud/picgo/image-20220325124125811.png" alt="image-20220325124125811" style="zoom:50%;" />

## 查看用户任务

```java
@GetMapping("/queryTask/{username}")
public ResponseEntity queryTask(@PathVariable String username){
List<Task> list = taskService.createTaskQuery().taskAssignee(username).orderByTaskCreateTime().desc().list();
  return ResponseEntity.ok(list.toString());
}
```

<img src="https://workdomain.cloud/picgo/image-20220325124324215.png" alt="image-20220325124324215" style="zoom:50%;" />

## 审核任务

```java
@GetMapping("/verifyApply/{taskId}/{selected}")
public ResponseEntity verifyApply(@PathVariable String taskId,@PathVariable Boolean selected){
  Map params = new HashMap<>();
  params.put("input",selected?"通过":"不通过");
  taskService.complete(taskId,params);
  return ResponseEntity.ok("流程处理完成");
}
```

<img src="https://workdomain.cloud/picgo/image-20220325124443394.png" alt="image-20220325124443394" style="zoom:50%;" />

## 再次查看用户任务

<img src="https://workdomain.cloud/picgo/image-20220325124520731.png" alt="image-20220325124520731" style="zoom:50%;" />