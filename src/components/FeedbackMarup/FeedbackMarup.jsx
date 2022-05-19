import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notificftion } from "components/Notification/Notification";

export class FeedbackMarup extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleForButton = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const param = Object.keys(this.state);    
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={param}
              onLeaveFeedback={this.handleForButton}
            />
          }
        />
        <Section
          title="Statistics"
          children={good||neutral||bad?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />:<Notificftion message="There is no feedback"/>
          }
        />
      </>
    );
  }
}
