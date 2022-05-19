import { useState } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notificftion } from 'components/Notification/Notification';

export function FeedbackMarup() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const parameters = [{ value:good, parameter: "good", func: setGood },
    { value:neutral, parameter: "neutral", func: setNeutral },
    { value:bad, parameter: "bad", func: setBad }];
  const handleForButton = (option) => {    
     option.func(option.value + 1)
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={parameters}
            onLeaveFeedback={handleForButton}
          />
        }
      />
      <Section
        title="Statistics"
        children={
          good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notificftion message="There is no feedback" />
          )
        }
      />
    </>
  );
}
