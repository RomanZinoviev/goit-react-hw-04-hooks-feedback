import { FeedbackMarup } from "./FeedbackMarup/FeedbackMarup";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',        
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
        marginLeft: 50
      }}
    >
      <FeedbackMarup/>
    </div>
  );
};
