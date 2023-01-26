package com.marceloserpa.foo.kafka;


import org.apache.kafka.clients.admin.AdminClientConfig;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.KafkaAdmin;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class KafkaTopicConfig {

    @Bean
    public KafkaAdmin kafkaAdmin() {
        String bootstrapServer = System.getenv("BOOTSTRAP_SERVERS_CONFIG");
        Map<String, Object> configs = new HashMap<>();
        configs.put(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServer);
        return new KafkaAdmin(configs);
    }

    @Bean
    public NewTopic topic1() {
        String topic = System.getenv("POC_TOPIC");
        int numberOfPartitions = Integer.valueOf(System.getenv("POC_TOPIC_PARTITIONS"));

        return new NewTopic(topic, numberOfPartitions, (short) 1);
    }

}
