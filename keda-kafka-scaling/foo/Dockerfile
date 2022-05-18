FROM openjdk:11
RUN mkdir /app
COPY ./build/libs/foo-0.0.1-SNAPSHOT.jar /app/foo-0.0.1-SNAPSHOT.jar
WORKDIR /app
CMD "java" "-jar" "foo-0.0.1-SNAPSHOT.jar"