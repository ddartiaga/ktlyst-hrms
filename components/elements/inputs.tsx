import clsx from "clsx";

type BaseInputAttr = {
  id?: string;
  name?: string;
  label: string;
  floatingLabel?: boolean;
};

const InputSelectWithLabel = ({
  id,
  name,
  items,
  label,
  floatingLabel = false,
}: BaseInputAttr & {
  items: { text: string; value: string; isSelected: boolean }[];
}) => {
  // Get the default value from the items
  const defaultValue =
    items.find((opt) => opt.isSelected)?.value ?? items[0]?.value;

  return (
    <div className={clsx("mb-3", floatingLabel && "form-floating")}>
      {!floatingLabel && (
        <label htmlFor={id} className="form-label fs-12 text-primary">
          {label}
        </label>
      )}
      <select 
        id={id}
        name={name}
        className="form-select"
        aria-label={label}
        defaultValue={defaultValue}
      >
        {items.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
      {floatingLabel && (
        <label htmlFor={id} className="text-primary">
          {label}
        </label>
      )}
    </div>
  );
};

const InputTextWithLabel = ({
  id,
  name,
  type,
  placeholder,
  label,
  floatingLabel = false,
}: BaseInputAttr & {
  type: string;
  placeholder: string;
}) => {
  return (
    <div className={clsx("mb-3", floatingLabel && "form-floating")}>
      {!floatingLabel && (
        <label htmlFor={id} className="form-label fs-12 text-primary">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        className="form-control"
        placeholder={placeholder}
      />
      {floatingLabel && (
        <label htmlFor={id} className="text-primary">
          {label}
        </label>
      )}
    </div>
  );
};

export { InputSelectWithLabel, InputTextWithLabel };
