function Radio({ handleChange, value }) {
  return (
    <>
      <div className="flex items-center text-gray-700 text-sm">
        <input
          type="radio"
          id="active"
          name="status"
          value={true}
          checked={value === true}
          onChange={() => handleChange(true)}
          className="mr-2"
        />
        <label htmlFor="active" className="cursor-pointer">
          Active
        </label>

        <input
          type="radio"
          id="inactive"
          name="status"
          value={false}
          checked={value === false}
          onChange={() => handleChange(false)}
          className="ml-4 mr-2"
        />
        <label htmlFor="inactive" className="cursor-pointer">
          Inactive
        </label>
      </div>
    </>
  );
}

export default Radio;
