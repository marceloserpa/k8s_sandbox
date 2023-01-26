package com.marceloserpa.foo.kafka;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Component;


@Component
public class MessageListener {


    @KafkaListener(topics = "#{systemEnvironment['POC_TOPIC']}")
    public void listen(ConsumerRecord<?, ?> consumerRecord,
                       Acknowledgment acknowledgment) throws InterruptedException {

        String message = consumerRecord.value().toString();

        Thread.sleep(1 * 1000);
        acknowledgment.acknowledge();

        System.out.println(message);
    }


}