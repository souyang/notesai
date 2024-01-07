import { AiOutlineRobot } from "react-icons/ai";
import { useState } from "react";
import AIChatBox from "./AIChatBox";
import { Button } from "./ui/button";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)}>
        <AiOutlineRobot size={20} className="mr-2" />
        AI Note Helper
      </Button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
