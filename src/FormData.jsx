import React, { useState } from 'react'
import axios from 'axios';
import { store } from './store'
import UserData from "./UserData";

export default function Form() {
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [gender, setGender] = useState('')
  const [skills, setSkills] = useState([])
  const [data, setData] = useState(store.getState().msgs)

  return (
    <div className="sub__app">

      <main className='fd' style={{ width: '40%', borderRight: '3px solid #00e99b' }}>
        <div className="form__data__main">
          <div className="name">
            <p>Name</p>
            <input type="text" value={name} onChange={(e) => {
              setName(e.target.value)
            }} />
          </div>
          <div className="email">
            <p>Email</p>
            <input type="email" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} />
          </div>
          <div className="website">
            <p>Website</p>
            <input type="text" value={website} onChange={(e) => {
              setWebsite(e.target.value)
            }} />
          </div>
          <div className="image">
            <p>Image</p>
            <input type="file" accept="image/*" name="image" id="file" style={{ display: 'none' }} onChange={async (e) => {
              const url = e.target.files[0];
              const formData = new FormData();
              formData.append('file', e.target.files[0]);
              formData.append('upload_preset', 'nb6tvi1b');

              axios
                .post(
                  'https://api.cloudinary.com/v1_1/ddvajyjou/image/upload',
                  formData
                )
                .then(async response => {
                  setImg(response.data.secure_url);
                });
            }} />
            <label id="sup" for="file" style={{ cursor: 'pointer' }}>Click to add image</label>
          </div>

          <div className="gender">
            <p>Gender</p>
            <div className="genders">
              <span><input type="radio" name="gen" id='male' value={gender} onChange={(e) => {
                setGender('Male')
              }} />Male</span>
              <span><input type="radio" name="gen" id='female' value={gender} required onChange={(e) => {
                setGender('Female')
              }} />Female</span>
            </div>
          </div>
          <div className="skills">
            <p>Skills</p>
            <div className="skills__main">
              <span><input type="checkbox" id='java' value="Java" onChange={(e) => {
                if (e.target.checked == true && skills.includes(e.target.value) == false) {
                  setSkills(skill => [...skills, e.target.value])
                }
                if (e.target.checked == false) {
                  setSkills(skills.filter((item) => item != e.target.value))
                }
              }} />Java</span>
              <span><input type="checkbox" id='html' value="HTML" onChange={(e) => {
                if (e.target.checked == true && skills.includes(e.target.value) == false) {
                  setSkills(skill => [...skills, e.target.value])
                }
                if (e.target.checked == false) {
                  setSkills(skills.filter((item) => item != e.target.value))
                }
              }} />HTML</span>
              <span><input type="checkbox" id='css' value="CSS" onChange={(e) => {
                if (e.target.checked == true && skills.includes(e.target.value) == false) {
                  setSkills(skill => [...skills, e.target.value])
                }
                if (e.target.checked == false) {
                  setSkills(skills.filter((item) => item != e.target.value))
                }
              }} />CSS</span>
            </div>
          </div>
          <div className="btns">
            <button className="enroll" onClick={() => {
              if (name && email && website && img && gender && skills) {
                store.dispatch({
                  type: 'ADD_MSG',
                  text: { name_: name, email_: email, website_: website, image: img, gender_: gender, skills_: skills }
                })
                setData(store.getState().msgs)
              } else {
                alert('Please fill out all the fields!')
              }
            }}>Enroll Student</button>
            <button className="clear__form" onClick={() => {
              document.getElementById('male').checked = false
              document.getElementById('female').checked = false
              setSkills([])
              setName('')
              setEmail('')
              setWebsite('')
              setImg('')
              document.getElementById('java').checked = false
              document.getElementById('html').checked = false
              document.getElementById('css').checked = false
            }}>Clear</button>
          </div>
        </div>
      </main>
      <UserData studentD={data} />
    </div>

  )
}
