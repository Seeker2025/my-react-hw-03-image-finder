import PropTypes from 'prop-types';

import {
            Card
} from './ErrorMessage.styled';

export const ErrorMessage = ({ children }) =>{
    return (
        <Card>
            <div>

                <h2>Error</h2>
                <p>{ children }</p>

            </div>
        </Card>
    )
}

ErrorMessage.propTypes = {
    children: PropTypes.string.isRequired,
};