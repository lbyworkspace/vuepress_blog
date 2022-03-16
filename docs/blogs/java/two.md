---
title: Redis 应用问题解决
date: '2022-3-5'
sidebar: 'auto'
categories:
 - 系列教程
tags:
 - Redis
---

## Redis 应用问题解决
### 依赖注入

```java
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

## Redis 应用问题解决
### 配置redis序列化

```java
@Configuration
public class RedisConfig {

    @Bean
    @SuppressWarnings("all")
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory factory) {

        RedisTemplate<String, Object> template = new RedisTemplate<String, Object>();
        template.setConnectionFactory(factory);

        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);
        ObjectMapper om = new ObjectMapper();
        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jackson2JsonRedisSerializer.setObjectMapper(om);

        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();

        // key采用String的序列化方式
        template.setKeySerializer(stringRedisSerializer);

        // hash的key也采用String的序列化方式
        template.setHashKeySerializer(stringRedisSerializer);

        // value序列化方式采用jackson
        template.setValueSerializer(jackson2JsonRedisSerializer);

        // hash的value序列化方式采用jackson
        template.setHashValueSerializer(jackson2JsonRedisSerializer);
        template.afterPropertiesSet();

        return template;
    }


}
```

### @Cacheable、@CachePut、@CacheEvict三个核心注解的使用

@Cacheable和@CachePut大致一样，不同的是cacheable是每次执行都会查询缓存cache中是否存在相同的key值，如果查询则不会执行改方法，如果不存在，则执行该方法且把返回值写入缓存中。**而cacheput是每次都会执行该方法，且把返回值写入缓存中翻盖旧缓存**



