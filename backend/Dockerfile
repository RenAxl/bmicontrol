FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD ./target/bmicontrol-0.0.1-SNAPSHOT.jar bmicontroldev.jar
ENTRYPOINT ["java","-jar","/bmicontroldev.jar"]