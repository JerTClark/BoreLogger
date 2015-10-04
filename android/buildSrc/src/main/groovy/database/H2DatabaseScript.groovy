package jer.buildsrc.database

import org.gradle.api.DefaultTask
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.TaskAction
import org.h2.tools.Server

class H2DatabaseStarter extends DefaultTask {
    @Input
    Integer tcpPort
    @Input
    Integer blockMs

    @TaskAction
    void start() {
        new Thread(new H2Server(tcpPort)).start();
        Thread.sleep(blockMs);
    }

    private class H2Server implements Runnable {
        final Integer tcpPort

        H2Server(Integer tcpPort) {
            this.tcpPort = tcpPort
        }

        @Override
        void run() {
            Server.main('-tcp', '-tcpPort', tcpPort.toString())
        }
    }
}