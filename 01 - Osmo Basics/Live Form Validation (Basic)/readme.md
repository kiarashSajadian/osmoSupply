Implementation
Form Parent
Add the attribute [data-form-validate] to the outer container of your form. This is usually the parent element of the <form> element. This attribute signals the validation script where to look for form fields that need validation.

Form Element
Ensure the actual <form> element resides inside the container with [data-form-validate]. This is required for detecting form-level events such as “Enter” key presses.

Field Group
Add [data-validate] to each field group. A field group typically includes a <label> and its corresponding <input> or <textarea> element. Each group must have the [data-validate] attribute to enable validation.

Field Validation Rules
Input min and max
Use the attributes [min="3"] and/or [max="12"] with [data-validate] to define the minimum and maximum character limits for a field. These limits ensure that users enter values of appropriate lengths.

Email
No additional attributes are required for email validation. Email fields are automatically validated to ensure the entered address is in the correct format.

Additional Features
Validation Classes
The following classes are dynamically added or removed based on the validation state of a field:

Class .is--error — Applied when the field fails validation.
Class .is--success — Applied when the field passes validation.
Class .is--filled — Applied when the user has entered a value into the field.
Anti-Spam Protection
To minimize spam submissions. The form includes a built-in delay mechanism. If the form is submitted in less than 5 seconds after loading, the submission will be rejected with a notification. This feature helps block bots that attempt to submit forms instantly.

Custom Submit Button
For enhanced customization:

Wrap your submit button inside an element with the [data-submit] attribute.
The actual submit button should be an <input type="submit"> inside the [data-submit] container.
The script intercepts the click event on [data-submit], validates the form, and only submits it programmatically if all fields pass validation.
Keyboard Behavior
Pressing “Enter” in any input field will trigger the form’s custom submission logic, ensuring all validations are performed before submission. This behavior is disabled for <textarea> elements to allow users to add multi-line text.

Advanced Version
Need more functionality? We also have a Live Form Validation (Advanced)
