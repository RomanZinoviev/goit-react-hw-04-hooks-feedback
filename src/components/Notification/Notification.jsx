import PropTypes from 'prop-types';

export function Notificftion({message}) {
    return(<p style={{fontSize:30}}>{message}</p>)
};
Notificftion.propTypes = {
    message:PropTypes.string.isRequired
}
