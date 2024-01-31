import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSignUp from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signUp, isLoading } = useSignUp();
  const onSubmit = ({ fullName, email, password }) => {
    signUp(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
    return;
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow lable="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is requered" })}
        />
      </FormRow>

      <FormRow lable="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is requered",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please Provide a valid email",
            },
          })}
        />
      </FormRow>

      <FormRow
        lable="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is requered",
            minLength: {
              value: 8,
              message: "Password needs a minimun of 8 character",
            },
          })}
        />
      </FormRow>

      <FormRow lable="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is requered",
            validate: (value) =>
              value === getValues().password ||
              "Confirm-Password is need to match with Password",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
