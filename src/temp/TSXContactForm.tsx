import * as React from "react";
import { TSXBasicForm } from "./TSXBasicForm";
import { TSXBasicField } from "./TSXBasicField";

// sử dụng form dựng sẵn
// sử dụng field dựng sẵn
export const ContactForm: React.SFC = () => {
  return (
    <TSXBasicForm
      action="http://localhost:4351/api/contactus"
      render={() => (
        // Gom các component lại với nhau bằng Fragment
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information below and we'll get back to you as soon as we
            can.
          </div>
          <TSXBasicField id="name" label="Name" />
          <TSXBasicField id="email" label="Email" />
          {/* Basic field select option */}
          <TSXBasicField
            id="reason"
            label="Reason"
            editor="dropdown"
            options={["", "Marketing", "Support", "Feedback", "Jobs"]}
          />
          <TSXBasicField id="notes" label="Notes" editor="multilinetextbox" />
        </React.Fragment>
      )}
    />
  );
};

export default ContactForm;