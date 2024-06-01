import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(), //makes sure email is a valid email, better than reg exp, throws good error msgs
  password: z.string().min(8), //makes sure the string is at least 8 chars
});

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { email: "test@gmail.com" },
    resolver: zodResolver(schema), //connect the schema to react hook form - using the zod resolver
  });
  //defaultValues -> put a default value that we choose inside of an input, good for EDITING
  //isSubmitting -> isLoading
  // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //submitting the form
  const onSubmit = async (data) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      // throw new Error(); // creating an error on purpose
      console.log(data); //in real time we cant log the password - has to be secured
    } catch (error) {
      setError("root", { message: "This email is already taken" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded-lg flex flex-col max-w-56 mx-auto  p-4"
    >
      <label htmlFor="email">Email</label>
      <input
        {...register("email")}
        className="p-2 bg-gray-100 rounded-md"
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <label htmlFor="password">Password</label>
      <input
        {...register("password")}
        className="p-2 bg-gray-100 rounded-md "
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-indigo-500 p-2 rounded-lg text-white font-semibold mt-4"
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;

{
  /* <input
{...register("password", {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password must have at least 8 chars",
  },
})}
className="p-2 bg-gray-100 rounded-md "
type="password"
placeholder="Password"
/>
{errors.password && (
<div className="text-red-500">{errors.password.message}</div>
)} */
}
