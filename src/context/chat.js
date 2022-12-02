import ChatBot from "react-simple-chatbot";

export default function Chat() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website We Hope you are fine",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Maps",
          label: "Maps",
          trigger: "Maps",
        },
        { value: "data", label: "data", trigger: "data" },
      ],
    },
    {
      id: "Maps",
      message: "thanks for choosing maps we will guide you through your nearby services",
      end: true,
    },
    {
      id: "data",
      message: "Thanks for data option we will guide you through your personal information",
      end: true,
    },
  ];
  return (
    <div className="ml=75 d-block">
        <ChatBot steps={steps} styles={{ position: "fixed", left: "100px" }} />
    </div>
  );
}