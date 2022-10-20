import PropTypes from 'prop-types';

import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import { Text, Button, Wraper } from './ContactItem.styled';
import { ProgressBar } from 'react-loader-spinner';

export function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <Wraper>
        <Text>{name}:</Text>
        <Text>{number}</Text>
      </Wraper>

      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        {isLoading ? (
          <ProgressBar
            height="60"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="red"
            barColor="#ffff"
          />
        ) : (
          'Delete'
        )}
      </Button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
