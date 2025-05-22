const CountryModal = () => {
  return (
    <div
      className="modal fade"
      id="countryModal"
      tabIndex={-1}
      aria-labelledby="countryModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body p-4">
            <label className="form-label fs-16">Select Location</label>
            <select className="form-control choices-images">
              <option value="1">Asia</option>
              <option value="2">Europe</option>
            </select>
            <label className="form-label fs-16">Select Language</label>
            <select className="form-control" data-trigger="">
              <option value={1}>English (En)</option>
              <option value={2}>Española (ES)</option>
              <option value={3}>Français (FR)</option>
              <option value={4}>Deutsch (DE)</option>
              <option value={5}>Italiana (IT)</option>
              <option value={6}>Русский (RU)</option>
              <option value={7}>عربي (AR)</option>
              <option value={8}>한국인 (KO)</option>
            </select>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary-light"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryModal;
