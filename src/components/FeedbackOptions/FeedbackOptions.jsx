import PropTypes from 'prop-types';
import s from "../FeedbackOptions/FeedbackOptions.module.css"
export function FeedbackOptions({ options, onLeaveFeedback }) {
      return (
        <>
          {options.map(({value,parameter,func}) => (
           <button className={s.button} key={parameter}  type="button" onClick={()=>{onLeaveFeedback({value,parameter,func})}}>{parameter}</button>
         ))}
        </> 
    )
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      parameter:PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      func:PropTypes.func.isRequired
    })
  ),
  onLeaveFeedback:PropTypes.func.isRequired
}