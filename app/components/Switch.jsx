export const Switch = ({ checked, callback }) => {
  return (
    <fieldset>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={callback} />
        <span className="slider round"></span>
      </label>
      <span>Show completed items</span>
    </fieldset>
  );
};
