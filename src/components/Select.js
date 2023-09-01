function Select({ value, onChange, options }) {
    const changeOption = (e) => onChange(e.target.value);
    return (
      <select value={value} onChange={changeOption}>
        {options?.map((option) => {
          return (
            <option key={option.label} value={option.label}>
              {option.label} {option.value}
            </option>
          );
        })}
      </select>
    );
  }
 export default Select  