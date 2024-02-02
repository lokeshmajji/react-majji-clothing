import "./form-input.styles.js";
import { Group, FormInputLabel, Input } from "./form-input.styles.js";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      <FormInputLabel
        shrink={otherProps.value.length}
      >
        {label}
      </FormInputLabel>
    </Group>
  );
};
export default FormInput;
