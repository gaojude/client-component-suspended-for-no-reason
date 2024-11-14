import { Suspense } from "react";
import TrivialClientComponent from "./TrivialClientComponent";

export default function ChatPage() {
  return (
    <Suspense fallback={<ErrorC />}>
      <TrivialClientComponent />
    </Suspense>
  );
}

const ErrorC = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
      }}
    ></div>
  );
};
