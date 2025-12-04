FROM amazoncorretto:25-alpine-jdk

ARG JAR_FILE=build/libs/springboot4k8s-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]