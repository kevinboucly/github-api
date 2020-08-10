import React from 'react';
import { Message as MessageSemanticUi} from 'semantic-ui-react';
import propTypes from 'prop-types';

const Message = ({ sentence, hasError }) => (
  <MessageSemanticUi error={hasError}>
    {sentence}
  </MessageSemanticUi>
);

Message.propTypes = {
  sentence: propTypes.string.isRequired,
  hasError: propTypes.bool,
};

Message.defaultProps = {
  hasError: false,
};
export default Message;
