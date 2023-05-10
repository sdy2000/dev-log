import React from "react";
import { Aside, TopicButton } from "../../components";
import {
  IoAccessibilityOutline,
  IoRocketOutline,
  IoServerOutline,
} from "react-icons/io5";

const Topics = () => {
  return (
    <Aside title={"Topics"}>
      <div>
        <TopicButton
          topicName={"Database"}
          topicIcon={<IoServerOutline />}
          href="/blog/MongoDB"
        />
        <TopicButton
          topicName={"Accessibility"}
          topicIcon={<IoAccessibilityOutline />}
          href="/blog/Time-out"
        />
        <TopicButton
          topicName={"Web Performance"}
          topicIcon={<IoRocketOutline />}
          href="/blog/coding"
        />
      </div>
    </Aside>
  );
};

export default Topics;
