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
          value: "Order",
          label: "Order",
          trigger: "Order",
        },
        { value: "Delivery", label: "Delivery", trigger: "Delivery" },
      ],
    },
    {
      id: "Order",
      message: "thanks for choosing Orders we will guide you through your Order services",
      end: true,
    },
    {
      id: "Delivery",
      message: "Thanks for choosing Delivery option we will guide you through your Order delivery information",
      end: true,
    },
  ];
  return (
    <div className="ml=75 d-block">
        <ChatBot steps={steps} styles={{  right: "200px" }} />
    </div>
  );
}