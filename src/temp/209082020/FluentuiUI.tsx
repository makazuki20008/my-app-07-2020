// setup Fluent UI
// https://developer.microsoft.com/en-us/fluentui#/get-started/web
// npm install --save @fluentui/react
//
// Mahesh Haldar
// setup typescript
// https://blog.bitsrc.io/why-and-how-use-typescript-in-your-react-app-60e8987be8de
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest

import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const FluentuiUI: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton text="Standard" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
      <PrimaryButton text="Primary" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
    </Stack>
  );
};

function _alertClicked(): void {
  alert('Clicked');
}

export default FluentuiUI;