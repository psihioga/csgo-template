import { Chat } from "../components/chat/Chat";
import { Board } from "../components/board/Board";

export default function Main() {
  return (
    <div className="flex p-6">
      <Board />      
      <Chat />
    </div>
  );
}
