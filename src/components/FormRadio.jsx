import classNames from "classnames";
import { ErrorMessage, Field } from "formik";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const FormRadio = forwardRef((props, ref) => {
  const {
    name,
    label,
    type,
    placeholder,
    autoComplete,
    options,
    children,
    ...otherProps
  } = props;

  return (
    <Field name={name}>
      {({ field }) => (
        <label className="text-primary flex flex-col text-sky-950">
          <span>{label}</span>
          <select
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            {...field}
            className={classNames(
              "relative w-64 appearance-none rounded-md border bg-gray-200 px-3 py-2 text-sky-950 placeholder-sky-950 focus:z-10 focus:border-sky-700 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            )}
            {...otherProps}
            ref={ref}
          >
            {Object.entries(options).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
          <ErrorMessage name={name} className="text-red-600" component="span" />
          <span>{children}</span>
        </label>
      )}
    </Field>
  );
});

export default FormRadio;
