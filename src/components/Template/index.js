import { useState } from 'react';
import './index.css';

const TemplatePage = () => {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [templateList, setTemplateList] = useState([]);

  const onChangeName = event => setName(event.target.value);
  const onChangeRegion = event => setRegion(event.target.value);

  const onSubmitForm = event => {
    event.preventDefault();

    const user = { name, region };
    setTemplateList(prevState => [...prevState, user]);

  
    setName('');
    setRegion('');
  };

  return (
    <div className="main-container-template">
      <h1>Create Template</h1>
      <hr />

      <form onSubmit={onSubmitForm} className="template-form">
        <div className="input-fields">
          <label className="labels" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="UK-MHRA-01"
            value={name}
            onChange={onChangeName}
          />
        </div>

        <div className="input-fields">
          <label className="labels" htmlFor="region">Region</label>
          <select
            id="region"
            value={region}
            onChange={onChangeRegion}
          >
            <option value="">Select</option>
            <option>UK</option>
            <option>USA</option>
            <option>Europe</option>
            <option>India</option>
          </select>
        </div>

        <button className="create-structure-btn" type="submit">
          Create Structure
        </button>
      </form>

      {templateList.length > 0 ? (
        <div>
          {templateList.map((each, index) => (
            <p key={index}>{each.name}</p>
          ))}
        </div>
      ):(<img src="add-folder 2.png" alt="not"/>)}
    </div>
  );
};

export default TemplatePage;
