import * as React from 'react';
import { ActionButton, IIconProps } from 'office-ui-fabric-react';

// init icon
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

const addFriendIcon: IIconProps = { iconName: 'AddFriend' };

export const ButtonActionExample: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <ActionButton iconProps={addFriendIcon} allowDisabledFocus disabled={disabled} checked={checked}>
      Create account
    </ActionButton>
  );
};

export default ButtonActionExample;