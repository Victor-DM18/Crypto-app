import classNames from "classnames";
import { Field, ErrorMessage } from "formik";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const FormRadio = forwardRef((props, ref) => {
  const {
    placeholder,
    children,
    className,
    autocomplete,
    label,
    type,
    name,
    ...otherProps
  } = props;

  return (
    <Field name={name}>
      {({ field }) => (
        <label
          className={classNames(
            { "text-primary flex flex-col text-sky-950": type !== "radio" },
            className
          )}
        >
          {type === "radio" ? null : <span>{children}</span>}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autocomplete}
            {...field}
            className={classNames(
              {
                "relative w-64 appearance-none rounded-md border bg-gray-200 px-3 py-2 text-sky-950 placeholder-sky-950 focus:z-10 focus:border-sky-700 focus:outline-none focus:ring-sky-500 sm:text-sm":
                  type !== "radio",
              },
              { hidden: type === "radio" }
            )}
            {...otherProps}
            ref={ref}
          />
          {label}

          {type !== "radio" ? null : <span>{children}</span>}
          <ErrorMessage name={name} className="text-red-600" component="span" />
        </label>
      )}
    </Field>
  );
});

export default FormRadio;
