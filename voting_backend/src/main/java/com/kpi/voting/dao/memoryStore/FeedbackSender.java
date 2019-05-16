package com.kpi.voting.dao.memoryStore;

public interface FeedbackSender {
    void sendFeedback(String from, String name, String feedback);
}
