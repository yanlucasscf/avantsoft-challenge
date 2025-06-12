import { Field, FieldRequiredIndicator, Input } from "@chakra-ui/react";

export default function InputField({
    type,
    label,
    placeholder,
    name,
    required,
    handleChangeForm,
    value,
}) {
    return (
        <Field.Root required>
            <Field.Label color="blackAlpha.800">
                {label} {required && <FieldRequiredIndicator />}
            </Field.Label>
            <Input
                type={type}
                color="blackAlpha.800"
                placeholder={placeholder}
                name={name}
                width="sm"
                mb={2}
                value={value}
                onChange={handleChangeForm}
            />
            <Field.ErrorText>This field is required</Field.ErrorText>
        </Field.Root>
    );
}
